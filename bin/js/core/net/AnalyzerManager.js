define(["require", "exports", "../../analyzer/analyzer1/Analyzer"], function (require, exports, Analyzer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class AnalyzerManager {
        getAnalyzed(data) {
            return this._analyzer.analyzeRecv(data);
        }
        getSendAnalyzed(data) {
            return this._analyzer.analyzeSend(data);
        }
        constructor() {
            this._analyzer = new Analyzer_1.Analyzer();
        }
        static get ins() {
            if (!this._instance) {
                this._instance = new AnalyzerManager();
            }
            return this._instance;
        }
    }
    exports.AnalyzerManager = AnalyzerManager;
});
//# sourceMappingURL=AnalyzerManager.js.map