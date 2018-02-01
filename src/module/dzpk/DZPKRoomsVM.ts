import { DZPKRoomsView } from './DZPKRoomsView';
import { Player } from '../../mbase/data/Player';
import { MViewModel } from '../../mbase/base/MViewModel';
    export class DZPKRoomsVM extends MViewModel{

        public onShowHelp(){
            this.showOther("DZPKHelpVM");
        }

        public onShowRecord(){
            this.showOther("DZPKRecordVM");
        }

        public backToHall(){
            this.showOther("SCENE_HallVM");
        }

        public onChoseRoom(roomIndex:number){
            let roomInfo = this.getRoomInfo(roomIndex);
            
            if(!roomInfo) CFun.throw("所选房间" + roomIndex + "不存在");

            let playerMoney = this.data.gold;
            let minMoney = roomInfo.chip;

            if(playerMoney < minMoney) {
                CFun.dialog("游戏币不足，匹配失败，请充值后继续游戏！",null,null,"确 定");
                return;
            }

            this.data.lastRoomId = roomInfo.id;
            let maxMoney = (roomInfo.maxchip >= playerMoney || roomInfo.maxchip == 0) ? playerMoney : roomInfo.maxchip;

            //获取本定玩家上次设置的携带筹码数量
            let storageData = CFun.getLSItem(StorageKeys.DZPKTakeScore + this.data.lastRoomId, "Object");
            let takeScore = storageData.takeScore == undefined ? roomInfo.defaultTakeIn : storageData.takeScore;
            takeScore = takeScore < maxMoney ? takeScore : maxMoney;
            takeScore = takeScore == 0 ? roomInfo.defaultTakeIn : takeScore;
            takeScore = takeScore > playerMoney ? playerMoney : takeScore;

            if (storageData.isautoTakeScore == undefined) {
                storageData.isautoTakeScore = false;
            }

            let obj = {playerMoney:playerMoney,max:maxMoney,min:minMoney,take:takeScore,isAuto:storageData.isautoTakeScore,roomInfo:roomInfo};

            this.showOther("DZPKTakeVM",obj);
        }

        private getRoomInfo(roomIndex:number):any{
            let roomInfo = null;
            if(this.playerData.roomDataList[Player.HOLDEM][roomIndex]){
                roomInfo = this.playerData.roomDataList[Player.HOLDEM][roomIndex]
            }

            return roomInfo;
        }

        //继承的
        public onShow(recv?:any){
            super.onShow(this.playerData);

            this.sendData(16778269,[Player.HOLDEM]);//changeGameType 
        }

        //继承的
        protected eventInit():void{
            // this.regist("client_Player_onEnterRoomList",this.onSceneChange);
        }

        constructor(){
            super();

            this.setClass = DZPKRoomsView;
            this.setViewPath = "game_dzpk/DZPKRoom";
            this.setAtlasName = "res/atlas/dzpk/roomHallScene.atlas,res/atlas/dzpk/zh-cn/roomHallScene.atlas";
        }
    }
