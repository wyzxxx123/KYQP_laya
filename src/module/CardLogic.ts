/**
 * 全局模块-牌型判断逻辑
 * @author none
 *
 */
class CardLogic {
    public constructor() {
    }
    /** 花色掩码 **/
    public MASK_COLOR: number = 0xF0;
    /** 数值掩码 **/
    public MASK_VALUE: number = 0x0F;
    /** 扑克数据 **/
    public cardDataArray: number[] =
    [
        0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3A, 0x3B, 0x3C, 0x3D, 0x31, //黑桃 2 - A
        0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2A, 0x2B, 0x2C, 0x2D, 0x21, //红桃 2 - A
        0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1A, 0x1B, 0x1C, 0x1D, 0x11, //梅花 2 - A
        0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0A, 0x0B, 0x0C, 0x0D, 0x01, //方块 2 - A
        0x4E, 0x4F,//大小鬼
    ];
    /** 获取数值 **/
    public getCardValue(cardData: number): number {
        cardData = this.cardValuetToClient(cardData);
        return (cardData & this.MASK_VALUE);
    }
    /** 获取花色 **/
    public getCardColor(cardData: number): number {
        cardData = this.cardValuetToClient(cardData);
        return (cardData & this.MASK_COLOR) / 16;
    }
    /** 根据值获取牌数据 **/
    public getCardByValue(cardData: number[], cardValue: number): number {
        for (var i: number = 0; i < cardData.length; i++) {
            if (this.getCardValue(cardData[i]) == cardValue) {
                return cardData[i];
            }
        }
        return 0;
    }
    /** 根据数值排序，从大到小 **/
    public SortByValue(cardData: number[]): void {
        var self: CardLogic = this;
        cardData.sort((left, right) => {
            if (self.getCardValue(left) > self.getCardValue(right)) {
                return -1;
            }
            else if (self.getCardValue(left) < self.getCardValue(right)) {
                return 1;
            }
            else {
                return 0;
            }
        });
    }
    /** 根据花色排序，从大到小 **/
    public SortByColor(cardData: number[]): void {
        var self: CardLogic = this;
        cardData.sort((left, right) => {
            if (self.getCardColor(left) > self.getCardColor(right)) {
                return -1;
            }
            else if (self.getCardColor(left) < self.getCardColor(right)) {
                return 1;
            }
            else {
                return 0;
            }
        });
    }
    //服务器端扑克牌数据转换为客户端
    public cardValuetToClient(cardData: number): number {
        if (cardData > 0 && cardData <= 54) {
            return this.cardDataArray[cardData - 1];
        }
        return 0;
    }
    //客户端端扑克牌数据转换为服务器
    public cardValuetToServer(cardData: number): number {
        var suit = (cardData & this.MASK_COLOR) / 16;
        var rank = (cardData & this.MASK_VALUE);
        if (suit >= 0 && suit <= 3) {
            if (rank >= 1 && rank <= 13){
                return (suit - 1) * 13 + rank;
            }
        } else if (suit == 5 && (rank == 1 || rank == 2)) {
            return (suit - 1) * 13 + rank
        }
        return 0
    }
}
