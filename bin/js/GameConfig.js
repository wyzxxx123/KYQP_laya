define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * 游戏系统设置
     * @author	Fictiony
     * @version	2017/7/11
     */
    class GameConfig {
    }
    /**
    * 游戏版本默认1.0.0
    * */
    GameConfig.version = "1.0.0";
    /** URL附带参数集 */
    GameConfig.PARAMS = {};
    /** 模拟代理地址 */
    GameConfig.apiUrl = "http://192.168.20.8:8080/linecode/api.do";
    /**统计信息地址 */
    GameConfig.statisticsUrl0 = "http://192.168.20.8:89/statisticsHandle";
    GameConfig.statisticsUrl1 = "https://192.168.20.8:189/statisticsHandle";
    /** 资源根路径 */
    GameConfig.RES = "resource/";
    /** 资源重定向表路径（空表示无），每行定义一个，格式为：原路径+任意空白+新路径 */
    GameConfig.REDIRECT = null;
    /** 服务器ID */
    GameConfig.SVR_ID = 1;
    /** 服务端地址 */
    GameConfig.SVR_HOST = "192.168.20.194";
    /** 服务端端口（可为整数或列表） */
    GameConfig.SVR_PORT = "30050";
    /** 数据包是否用Ctx算法加密 */
    GameConfig.CTX_PACKET = false;
    /** 登陆类型 */
    GameConfig.LoginType = 1;
    /** 登陆类型 */
    GameConfig.SNRoomType = 200000;
    exports.GameConfig = GameConfig;
});
//# sourceMappingURL=GameConfig.js.map