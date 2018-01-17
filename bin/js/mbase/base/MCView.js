var mbase;
(function (mbase) {
    var base;
    (function (base) {
        class MCView extends core.view.CView {
            constructor(mv) {
                super(mv);
            }
            closeNow() {
                if (this.display.viewType == core.view.ComView.WINDOW || this.display.viewType == core.view.ComView.WINDOW_NO_CLOSEAUTO) {
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
                if (this.display.viewType == core.view.ComView.WINDOW || this.display.viewType == core.view.ComView.WINDOW_NO_CLOSEAUTO) {
                    laya.utils.Tween.from(this.display, { scaleX: 0.9, scaleY: 0.9, alpha: 0.5 }, 100, null, Handler.create(this, this.tweenShow, [], false));
                }
                else {
                    super.showNow();
                }
            }
            tweenShow() {
            }
        }
        base.MCView = MCView;
    })(base = mbase.base || (mbase.base = {}));
})(mbase || (mbase = {}));
//# sourceMappingURL=MCView.js.map