define(["require", "exports", "../../analyzer/analyzer1/Analyzer"], function (require, exports, Analyzer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AnalyzerManager = /** @class */ (function () {
        function AnalyzerManager() {
            this._analyzer = new Analyzer_1.Analyzer();
        }
        AnalyzerManager.prototype.getAnalyzed = function (data) {
            return this._analyzer.analyzeRecv(data);
        };
        AnalyzerManager.prototype.getSendAnalyzed = function (data) {
            return this._analyzer.analyzeSend(data);
        };
        Object.defineProperty(AnalyzerManager, "ins", {
            get: function () {
                if (!this._instance) {
                    this._instance = new AnalyzerManager();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        return AnalyzerManager;
    }());
    exports.AnalyzerManager = AnalyzerManager;
});
//# sourceMappingURL=AnalyzerManager.js.map