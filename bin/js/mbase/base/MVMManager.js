var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../../core/CFun", "../../core/model/ModelManager", "../data/Player", "../../core/viewmodel/VMManager", "./InitData", "./MsgData"], function (require, exports, CFun_1, ModelManager_1, Player_1, VMManager_1, InitData_1, MsgData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MVMManager = /** @class */ (function (_super) {
        __extends(MVMManager, _super);
        function MVMManager() {
            return _super.call(this) || this;
        }
        //收到服务器消息才打开的界面
        MVMManager.prototype.eventInit = function () {
            this.regist("client_Player_onJoinGame", this.onShowRoom);
            this.regist("client_Player_openScene", this.onShowHallScene);
            this.regist("client_Player_onEnterRoomList", this.onReconnect);
            this.regist("client_Player_onJoinRoom", this.onPlayError); //准备开始玩的时候失败了
            this.regist("client_Player_onQueue", this.onEnterError); //进入房间失败
        };
        MVMManager.prototype.onReconnect = function () {
            if (this.playerData.roomSN > 0) {
                if (this.playerData.gameType == Player_1.Player.HOLDEM) {
                    this.showOther("SCENE_DZPKSceneVM", this.playerData.roomData);
                }
            }
        };
        MVMManager.prototype.onEnterError = function (player) {
            if (player.ret != 0) {
                CFun_1.CFun.dialog(CFun_1.CFun.getItem(MsgData_1.MsgData, "id", player.ret)["msg"], null, null, "确 定");
                if (player.gameType == Player_1.Player.HOLDEM) {
                    this.showOther("SCENE_scene_620");
                }
            }
        };
        MVMManager.prototype.onPlayError = function (player) {
            if (player.ret != 0) {
                CFun_1.CFun.dialog(CFun_1.CFun.getItem(MsgData_1.MsgData, "id", player.ret)["msg"], null, null, "确 定");
                if (player.gameType == Player_1.Player.HOLDEM) {
                    this.showOther("SCENE_scene_620");
                }
            }
        };
        MVMManager.prototype.onShowHallScene = function () {
            if (this.playerData.roomSN <= 0) {
                this.showOther("SCENE_HallVM");
            }
        };
        MVMManager.prototype.onShowRoom = function (data) {
            this.showOther("SCENE_scene_" + data.gameid, data); //620\720\820
        };
        MVMManager.prototype.showOther = function (className, exData) {
            var initData = laya.utils.Pool.getItemByClass("InitData", InitData_1.InitData);
            initData.className = className;
            initData.exData = exData;
            this.onInitAndShow(initData);
        };
        MVMManager.prototype.onInitAndShow = function (data) {
            if (data.className.indexOf("SCENE_") == 0) {
                this.closeAll();
            }
            _super.prototype.onInitAndShow.call(this, data);
        };
        Object.defineProperty(MVMManager.prototype, "playerData", {
            get: function () {
                if (!ModelManager_1.ModelManager.ins.getInstByClassName("Player")) {
                    CFun_1.CFun.throw("MVMManager中使用的Player数据还未初始化");
                }
                return ModelManager_1.ModelManager.ins.getInstByClassName("Player");
            },
            enumerable: true,
            configurable: true
        });
        return MVMManager;
    }(VMManager_1.VMManager));
    exports.MVMManager = MVMManager;
});
//# sourceMappingURL=MVMManager.js.map