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
define(["require", "exports", "../../core/view/CView", "../../core/view/ComView"], function (require, exports, CView_1, ComView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Handler = laya.utils.Handler;
    var MCView = /** @class */ (function (_super) {
        __extends(MCView, _super);
        function MCView(mv) {
            return _super.call(this, mv) || this;
        }
        MCView.prototype.closeNow = function () {
            if (this.display.viewType == ComView_1.ComView.WINDOW || this.display.viewType == ComView_1.ComView.WINDOW_NO_CLOSEAUTO) {
                laya.utils.Tween.to(this.display, { scaleX: 0.9, scaleY: 0.9, alpha: 0.5 }, 100, null, Handler.create(this, this.tweenClose, [], false));
            }
            else {
                _super.prototype.closeNow.call(this);
            }
        };
        MCView.prototype.tweenClose = function () {
            _super.prototype.closeNow.call(this);
            this.display.scaleX = this.display.scaleY = this.display.alpha = 1;
        };
        MCView.prototype.showNow = function () {
            _super.prototype.showNow.call(this);
            if (this.display.viewType == ComView_1.ComView.WINDOW || this.display.viewType == ComView_1.ComView.WINDOW_NO_CLOSEAUTO) {
                laya.utils.Tween.from(this.display, { scaleX: 0.9, scaleY: 0.9, alpha: 0.5 }, 100, null, Handler.create(this, this.tweenShow, [], false));
            }
            else {
                _super.prototype.showNow.call(this);
            }
        };
        MCView.prototype.tweenShow = function () {
        };
        return MCView;
    }(CView_1.CView));
    exports.MCView = MCView;
});
//# sourceMappingURL=MCView.js.map