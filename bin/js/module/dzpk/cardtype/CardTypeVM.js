var module;
(function (module) {
    var dzpk;
    (function (dzpk) {
        var cardtype;
        (function (cardtype) {
            class CardTypeVM extends mbase.base.MViewModel {
                constructor() {
                    super();
                    this.setAtlasName = "1";
                    this.setClass = cardtype.CardTypeView;
                }
            }
            cardtype.CardTypeVM = CardTypeVM;
        })(cardtype = dzpk.cardtype || (dzpk.cardtype = {}));
    })(dzpk = module.dzpk || (module.dzpk = {}));
})(module || (module = {}));
//# sourceMappingURL=CardTypeVM.js.map