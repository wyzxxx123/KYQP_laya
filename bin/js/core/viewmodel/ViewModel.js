var core;
(function (core) {
    var viewmodel;
    (function (viewmodel) {
        /**
         * @description VM层
         * @author wangyz
         * @export
         * @class ViewModel
         */
        class ViewModel extends core.SendHandel {
            /**
             * Creates an instance of ViewModel.
             * @author wangyz
             * @param {*} vclass 传入的显示类型
             * @memberof ViewModel
             */
            constructor() {
                super();
                this._data = null;
                this._event_manager = core.event.EventManager.ins;
                this._event_list = [];
            }
            get data() {
                if (!this._data)
                    core.CFun.throw("ViewModel的this._data为空");
                return this._data;
            }
            regist(type, listener) {
                if (!this._event_manager)
                    core.CFun.throw("ViewModel的regist中的this._event_manager还未初始化");
                this._event_manager.on(type, listener, this);
                this._event_list.push({ type: type, listener: listener });
            }
            //派发事件
            dispach(type, data = null) {
                if (!this._event_manager)
                    core.CFun.throw("ViewModel的dispach中的this._event_manager还未初始化");
                this._event_manager.dispatch(type, data);
            }
            eventRemove() {
                let i = 0, len = this._event_list.length;
                for (i = 0; i < len; i++) {
                    this._event_manager.off(this._event_list["type"], this._event_list["listener"], this);
                }
            }
            eventInit() {
            }
            //内部可被重写的显示方法
            vmShow(data) {
                this._data = data;
                this.cview.showME();
            }
            //设置父对象
            setParent(val) {
                this.cview.setParent(val);
            }
            /*
                设置资源路径
            */
            set setAtlasName(arg_params) {
                this.cview.setAtlasName(arg_params);
            }
            /*
              设置显示类型
            */
            set setClass(arg_class) {
                this.cview.setClass(arg_class);
            }
            get view() {
                return this.cview.display;
            }
            get cview() {
                if (!this._cview)
                    core.CFun.throw("_cview还未被初始化！");
                return this._cview;
            }
            get is_show() {
                return this.cview.isShow();
            }
            vmType() {
                return this.view.viewType;
            }
            //关闭前
            preClose() {
                this.eventRemove();
            }
            //关闭中
            closeNow() {
                this.view.beClose();
                this.cview.closeME();
            }
            //关闭后
            afterClose() {
            }
            //显示前调用，已经加载完成，还未添加到舞台
            preShow() {
                this.eventInit();
            }
            //显示中接口,会被外部调用
            onShow(data) {
                this.vmShow(data);
            }
            //正常显示后
            afterShow() {
                this.view.viewInit(this._data);
            }
            /**
             * @description 获取显示对象类型
             * @author wangyz
             * @returns {string}
             * @memberof ViewModel
             */
            getViewType() {
                return this.view.viewType;
            }
        }
        viewmodel.ViewModel = ViewModel;
    })(viewmodel = core.viewmodel || (core.viewmodel = {}));
})(core || (core = {}));
//# sourceMappingURL=ViewModel.js.map