define(["require", "exports", "../CFun"], function (require, exports, CFun_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ModelManager {
        getModel(model_name, callBack) {
            let myself = this._self;
            if (!model_name || model_name == "")
                CFun_1.CFun.throw("ModelManager的getModel参数不可为空！");
            let model = StaticData.dic_model[model_name];
            if (!model) {
                let path = laya.utils.ClassUtils.getRegClass(model_name);
                if (typeof path == "string") {
                    require([path], function (mod) {
                        let name = path.substr(path.lastIndexOf("/") + 1);
                        model = new (mod[name])();
                        if (model) {
                            StaticData.dic_model[model_name] = model;
                            model["wyz_class_name"] = model_name;
                            callBack.call(myself, true);
                        }
                        else {
                            callBack.call(myself, false);
                        }
                    });
                }
                else {
                    model = laya.utils.ClassUtils.getInstance(model_name);
                    if (model) {
                        StaticData.dic_model[model_name] = model;
                        model["wyz_class_name"] = model_name;
                        callBack.call(myself, true);
                    }
                    else {
                        callBack.call(myself, false);
                    }
                }
            }
            else {
                callBack.call(myself, true);
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
        setPro(model_name, pros, callBack, obj, f_des) {
            let myself = this._self;
            this.getModel(model_name, function (isReady) {
                if (isReady) {
                    if (!pros)
                        CFun_1.CFun.throw("ModelManager的setPro参数不可为空！");
                    let model = StaticData.dic_model[model_name];
                    let content = "";
                    let des = myself.printObject(model, pros, myself, f_des + "{");
                    des += "]";
                    // if(model_name == "Player"){
                    //     let t1 = "%传入属性";
                    //     for(let key in pros){
                    //         t1 += "(" + key + ":" + pros[key] + "),"
                    //     }
                    //     console.log(t1,"传入属性%");
                    //     let t = "%玩家属性";
                    //     for(let key in model){
                    //         t += "(" + key + ":" + model[key] + "),"
                    //     }
                    //     console.log(t,"玩家属性%");
                    // }
                    CFun_1.CFun.log(new Date()["format"]("dd-hh:mm:ss,S") + " " + des);
                    callBack.call(obj, model);
                }
                else {
                    CFun_1.CFun.throw(`ModelManager的${model_name}类型不存在！`);
                }
            });
        }
        printObject(model, pros, obj, pre) {
            let des = pre;
            let content = "";
            for (let key in pros) {
                if (key[0] == "_") {
                    continue;
                }
                if (pros[key]["__className"] == "laya.utils.Byte") {
                    content = "{Byte}";
                }
                else {
                    if (obj.isBaseClass(pros[key])) {
                        content = pros[key];
                    }
                    else {
                        let t_m = model[key];
                        if (!t_m)
                            t_m = {};
                        content = obj.printObject(t_m, pros[key], obj, "{");
                    }
                }
                // let descriptor = Object.getOwnPropertyDescriptor(model.__proto__,key);
                // if(descriptor){
                //     if(descriptor.set){
                //         descriptor.set(pros[key]);
                //     }
                //     else{
                //         descriptor.value = pros[key];
                //     }
                // }
                // else{
                //     descriptor = {
                //         value : pros[key],
                //         writable : true,
                //         configurable : true,
                //         enumerable : false
                //     }
                // }
                // Object.defineProperty(model, key,descriptor );
                model[key] = pros[key];
                if (des != pre)
                    des += ",";
                if (key != "e_id") {
                    des += key + ":" + content;
                }
            }
            des += "}";
            return des;
        }
        isBaseClass(obj) {
            if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean') {
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
        getInfoByProValue(p_name, val) {
            for (let key in StaticData.dic_model) {
                if (StaticData.dic_model[key] && StaticData.dic_model[key][p_name] == val) {
                    return key;
                }
            }
            return null;
        }
        getInstByClassName(p_name) {
            let inst = StaticData.dic_model[p_name];
            if (!inst)
                return null;
            return inst;
        }
        static get ins() {
            if (!this._instance) {
                this._instance = new ModelManager();
            }
            return this._instance;
        }
        constructor() {
            this._self = this;
        }
    }
    exports.ModelManager = ModelManager;
});
//# sourceMappingURL=ModelManager.js.map