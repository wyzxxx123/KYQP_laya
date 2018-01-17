var module;
(function (module) {
    var dzpk;
    (function (dzpk) {
        /**
         * 牌型判断逻辑
         * @author none
         *
         */
        class DZPKCardLogic extends CardLogic {
            constructor() {
                super();
                if (DZPKCardLogic._instance) {
                    core.CFun.throw("单例！");
                }
            }
            /** 组合自己的牌和公共牌 **/
            TogetherCardList(myCardList, publicCardList) {
                core.CFun.remove(myCardList, 0);
                core.CFun.remove(publicCardList, 0);
                return publicCardList.concat(myCardList);
            }
            /**
             * 获取牌型
             */
            getDZPKCardType(myCardList, publicCardList) {
                if (myCardList.length == 0) {
                    return dzpk.DZPKCardType.ERROR;
                }
                if (this.findBigStraightLine(myCardList, publicCardList).length > 0) {
                    return dzpk.DZPKCardType.BIGSTRAIGHTLINE;
                }
                if (this.findStraightLine(myCardList, publicCardList).length > 0) {
                    return dzpk.DZPKCardType.STRAIGHTLINE;
                }
                if (this.findFour(myCardList, publicCardList).length > 0) {
                    return dzpk.DZPKCardType.FOUR;
                }
                if (this.findFullHouse(myCardList, publicCardList).length > 0) {
                    return dzpk.DZPKCardType.FullHouse;
                }
                if (this.findStraight(myCardList, publicCardList).length > 0) {
                    return dzpk.DZPKCardType.STRAIGHT;
                }
                if (this.findLine(myCardList, publicCardList).length > 0) {
                    return dzpk.DZPKCardType.LINE;
                }
                if (this.findThree(myCardList, publicCardList).length > 0) {
                    return dzpk.DZPKCardType.THREE;
                }
                if (this.findTwo(myCardList, publicCardList).length > 1) {
                    return dzpk.DZPKCardType.TWODOUBLE;
                }
                if (this.findTwo(myCardList, publicCardList).length > 0) {
                    return dzpk.DZPKCardType.DOUBLE;
                }
                return dzpk.DZPKCardType.SINGLE;
            }
            /**
            * 获取最大牌型的牌
            */
            getCardTypeCards(myCardList, publicCardList) {
                if (myCardList.length == 0) {
                    return { cards: [], cardType: dzpk.DZPKCardType.ERROR };
                }
                var cards = this.findBigStraightLine(myCardList, publicCardList);
                if (cards.length > 0) {
                    //this.print(cards + " 皇家同花顺");
                    return { cards: cards[0], cardType: dzpk.DZPKCardType.BIGSTRAIGHTLINE };
                }
                cards = this.findStraightLine(myCardList, publicCardList);
                if (cards.length > 0) {
                    //this.print(cards + " 同花顺");
                    return { cards: cards[0], cardType: dzpk.DZPKCardType.STRAIGHTLINE };
                }
                cards = this.findFour(myCardList, publicCardList);
                if (cards.length > 0) {
                    //this.print(cards + " 四张");
                    return { cards: cards[0], cardType: dzpk.DZPKCardType.FOUR };
                }
                cards = this.findFullHouse(myCardList, publicCardList);
                if (cards.length > 0) {
                    //this.print(cards + " 葫芦");
                    return { cards: cards[0], myCardList, publicCardList, cardType: dzpk.DZPKCardType.FullHouse };
                }
                cards = this.findStraight(myCardList, publicCardList);
                if (cards.length > 0) {
                    //this.print(cards + " 同花");
                    cards[0].length = 5;
                    return { cards: cards[0], cardType: dzpk.DZPKCardType.STRAIGHT };
                }
                cards = this.findLine(myCardList, publicCardList);
                if (cards.length > 0) {
                    //this.print(cards + " 顺子");
                    return { cards: cards[0], cardType: dzpk.DZPKCardType.LINE };
                }
                cards = this.findThree(myCardList, publicCardList);
                if (cards.length > 0) {
                    //this.print(cards + " 三张");
                    return { cards: cards[0], cardType: dzpk.DZPKCardType.THREE };
                }
                cards = this.findTwo(myCardList, publicCardList);
                if (cards.length > 1) {
                    if (cards.length > 2) {
                        cards = this.getMaxTwoPair(cards);
                        //this.print(cards + " 两对");
                        return { cards: cards[0].concat(cards[1]), cardType: dzpk.DZPKCardType.TWODOUBLE };
                    }
                    //this.print(cards + " 两对");
                    return { cards: cards[0].concat(cards[1]), cardType: dzpk.DZPKCardType.TWODOUBLE };
                }
                cards = this.findTwo(myCardList, publicCardList);
                if (cards.length > 0) {
                    //this.print(cards + " 一对");
                    return { cards: cards[0], cardType: dzpk.DZPKCardType.DOUBLE };
                }
                return { cards: [], cardType: dzpk.DZPKCardType.SINGLE };
            }
            /** 查找顺子 **/
            findLine(myCardList, publicCardList, linelength = 5) {
                var result = [];
                var cardData = this.TogetherCardList(myCardList, publicCardList);
                this.SortByCardData(cardData);
                var lineData = [];
                for (var i = 0; i < cardData.length; i++) {
                    lineData.push(cardData[i]);
                    for (var j = i + 1; j < cardData.length; j++) {
                        if (((this.getCardValue(cardData[i]) == 1 ? 14 : this.getCardValue(cardData[i])) - this.getCardValue(cardData[j])) == lineData.length && //数字之间小于等于4
                            this.getCardValue(cardData[i]) != this.getCardValue(cardData[j])) {
                            lineData.push(cardData[j]);
                            if (lineData.length == linelength) {
                                result.push(lineData);
                                break;
                            }
                        }
                        else {
                            continue;
                        }
                    }
                    if (this.getCardValue(cardData[i]) == 1) {
                        lineData = [];
                        lineData.push(cardData[i]);
                        for (var j = i + 1; j < cardData.length; j++) {
                            var isPush = false;
                            isPush = 1 - this.getCardValue(cardData[j]) == lineData.length - linelength && //数字之间小于等于-4
                                this.getCardValue(cardData[i]) != this.getCardValue(cardData[j]);
                            if (isPush) {
                                lineData.push(cardData[j]);
                                if (lineData.length == linelength) {
                                    result.push(lineData);
                                    break;
                                }
                            }
                            else {
                                continue;
                            }
                        }
                    }
                    lineData = [];
                }
                if (result.length > 1 && this.getCardValue(result[0][0]) == 1 && this.getCardValue(result[0][4]) == 2) {
                    var temp = result[0];
                    core.CFun.remove(result, result[0]);
                    result.push(temp);
                }
                return result;
            }
            /**  查找同花顺**/
            findStraightLine(myCardList, publicCardList, linelength = 5) {
                var straightList = this.findStraight(myCardList, publicCardList); //取出所有的同花
                var lineDataList = this.findLine(straightList.length > 0 ? straightList[0] : [], [], linelength);
                return lineDataList;
            }
            /**  查找皇家同花顺**/
            findBigStraightLine(myCardList, publicCardList, linelength = 5) {
                var result = [];
                var lineDataList = this.findStraightLine(myCardList, publicCardList, linelength); //取出所有的同花
                for (var i = 0; i < lineDataList.length; i++) {
                    //如果包含A和K
                    if (this.getCardByValue(lineDataList[i], this.getCardValue(13)) != 0 && this.getCardByValue(lineDataList[i], this.getCardValue(12)) != 0) {
                        result.push(lineDataList[i]);
                    }
                }
                return result;
            }
            /** 查找同花 **/
            findStraight(myCardList, publicCardList) {
                var result = [];
                var cardData = this.TogetherCardList(myCardList, publicCardList);
                this.SortByCardData(cardData);
                var objColor = {};
                for (var i = 0; i < cardData.length; i++) {
                    var color = this.getCardColor(cardData[i]);
                    if (!objColor.hasOwnProperty(color.toString())) {
                        objColor[color.toString()] = [];
                    }
                    objColor[color.toString()].push(cardData[i]);
                }
                var key;
                for (key in objColor) {
                    if (objColor[key].length >= 5) {
                        result.push(objColor[key]);
                        break;
                    }
                }
                return result;
            }
            /** 查找4张 **/
            findFour(myCardList, publicCardList) {
                var result = [];
                var cardData = this.TogetherCardList(myCardList, publicCardList);
                this.SortByCardData(cardData);
                for (var i = 0; i < cardData.length; i++) {
                    if (i + 3 < cardData.length) {
                        if (this.getCardValue(cardData[i]) == this.getCardValue(cardData[i + 1])
                            && this.getCardValue(cardData[i + 1]) == this.getCardValue(cardData[i + 2])
                            && this.getCardValue(cardData[i + 2]) == this.getCardValue(cardData[i + 3])) {
                            var fourData = [cardData[i], cardData[i + 1], cardData[i + 2], cardData[i + 3]];
                            result.push(fourData);
                        }
                    }
                }
                return result;
            }
            /** 查找3张 **/
            findThree(myCardList, publicCardList) {
                var result = [];
                var cardData = this.TogetherCardList(myCardList, publicCardList);
                this.SortByCardData(cardData);
                for (var i = 0; i < cardData.length; i++) {
                    if (i + 2 < cardData.length) {
                        if (this.getCardValue(cardData[i]) == this.getCardValue(cardData[i + 1])
                            && this.getCardValue(cardData[i + 1]) == this.getCardValue(cardData[i + 2])) {
                            var fourData = [cardData[i], cardData[i + 1], cardData[i + 2]];
                            result.push(fourData);
                        }
                    }
                }
                return result;
            }
            /** 查找2张 **/
            findTwo(myCardList, publicCardList) {
                var result = [];
                var cardData = this.TogetherCardList(myCardList, publicCardList);
                this.SortByCardData(cardData);
                for (var i = 0; i < cardData.length; i++) {
                    if (i + 1 < cardData.length) {
                        if (this.getCardValue(cardData[i]) == this.getCardValue(cardData[i + 1])) {
                            var fourData = [cardData[i], cardData[i + 1]];
                            result.push(fourData);
                        }
                    }
                }
                return result;
            }
            /** 查找葫芦 **/
            findFullHouse(myCardList, publicCardList) {
                var result = [];
                var cardData = this.TogetherCardList(myCardList, publicCardList);
                this.SortByCardData(cardData);
                var threeList = this.findThree(myCardList, publicCardList); //找出所有的三张
                if (threeList.length == 0) {
                    return result;
                }
                for (var i = 0; i < threeList.length; i++) {
                    var threeData = threeList[i];
                    var newCardData = []; //踢除上面的三张
                    for (var j = 0; j < cardData.length; j++) {
                        if (threeData.indexOf(cardData[j]) == -1) {
                            newCardData.push(cardData[j]);
                        }
                    }
                    var twoList = this.findTwo(newCardData, []);
                    for (var a = 0; a < twoList.length; a++) {
                        result.push(threeData.concat(twoList[a]));
                    }
                }
                return result;
            }
            /** 根据牌值排序，从大到小，A最大 **/
            SortByCardData(cardData) {
                var self = this;
                cardData.sort((left, right) => {
                    var leftVale = self.getCardValue(left);
                    var rightVale = self.getCardValue(right);
                    leftVale = leftVale == 1 ? 14 : leftVale;
                    rightVale = rightVale == 1 ? 14 : rightVale;
                    if (leftVale > rightVale) {
                        return -1;
                    }
                    else if (leftVale < rightVale) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
            }
            /*
            * 如果牌型中有三个对子，则拿出两个最大的对子
            * */
            getMaxTwoPair(cards) {
                var cardValues = [];
                for (var i = 0; i < cards.length; i++) {
                    if (this.getCardValue(cards[i][0]) == 1) {
                        cardValues.push(14);
                    }
                    else {
                        cardValues.push(this.getCardValue(cards[i][0]));
                    }
                }
                cards.splice(cardValues.indexOf(Math.min.apply(null, cardValues)), 1); //删除最小的对子
                return cards;
            }
            static get ins() {
                if (!this._instance) {
                    this._instance = new DZPKCardLogic();
                }
                return this._instance;
            }
        }
        dzpk.DZPKCardLogic = DZPKCardLogic;
    })(dzpk = module.dzpk || (module.dzpk = {}));
})(module || (module = {}));
//# sourceMappingURL=DZPKCardLogic.js.map