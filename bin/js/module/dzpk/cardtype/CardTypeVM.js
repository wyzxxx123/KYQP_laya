define(["require", "exports", "../../../mbase/base/MViewModel", "./CardTypeView"], function (require, exports, MViewModel_1, CardTypeView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class CardTypeVM extends MViewModel_1.MViewModel {
        constructor() {
            super();
            this.setAtlasName = "1";
            this.setClass = CardTypeView_1.CardTypeView;
            this.setViewPath = "game_dzpk/DZPKCardType";
        }
    }
    exports.CardTypeVM = CardTypeVM;
});
//# sourceMappingURL=CardTypeVM.js.map