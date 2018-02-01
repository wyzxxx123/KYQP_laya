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
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CardTypeView = /** @class */ (function (_super) {
        __extends(CardTypeView, _super);
        function CardTypeView(vm) {
            var _this = _super.call(this) || this;
            _this._vm = vm;
            return _this;
        }
        //覆盖onClick
        CardTypeView.prototype.onClick = function (e) {
        };
        CardTypeView.prototype.layerInit = function () {
            this.centerX = NaN;
            this.centerY = NaN;
            this.pos(0, 81);
        };
        //覆盖对btn_close的处理
        CardTypeView.prototype.btnCloseInit = function () { };
        return CardTypeView;
    }(ui.game_dzpk.DZPKCardTypeUI));
    exports.CardTypeView = CardTypeView;
});
//# sourceMappingURL=CardTypeView.js.map