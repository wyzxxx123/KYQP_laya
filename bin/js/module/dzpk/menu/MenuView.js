var module;
(function (module) {
    var dzpk;
    (function (dzpk) {
        var menu;
        (function (menu) {
            class MenuView extends ui.game_dzpk.DZPKMenuUI {
                constructor(vm) {
                    super();
                    this._vm = vm;
                }
                onOpenCard() {
                    this.vm.openCard();
                }
                onOut() {
                    this.vm.requestOut();
                }
                onRecord() {
                    this.vm.showRecord();
                }
                onSetting() {
                    this.vm.showSetting();
                }
                beClose() {
                    super.beClose();
                }
                comInit() {
                    this.btn_card.clickHandler = Handler.create(this, this.onOpenCard, [], false);
                    this.btn_out.clickHandler = Handler.create(this, this.onOut, [], false);
                    this.btn_record.clickHandler = Handler.create(this, this.onRecord, [], false);
                    this.btn_setting.clickHandler = Handler.create(this, this.onSetting, [], false);
                }
                layerInit() {
                    this.centerX = NaN;
                    this.centerY = NaN;
                    this.pos(0, 89);
                }
                //覆盖对btn_close的处理
                btnCloseInit() { }
            }
            menu.MenuView = MenuView;
        })(menu = dzpk.menu || (dzpk.menu = {}));
    })(dzpk = module.dzpk || (module.dzpk = {}));
})(module || (module = {}));
//# sourceMappingURL=MenuView.js.map