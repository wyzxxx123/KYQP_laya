define(["require", "exports", "../CFun"], function (require, exports, CFun_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ModelManager = /** @class */ (function () {
        function ModelManager() {
            this._dic_model = {};
            this._self = this;
        }
        ModelManager.prototype.getModel = function (model_name, callBack) {
            var myself = this._self;
            if (!model_name || model_name == "")
                CFun_1.CFun.throw("ModelManager的getModel参数不可为空！");
            var model = this._dic_model[model_name];
            if (!model) {
                var path_1 = laya.utils.ClassUtils.getRegClass(model_name);
                if (typeof path_1 == "string") {
                    require([path_1], function (mod) {
                        var name = path_1.substr(path_1.lastIndexOf("/") + 1);
                        model = new (mod[name])();
                        if (model) {
                            myself._dic_model[model_name] = model;
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
                        this._dic_model[model_name] = model;
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
        };
        // private async getClassByPath(path:string){
        //     return await new Promise(function(resolve, reject) {
        //             require([path],function(mod){
        //                 let name = path.substr(path.lastIndexOf("/") + 1);
        //                 resolve(mod[name]);
        //             });
        //         });
        // }
        ModelManager.prototype.setPro = function (model_name, pros, callBack, obj, f_des) {
            var myself = this._self;
            this.getModel(model_name, function (isReady) {
                if (isReady) {
                    if (!pros)
                        CFun_1.CFun.throw("ModelManager的setPro参数不可为空！");
                    var des = f_des;
                    var model = myself._dic_model[model_name];
                    var content = "";
                    for (var key in pros) {
                        if (key[0] == "_")
                            continue;
                        if (pros[key]["__className"] == "laya.utils.Byte") {
                            content = "{Byte}";
                        }
                        else {
                            content = (myself.isBaseClass(pros[key]) ? pros[key] : myself.printObject(model, pros[key]));
                        }
                        model[key] = pros[key];
                        if (des != (f_des))
                            des += ",";
                        if (key != "e_id")
                            des += key + ":" + content;
                    }
                    des += "]";
                    CFun_1.CFun.log(new Date()["format"]("dd-hh:mm:ss,S") + " " + des);
                    callBack.call(obj, model);
                }
                else {
                    CFun_1.CFun.throw("ModelManager\u7684" + model_name + "\u7C7B\u578B\u4E0D\u5B58\u5728\uFF01");
                }
            });
        };
        ModelManager.prototype.printObject = function (model, pros) {
            var des = "{";
            var content = "";
            for (var key in pros) {
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
        };
        ModelManager.prototype.isBaseClass = function (obj) {
            if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean') {
                return true;
            }
            return false;
        };
        /**
         * @description 为了用e_id查找类名用
         * @author wangyz
         * @param {string} pName e_id
         * @param {*} val 值
         * @returns {*}
         * @memberof ModelManager
         */
        ModelManager.prototype.getInfoByProValue = function (p_name, val) {
            for (var key in this._dic_model) {
                if (this._dic_model[key] && this._dic_model[key][p_name] == val) {
                    return key;
                }
            }
            return null;
        };
        ModelManager.prototype.getInstByClassName = function (p_name) {
            var inst = this._dic_model[p_name];
            if (!inst)
                return null;
            return inst;
        };
        Object.defineProperty(ModelManager, "ins", {
            get: function () {
                if (!this._instance) {
                    this._instance = new ModelManager();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        return ModelManager;
    }());
    exports.ModelManager = ModelManager;
});
//# sourceMappingURL=ModelManager.js.map