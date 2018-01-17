var core;
(function (core) {
    var view;
    (function (view) {
        class WinComView extends laya.ui.Dialog {
            constructor() {
                super();
                this.comInit();
                this.centerX = 0;
                this.centerY = 0;
            }
            get view_type() {
                return this._view_type;
            }
            //组件事件初始化
            comInit() {
            }
            //显示对象根据数据初始化
            viewInit(data) {
            }
            onClose() {
                if (!this._vm)
                    core.CFun.throw("onClose时this._vm不存在！");
                this._vm.closeNow();
            }
        }
        view.WinComView = WinComView;
    })(view = core.view || (core.view = {}));
})(core || (core = {}));
//# sourceMappingURL=WinComView.js.map