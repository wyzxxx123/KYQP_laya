var core;
(function (core) {
    var comlaya;
    (function (comlaya) {
        /**
         * @description BOX内部的遮罩
         * @author wangyz
         * @export
         * @class BoxMask
         */
        class BoxMask extends laya.ui.Box {
            constructor() {
                super();
                this.on(Laya.Event.DISPLAY, this, this.onSetMask);
                this.on(Laya.Event.UNDISPLAY, this, this.onRemoveMask);
            }
            onSetMask() {
                this.getChildByName("img_head")["mask"] = this.getChildByName("mmask");
            }
            onRemoveMask() {
                this.getChildByName("img_head")["mask"] = null;
            }
        }
        comlaya.BoxMask = BoxMask;
    })(comlaya = core.comlaya || (core.comlaya = {}));
})(core || (core = {}));
//# sourceMappingURL=BoxMask.js.map