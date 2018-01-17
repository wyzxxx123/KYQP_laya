var module;
(function (module) {
    var dzpk;
    (function (dzpk) {
        var help;
        (function (help) {
            class DZPKHelpView extends ui.game_dzpk.DZPKHelpUI {
                constructor(vm) {
                    super();
                    this._vm = vm;
                }
                onSelecte(index) {
                    //切换ViewStack子页面
                    this.vs_des.selectedIndex = index;
                }
                initSelect() {
                    this.tab_chose.selectedIndex = 0;
                }
                beClose() {
                    this.tab_chose.selectedIndex = -1;
                }
                comInit() {
                    this.on(Laya.Event.DISPLAY, this, this.initSelect);
                    this.tab_chose.selectHandler = Handler.create(this, this.onSelecte, [], false);
                    this.tab_chose.selectedIndex = -1;
                }
            }
            help.DZPKHelpView = DZPKHelpView;
        })(help = dzpk.help || (dzpk.help = {}));
    })(dzpk = module.dzpk || (module.dzpk = {}));
})(module || (module = {}));
//# sourceMappingURL=DZPKHelpView.js.map