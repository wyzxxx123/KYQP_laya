var module;
(function (module) {
    var dzpk;
    (function (dzpk) {
        var menu;
        (function (menu) {
            /**
             * @description 菜单界面
             * @author wangyz
             * @export
             * @class MenuVM
             * @extends {base.MViewModel}
             */
            class MenuVM extends mbase.base.MViewModel {
                constructor() {
                    super();
                    this.setAtlasName = "res/atlas/dzpk/zh-cn/font/menuPanelFont.atlas";
                    this.setClass = menu.MenuView;
                }
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
                    // uiCore.Application.changeScene(new DZPKRoomHallSceneView());
                    if (this.checkPlayerisGaming()) {
                        core.CFun.dialog(core.CFun.getItem(Data.MsgData, "id", 3029)["msg"], null, null, "确 定");
                    }
                    else {
                        core.CFun.dialog(core.CFun.getItem(Data.MsgData, "id", 3028)["msg"], this.quitScene, this);
                    }
                }
                //判断玩家是否在游戏中
                checkPlayerisGaming() {
                    if (!this.deckData)
                        return false;
                    var playerData = core.CFun.getItem(this._data, "rid", this.playerData["rid"]);
                    if (!playerData) {
                        return false;
                    }
                    return !this.deckData.isPlaying && !playerData.isFold;
                }
                get deckData() {
                    if (!core.model.ModelManager.ins.getInstByClassName("HoldemDeck")) {
                        return null;
                    }
                    return core.model.ModelManager.ins.getInstByClassName("HoldemDeck");
                }
                get agentkData() {
                    if (!core.model.ModelManager.ins.getInstByClassName("HoldemDeck")) {
                        return null;
                    }
                    return core.model.ModelManager.ins.getInstByClassName("HoldemDeck");
                }
                quitScene(name) {
                    if (name == "ok") {
                        if (this.agentkData) {
                            this.sendData(16778496);
                        }
                        this.showOther("SCENE_scene_620");
                    }
                }
            }
            menu.MenuVM = MenuVM;
        })(menu = dzpk.menu || (dzpk.menu = {}));
    })(dzpk = module.dzpk || (module.dzpk = {}));
})(module || (module = {}));
//# sourceMappingURL=MenuVM.js.map