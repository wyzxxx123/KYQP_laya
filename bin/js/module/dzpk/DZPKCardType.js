define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * 牌型
     * @author none
     *
     */
    var DZPKCardType;
    (function (DZPKCardType) {
        /** 错误类型 **/
        DZPKCardType[DZPKCardType["ERROR"] = 0] = "ERROR";
        /** 单牌类型 **/
        DZPKCardType[DZPKCardType["SINGLE"] = 1] = "SINGLE";
        /** 对子类型 **/
        DZPKCardType[DZPKCardType["DOUBLE"] = 2] = "DOUBLE";
        /** 两对类型 **/
        DZPKCardType[DZPKCardType["TWODOUBLE"] = 3] = "TWODOUBLE";
        /** 三张类型 **/
        DZPKCardType[DZPKCardType["THREE"] = 4] = "THREE";
        /** 顺子类型 **/
        DZPKCardType[DZPKCardType["LINE"] = 5] = "LINE";
        /** 同花 **/
        DZPKCardType[DZPKCardType["STRAIGHT"] = 6] = "STRAIGHT";
        /** 葫芦-三带二 **/
        DZPKCardType[DZPKCardType["FullHouse"] = 7] = "FullHouse";
        /** 炸弹类型 **/
        DZPKCardType[DZPKCardType["FOUR"] = 8] = "FOUR";
        /** 七同花顺**/
        DZPKCardType[DZPKCardType["STRAIGHTLINE"] = 9] = "STRAIGHTLINE";
        /** 皇家同花顺 **/
        DZPKCardType[DZPKCardType["BIGSTRAIGHTLINE"] = 10] = "BIGSTRAIGHTLINE";
    })(DZPKCardType = exports.DZPKCardType || (exports.DZPKCardType = {}));
});
//# sourceMappingURL=DZPKCardType.js.map