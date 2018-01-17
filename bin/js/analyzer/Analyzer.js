var analyzer;
(function (analyzer) {
    var AnalyzerManager = /** @class */ (function () {
        function AnalyzerManager() {
            this._analyzer = new analyzer.analyzer1.Analyzer();
        }
        AnalyzerManager.prototype.getAnalyzed = function (data) {
            this._analyzer.analyze(data);
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
    analyzer.AnalyzerManager = AnalyzerManager;
})(analyzer || (analyzer = {}));
//# sourceMappingURL=Analyzer.js.map