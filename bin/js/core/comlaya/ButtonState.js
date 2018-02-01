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
/**
 * @description 附加按钮皮肤修改
 * @author wangyz
 * @export
 * @class ScaleComponent
 */
var ButtonState = /** @class */ (function (_super) {
    __extends(ButtonState, _super);
    function ButtonState(skin, label) {
        var _this = _super.call(this, skin, label) || this;
        _this.state = -1;
        _this.state = 0;
        return _this;
    }
    ButtonState.prototype.changeState = function () {
        _super.prototype.changeState.call(this);
        var com = null;
        if (this.state == 0) {
            com = this.getChildByName("up");
            if (com)
                com["visible"] = true;
            com = this.getChildByName("down");
            if (com)
                com["visible"] = false;
            com = this.getChildByName("over");
            if (com)
                com["visible"] = false;
        }
        else if (this.state == 1) {
            com = this.getChildByName("up");
            if (com)
                com["visible"] = false;
            com = this.getChildByName("down");
            if (com)
                com["visible"] = false;
            com = this.getChildByName("over");
            if (com)
                com["visible"] = true;
        }
        else if (this.state == 2) {
            com = this.getChildByName("up");
            if (com)
                com["visible"] = false;
            com = this.getChildByName("down");
            if (com)
                com["visible"] = true;
            com = this.getChildByName("over");
            if (com)
                com["visible"] = false;
        }
    };
    return ButtonState;
}(laya.ui.Button));
//# sourceMappingURL=ButtonState.js.map