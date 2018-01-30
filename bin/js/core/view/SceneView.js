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
define(["require", "exports", "./ComView"], function (require, exports, ComView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SceneView = /** @class */ (function (_super) {
        __extends(SceneView, _super);
        function SceneView() {
            var _this = _super.call(this) || this;
            _this._view_type = ComView_1.ComView.SCENE;
            return _this;
        }
        SceneView.prototype.layerInit = function () {
            this.centerX = 0;
            this.centerY = 0;
        };
        return SceneView;
    }(ComView_1.ComView));
    exports.SceneView = SceneView;
});
//# sourceMappingURL=SceneView.js.map