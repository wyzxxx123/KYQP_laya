var core;
(function (core) {
    var view;
    (function (view) {
        class ComView extends laya.ui.View {
            constructor() {
                super();
                this._view_type = "other";
                this.on(Laya.Event.CLICK, this, this.onClick);
                this.comInit();
                this.layerInit();
            }
            get viewType() {
                return this._view_type;
            }
            get vm() {
                if (!this._vm)
                    core.CFun.throw("ComView中_vm还未初始化！");
                return this._vm;
            }
            //组件事件初始化，实例化时调用一次
            comInit() {
            }
            //显示对象根据数据初始化，每次显示时调用
            viewInit(data) {
            }
            //关闭前调用
            beClose() {
            }
            onClick(e) {
                //阻止后续节点的监听器
                e.stopPropagation();
            }
            layerInit() {
            }
        }
        ComView.TOP = "top";
        ComView.WINDOW = "window";
        /**
         * 不需要点击空白处关窗的界面
         */
        ComView.WINDOW_NO_CLOSEAUTO = "window_no_closeauto";
        ComView.SCENE = "scene";
        view.ComView = ComView;
    })(view = core.view || (core.view = {}));
})(core || (core = {}));
//# sourceMappingURL=ComView.js.map