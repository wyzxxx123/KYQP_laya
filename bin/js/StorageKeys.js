define(["require", "exports", "./KYQP_laya", "./mbase/data/Player"], function (require, exports, KYQP_laya_1, Player_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * 本地存储键配置
     * @author none
     *
     */
    var StorageKeys = /** @class */ (function () {
        function StorageKeys() {
        }
        Object.defineProperty(StorageKeys, "accountSave", {
            get: function () {
                return KYQP_laya_1.GameMain.appName + "accountSave";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StorageKeys, "account", {
            get: function () {
                return KYQP_laya_1.GameMain.appName + "account";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StorageKeys, "password", {
            get: function () {
                return KYQP_laya_1.GameMain.appName + "password";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StorageKeys, "imei_windows", {
            get: function () {
                return KYQP_laya_1.GameMain.appName + "imei_windows";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StorageKeys, "isGuest", {
            get: function () {
                return KYQP_laya_1.GameMain.appName + "isGuest";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StorageKeys, "isLoginType", {
            get: function () {
                return KYQP_laya_1.GameMain.appName + "isLoginType";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StorageKeys, "musicValue", {
            get: function () {
                return KYQP_laya_1.GameMain.appName + "musicValue";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StorageKeys, "soundValue", {
            get: function () {
                return KYQP_laya_1.GameMain.appName + "soundValue";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StorageKeys, "shakeValue", {
            get: function () {
                return KYQP_laya_1.GameMain.appName + "shakeValue";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StorageKeys, "autoLogin", {
            get: function () {
                return KYQP_laya_1.GameMain.appName + "autoLogin";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StorageKeys, "DZPKTakeScore", {
            get: function () {
                return KYQP_laya_1.GameMain.appName + Player_1.Player.accountId + "DZPKTakeScore";
            },
            enumerable: true,
            configurable: true
        });
        return StorageKeys;
    }());
    exports.StorageKeys = StorageKeys;
});
//# sourceMappingURL=StorageKeys.js.map