var analyzer;
(function (analyzer) {
    class AnalyzerManager {
        constructor() {
            this._analyzer = new analyzer.analyzer1.Analyzer();
        }
        getAnalyzed(data) {
            return this._analyzer.analyze(data);
        }
        static get ins() {
            if (!this._instance) {
                this._instance = new AnalyzerManager();
            }
            return this._instance;
        }
    }
    analyzer.AnalyzerManager = AnalyzerManager;
})(analyzer || (analyzer = {}));
//# sourceMappingURL=AnalyzerManager.js.map