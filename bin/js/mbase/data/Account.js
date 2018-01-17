var mbase;
(function (mbase) {
    var data;
    (function (data) {
        class Accounts extends mbase.base.MModel {
            constructor() {
                super();
            }
            recvInit() {
                this.regist("server_Client_createEntity_Account", this.onCreateMe);
                this.regist("client_Account_onCheckAccount", this.onCheckAccount);
            }
            onCheckAccount() {
                this.sendData(1031);
            }
            onCreateMe() {
                if (GameConfig.LoginType == 1) {
                    var testAccount = core.CFun.getQueryString("name") ? core.CFun.getQueryString("name") : core.CFun.getIMEI();
                    this.checkAccount(testAccount, "123465");
                }
                else {
                    // this.login();
                }
            }
            checkAccount(account, pass) {
                this.sendData(1027, [account, pass, GameConfig.SVR_ID, false]);
            }
        }
        data.Accounts = Accounts;
    })(data = mbase.data || (mbase.data = {}));
})(mbase || (mbase = {}));
//# sourceMappingURL=Account.js.map