/**
 * 本地存储键配置
 * @author none
 *
 */
class StorageKeys {
    constructor() {
    }
    static get accountSave() {
        return GameMain.appName + "accountSave";
    }
    static get account() {
        return GameMain.appName + "account";
    }
    static get password() {
        return GameMain.appName + "password";
    }
    static get imei_windows() {
        return GameMain.appName + "imei_windows";
    }
    static get isGuest() {
        return GameMain.appName + "isGuest";
    }
    static get isLoginType() {
        return GameMain.appName + "isLoginType";
    }
    static get musicValue() {
        return GameMain.appName + "musicValue";
    }
    static get soundValue() {
        return GameMain.appName + "soundValue";
    }
    static get shakeValue() {
        return GameMain.appName + "shakeValue";
    }
    static get autoLogin() {
        return GameMain.appName + "autoLogin";
    }
    static get DZPKTakeScore() {
        return GameMain.appName + mbase.data.Player.accountId + "DZPKTakeScore";
    }
}
//# sourceMappingURL=StorageKeys.js.map