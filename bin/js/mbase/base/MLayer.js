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
define(["require", "exports", "./MVMManager"], function (require, exports, MVMManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MLayer = /** @class */ (function (_super) {
        __extends(MLayer, _super);
        function MLayer() {
            var _this = _super.call(this) || this;
            _this._vm_manager = new MVMManager_1.MVMManager();
            Layer.WINDOW_LAYER.on(Laya.Event.CLICK, _this, _this.onCloseWindows);
            return _this;
        }
        MLayer.prototype.onCloseWindows = function () {
            this._vm_manager.closeWindow();
        };
        return MLayer;
    }(Layer));
    exports.MLayer = MLayer;
});
//# sourceMappingURL=MLayer.js.map