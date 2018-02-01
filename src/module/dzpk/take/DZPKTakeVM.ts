import { DZPKTakeView } from './DZPKTakeView';
import { MViewModel } from '../../../mbase/base/MViewModel';
    export class DZPKTakeVM extends MViewModel{

        private _roomInfo:any = null;
        public updataSetting(data:any){
            let player = ModelManager.ins.getInstByClassName("Player");
            laya.net.LocalStorage.setJSON(StorageKeys.DZPKTakeScore + player.lastRoomId,data);
        }

        public goToGame(){
            if(!this._roomInfo) CFun.throw("DZPKTakeVM加入的游戏不存在");
            this.closeNow();
            this.showOther("SCENE_DZPKSceneVM",this._roomInfo);
            this._roomInfo = null;
        }

        //继承的
        public onShow(recv?:any){
            super.onShow(recv);

            this._roomInfo = recv.roomInfo;
        }

        constructor(){
            super();

            this.setAtlasName = "res/atlas/dzpk/buySitDownWindow.atlas,res/atlas/dzpk/zh-cn/buySitDownWindow.atlas";
            this.setClass = DZPKTakeView;
        }
    }
