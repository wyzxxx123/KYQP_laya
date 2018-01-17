var core;
(function (core) {
    /**
     * 和容器的通讯工具
     * @author none
     *
     */
    class ExUtils {
        /**
         * 手机设备唯一序列号
         */
        static get IMEI() {
            return this._IMEI;
        }
        /**
         * 应用版本号
         */
        static get version() {
            return this._version;
        }
        /**
         * 设备MAC地址
         */
        static get MACAddress() {
            return this._MACAddress;
        }
        /**
         * 获取手机卡运营商
         * 参数：回调方法，0：无卡，1：无法判断 ，2：电信，3：联通 ，4 ：移动
         */
        static getCardProvidersName() {
            return 0;
        }
        /**
         * 获取联通渠道号
         */
        static GetUnipayId() {
            return 0;
        }
        static init() {
        }
        static fullScreen() {
            if (!this._is_full) {
                Laya.stage.fullScreenEnabled = true;
                this._is_full = true;
            }
            else {
                Laya.stage.fullScreenEnabled = false;
                Laya.stage.exitFullscreen();
                this._is_full = false;
            }
        }
        static getPackageName(data) {
            ExUtils.packageName = data;
        }
        static onKeyDown(event) {
        }
        static onResume(data) {
        }
        static onPause(data) {
        }
        static onBack(data) {
        }
        static getIMEI(data) {
            ExUtils._IMEI = data;
            core.CFun.log("获取到设备唯一序列号：" + data);
        }
        static getMAC(data) {
            ExUtils._MACAddress = data;
            core.CFun.log("获取到设备MAC地址：" + data);
        }
        static getVersion(data) {
            ExUtils._version = data;
            core.CFun.log("获取到应用版本号：" + data);
        }
        static onWebViewJavascriptBridgeReady(bridge) {
            bridge.registerHandler("texttext", this.ontext.bind(this));
        }
        static ontext(data) {
            alert(data);
        }
    }
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
    core.ExUtils = ExUtils;
})(core || (core = {}));
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
//# sourceMappingURL=ExUtils.js.map