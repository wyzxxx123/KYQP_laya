var mbase;
(function (mbase) {
    var base;
    (function (base) {
        class MEffectView extends core.view.EffectView {
            constructor() {
                super();
                if (MEffectView._instance) {
                    core.CFun.throw("单例！");
                }
            }
            get dzpk() {
                if (!this._dzpk) {
                    this._dzpk = new module.dzpk.scene.DZPKEffect();
                    this._effectLayer.addChild(this._dzpk);
                }
                return this._dzpk;
            }
            static get ins() {
                if (!this._instance) {
                    this._instance = new MEffectView();
                }
                return this._instance;
            }
        }
        base.MEffectView = MEffectView;
    })(base = mbase.base || (mbase.base = {}));
})(mbase || (mbase = {}));
//# sourceMappingURL=MEffectView.js.map