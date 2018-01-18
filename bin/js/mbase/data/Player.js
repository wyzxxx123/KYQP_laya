define(["require", "exports", "../base/MModel", "../../core/CFun"], function (require, exports, MModel_1, CFun_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Player extends MModel_1.MModel {
        constructor() {
            super();
            this.lockGold = 0;
            this.gold = 0;
            this.code = 0; //enterSceneOK
            this.recordList = []; //onLoadRecords
            this.holdemRecords = [];
            this.erbaRecords = [];
            this.noticeMsg = []; //onAllNoticeMsg 广播
            this.lastRoomId = 0; //前端自用
            this.curDeck = 0; //当前桌子
            this.roomSN = 0;
            this.roomDataList = [];
            this.gameList = {}; //onGetGameList
            this.arr_gameList = [];
            this.roomDict = {};
            this.gamePlayer = []; //onGetGamePlayer
            this.gameid = 0;
            this.errorCode = 0;
            this.sceneEid = 0; //openScene
            //匹配的房间
            this.queueRoomType = 0;
            //发生的游戏
            this.sn = 0;
            //takemoney
            this.amount = 0;
            this.ret = 0; //onJoinRoom  @ret: 返回值 0 表示成功，其他表示错误 ,@sn: 赌桌号 = this._roomSN
        }
        getShowGold() {
            return this.gold * 0.01;
        }
        set roomData(val) {
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
        }
        get roomData() {
            return this._roomData;
        }
        getRoomTypeBySN(sn) {
            return Math.floor(sn / Player.SNRoomType);
        }
        getGameTypeBySN(sn) {
            if (sn <= 0)
                return 0;
            var roomType = this.getRoomTypeBySN(sn);
            return this.roomDict[roomType].gameType;
        }
        recvInit() {
            this.regist("client_Player_onLoadRecords", this.onLoadRecords);
            this.regist("client_Player_onGetGameList", this.onGetGameList);
        }
        onGetGameList() {
            for (var key in this.gameList) {
                this.arr_gameList.push(this.gameList[key]);
            }
        }
        onLoadRecords() {
            this.holdemRecords = [];
            this.erbaRecords = [];
            for (let len = this.recordList.length, i = len - 1; i >= 0; i--) {
                let gameType = this.recordList[i].gameType;
                let records = [];
                switch (gameType) {
                    case Player.HOLDEM:
                        records = this.holdemRecords;
                        break;
                    case Player.ERBA:
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
                        time: CFun_1.CFun.formatDate(new Date(parseInt(this.recordList[i].time) * 1000), "yyyy-MM-dd hh:mm:ss"),
                    });
                }
            }
        }
        //获取当前房间信息
        getRoomDataById(type, id) {
            if (this.roomDataList[type].length == 0) {
                return;
            }
            var list = this.roomDataList[type];
            for (var i = 0, len = list.length; i < len; i++) {
                if (list[i].id == id) {
                    return list[i];
                }
            }
        }
    }
    Player.accountId = 0;
    /*****************************************工具信息************************************************/
    /** 登陆类型 */
    Player.HALL = ""; //大厅
    Player.HOLDEM = "holdem"; //德州
    Player.ERBA = "erba"; //二八杠
    Player.SNRoomType = 200000;
    exports.Player = Player;
});
//# sourceMappingURL=Player.js.map