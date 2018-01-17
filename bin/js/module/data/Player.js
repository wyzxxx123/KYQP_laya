var module;
(function (module) {
    var data;
    (function (data) {
        class Player extends module.base.MModel {
            constructor() {
                super();
                this.code = 0; //enterSceneOK
                this.recordList = []; //onLoadRecords
                this.holdemRecords = [];
                this.erbaRecords = [];
                this.noticeMsg = []; //onAllNoticeMsg 广播
                this.lastRoomId = 0;
                this.curDeck = 0; //当前桌子
                this.roomSN = 0;
                this.roomDataList = [];
                this.gameList = {}; //onGetGameList
                this.arr_gameList = [];
                this.roomDict = {};
                this.gamePlayer = []; //onGetGamePlayer
                this.sceneEid = 0; //openScene
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
            }
            get roomData() {
                return this._roomData;
            }
            getRoomTypeBySN(sn) {
                return Math.floor(sn / Player.SNRoomType);
            }
            getGameTypeBySN(sn) {
                var roomType = this.getRoomTypeBySN(sn);
                // return this.roomDataList[roomType]
                return this.roomDict[roomType].gameType;
            }
            recvInit() {
                this.regist("client_Player_onEnterRoomList", this.onEnterRoomList);
                this.regist("client_Player_onLoadRecords", this.onLoadRecords);
                this.regist("client_Player_onGetGameList", this.onGetGameList);
                this.regist("client_Player_openScene", this.onOpenScene);
            }
            onOpenScene() {
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
                            time: core.CFun.formatDate(new Date(parseInt(this.recordList[i].time) * 1000), "yyyy-MM-dd hh:mm:ss"),
                        });
                    }
                }
            }
            onEnterRoomList() {
                if (this.roomSN != 0) {
                    this.lastRoomId = this.getRoomTypeBySN(this.roomSN);
                    this.curDeck = this.roomSN;
                }
            }
        }
        Player.accountId = 0;
        /*****************************************工具信息************************************************/
        /** 登陆类型 */
        Player.HALL = "";
        Player.HOLDEM = "holdem";
        Player.ERBA = "erba";
        Player.SNRoomType = 200000;
        data.Player = Player;
    })(data = module.data || (module.data = {}));
})(module || (module = {}));
//# sourceMappingURL=Player.js.map