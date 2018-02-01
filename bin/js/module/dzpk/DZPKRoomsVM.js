var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./DZPKRoomsView", "../../mbase/data/Player", "../../mbase/base/MViewModel"], function (require, exports, DZPKRoomsView_1, Player_1, MViewModel_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DZPKRoomsVM = /** @class */ (function (_super) {
        __extends(DZPKRoomsVM, _super);
        function DZPKRoomsVM() {
            var _this = _super.call(this) || this;
            _this.setClass = DZPKRoomsView_1.DZPKRoomsView;
            _this.setAtlasName = "res/atlas/dzpk/roomHallScene.atlas,res/atlas/dzpk/zh-cn/roomHallScene.atlas";
            return _this;
        }
        DZPKRoomsVM.prototype.onShowHelp = function () {
            this.showOther("DZPKHelpVM");
        };
        DZPKRoomsVM.prototype.onShowRecord = function () {
            this.showOther("DZPKRecordVM");
        };
        DZPKRoomsVM.prototype.backToHall = function () {
            this.showOther("SCENE_HallVM");
        };
        DZPKRoomsVM.prototype.onChoseRoom = function (roomIndex) {
            var roomInfo = this.getRoomInfo(roomIndex);
            if (!roomInfo)
                CFun.throw("所选房间" + roomIndex + "不存在");
            var playerMoney = this.data.gold;
            var minMoney = roomInfo.chip;
            if (playerMoney < minMoney) {
                CFun.dialog("游戏币不足，匹配失败，请充值后继续游戏！", null, null, "确 定");
                return;
            }
            this.data.lastRoomId = roomInfo.id;
            var maxMoney = (roomInfo.maxchip >= playerMoney || roomInfo.maxchip == 0) ? playerMoney : roomInfo.maxchip;
            //获取本定玩家上次设置的携带筹码数量
            var storageData = CFun.getLSItem(StorageKeys.DZPKTakeScore + this.data.lastRoomId, "Object");
            var takeScore = storageData.takeScore == undefined ? roomInfo.defaultTakeIn : storageData.takeScore;
            takeScore = takeScore < maxMoney ? takeScore : maxMoney;
            takeScore = takeScore == 0 ? roomInfo.defaultTakeIn : takeScore;
            takeScore = takeScore > playerMoney ? playerMoney : takeScore;
            if (storageData.isautoTakeScore == undefined) {
                storageData.isautoTakeScore = false;
            }
            var obj = { playerMoney: playerMoney, max: maxMoney, min: minMoney, take: takeScore, isAuto: storageData.isautoTakeScore, roomInfo: roomInfo };
            this.showOther("DZPKTakeVM", obj);
        };
        DZPKRoomsVM.prototype.getRoomInfo = function (roomIndex) {
            var roomInfo = null;
            if (this.playerData.roomDataList[Player_1.Player.HOLDEM][roomIndex]) {
                roomInfo = this.playerData.roomDataList[Player_1.Player.HOLDEM][roomIndex];
            }
            return roomInfo;
        };
        //继承的
        DZPKRoomsVM.prototype.onShow = function (recv) {
            _super.prototype.onShow.call(this, this.playerData);
            this.sendData(16778269, [Player_1.Player.HOLDEM]); //changeGameType 
        };
        //继承的
        DZPKRoomsVM.prototype.eventInit = function () {
            // this.regist("client_Player_onEnterRoomList",this.onSceneChange);
        };
        return DZPKRoomsVM;
    }(MViewModel_1.MViewModel));
    exports.DZPKRoomsVM = DZPKRoomsVM;
});
//# sourceMappingURL=DZPKRoomsVM.js.map