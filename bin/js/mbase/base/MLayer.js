define(["require", "exports", "../../core/view/Layer", "./MVMManager"], function (require, exports, Layer_1, MVMManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class MLayer extends Layer_1.Layer {
        constructor() {
            super();
            this._vm_manager = new MVMManager_1.MVMManager();
            Layer_1.Layer.WINDOW_LAYER.on(Laya.Event.CLICK, this, this.onCloseWindows);
        }
        onCloseWindows() {
            this._vm_manager.closeWindow();
        }
    }
    exports.MLayer = MLayer;
});
//# sourceMappingURL=MLayer.js.map