define(["require", "exports", "../../../ui/layaUI.max.all"], function (require, exports, layaUI_max_all_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class DZPKHelpView extends layaUI_max_all_1.ui.game_dzpk.DZPKHelpUI {
        onSelecte(index) {
            //切换ViewStack子页面
            this.vs_des.selectedIndex = index;
        }
        initSelect() {
            this.tab_chose.selectedIndex = 0;
        }
        beClose() {
            this.tab_chose.selectedIndex = -1;
        }
        comInit() {
            this.on(Laya.Event.DISPLAY, this, this.initSelect);
            this.tab_chose.selectHandler = laya.utils.Handler.create(this, this.onSelecte, [], false);
            this.tab_chose.selectedIndex = -1;
        }
        constructor(vm) {
            super();
            this._vm = vm;
        }
    }
    exports.DZPKHelpView = DZPKHelpView;
});
//# sourceMappingURL=DZPKHelpView.js.map