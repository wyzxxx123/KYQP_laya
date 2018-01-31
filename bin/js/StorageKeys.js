define(["require", "exports", "./KYQP_laya", "./mbase/data/Player"], function (require, exports, KYQP_laya_1, Player_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * 本地存储键配置
     * @author none
     *
     */
    class StorageKeys {
        constructor() {
        }
        static get accountSave() {
            return KYQP_laya_1.GameMain.appName + "accountSave";
        }
        static get account() {
            return KYQP_laya_1.GameMain.appName + "account";
        }
        static get password() {
            return KYQP_laya_1.GameMain.appName + "password";
        }
        static get imei_windows() {
            return KYQP_laya_1.GameMain.appName + "imei_windows";
        }
        static get isGuest() {
            return KYQP_laya_1.GameMain.appName + "isGuest";
        }
        static get isLoginType() {
            return KYQP_laya_1.GameMain.appName + "isLoginType";
        }
        static get musicValue() {
            return KYQP_laya_1.GameMain.appName + "musicValue";
        }
        static get soundValue() {
            return KYQP_laya_1.GameMain.appName + "soundValue";
        }
        static get shakeValue() {
            return KYQP_laya_1.GameMain.appName + "shakeValue";
        }
        static get autoLogin() {
            return KYQP_laya_1.GameMain.appName + "autoLogin";
        }
        static get DZPKTakeScore() {
            return KYQP_laya_1.GameMain.appName + Player_1.Player.accountId + "DZPKTakeScore";
        }
    }
    exports.StorageKeys = StorageKeys;
});
//# sourceMappingURL=StorageKeys.js.map