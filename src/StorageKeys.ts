import { GameMain } from './KYQP_laya';
import { Player } from './mbase/data/Player';
/**
 * 本地存储键配置
 * @author none
 *
 */
export class StorageKeys {
    public constructor() {
    }

    public static get accountSave(): string {
        return GameMain.appName + "accountSave";
    }
    public static get account(): string {
        return GameMain.appName + "account";
    }
    public static get password(): string {
        return GameMain.appName + "password";
    }
    public static get imei_windows(): string {
        return GameMain.appName + "imei_windows";
    }
    public static get isGuest(): string {
        return GameMain.appName + "isGuest";
    }
    public static get isLoginType(): string {
        return GameMain.appName + "isLoginType";
    }
    public static get musicValue(): string {
        return GameMain.appName + "musicValue";
    }
    public static get soundValue(): string {//音效开关状态
        return GameMain.appName + "soundValue";
    }
    public static get shakeValue(): string {//震动开关状态
        return GameMain.appName + "shakeValue";
    }
    public static get autoLogin(): string {//自动登录按钮状态
        return GameMain.appName + "autoLogin";
    }
    public static get DZPKTakeScore(): string {
        return GameMain.appName + Player.accountId + "DZPKTakeScore";
    }
}
