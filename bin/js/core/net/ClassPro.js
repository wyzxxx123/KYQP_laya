define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ClassPro {
        constructor() { }
        toString() {
            return "收到：" + this.className + " [f_id:" + this.recv_id + ",event:" + this.event_id + ",";
        }
    }
    exports.ClassPro = ClassPro;
});
//# sourceMappingURL=ClassPro.js.map