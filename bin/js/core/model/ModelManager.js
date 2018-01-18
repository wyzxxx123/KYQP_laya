define(["require", "exports", "../CFun"], function (require, exports, CFun_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ModelManager {
        getModel(model_name) {
            if (!model_name || model_name == "")
                CFun_1.CFun.throw("ModelManager的getModel参数不可为空！");
            let model = this._dic_model[model_name];
            if (!model) {
                model = laya.utils.ClassUtils.getInstance(model_name);
                if (model) {
                    this._dic_model[model_name] = model;
                    model["wyz_class_name"] = model_name;
                }
                else {
                    return false;
                }
            }
            return true;
        }
        setPro(model_name, pros, f_des) {
            if (this.getModel(model_name)) {
                if (!pros)
                    CFun_1.CFun.throw("ModelManager的setPro参数不可为空！");
                let des = f_des;
                let model = this._dic_model[model_name];
                let content = "";
                for (let key in pros) {
                    if (key[0] == "_")
                        continue;
                    if (pros[key]["__className"] == "laya.utils.Byte") {
                        content = "{Byte}";
                    }
                    else {
                        content = (this.isBaseClass(pros[key]) ? pros[key] : this.printObject(model, pros[key]));
                    }
                    model[key] = pros[key];
                    if (des != (f_des))
                        des += ",";
                    if (key != "e_id")
                        des += key + ":" + content;
                }
                des += "]";
                CFun_1.CFun.log(new Date()["format"]("dd-hh:mm:ss,S") + " " + des);
                return model;
            }
            else {
                CFun_1.CFun.throw(`ModelManager的${model_name}类型不存在！`);
            }
            return null;
        }
        printObject(model, pros) {
            let des = "{";
            let content = "";
            for (let key in pros) {
                if (key[0] == "_") {
                    continue;
                }
                if (pros[key]["__className"] == "laya.utils.Byte") {
                    content = "{Byte}";
                }
                else {
                    content = (this.isBaseClass(pros[key]) ? pros[key] : this.printObject(model, pros[key]));
                }
                model[key] = pros[key];
                if (des != "{")
                    des += ",";
                des += key + ":" + content;
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
            for (let key in this._dic_model) {
                if (this._dic_model[key] && this._dic_model[key][p_name] == val) {
                    return key;
                }
            }
            return null;
        }
        getInstByClassName(p_name) {
            let inst = this._dic_model[p_name];
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
            this._dic_model = {};
        }
    }
    exports.ModelManager = ModelManager;
});
//# sourceMappingURL=ModelManager.js.map