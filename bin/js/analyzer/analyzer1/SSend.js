var analyzer;
(function (analyzer) {
    var analyzer1;
    (function (analyzer1) {
        class SSend {
            constructor() {
                this.e_id = 0;
                this.sendClass = "";
            }
            set method_id(val) {
                this._method_id = val;
                this._method = analyzer1.RpcDef.getMethodByID(val);
            }
            get method() {
                return this._method;
            }
            toString() {
                return new Date()["format"]("dd-hh:mm:ss,S") + " 发送->" + this.sendClass + "->" + this._method_id + "->" + this._method["name"] + " {" + this.args + "}";
            }
        }
        analyzer1.SSend = SSend;
    })(analyzer1 = analyzer.analyzer1 || (analyzer.analyzer1 = {}));
})(analyzer || (analyzer = {}));
//# sourceMappingURL=SSend.js.map