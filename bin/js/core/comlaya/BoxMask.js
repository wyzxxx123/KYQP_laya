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
 * @description BOX内部的遮罩
 * @author wangyz
 * @export
 * @class BoxMask
 */
var BoxMask = /** @class */ (function (_super) {
    __extends(BoxMask, _super);
    function BoxMask() {
        var _this = _super.call(this) || this;
        _this.on(Laya.Event.DISPLAY, _this, _this.onSetMask);
        _this.on(Laya.Event.UNDISPLAY, _this, _this.onRemoveMask);
        return _this;
    }
    BoxMask.prototype.onSetMask = function () {
        this.getChildByName("img_head")["mask"] = this.getChildByName("mmask");
    };
    BoxMask.prototype.onRemoveMask = function () {
        this.getChildByName("img_head")["mask"] = null;
    };
    return BoxMask;
}(laya.ui.Box));
//# sourceMappingURL=BoxMask.js.map