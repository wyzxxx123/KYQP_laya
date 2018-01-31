define(["require", "exports", "../base/MModel"], function (require, exports, MModel_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class HoldemAgent extends MModel_1.MModel {
        constructor() {
            super();
            //enterDeck
            this.pokers = [];
            this.publicCards = []; //enterDeck
            this.myHoleCards = []; //enterDeck
            this.gameNo = "";
            //
            this.seatNO = 0;
            this.take = 0;
            this.chip = 0;
            this.bet = 0;
            this.passable = false;
            //玩家自己的手牌
            this.cards = []; //recvHoleCard
            this.activeList = [];
        }
        recvInit() {
            this.regist("server_Client_createEntity_Account", this.onCreateMe);
        }
        onCreateMe() {
        }
    }
    exports.HoldemAgent = HoldemAgent;
});
//# sourceMappingURL=HoldemAgent.js.map