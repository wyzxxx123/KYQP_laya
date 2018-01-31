define(["require", "exports", "./ComView"], function (require, exports, ComView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SceneView extends ComView_1.ComView {
        layerInit() {
            this.centerX = 0;
            this.centerY = 0;
        }
        constructor() {
            super();
            this._view_type = ComView_1.ComView.SCENE;
        }
    }
    exports.SceneView = SceneView;
});
//# sourceMappingURL=SceneView.js.map