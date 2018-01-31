import { MViewModel } from '../../mbase/base/MViewModel';
import { Player } from '../../mbase/data/Player';
import { HallView } from './HallView';
import { ExUtils } from '../../core/ExUtils';
import { CFun } from '../../core/CFun';
    /**
     * @description 大厅界面
     * @author wangyz
     * @export
     * @class HallVM
     * @extends {base.MViewModel}
     */
    export class HallVM extends MViewModel{
        private onChangeSexFace(recv:Player){
            (this.view as HallView).viewInit(recv);
        }

        public gotoScene(scene:string){
            let serverid = parseInt(scene.substr(6));
            this.sendData(16778280,[serverid]);
        }

        public showAvaterChose(){
            this.showOther("avaterChose",this._data);
        }

        public showSetting(){
            this.showOther("setting");
        }

        public setFullScreen(){
            ExUtils.fullScreen();
        }

        //继承的
        protected eventInit():void{
            this.regist("server_Client_syncProperty_Player_sex",this.onChangeSexFace);
            this.regist("server_Client_syncProperty_Player_icon",this.onChangeSexFace);
            this.regist("server_Client_syncProperty_Player_gold",this.onChangeSexFace);
        }

        //继承的
        public onShow(recv?:any){
            super.onShow(this.playerData);

            this.sendData(16778274,[]);//getGameList 
            this.sendData(16778269,[Player.HALL]);//changeGameType 
            this.sendData(16778275,[]);//getGamePlayer 

            if(CFun.DEBUG){
                if(this.playerData.gold == 0){
                    this.sendData(16778278,[10000]);
                }
            }
        }

        constructor(){
            super();

            this.setAtlasName = "res/atlas/gamehall/mainScene.atlas";
            this.setViewPath = "game_hall/GameHall";
            this.setClass = HallView;
        }
    }
