var core;
(function (core) {
    var net;
    (function (net) {
        class ClassPro {
            constructor() { }
            toString() {
                return "收到：" + this.className + " [f_id:" + this.recv_id + ",event:" + this.event_id + ",";
            }
        }
        net.ClassPro = ClassPro;
    })(net = core.net || (core.net = {}));
})(core || (core = {}));
//# sourceMappingURL=ClassPro.js.map