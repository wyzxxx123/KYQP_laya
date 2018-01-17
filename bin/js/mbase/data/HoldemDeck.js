var mbase;
(function (mbase) {
    var data;
    (function (data) {
        class HoldemDeck extends mbase.base.MModel {
            constructor() {
                super();
                //sitdown
                this.seat = 0; //一个人赢也是这个参数
                this.rid = 0;
                this.name = 0;
                this.icon = 0;
                this.sex = 0;
                this.chip = 0;
                //某座位玩家又带了多少筹码
                this.amount = 0;
                this._isPlaying = false;
                this.nextHandCD = 0;
                this.hand = 0;
                this.curHand = 0;
                this.miniBet = 0;
                this.miniRaise = 0;
                this.dealer = 0;
                //某座位玩家操作
                this.action = 0;
                this.bet = 0;
                this.cd = 0;
                //翻牌
                this.cards = [];
                //转牌，河牌
                this.card = 0;
                /**
                 * 底池
                 */
                this.pot = 0;
                this.blink = 0;
                this.ante = 0;
                this.holeCards = [];
                this.bestHands = [];
                this.winner = [];
                //所有人弃牌后获胜的位置
                this.seatNO = 0;
            }
            get isPlaying() {
                return this._isPlaying;
            }
            set isPlaying(value) {
                this._isPlaying = value;
            }
            recvInit() {
                this.regist("server_Client_createEntity_HoldemDeck", this.onCreateMe);
            }
            onCreateMe() {
            }
        }
        data.HoldemDeck = HoldemDeck;
    })(data = mbase.data || (mbase.data = {}));
})(mbase || (mbase = {}));
//# sourceMappingURL=HoldemDeck.js.map