define(["require", "exports", "../../core/model/Model", "../../analyzer/analyzer1/SSend"], function (require, exports, Model_1, SSend_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class MModel extends Model_1.Model {
        constructor() {
            super();
        }
        sendData(method_id, args = []) {
            let send2 = laya.utils.Pool.getItemByClass("tmpSend", SSend_1.SSend);
            send2.method_id = method_id;
            send2.args = args;
            send2.e_id = this["e_id"];
            send2.sendClass = this["wyz_class_name"];
            this.send(send2);
        }
    }
    exports.MModel = MModel;
});
//# sourceMappingURL=MModel.js.map