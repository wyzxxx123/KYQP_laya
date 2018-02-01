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
define(["require", "exports", "./AvaterChoseView", "../../mbase/base/MViewModel"], function (require, exports, AvaterChoseView_1, MViewModel_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @description 头像选择界面
     * @author wangyz
     * @export
     * @class AvaterChoseVM
     * @extends {module.base.MViewModel}
     */
    var AvaterChoseVM = /** @class */ (function (_super) {
        __extends(AvaterChoseVM, _super);
        function AvaterChoseVM() {
            var _this = _super.call(this) || this;
            _this.setAtlasName = "res/atlas/userInfoWindow.atlas";
            _this.setClass = AvaterChoseView_1.AvaterChoseView;
            return _this;
        }
        AvaterChoseVM.prototype.saveHead = function (sex, index) {
            this.sendData(16778272, [sex]);
            this.sendData(16778270, ["" + index]);
        };
        return AvaterChoseVM;
    }(MViewModel_1.MViewModel));
    exports.AvaterChoseVM = AvaterChoseVM;
});
//# sourceMappingURL=AvaterChoseVM.js.map