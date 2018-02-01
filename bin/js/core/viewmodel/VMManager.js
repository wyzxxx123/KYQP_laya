var VMManager = /** @class */ (function () {
    function VMManager() {
        this._event_manager = EventManager.ins;
        this._event_manager.on(VMManager.SHOW_VIEW, this.onInitAndShow, this);
        this.eventInit();
    }
    VMManager.prototype.eventInit = function () {
    };
    VMManager.prototype.regist = function (type, listener) {
        this._event_manager.on(type, listener, this);
    };
    //初始化显示对象并显示
    VMManager.prototype.onInitAndShow = function (data) {
        var model = VMManager.static_dic_vm[data.className]; //laya.utils.ClassUtils.getInstance(data.className);
        if (!model) {
            var path_1 = laya.utils.ClassUtils.getRegClass(data.className);
            if (typeof path_1 == "string") {
                require([path_1], function (mod) {
                    var name = path_1.substr(path_1.lastIndexOf("/") + 1);
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
    };
    VMManager.prototype.closeAll = function () {
        var model = null;
        for (var key in VMManager.static_dic_vm) {
            model = VMManager.static_dic_vm[key];
            model.closeNow();
        }
    };
    VMManager.prototype.closeScene = function () {
        var model = null;
        for (var key in VMManager.static_dic_vm) {
            model = VMManager.static_dic_vm[key];
            if (model.getViewType() == ComView.SCENE) {
                model.closeNow();
            }
        }
    };
    VMManager.prototype.closeWindow = function () {
        var model = null;
        for (var key in VMManager.static_dic_vm) {
            model = VMManager.static_dic_vm[key];
            if (model.getViewType() == ComView.WINDOW) {
                model.closeNow();
            }
        }
    };
    VMManager.SHOW_VIEW = "SHOW_VIEW"; //显示头像选择面板
    VMManager.static_dic_vm = {};
    return VMManager;
}());
//# sourceMappingURL=VMManager.js.map