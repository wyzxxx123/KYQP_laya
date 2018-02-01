
/**
 * 本地存储键配置
 * @author none
 *
 */
class StorageKeys {
    public constructor() {
    }

    public static get accountSave(): string {
        return StaticData.appName + "accountSave";
    }
    public static get account(): string {
        return StaticData.appName + "account";
    }
    public static get password(): string {
        return StaticData.appName + "password";
    }
    public static get imei_windows(): string {
        return StaticData.appName + "imei_windows";
    }
    public static get isGuest(): string {
        return StaticData.appName + "isGuest";
    }
    public static get isLoginType(): string {
        return StaticData.appName + "isLoginType";
    }
    public static get musicValue(): string {
        return StaticData.appName + "musicValue";
    }
    public static get soundValue(): string {//音效开关状态
        return StaticData.appName + "soundValue";
    }
    public static get shakeValue(): string {//震动开关状态
        return StaticData.appName + "shakeValue";
    }
    public static get autoLogin(): string {//自动登录按钮状态
        return StaticData.appName + "autoLogin";
    }
    public static get DZPKTakeScore(): string {
        return StaticData.appName + StaticData.accountId + "DZPKTakeScore";
    }
}
