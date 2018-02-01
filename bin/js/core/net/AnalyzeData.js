/**
 * @description 解析接收和发送数据
 * @author wangyz
 * @export
 * @class AnalyzeData
 */
var AnalyzeData = /** @class */ (function () {
    function AnalyzeData() {
    }
    /**
     * 解析发送数据
    */
    AnalyzeData.prototype.analyzeSend = function (data, key) {
        if (key == "")
            CFun.throw("发送的" + key + "链接不存在无法解析");
        var a_data = AnalyzerManager.ins.getSendAnalyzed(data);
        return a_data;
    };
    /*
    解析接收数据
    */
    AnalyzeData.prototype.analyzeRecv = function (data, key) {
        if (key == "")
            CFun.throw("接收的" + key + "链接不存在无法解析");
        var a_data = AnalyzerManager.ins.getAnalyzed(data);
        if (a_data) {
            ModelManager.ins.setPro(a_data.className, a_data.params, function (a_model) {
                EventManager.ins.dispatch(a_data.event_id, a_model);
            }, this, a_data.toString());
        }
    };
    Object.defineProperty(AnalyzeData, "ins", {
        get: function () {
            if (!this._instance) {
                this._instance = new AnalyzeData();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    return AnalyzeData;
}());
//# sourceMappingURL=AnalyzeData.js.map