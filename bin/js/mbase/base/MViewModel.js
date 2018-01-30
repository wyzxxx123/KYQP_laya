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
define(["require", "exports", "../../core/viewmodel/ViewModel", "./MCView", "../../core/model/ModelManager", "../../core/CFun", "../../analyzer/analyzer1/RpcDef", "../../analyzer/analyzer1/SSend", "./InitData", "../../core/viewmodel/VMManager"], function (require, exports, ViewModel_1, MCView_1, ModelManager_1, CFun_1, RpcDef_1, SSend_1, InitData_1, VMManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MViewModel = /** @class */ (function (_super) {
        __extends(MViewModel, _super);
        function MViewModel() {
            var _this = _super.call(this) || this;
            _this.e_id = 0;
            _this._cview = new MCView_1.MCView(_this);
            return _this;
        }
        Object.defineProperty(MViewModel.prototype, "playerData", {
            get: function () {
                if (!ModelManager_1.ModelManager.ins.getInstByClassName("Player")) {
                    CFun_1.CFun.throw("MViewModel中使用的Player数据还未初始化");
                }
                return ModelManager_1.ModelManager.ins.getInstByClassName("Player");
            },
            enumerable: true,
            configurable: true
        });
        MViewModel.prototype.sendData = function (method_id, args) {
            if (args === void 0) { args = []; }
            var method = RpcDef_1.RpcDef.getMethodByID(method_id);
            var inst = ModelManager_1.ModelManager.ins.getInstByClassName(method["className"]);
            if (!inst)
                CFun_1.CFun.throw("未获得发送实例！");
            var send2 = laya.utils.Pool.getItemByClass("tmpSend", SSend_1.SSend);
            send2.method_id = method_id;
            send2.args = args;
            send2.e_id = inst["e_id"];
            send2.sendClass = inst["wyz_class_name"];
            this.send(send2);
        };
        MViewModel.prototype.showOther = function (className, exData) {
            var initData = laya.utils.Pool.getItemByClass("InitData", InitData_1.InitData);
            initData.className = className;
            initData.exData = exData;
            this.dispach(VMManager_1.VMManager.SHOW_VIEW, initData);
        };
        return MViewModel;
    }(ViewModel_1.ViewModel));
    exports.MViewModel = MViewModel;
});
//# sourceMappingURL=MViewModel.js.map