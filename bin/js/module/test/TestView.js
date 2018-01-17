var module;
(function (module) {
    var test;
    (function (test) {
        class TestView extends laya.ui.View {
            constructor(vm) {
                super();
                this._vm = vm;
            }
        }
        test.TestView = TestView;
    })(test = module.test || (module.test = {}));
})(module || (module = {}));
//# sourceMappingURL=TestView.js.map