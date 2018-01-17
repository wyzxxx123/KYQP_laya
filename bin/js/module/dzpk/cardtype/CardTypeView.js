var module;
(function (module) {
    var dzpk;
    (function (dzpk) {
        var cardtype;
        (function (cardtype) {
            class CardTypeView extends ui.game_dzpk.DZPKCardTypeUI {
                constructor(vm) {
                    super();
                    this._vm = vm;
                }
                //覆盖onClick
                onClick(e) {
                }
                layerInit() {
                    this.centerX = NaN;
                    this.centerY = NaN;
                    this.pos(0, 81);
                }
                //覆盖对btn_close的处理
                btnCloseInit() { }
            }
            cardtype.CardTypeView = CardTypeView;
        })(cardtype = dzpk.cardtype || (dzpk.cardtype = {}));
    })(dzpk = module.dzpk || (module.dzpk = {}));
})(module || (module = {}));
//# sourceMappingURL=CardTypeView.js.map