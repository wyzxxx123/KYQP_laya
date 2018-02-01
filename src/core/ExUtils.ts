	/**
	 * 和容器的通讯工具
	 * @author none
	 *
	 */
class ExUtils {

        private static _IMEI: string = "";
        /**
         * 手机设备唯一序列号
         */
        public static get IMEI(): string {
            return this._IMEI;
        }
        private static _version: string = "0.0.0.0";
        /**
         * 应用版本号
         */
        public static get version(): string {

            return this._version;
        }

        private static _MACAddress: string = "0:0:0:0";
        /**
         * 设备MAC地址
         */
        public static get MACAddress(): string {
            return this._MACAddress;
        }

        /**
         * 获取手机卡运营商
         * 参数：回调方法，0：无卡，1：无法判断 ，2：电信，3：联通 ，4 ：移动
         */
        public static getCardProvidersName(): number {
            return 0;
        }

        /**
         * 获取联通渠道号
         */
        public static GetUnipayId(): number {
            return 0;
        }
        /*
         *当前界面上是否显示loading
         * */
        public static isShowLoading: boolean = false;
        /**
         * 获取包名
         */
        public static packageName: string = "null";

        public static init() {
          
        }

        private static _is_full:boolean = false;
        public static fullScreen(){
            if(!this._is_full){
                Laya.stage.fullScreenEnabled=true;
                this._is_full = true;
            }
            else{
                Laya.stage.fullScreenEnabled=false;
                Laya.stage.exitFullscreen();
                this._is_full = false;
            }
        }

        private static getPackageName(data: string): void {//得到包名
            ExUtils.packageName = data;
        }

        private static onKeyDown(event: KeyboardEvent): void {

        }
        private static onResume(data: string): void {//程序得到焦点

        }
        private static onPause(data: string): void {//程序失去焦点

        }
        private static onBack(data: string): void {//得到处理过后的游戏列表数据

        }
        private static getIMEI(data: string): void {//得到手机唯一序列号
            ExUtils._IMEI = data;
            CFun.log("获取到设备唯一序列号：" + data);
        }
        private static getMAC(data: string): void {//得到手机MAC地址
            ExUtils._MACAddress = data;
            CFun.log("获取到设备MAC地址：" + data);
        }
        private static getVersion(data: string): void {//得到手机唯一序列号
            ExUtils._version = data;
            CFun.log("获取到应用版本号：" + data);
        }
        private static onWebViewJavascriptBridgeReady(bridge): void {
            bridge.registerHandler("texttext", this.ontext.bind(this));
        }
        private static ontext(data: any) {
            alert(data);
        }
    }
function setupWebViewJavascriptBridge(callback) {
    if (window["WebViewJavascriptBridge"]) { return callback(window["WebViewJavascriptBridge"]); }
    if (window["WVJBCallbacks"]) { return window["WVJBCallbacks"].push(callback); }
    window["WVJBCallbacks"] = [callback];
    var WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function () { document.documentElement.removeChild(WVJBIframe) }, 0)
}
if (window && window.navigator && navigator.userAgent == "ios_miq") {
    setupWebViewJavascriptBridge(function (bridge) {
        bridge.registerHandler('texttext', function (data, responseCallback) {
            alert("JS Echo called with:" + data);
            responseCallback(data)
        })
    })
}
