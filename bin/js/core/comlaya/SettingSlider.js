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
 * @description 设置面板中的Slider
 * @author wangyz
 * @export
 * @class SettingSlider
 * @extends {laya.ui.HSlider}
 */
var SettingSlider = /** @class */ (function (_super) {
    __extends(SettingSlider, _super);
    function SettingSlider() {
        var _this = _super.call(this) || this;
        _this.showLabel = false;
        _this.on(Laya.Event.DISPLAY, _this, _this.onAddStage);
        _this.on(Laya.Event.CHANGE, _this, _this.onChange);
        return _this;
    }
    SettingSlider.prototype.onChange = function () {
        var front = this.getChildByName("front");
        front["width"] = this.bar.x + 5;
    };
    SettingSlider.prototype.onAddStage = function () {
        // this.skin = this["back"];
        // this.bar.skin = val;
        var front = this.getChildByName("front");
        var thumb = this.getChildByName("thumb");
        thumb["visible"] = false;
        this.bar.stateNum = 1;
        this.bar.skin = thumb["skin"];
        this.bar.y = thumb["y"];
        this.addChild(this.bar);
        front["width"] = this.bar.x + 5;
    };
    return SettingSlider;
}(laya.ui.HSlider));
//# sourceMappingURL=SettingSlider.js.map