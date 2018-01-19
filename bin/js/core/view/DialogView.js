define(["require", "exports", "../CFun"], function (require, exports, CFun_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class DialogView extends laya.ui.Dialog {
        constructor() {
            super();
        }
        createChildren() {
            super.createChildren();
            let path = CFun_1.CFun.parsingPath(this.constructor);
            console.log(path);
            this.createView(Laya.loader.getRes(path));
        }
    }
    exports.DialogView = DialogView;
});
//# sourceMappingURL=DialogView.js.map