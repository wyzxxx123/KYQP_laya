var core;
(function (core) {
    var view;
    (function (view) {
        class SceneView extends view.ComView {
            constructor() {
                super();
                this._view_type = view.ComView.SCENE;
            }
            layerInit() {
                this.centerX = 0;
                this.centerY = 0;
            }
        }
        view.SceneView = SceneView;
    })(view = core.view || (core.view = {}));
})(core || (core = {}));
//# sourceMappingURL=SceneView.js.map