define(["require", "exports", "../CFun", "../event/EventManager", "../model/ModelManager", "./AnalyzerManager"], function (require, exports, CFun_1, EventManager_1, ModelManager_1, AnalyzerManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
                CFun_1.CFun.throw("发送的" + key + "链接不存在无法解析");
            let a_data = AnalyzerManager_1.AnalyzerManager.ins.getSendAnalyzed(data);
            return a_data;
        }
        /*
        解析接收数据
        */
        analyzeRecv(data, key) {
            if (key == "")
                CFun_1.CFun.throw("接收的" + key + "链接不存在无法解析");
            let a_data = AnalyzerManager_1.AnalyzerManager.ins.getAnalyzed(data);
            if (a_data) {
                ModelManager_1.ModelManager.ins.setPro(a_data.className, a_data.params, function (a_model) {
                    EventManager_1.EventManager.ins.dispatch(a_data.event_id, a_model);
                }, this, a_data.toString());
            }
        }
        static get ins() {
            if (!this._instance) {
                this._instance = new AnalyzeData();
            }
            return this._instance;
        }
    }
    exports.AnalyzeData = AnalyzeData;
});
//# sourceMappingURL=AnalyzeData.js.map