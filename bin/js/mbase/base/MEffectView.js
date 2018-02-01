var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../../module/dzpk/scene/DZPKEffect"], function (require, exports, DZPKEffect_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MEffectView = /** @class */ (function (_super) {
        __extends(MEffectView, _super);
        function MEffectView() {
            var _this = _super.call(this) || this;
            if (MEffectView._instance) {
                CFun.throw("单例！");
            }
            return _this;
        }
        Object.defineProperty(MEffectView.prototype, "dzpk", {
            get: function () {
                if (!this._dzpk) {
                    this._dzpk = new DZPKEffect_1.DZPKEffect();
                    this._effectLayer.addChild(this._dzpk);
                }
                return this._dzpk;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MEffectView, "ins", {
            get: function () {
                if (!this._instance) {
                    this._instance = new MEffectView();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        return MEffectView;
    }(EffectView));
    exports.MEffectView = MEffectView;
});
//# sourceMappingURL=MEffectView.js.map