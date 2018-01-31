define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class DialogView extends laya.ui.Dialog {
        constructor() {
            super();
        }
        // createChildren():void {
        //     super.createChildren();
        //     let path = CFun.parsingPath(this.constructor);
        //     console.log(path);
        //     this.createView(Laya.loader.getRes(path));
        // }
        loadUI(path) {
            this.createView(Laya.loader.getRes(path + ".json"));
            super.loadUI(path);
        }
    }
    exports.DialogView = DialogView;
});
//# sourceMappingURL=DialogView.js.map