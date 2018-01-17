module core.net{
    export class AnalyzerManager{

        public getAnalyzed(data:any):core.net.ClassPro{
            return this._analyzer.analyzeRecv(data);
        }

        public getSendAnalyzed(data:any):any{
            return this._analyzer.analyzeSend(data);
        }

        private _analyzer:analyzer.analyzer1.Analyzer;

        constructor(){
            this._analyzer = new analyzer.analyzer1.Analyzer();
        }

        private static _instance:AnalyzerManager;
        public static get ins(): AnalyzerManager {
            if (!this._instance) {
                this._instance = new AnalyzerManager();
            }
            return this._instance;
        }
    }
}