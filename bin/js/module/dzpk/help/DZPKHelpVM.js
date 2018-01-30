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
define(["require", "exports", "../../../mbase/base/MViewModel", "./DZPKHelpView"], function (require, exports, MViewModel_1, DZPKHelpView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DZPKHelpVM = /** @class */ (function (_super) {
        __extends(DZPKHelpVM, _super);
        function DZPKHelpVM() {
            var _this = _super.call(this) || this;
            _this.setAtlasName = "res/atlas/dzpk/helpWindow.atlas,res/atlas/dzpk/zh-cn/helpWindow.atlas";
            _this.setClass = DZPKHelpView_1.DZPKHelpView;
            _this.setViewPath = "game_dzpk/DZPKHelp";
            return _this;
        }
        return DZPKHelpVM;
    }(MViewModel_1.MViewModel));
    exports.DZPKHelpVM = DZPKHelpVM;
});
//# sourceMappingURL=DZPKHelpVM.js.map