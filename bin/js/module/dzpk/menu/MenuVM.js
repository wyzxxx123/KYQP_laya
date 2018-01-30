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
define(["require", "exports", "../../../mbase/base/MViewModel", "../../../core/CFun", "../../../core/model/ModelManager", "./MenuView", "../../../mbase/base/MsgData"], function (require, exports, MViewModel_1, CFun_1, ModelManager_1, MenuView_1, MsgData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @description 菜单界面
     * @author wangyz
     * @export
     * @class MenuVM
     * @extends {base.MViewModel}
     */
    var MenuVM = /** @class */ (function (_super) {
        __extends(MenuVM, _super);
        function MenuVM() {
            var _this = _super.call(this) || this;
            _this.setAtlasName = "res/atlas/dzpk/zh-cn/font/menuPanelFont.atlas";
            _this.setClass = MenuView_1.MenuView;
            _this.setViewPath = "game_dzpk/DZPKMenu";
            return _this;
        }
        MenuVM.prototype.openCard = function () {
            this.closeNow();
            this.showOther("CardTypeVM");
        };
        MenuVM.prototype.showSetting = function () {
            this.closeNow();
            this.showOther("setting");
        };
        MenuVM.prototype.showRecord = function () {
            this.closeNow();
            this.showOther("DZPKRecordVM");
        };
        MenuVM.prototype.requestOut = function () {
            this.closeNow();
            // uiApplication.changeScene(new DZPKRoomHallSceneView());
            if (this.checkPlayerisGaming()) {
                CFun_1.CFun.dialog(CFun_1.CFun.getItem(MsgData_1.MsgData, "id", 3029)["msg"], null, null, "确 定");
            }
            else {
                CFun_1.CFun.dialog(CFun_1.CFun.getItem(MsgData_1.MsgData, "id", 3028)["msg"], this.quitScene, this);
            }
        };
        //判断玩家是否在游戏中
        MenuVM.prototype.checkPlayerisGaming = function () {
            if (!this.deckData)
                return false;
            var playerData = CFun_1.CFun.getItem(this._data, "rid", this.playerData["rid"]);
            if (!playerData) {
                return false;
            }
            return !this.deckData.isPlaying && !playerData.isFold;
        };
        Object.defineProperty(MenuVM.prototype, "deckData", {
            get: function () {
                if (!ModelManager_1.ModelManager.ins.getInstByClassName("HoldemDeck")) {
                    return null;
                }
                return ModelManager_1.ModelManager.ins.getInstByClassName("HoldemDeck");
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuVM.prototype, "agentkData", {
            get: function () {
                if (!ModelManager_1.ModelManager.ins.getInstByClassName("HoldemDeck")) {
                    return null;
                }
                return ModelManager_1.ModelManager.ins.getInstByClassName("HoldemDeck");
            },
            enumerable: true,
            configurable: true
        });
        MenuVM.prototype.quitScene = function (name) {
            if (name == "ok") {
                if (this.agentkData) {
                    this.sendData(16778496);
                }
                this.showOther("SCENE_scene_620");
            }
        };
        return MenuVM;
    }(MViewModel_1.MViewModel));
    exports.MenuVM = MenuVM;
});
//# sourceMappingURL=MenuVM.js.map