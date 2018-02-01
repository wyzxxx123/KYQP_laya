import { PiPeiView } from './PiPeiView';
import { MViewModel } from '../../../mbase/base/MViewModel';
    /**
     * @description 匹配界面
     * @author wangyz
     * @export
     * @class PiPeiVM
     * @extends {base.MViewModel}
     */
    export class PiPeiVM extends MViewModel{

        public cancelPiPei(){
            this.sendData(16778282,[0]);
            this.closeNow();
        }

        private onCloseMe(){
            if(this.playerData.queueRoomType == 0){
                this.closeNow();
            }
        }

        protected eventInit():void{
        //    this.regist("client_HoldemAgent_enterDeck",this.onCloseMe);
           this.regist("server_Client_syncProperty_Player_queueRoomType",this.onCloseMe);
        }

        constructor(){
            super();

            this.setAtlasName = "1";
            this.setClass = PiPeiView;
        }
    }
