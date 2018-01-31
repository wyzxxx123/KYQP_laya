define(["require", "exports", "../../../ui/layaUI.max.all"], function (require, exports, layaUI_max_all_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class CardTypeView extends layaUI_max_all_1.ui.game_dzpk.DZPKCardTypeUI {
        //覆盖onClick
        onClick(e) {
        }
        layerInit() {
            this.centerX = NaN;
            this.centerY = NaN;
            this.pos(0, 81);
        }
        //覆盖对btn_close的处理
        btnCloseInit() { }
        constructor(vm) {
            super();
            this._vm = vm;
        }
    }
    exports.CardTypeView = CardTypeView;
});
//# sourceMappingURL=CardTypeView.js.map