import { CardLogic } from '../CardLogic';
import { CFun } from '../../core/CFun';
import { DZPKCardType } from './DZPKCardType';
    /**
     * 牌型判断逻辑
     * @author none
     *
     */
    export class DZPKCardLogic extends CardLogic {
        
        /** 组合自己的牌和公共牌 **/
        private TogetherCardList(myCardList: number[], publicCardList: number[]): number[] {
            CFun.remove(myCardList, 0);
            CFun.remove(publicCardList, 0);
            return publicCardList.concat(myCardList);
        }
        /**
         * 获取牌型
         */
        public getDZPKCardType(myCardList: number[], publicCardList: number[]): DZPKCardType {
            if (myCardList.length == 0) {
                return DZPKCardType.ERROR;
            }
            if (this.findBigStraightLine(myCardList, publicCardList).length > 0) {
                return DZPKCardType.BIGSTRAIGHTLINE;
            }
            if (this.findStraightLine(myCardList, publicCardList).length > 0) {
                return DZPKCardType.STRAIGHTLINE;
            }
            if (this.findFour(myCardList, publicCardList).length > 0) {
                return DZPKCardType.FOUR;
            }
            if (this.findFullHouse(myCardList, publicCardList).length > 0) {
                return DZPKCardType.FullHouse;
            }
            if (this.findStraight(myCardList, publicCardList).length > 0) {
                return DZPKCardType.STRAIGHT;
            }
            if (this.findLine(myCardList, publicCardList).length > 0) {
                return DZPKCardType.LINE;
            }
            if (this.findThree(myCardList, publicCardList).length > 0) {
                return DZPKCardType.THREE;
            }
            if (this.findTwo(myCardList, publicCardList).length > 1) {
                return DZPKCardType.TWODOUBLE;
            }
            if (this.findTwo(myCardList, publicCardList).length > 0) {
                return DZPKCardType.DOUBLE;
            }
            return DZPKCardType.SINGLE;
        }
        /**
        * 获取最大牌型的牌
        */
        public getCardTypeCards(myCardList: number[], publicCardList: number[]): any {
            if (myCardList.length == 0) {
                return { cards: [], cardType: DZPKCardType.ERROR };
            }
            var cards: Array<number[]> = this.findBigStraightLine(myCardList, publicCardList);
            if (cards.length > 0) {
                //this.print(cards + " 皇家同花顺");
                return { cards: cards[0], cardType: DZPKCardType.BIGSTRAIGHTLINE };
            }
            cards = this.findStraightLine(myCardList, publicCardList);
            if (cards.length > 0) {
                //this.print(cards + " 同花顺");
                return { cards: cards[0], cardType: DZPKCardType.STRAIGHTLINE };
            }
            cards = this.findFour(myCardList, publicCardList);
            if (cards.length > 0) {
                //this.print(cards + " 四张");
                return { cards: cards[0], cardType: DZPKCardType.FOUR };
            }
            cards = this.findFullHouse(myCardList, publicCardList);
            if (cards.length > 0) {
                //this.print(cards + " 葫芦");
                return { cards: cards[0], myCardList, publicCardList, cardType: DZPKCardType.FullHouse };
            }
            cards = this.findStraight(myCardList, publicCardList);
            if (cards.length > 0) {
                //this.print(cards + " 同花");
                cards[0].length = 5;
                return { cards: cards[0], cardType: DZPKCardType.STRAIGHT };
            }
            cards = this.findLine(myCardList, publicCardList);
            if (cards.length > 0) {
                //this.print(cards + " 顺子");
                return { cards: cards[0], cardType: DZPKCardType.LINE };
            }
            cards = this.findThree(myCardList, publicCardList);
            if (cards.length > 0) {
                //this.print(cards + " 三张");
                return { cards: cards[0], cardType: DZPKCardType.THREE };
            }
            cards = this.findTwo(myCardList, publicCardList);
            if (cards.length > 1) {
                if (cards.length > 2) {
                    cards = this.getMaxTwoPair(cards);
                    //this.print(cards + " 两对");
                    return { cards: cards[0].concat(cards[1]), cardType: DZPKCardType.TWODOUBLE };
                }
                //this.print(cards + " 两对");
                return { cards: cards[0].concat(cards[1]), cardType: DZPKCardType.TWODOUBLE };
            }
            cards = this.findTwo(myCardList, publicCardList);
            if (cards.length > 0) {
                //this.print(cards + " 一对");
                return { cards: cards[0], cardType: DZPKCardType.DOUBLE };
            }
            return { cards: [], cardType: DZPKCardType.SINGLE };
        }
        /** 查找顺子 **/
        private findLine(myCardList: number[], publicCardList: number[], linelength: number = 5): Array<number[]> {
            var result: Array<number[]> = [];
            var cardData: number[] = this.TogetherCardList(myCardList, publicCardList);
            this.SortByCardData(cardData);
            var lineData: number[] = [];
            for (var i: number = 0; i < cardData.length; i++) {
                lineData.push(cardData[i]);
                for (var j: number = i + 1; j < cardData.length; j++) {
                    if (((this.getCardValue(cardData[i]) == 1 ? 14 : this.getCardValue(cardData[i])) - this.getCardValue(cardData[j])) == lineData.length && //数字之间小于等于4
                        this.getCardValue(cardData[i]) != this.getCardValue(cardData[j])) {
                        lineData.push(cardData[j]);
                        if (lineData.length == linelength) {//5个已满
                            result.push(lineData);
                            break;
                        }
                    } else {
                        continue;
                    }
                }
                if (this.getCardValue(cardData[i]) == 1) {
                    lineData = [];
                    lineData.push(cardData[i]);
                    for (var j: number = i + 1; j < cardData.length; j++) {
                        var isPush = false;
                        isPush = 1 - this.getCardValue(cardData[j]) == lineData.length - linelength && //数字之间小于等于-4
                            this.getCardValue(cardData[i]) != this.getCardValue(cardData[j]);
                        if (isPush) {
                            lineData.push(cardData[j]);
                            if (lineData.length == linelength) {//5个已满
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
                CFun.remove(result, result[0]);
                result.push(temp);
            }
            return result;
        }
        /**  查找同花顺**/
        private findStraightLine(myCardList: number[], publicCardList: number[], linelength: number = 5): Array<number[]> {
            var straightList: Array<number[]> = this.findStraight(myCardList, publicCardList);//取出所有的同花
            var lineDataList: Array<number[]> = this.findLine(straightList.length > 0 ? straightList[0] : [], [], linelength);
            return lineDataList;
        }
        /**  查找皇家同花顺**/
        private findBigStraightLine(myCardList: number[], publicCardList: number[], linelength: number = 5): Array<number[]> {
            var result: Array<number[]> = [];
            var lineDataList: Array<number[]> = this.findStraightLine(myCardList, publicCardList, linelength);//取出所有的同花
            for (var i: number = 0; i < lineDataList.length; i++) {
                //如果包含A和K
                if (this.getCardByValue(lineDataList[i], this.getCardValue(13)) != 0 && this.getCardByValue(lineDataList[i], this.getCardValue(12)) != 0) {
                    result.push(lineDataList[i]);
                }
            }
            return result;
        }
        /** 查找同花 **/
        private findStraight(myCardList: number[], publicCardList: number[]): Array<number[]> {
            var result: Array<number[]> = [];
            var cardData: number[] = this.TogetherCardList(myCardList, publicCardList);
            this.SortByCardData(cardData);
            var objColor: Object = {};
            for (var i: number = 0; i < cardData.length; i++) {
                var color: number = this.getCardColor(cardData[i]);
                if (!objColor.hasOwnProperty(color.toString())) {
                    objColor[color.toString()] = [];
                }
                objColor[color.toString()].push(cardData[i]);
            }

            var key: string;
            for (key in objColor) {
                if (objColor[key].length >= 5) {
                    result.push(objColor[key]);
                    break;
                }
            }

            return result;
        }
        /** 查找4张 **/
        private findFour(myCardList: number[], publicCardList: number[]): Array<number[]> {
            var result: Array<number[]> = [];
            var cardData: number[] = this.TogetherCardList(myCardList, publicCardList);
            this.SortByCardData(cardData);
            for (var i: number = 0; i < cardData.length; i++) {
                if (i + 3 < cardData.length)//如果剩余有4张
                {
                    if (this.getCardValue(cardData[i]) == this.getCardValue(cardData[i + 1])
                        && this.getCardValue(cardData[i + 1]) == this.getCardValue(cardData[i + 2])
                        && this.getCardValue(cardData[i + 2]) == this.getCardValue(cardData[i + 3]))//4张全部相等
                    {
                        var fourData: number[] = [cardData[i], cardData[i + 1], cardData[i + 2], cardData[i + 3]];
                        result.push(fourData);
                    }
                }
            }
            return result;
        }
        /** 查找3张 **/
        private findThree(myCardList: number[], publicCardList: number[]): Array<number[]> {
            var result: Array<number[]> = [];
            var cardData: number[] = this.TogetherCardList(myCardList, publicCardList);
            this.SortByCardData(cardData);
            for (var i: number = 0; i < cardData.length; i++) {
                if (i + 2 < cardData.length)//如果剩余有4张
                {
                    if (this.getCardValue(cardData[i]) == this.getCardValue(cardData[i + 1])
                        && this.getCardValue(cardData[i + 1]) == this.getCardValue(cardData[i + 2]))//3张全部相等
                    {
                        var fourData: number[] = [cardData[i], cardData[i + 1], cardData[i + 2]];
                        result.push(fourData);
                    }
                }
            }
            return result;
        }
        /** 查找2张 **/
        private findTwo(myCardList: number[], publicCardList: number[]): Array<number[]> {
            var result: Array<number[]> = [];
            var cardData: number[] = this.TogetherCardList(myCardList, publicCardList);
            this.SortByCardData(cardData);
            for (var i: number = 0; i < cardData.length; i++) {
                if (i + 1 < cardData.length)//如果剩余有4张
                {
                    if (this.getCardValue(cardData[i]) == this.getCardValue(cardData[i + 1]))//2张全部相等
                    {
                        var fourData: number[] = [cardData[i], cardData[i + 1]];
                        result.push(fourData);
                    }
                }
            }
            return result;
        }
        /** 查找葫芦 **/
        private findFullHouse(myCardList: number[], publicCardList: number[]): Array<number[]> {
            var result: Array<number[]> = [];
            var cardData: number[] = this.TogetherCardList(myCardList, publicCardList);
            this.SortByCardData(cardData);
            var threeList: Array<number[]> = this.findThree(myCardList, publicCardList);//找出所有的三张
            if (threeList.length == 0) {
                return result;
            }
            for (var i: number = 0; i < threeList.length; i++) {
                var threeData: number[] = threeList[i];
                var newCardData: number[] = [];//踢除上面的三张
                for (var j: number = 0; j < cardData.length; j++) {
                    if (threeData.indexOf(cardData[j]) == -1) {
                        newCardData.push(cardData[j]);
                    }
                }
                var twoList: Array<number[]> = this.findTwo(newCardData, []);
                for (var a: number = 0; a < twoList.length; a++) {
                    result.push(threeData.concat(twoList[a]));
                }
            }
            return result;
        }
        /** 根据牌值排序，从大到小，A最大 **/
        private SortByCardData(cardData: number[]): void {
            var self: DZPKCardLogic = this;
            cardData.sort((left, right) => {
                var leftVale: number = self.getCardValue(left);
                var rightVale: number = self.getCardValue(right);
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
        private getMaxTwoPair(cards: Array<number[]>): Array<number[]> {
            var cardValues = [];
            for (var i = 0; i < cards.length; i++) {
                if (this.getCardValue(cards[i][0]) == 1) {//判断是不是A
                    cardValues.push(14);
                }
                else {
                    cardValues.push(this.getCardValue(cards[i][0]));
                }
            }
            cards.splice(cardValues.indexOf(Math.min.apply(null, cardValues)), 1);//删除最小的对子
            return cards;
        }
        // /**
        //  * 获取最大牌型组合
        //  * 补齐五张最大牌型
        //  */
        // private getMaxCardGroup(typeCards:number[],myCardList: number[], publicCardList: number[]):number[]{
        //     var result: number[] = typeCards;
        //     if(typeCards.length==5){
        //         return typeCards;
        //     }
        //     var cardData: number[] = this.TogetherCardList(myCardList, publicCardList);
        //     this.SortByCardData(cardData);

        //     var newCardData: number[] = [];//踢除牌型中的牌
        //     for (var i: number = 0; i < cardData.length; i++) {
        //         if (typeCards.indexOf(cardData[i]) == -1) {
        //             newCardData.push(cardData[i]);
        //         }
        //     }
        //     for (var i: number = 0; i < newCardData.length; i++) {
        //         if (result.length>=5) {
        //             break;
        //         }
        //         else{
        //             result.push(newCardData[i]);
        //         }
        //     }
        //     return result;
        // }

        private static _instance: DZPKCardLogic;
        public static get ins(): DZPKCardLogic {
            if(!this._instance) {
                this._instance = new DZPKCardLogic();
            }
            return this._instance;
        }
        public constructor() {
            super();
            if(DZPKCardLogic._instance){
                CFun.throw("单例！");
            }
        }
    }
