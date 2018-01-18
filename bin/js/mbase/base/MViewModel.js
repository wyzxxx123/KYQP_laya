define(["require", "exports", "../../core/viewmodel/ViewModel", "./MCView", "../../core/model/ModelManager", "../../core/CFun", "../../analyzer/analyzer1/RpcDef", "../../analyzer/analyzer1/SSend", "./InitData", "../../core/viewmodel/VMManager"], function (require, exports, ViewModel_1, MCView_1, ModelManager_1, CFun_1, RpcDef_1, SSend_1, InitData_1, VMManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class MViewModel extends ViewModel_1.ViewModel {
        constructor() {
            super();
            this.e_id = 0;
            this._cview = new MCView_1.MCView(this);
        }
        get playerData() {
            if (!ModelManager_1.ModelManager.ins.getInstByClassName("Player")) {
                CFun_1.CFun.throw("MViewModel中使用的Player数据还未初始化");
            }
            return ModelManager_1.ModelManager.ins.getInstByClassName("Player");
        }
        sendData(method_id, args = []) {
            let method = RpcDef_1.RpcDef.getMethodByID(method_id);
            let inst = ModelManager_1.ModelManager.ins.getInstByClassName(method["className"]);
            if (!inst)
                CFun_1.CFun.throw("未获得发送实例！");
            let send2 = laya.utils.Pool.getItemByClass("tmpSend", SSend_1.SSend);
            send2.method_id = method_id;
            send2.args = args;
            send2.e_id = inst["e_id"];
            send2.sendClass = inst["wyz_class_name"];
            this.send(send2);
        }
        showOther(className, exData) {
            let initData = laya.utils.Pool.getItemByClass("InitData", InitData_1.InitData);
            initData.initclassName = className;
            initData.initexData = exData;
            this.dispach(VMManager_1.VMManager.SHOW_VIEW, initData);
        }
    }
    exports.MViewModel = MViewModel;
});
//# sourceMappingURL=MViewModel.js.map