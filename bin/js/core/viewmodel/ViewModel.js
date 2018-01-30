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
define(["require", "exports", "../SendHandel", "../event/EventManager", "../CFun"], function (require, exports, SendHandel_1, EventManager_1, CFun_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @description VM层
     * @author wangyz
     * @export
     * @class ViewModel
     */
    var ViewModel = /** @class */ (function (_super) {
        __extends(ViewModel, _super);
        /**
         * Creates an instance of ViewModel.
         * @author wangyz
         * @param {*} vclass 传入的显示类型
         * @memberof ViewModel
         */
        function ViewModel() {
            var _this = _super.call(this) || this;
            _this._data = null;
            _this._event_manager = EventManager_1.EventManager.ins;
            _this._event_list = [];
            return _this;
        }
        Object.defineProperty(ViewModel.prototype, "data", {
            get: function () {
                if (!this._data)
                    CFun_1.CFun.throw("ViewModel的this._data为空");
                return this._data;
            },
            enumerable: true,
            configurable: true
        });
        ViewModel.prototype.regist = function (type, listener) {
            if (!this._event_manager)
                CFun_1.CFun.throw("ViewModel的regist中的this._event_manager还未初始化");
            this._event_manager.on(type, listener, this);
            this._event_list.push({ type: type, listener: listener });
        };
        //派发事件
        ViewModel.prototype.dispach = function (type, data) {
            if (data === void 0) { data = null; }
            if (!this._event_manager)
                CFun_1.CFun.throw("ViewModel的dispach中的this._event_manager还未初始化");
            this._event_manager.dispatch(type, data);
        };
        ViewModel.prototype.eventRemove = function () {
            var i = 0, len = this._event_list.length;
            for (i = 0; i < len; i++) {
                this._event_manager.off(this._event_list["type"], this._event_list["listener"], this);
            }
        };
        ViewModel.prototype.eventInit = function () {
        };
        //内部可被重写的显示方法
        ViewModel.prototype.vmShow = function (data) {
            this._data = data;
            this.cview.showME();
        };
        //设置父对象
        ViewModel.prototype.setParent = function (val) {
            this.cview.setParent(val);
        };
        Object.defineProperty(ViewModel.prototype, "setAtlasName", {
            /*
                设置资源路径
            */
            set: function (arg_params) {
                this.cview.setAtlasName(arg_params);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewModel.prototype, "setViewPath", {
            /*
                设置资源路径
            */
            set: function (arg_params) {
                this.cview.setViewPath(arg_params);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewModel.prototype, "setClass", {
            /*
              设置显示类型
            */
            set: function (arg_class) {
                this.cview.setClass(arg_class);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewModel.prototype, "view", {
            get: function () {
                return this.cview.display;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewModel.prototype, "cview", {
            get: function () {
                if (!this._cview)
                    CFun_1.CFun.throw("_cview还未被初始化！");
                return this._cview;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewModel.prototype, "is_show", {
            get: function () {
                return this.cview.isShow();
            },
            enumerable: true,
            configurable: true
        });
        ViewModel.prototype.vmType = function () {
            return this.view.viewType;
        };
        //关闭前
        ViewModel.prototype.preClose = function () {
            this.eventRemove();
        };
        //关闭中
        ViewModel.prototype.closeNow = function () {
            this.view.beClose();
            this.cview.closeME();
        };
        //关闭后
        ViewModel.prototype.afterClose = function () {
        };
        //显示前调用，已经加载完成，还未添加到舞台
        ViewModel.prototype.preShow = function () {
            this.eventInit();
        };
        //显示中接口,会被外部调用
        ViewModel.prototype.onShow = function (data) {
            this.vmShow(data);
        };
        //正常显示后
        ViewModel.prototype.afterShow = function () {
            this.view.viewInit(this._data);
        };
        /**
         * @description 获取显示对象类型
         * @author wangyz
         * @returns {string}
         * @memberof ViewModel
         */
        ViewModel.prototype.getViewType = function () {
            return this.view.viewType;
        };
        return ViewModel;
    }(SendHandel_1.SendHandel));
    exports.ViewModel = ViewModel;
});
//# sourceMappingURL=ViewModel.js.map