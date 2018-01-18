define(["require", "exports", "../../core/view/EffectView", "../../core/CFun", "../../module/dzpk/scene/DZPKEffect"], function (require, exports, EffectView_1, CFun_1, DZPKEffect_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class MEffectView extends EffectView_1.EffectView {
        get dzpk() {
            if (!this._dzpk) {
                this._dzpk = new DZPKEffect_1.DZPKEffect();
                this._effectLayer.addChild(this._dzpk);
            }
            return this._dzpk;
        }
        constructor() {
            super();
            if (MEffectView._instance) {
                CFun_1.CFun.throw("单例！");
            }
        }
        static get ins() {
            if (!this._instance) {
                this._instance = new MEffectView();
            }
            return this._instance;
        }
    }
    exports.MEffectView = MEffectView;
});
//# sourceMappingURL=MEffectView.js.map