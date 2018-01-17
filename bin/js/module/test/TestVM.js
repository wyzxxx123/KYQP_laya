var module;
(function (module) {
    var test;
    (function (test) {
        class TestVM extends core.viewmodel.ViewModel {
            constructor() {
                super();
                this._cview = new core.view.CView("res/atlas/comp.atlas", test.TestView, this, Laya.stage);
            }
            dataChange() {
                this.regist("proChange", this.proChange);
            }
            proChange(data) {
                console.log(data);
            }
        }
        test.TestVM = TestVM;
    })(test = module.test || (module.test = {}));
})(module || (module = {}));
//# sourceMappingURL=TestVM.js.map