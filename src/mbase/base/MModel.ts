import { Model } from '../../core/model/Model';
import { SSend } from '../../analyzer/analyzer1/SSend';
    export class MModel extends Model{
        constructor(){
            super();
        }

        protected sendData(method_id:number,args:any[]=[]){
            let send2 = laya.utils.Pool.getItemByClass("tmpSend",SSend);
            send2.method_id = method_id;
            send2.args = args;
            send2.e_id = this["e_id"];
            send2.sendClass = this["wyz_class_name"];
            this.send(send2);
        }

        public e_id:number;
    }
