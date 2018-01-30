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
define(["require", "exports", "../../../ui/layaUI.max.all", "../../../core/view/ComView"], function (require, exports, layaUI_max_all_1, ComView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PiPeiView = /** @class */ (function (_super) {
        __extends(PiPeiView, _super);
        function PiPeiView(vm) {
            var _this = _super.call(this) || this;
            _this._vm = vm;
            _this._view_type = ComView_1.ComView.WINDOW_NO_CLOSEAUTO;
            return _this;
        }
        PiPeiView.prototype.onCancel = function () {
            this.vm.cancelPiPei();
        };
        PiPeiView.prototype.comInit = function () {
            this.btn_close.on(Laya.Event.CLICK, this, this.onCancel);
        };
        return PiPeiView;
    }(layaUI_max_all_1.ui.pipei.PiPeiViewUI));
    exports.PiPeiView = PiPeiView;
});
//# sourceMappingURL=PiPeiView.js.map