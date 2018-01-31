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
    class MenuVM extends MViewModel_1.MViewModel {
        openCard() {
            this.closeNow();
            this.showOther("CardTypeVM");
        }
        showSetting() {
            this.closeNow();
            this.showOther("setting");
        }
        showRecord() {
            this.closeNow();
            this.showOther("DZPKRecordVM");
        }
        requestOut() {
            this.closeNow();
            // uiApplication.changeScene(new DZPKRoomHallSceneView());
            if (this.checkPlayerisGaming()) {
                CFun_1.CFun.dialog(CFun_1.CFun.getItem(MsgData_1.MsgData, "id", 3029)["msg"], null, null, "确 定");
            }
            else {
                CFun_1.CFun.dialog(CFun_1.CFun.getItem(MsgData_1.MsgData, "id", 3028)["msg"], this.quitScene, this);
            }
        }
        //判断玩家是否在游戏中
        checkPlayerisGaming() {
            if (!this.deckData)
                return false;
            var playerData = CFun_1.CFun.getItem(this._data, "rid", this.playerData["rid"]);
            if (!playerData) {
                return false;
            }
            return !this.deckData.isPlaying && !playerData.isFold;
        }
        get deckData() {
            if (!ModelManager_1.ModelManager.ins.getInstByClassName("HoldemDeck")) {
                return null;
            }
            return ModelManager_1.ModelManager.ins.getInstByClassName("HoldemDeck");
        }
        get agentkData() {
            if (!ModelManager_1.ModelManager.ins.getInstByClassName("HoldemDeck")) {
                return null;
            }
            return ModelManager_1.ModelManager.ins.getInstByClassName("HoldemDeck");
        }
        quitScene(name) {
            if (name == "ok") {
                if (this.agentkData) {
                    this.sendData(16778496);
                }
                this.showOther("SCENE_scene_620");
            }
        }
        constructor() {
            super();
            this.setAtlasName = "res/atlas/dzpk/zh-cn/font/menuPanelFont.atlas";
            this.setClass = MenuView_1.MenuView;
            this.setViewPath = "game_dzpk/DZPKMenu";
        }
    }
    exports.MenuVM = MenuVM;
});
//# sourceMappingURL=MenuVM.js.map