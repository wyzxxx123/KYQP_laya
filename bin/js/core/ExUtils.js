define(["require", "exports", "./CFun"], function (require, exports, CFun_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * 和容器的通讯工具
     * @author none
     *
     */
    var ExUtils = /** @class */ (function () {
        function ExUtils() {
        }
        Object.defineProperty(ExUtils, "IMEI", {
            /**
             * 手机设备唯一序列号
             */
            get: function () {
                return this._IMEI;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ExUtils, "version", {
            /**
             * 应用版本号
             */
            get: function () {
                return this._version;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ExUtils, "MACAddress", {
            /**
             * 设备MAC地址
             */
            get: function () {
                return this._MACAddress;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 获取手机卡运营商
         * 参数：回调方法，0：无卡，1：无法判断 ，2：电信，3：联通 ，4 ：移动
         */
        ExUtils.getCardProvidersName = function () {
            return 0;
        };
        /**
         * 获取联通渠道号
         */
        ExUtils.GetUnipayId = function () {
            return 0;
        };
        ExUtils.init = function () {
        };
        ExUtils.fullScreen = function () {
            if (!this._is_full) {
                Laya.stage.fullScreenEnabled = true;
                this._is_full = true;
            }
            else {
                Laya.stage.fullScreenEnabled = false;
                Laya.stage.exitFullscreen();
                this._is_full = false;
            }
        };
        ExUtils.getPackageName = function (data) {
            ExUtils.packageName = data;
        };
        ExUtils.onKeyDown = function (event) {
        };
        ExUtils.onResume = function (data) {
        };
        ExUtils.onPause = function (data) {
        };
        ExUtils.onBack = function (data) {
        };
        ExUtils.getIMEI = function (data) {
            ExUtils._IMEI = data;
            CFun_1.CFun.log("获取到设备唯一序列号：" + data);
        };
        ExUtils.getMAC = function (data) {
            ExUtils._MACAddress = data;
            CFun_1.CFun.log("获取到设备MAC地址：" + data);
        };
        ExUtils.getVersion = function (data) {
            ExUtils._version = data;
            CFun_1.CFun.log("获取到应用版本号：" + data);
        };
        ExUtils.onWebViewJavascriptBridgeReady = function (bridge) {
            bridge.registerHandler("texttext", this.ontext.bind(this));
        };
        ExUtils.ontext = function (data) {
            alert(data);
        };
        ExUtils._IMEI = "";
        ExUtils._version = "0.0.0.0";
        ExUtils._MACAddress = "0:0:0:0";
        /*
         *当前界面上是否显示loading
         * */
        ExUtils.isShowLoading = false;
        /**
         * 获取包名
         */
        ExUtils.packageName = "null";
        ExUtils._is_full = false;
        return ExUtils;
    }());
    exports.ExUtils = ExUtils;
    function setupWebViewJavascriptBridge(callback) {
        if (window["WebViewJavascriptBridge"]) {
            return callback(window["WebViewJavascriptBridge"]);
        }
        if (window["WVJBCallbacks"]) {
            return window["WVJBCallbacks"].push(callback);
        }
        window["WVJBCallbacks"] = [callback];
        var WVJBIframe = document.createElement('iframe');
        WVJBIframe.style.display = 'none';
        WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
        document.documentElement.appendChild(WVJBIframe);
        setTimeout(function () { document.documentElement.removeChild(WVJBIframe); }, 0);
    }
    if (window && window.navigator && navigator.userAgent == "ios_miq") {
        setupWebViewJavascriptBridge(function (bridge) {
            bridge.registerHandler('texttext', function (data, responseCallback) {
                alert("JS Echo called with:" + data);
                responseCallback(data);
            });
        });
    }
});
//# sourceMappingURL=ExUtils.js.map