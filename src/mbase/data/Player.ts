export class Player extends MModel{
        private _accountId:number = 0;

        public set accountId(val:number){
            this._accountId = val;
            StaticData.accountId = val;
        }

        public get accountId():number{
            return this._accountId
        }

        public lockGold:number = 0;
        public gold:number = 0;

        public getShowGold():number{
            return this.gold * 0.01;
        }

        public code:number = 0;//enterSceneOK

        public recordList:any[] = [];//onLoadRecords
        public holdemRecords: Array<any> = [];
        public erbaRecords: Array<any> = [];
        public noticeMsg: Array<any> = [];//onAllNoticeMsg 广播


        public lastRoomId: number = 0;//前端自用
        public curDeck: number = 0;//当前桌子

        public gameType:any;
        
        public roomSN:number = 0;

        public roomDataList: any = [];
        public gameList = {}; //onGetGameList
        public arr_gameList = [];
        public roomDict: any = {};

        public gamePlayer:any[] = [];//onGetGamePlayer

        public gameid:number = 0;
        public errorCode:number = 0;

        public sceneEid:number = 0;//openScene

        //匹配的房间
        public queueRoomType:number = 0;

        //发生的游戏
        public sn:number = 0;
        //takemoney
        public amount:number = 0;

        public ret:number = 0; //onJoinRoom  @ret: 返回值 0 表示成功，其他表示错误 ,@sn: 赌桌号 = this._roomSN

        private _roomData:string;
        public set roomData(val:string){
            this._roomData = val;

            var games: Array<any> = JSON.parse(val);
            games.sort(function (a, b) {
                return a.id > b.id ? 1 : -1;
            });

            this.roomDataList = {};
            this.roomDict = {};
            for (var i in games) {
                var gameType = games[i].gameType;
                var roomType = games[i].id
                if (!this.roomDataList[gameType]) {
                    this.roomDataList[gameType] = [];
                }
                this.roomDict[roomType] = games[i];
                this.roomDataList[gameType].push(games[i]);
            }

            if(this.roomSN != 0){
                this.gameType = this.getGameTypeBySN(this.roomSN);
                //进入德州
                this.lastRoomId = this.getRoomTypeBySN(this.roomSN);
                this.curDeck = this.roomSN;
            }
        }

        public get roomData():string{
            return this._roomData;
        }

        /*****************************************工具信息************************************************/
        /** 登陆类型 */
        public getRoomTypeBySN(sn: number) {
            return Math.floor(sn /  StaticData.SNRoomType);
        }

        public getGameTypeBySN(sn: number) {
            if(sn <= 0) return 0;
            var roomType = this.getRoomTypeBySN(sn);

            return this.roomDict[roomType].gameType;
        }

        protected recvInit(){
            this.regist("client_Player_onLoadRecords",this.onLoadRecords);
            this.regist("client_Player_onGetGameList",this.onGetGameList);
        }

        private onGetGameList(){
            for (var key in this.gameList) {
                this.arr_gameList.push(this.gameList[key]);
            }
        }

        private onLoadRecords(){
            this.holdemRecords = [];
            this.erbaRecords = [];
            for (let len = this.recordList.length, i = len - 1; i >= 0; i--) {

                let gameType = this.recordList[i].gameType
                let records = [];
                switch (gameType) {
                    case  StaticData.HOLDEM:
                        records = this.holdemRecords;
                        break;
                    case  StaticData.ERBA:
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
        }

        //获取当前房间信息
        public getRoomDataById(type: string, id: number) {
            if (this.roomDataList[type].length == 0) {
                return;
            }
            var list: Array<any> = this.roomDataList[type];
            for (var i = 0, len = list.length; i < len; i++) {
                if (list[i].id == id) {
                    return list[i];
                }
            }
        }

        constructor(){
            super();
        }   
    }
