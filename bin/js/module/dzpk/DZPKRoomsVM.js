define(["require", "exports", "../../mbase/base/MViewModel", "../../core/CFun", "../../StorageKeys", "../../mbase/data/Player", "./DZPKRoomsView"], function (require, exports, MViewModel_1, CFun_1, StorageKeys_1, Player_1, DZPKRoomsView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class DZPKRoomsVM extends MViewModel_1.MViewModel {
        onShowHelp() {
            this.showOther("DZPKHelpVM");
        }
        onShowRecord() {
            this.showOther("DZPKRecordVM");
        }
        backToHall() {
            this.showOther("SCENE_HallVM");
        }
        onChoseRoom(roomIndex) {
            let roomInfo = this.getRoomInfo(roomIndex);
            if (!roomInfo)
                CFun_1.CFun.throw("所选房间" + roomIndex + "不存在");
            let playerMoney = this.data.gold;
            let minMoney = roomInfo.chip;
            if (playerMoney < minMoney) {
                CFun_1.CFun.dialog("游戏币不足，匹配失败，请充值后继续游戏！", null, null, "确 定");
                return;
            }
            this.data.lastRoomId = roomInfo.id;
            let maxMoney = (roomInfo.maxchip >= playerMoney || roomInfo.maxchip == 0) ? playerMoney : roomInfo.maxchip;
            //获取本定玩家上次设置的携带筹码数量
            let storageData = CFun_1.CFun.getLSItem(StorageKeys_1.StorageKeys.DZPKTakeScore + this.data.lastRoomId, "Object");
            let takeScore = storageData.takeScore == undefined ? roomInfo.defaultTakeIn : storageData.takeScore;
            takeScore = takeScore < maxMoney ? takeScore : maxMoney;
            takeScore = takeScore == 0 ? roomInfo.defaultTakeIn : takeScore;
            takeScore = takeScore > playerMoney ? playerMoney : takeScore;
            if (storageData.isautoTakeScore == undefined) {
                storageData.isautoTakeScore = false;
            }
            let obj = { playerMoney: playerMoney, max: maxMoney, min: minMoney, take: takeScore, isAuto: storageData.isautoTakeScore, roomInfo: roomInfo };
            this.showOther("DZPKTakeVM", obj);
        }
        getRoomInfo(roomIndex) {
            let roomInfo = null;
            if (this.playerData.roomDataList[Player_1.Player.HOLDEM][roomIndex]) {
                roomInfo = this.playerData.roomDataList[Player_1.Player.HOLDEM][roomIndex];
            }
            return roomInfo;
        }
        //继承的
        onShow(recv) {
            super.onShow(this.playerData);
            this.sendData(16778269, [Player_1.Player.HOLDEM]); //changeGameType 
        }
        //继承的
        eventInit() {
            // this.regist("client_Player_onEnterRoomList",this.onSceneChange);
        }
        constructor() {
            super();
            this.setClass = DZPKRoomsView_1.DZPKRoomsView;
            this.setViewPath = "game_dzpk/DZPKRoom";
            this.setAtlasName = "res/atlas/dzpk/roomHallScene.atlas,res/atlas/dzpk/zh-cn/roomHallScene.atlas";
        }
    }
    exports.DZPKRoomsVM = DZPKRoomsVM;
});
//# sourceMappingURL=DZPKRoomsVM.js.map