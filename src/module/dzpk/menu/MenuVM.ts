module module.dzpk.menu{
    /**
     * @description 菜单界面
     * @author wangyz
     * @export
     * @class MenuVM
     * @extends {base.MViewModel}
     */
    export class MenuVM extends mbase.base.MViewModel{

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
            // uiCore.Application.changeScene(new DZPKRoomHallSceneView());
            if (this.checkPlayerisGaming()) {
                core.CFun.dialog(core.CFun.getItem(Data.MsgData, "id", 3029)["msg"],null,null,"确 定");
            } else {
                core.CFun.dialog(core.CFun.getItem(Data.MsgData, "id", 3028)["msg"],this.quitScene,this);
            }  
        }

        //判断玩家是否在游戏中
        public checkPlayerisGaming(): boolean {
            if(!this.deckData) return false;
            var playerData = core.CFun.getItem(this._data, "rid", this.playerData["rid"]);
            if (!playerData) {
                return false;
            }
            return !this.deckData.isPlaying && !playerData.isFold;
        }
        
        public get deckData():mbase.data.HoldemDeck{
            if(!core.model.ModelManager.ins.getInstByClassName("HoldemDeck")){
                return null;
            }
            return core.model.ModelManager.ins.getInstByClassName("HoldemDeck");
        }

        public get agentkData():mbase.data.HoldemAgent{
            if(!core.model.ModelManager.ins.getInstByClassName("HoldemDeck")){
                return null;
            }
            return core.model.ModelManager.ins.getInstByClassName("HoldemDeck");
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
            
        }
    }
}