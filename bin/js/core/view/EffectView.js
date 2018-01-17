var core;
(function (core) {
    var view;
    (function (view) {
        class EffectView {
            constructor() {
                this._effectLayer = view.Layer.EFFECT_LAYER;
            }
        }
        view.EffectView = EffectView;
    })(view = core.view || (core.view = {}));
})(core || (core = {}));
//# sourceMappingURL=EffectView.js.map