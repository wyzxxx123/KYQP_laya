define(["require", "exports", "./RpcDef"], function (require, exports, RpcDef_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SSend {
        constructor() {
            this.e_id = 0;
            this.sendClass = "";
        }
        set method_id(val) {
            this._method_id = val;
            this._method = RpcDef_1.RpcDef.getMethodByID(val);
        }
        get method() {
            return this._method;
        }
        toString() {
            return new Date()["format"]("dd-hh:mm:ss,S") + " 发送->" + this.sendClass + "->" + this._method_id + "->" + this._method["name"] + " {" + this.args + "}";
        }
    }
    exports.SSend = SSend;
});
//# sourceMappingURL=SSend.js.map