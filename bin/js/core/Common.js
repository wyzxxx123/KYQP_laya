var core;
(function (core) {
    var Common = /** @class */ (function () {
        function Common() {
        }
        Common.throw = function (des) {
            throw new Error(des);
        };
        Common.log = function (log) {
            if (this.DEBUG) {
                console.log(log);
                if (this.SCREEN_PRINT) {
                    laya.utils.Log.print(log);
                }
            }
        };
        Common.SCREEN_PRINT = true;
        Common.DEBUG = true;
        return Common;
    }());
    core.Common = Common;
})(core || (core = {}));
//# sourceMappingURL=Common.js.map