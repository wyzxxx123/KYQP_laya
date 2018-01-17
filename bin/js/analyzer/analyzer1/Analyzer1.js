var analyzer;
(function (analyzer) {
    var analyzer1;
    (function (analyzer1) {
        var Analyzer1 = /** @class */ (function () {
            function Analyzer1() {
                this.STRUCT_BASE_ID = 20; //结构体类型起始ID
                this.MAX_LEN = 0xFFFF; //最大数据包体长度
                this.BAD_LEN = 0xFFFF00; //异常数据包体长度
                this.INT_SIZE = 4;
                this._byte = new laya.utils.Byte();
                this._byte.endian = laya.utils.Byte.LITTLE_ENDIAN;
                this._dump = Dump;
                this._method_id = {};
                this._type_writers = {};
                this._type_readers = {};
                this.initDump();
            }
            Analyzer1.prototype.analyze = function (data) {
                this._byte.writeArrayBuffer(data); //把接收到的二进制数据读进byte数组便于解析。
                var len = this._packetLen;
                if (len == 0) {
                    if (this._byte.bytesAvailable >= this.INT_SIZE) {
                        len = this._byte.getUint32();
                        var flag_1 = (len >> 24) & 0xFF;
                        len &= 0xFFFFFF;
                        if (len == 0 || len > this.BAD_LEN || flag_1 != (len % 255)) {
                            core.CFun.throw("Invalid packet size: " + len);
                        }
                        if (len > this.MAX_LEN) {
                        }
                        this._packetLen = len;
                    }
                }
                else {
                    if (this._byte.bytesAvailable >= len) {
                        this._packetLen = 0;
                        var data_id = this._byte.getUint32();
                        var data_obj = this._method_id[data_id];
                        var data_eid = data_obj.isStatic ? 0 : (this._byte.getUint32() + 4294967296 * this._byte.getInt16());
                        var data_params = [];
                        var args = data_obj.args, ilen = args.length, targ = void 0;
                        for (var i = 0; i < ilen; i++) {
                            targ = args[i];
                            var reader = this.getTypeReader(targ.type);
                            data_params.push(reader(this._byte));
                        }
                    }
                }
                while (this._byte.bytesAvailable < len) {
                    if (this._byte.bytesAvailable < this.INT_SIZE)
                        return false;
                    // this._encryptSeed && core.crypt.Ctx.ins.encode(this._byte, this.INT_SIZE, this._byte.pos);
                    len = this._byte.getUint32();
                    var flag = (len >> 24) & 0xFF;
                    len &= 0xFFFFFF;
                    if (len == 0 || len > this.BAD_LEN || flag != (len % 255)) {
                        core.CFun.throw("Invalid packet size: " + len);
                    }
                    if (len > this.MAX_LEN) {
                    }
                    this._packetLen = len;
                }
            };
            Analyzer1.prototype.initDump = function () {
                var i, tobj, len = this._dump["MethodList"].length;
                for (i = 0; i < len; i++) {
                    tobj = this._dump["MethodList"][i];
                    this._method_id[tobj["id"]] = tobj;
                }
                len = this._dump["TypeList"].length;
                for (i = 0; i < len; i++) {
                    tobj = this._dump["TypeList"][i];
                    var type = tobj.id < this.STRUCT_BASE_ID ? tobj.name : "struct";
                    var writer = analyzer.analyzer1.RpcType[type + "Writer"].bind(analyzer.analyzer1.RpcType);
                    var reader = analyzer.analyzer1.RpcType[type + "Reader"].bind(analyzer.analyzer1.RpcType);
                    this._type_writers[tobj.id] = writer;
                    this._type_writers[tobj.name] = writer;
                    this._type_readers[tobj.id] = reader;
                    this._type_readers[tobj.name] = reader;
                }
            };
            Analyzer1.prototype.getTypeReader = function (type) {
                var f = this._type_readers[type];
                if (!!!f)
                    core.CFun.throw("getTypeReader的" + type + "不存在");
                return f;
            };
            return Analyzer1;
        }());
        analyzer1.Analyzer1 = Analyzer1;
    })(analyzer1 = analyzer.analyzer1 || (analyzer.analyzer1 = {}));
})(analyzer || (analyzer = {}));
//# sourceMappingURL=Analyzer1.js.map