import { Analyzer } from '../../analyzer/analyzer1/Analyzer';
import { ClassPro } from './ClassPro';

    export class AnalyzerManager{

        public getAnalyzed(data:any):ClassPro{
            return this._analyzer.analyzeRecv(data);
        }

        public getSendAnalyzed(data:any):any{
            return this._analyzer.analyzeSend(data);
        }

        private _analyzer:Analyzer;

        constructor(){
            this._analyzer = new Analyzer();
        }

        private static _instance:AnalyzerManager;
        public static get ins(): AnalyzerManager {
            if (!this._instance) {
                this._instance = new AnalyzerManager();
            }
            return this._instance;
        }
    }
