var module;
(function (module) {
    var dzpk;
    (function (dzpk) {
        var pipei;
        (function (pipei) {
            class PiPeiView extends ui.pipei.PiPeiViewUI {
                constructor(vm) {
                    super();
                    this._vm = vm;
                    this._view_type = core.view.ComView.WINDOW_NO_CLOSEAUTO;
                }
                onCancel() {
                    this.vm.cancelPiPei();
                }
                comInit() {
                    this.btn_close.on(Laya.Event.CLICK, this, this.onCancel);
                }
            }
            pipei.PiPeiView = PiPeiView;
        })(pipei = dzpk.pipei || (dzpk.pipei = {}));
    })(dzpk = module.dzpk || (module.dzpk = {}));
})(module || (module = {}));
//# sourceMappingURL=PiPeiView.js.map