var module;
(function (module) {
    var base;
    (function (base) {
        class MViewModel extends core.viewmodel.ViewModel {
            constructor() {
                super();
                this.e_id = 0;
                this._cview = new module.base.MCView(this);
            }
            sendData(method_id, args = [], inst = this) {
                let send2 = laya.utils.Pool.getItemByClass("tmpSend", analyzer.analyzer1.SSend);
                send2.method_id = method_id;
                send2.args = args;
                send2.e_id = inst["e_id"];
                send2.sendClass = inst["wyz_class_name"];
                this.send(send2);
            }
            showOther(className, exData) {
                let initData = laya.utils.Pool.getItemByClass("InitData", base.InitData);
                initData.className = className;
                initData.exData = exData;
                this.dispach(core.viewmodel.VMManager.SHOW_WINDOW, initData);
            }
        }
        base.MViewModel = MViewModel;
    })(base = module.base || (module.base = {}));
})(module || (module = {}));
//# sourceMappingURL=MViewModel.js.map