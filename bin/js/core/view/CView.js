define(["require", "exports", "../CFun", "./ComView", "./Layer", "../event/EventManager"], function (require, exports, CFun_1, ComView_1, Layer_1, EventManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /*
    可显示对象
    */
    var CView = /** @class */ (function () {
        function CView(vm) {
            this._parent = null;
            this._class = null;
            this._atlas_url = null; //需要多个不同资源，用逗号隔开
            this._view_path = null; //排版路径
            this._is_show = false;
            this._is_need_show = false;
            this._is_on_parent = false;
            this._is_load_complete = false;
            this._event_manager = EventManager_1.EventManager.ins;
            this._vm = vm;
        }
        CView.prototype.regist = function (type, listener) {
            this._event_manager.on(type, listener, this);
        };
        /*
            设置资源路径
        */
        CView.prototype.setAtlasName = function (arg_params) {
            this._atlas_url = arg_params;
        };
        /*
           设置资源路径
       */
        CView.prototype.setViewPath = function (arg_params) {
            this._view_path = arg_params;
        };
        CView.prototype.setParent = function (val) {
            this._parent = val;
        };
        Object.defineProperty(CView.prototype, "vm", {
            get: function () {
                if (!this._vm)
                    CFun_1.CFun.throw("CView中_vm还未初始化！");
                return this._vm;
            },
            enumerable: true,
            configurable: true
        });
        /*
          设置显示类型
        */
        CView.prototype.setClass = function (arg_class) {
            this._class = arg_class;
        };
        CView.prototype.onLoaded = function () {
            this._is_load_complete = true;
            if (!this._class) {
                CFun_1.CFun.throw("VisibleView的_class为空！");
            }
            this._display = new (this._class)(this.vm);
            if (this._parent == null) {
                if (this.display.viewType == ComView_1.ComView.WINDOW) {
                    this._parent = Layer_1.Layer.WINDOW_LAYER;
                }
                else if (this.display.viewType == ComView_1.ComView.TOP) {
                    this._parent = Layer_1.Layer.TOP_LAYER;
                }
                else if (this.display.viewType == ComView_1.ComView.SCENE) {
                    this._parent = Layer_1.Layer.SCENE_LAYER;
                }
                else {
                    this._parent = Layer_1.Layer.SCENE_LAYER;
                }
            }
            if (this._is_need_show) {
                this.showNow();
            }
        };
        CView.prototype.onLoadResource = function () {
            if (!this._atlas_url) {
                CFun_1.CFun.throw("VisibleView的_atlas_url为空！");
            }
            var tmp_arrAtlas = [];
            var arr_atlas = this._atlas_url.split(",");
            var len = arr_atlas.length;
            for (var i = 0; i < len; i++) {
                if (arr_atlas[i] == "")
                    continue;
                tmp_arrAtlas.push({ url: arr_atlas[i], type: laya.net.Loader.ATLAS });
            }
            // let path = CFun.parsingPath(this._class.prototype.constructor.__proto__);
            tmp_arrAtlas.push({ url: this._view_path + ".json", type: laya.net.Loader.JSON });
            if (tmp_arrAtlas.length > 0) {
                Laya.loader.load(tmp_arrAtlas, laya.utils.Handler.create(this, this.onLoaded));
            }
        };
        CView.prototype.addToParent = function () {
            if (!this._parent) {
                CFun_1.CFun.throw("VisibleView的addToParent中的_parent为空！");
            }
            this._parent.addChild(this.display);
            if (Layer_1.Layer.WINDOW_LAYER == this._parent) {
                Layer_1.Layer.WINDOW_LAYER.mouseEnabled = true;
            }
            if (Layer_1.Layer.TOP_LAYER == this._parent) {
                Layer_1.Layer.TOP_LAYER.mouseEnabled = true;
            }
            this._is_on_parent = true;
        };
        CView.prototype.removeFromParent = function () {
            if (!this._parent) {
                CFun_1.CFun.throw("VisibleView的removeFromParent中的_parent为空！");
            }
            this._parent.removeChild(this.display);
            if (this._parent.numChildren <= 0) {
                if (Layer_1.Layer.WINDOW_LAYER == this._parent) {
                    Layer_1.Layer.WINDOW_LAYER.mouseEnabled = false;
                }
                if (Layer_1.Layer.TOP_LAYER == this._parent) {
                    Layer_1.Layer.TOP_LAYER.mouseEnabled = false;
                }
            }
            this._is_on_parent = false;
            this._is_show = false;
        };
        Object.defineProperty(CView.prototype, "display", {
            get: function () {
                if (!this._display) {
                    CFun_1.CFun.throw("VisibleView的_display为空！");
                }
                return this._display;
            },
            enumerable: true,
            configurable: true
        });
        //请求显示，内部重写，调用
        CView.prototype.showNow = function () {
            this.vm.preShow();
            this._is_need_show = false;
            this.addToParent();
            this.setVisible(true);
            this.vm.afterShow();
        };
        //请求关闭，内部重写，调用
        CView.prototype.closeNow = function () {
            this.vm.preClose();
            this.removeFromParent();
            this.setVisible(false);
            this.vm.afterClose();
        };
        /*
        是否添加在父显示对象上
        */
        CView.prototype.isOnParent = function () {
            return this._is_on_parent;
        };
        /*
          是否已经显示
        */
        CView.prototype.isShow = function () {
            return this._is_show;
        };
        //关闭，外部调用
        CView.prototype.closeME = function () {
            if (!this._is_load_complete)
                return;
            this.closeNow();
        };
        /*
          开始显示，外部调用
        */
        CView.prototype.showME = function () {
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
        CView.prototype.setVisible = function (visible) {
            this.display.visible = visible;
            if (this.isOnParent())
                this._is_show = visible;
        };
        return CView;
    }());
    exports.CView = CView;
});
//# sourceMappingURL=CView.js.map