define(["require", "exports", "../base/MModel", "../../GameConfig", "../../core/CFun"], function (require, exports, MModel_1, GameConfig_1, CFun_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Accounts extends MModel_1.MModel {
        recvInit() {
            this.regist("server_Client_createEntity_Account", this.onCreateMe);
            this.regist("client_Account_onCheckAccount", this.onCheckAccount);
        }
        onCheckAccount() {
            this.sendData(1031);
        }
        onCreateMe() {
            if (GameConfig_1.GameConfig.LoginType == 1) {
                var testAccount = CFun_1.CFun.getQueryString("name") ? CFun_1.CFun.getQueryString("name") : CFun_1.CFun.getIMEI();
                this.checkAccount(testAccount, "123465");
            }
            else {
                // this.login();
            }
        }
        checkAccount(account, pass) {
            this.sendData(1027, [account, pass, GameConfig_1.GameConfig.SVR_ID, false]);
        }
        constructor() {
            super();
        }
    }
    exports.Accounts = Accounts;
});
//# sourceMappingURL=Account.js.map