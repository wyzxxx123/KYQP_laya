var mbase;
(function (mbase) {
    var base;
    (function (base) {
        class MLayer extends core.view.Layer {
            constructor() {
                super();
                this._vm_manager = new base.MVMManager();
                core.view.Layer.WINDOW_LAYER.on(Laya.Event.CLICK, this, this.onCloseWindows);
            }
            onCloseWindows() {
                this._vm_manager.closeWindow();
            }
        }
        base.MLayer = MLayer;
    })(base = mbase.base || (mbase.base = {}));
})(mbase || (mbase = {}));
//# sourceMappingURL=MLayer.js.map