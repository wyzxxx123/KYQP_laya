var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../../GameConfig"], function (require, exports, GameConfig_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Accounts = /** @class */ (function (_super) {
        __extends(Accounts, _super);
        function Accounts() {
            return _super.call(this) || this;
        }
        Accounts.prototype.recvInit = function () {
            this.regist("server_Client_createEntity_Account", this.onCreateMe);
            this.regist("client_Account_onCheckAccount", this.onCheckAccount);
        };
        Accounts.prototype.onCheckAccount = function () {
            this.sendData(1031);
        };
        Accounts.prototype.onCreateMe = function () {
            if (GameConfig_1.GameConfig.LoginType == 1) {
                var testAccount = CFun.getQueryString("name") ? CFun.getQueryString("name") : CFun.getIMEI();
                this.checkAccount(testAccount, "123465");
            }
            else {
                // this.login();
            }
        };
        Accounts.prototype.checkAccount = function (account, pass) {
            this.sendData(1027, [account, pass, GameConfig_1.GameConfig.SVR_ID, false]);
        };
        return Accounts;
    }(MModel));
    exports.Accounts = Accounts;
});
//# sourceMappingURL=Accounts.js.map