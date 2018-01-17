module mbase.data{
    export class HoldemDeck extends base.MModel{

        //sitdown
        public seat:number = 0;//一个人赢也是这个参数
        public rid:number = 0;
        public name:number = 0;
        public icon:number = 0;
        public sex:number = 0;
        public chip:number = 0;
        
        //某座位玩家又带了多少筹码
        public amount:number = 0;



        public get isPlaying(): boolean  {
            return this._isPlaying;
        }

        public set isPlaying(value: boolean ) {
            this._isPlaying = value;
        }
        private _isPlaying:boolean = false;
        public nextHandCD:number = 0;
        public hand:number = 0;
        public curHand:number = 0;
        public miniBet:number = 0;
        public miniRaise:number = 0;
        public dealer:number = 0;

        //某座位玩家操作
        public action:number = 0;
        public bet:number = 0;
        public cd:number = 0;

        //翻牌
        public cards:number[] = [];
        //转牌，河牌
        public card:number = 0;

        /**
         * 底池
         */
        public pot:number = 0;

        public blink:number = 0;
        public ante:number = 0;

        public holeCards:any[] = [];
        public bestHands:any[] = [];
        public winner:any[] = [];

        //所有人弃牌后获胜的位置
        public seatNO:number = 0;

        protected recvInit(){
            this.regist("server_Client_createEntity_HoldemDeck",this.onCreateMe);
        }

        private onCreateMe(){
            
        }

        constructor(){
            super();
        }  
    }
}