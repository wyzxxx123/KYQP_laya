define(["require", "exports", "../../core/CFun", "../../core/model/ModelManager", "../data/Player", "../../core/viewmodel/VMManager", "./InitData", "./MsgData"], function (require, exports, CFun_1, ModelManager_1, Player_1, VMManager_1, InitData_1, MsgData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class MVMManager extends VMManager_1.VMManager {
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
                if (this.playerData.gameType == Player_1.Player.HOLDEM) {
                    this.showOther("SCENE_DZPKSceneVM", this.playerData.roomData);
                }
            }
        }
        onEnterError(player) {
            if (player.ret != 0) {
                CFun_1.CFun.dialog(CFun_1.CFun.getItem(MsgData_1.MsgData, "id", player.ret)["msg"], null, null, "确 定");
                if (player.gameType == Player_1.Player.HOLDEM) {
                    this.showOther("SCENE_scene_620");
                }
            }
        }
        onPlayError(player) {
            if (player.ret != 0) {
                CFun_1.CFun.dialog(CFun_1.CFun.getItem(MsgData_1.MsgData, "id", player.ret)["msg"], null, null, "确 定");
                if (player.gameType == Player_1.Player.HOLDEM) {
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
            let initData = laya.utils.Pool.getItemByClass("InitData", InitData_1.InitData);
            initData.initclassName = className;
            initData.initexData = exData;
            this.onInitAndShow(initData);
        }
        onInitAndShow(data) {
            if (data.className.indexOf("SCENE_") == 0) {
                this.closeAll();
            }
            super.onInitAndShow(data);
        }
        get playerData() {
            if (!ModelManager_1.ModelManager.ins.getInstByClassName("Player")) {
                CFun_1.CFun.throw("MVMManager中使用的Player数据还未初始化");
            }
            return ModelManager_1.ModelManager.ins.getInstByClassName("Player");
        }
        constructor() { super(); }
    }
    exports.MVMManager = MVMManager;
});
//# sourceMappingURL=MVMManager.js.map