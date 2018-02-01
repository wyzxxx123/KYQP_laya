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
    var ComView = /** @class */ (function (_super) {
        __extends(ComView, _super);
        function ComView() {
            var _this = _super.call(this) || this;
            _this._view_type = "other";
            _this.on(Laya.Event.CLICK, _this, _this.onClick);
            _this.comInit();
            _this.layerInit();
            return _this;
        }
        Object.defineProperty(ComView.prototype, "viewType", {
            get: function () {
                return this._view_type;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ComView.prototype, "vm", {
            get: function () {
                if (!this._vm)
                    CFun.throw("ComView中_vm还未初始化！");
                return this._vm;
            },
            enumerable: true,
            configurable: true
        });
        //组件事件初始化，实例化时调用一次
        ComView.prototype.comInit = function () {
        };
        //显示对象根据数据初始化，每次显示时调用
        ComView.prototype.viewInit = function (data) {
        };
        //关闭前调用
        ComView.prototype.beClose = function () {
        };
        ComView.prototype.onClick = function (e) {
            //阻止后续节点的监听器
            e.stopPropagation();
        };
        ComView.prototype.layerInit = function () {
        };
        ComView.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            var pname = this["__proto__"].constructor["__proto__"].name;
            if (pname == "ComView") {
                pname = this.constructor.name;
            }
            var path = CFun.parsingPath(pname);
            this.createView(Laya.loader.getRes(path));
        };
        ComView.TOP = "top";
        ComView.WINDOW = "window";
        /**
         * 不需要点击空白处关窗的界面
         */
        ComView.WINDOW_NO_CLOSEAUTO = "window_no_closeauto";
        ComView.SCENE = "scene";
        return ComView;
    }(laya.ui.View));
    mview.ComView = ComView;
})(mview || (mview = {}));
//# sourceMappingURL=ComView.js.map