import { CFun } from '../CFun';
    export class ModelManager{
        
        private getModel(model_name:string):boolean{
            if(!model_name || model_name == "") CFun.throw("ModelManager的getModel参数不可为空！");
            let model = this._dic_model[model_name];
            if(!model){
                model = laya.utils.ClassUtils.getInstance(model_name);
                if(model){
                    this._dic_model[model_name] = model;
                    model["wyz_class_name"] = model_name;
                }
                else{
                    return false;
                }
            }

            return true;
        }

        public setPro(model_name:string,pros:Object,f_des?:string):any{
            if(this.getModel(model_name)){
                if(!pros) CFun.throw("ModelManager的setPro参数不可为空！");

                let des = f_des;
                let model = this._dic_model[model_name];
                let content = "";
                for(let key in pros){
                    if(key[0] == "_") continue;

                    if(pros[key]["__className"] == "laya.utils.Byte"){
                        content = "{Byte}";
                    }
                    else{
                        content = (this.isBaseClass(pros[key])?pros[key]:this.printObject(model,pros[key]));
                    }
                    model[key] = pros[key];
                    if(des != (f_des)) des += ","
                    if(key != "e_id") des += key + ":" + content; 
                }
                des += "]";
             
                CFun.log(new Date()["format"]("dd-hh:mm:ss,S") + " "+des);
                return model;
            }
            else{
                CFun.throw(`ModelManager的${model_name}类型不存在！`);
            }

            return null;
        }

        private printObject(model:any,pros:Object):string{
            let des = "{";  
            let content = "";
            for(let key in pros){
                if(key[0] == "_"){
                    continue;
                }
                if(pros[key]["__className"] == "laya.utils.Byte"){
                    content = "{Byte}";
                }
                else{
                    content = (this.isBaseClass(pros[key])?pros[key]:this.printObject(model,pros[key]));
                }
                model[key] = pros[key];
                if(des !=  "{") des += ","
                des += key + ":" + content; 
            } 
            des += "}";
            return des;
        }

        private isBaseClass(obj:any):boolean{
            if(typeof obj === 'string' || typeof obj === 'number' ||  typeof obj === 'boolean'){
                return true;
            }
            return false;
        }

        /**
         * @description 为了用e_id查找类名用
         * @author wangyz
         * @param {string} pName e_id
         * @param {*} val 值
         * @returns {*} 
         * @memberof ModelManager
         */
        public getInfoByProValue(p_name:string,val:any):string{
            for(let key in this._dic_model){
                if(this._dic_model[key] && this._dic_model[key][p_name] == val){
                    return key;
                }
            }
            return null;
        }

        public getInstByClassName(p_name:string):any{
            let inst = this._dic_model[p_name];
            if(!inst) return null;

            return inst;
        }
        
        private static _instance: ModelManager;
        public static get ins(): ModelManager {
            if(!this._instance) {
                this._instance = new ModelManager();
            }
            return this._instance;
        }

        private _dic_model:{[key:string]:any};
        constructor(){
            this._dic_model = {};
        }
    }
