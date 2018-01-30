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
    var HoldemAgent = /** @class */ (function (_super) {
        __extends(HoldemAgent, _super);
        function HoldemAgent() {
            var _this = _super.call(this) || this;
            //enterDeck
            _this.pokers = [];
            _this.publicCards = []; //enterDeck
            _this.myHoleCards = []; //enterDeck
            _this.gameNo = "";
            //
            _this.seatNO = 0;
            _this.take = 0;
            _this.chip = 0;
            _this.bet = 0;
            _this.passable = false;
            //玩家自己的手牌
            _this.cards = []; //recvHoleCard
            _this.activeList = [];
            return _this;
        }
        HoldemAgent.prototype.recvInit = function () {
            this.regist("server_Client_createEntity_Account", this.onCreateMe);
        };
        HoldemAgent.prototype.onCreateMe = function () {
        };
        return HoldemAgent;
    }(MModel_1.MModel));
    exports.HoldemAgent = HoldemAgent;
});
//# sourceMappingURL=HoldemAgent.js.map