var core;
(function (core) {
    var net;
    (function (net) {
        class AnalyzerManager {
            constructor() {
                this._analyzer = new analyzer.analyzer1.Analyzer();
            }
            getAnalyzed(data) {
                return this._analyzer.analyzeRecv(data);
            }
            getSendAnalyzed(data) {
                return this._analyzer.analyzeSend(data);
            }
            static get ins() {
                if (!this._instance) {
                    this._instance = new AnalyzerManager();
                }
                return this._instance;
            }
        }
        net.AnalyzerManager = AnalyzerManager;
    })(net = core.net || (core.net = {}));
})(core || (core = {}));
//# sourceMappingURL=AnalyzerManager.js.map