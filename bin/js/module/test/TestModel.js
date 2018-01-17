var module;
(function (module) {
    var test;
    (function (test) {
        class TestModel extends core.model.Model {
            constructor() {
                super();
            }
            recvInit() {
                this.regist("recvData", this.recvData);
            }
            recvData(data) {
                this.proChange("proChange", data);
            }
        }
        test.TestModel = TestModel;
    })(test = module.test || (module.test = {}));
})(module || (module = {}));
//# sourceMappingURL=TestModel.js.map