module mbase.base{
    export class MVMManager extends core.viewmodel.VMManager{

        //收到服务器消息才打开的界面
        protected eventInit(){
            this.regist("client_Player_onJoinGame",this.onShowRoom);
            this.regist("client_Player_openScene",this.onShowHallScene);
            this.regist("client_Player_onEnterRoomList",this.onReconnect);
            this.regist("client_Player_onJoinRoom",this.onPlayError);//准备开始玩的时候失败了
            this.regist("client_Player_onQueue",this.onEnterError);//进入房间失败
        }

        private onReconnect(){
            if(this.playerData.roomSN > 0){
                if(this.playerData.gameType == mbase.data.Player.HOLDEM){
                    this.showOther("SCENE_DZPKSceneVM",this.playerData.roomData);
                }
            }
        }

        private onEnterError(player:data.Player){
            if(player.ret != 0){
                core.CFun.dialog(core.CFun.getItem(Data.MsgData, "id", player.ret)["msg"],null,null,"确 定");

                if(player.gameType == data.Player.HOLDEM){
                    this.showOther("SCENE_scene_620");
                }
            }
        }

        private onPlayError(player:data.Player){
            if(player.ret != 0){
                core.CFun.dialog(core.CFun.getItem(Data.MsgData, "id", player.ret)["msg"],null,null,"确 定");

                if(player.gameType == data.Player.HOLDEM){
                    this.showOther("SCENE_scene_620");
                }
            }
        }

        private onShowHallScene(){
            if(this.playerData.roomSN <= 0){
                this.showOther("SCENE_HallVM");
            }
        }

        private onShowRoom(data:data.Player){
            this.showOther("SCENE_scene_" + data.gameid,data);//620\720\820
        }

        private showOther(className:string,exData?:any){
            let initData = laya.utils.Pool.getItemByClass("InitData",base.InitData);
            initData.className = className;
            initData.exData = exData;
            this.onInitAndShow(initData);
        }

        protected onInitAndShow(data:mbase.base.InitData){
            if(data.className.indexOf("SCENE_") == 0){//如果是场景则关闭所有
                this.closeAll();
            }

            super.onInitAndShow(data);
        }

        public get playerData():data.Player{
            if(!core.model.ModelManager.ins.getInstByClassName("Player")){
                core.CFun.throw("MVMManager中使用的Player数据还未初始化");
            }
            return core.model.ModelManager.ins.getInstByClassName("Player");
        }

        constructor(){super();}
    }
}