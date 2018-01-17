module module.dzpk{
    /**
    * 用户状态枚举
    * @author none
    *
    */
    export enum TEXAS_HOLDEM_ACTION {
        //玩家动作
        StandUp = 1,//站起
        ANTE = 2,//前注
        SMALL_BLINK = 3,//小盲注
        BIG_BLINK = 4,//大盲注
        CALL = 5,//跟注
        RAISE = 6,//加注
        PASS = 7,//看牌
        FOLD = 8,//盖牌
        //赌桌动作
        HOLE = 9, //发手牌
        FLOP = 10, //发翻牌
        TURN = 11, //发转牌
        RIVER = 12, //发河牌
        EARLYWIN = 13, //提前结束
        SHOWDOWN = 14, //摊牌
    }
    export enum CARD_TAG {
        NONE = 0,
        HAND1 = 1,
        HAND2 = 2,
        FLOP1 = 3,
        FLOP2 = 4,
        FLOP3 = 5,
        TURN = 6,
        RIVER = 7,
    }
    export enum HAND_TYPE {
        HIGH_CARD = 1,
        ONE_PAIR = 2,
        TWO_PAIR = 3,
        THREE_OF_A_KIND = 4,
        STRAIGHT = 5,
        FLUSH = 6,
        FULL_HOUSE = 7,
        FOUR_OF_A_KIND = 8,
        STRAIGHT_FLUSH = 9,
        ROYAL_STRAIGHT_FLUSH = 10,

    }
}
 