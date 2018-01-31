define(["require", "exports", "../../../ui/layaUI.max.all", "../Holdem", "../../../core/CFun", "../DZPKCardLogic", "../../../mbase/base/MsgData", "../../../mbase/base/MEffectView"], function (require, exports, layaUI_max_all_1, Holdem_1, CFun_1, DZPKCardLogic_1, MsgData_1, MEffectView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Point = laya.maths.Point;
    class DZPKSceneView extends layaUI_max_all_1.ui.game_dzpk.DZPKSceneUI {
        constructor(vm) {
            super();
            this._PLAYER_NUM = 9;
            this._my_seat = -1;
            this._vm = vm;
        }
        beClose() {
            this.clearView();
        }
        /**
         * 最后摊牌
         * @param list
         */
        onShowdown(list, winners) {
            this.eff.stopCircleEffect();
            this.showPlayersCards(list);
            this.showResults(list);
            this.timerOnce(500, this, this.showWinCardsType, [winners]);
        }
        //显示胜利玩家牌型
        showWinCardsType(winners) {
            if (winners.length <= 0)
                return;
            let winner = winners.pop();
            let card_index = winner.cardsIndexs;
            let pub_index = winner.centerCardIndexs;
            let box_player = this.getPlayerSeat(winner["seatNO"]);
            //玩家手牌和公共牌提示
            box_player.getChildByName("box_cards").getChildByName("box_lcard").getChildByName("img_tip")["visible"] = false;
            box_player.getChildByName("box_cards").getChildByName("box_rcard").getChildByName("img_tip")["visible"] = false;
            let i = 0, len = card_index.length, box_card;
            for (i = 0; i < len; i++) {
                if (card_index[i] == 0) {
                    box_player.getChildByName("box_cards").getChildByName("box_lcard").getChildByName("img_tip")["visible"] = true;
                    box_player.getChildByName("box_cards").getChildByName("box_lcard").getChildByName("img_tip")["skin"] = "dzpk/cards/cardTypeTip2.png";
                    box_player.getChildByName("box_cards").getChildByName("box_rcard").getChildByName("img_zhao")["visible"] = true;
                    if (len == 1) {
                        box_player.getChildByName("box_cards").getChildByName("box_lcard").getChildByName("img_zhao")["visible"] = false;
                    }
                }
                else {
                    box_player.getChildByName("box_cards").getChildByName("box_rcard").getChildByName("img_tip")["visible"] = true;
                    box_player.getChildByName("box_cards").getChildByName("box_rcard").getChildByName("img_tip")["skin"] = "dzpk/cards/cardTypeTip2.png";
                    box_player.getChildByName("box_cards").getChildByName("box_lcard").getChildByName("img_zhao")["visible"] = true;
                    if (len == 1) {
                        box_player.getChildByName("box_cards").getChildByName("box_rcard").getChildByName("img_zhao")["visible"] = false;
                    }
                }
            }
            len = 5;
            for (i = 0; i < len; i++) {
                box_card = this.box_common_cards.getChildByName("box_card" + i);
                box_card.getChildByName("img_chose")["visible"] = false;
            }
            len = pub_index.length;
            let obj_count = { count: len };
            for (i = 0; i < len; i++) {
                box_card = this.box_common_cards.getChildByName("box_card" + pub_index[i]);
                box_card.getChildByName("img_chose")["visible"] = true;
                box_card.getChildByName("img_chose")["skin"] = "dzpk/cards/cardTypeTip2.png";
                Laya.Tween.to(box_card, { y: 10 }, 200, null, laya.utils.Handler.create(this, this.onComCardsUP, [winner["seatNO"], box_card, winners, obj_count]));
            }
        }
        onComCardsUP(seat, box_card, winners, obj_count) {
            Laya.Tween.to(box_card, { y: 30 }, 200, null, laya.utils.Handler.create(this, this.onComCardsDown, [seat, box_card, winners, obj_count]), 1000);
        }
        onComCardsDown(seat, box_card, winners, obj_count) {
            obj_count.count--;
            if (obj_count.count == 0) {
                let box_player = this.getPlayerSeat(seat);
                // box_player.getChildByName("box_cards").getChildByName("box_lcard").getChildByName("img_tip")["visible"] = false;
                // box_player.getChildByName("box_cards").getChildByName("box_rcard").getChildByName("img_zhao")["visible"] = false;
                this.showWinCardsType(winners);
                this.updataOperatePanel(0);
            }
        }
        /**
         * 提前结束
         */
        onEarlyEnd(list) {
            this.eff.stopCircleEffect();
            this.showResults(list);
        }
        //显示游戏结束玩家输赢情况
        showResults(list) {
            let i = 0, len = list.length, box_player, p_point, arr_p = [];
            for (i = 0; i < len; i++) {
                box_player = this.getPlayerSeat(list[i].seatNO);
                p_point = box_player.localToGlobal(new Point(box_player.getChildByName("ui_player")["width"] * 0.5, box_player.getChildByName("ui_player")["height"] * 0.5));
                if (list[i].getScoreCount > 0) {
                    this.eff.succType(list[i].cardType, p_point);
                    this.eff.numberFloat(list[i].bet, true, p_point);
                    arr_p.push(p_point);
                }
                else {
                    this.eff.numberFloat(list[i].bet, false, p_point);
                }
            }
            this.choumaHeGuan();
            //延迟后显示飞到玩家身上
            this.timerOnce(300, this, this.dealyChouma, [arr_p]);
        }
        dealyChouma(e_point) {
            let p_he = this.txt_dichi.localToGlobal(new Point(0, 0));
            let i = 0, len = e_point.length;
            len = e_point.length;
            for (i = 0; i < len; i++) {
                this.eff.choumaEffect(p_he, e_point[i]);
            }
            this.box_dichi.visible = false;
            this.txt_dichi.text = "";
            this.updataOperatePanel(0);
        }
        /**
         * 显示牌型
         * @param seat 座位
         * @param type 牌型
         * @param card_index 参与牌型的手牌
         * @param pub_index 参与牌型的公共牌
         */
        showCardTypeTip(seat, type, card_index, pub_index) {
            let box_player = this.getPlayerSeat(seat);
            box_player.getChildByName("box_type")["visible"] = true;
            box_player.getChildByName("box_type").getChildByName("img_type")["skin"] = "dzpk/zh-cn/font/cardTypeFont/cardType_" + type + ".png";
            //只显示玩家手牌和公共牌提示
            if (seat == this._my_seat) {
                let i = 0, len, box_card;
                box_player.getChildByName("box_cards").getChildByName("box_lcard").getChildByName("img_tip")["visible"] = false;
                box_player.getChildByName("box_cards").getChildByName("box_rcard").getChildByName("img_tip")["visible"] = false;
                len = card_index.length;
                for (i = 0; i < len; i++) {
                    if (card_index[i] == 0) {
                        box_player.getChildByName("box_cards").getChildByName("box_lcard").getChildByName("img_tip")["visible"] = true;
                        box_player.getChildByName("box_cards").getChildByName("box_lcard").getChildByName("img_tip")["skin"] = "dzpk/cards/cardTypeTip1.png";
                    }
                    else {
                        box_player.getChildByName("box_cards").getChildByName("box_rcard").getChildByName("img_tip")["visible"] = true;
                        box_player.getChildByName("box_cards").getChildByName("box_rcard").getChildByName("img_tip")["skin"] = "dzpk/cards/cardTypeTip1.png";
                    }
                }
                len = 5;
                for (i = 0; i < len; i++) {
                    box_card = this.box_common_cards.getChildByName("box_card" + i);
                    box_card.getChildByName("img_chose")["visible"] = false;
                }
                len = pub_index.length;
                for (i = 0; i < len; i++) {
                    box_card = this.box_common_cards.getChildByName("box_card" + pub_index[i]);
                    box_card.getChildByName("img_chose")["visible"] = true;
                    box_card.getChildByName("img_chose")["skin"] = "dzpk/cards/cardTypeTip1.png";
                }
            }
        }
        /**
         * 显示庄
         * @param list
         * @param bank_id
         */
        onShowBank(bank_id) {
            let box_player = this.getPlayerSeat(bank_id);
            box_player.getChildByName("img_banker")["visible"] = true;
        }
        /**
         * 播放荷官发牌特效，给自己亮牌
         * @param list
         */
        sendCards(list) {
            let i = 0, len = list.length, c_data, box_player, p, me, me_data, arr_p = [];
            for (i = 0; i < len; i++) {
                c_data = list[i];
                box_player = this.getPlayerSeat(c_data.seatNO);
                // p = box_player.localToGlobal(new laya.maths.Point(0,0));
                arr_p.push(new laya.maths.Point(box_player.x + box_player.width * 0.5, box_player.y + box_player.height * 0.5));
                if (this._my_seat == c_data.seatNO) {
                    me = arr_p.length - 1;
                    me_data = c_data;
                }
            }
            this.eff.heguanfapaiEffect(arr_p, new laya.maths.Point(this.img_heguan.x + this.img_heguan.width * 0.5, this.img_heguan.y + this.img_heguan.height * 0.5), me, this.updatePlayerCards, [me_data.hole1, me_data.hole2, me_data.seatNO], this);
        }
        /**
         * 所有人ALLIN亮牌
         * @param list
         */
        onShowCard(list) {
            this.eff.stopCircleEffect();
            this.showPlayersCards(list);
        }
        //显示所有参与比牌玩家的牌
        showPlayersCards(list) {
            let i = 0, len = list.length, c_data, box_player;
            for (i = 0; i < len; i++) {
                c_data = list[i];
                box_player = this.getPlayerSeat(c_data["seatNO"]);
                let p = box_player.getChildByName("box_cards").localToGlobal(new laya.maths.Point(0, 0));
                if (c_data["seatNO"] != this._my_seat && c_data["action"] != Holdem_1.TEXAS_HOLDEM_ACTION.FOLD) {
                    box_player.getChildByName("box_cards").visible = false;
                    this.eff.fanpai(p, this.updatePlayerCards, [c_data["hole1"], c_data["hole2"], c_data["seatNO"]], this);
                }
            }
        }
        /**
         * 显示玩家手牌
         * @param card0 牌一
         * @param card1 牌二
         * @param seat 座位号
         */
        updatePlayerCards(card0, card1, seat, showall = true) {
            let box_player = this.getPlayerSeat(seat);
            box_player.getChildByName("box_cards").getChildByName("box_lcard").getChildByName("img_card")["skin"] = CFun_1.CFun.format("dzpk/cards/card_{0}.png", DZPKCardLogic_1.DZPKCardLogic.ins.cardValuetToClient(card0));
            box_player.getChildByName("box_cards").getChildByName("box_rcard").getChildByName("img_card")["skin"] = CFun_1.CFun.format("dzpk/cards/card_{0}.png", DZPKCardLogic_1.DZPKCardLogic.ins.cardValuetToClient(card1));
            if (seat != this._my_seat) {
                box_player.getChildByName("box_cards")["x"] = box_player.getChildByName("box_fan")["x"];
                box_player.getChildByName("box_cards")["y"] = box_player.getChildByName("box_fan")["y"];
                box_player.getChildByName("box_cards")["scaleX"] = 1;
                box_player.getChildByName("box_cards")["scaleY"] = 1;
            }
            box_player.getChildByName("box_cards")["visible"] = true;
            if (showall) {
                box_player.getChildByName("box_cards").getChildByName("box_rcard")["visible"] = true;
            }
            else {
                box_player.getChildByName("box_cards").getChildByName("box_rcard")["visible"] = false;
            }
            //玩家当前牌型
            box_player.getChildByName("box_type").getChildByName("img_type");
        }
        /**
         * 更新桌子底池
         * @param pot
         */
        updateTablePool(pot) {
            this.box_dichi.visible = true;
            this.txt_dichi.text = CFun_1.CFun.formatCurrency(pot);
        }
        /**
         * 显示几个阶段的公共牌
         * @param cards
         * @param step
         */
        updatePublicCards(cards, start, end) {
            this.choumaHeGuan();
            this.showPublicCard(cards, start, end, null);
        }
        //荷官收筹码
        choumaHeGuan() {
            let i = 0, len = this._PLAYER_NUM, arr_p = [];
            for (i = 0; i < len; i++) {
                if (this["box_player" + i].visible && this["box_player" + i].getChildByName("box_blind").visible) {
                    this["box_player" + i].getChildByName("box_blind").visible = false;
                    this["box_player" + i].getChildByName("box_blind").getChildByName("txt_blind").text = "";
                    arr_p.push(this["box_player" + i].getChildByName("box_blind").localToGlobal(new Point(0, 0)));
                }
            }
            this.eff.choumaHeguan(arr_p, this.txt_dichi.localToGlobal(new Point(0, 0)));
        }
        //显示单张公共牌
        showPublicCard(cards, start, end, pre_box_card) {
            if (pre_box_card) {
                pre_box_card.visible = true;
            }
            if (start > end)
                return;
            let box_card;
            var cardData = DZPKCardLogic_1.DZPKCardLogic.ins.cardValuetToClient(cards[start]);
            if (cardData > 0) {
                box_card = this.box_common_cards.getChildByName("box_card" + start);
                box_card.getChildByName("img_card").skin = CFun_1.CFun.format("dzpk/cards/card_{0}.png", cardData);
                let p = box_card.localToGlobal(new laya.maths.Point(0, 0));
                let p_he = new laya.maths.Point(this.img_heguan.x + this.img_heguan.width * 0.5, this.img_heguan.y + this.img_heguan.height * 0.5);
                this.eff.comFanpai(p, p_he, this.showPublicCard, [cards, ++start, end, box_card], this);
            }
        }
        /**
         * 玩家该显示的操作面板
         * @param state -1、不显示，1、加注，2、自动
         * @param obj_oper 涉及到显示的数据
         */
        updataOperatePanel(state, obj_oper) {
            if (state >= 0) {
                this.vs_state.visible = true;
                ;
                this.vs_state.selectedIndex = state;
                if (state == 1) {
                    this.box_slid.visible = false;
                    this.updateGenButton(obj_oper);
                    this.cb_gen.selected = this.cb_gen_all.selected = this.cb_qi.selected = false; //更新所有的自动按钮
                }
                else if (state == 2) {
                    this.updateAutoGenButton(obj_oper);
                }
            }
            else {
                this.vs_state.visible = false;
            }
        }
        /**
         * 自动跟注按钮信息
         */
        updateAutoGenButton(obj_oper) {
            let mini_bet = (obj_oper["miniBet"] - obj_oper["bet"]);
            if (mini_bet > 0) {
                if (mini_bet < obj_oper["chip"]) {
                    this.cb_gen.label = CFun_1.CFun.format(CFun_1.CFun.getItem(MsgData_1.MsgData, "id", 4032)["msg"], CFun_1.CFun.formatCurrency(mini_bet - obj_oper["stageBet"]));
                }
                else {
                    this.cb_gen.label = CFun_1.CFun.getItem(MsgData_1.MsgData, "id", 4033)["msg"];
                }
            }
            else if (mini_bet <= 0) {
                this.cb_gen.label = CFun_1.CFun.getItem(MsgData_1.MsgData, "id", 4019)["msg"];
            }
        }
        /**
         * 主动跟注按钮
         */
        updateGenButton(obj_oper) {
            let mini_bet = (obj_oper["miniBet"] - obj_oper["bet"]);
            let miniRaise = mini_bet + obj_oper["miniRaise"];
            //加注面板信息初始化
            this.box_slid.visible = false; //加注面板隐藏
            this.btn_allin["money"] = obj_oper["chip"];
            this.btn_mu10["money"] = Math.floor(obj_oper["pot"]);
            this.btn_mu10.label = CFun_1.CFun.formatCurrency(this.btn_mu10["money"]);
            this.btn_mu5["money"] = Math.floor(obj_oper["pot"] * 0.67);
            this.btn_mu5.label = CFun_1.CFun.formatCurrency(this.btn_mu5["money"]);
            this.btn_mu3["money"] = Math.floor(obj_oper["pot"] * 0.5);
            this.btn_mu3.label = CFun_1.CFun.formatCurrency(this.btn_mu3["money"]);
            this.btn_mu3.mouseEnabled = this.btn_mu3["money"] <= obj_oper["chip"] && this.btn_mu3["money"] >= miniRaise;
            this.btn_mu5.mouseEnabled = this.btn_mu5["money"] <= obj_oper["chip"] && this.btn_mu5["money"] >= miniRaise;
            this.btn_mu10.mouseEnabled = this.btn_mu10["money"] <= obj_oper["chip"] && this.btn_mu10["money"] >= miniRaise;
            // this.txt_money.text = CFun.formatCurrency(miniRaise);
            this.sid_money.min = miniRaise;
            this.sid_money.max = obj_oper["chip"];
            this.sid_money.value = this.sid_money.min;
            if (this.cb_gen.selected) {
                this.vm.addScore(mini_bet);
            }
            else if (this.cb_gen_all.selected) {
                this.vm.addScore(mini_bet);
            }
            else if (this.cb_qi.selected) {
                if (mini_bet == 0) {
                    this.vm.addScore(mini_bet);
                }
                else {
                    this.vm.fold();
                }
            }
            else {
                if (mini_bet == 0) {
                    this.btn_follow.getChildByName("img_type")["skin"] = "dzpk/zh-cn/font/buttonFont/rangpaiFont.png";
                }
                else if (mini_bet >= obj_oper["chip"]) {
                    this.btn_follow.getChildByName("img_type")["skin"] = "dzpk/zh-cn/font/buttonFont/allInFont.png";
                }
                else {
                    this.btn_follow.label = CFun_1.CFun.formatCurrency(mini_bet);
                }
                this.btn_follow["money"] = mini_bet;
            }
        }
        //等待玩家操作
        showWait(player) {
            let seat = player["seatNO"];
            let box_player = this.getPlayerSeat(seat);
            let head = box_player.getChildByName("ui_player").getChildByName("box_info").getChildByName("box_head");
            let p = head.localToGlobal(new laya.maths.Point(0, 0));
            let radius = head.width * 0.5;
            this.eff.circleEffect(player["cd"], 62, p.x, p.y, null, this); //图形是124宽高
        }
        showPlay(player) {
            this.eff.stopCircleEffect();
            let action = player["action"];
            let bet = player["bet"];
            let seat = player["seatNO"];
            let box_player = this.getPlayerSeat(seat);
            this.updatePlayerAmount(box_player.getChildByName("box_blind"), player["amount"]);
            box_player.getChildByName("ui_player").getChildByName("box_info").getChildByName("box_name").getChildByName("txt_money")["text"] = CFun_1.CFun.formatCurrency(player["chip"]);
            let box_operator = box_player.getChildByName("ui_player").getChildByName("box_operator");
            box_operator["visible"] = action != 0;
            let img_operate = box_operator.getChildByName("img_operator");
            if (player.chip == 0) {
                img_operate["skin"] = "dzpk/zh-cn/font/operateActionFont/operateAction_AllIn.png";
                // uiSoundManager.playEffect("effect_allin_mp3");
                // uiSoundManager.playEffect(gender + "_" + this.data.icon + "_" + "allin_mp3");
            }
            else {
                let p_end, p_start;
                switch (action) {
                    case Holdem_1.TEXAS_HOLDEM_ACTION.ANTE://前注
                        break;
                    case Holdem_1.TEXAS_HOLDEM_ACTION.SMALL_BLINK://小盲注
                        img_operate["skin"] = "dzpk/zh-cn/font/operateActionFont/operateAction_xiaomangzhu.png";
                        break;
                    case Holdem_1.TEXAS_HOLDEM_ACTION.BIG_BLINK://大盲注
                        img_operate["skin"] = "dzpk/zh-cn/font/operateActionFont/operateAction_damangzhu.png";
                        break;
                    case Holdem_1.TEXAS_HOLDEM_ACTION.CALL://跟注
                        img_operate["skin"] = "dzpk/zh-cn/font/operateActionFont/operateAction_genzhu.png";
                        break;
                    case Holdem_1.TEXAS_HOLDEM_ACTION.RAISE://加注
                        img_operate["skin"] = "dzpk/zh-cn/font/operateActionFont/operateAction_jiazhu.png";
                        break;
                    case Holdem_1.TEXAS_HOLDEM_ACTION.PASS://过牌
                        img_operate["skin"] = "dzpk/zh-cn/font/operateActionFont/operateAction_guopai.png";
                        // uiSoundManager.playEffect("effect_newpass_mp3");
                        break;
                    case Holdem_1.TEXAS_HOLDEM_ACTION.FOLD://弃牌
                        img_operate["skin"] = "dzpk/zh-cn/font/operateActionFont/operateAction_qipai.png";
                        // uiSoundManager.playEffect(gender + "_" + this.data.icon + "_" + "fold_mp3");
                        this.eff.stopCircleEffect();
                        box_player.alpha = 0.5;
                        p_start = box_player.localToGlobal(new Point(box_player.getChildByName("ui_player")["width"] * 0.5, box_player.getChildByName("ui_player")["height"] * 0.5));
                        p_end = new Point(this.stage.width * 0.5, this.stage.height * 0.5);
                        this.eff.qipaiEffect(p_start, p_end);
                        if (seat == this._my_seat) {
                            this.updataOperatePanel(0);
                        }
                        break;
                }
                //有下注行为
                if (player["amount"] > 0) {
                    p_start = box_player.localToGlobal(new Point(box_player.getChildByName("ui_player")["width"] * 0.5, box_player.getChildByName("ui_player")["height"] * 0.5));
                    p_end = box_player.getChildByName("box_blind")["localToGlobal"](new Point(0, 0));
                    this.eff.choumaEffect(p_start, p_end);
                }
            }
        }
        updatePlayerAmount(box_text, add) {
            let n_text = parseInt(box_text.getChildByName("txt_blind")["text"]);
            n_text = n_text > 0 ? n_text : 0;
            if (n_text > 0 || add > 0) {
                box_text["visible"] = true;
                box_text.getChildByName("txt_blind")["text"] = CFun_1.CFun.formatCurrency(n_text + add);
            }
        }
        /**
         * 显示桌子的基本信息
         * @param blink
         * @param ante
         * @param gameNo
         */
        showGameInfo(blink, ante) {
            this.txt_blind.text = CFun_1.CFun.format(CFun_1.CFun.getItem(MsgData_1.MsgData, "id", 4026)["msg"], CFun_1.CFun.formatCurrency(blink), CFun_1.CFun.formatCurrency(blink * 2)); //盲注;
            if (ante > 0) {
                this.txt_blind.text = this.txt_blind.text + CFun_1.CFun.format(CFun_1.CFun.getItem(MsgData_1.MsgData, "id", 4005)["msg"], CFun_1.CFun.formatCurrency(ante));
            }
        }
        /**
         * 显示牌局编号
         * @param game_no
         */
        showGameNo(game_no) {
            this.txt_game_id.text = game_no;
        }
        showPlayerChip(chip, seat) {
            let box_player = this.getPlayerSeat(seat);
            box_player.getChildByName("ui_player").getChildByName("box_info").getChildByName("box_name").getChildByName("txt_money")["text"] = CFun_1.CFun.formatCurrency(chip);
            // this["box_player" + v_index].visible = true;
        }
        showPlayers(list, my_seat) {
            this._my_seat = my_seat;
            let i = 0, len = list.length;
            for (i = 0; i < len; i++) {
                this.showPlayer(list[i]);
            }
        }
        showPlayer(obj) {
            let box_player = this.getPlayerSeat(obj.seatNO);
            box_player.visible = true;
            box_player.getChildByName("ui_player").getChildByName("box_info").getChildByName("box_name").getChildByName("txt_nickname")["text"] = obj.name;
            box_player.getChildByName("ui_player").getChildByName("box_info").getChildByName("box_name").getChildByName("txt_money")["text"] = obj.chip;
            box_player.getChildByName("ui_player").getChildByName("box_info").getChildByName("box_head").getChildByName("img_head")["skin"] = "gamehall/avater/" + (obj.sex == 1 ? "man" : "women") + obj.icon + ".png";
        }
        getPlayerSeat(seat) {
            if (this._my_seat == -1)
                CFun_1.CFun.throw("DZPKSceneView中玩家的索引this._my_index还未确定");
            let v_index = (seat + this._PLAYER_NUM - this._my_seat) % this._PLAYER_NUM;
            // let t_i = seat - this._my_seat;
            // let v_index = t_i >= 0?t_i:((this._PLAYER_NUM - 1) + t_i);
            return this["box_player" + v_index];
        }
        clearView() {
            this.eff.removeOver();
            this.box_dichi.visible = false;
            this.txt_dichi.text = "";
            this.txt_game_id.text = "";
            let i = 0, len = this._PLAYER_NUM;
            for (i = 0; i < len; i++) {
                this["box_player" + i].getChildByName("img_banker")["visible"] = false; //庄
                this["box_player" + i]["alpha"] = 1;
                if (i != 0) {
                    this["box_player" + i]["visible"] = false;
                    this["box_player" + i].getChildByName("box_cards")["x"] = this["box_player" + i].getChildByName("box_gai")["x"];
                    this["box_player" + i].getChildByName("box_cards")["y"] = this["box_player" + i].getChildByName("box_gai")["y"];
                    this["box_player" + i].getChildByName("box_cards").scaleX = 0.5;
                    this["box_player" + i].getChildByName("box_cards").scaleY = 0.5;
                }
                else {
                    this["box_player" + i]["visible"] = true;
                    this["box_player" + i].getChildByName("box_cards")["visible"] = false; //牌
                }
                this["box_player" + i].getChildByName("ui_player").getChildByName("box_info").getChildByName("box_name").getChildByName("txt_money")["text"] = "0";
                this["box_player" + i].getChildByName("box_cards").getChildByName("box_lcard").getChildByName("img_zhao")["visible"] = false; //牌
                this["box_player" + i].getChildByName("box_cards").getChildByName("box_lcard").getChildByName("img_tip")["visible"] = false; //牌
                this["box_player" + i].getChildByName("box_cards").getChildByName("box_lcard").getChildByName("img_card")["skin"] = "dzpk/cards/card_0.png";
                this["box_player" + i].getChildByName("box_cards").getChildByName("box_rcard").getChildByName("img_zhao")["visible"] = false; //牌
                this["box_player" + i].getChildByName("box_cards").getChildByName("box_rcard").getChildByName("img_tip")["visible"] = false; //牌
                this["box_player" + i].getChildByName("box_cards").getChildByName("box_rcard").getChildByName("img_card")["skin"] = "dzpk/cards/card_0.png";
                this["box_player" + i].getChildByName("box_blind")["visible"] = false; //下的注
                this["box_player" + i].getChildByName("box_type")["visible"] = false; //牌型
                this["box_player" + i].getChildByName("ui_player").getChildByName("box_operator")["visible"] = false; //操作类型
            }
            for (i = 0; i < 5; i++) {
                Laya.Tween.clearAll(this.box_common_cards.getChildByName("box_card" + i));
                this.box_common_cards.getChildByName("box_card" + i)["visible"] = false; //公共牌
                this.box_common_cards.getChildByName("box_card" + i).getChildByName("img_chose")["visible"] = false; //公共牌
            }
        }
        onOpenMenu() {
            this.vm.showMenu();
        }
        viewInit(recv) {
            this.clearView();
            this.box_player0.getChildByName("ui_player").getChildByName("box_info").getChildByName("box_name").getChildByName("txt_nickname")["text"] = recv.name;
            this.box_player0.getChildByName("ui_player").getChildByName("box_info").getChildByName("box_head").getChildByName("img_head")["skin"] = "gamehall/avater/" + (recv.sex == 1 ? "man" : "women") + recv.icon + ".png";
        }
        onPiPei() {
            if (this.box_dichi.visible) {
                this.vm.quit();
            }
            else {
                this.vm.sendPiPei();
            }
            this._my_seat = -1;
            this.clearView();
        }
        //加注数量改变
        onAddChange() {
            this.txt_money.text = CFun_1.CFun.formatCurrency(this.sid_money.value);
        }
        //显示加注面板 或 直接加注
        onShowAddPanel() {
            if (!this.box_slid.visible)
                this.box_slid.visible = true;
            else {
                this.vm.addScore(this.sid_money.value);
            }
        }
        //主动操作的按钮
        onOperator(e) {
            let cb = e.currentTarget;
            if (cb == this.btn_allin) {
                this.vm.addScore(this.btn_allin["money"]);
            }
            else if (cb == this.btn_follow) {
                this.vm.addScore(this.btn_follow["money"]);
            }
            else if (cb == this.btn_mu10) {
                this.vm.addScore(this.btn_mu10["money"]);
            }
            else if (cb == this.btn_mu5) {
                this.vm.addScore(this.btn_mu5["money"]);
            }
            else if (cb == this.btn_mu3) {
                this.vm.addScore(this.btn_mu3["money"]);
            }
            else if (cb == this.btn_qipai) {
                this.vm.fold();
            }
        }
        onAutoOperator(e) {
            let cb = e.currentTarget;
            if (cb.selected) {
                if (cb == this.cb_gen) {
                    this.cb_qi.selected = this.cb_gen_all.selected = false;
                }
                else if (cb == this.cb_qi) {
                    this.cb_gen.selected = this.cb_gen_all.selected = false;
                }
                else {
                    this.cb_gen.selected = this.cb_gen.selected = false;
                }
            }
        }
        comInit() {
            this.btn_menu.on(Laya.Event.CLICK, this, this.onOpenMenu);
            this.btn_pipei.on(Laya.Event.CLICK, this, this.onPiPei);
            this.btn_add.on(Laya.Event.CLICK, this, this.onShowAddPanel);
            this.btn_allin.on(Laya.Event.CLICK, this, this.onOperator);
            this.btn_follow.on(Laya.Event.CLICK, this, this.onOperator);
            this.btn_mu10.on(Laya.Event.CLICK, this, this.onOperator);
            this.btn_mu3.on(Laya.Event.CLICK, this, this.onOperator);
            this.btn_mu5.on(Laya.Event.CLICK, this, this.onOperator);
            this.btn_qipai.on(Laya.Event.CLICK, this, this.onOperator);
            this.cb_gen.on(Laya.Event.CLICK, this, this.onAutoOperator);
            this.cb_qi.on(Laya.Event.CLICK, this, this.onAutoOperator);
            this.cb_gen_all.on(Laya.Event.CLICK, this, this.onAutoOperator);
            this.sid_money.on(Laya.Event.CHANGE, this, this.onAddChange);
        }
        //获取特效对象
        get eff() {
            return MEffectView_1.MEffectView.ins.dzpk;
        }
        get vm() {
            if (!this._vm)
                CFun_1.CFun.throw("ComView中_vm还未初始化！");
            return this._vm;
        }
    }
    exports.DZPKSceneView = DZPKSceneView;
});
//# sourceMappingURL=DZPKSceneView.js.map