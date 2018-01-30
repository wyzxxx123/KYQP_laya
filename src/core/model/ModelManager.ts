
declare let require;
import { CFun } from '../CFun';
    export class ModelManager{
        private getModel(model_name:string,callBack:Function):void{
            let myself = this._self;
            if(!model_name || model_name == "") CFun.throw("ModelManager的getModel参数不可为空！");
            let model = this._dic_model[model_name];
            if(!model){
                
                
                let path = laya.utils.ClassUtils.getRegClass(model_name);
                if(typeof path == "string"){
                    require([path],function(mod){
                        let name = path.substr(path.lastIndexOf("/") + 1);
                        model = new (mod[name])();
                        if(model){
                            myself._dic_model[model_name] = model;
                            model["wyz_class_name"] = model_name;
                            callBack.call(myself,true);
                        }
                        else{
                            callBack.call(myself,false);
                        }
                    });
                }
                else{
                    model = laya.utils.ClassUtils.getInstance(model_name);
                    if(model){
                        this._dic_model[model_name] = model;
                        model["wyz_class_name"] = model_name;
                        callBack.call(myself,true);
                    }
                    else{
                        callBack.call(myself,false);
                    }
                }
                
            }
            else{
                callBack.call(myself,true);
            }
        }

        // private async getClassByPath(path:string){
        //     return await new Promise(function(resolve, reject) {
        //             require([path],function(mod){
        //                 let name = path.substr(path.lastIndexOf("/") + 1);
        //                 resolve(mod[name]);
        //             });
        //         });
        // }

        public setPro(model_name:string,pros:Object,callBack:Function,obj:any,f_des?:string):any{
            let myself = this._self;
            this.getModel(model_name,function(isReady:boolean){
                if(isReady){
                    if(!pros) CFun.throw("ModelManager的setPro参数不可为空！");

                    let des = f_des;
                    let model = myself._dic_model[model_name];
                    let content = "";
                    for(let key in pros){
                        if(key[0] == "_") continue;

                        if(pros[key]["__className"] == "laya.utils.Byte"){
                            content = "{Byte}";
                        }
                        else{
                            content = (myself.isBaseClass(pros[key])?pros[key]:myself.printObject(model,pros[key]));
                        }
                        model[key] = pros[key];
                        if(des != (f_des)) des += ","
                        if(key != "e_id") des += key + ":" + content; 
                    }
                    des += "]";
                
                    CFun.log(new Date()["format"]("dd-hh:mm:ss,S") + " "+des);
                    callBack.call(obj,model);
                }
                else{
                    CFun.throw(`ModelManager的${model_name}类型不存在！`);
                }
            });
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

        private _self;
        private _dic_model:{[key:string]:any};
        constructor(){
            this._dic_model = {};
            this._self = this;
        }
    }
