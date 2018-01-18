import { MModel } from '../base/MModel';
    export class HoldemAgent extends MModel{

        //enterDeck
        public pokers:any[] = [];

        public publicCards:any[] = [];//enterDeck

        public myHoleCards:any[] = [];//enterDeck

        public gameNo:string = "";
        //
        
        public seatNO:number = 0;

        public take:number = 0;

        public chip:number = 0;

        public bet:number = 0;

        public passable:boolean = false;

        //玩家自己的手牌
        public cards:any[] = []; //recvHoleCard


        public activeList:any[] = [];

        protected recvInit(){
            this.regist("server_Client_createEntity_Account",this.onCreateMe);
        }

        private onCreateMe(){

        }

        constructor(){
            super();
        }  
    }
