var module;
(function (module) {
    var dzpk;
    (function (dzpk) {
        var help;
        (function (help) {
            class DZPKHelpVM extends mbase.base.MViewModel {
                constructor() {
                    super();
                    this.setAtlasName = "res/atlas/dzpk/helpWindow.atlas,res/atlas/dzpk/zh-cn/helpWindow.atlas";
                    this.setClass = help.DZPKHelpView;
                }
            }
            help.DZPKHelpVM = DZPKHelpVM;
        })(help = dzpk.help || (dzpk.help = {}));
    })(dzpk = module.dzpk || (module.dzpk = {}));
})(module || (module = {}));
//# sourceMappingURL=DZPKHelpVM.js.map