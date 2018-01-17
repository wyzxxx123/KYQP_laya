var module;
(function (module) {
    var pipei;
    (function (pipei) {
        class PiPeiView extends ui.pipei.PiPeiViewUI {
            constructor(vm) {
                super();
                this._vm = vm;
            }
        }
        pipei.PiPeiView = PiPeiView;
    })(pipei = module.pipei || (module.pipei = {}));
})(module || (module = {}));
//# sourceMappingURL=PiPeiView.js.map