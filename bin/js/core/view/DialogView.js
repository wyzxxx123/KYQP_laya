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
    var DialogView = /** @class */ (function (_super) {
        __extends(DialogView, _super);
        function DialogView() {
            return _super.call(this) || this;
        }
        // createChildren():void {
        //     super.createChildren();
        //     let path = CFun.parsingPath(this.constructor);
        //     console.log(path);
        //     this.createView(Laya.loader.getRes(path));
        // }
        DialogView.prototype.loadUI = function (path) {
            this.createView(Laya.loader.getRes(path + ".json"));
            _super.prototype.loadUI.call(this, path);
        };
        return DialogView;
    }(laya.ui.Dialog));
    mview.DialogView = DialogView;
})(mview || (mview = {}));
//# sourceMappingURL=DialogView.js.map