define(["require", "exports", "../../core/view/CView", "../../core/view/ComView"], function (require, exports, CView_1, ComView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Handler = laya.utils.Handler;
    class MCView extends CView_1.CView {
        constructor(mv) {
            super(mv);
        }
        closeNow() {
            if (this.display.viewType == ComView_1.ComView.WINDOW || this.display.viewType == ComView_1.ComView.WINDOW_NO_CLOSEAUTO) {
                laya.utils.Tween.to(this.display, { scaleX: 0.9, scaleY: 0.9, alpha: 0.5 }, 100, null, Handler.create(this, this.tweenClose, [], false));
            }
            else {
                super.closeNow();
            }
        }
        tweenClose() {
            super.closeNow();
            this.display.scaleX = this.display.scaleY = this.display.alpha = 1;
        }
        showNow() {
            super.showNow();
            if (this.display.viewType == ComView_1.ComView.WINDOW || this.display.viewType == ComView_1.ComView.WINDOW_NO_CLOSEAUTO) {
                laya.utils.Tween.from(this.display, { scaleX: 0.9, scaleY: 0.9, alpha: 0.5 }, 100, null, Handler.create(this, this.tweenShow, [], false));
            }
            else {
                super.showNow();
            }
        }
        tweenShow() {
        }
    }
    exports.MCView = MCView;
});
//# sourceMappingURL=MCView.js.map