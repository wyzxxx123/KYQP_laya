var mbase;
(function (mbase) {
    var base;
    (function (base) {
        class MViewModel extends core.viewmodel.ViewModel {
            constructor() {
                super();
                this.e_id = 0;
                this._cview = new base.MCView(this);
            }
            get playerData() {
                if (!core.model.ModelManager.ins.getInstByClassName("Player")) {
                    core.CFun.throw("MViewModel中使用的Player数据还未初始化");
                }
                return core.model.ModelManager.ins.getInstByClassName("Player");
            }
            sendData(method_id, args = []) {
                let method = analyzer.analyzer1.RpcDef.getMethodByID(method_id);
                let inst = core.model.ModelManager.ins.getInstByClassName(method["className"]);
                if (!inst)
                    core.CFun.throw("未获得发送实例！");
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
                this.dispach(core.viewmodel.VMManager.SHOW_VIEW, initData);
            }
        }
        base.MViewModel = MViewModel;
    })(base = mbase.base || (mbase.base = {}));
})(mbase || (mbase = {}));
//# sourceMappingURL=MViewModel.js.map