define(["require", "exports", "../view/ComView", "../event/EventManager"], function (require, exports, ComView_1, EventManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class VMManager {
        constructor() {
            this._event_manager = EventManager_1.EventManager.ins;
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
                let path = laya.utils.ClassUtils.getRegClass(data.className);
                if (typeof path == "string") {
                    require([path], function (mod) {
                        let name = path.substr(path.lastIndexOf("/") + 1);
                        model = new (mod[name])();
                        if (model) {
                            VMManager.static_dic_vm[data.className] = model;
                            model.onShow(data.exData);
                            laya.utils.Pool.recover("InitData", data);
                        }
                        else {
                        }
                    });
                }
                else {
                    model = laya.utils.ClassUtils.getInstance(data.className);
                    if (model) {
                        VMManager.static_dic_vm[data.className] = model;
                        model.onShow(data.exData);
                        laya.utils.Pool.recover("InitData", data);
                    }
                    else {
                    }
                }
            }
            else {
                model.onShow(data.exData);
                laya.utils.Pool.recover("InitData", data);
            }
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
                if (model.getViewType() == ComView_1.ComView.SCENE) {
                    model.closeNow();
                }
            }
        }
        closeWindow() {
            let model = null;
            for (let key in VMManager.static_dic_vm) {
                model = VMManager.static_dic_vm[key];
                if (model.getViewType() == ComView_1.ComView.WINDOW) {
                    model.closeNow();
                }
            }
        }
    }
    VMManager.SHOW_VIEW = "SHOW_VIEW"; //显示头像选择面板
    VMManager.static_dic_vm = {};
    exports.VMManager = VMManager;
});
//# sourceMappingURL=VMManager.js.map