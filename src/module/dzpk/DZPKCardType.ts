module module.dzpk{
    /**
     * 牌型
     * @author none
     *
     */
    export enum DZPKCardType {
        /** 错误类型 **/
        ERROR,
        /** 单牌类型 **/
        SINGLE,
        /** 对子类型 **/
        DOUBLE,
        /** 两对类型 **/
        TWODOUBLE,
        /** 三张类型 **/
        THREE,
        /** 顺子类型 **/
        LINE,
        /** 同花 **/
        STRAIGHT,
        /** 葫芦-三带二 **/
        FullHouse,
        /** 炸弹类型 **/
        FOUR,
        /** 七同花顺**/
        STRAIGHTLINE,
        /** 皇家同花顺 **/
        BIGSTRAIGHTLINE,
    }
}
