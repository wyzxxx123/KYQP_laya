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
var mview;
(function (mview) {
    var SceneView = /** @class */ (function (_super) {
        __extends(SceneView, _super);
        function SceneView() {
            var _this = _super.call(this) || this;
            _this._view_type = mview.ComView.SCENE;
            return _this;
        }
        SceneView.prototype.layerInit = function () {
            this.centerX = 0;
            this.centerY = 0;
        };
        return SceneView;
    }(mview.ComView));
    mview.SceneView = SceneView;
})(mview || (mview = {}));
//# sourceMappingURL=SceneView.js.map