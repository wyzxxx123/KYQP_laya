var AnalyzerManager = /** @class */ (function () {
    function AnalyzerManager() {
        this._analyzer = new Analyzer();
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
//# sourceMappingURL=AnalyzerManager.js.map