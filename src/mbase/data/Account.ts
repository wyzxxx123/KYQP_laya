import { MModel } from '../base/MModel';
import { GameConfig } from '../../GameConfig';
import { CFun } from '../../core/CFun';
    export class Accounts extends MModel{
        public code:number;

        public timeStamp:number;

        protected recvInit(){
            this.regist("server_Client_createEntity_Account",this.onCreateMe);
            this.regist("client_Account_onCheckAccount",this.onCheckAccount);
        }

        private onCheckAccount(){
            this.sendData(1031);
        }

        private onCreateMe(){
            if(GameConfig.LoginType == 1){
                var testAccount = CFun.getQueryString("name") ? CFun.getQueryString("name") : CFun.getIMEI();
                this.checkAccount(testAccount, "123465");
            }else{
                // this.login();
            }
        }

        private checkAccount(account:string,pass:string){
            this.sendData(1027,[account,pass,GameConfig.SVR_ID,false]);
        }

        constructor(){
            super();
        }
    }
