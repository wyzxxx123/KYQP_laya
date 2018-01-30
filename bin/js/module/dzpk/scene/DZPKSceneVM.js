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
define(["require", "exports", "../../../mbase/base/MViewModel", "../../../core/CFun", "../DZPKCardLogic", "../DZPKCardType", "../Holdem", "../../../StorageKeys", "../../../core/model/ModelManager", "./DZPKSceneView"], function (require, exports, MViewModel_1, CFun_1, DZPKCardLogic_1, DZPKCardType_1, Holdem_1, StorageKeys_1, ModelManager_1, DZPKSceneView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DZPKSceneVM = /** @class */ (function (_super) {
        __extends(DZPKSceneVM, _super);
        function DZPKSceneVM() {
            var _this = _super.call(this) || this;
            //场景上的玩家
            _this._player_list = [];
            //玩家本身的座位号
            _this._my_seat_no = -1;
            //公共牌
            _this._public_cards = [];
            _this.setAtlasName = "res/atlas/dzpk/gameScene.atlas,res/atlas/dzpk/zh-cn/font/buttonFont.atlas,res/atlas/dzpk/zh-cn/font/operateActionFont.atlas,res/atlas/dzpk/zh-cn/font/gameOverFont.atlas,res/atlas/dzpk/zh-cn/font/cardTypeFont.atlas,res/atlas/dzpk/cards.atlas";
            _this.setClass = DZPKSceneView_1.DZPKSceneView;
            _this.setViewPath = "game_dzpk/DZPKScene";
            return _this;
        }
        //一个人赢
        DZPKSceneVM.prototype.onEarlyWin = function () {
            // seatNO;
            this.view.updataOperatePanel(0);
            var player = this.getPlayerBySeat(this.deckData.seat);
            player["getScoreCount"] = this.deckData.pot - player["bet"];
            if (player["bet"] == 0) {
                player["getScoreCount"] = 0;
            }
            else if (player["getScoreCount"] > 0) {
                //设置玩家剩余携带数
                player["chip"] = player["chip"] + player["bet"] + Math.ceil(player["getScoreCount"] * (1 - this.agentData["deductRate"]));
            }
            player["userRank"] = 0; //玩家排名
            player["cardType"] = 0; //玩家牌型
            this.view.updateTablePool(this.deckData.pot);
            this.view.onEarlyEnd(this._player_list);
        };
        //比牌
        DZPKSceneVM.prototype.onShowdown = function () {
            // holeCards, bestHands, winners
            this.view.updataOperatePanel(0);
            var i = 0, len = this.deckData.holeCards.length, c_data, hole_card, winner, bestHand, arr_win = [];
            for (i = 0; i < len; i++) {
                hole_card = this.deckData.holeCards[i];
                c_data = CFun_1.CFun.getItem(this._player_list, "seatNO", hole_card.seatNO);
                if (!!c_data) {
                    c_data.hole1 = hole_card.cards[0];
                    c_data.hole2 = hole_card.cards[1];
                    var card_info = this.getCardTypeByIndex(c_data);
                    winner = CFun_1.CFun.getItem(this.deckData.winner, "seatNO", c_data.seatNO);
                    bestHand = CFun_1.CFun.getItem(this.deckData.bestHands, "seatNO", c_data.seatNO);
                    if (!!winner) {
                        //赢得金币数
                        c_data.getScoreCount = c_data.bet > winner.chip ? -(c_data.bet - winner.chip) : winner.chip - c_data.bet;
                        c_data.userRank = winner.order; //玩家排名
                        c_data.cardType = bestHand.type; //玩家牌型
                        if (c_data.getScoreCount > 0) {
                            c_data.chip = c_data.chip + c_data.bet + Math.ceil(c_data.getScoreCount * (1 - this.agentData["deductRate"]));
                        }
                        else {
                            c_data.chip = c_data.chip + c_data.bet + c_data.getScoreCount;
                        }
                        arr_win.push(card_info);
                    }
                    else {
                        //赢得金币数
                        c_data.getScoreCount = -c_data.bet;
                        c_data.cardType = bestHand.type; //玩家牌型
                    }
                    this.view.showCardTypeTip(card_info["seatNO"], card_info.cardType, card_info.cardsIndexs, card_info.centerCardIndexs);
                }
                else if (c_data.isFold) {
                    c_data.getScoreCount = c_data.bet == 0 ? 0 : -c_data.bet;
                }
            }
            this.view.onShowdown(this._player_list, arr_win);
            this.view.updateTablePool(this.deckData.pot);
        };
        //根据索引获取玩家牌型信息
        DZPKSceneVM.prototype.getCardTypeByIndex = function (p_data) {
            if (!this._player_list || this._player_list.length <= 0)
                return null;
            var com_cards = this._public_cards;
            var cardsData, j, t_cards = [];
            if (p_data["hole1"] != 0) {
                t_cards.push(p_data["hole1"]);
                t_cards.push(p_data["hole2"]);
            }
            cardsData = DZPKCardLogic_1.DZPKCardLogic.ins.getCardTypeCards(t_cards, com_cards);
            if (cardsData.cardType == DZPKCardType_1.DZPKCardType.ERROR)
                return null; //牌型不存在
            var cards = cardsData.cards, card;
            var cardsIndexs = [];
            var centerCardIndexs = [];
            for (j = 0; j < cards.length; j++) {
                card = cards[j];
                if (card > 0) {
                    var index = t_cards.indexOf(card);
                    if (index != -1) {
                        cardsIndexs.push(index);
                    }
                    index = com_cards.indexOf(card);
                    if (index != -1) {
                        centerCardIndexs.push(index);
                    }
                }
            }
            return { seatNO: p_data["seatNO"], cardType: cardsData.cardType, cardsIndexs: cardsIndexs, centerCardIndexs: centerCardIndexs };
        };
        //所有人ALLIN亮牌
        DZPKSceneVM.prototype.onShowCard = function () {
            var i = 0, len = this.deckData.holeCards.length, c_data, hole_card, winner, bestHand;
            for (i = 0; i < len; i++) {
                hole_card = this.deckData.holeCards[i];
                c_data = CFun_1.CFun.getItem(this._player_list, "seatNO", hole_card.seatNO);
                if (!!c_data) {
                    c_data.hole1 = hole_card.cards[0];
                    c_data.hole2 = hole_card.cards[1];
                }
            }
            this.view.onShowCard(this._player_list);
            this.view.updataOperatePanel(-1);
            this.updateCardsType();
        };
        //显示手牌
        DZPKSceneVM.prototype.onViewCard = function () {
            // holeCards
        };
        //收到翻牌
        DZPKSceneVM.prototype.onOpenFlop = function () {
            this._public_cards = this._public_cards.concat(this.deckData.cards);
            this.view.updatePublicCards(this._public_cards, 0, 2);
            this.view.updateTablePool(this.deckData.pot);
            this.updateCardsType();
        };
        //收到转牌
        DZPKSceneVM.prototype.onOpenTurn = function () {
            this._public_cards = this._public_cards.concat(this.deckData.card);
            this.view.updatePublicCards(this._public_cards, 3, 3);
            this.view.updateTablePool(this.deckData.pot);
            this.updateCardsType();
        };
        //收到河牌 
        DZPKSceneVM.prototype.onOpenRive = function () {
            this._public_cards = this._public_cards.concat(this.deckData.card);
            this.view.updatePublicCards(this._public_cards, 4, 4);
            this.view.updateTablePool(this.deckData.pot);
            this.updateCardsType();
        };
        //计算牌型
        DZPKSceneVM.prototype.updateCardsType = function () {
            var list = this._player_list;
            var com_cards = this._public_cards;
            var i = 0, j, len = list.length, t_cards, cardsData, card_info;
            for (i = 0; i < len; i++) {
                card_info = this.getCardTypeByIndex(list[i]);
                if (!card_info)
                    continue;
                this.view.showCardTypeTip(card_info["seatNO"], card_info.cardType, card_info.cardsIndexs, card_info.centerCardIndexs);
            }
        };
        //收到玩家手牌，游戏开始，发手牌
        DZPKSceneVM.prototype.recvHoleCard = function (card1, card2) {
            var me = this.getMeInfo();
            me.hole1 = card2 ? card1 : (this.agentData.cards[0]);
            me.hole2 = card2 ? card2 : (this.agentData.cards[1]);
            this.view.sendCards(this._player_list);
            this.view.onShowBank(this.deckData.dealer);
            this.view.updateTablePool(0);
            this.updateCardsType();
            // this.view.updatePlayerCards(me.hole1,me.hole2,me.seatNO);
            // this.view.updateTablePool(this.deckData.pot);
        };
        //等待玩家操作
        DZPKSceneVM.prototype.seatWait = function () {
            var seat = this.deckData.seat;
            var player = this.getPlayerBySeat(seat);
            if (!player)
                return;
            player["action"] = this.deckData.action;
            player["cd"] = this.deckData.cd;
            player["myturn"] = true;
            this.view.showWait(player);
            //显示玩家的操作面板
            var me_info = this.getMeInfo();
            if (!me_info)
                CFun_1.CFun.throw("seatWait中无法获取自己的信息");
            var state = -1;
            if (player["rid"] == me_info["rid"]) {
                state = 1;
            }
            else {
                if (me_info["chip"] != 0) {
                    state = 2;
                }
            }
            if (seat != this._my_seat_no && me_info.action == Holdem_1.TEXAS_HOLDEM_ACTION.FOLD) {
                state = 0;
            }
            var obj_state = { bet: this.agentData.bet, miniBet: this.deckData.miniBet, chip: me_info.chip, stageBet: me_info.stageBet, pot: this.deckData.pot, miniRaise: this.deckData.miniRaise };
            this.view.updataOperatePanel(state, obj_state);
            this.view.updateTablePool(this.deckData.pot);
        };
        //玩家操作
        DZPKSceneVM.prototype.seatPlay = function () {
            var seat = this.deckData.seat;
            var player = this.getPlayerBySeat(seat);
            if (!player)
                return;
            player["action"] = this.deckData.action;
            player["bet"] = player["bet"] + this.deckData.bet; //加注
            player["chip"] = player["chip"] - this.deckData.bet; //身上的钱
            player["stageBet"] = player["stageBet"] + this.deckData.bet;
            player["amount"] = this.deckData.bet;
            player["myturn"] = false;
            player["isFold"] = (this.deckData.action == Holdem_1.TEXAS_HOLDEM_ACTION.FOLD);
            if (player["rid"] == this.playerData["rid"]) {
                if (player["chip"] == 0) {
                    this.view.updataOperatePanel(-1);
                }
                // this.view.updataOperatePanel(1);
            }
            this.view.showPlay(player);
        };
        //显示牌局编号
        DZPKSceneVM.prototype.startNextHand = function () {
            this.view.showGameNo(this.agentData.gameNo);
        };
        //任何人的带入钱
        DZPKSceneVM.prototype.anyTakeIn = function () {
            var seat = this.deckData.seat;
            var amount = this.deckData.amount;
            var player = this.getPlayerBySeat(seat);
            player["chip"] += amount;
            this.view.showPlayerChip(player["chip"], seat);
        };
        //玩家自己的带入钱
        DZPKSceneVM.prototype.playerTakeIn = function () {
            var amount = this.playerData.amount;
            var player = this.getPlayerBySeat(this._my_seat_no);
            player["chip"] = amount;
            this.view.showPlayerChip(player["chip"], this._my_seat_no);
        };
        /**
         * 根据玩家作为获取玩家数据
         * @param seat
         */
        DZPKSceneVM.prototype.getPlayerBySeat = function (seat) {
            var i = 0, len = this._player_list.length;
            for (i = 0; i < len; i++) {
                if (this._player_list[i]["seatNO"] == seat) {
                    return this._player_list[i];
                }
            }
            return null;
            // CFun.throw("getPlayerBySeat中不存在该位置：" + seat + " 长度：" + len);
        };
        DZPKSceneVM.prototype.showPlayers = function () {
            this.view.showPlayers(this._player_list, this._my_seat_no);
        };
        DZPKSceneVM.prototype.showPlayer = function (data) {
            this.view.showPlayer(data);
        };
        /**
         * 获取玩家自己的数据
         */
        DZPKSceneVM.prototype.getMeInfo = function () {
            var i = 0, len = this._player_list.length, c_data;
            for (i = 0; i < len; i++) {
                c_data = this._player_list[i];
                if (c_data.rid == this.playerData["rid"]) {
                    return c_data;
                }
            }
            return null;
        };
        //一个玩家进入，自己不存在的话不显示其他玩家
        DZPKSceneVM.prototype.playerEnter = function () {
            var desk = this.deckData;
            var c_data = {
                rid: desk.rid,
                name: desk.name,
                icon: desk.icon,
                sex: desk.sex,
                seatNO: desk.seat,
                take: 0,
                chip: desk.chip,
                bet: 0,
                action: 0,
                amount: 0,
                busted: true,
                ranking: 0,
                isFold: false,
                myturn: false,
                defaultAction: 0,
                cd: 0,
                stageBet: 0,
                hole1: 0,
                hole2: 0,
            };
            this.addPlayerTo_player_list(c_data);
            if (c_data.rid == this.playerData["rid"]) {
                this._my_seat_no = c_data.seatNO;
                this.showPlayers();
                this.sendTakein();
            }
            else {
                this.showPlayer(c_data);
            }
        };
        /**
         * 几个玩家进入，自己不存在的话不显示其他玩家
         */
        DZPKSceneVM.prototype.playersEnter = function () {
            var myHoleCards = this.agentData.myHoleCards;
            var pokers = this.agentData.pokers;
            this._public_cards = this.agentData.publicCards;
            var i = 0, len = pokers.length, seat, c_data, my_obj;
            for (i = 0; i < len; i++) {
                seat = pokers[i];
                c_data = {
                    rid: seat.rid,
                    name: seat.name,
                    icon: seat.icon,
                    sex: seat.sex,
                    seatNO: seat.seatNO,
                    take: seat.take,
                    chip: seat.chip,
                    bet: seat.bet,
                    action: seat.action,
                    amount: seat.amount,
                    busted: seat.busted,
                    ranking: seat.ranking,
                    isFold: seat.fold,
                    myturn: seat.myturn,
                    defaultAction: seat.defaultAction,
                    cd: seat.cd,
                    stageBet: seat.stageBet,
                    viewCardOne: seat.viewCardOne,
                    viewCardTwo: seat.viewCardTwo,
                    hole1: 0,
                    hole2: 0
                };
                this.addPlayerTo_player_list(c_data);
                if (seat.rid == this.playerData["rid"]) {
                    if (myHoleCards.length > 0) {
                        c_data.hole1 = myHoleCards[0];
                        c_data.hole2 = myHoleCards[1];
                    }
                    this._my_seat_no = c_data.seatNO;
                    my_obj = c_data;
                }
            }
            if (this._my_seat_no >= 0) {
                this.showPlayers();
                this.view.updatePublicCards(this._public_cards, 0, this._public_cards.length - 1);
                this.view.updateTablePool(this.deckData.pot);
                if (!my_obj.myturn) {
                    var obj_state = { bet: this.agentData.bet, miniBet: this.deckData.miniBet, chip: my_obj.chip, stageBet: my_obj.stageBet, pot: this.deckData.pot, miniRaise: this.deckData.miniRaise };
                    this.view.updataOperatePanel(1, obj_state);
                    this.view.showWait(my_obj);
                }
                if (my_obj.action == Holdem_1.TEXAS_HOLDEM_ACTION.FOLD) {
                    this.view.showPlay(my_obj);
                }
                this.recvHoleCard(my_obj.hole1, my_obj.hole2);
                if (this.playerData.curDeck != 0) {
                    if (this.agentData.take == 0) {
                        this.sendTakein();
                    }
                }
            }
        };
        /**
         * 进入桌子
         */
        DZPKSceneVM.prototype.onEnterDeck = function () {
            this.playersEnter();
            this.view.showGameInfo(this.deckData.blink, this.deckData.ante);
        };
        //发送携带筹码
        DZPKSceneVM.prototype.sendTakein = function () {
            var storage_data = CFun_1.CFun.getLSItem(StorageKeys_1.StorageKeys.DZPKTakeScore + this.playerData.lastRoomId, "Object");
            if (JSON.stringify(storage_data) == "{}") {
                this.sendData(16778283, [this.playerData.roomSN, this.getTakeScore()]);
                // uiBanner.show("请开放本地存储权限");
                return;
            }
            var takeScore = this.playerData.gold >= storage_data.takeScore ? storage_data.takeScore : this.playerData.gold;
            if (storage_data.isautoTakeScore) {
                this.sendData(16778283, [this.playerData.roomSN, takeScore]);
                // uiBanner.show(CFun.format(CFun.getItem(Data.MsgData, "id", 4054)["msg"], CFun.formatCurrency(takeScore)));
            }
            else if (storage_data.isfirstGame) {
                this.sendData(16778283, [this.playerData.roomSN, takeScore]);
                // uiBanner.show(CFun.format(CFun.getItem(Data.MsgData, "id", 4054)["msg"], CFun.formatCurrency(takeScore)));
                storage_data.isfirstGame = false;
                laya.net.LocalStorage.setItem(StorageKeys_1.StorageKeys.DZPKTakeScore + this.playerData.lastRoomId, JSON.stringify(storage_data));
            }
            else {
                var takeScore_1 = this.playerData["curTakeScore"] ? this.playerData["curTakeScore"] : 0;
                takeScore_1 = this.playerData.gold >= takeScore_1 ? takeScore_1 : this.playerData.gold;
                var roomInfo = this.getRoomInfo(this.playerData.lastRoomId);
                var maxchip = roomInfo.maxchip, minTakeIn = roomInfo.minTakeIn;
                //判断最大携带，提醒用户当前为房间最大携带
                if (takeScore_1 > maxchip) {
                    // takeScore = maxchip;
                    // uiBanner.show(uiUtils.getItem(Data.MsgData, "id", 4052)["msg"]);
                }
                else if (takeScore_1 < minTakeIn) {
                    takeScore_1 = minTakeIn;
                    // uiBanner.show(CFun.format(CFun.getItem(Data.MsgData, "id", 4055)["msg"], CFun.formatCurrency(takeScore)));
                }
                this.sendData(16778283, [this.playerData.roomSN, takeScore_1]);
            }
        };
        //获取玩家金币携带数量
        DZPKSceneVM.prototype.getTakeScore = function () {
            var playerMoney = this.playerData.gold;
            var currentRoom = this.getRoomInfo(this.playerData.gameType);
            var takeMaxScore = (currentRoom.maxchip >= playerMoney || currentRoom.maxchip == 0) ? playerMoney : currentRoom.maxchip;
            var takeScore = takeScore < takeMaxScore ? takeScore : takeMaxScore;
            takeScore = takeScore == 0 ? currentRoom.defaultTakeIn : takeScore;
            takeScore = takeScore > playerMoney ? playerMoney : takeScore;
            return takeScore;
        };
        DZPKSceneVM.prototype.showPiPei = function () {
            if (this.playerData.queueRoomType > 0) {
                this.view.updataOperatePanel(-1);
                this.showOther("PiPeiVM");
            }
            else {
                Laya.timer.once(300, this, this.onShowPiPeiButton);
            }
        };
        DZPKSceneVM.prototype.onShowPiPeiButton = function () {
            if (this._my_seat_no <= 0) {
                this.view.updataOperatePanel(0);
            }
        };
        DZPKSceneVM.prototype.showMenu = function () {
            this.showOther("MenuVM", this._player_list);
        };
        /**
         * 加注或跟注
         * @param score 0：跟注
         */
        DZPKSceneVM.prototype.addScore = function (score) {
            this.sendData(16778501, [score]);
        };
        /**
         * 弃牌
         */
        DZPKSceneVM.prototype.fold = function () {
            this.sendData(16778502);
        };
        DZPKSceneVM.prototype.getRoomInfo = function (roomIndex) {
            var roomInfo = null;
            if (this.playerData.roomDict[roomIndex]) {
                roomInfo = this.playerData.roomDict[roomIndex];
            }
            return roomInfo;
        };
        DZPKSceneVM.prototype.onQuit = function () {
            if (this.is_show) {
                this.sendData(16778282, [this.playerData.lastRoomId]);
            }
        };
        DZPKSceneVM.prototype.eventInit = function () {
            this.regist("server_Client_syncProperty_Player_queueRoomType", this.showPiPei);
            this.regist("client_HoldemDeck_sitdown", this.playerEnter);
            this.regist("client_HoldemAgent_enterDeck", this.onEnterDeck);
            this.regist("client_HoldemDeck_takein", this.anyTakeIn);
            this.regist("client_Player_onTakeChip", this.playerTakeIn);
            this.regist("client_HoldemAgent_startNextHand", this.startNextHand);
            this.regist("client_HoldemAgent_recvHoleCard", this.recvHoleCard);
            this.regist("client_HoldemAgent_quit", this.onQuit);
            this.regist("client_HoldemDeck_play", this.seatPlay);
            this.regist("client_HoldemDeck_wait", this.seatWait);
            this.regist("client_HoldemDeck_openFlop", this.onOpenFlop);
            this.regist("client_HoldemDeck_openTurn", this.onOpenTurn);
            this.regist("client_HoldemDeck_openRiver", this.onOpenRive);
            this.regist("client_HoldemDeck_earlyWin", this.onEarlyWin);
            this.regist("client_HoldemDeck_showdown", this.onShowdown);
            this.regist("client_HoldemDeck_showCard", this.onShowCard);
            this.regist("client_HoldemDeck_viewCard", this.onViewCard);
        };
        //添加某个玩家到玩家列表
        DZPKSceneVM.prototype.addPlayerTo_player_list = function (data) {
            var playerData = CFun_1.CFun.getItem(this._player_list, "rid", data.rid);
            if (!!playerData) {
                CFun_1.CFun.remove(this._player_list, playerData);
            }
            var name = data.name;
            if (data.rid != this.playerData["rid"]) {
                data.name = "****" + name.substring(name.length - 3, name.length);
            }
            else {
                data.name = name.substring(name.indexOf("_") + 1, name.length);
            }
            this._player_list.push(data);
        };
        //发送退出房间
        DZPKSceneVM.prototype.quit = function () {
            this._player_list = [];
            this._my_seat_no = -1;
            this._public_cards = [];
            this.sendData(16778496);
        };
        DZPKSceneVM.prototype.sendPiPei = function () {
            this._player_list = [];
            this._my_seat_no = -1;
            this._public_cards = [];
            this.sendData(16778282, [this.playerData.lastRoomId]);
        };
        DZPKSceneVM.prototype.onShow = function (recv) {
            _super.prototype.onShow.call(this, this.playerData);
            if (this.playerData.curDeck == 0) {
                // this.player1.data = { chip: storage_data.takeScore, stageBet: 0 };
                this.sendPiPei();
            }
            else {
                this.sendData(16778281, [this.playerData.curDeck]);
            }
        };
        Object.defineProperty(DZPKSceneVM.prototype, "deckData", {
            get: function () {
                if (!ModelManager_1.ModelManager.ins.getInstByClassName("HoldemDeck")) {
                    CFun_1.CFun.throw("DZPKSceneVM中使用的HoldemDeck数据还未初始化");
                }
                return ModelManager_1.ModelManager.ins.getInstByClassName("HoldemDeck");
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DZPKSceneVM.prototype, "agentData", {
            get: function () {
                if (!ModelManager_1.ModelManager.ins.getInstByClassName("HoldemAgent")) {
                    CFun_1.CFun.throw("DZPKSceneVM中使用的HoldemAgent数据还未初始化");
                }
                return ModelManager_1.ModelManager.ins.getInstByClassName("HoldemAgent");
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DZPKSceneVM.prototype, "view", {
            get: function () {
                return this.cview.display;
            },
            enumerable: true,
            configurable: true
        });
        return DZPKSceneVM;
    }(MViewModel_1.MViewModel));
    exports.DZPKSceneVM = DZPKSceneVM;
});
//# sourceMappingURL=DZPKSceneVM.js.map