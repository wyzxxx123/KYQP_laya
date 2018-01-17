var core;
(function (core) {
    var net;
    (function (net) {
        /**
         * @description 解析接收和发送数据
         * @author wangyz
         * @export
         * @class AnalyzeData
         */
        class AnalyzeData {
            constructor() {
            }
            /**
             * 解析发送数据
            */
            analyzeSend(data, key) {
                if (key == "")
                    core.CFun.throw("发送的" + key + "链接不存在无法解析");
                let a_data = core.net.AnalyzerManager.ins.getSendAnalyzed(data);
                return a_data;
            }
            /*
            解析接收数据
            */
            analyzeRecv(data, key) {
                if (key == "")
                    core.CFun.throw("接收的" + key + "链接不存在无法解析");
                let a_data = core.net.AnalyzerManager.ins.getAnalyzed(data);
                if (a_data) {
                    let a_model = core.model.ModelManager.ins.setPro(a_data.className, a_data.params, a_data.toString());
                    core.event.EventManager.ins.dispatch(a_data.event_id, a_model);
                }
            }
            static get ins() {
                if (!this._instance) {
                    this._instance = new AnalyzeData();
                }
                return this._instance;
            }
        }
        net.AnalyzeData = AnalyzeData;
    })(net = core.net || (core.net = {}));
})(core || (core = {}));
//# sourceMappingURL=AnalyzeData.js.map