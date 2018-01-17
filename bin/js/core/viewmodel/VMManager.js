var core;
(function (core) {
    var viewmodel;
    (function (viewmodel) {
        class VMManager {
            constructor() {
                this._event_manager = core.event.EventManager.ins;
                this._event_manager.on(VMManager.SHOW_VIEW, this.onInitAndShow, this);
                this.eventInit();
            }
            eventInit() {
            }
            regist(type, listener) {
                this._event_manager.on(type, listener, this);
            }
            //初始化显示对象并显示
            onInitAndShow(data) {
                let model = VMManager.static_dic_vm[data.className]; //laya.utils.ClassUtils.getInstance(data.className);
                if (!model) {
                    model = laya.utils.ClassUtils.getInstance(data.className);
                    VMManager.static_dic_vm[data.className] = model;
                }
                model.onShow(data.exData);
                laya.utils.Pool.recover("InitData", data);
            }
            closeAll() {
                let model = null;
                for (let key in VMManager.static_dic_vm) {
                    model = VMManager.static_dic_vm[key];
                    model.closeNow();
                }
            }
            closeScene() {
                let model = null;
                for (let key in VMManager.static_dic_vm) {
                    model = VMManager.static_dic_vm[key];
                    if (model.getViewType() == core.view.ComView.SCENE) {
                        model.closeNow();
                    }
                }
            }
            closeWindow() {
                let model = null;
                for (let key in VMManager.static_dic_vm) {
                    model = VMManager.static_dic_vm[key];
                    if (model.getViewType() == core.view.ComView.WINDOW) {
                        model.closeNow();
                    }
                }
            }
        }
        VMManager.SHOW_VIEW = "SHOW_VIEW"; //显示头像选择面板
        VMManager.static_dic_vm = {};
        viewmodel.VMManager = VMManager;
    })(viewmodel = core.viewmodel || (core.viewmodel = {}));
})(core || (core = {}));
//# sourceMappingURL=VMManager.js.map