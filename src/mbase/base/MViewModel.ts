import { ViewModel } from '../../core/viewmodel/ViewModel';
import { MCView } from './MCView';
import { Player } from '../data/Player';
import { ModelManager } from '../../core/model/ModelManager';
import { CFun } from '../../core/CFun';
import { RpcDef } from '../../analyzer/analyzer1/RpcDef';
import { SSend } from '../../analyzer/analyzer1/SSend';
import { InitData } from './InitData';
import { VMManager } from '../../core/viewmodel/VMManager';
    export class MViewModel extends ViewModel{
        constructor(){
            super();

            this._cview = new MCView(this);
        }

        public e_id:number = 0;

        public get playerData():Player{
            if(!ModelManager.ins.getInstByClassName("Player")){
                CFun.throw("MViewModel中使用的Player数据还未初始化");
            }
            return ModelManager.ins.getInstByClassName("Player");
        }

        protected sendData(method_id:number,args:any[]=[]){
            let method = RpcDef.getMethodByID(method_id);
            let inst = ModelManager.ins.getInstByClassName(method["className"]);
            if(!inst) CFun.throw("未获得发送实例！");
            let send2 = laya.utils.Pool.getItemByClass("tmpSend",SSend);
            send2.method_id = method_id;
            send2.args = args;
            send2.e_id = inst["e_id"];
            send2.sendClass = inst["wyz_class_name"];
            this.send(send2);
        }

        protected showOther(className:string,exData?:any){
            let initData = laya.utils.Pool.getItemByClass("InitData",InitData);
            initData.className = className;
            initData.exData = exData;
            this.dispach(VMManager.SHOW_VIEW,initData);
        }
    }
