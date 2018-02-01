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
 * @description 有前滚动条，按钮非三态
 * @author wangyz
 * @export
 * @class SliderCustomer
 * @extends {laya.ui.HSlider}
 */
var SliderCustomer = /** @class */ (function (_super) {
    __extends(SliderCustomer, _super);
    function SliderCustomer(skin) {
        var _this = _super.call(this, skin) || this;
        _this._beginOff = -999;
        _this.on(Laya.Event.CHANGE, _this, _this.on_slider_change);
        return _this;
    }
    Object.defineProperty(SliderCustomer.prototype, "is_v", {
        set: function (val) {
            this.isVertical = val;
        },
        enumerable: true,
        configurable: true
    });
    SliderCustomer.prototype.on_slider_change = function () {
        var front = this.getChildByName("cfront");
        if (this.isVertical) {
            front["height"] = this.bar.y + 6;
        }
        else {
            front["width"] = this.bar.x + 5;
        }
    };
    SliderCustomer.prototype.changeValue = function () {
        _super.prototype.changeValue.call(this);
        this.on_slider_change();
    };
    SliderCustomer.prototype.addChild = function (node) {
        var s_node = _super.prototype.addChild.call(this, node);
        var front = this.getChildByName("cfront");
        if (front && this._beginOff == -999) {
            if (this.isVertical) {
                this._beginOff = front["y"];
            }
            else {
                this._beginOff = front["x"];
            }
            this.addChild(this.bar);
            this.bar.stateNum = 1;
        }
        return s_node;
    };
    return SliderCustomer;
}(laya.ui.Slider));
//# sourceMappingURL=SliderCustomer.js.map