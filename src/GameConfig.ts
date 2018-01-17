/**
 * 游戏系统设置
 * @author	Fictiony
 * @version	2017/7/11
 */
class GameConfig {
	/**
	* 游戏版本默认1.0.0
	* */
	public static version: string = "1.0.0";
	/** URL附带参数集 */
	public static PARAMS: Object = {};

	/** 模拟代理地址 */
	public static apiUrl: string = "http://192.168.20.8:8080/linecode/api.do";
	/**统计信息地址 */
	public static statisticsUrl0: string = "http://192.168.20.8:89/statisticsHandle";
	public static statisticsUrl1: string = "https://192.168.20.8:189/statisticsHandle";
	/** 资源根路径 */
	public static RES: string = "resource/";

	/** 资源重定向表路径（空表示无），每行定义一个，格式为：原路径+任意空白+新路径 */
	public static REDIRECT: string = null;

	/** 服务器ID */
	public static SVR_ID: number = 1;

	/** 服务端地址 */
	public static SVR_HOST: string = "192.168.20.194";

	/** 服务端端口（可为整数或列表） */
	public static SVR_PORT: string = "30050";

	/** 数据包是否用Ctx算法加密 */
	public static CTX_PACKET: boolean = false;
	/** 登陆类型 */
	public static LoginType: number = 1;
	/** 登陆类型 */
	public static SNRoomType: number = 200000;
}
