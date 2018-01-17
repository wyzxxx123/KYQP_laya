var analyzer;
(function (analyzer) {
    var analyzer1;
    (function (analyzer1) {
        class RpcDef {
            constructor() {
                this._dump = Dump;
                RpcDef._version = this._dump.Digi;
                RpcDef._type_writers = {};
                RpcDef._type_readers = {};
                RpcDef._type_defs = {};
                RpcDef._method_id = {};
                RpcDef._class_id = {};
                RpcDef._class_props = {};
                RpcDef._pro_id = {};
                this.initDump();
            }
            static getTypeReader(type) {
                let f = this._type_readers[type];
                if (!f)
                    core.CFun.throw("getTypeReader的" + type + "不存在");
                return f;
            }
            /**
             * 获取类型写入方法
             * @param type	类型ID或类型名
             * @return		类型写入方法，格式为：function( data:ByteArray, val:any ):void
             */
            static getTypeWriter(type) {
                let f = this._type_writers[type];
                if (!f)
                    core.CFun.throw("getTypeWriter的" + type + "不存在");
                return f;
            }
            static getMethodByID(id) {
                let o = this._method_id[id];
                if (!o)
                    core.CFun.throw("getMethodByID的" + id + "不存在");
                return o;
            }
            static getModelClassByID(id) {
                let m = this._class_id[id];
                if (!m)
                    core.CFun.throw("getModelClassByID的" + id + "不存在");
                return m;
            }
            static getProByID(id) {
                let p = this._pro_id[id];
                if (!p) {
                    core.CFun.log("getProByID的" + id + "不存在"); //core.CFun.throw("getProByID的"+id+"不存在");
                }
                return p;
            }
            /**
             * 创建指定类型的结构体
             * @param type	类型ID或类型名
             * @return		成功则返回结构体对象，否则返回null
             */
            static newStruct(type) {
                var def = this._type_defs[type];
                if (def && def.id >= RpcDef.STRUCT_BASE_ID) {
                    return analyzer1.Struct.createNew(def);
                }
                return null;
            }
            /**
             * 创建指定项类型的列表
             * @param type	类型ID或类型名
             * @return		成功则返回列表对象，否则返回null
             */
            static newArray(type) {
                var def = this._type_defs[type];
                if (def) {
                    return new analyzer1.TypeArray(def);
                }
                return null;
            }
            /**
             * 版本编号
             */
            static get version() {
                return this._version;
            }
            initDump() {
                let arr_method = this._dump["MethodList"];
                if (!arr_method)
                    core.CFun.throw("dump中的MethodList不存在");
                let i, tobj, len = arr_method.length;
                for (i = 0; i < len; i++) {
                    tobj = arr_method[i];
                    RpcDef._method_id[tobj["id"]] = tobj;
                }
                let arr_type = this._dump["TypeList"];
                if (!arr_type)
                    core.CFun.throw("dump中的TypeList不存在");
                len = arr_type.length;
                for (i = 0; i < len; i++) {
                    let def = new analyzer1.TypeDef(arr_type[i]);
                    RpcDef._type_defs[def.id] = RpcDef._type_defs[def.name] = def;
                    var type = def.id < RpcDef.STRUCT_BASE_ID ? def.name : "struct";
                    var writer = analyzer.analyzer1.RpcType[type + "Writer"].bind(analyzer.analyzer1.RpcType);
                    var reader = analyzer.analyzer1.RpcType[type + "Reader"].bind(analyzer.analyzer1.RpcType);
                    RpcDef._type_writers[def.id] = writer;
                    RpcDef._type_writers[def.name] = writer;
                    RpcDef._type_readers[def.id] = reader;
                    RpcDef._type_readers[def.name] = reader;
                }
                let arr_enter = this._dump["EntityList"];
                if (!arr_enter)
                    core.CFun.throw("dump中的EntityList不存在");
                len = arr_enter.length;
                for (i = 0; i < len; i++) {
                    tobj = arr_enter[i];
                    RpcDef._class_id[tobj.id] = tobj.className;
                }
                let arr_pros = this._dump["PropList"];
                if (!arr_pros)
                    core.CFun.throw("dump中的PropList不存在");
                len = arr_pros.length;
                for (i = 0; i < len; i++) {
                    tobj = arr_pros[i];
                    if (tobj.flag != "CLIENT" && tobj.flag != "ALLCLIENTS")
                        continue;
                    var def = new analyzer1.PropDef(tobj);
                    RpcDef._pro_id[def.id] = def;
                    if (!RpcDef._class_props[def.className]) {
                        RpcDef._class_props[def.className] = {};
                    }
                    RpcDef._class_props[def.className][def.id] = def;
                    RpcDef._class_props[def.className][def.name] = def;
                }
            }
        }
        RpcDef.STRUCT_BASE_ID = 20; //结构体类型起始ID
        analyzer1.RpcDef = RpcDef;
    })(analyzer1 = analyzer.analyzer1 || (analyzer.analyzer1 = {}));
})(analyzer || (analyzer = {}));
//# sourceMappingURL=RpcDef.js.map