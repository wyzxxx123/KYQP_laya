define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    exports.DialogView = DialogView;
});
//# sourceMappingURL=DialogView.js.map