var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../base/MModel"], function (require, exports, MModel_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HoldemDeck = /** @class */ (function (_super) {
        __extends(HoldemDeck, _super);
        function HoldemDeck() {
            var _this = _super.call(this) || this;
            //sitdown
            _this.seat = 0; //一个人赢也是这个参数
            _this.rid = 0;
            _this.name = 0;
            _this.icon = 0;
            _this.sex = 0;
            _this.chip = 0;
            //某座位玩家又带了多少筹码
            _this.amount = 0;
            _this._isPlaying = false;
            _this.nextHandCD = 0;
            _this.hand = 0;
            _this.curHand = 0;
            _this.miniBet = 0;
            _this.miniRaise = 0;
            _this.dealer = 0;
            //某座位玩家操作
            _this.action = 0;
            _this.bet = 0;
            _this.cd = 0;
            //翻牌
            _this.cards = [];
            //转牌，河牌
            _this.card = 0;
            /**
             * 底池
             */
            _this.pot = 0;
            _this.blink = 0;
            _this.ante = 0;
            _this.holeCards = [];
            _this.bestHands = [];
            _this.winner = [];
            //所有人弃牌后获胜的位置
            _this.seatNO = 0;
            return _this;
        }
        Object.defineProperty(HoldemDeck.prototype, "isPlaying", {
            get: function () {
                return this._isPlaying;
            },
            set: function (value) {
                this._isPlaying = value;
            },
            enumerable: true,
            configurable: true
        });
        HoldemDeck.prototype.recvInit = function () {
            this.regist("server_Client_createEntity_HoldemDeck", this.onCreateMe);
        };
        HoldemDeck.prototype.onCreateMe = function () {
        };
        return HoldemDeck;
    }(MModel_1.MModel));
    exports.HoldemDeck = HoldemDeck;
});
//# sourceMappingURL=HoldemDeck.js.map