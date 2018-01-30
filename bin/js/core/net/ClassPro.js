define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ClassPro = /** @class */ (function () {
        function ClassPro() {
        }
        ClassPro.prototype.toString = function () {
            return "收到：" + this.className + " [f_id:" + this.recv_id + ",event:" + this.event_id + ",";
        };
        return ClassPro;
    }());
    exports.ClassPro = ClassPro;
});
//# sourceMappingURL=ClassPro.js.map