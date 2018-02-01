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
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        function Player() {
            var _this = _super.call(this) || this;
            _this._accountId = 0;
            _this.lockGold = 0;
            _this.gold = 0;
            _this.code = 0; //enterSceneOK
            _this.recordList = []; //onLoadRecords
            _this.holdemRecords = [];
            _this.erbaRecords = [];
            _this.noticeMsg = []; //onAllNoticeMsg 广播
            _this.lastRoomId = 0; //前端自用
            _this.curDeck = 0; //当前桌子
            _this.roomSN = 0;
            _this.roomDataList = [];
            _this.gameList = {}; //onGetGameList
            _this.arr_gameList = [];
            _this.roomDict = {};
            _this.gamePlayer = []; //onGetGamePlayer
            _this.gameid = 0;
            _this.errorCode = 0;
            _this.sceneEid = 0; //openScene
            //匹配的房间
            _this.queueRoomType = 0;
            //发生的游戏
            _this.sn = 0;
            //takemoney
            _this.amount = 0;
            _this.ret = 0; //onJoinRoom  @ret: 返回值 0 表示成功，其他表示错误 ,@sn: 赌桌号 = this._roomSN
            return _this;
        }
        Object.defineProperty(Player.prototype, "accountId", {
            get: function () {
                return this._accountId;
            },
            set: function (val) {
                this._accountId = val;
                StaticData.accountId = val;
            },
            enumerable: true,
            configurable: true
        });
        Player.prototype.getShowGold = function () {
            return this.gold * 0.01;
        };
        Object.defineProperty(Player.prototype, "roomData", {
            get: function () {
                return this._roomData;
            },
            set: function (val) {
                this._roomData = val;
                var games = JSON.parse(val);
                games.sort(function (a, b) {
                    return a.id > b.id ? 1 : -1;
                });
                this.roomDataList = {};
                this.roomDict = {};
                for (var i in games) {
                    var gameType = games[i].gameType;
                    var roomType = games[i].id;
                    if (!this.roomDataList[gameType]) {
                        this.roomDataList[gameType] = [];
                    }
                    this.roomDict[roomType] = games[i];
                    this.roomDataList[gameType].push(games[i]);
                }
                if (this.roomSN != 0) {
                    this.gameType = this.getGameTypeBySN(this.roomSN);
                    //进入德州
                    this.lastRoomId = this.getRoomTypeBySN(this.roomSN);
                    this.curDeck = this.roomSN;
                }
            },
            enumerable: true,
            configurable: true
        });
        /*****************************************工具信息************************************************/
        /** 登陆类型 */
        Player.prototype.getRoomTypeBySN = function (sn) {
            return Math.floor(sn / StaticData.SNRoomType);
        };
        Player.prototype.getGameTypeBySN = function (sn) {
            if (sn <= 0)
                return 0;
            var roomType = this.getRoomTypeBySN(sn);
            return this.roomDict[roomType].gameType;
        };
        Player.prototype.recvInit = function () {
            this.regist("client_Player_onLoadRecords", this.onLoadRecords);
            this.regist("client_Player_onGetGameList", this.onGetGameList);
        };
        Player.prototype.onGetGameList = function () {
            for (var key in this.gameList) {
                this.arr_gameList.push(this.gameList[key]);
            }
        };
        Player.prototype.onLoadRecords = function () {
            this.holdemRecords = [];
            this.erbaRecords = [];
            for (var len = this.recordList.length, i = len - 1; i >= 0; i--) {
                var gameType = this.recordList[i].gameType;
                var records = [];
                switch (gameType) {
                    case StaticData.HOLDEM:
                        records = this.holdemRecords;
                        break;
                    case StaticData.ERBA:
                        records = this.erbaRecords;
                        break;
                }
                if (this.recordList[i].gameNo != "") {
                    records.push({
                        gamesn: this.recordList[i].gamesn,
                        gameNo: this.recordList[i].gameNo,
                        roomType: this.recordList[i].roomType,
                        matchType: this.recordList[i].matchType,
                        take: this.recordList[i].take,
                        chip: this.recordList[i].chip,
                        win: this.recordList[i].win,
                        deduct: this.recordList[i].deduct,
                        time: CFun.formatDate(new Date(parseInt(this.recordList[i].time) * 1000), "yyyy-MM-dd hh:mm:ss"),
                    });
                }
            }
        };
        //获取当前房间信息
        Player.prototype.getRoomDataById = function (type, id) {
            if (this.roomDataList[type].length == 0) {
                return;
            }
            var list = this.roomDataList[type];
            for (var i = 0, len = list.length; i < len; i++) {
                if (list[i].id == id) {
                    return list[i];
                }
            }
        };
        return Player;
    }(MModel));
    exports.Player = Player;
});
//# sourceMappingURL=Player.js.map