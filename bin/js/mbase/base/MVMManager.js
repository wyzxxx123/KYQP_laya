var mbase;
(function (mbase) {
    var base;
    (function (base) {
        class MVMManager extends core.viewmodel.VMManager {
            constructor() { super(); }
            //收到服务器消息才打开的界面
            eventInit() {
                this.regist("client_Player_onJoinGame", this.onShowRoom);
                this.regist("client_Player_openScene", this.onShowHallScene);
                this.regist("client_Player_onEnterRoomList", this.onReconnect);
                this.regist("client_Player_onJoinRoom", this.onPlayError); //准备开始玩的时候失败了
                this.regist("client_Player_onQueue", this.onEnterError); //进入房间失败
            }
            onReconnect() {
                if (this.playerData.roomSN > 0) {
                    if (this.playerData.gameType == mbase.data.Player.HOLDEM) {
                        this.showOther("SCENE_DZPKSceneVM", this.playerData.roomData);
                    }
                }
            }
            onEnterError(player) {
                if (player.ret != 0) {
                    core.CFun.dialog(core.CFun.getItem(Data.MsgData, "id", player.ret)["msg"], null, null, "确 定");
                    if (player.gameType == mbase.data.Player.HOLDEM) {
                        this.showOther("SCENE_scene_620");
                    }
                }
            }
            onPlayError(player) {
                if (player.ret != 0) {
                    core.CFun.dialog(core.CFun.getItem(Data.MsgData, "id", player.ret)["msg"], null, null, "确 定");
                    if (player.gameType == mbase.data.Player.HOLDEM) {
                        this.showOther("SCENE_scene_620");
                    }
                }
            }
            onShowHallScene() {
                if (this.playerData.roomSN <= 0) {
                    this.showOther("SCENE_HallVM");
                }
            }
            onShowRoom(data) {
                this.showOther("SCENE_scene_" + data.gameid, data); //620\720\820
            }
            showOther(className, exData) {
                let initData = laya.utils.Pool.getItemByClass("InitData", base.InitData);
                initData.className = className;
                initData.exData = exData;
                this.onInitAndShow(initData);
            }
            onInitAndShow(data) {
                if (data.className.indexOf("SCENE_") == 0) {
                    this.closeAll();
                }
                super.onInitAndShow(data);
            }
            get playerData() {
                if (!core.model.ModelManager.ins.getInstByClassName("Player")) {
                    core.CFun.throw("MVMManager中使用的Player数据还未初始化");
                }
                return core.model.ModelManager.ins.getInstByClassName("Player");
            }
        }
        base.MVMManager = MVMManager;
    })(base = mbase.base || (mbase.base = {}));
})(mbase || (mbase = {}));
//# sourceMappingURL=MVMManager.js.map