var core;
(function (core) {
    var view;
    (function (view) {
        /*
        可显示对象
        */
        var CustomView = /** @class */ (function () {
            function CustomView(arg_params, arg_class, arg_parent) {
                this._parent = null;
                this._class = null;
                this._atlas_url = null;
                this._is_show = false;
                this._is_need_show = false;
                this._is_on_parent = false;
                this._is_load_complete = false;
                this._callBack = null;
                this._display = null;
                this.setParent(arg_parent);
                this.setClass(arg_class);
                this.setAtlasName(arg_params);
            }
            /*
                设置资源路径
            */
            CustomView.prototype.setAtlasName = function (arg_params) {
                this._atlas_url = arg_params;
            };
            /*
              设置显示类型
            */
            CustomView.prototype.setClass = function (arg_class) {
                this._class = arg_class;
            };
            /*
              设置父显示对象
            */
            CustomView.prototype.setParent = function (arg_parent) {
                this._parent = arg_parent;
            };
            CustomView.prototype.onLoaded = function () {
                if (this._class == null) {
                    core.Common.throw("VisibleView的_class为空！");
                }
                this._is_load_complete = true;
                this._display = new (this._class)();
                if (this._is_need_show) {
                    this.showNow();
                }
            };
            CustomView.prototype.onLoadResource = function () {
                if (this._atlas_url == null) {
                    core.Common.throw("VisibleView的_atlas_url为空！");
                }
                Laya.loader.load([{ url: this._atlas_url, type: Loader.ATLAS }], Handler.create(this, this.onLoaded));
            };
            CustomView.prototype.addToParent = function () {
                if (this._parent == null) {
                    core.Common.throw("VisibleView的addToParent中的_parent为空！");
                }
                this._parent.addChild(this.display);
                this._is_on_parent = true;
            };
            CustomView.prototype.removeFromParent = function () {
                if (this._parent == null) {
                    core.Common.throw("VisibleView的removeFromParent中的_parent为空！");
                }
                this._parent.removeChild(this.display);
                this._is_on_parent = false;
                this._is_show = false;
            };
            Object.defineProperty(CustomView.prototype, "display", {
                get: function () {
                    if (this._display == null) {
                        core.Common.throw("VisibleView的_display为空！");
                    }
                    return this._display;
                },
                enumerable: true,
                configurable: true
            });
            CustomView.prototype.showNow = function () {
                this._is_need_show = false;
                this.addToParent();
                this.setVisible(true);
            };
            /*
            设置显示前处理的东西
            */
            CustomView.prototype.setCallBack = function (callBack) {
                this._callBack = callBack;
            };
            /*
            是否添加在父显示对象上
            */
            CustomView.prototype.isOnParent = function () {
                return this._is_on_parent;
            };
            /*
              是否已经显示
            */
            CustomView.prototype.isShow = function () {
                return this._is_show;
            };
            /*
              开始显示
            */
            CustomView.prototype.showME = function () {
                if (this._is_need_show)
                    return;
                this._is_need_show = true;
                if (this._is_load_complete) {
                    this.showNow();
                }
                else {
                    this.onLoadResource();
                }
            };
            /*
            设置显示对象的visible属性
            */
            CustomView.prototype.setVisible = function (visible) {
                this.display.visible = visible;
                if (this.isOnParent())
                    this._is_show = visible;
            };
            return CustomView;
        }());
        view.CustomView = CustomView;
    })(view = core.view || (core.view = {}));
})(core || (core = {}));
//# sourceMappingURL=CustomView.js.map