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
define(["require", "exports", "../../../mbase/base/MViewModel", "./CardTypeView"], function (require, exports, MViewModel_1, CardTypeView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CardTypeVM = /** @class */ (function (_super) {
        __extends(CardTypeVM, _super);
        function CardTypeVM() {
            var _this = _super.call(this) || this;
            _this.setAtlasName = "1";
            _this.setClass = CardTypeView_1.CardTypeView;
            _this.setViewPath = "game_dzpk/DZPKCardType";
            return _this;
        }
        return CardTypeVM;
    }(MViewModel_1.MViewModel));
    exports.CardTypeVM = CardTypeVM;
});
//# sourceMappingURL=CardTypeVM.js.map