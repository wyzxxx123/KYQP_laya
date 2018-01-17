var mbase;
(function (mbase) {
    var data;
    (function (data) {
        class HoldemAgent extends mbase.base.MModel {
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
        data.HoldemAgent = HoldemAgent;
    })(data = mbase.data || (mbase.data = {}));
})(mbase || (mbase = {}));
//# sourceMappingURL=HoldemAgent.js.map