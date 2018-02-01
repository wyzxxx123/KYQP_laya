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
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DZPKEffect = /** @class */ (function (_super) {
        __extends(DZPKEffect, _super);
        ///////////////////////////////思考光圈//////////////////////////////////
        function DZPKEffect() {
            var _this = _super.call(this) || this;
            ///////////////////////////////翻牌过程///////////////////////////////////
            ///////////////////////////////思考光圈//////////////////////////////////
            _this._obj_circle = {};
            _this._img_circle = null;
            _this._spr_mask = null;
            _this._img_blink = null;
            _this._spr_rotation = null;
            return _this;
        }
        DZPKEffect.prototype.removeOver = function () {
            this.stopCircleEffect();
            if (this._arr_succ && this._arr_succ.length > 0) {
                while (this._arr_succ.length > 0) {
                    this.removeChild(this._arr_succ.pop());
                }
            }
            if (this._arr_font && this._arr_font.length > 0) {
                while (this._arr_font.length > 0) {
                    this.removeChild(this._arr_font.pop());
                }
            }
            while (this.numChildren > 0) {
                var child = this.getChildAt(this.numChildren - 1);
                Laya.Tween.clearAll(child);
                this.removeChild(child);
            }
        };
        DZPKEffect.prototype.succType = function (cardType, p) {
            if (!this._arr_succ)
                this._arr_succ = [];
            var succ = new ui.game_dzpk.DZPKSuccUI();
            succ.img_succ_type.skin = "dzpk/zh-cn/font/gameOverFont/victory_cardType" + cardType + ".png";
            succ.x = p.x - 126;
            succ.y = p.y - 78;
            this.addChild(succ);
            this._arr_succ.push(succ);
        };
        ///////////////////////////游戏获胜的特效///////////////////////
        ///////////////////////////输赢数字上漂///////////////////////
        DZPKEffect.prototype.numberFloat = function (num, is_win, p_start) {
            if (!this._arr_font)
                this._arr_font = [];
            var f = new Laya.FontClip();
            if (is_win) {
                f.skin = "bitmapFont/gameOverVictoryFnt.png";
                f.sheet = "49807 6+325. 1  ";
            }
            else {
                f.skin = "bitmapFont/gameOverCutFnt.png";
                f.sheet = "40. 861 79- 235";
            }
            f.value = num.toString();
            f.x = p_start.x;
            f.y = p_start.y;
            this.addChild(f);
            this._arr_font.push(f);
            Laya.Tween.to(f, { y: (p_start.y - 100) }, 200);
        };
        ///////////////////////////输赢数字上漂///////////////////////
        /////////////////////////////票筹码/////////////////////////////
        DZPKEffect.prototype.choumaEffect = function (p_start, p_end) {
            var i = 0, len = 6, chouma;
            for (i = 1; i <= len; i++) {
                chouma = new Laya.Image("dzpk/gameScene/score" + i + ".png");
                chouma.x = p_start.x;
                chouma.y = p_start.y;
                this.addChild(chouma);
                Laya.Tween.to(chouma, { x: p_end.x, y: p_end.y }, 200, null, laya.utils.Handler.create(this, this.choumaComplete, [chouma]), i * 20);
            }
        };
        DZPKEffect.prototype.choumaComplete = function (chouma) {
            this.removeChild(chouma);
        };
        //荷官收筹码（再飞到获胜者那）
        DZPKEffect.prototype.choumaHeguan = function (arr_p, p_heguan) {
            var i = 0, len = arr_p.length;
            for (i = 0; i < len; i++) {
                this.choumaEffect(arr_p[i], p_heguan);
            }
        };
        /////////////////////////////票筹码/////////////////////////////
        /////////////////////////////玩家弃牌///////////////////////////////
        DZPKEffect.prototype.qipaiEffect = function (p_start, p_end) {
            var cards = new ui.game_dzpk.DZPKCardsUI();
            cards.getChildByName("box_lcard").getChildByName("img_tip")["visible"] = false;
            cards.getChildByName("box_rcard").getChildByName("img_tip")["visible"] = false;
            cards.x = p_start.x;
            cards.y = p_start.y;
            cards.scaleX = cards.scaleY = 0.5;
            this.addChild(cards);
            Laya.Tween.to(cards, { x: p_end.x, y: p_end.y }, 400, null, laya.utils.Handler.create(this, this.qipaiComplete, [cards]));
        };
        DZPKEffect.prototype.qipaiComplete = function (cards) {
            this.removeChild(cards);
        };
        /////////////////////////////玩家弃牌///////////////////////////////
        //////////////////////////////////////////////////////播放公共牌翻转特效
        DZPKEffect.prototype.comFanpai = function (p_pai, p_he, back_complete, args, obj) {
            var card = new Laya.Image("dzpk/cards/card_0.png");
            card.x = p_he.x;
            card.y = p_he.y;
            card.scale(0.3, 0.3);
            this.addChild(card);
            Laya.Tween.to(card, { x: p_pai.x, y: p_pai.y }, 200, null, laya.utils.Handler.create(this, this.moveComplete, [card, p_pai, back_complete, args, obj]));
        };
        DZPKEffect.prototype.moveComplete = function (card, p_pai, back_complete, args, obj) {
            this.removeChild(card);
            this.fanpai(p_pai, back_complete, args, obj);
        };
        //////////////////////////////////////////////////////播放公共牌翻转特效
        ///////////////////////////////////////////荷官发牌特效////////////////////////
        /**
         * 荷官发牌特效
         * @param arr_p 所有玩家坐标
         * @param he_p 荷官坐标
         * @param me_index 我的索引
         * @param me_complete 我的发牌特效和翻牌特效播放完后调用
         */
        DZPKEffect.prototype.heguanfapaiEffect = function (arr_p, he_p, me_index, me_complete, args, obj) {
            var card = new Laya.Image("dzpk/cards/card_0.png");
            card.x = he_p.x;
            card.y = he_p.y;
            card.scale(0.3, 0.3);
            this.addChild(card);
            var i = 0, len = arr_p.length;
            for (i = 0; i < len * 2; i++) {
                Laya.Tween.to(card, { x: arr_p[i % len].x, y: arr_p[i % len].y }, 200, null, laya.utils.Handler.create(this, this.heguanComplete, [card, he_p, me_index, i, len * 2, me_complete, args, obj]), i * 250);
            }
        };
        DZPKEffect.prototype.heguanComplete = function (card, he_p, me_index, i, len, me_complete, args, obj) {
            card.x = he_p.x;
            card.y = he_p.y;
            if (i == len - 1)
                this.removeChild(card);
            if (me_index == i || me_index * 2 == i) {
                if (me_index == i) {
                    me_complete.apply(obj, args.concat(false));
                }
                else {
                    me_complete.apply(obj, args.concat(true));
                }
            }
        };
        ///////////////////////////////////////////荷官发牌特效////////////////////////
        ///////////////////////////////翻牌过程///////////////////////////////////
        /**
         * 翻牌过程
         * @param x 位置
         * @param y
         * @param call_back 完成后行为
         * @param args 参数
         * @param obj 执行call_back对象
         */
        DZPKEffect.prototype.fanpai = function (p_pai, call_back, args, obj) {
            var ani_fan = new Laya.Animation();
            ani_fan.x = p_pai.x;
            ani_fan.y = p_pai.y;
            ani_fan.loadAtlas("res/atlas/dzpk/effect/fanpai.atlas", Laya.Handler.create(this, this.onLoaded, [ani_fan, call_back, args, obj]));
        };
        DZPKEffect.prototype.onLoaded = function (ani_fan, call_back, args, obj) {
            this.addChild(ani_fan);
            ani_fan.on(Laya.Event.COMPLETE, this, this.fanComplete, [ani_fan, call_back, args, obj]);
            ani_fan.play();
        };
        DZPKEffect.prototype.fanComplete = function (ani_fan, call_back, args, obj) {
            this.removeChild(ani_fan);
            call_back.apply(obj, args);
        };
        DZPKEffect.prototype.stopCircleEffect = function () {
            Laya.Tween.clearAll(this._obj_circle);
            if (this._img_circle) {
                this._spr_mask.graphics.clear();
                this._img_circle.mask = null;
                this.removeChild(this._img_circle);
                this.removeChild(this._spr_rotation);
            }
        };
        /**
         * 显示等待光圈
         * @param cd 时长
         * @param radius 半径
         * @param x 圆心x
         * @param y 圆心y
         */
        DZPKEffect.prototype.circleEffect = function (cd, radius, x, y, complete, obj) {
            if (!this._img_circle)
                this._img_circle = new Laya.Image("dzpk/gameScene/progressTimerBg.png");
            if (!this._img_blink)
                this._img_blink = new Laya.Image("dzpk/gameScene/progressTimerBlink.png");
            if (!this._spr_mask)
                this._spr_mask = new Laya.Sprite();
            if (!this._spr_rotation)
                this._spr_rotation = new Laya.Sprite();
            this._img_circle.x = x;
            this._img_circle.y = y;
            this._img_circle.mask = this._spr_mask;
            this.addChild(this._img_circle);
            this._spr_rotation.x = x + radius;
            this._spr_rotation.y = y + radius;
            this.addChild(this._spr_rotation);
            this._img_blink.x = -this._img_blink.width * 0.5 * 0.5;
            this._img_blink.y = -radius - this._img_blink.width * 0.5 * 0.5;
            this._img_blink.scale(0.5, 0.5);
            this._spr_rotation.addChild(this._img_blink);
            //画圆
            this._spr_mask.graphics.clear();
            this._obj_circle = { x: radius, y: radius, radius: radius, r: (15 - cd) * 360 / 15 };
            Laya.Tween.to(this._obj_circle, { r: 360, update: new Laya.Handler(this, this.updateR) }, 15 * 1000, null, laya.utils.Handler.create(this, this.circleComplete, [complete, obj]), 0);
        };
        DZPKEffect.prototype.circleComplete = function (complete, obj) {
            this._img_circle.mask = null;
            this.removeChild(this._img_circle);
            this.removeChild(this._spr_rotation);
            if (complete)
                complete.call(obj);
        };
        DZPKEffect.prototype.updateR = function () {
            this._spr_mask.graphics.clear();
            this._spr_mask.graphics.drawPie(this._obj_circle.x, this._obj_circle.y, this._obj_circle.radius, -90, -90 + this._obj_circle.r, "#ff0000");
            this._spr_rotation.rotation = this._obj_circle.r;
        };
        return DZPKEffect;
    }(laya.ui.Component));
    exports.DZPKEffect = DZPKEffect;
});
//# sourceMappingURL=DZPKEffect.js.map