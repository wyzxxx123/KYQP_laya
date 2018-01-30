define(["require", "exports", "./RpcDef"], function (require, exports, RpcDef_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SSend = /** @class */ (function () {
        function SSend() {
            this.e_id = 0;
            this.sendClass = "";
        }
        Object.defineProperty(SSend.prototype, "method_id", {
            set: function (val) {
                this._method_id = val;
                this._method = RpcDef_1.RpcDef.getMethodByID(val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SSend.prototype, "method", {
            get: function () {
                return this._method;
            },
            enumerable: true,
            configurable: true
        });
        SSend.prototype.toString = function () {
            return new Date()["format"]("dd-hh:mm:ss,S") + " 发送->" + this.sendClass + "->" + this._method_id + "->" + this._method["name"] + " {" + this.args + "}";
        };
        return SSend;
    }());
    exports.SSend = SSend;
});
//# sourceMappingURL=SSend.js.map