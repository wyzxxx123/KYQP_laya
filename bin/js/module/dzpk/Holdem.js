define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
    * 用户状态枚举
    * @author none
    *
    */
    var TEXAS_HOLDEM_ACTION;
    (function (TEXAS_HOLDEM_ACTION) {
        //玩家动作
        TEXAS_HOLDEM_ACTION[TEXAS_HOLDEM_ACTION["StandUp"] = 1] = "StandUp";
        TEXAS_HOLDEM_ACTION[TEXAS_HOLDEM_ACTION["ANTE"] = 2] = "ANTE";
        TEXAS_HOLDEM_ACTION[TEXAS_HOLDEM_ACTION["SMALL_BLINK"] = 3] = "SMALL_BLINK";
        TEXAS_HOLDEM_ACTION[TEXAS_HOLDEM_ACTION["BIG_BLINK"] = 4] = "BIG_BLINK";
        TEXAS_HOLDEM_ACTION[TEXAS_HOLDEM_ACTION["CALL"] = 5] = "CALL";
        TEXAS_HOLDEM_ACTION[TEXAS_HOLDEM_ACTION["RAISE"] = 6] = "RAISE";
        TEXAS_HOLDEM_ACTION[TEXAS_HOLDEM_ACTION["PASS"] = 7] = "PASS";
        TEXAS_HOLDEM_ACTION[TEXAS_HOLDEM_ACTION["FOLD"] = 8] = "FOLD";
        //赌桌动作
        TEXAS_HOLDEM_ACTION[TEXAS_HOLDEM_ACTION["HOLE"] = 9] = "HOLE";
        TEXAS_HOLDEM_ACTION[TEXAS_HOLDEM_ACTION["FLOP"] = 10] = "FLOP";
        TEXAS_HOLDEM_ACTION[TEXAS_HOLDEM_ACTION["TURN"] = 11] = "TURN";
        TEXAS_HOLDEM_ACTION[TEXAS_HOLDEM_ACTION["RIVER"] = 12] = "RIVER";
        TEXAS_HOLDEM_ACTION[TEXAS_HOLDEM_ACTION["EARLYWIN"] = 13] = "EARLYWIN";
        TEXAS_HOLDEM_ACTION[TEXAS_HOLDEM_ACTION["SHOWDOWN"] = 14] = "SHOWDOWN";
    })(TEXAS_HOLDEM_ACTION = exports.TEXAS_HOLDEM_ACTION || (exports.TEXAS_HOLDEM_ACTION = {}));
    var CARD_TAG;
    (function (CARD_TAG) {
        CARD_TAG[CARD_TAG["NONE"] = 0] = "NONE";
        CARD_TAG[CARD_TAG["HAND1"] = 1] = "HAND1";
        CARD_TAG[CARD_TAG["HAND2"] = 2] = "HAND2";
        CARD_TAG[CARD_TAG["FLOP1"] = 3] = "FLOP1";
        CARD_TAG[CARD_TAG["FLOP2"] = 4] = "FLOP2";
        CARD_TAG[CARD_TAG["FLOP3"] = 5] = "FLOP3";
        CARD_TAG[CARD_TAG["TURN"] = 6] = "TURN";
        CARD_TAG[CARD_TAG["RIVER"] = 7] = "RIVER";
    })(CARD_TAG = exports.CARD_TAG || (exports.CARD_TAG = {}));
    var HAND_TYPE;
    (function (HAND_TYPE) {
        HAND_TYPE[HAND_TYPE["HIGH_CARD"] = 1] = "HIGH_CARD";
        HAND_TYPE[HAND_TYPE["ONE_PAIR"] = 2] = "ONE_PAIR";
        HAND_TYPE[HAND_TYPE["TWO_PAIR"] = 3] = "TWO_PAIR";
        HAND_TYPE[HAND_TYPE["THREE_OF_A_KIND"] = 4] = "THREE_OF_A_KIND";
        HAND_TYPE[HAND_TYPE["STRAIGHT"] = 5] = "STRAIGHT";
        HAND_TYPE[HAND_TYPE["FLUSH"] = 6] = "FLUSH";
        HAND_TYPE[HAND_TYPE["FULL_HOUSE"] = 7] = "FULL_HOUSE";
        HAND_TYPE[HAND_TYPE["FOUR_OF_A_KIND"] = 8] = "FOUR_OF_A_KIND";
        HAND_TYPE[HAND_TYPE["STRAIGHT_FLUSH"] = 9] = "STRAIGHT_FLUSH";
        HAND_TYPE[HAND_TYPE["ROYAL_STRAIGHT_FLUSH"] = 10] = "ROYAL_STRAIGHT_FLUSH";
    })(HAND_TYPE = exports.HAND_TYPE || (exports.HAND_TYPE = {}));
});
//# sourceMappingURL=Holdem.js.map