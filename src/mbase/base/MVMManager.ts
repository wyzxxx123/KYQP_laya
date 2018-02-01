import { Player } from '../data/Player';

export class MVMManager extends VMManager{

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
                if(this.playerData.gameType ==  StaticData.HOLDEM){
                    this.showOther("SCENE_DZPKSceneVM",this.playerData.roomData);
                }
            }
        }

        private onEnterError(player:Player){
            if(player.ret != 0){
                CFun.dialog(CFun.getItem(MsgData, "id", player.ret)["msg"],null,null,"确 定");

                if(player.gameType ==  StaticData.HOLDEM){
                    this.showOther("SCENE_scene_620");
                }
            }
        }

        private onPlayError(player:Player){
            if(player.ret != 0){
                CFun.dialog(CFun.getItem(MsgData, "id", player.ret)["msg"],null,null,"确 定");

                if(player.gameType ==  StaticData.HOLDEM){
                    this.showOther("SCENE_scene_620");
                }
            }
        }

        private onShowHallScene(){
            if(this.playerData.roomSN <= 0){
                this.showOther("SCENE_HallVM");
            }
        }

        private onShowRoom(data:Player){
            this.showOther("SCENE_scene_" + data.gameid,data);//620\720\820
        }

        private showOther(className:string,exData?:any){
            let initData = laya.utils.Pool.getItemByClass("InitData",InitData);
            initData.className = className;
            initData.exData = exData;
            this.onInitAndShow(initData);
        }

        protected onInitAndShow(data:InitData){
            if(data.className.indexOf("SCENE_") == 0){//如果是场景则关闭所有
                this.closeAll();
            }

            super.onInitAndShow(data);
        }

        public get playerData():Player{
            if(!ModelManager.ins.getInstByClassName("Player")){
                CFun.throw("MVMManager中使用的Player数据还未初始化");
            }
            return ModelManager.ins.getInstByClassName("Player");
        }

        constructor(){super();
        }
    }
