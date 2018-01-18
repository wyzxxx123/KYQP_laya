define(["require", "exports", "../../../ui/layaUI.max.all", "../../../core/view/ComView"], function (require, exports, layaUI_max_all_1, ComView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class PiPeiView extends layaUI_max_all_1.ui.pipei.PiPeiViewUI {
        onCancel() {
            this.vm.cancelPiPei();
        }
        comInit() {
            this.btn_close.on(Laya.Event.CLICK, this, this.onCancel);
        }
        constructor(vm) {
            super();
            this._vm = vm;
            this._view_type = ComView_1.ComView.WINDOW_NO_CLOSEAUTO;
        }
    }
    exports.PiPeiView = PiPeiView;
});
//# sourceMappingURL=PiPeiView.js.map