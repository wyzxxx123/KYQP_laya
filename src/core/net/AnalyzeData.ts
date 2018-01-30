import { ClassPro } from './ClassPro';
import { CFun } from '../CFun';
import { EventManager } from '../event/EventManager';
import { ModelManager } from '../model/ModelManager';
import { AnalyzerManager } from './AnalyzerManager';

    /**
     * @description 解析接收和发送数据
     * @author wangyz
     * @export
     * @class AnalyzeData
     */
    export class AnalyzeData{
        constructor(){
        }

        /**
         * 解析发送数据
        */
        analyzeSend(data:any,key:string):any{
            if(key == "") CFun.throw("发送的" + key + "链接不存在无法解析");

            let a_data:any = AnalyzerManager.ins.getSendAnalyzed(data);
            
            return a_data;
        }

        /*
        解析接收数据
        */
        analyzeRecv(data:any,key:string){
            if(key == "") CFun.throw("接收的" + key + "链接不存在无法解析");

            let a_data:ClassPro = AnalyzerManager.ins.getAnalyzed(data);
            if(a_data){
                ModelManager.ins.setPro(a_data.className,a_data.params,function(a_model){
                    EventManager.ins.dispatch(a_data.event_id,a_model);
                },this,a_data.toString());
            }
        }

        private static _instance:AnalyzeData;
        public static get ins(): AnalyzeData {
            if (!this._instance) {
                this._instance = new AnalyzeData();
            }
            return this._instance;
        }
    }
