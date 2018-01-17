var module;
(function (module) {
    var dzpk;
    (function (dzpk) {
        var scene;
        (function (scene) {
            class DZPKSceneVM extends mbase.base.MViewModel {
                constructor() {
                    super();
                    //场景上的玩家
                    this._player_list = [];
                    //玩家本身的座位号
                    this._my_seat_no = -1;
                    //公共牌
                    this._public_cards = [];
                    this.setAtlasName = "res/atlas/dzpk/gameScene.atlas,res/atlas/dzpk/zh-cn/font/buttonFont.atlas,res/atlas/dzpk/zh-cn/font/operateActionFont.atlas,res/atlas/dzpk/zh-cn/font/gameOverFont.atlas,res/atlas/dzpk/zh-cn/font/cardTypeFont.atlas,res/atlas/dzpk/cards.atlas";
                    this.setClass = scene.DZPKSceneView;
                }
                //一个人赢
                onEarlyWin() {
                    // seatNO;
                    this.view.updataOperatePanel(0);
                    let player = this.getPlayerBySeat(this.deckData.seat);
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
                }
                //比牌
                onShowdown() {
                    // holeCards, bestHands, winners
                    this.view.updataOperatePanel(0);
                    let i = 0, len = this.deckData.holeCards.length, c_data, hole_card, winner, bestHand, arr_win = [];
                    for (i = 0; i < len; i++) {
                        hole_card = this.deckData.holeCards[i];
                        c_data = core.CFun.getItem(this._player_list, "seatNO", hole_card.seatNO);
                        if (!!c_data) {
                            c_data.hole1 = hole_card.cards[0];
                            c_data.hole2 = hole_card.cards[1];
                            let card_info = this.getCardTypeByIndex(c_data);
                            winner = core.CFun.getItem(this.deckData.winner, "seatNO", c_data.seatNO);
                            bestHand = core.CFun.getItem(this.deckData.bestHands, "seatNO", c_data.seatNO);
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
                }
                //根据索引获取玩家牌型信息
                getCardTypeByIndex(p_data) {
                    if (!this._player_list || this._player_list.length <= 0)
                        return null;
                    let com_cards = this._public_cards;
                    let cardsData, j, t_cards = [];
                    if (p_data["hole1"] != 0) {
                        t_cards.push(p_data["hole1"]);
                        t_cards.push(p_data["hole2"]);
                    }
                    cardsData = dzpk.DZPKCardLogic.ins.getCardTypeCards(t_cards, com_cards);
                    if (cardsData.cardType == dzpk.DZPKCardType.ERROR)
                        return null; //牌型不存在
                    let cards = cardsData.cards, card;
                    let cardsIndexs = [];
                    let centerCardIndexs = [];
                    for (j = 0; j < cards.length; j++) {
                        card = cards[j];
                        if (card > 0) {
                            let index = t_cards.indexOf(card);
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
                }
                //所有人ALLIN亮牌
                onShowCard() {
                    let i = 0, len = this.deckData.holeCards.length, c_data, hole_card, winner, bestHand;
                    for (i = 0; i < len; i++) {
                        hole_card = this.deckData.holeCards[i];
                        c_data = core.CFun.getItem(this._player_list, "seatNO", hole_card.seatNO);
                        if (!!c_data) {
                            c_data.hole1 = hole_card.cards[0];
                            c_data.hole2 = hole_card.cards[1];
                        }
                    }
                    this.view.onShowCard(this._player_list);
                    this.view.updataOperatePanel(-1);
                    this.updateCardsType();
                }
                //显示手牌
                onViewCard() {
                    // holeCards
                }
                //收到翻牌
                onOpenFlop() {
                    this._public_cards = this._public_cards.concat(this.deckData.cards);
                    this.view.updatePublicCards(this._public_cards, 0, 2);
                    this.view.updateTablePool(this.deckData.pot);
                    this.updateCardsType();
                }
                //收到转牌
                onOpenTurn() {
                    this._public_cards = this._public_cards.concat(this.deckData.card);
                    this.view.updatePublicCards(this._public_cards, 3, 3);
                    this.view.updateTablePool(this.deckData.pot);
                    this.updateCardsType();
                }
                //收到河牌 
                onOpenRive() {
                    this._public_cards = this._public_cards.concat(this.deckData.card);
                    this.view.updatePublicCards(this._public_cards, 4, 4);
                    this.view.updateTablePool(this.deckData.pot);
                    this.updateCardsType();
                }
                //计算牌型
                updateCardsType() {
                    let list = this._player_list;
                    let com_cards = this._public_cards;
                    let i = 0, j, len = list.length, t_cards, cardsData, card_info;
                    for (i = 0; i < len; i++) {
                        card_info = this.getCardTypeByIndex(list[i]);
                        if (!card_info)
                            continue;
                        this.view.showCardTypeTip(card_info["seatNO"], card_info.cardType, card_info.cardsIndexs, card_info.centerCardIndexs);
                    }
                }
                //收到玩家手牌，游戏开始，发手牌
                recvHoleCard(card1, card2) {
                    let me = this.getMeInfo();
                    me.hole1 = card2 ? card1 : (this.agentData.cards[0]);
                    me.hole2 = card2 ? card2 : (this.agentData.cards[1]);
                    this.view.sendCards(this._player_list);
                    this.view.onShowBank(this.deckData.dealer);
                    this.view.updateTablePool(0);
                    this.updateCardsType();
                    // this.view.updatePlayerCards(me.hole1,me.hole2,me.seatNO);
                    // this.view.updateTablePool(this.deckData.pot);
                }
                //等待玩家操作
                seatWait() {
                    let seat = this.deckData.seat;
                    let player = this.getPlayerBySeat(seat);
                    if (!player)
                        return;
                    player["action"] = this.deckData.action;
                    player["cd"] = this.deckData.cd;
                    player["myturn"] = true;
                    this.view.showWait(player);
                    //显示玩家的操作面板
                    let me_info = this.getMeInfo();
                    if (!me_info)
                        core.CFun.throw("seatWait中无法获取自己的信息");
                    let state = -1;
                    if (player["rid"] == me_info["rid"]) {
                        state = 1;
                    }
                    else {
                        if (me_info["chip"] != 0) {
                            state = 2;
                        }
                    }
                    if (seat != this._my_seat_no && me_info.action == dzpk.TEXAS_HOLDEM_ACTION.FOLD) {
                        state = 0;
                    }
                    let obj_state = { bet: this.agentData.bet, miniBet: this.deckData.miniBet, chip: me_info.chip, stageBet: me_info.stageBet, pot: this.deckData.pot, miniRaise: this.deckData.miniRaise };
                    this.view.updataOperatePanel(state, obj_state);
                    this.view.updateTablePool(this.deckData.pot);
                }
                //玩家操作
                seatPlay() {
                    let seat = this.deckData.seat;
                    let player = this.getPlayerBySeat(seat);
                    if (!player)
                        return;
                    player["action"] = this.deckData.action;
                    player["bet"] = player["bet"] + this.deckData.bet; //加注
                    player["chip"] = player["chip"] - this.deckData.bet; //身上的钱
                    player["stageBet"] = player["stageBet"] + this.deckData.bet;
                    player["amount"] = this.deckData.bet;
                    player["myturn"] = false;
                    player["isFold"] = (this.deckData.action == dzpk.TEXAS_HOLDEM_ACTION.FOLD);
                    if (player["rid"] == this.playerData["rid"]) {
                        if (player["chip"] == 0) {
                            this.view.updataOperatePanel(-1);
                        }
                        // this.view.updataOperatePanel(1);
                    }
                    this.view.showPlay(player);
                }
                //显示牌局编号
                startNextHand() {
                    this.view.showGameNo(this.agentData.gameNo);
                }
                //任何人的带入钱
                anyTakeIn() {
                    let seat = this.deckData.seat;
                    let amount = this.deckData.amount;
                    let player = this.getPlayerBySeat(seat);
                    player["chip"] += amount;
                    this.view.showPlayerChip(player["chip"], seat);
                }
                //玩家自己的带入钱
                playerTakeIn() {
                    let amount = this.playerData.amount;
                    let player = this.getPlayerBySeat(this._my_seat_no);
                    player["chip"] = amount;
                    this.view.showPlayerChip(player["chip"], this._my_seat_no);
                }
                /**
                 * 根据玩家作为获取玩家数据
                 * @param seat
                 */
                getPlayerBySeat(seat) {
                    let i = 0, len = this._player_list.length;
                    for (i = 0; i < len; i++) {
                        if (this._player_list[i]["seatNO"] == seat) {
                            return this._player_list[i];
                        }
                    }
                    return null;
                    // core.CFun.throw("getPlayerBySeat中不存在该位置：" + seat + " 长度：" + len);
                }
                showPlayers() {
                    this.view.showPlayers(this._player_list, this._my_seat_no);
                }
                showPlayer(data) {
                    this.view.showPlayer(data);
                }
                /**
                 * 获取玩家自己的数据
                 */
                getMeInfo() {
                    let i = 0, len = this._player_list.length, c_data;
                    for (i = 0; i < len; i++) {
                        c_data = this._player_list[i];
                        if (c_data.rid == this.playerData["rid"]) {
                            return c_data;
                        }
                    }
                    return null;
                }
                //一个玩家进入，自己不存在的话不显示其他玩家
                playerEnter() {
                    let desk = this.deckData;
                    let c_data = {
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
                }
                /**
                 * 几个玩家进入，自己不存在的话不显示其他玩家
                 */
                playersEnter() {
                    let myHoleCards = this.agentData.myHoleCards;
                    let pokers = this.agentData.pokers;
                    this._public_cards = this.agentData.publicCards;
                    let i = 0, len = pokers.length, seat, c_data, my_obj;
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
                            let obj_state = { bet: this.agentData.bet, miniBet: this.deckData.miniBet, chip: my_obj.chip, stageBet: my_obj.stageBet, pot: this.deckData.pot, miniRaise: this.deckData.miniRaise };
                            this.view.updataOperatePanel(1, obj_state);
                            this.view.showWait(my_obj);
                        }
                        if (my_obj.action == dzpk.TEXAS_HOLDEM_ACTION.FOLD) {
                            this.view.showPlay(my_obj);
                        }
                        this.recvHoleCard(my_obj.hole1, my_obj.hole2);
                        if (this.playerData.curDeck != 0) {
                            if (this.agentData.take == 0) {
                                this.sendTakein();
                            }
                        }
                    }
                }
                /**
                 * 进入桌子
                 */
                onEnterDeck() {
                    this.playersEnter();
                    this.view.showGameInfo(this.deckData.blink, this.deckData.ante);
                }
                //发送携带筹码
                sendTakein() {
                    let storage_data = core.CFun.getLSItem(StorageKeys.DZPKTakeScore + this.playerData.lastRoomId, "Object");
                    if (JSON.stringify(storage_data) == "{}") {
                        this.sendData(16778283, [this.playerData.roomSN, this.getTakeScore()]);
                        // uiCore.Banner.show("请开放本地存储权限");
                        return;
                    }
                    let takeScore = this.playerData.gold >= storage_data.takeScore ? storage_data.takeScore : this.playerData.gold;
                    if (storage_data.isautoTakeScore) {
                        this.sendData(16778283, [this.playerData.roomSN, takeScore]);
                        // uiCore.Banner.show(core.CFun.format(core.CFun.getItem(Data.MsgData, "id", 4054)["msg"], core.CFun.formatCurrency(takeScore)));
                    }
                    else if (storage_data.isfirstGame) {
                        this.sendData(16778283, [this.playerData.roomSN, takeScore]);
                        // uiCore.Banner.show(core.CFun.format(core.CFun.getItem(Data.MsgData, "id", 4054)["msg"], core.CFun.formatCurrency(takeScore)));
                        storage_data.isfirstGame = false;
                        laya.net.LocalStorage.setItem(StorageKeys.DZPKTakeScore + this.playerData.lastRoomId, JSON.stringify(storage_data));
                    }
                    else {
                        let takeScore = this.playerData["curTakeScore"] ? this.playerData["curTakeScore"] : 0;
                        takeScore = this.playerData.gold >= takeScore ? takeScore : this.playerData.gold;
                        let roomInfo = this.getRoomInfo(this.playerData.lastRoomId);
                        let maxchip = roomInfo.maxchip, minTakeIn = roomInfo.minTakeIn;
                        //判断最大携带，提醒用户当前为房间最大携带
                        if (takeScore > maxchip) {
                            // takeScore = maxchip;
                            // uiCore.Banner.show(uiCore.Utils.getItem(Data.MsgData, "id", 4052)["msg"]);
                        }
                        else if (takeScore < minTakeIn) {
                            takeScore = minTakeIn;
                            // uiCore.Banner.show(core.CFun.format(core.CFun.getItem(Data.MsgData, "id", 4055)["msg"], core.CFun.formatCurrency(takeScore)));
                        }
                        this.sendData(16778283, [this.playerData.roomSN, takeScore]);
                    }
                }
                //获取玩家金币携带数量
                getTakeScore() {
                    var playerMoney = this.playerData.gold;
                    var currentRoom = this.getRoomInfo(this.playerData.gameType);
                    var takeMaxScore = (currentRoom.maxchip >= playerMoney || currentRoom.maxchip == 0) ? playerMoney : currentRoom.maxchip;
                    var takeScore = takeScore < takeMaxScore ? takeScore : takeMaxScore;
                    takeScore = takeScore == 0 ? currentRoom.defaultTakeIn : takeScore;
                    takeScore = takeScore > playerMoney ? playerMoney : takeScore;
                    return takeScore;
                }
                showPiPei() {
                    if (this.playerData.queueRoomType > 0) {
                        this.view.updataOperatePanel(-1);
                        this.showOther("PiPeiVM");
                    }
                    else {
                        Laya.timer.once(300, this, this.onShowPiPeiButton);
                    }
                }
                onShowPiPeiButton() {
                    if (this._my_seat_no <= 0) {
                        this.view.updataOperatePanel(0);
                    }
                }
                showMenu() {
                    this.showOther("MenuVM", this._player_list);
                }
                /**
                 * 加注或跟注
                 * @param score 0：跟注
                 */
                addScore(score) {
                    this.sendData(16778501, [score]);
                }
                /**
                 * 弃牌
                 */
                fold() {
                    this.sendData(16778502);
                }
                getRoomInfo(roomIndex) {
                    let roomInfo = null;
                    if (this.playerData.roomDict[roomIndex]) {
                        roomInfo = this.playerData.roomDict[roomIndex];
                    }
                    return roomInfo;
                }
                onQuit() {
                    if (this.is_show) {
                        this.sendData(16778282, [this.playerData.lastRoomId]);
                    }
                }
                eventInit() {
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
                }
                //添加某个玩家到玩家列表
                addPlayerTo_player_list(data) {
                    var playerData = core.CFun.getItem(this._player_list, "rid", data.rid);
                    if (!!playerData) {
                        core.CFun.remove(this._player_list, playerData);
                    }
                    var name = data.name;
                    if (data.rid != this.playerData["rid"]) {
                        data.name = "****" + name.substring(name.length - 3, name.length);
                    }
                    else {
                        data.name = name.substring(name.indexOf("_") + 1, name.length);
                    }
                    this._player_list.push(data);
                }
                //发送退出房间
                quit() {
                    this._player_list = [];
                    this._my_seat_no = -1;
                    this._public_cards = [];
                    this.sendData(16778496);
                }
                sendPiPei() {
                    this._player_list = [];
                    this._my_seat_no = -1;
                    this._public_cards = [];
                    this.sendData(16778282, [this.playerData.lastRoomId]);
                }
                onShow(recv) {
                    super.onShow(this.playerData);
                    if (this.playerData.curDeck == 0) {
                        // this.player1.data = { chip: storage_data.takeScore, stageBet: 0 };
                        this.sendPiPei();
                    }
                    else {
                        this.sendData(16778281, [this.playerData.curDeck]);
                    }
                }
                get deckData() {
                    if (!core.model.ModelManager.ins.getInstByClassName("HoldemDeck")) {
                        core.CFun.throw("DZPKSceneVM中使用的HoldemDeck数据还未初始化");
                    }
                    return core.model.ModelManager.ins.getInstByClassName("HoldemDeck");
                }
                get agentData() {
                    if (!core.model.ModelManager.ins.getInstByClassName("HoldemAgent")) {
                        core.CFun.throw("DZPKSceneVM中使用的HoldemAgent数据还未初始化");
                    }
                    return core.model.ModelManager.ins.getInstByClassName("HoldemAgent");
                }
                get view() {
                    return this.cview.display;
                }
            }
            scene.DZPKSceneVM = DZPKSceneVM;
        })(scene = dzpk.scene || (dzpk.scene = {}));
    })(dzpk = module.dzpk || (module.dzpk = {}));
})(module || (module = {}));
//# sourceMappingURL=DZPKSceneVM.js.map