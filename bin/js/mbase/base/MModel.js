var mbase;
(function (mbase) {
    var base;
    (function (base) {
        class MModel extends core.model.Model {
            constructor() {
                super();
            }
            sendData(method_id, args = []) {
                let send2 = laya.utils.Pool.getItemByClass("tmpSend", analyzer.analyzer1.SSend);
                send2.method_id = method_id;
                send2.args = args;
                send2.e_id = this["e_id"];
                send2.sendClass = this["wyz_class_name"];
                this.send(send2);
            }
        }
        base.MModel = MModel;
    })(base = mbase.base || (mbase.base = {}));
})(mbase || (mbase = {}));
//# sourceMappingURL=MModel.js.map