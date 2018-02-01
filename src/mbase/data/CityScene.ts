    export class CityScene extends MModel{

        protected recvInit(){
            this.regist("server_Client_createEntity_CityScene",this.onCreateMe);
        }

        private onCreateMe(){
            
        }

        constructor(){
            super();
        }  

    }
