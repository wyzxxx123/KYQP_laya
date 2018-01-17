module mbase.data{
    export class CityScene extends base.MModel{

        protected recvInit(){
            this.regist("server_Client_createEntity_CityScene",this.onCreateMe);
        }

        private onCreateMe(){
            
        }

        constructor(){
            super();
        }  

    }
}