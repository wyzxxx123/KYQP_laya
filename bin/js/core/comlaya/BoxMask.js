define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @description BOX内部的遮罩
     * @author wangyz
     * @export
     * @class BoxMask
     */
    class BoxMask extends laya.ui.Box {
        onSetMask() {
            this.getChildByName("img_head")["mask"] = this.getChildByName("mmask");
        }
        onRemoveMask() {
            this.getChildByName("img_head")["mask"] = null;
        }
        constructor() {
            super();
            this.on(Laya.Event.DISPLAY, this, this.onSetMask);
            this.on(Laya.Event.UNDISPLAY, this, this.onRemoveMask);
        }
    }
    exports.BoxMask = BoxMask;
});
//# sourceMappingURL=BoxMask.js.map