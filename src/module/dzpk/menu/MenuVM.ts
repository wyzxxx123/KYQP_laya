import { HoldemDeck } from '../../../mbase/data/HoldemDeck';
import { HoldemAgent } from '../../../mbase/data/HoldemAgent';
import { MenuView } from './MenuView';
import { MViewModel } from '../../../mbase/base/MViewModel';
    /**
     * @description 菜单界面
     * @author wangyz
     * @export
     * @class MenuVM
     * @extends {base.MViewModel}
     */
    export class MenuVM extends MViewModel{

        public openCard(){
            this.closeNow();
            this.showOther("CardTypeVM");
        }

        public showSetting(){
            this.closeNow();
            this.showOther("setting");
        }

        public showRecord(){
            this.closeNow();
            this.showOther("DZPKRecordVM");
        }

        public requestOut(){
            this.closeNow();
            // uiApplication.changeScene(new DZPKRoomHallSceneView());
            if (this.checkPlayerisGaming()) {
                CFun.dialog(CFun.getItem(MsgData, "id", 3029)["msg"],null,null,"确 定");
            } else {
                CFun.dialog(CFun.getItem(MsgData, "id", 3028)["msg"],this.quitScene,this);
            }  
        }

        //判断玩家是否在游戏中
        public checkPlayerisGaming(): boolean {
            if(!this.deckData) return false;
            var playerData = CFun.getItem(this._data, "rid", this.playerData["rid"]);
            if (!playerData) {
                return false;
            }
            return !this.deckData.isPlaying && !playerData.isFold;
        }
        
        public get deckData():HoldemDeck{
            if(!ModelManager.ins.getInstByClassName("HoldemDeck")){
                return null;
            }
            return ModelManager.ins.getInstByClassName("HoldemDeck");
        }

        public get agentkData():HoldemAgent{
            if(!ModelManager.ins.getInstByClassName("HoldemDeck")){
                return null;
            }
            return ModelManager.ins.getInstByClassName("HoldemDeck");
        }

        private quitScene(name:String){
            if(name == "ok"){
                if(this.agentkData){
                    this.sendData(16778496);
                }
                
                this.showOther("SCENE_scene_620");
            }
        }

        constructor(){
            super();

            this.setAtlasName = "res/atlas/dzpk/zh-cn/font/menuPanelFont.atlas";
            this.setClass = MenuView;
            this.setViewPath = "game_dzpk/DZPKMenu";
        }
    }
