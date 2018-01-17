var core;
(function (core) {
    var view;
    (function (view) {
        class WinView extends view.ComView {
            constructor() {
                super();
                this._view_type = view.ComView.WINDOW;
                this.btnCloseInit();
            }
            layerInit() {
                this.centerX = 0;
                this.centerY = 0;
            }
            btnCloseInit() {
                this["btn_close"].on(Laya.Event.CLICK, this, this.onClose);
                this.on(Laya.Event.DISPLAY, this, this.onWinShow);
                this.on(Laya.Event.REMOVED, this, this.onWinHide);
            }
            onWinShow() {
                core.CFun.playSound("sounds/hall/window_open.mp3");
            }
            onWinHide() {
                core.CFun.playSound("sounds/hall/window_close.mp3");
            }
            onClose() {
                this.vm.closeNow();
            }
        }
        view.WinView = WinView;
    })(view = core.view || (core.view = {}));
})(core || (core = {}));
//# sourceMappingURL=WinView.js.map