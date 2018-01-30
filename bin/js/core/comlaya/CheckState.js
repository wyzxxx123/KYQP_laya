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
    /**
     * @description 实现的一个自定义的checkbox
     * @author wangyz
     * @export
     * @class SettingToggle
     * @extends {laya.ui.Box}
     */
    var CheckState = /** @class */ (function (_super) {
        __extends(CheckState, _super);
        function CheckState(skin, label) {
            var _this = _super.call(this, skin, label) || this;
            _this.selected = false;
            return _this;
        }
        CheckState.prototype.changeState = function () {
            _super.prototype.changeState.call(this);
            if (this.selected) {
                var com = this.getChildByName("on");
                if (com)
                    com["visible"] = true;
                com = this.getChildByName("off");
                if (com)
                    com["visible"] = false;
            }
            else {
                var com = this.getChildByName("on");
                if (com)
                    com["visible"] = false;
                com = this.getChildByName("off");
                if (com)
                    com["visible"] = true;
            }
        };
        return CheckState;
    }(laya.ui.CheckBox));
    exports.CheckState = CheckState;
});
//# sourceMappingURL=CheckState.js.map