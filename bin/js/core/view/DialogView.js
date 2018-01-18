var core;
(function (core) {
    var view;
    (function (view) {
        class DialogView extends laya.ui.Dialog {
            constructor() {
                super();
            }
            loadUI(path) {
                super.loadUI(path);
                this._my_path = path;
            }
            createChildren() {
                super.createChildren();
                this.createView(Laya.loader.getRes(this._my_path + ".json"));
            }
        }
        view.DialogView = DialogView;
    })(view = core.view || (core.view = {}));
})(core || (core = {}));
//# sourceMappingURL=DialogView.js.map