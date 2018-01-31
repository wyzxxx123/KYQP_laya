define(["require", "exports", "./ComView", "../CFun"], function (require, exports, ComView_1, CFun_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class WinView extends ComView_1.ComView {
        constructor() {
            super();
            this._view_type = ComView_1.ComView.WINDOW;
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
            CFun_1.CFun.playSound("sounds/hall/window_open.mp3");
        }
        onWinHide() {
            CFun_1.CFun.playSound("sounds/hall/window_close.mp3");
        }
        onClose() {
            this.vm.closeNow();
        }
    }
    exports.WinView = WinView;
});
//# sourceMappingURL=WinView.js.map