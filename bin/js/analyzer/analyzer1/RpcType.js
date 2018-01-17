var analyzer;
(function (analyzer) {
    var analyzer1;
    (function (analyzer1) {
        /**
         * RPC数据类型定义
         * @author	Fictiony
         * @version	2017/7/10
         */
        class RpcType {
            /**
             * 整数
             */
            static intWriter(data, val) {
                data.writeInt32(val);
            }
            static intReader(data) {
                return data.getUint32();
            }
            static int8Writer(data, val) {
                data.writeByte(val);
            }
            static int8Reader(data) {
                return data.readByte();
            }
            static int16Writer(data, val) {
                data.writeInt16(val);
            }
            static int16Reader(data) {
                return data.getInt16();
            }
            static int48Writer(data, val) {
                data.writeUint32(val);
                data.writeInt16(Math.floor(val / 4294967296));
            }
            static int48Reader(data) {
                return data.getUint32() + 4294967296 * data.getInt16();
            }
            /**
             * 无符号整数
             */
            static uintReader(data) {
                return data.getUint32();
            }
            static uintWriter(data, val) {
                data.writeUint32(val);
            }
            static uint8Writer(data, val) {
                data.writeByte(val);
            }
            static uint8Reader(data) {
                return data.getUint8();
            }
            static uint16Writer(data, val) {
                data.writeUint16(val);
            }
            static uint16Reader(data) {
                return data.getUint16();
            }
            /**
             * 浮点数
             */
            static doubleWriter(data, val) {
                data.writeFloat64(val);
            }
            static doubleReader(data) {
                return data.getFloat64();
            }
            static floatWriter(data, val) {
                data.writeFloat32(val);
            }
            static floatReader(data) {
                return data.getFloat32();
            }
            /**
             * 布尔值
             */
            static boolWriter(data, val) {
                data.writeByte(val ? 1 : 0);
            }
            static boolReader(data) {
                return data.getByte() == 0;
            }
            /**
             * 字符串
             */
            static stringWriter(data, val) {
                this._buffer.length = 0;
                this._buffer.writeUTFBytes(val);
                if (this._buffer.length > 0xFFFF) {
                    this._buffer.length = 0xFFFF;
                }
                data.writeUint16(this._buffer.length);
                data.writeArrayBuffer(this._buffer.buffer);
            }
            static stringReader(data) {
                var len = data.getUint16();
                return data.readUTFBytes(len);
            }
            static lstringWriter(data, val) {
                this._buffer.length = 0;
                this._buffer.writeUTFBytes(val);
                data.writeUint16(this._buffer.length);
                data.writeArrayBuffer(this._buffer.buffer);
            }
            static lstringReader(data) {
                var len = data.getUint16();
                return data.readUTFBytes(len);
            }
            /**
             * 字节流
             */
            static arWriter(data, val) {
                data.writeArrayBuffer(val.buffer, val.pos);
            }
            static arReader(data) {
                var ar = new data.constructor;
                // return ar;
                ar.writeArrayBuffer(data.buffer, data.pos);
                ar.pos = 0;
                return ar;
            }
            /**
             * 变长整数（最大限56位，不能为负数）
             */
            static vintWriter(data, val) {
                while (val >= 0x80) {
                    data.writeByte(val | 0x80);
                    val = Math.floor(val / 128);
                }
                data.writeByte(val);
            }
            static vintReader(data) {
                var ch = data.readByte();
                var v = ch & 0x7F;
                for (var i = 128; (ch & 0x80) && (data.bytesAvailable > 0); i *= 128) {
                    ch = data.readByte();
                    v += (ch & 0x7F) * i;
                }
                if (v == 0) {
                    console.log("");
                }
                return v;
            }
            /**
             * 双浮点数
             */
            static float2Writer(data, val) {
                data.writeFloat32(val.x);
                data.writeFloat32(val.y);
            }
            static float2Reader(data) {
                return new laya.maths.Point(data.getFloat32(), data.getFloat32());
            }
            /**
             * 数组
             */
            static arrayWriter(data, val) {
                data.writeInt16(val.$type.id);
                data.writeInt16(val.length);
                var writer = analyzer1.RpcDef.getTypeWriter(val.$type.name);
                if (writer == null) {
                    throw new TypeError("Type writer not found: " + val.$type.name);
                }
                for (var i of val) {
                    writer(data, i);
                }
            }
            static arrayReader(data) {
                var id = data.getInt16();
                var v = analyzer1.RpcDef.newArray(id);
                if (!v) {
                    throw new TypeError("Invalid array type id: " + id);
                }
                var len = data.getInt16();
                var reader = analyzer1.RpcDef.getTypeReader(v.$type.name);
                if (reader == null) {
                    throw new TypeError("Type reader not found: " + v.$type.name);
                }
                for (var i = 0; i < len; i++) {
                    v.push(reader(data));
                }
                return v;
            }
            /**
             * 结构体
             */
            static structWriter(data, val) {
                data.writeInt16(val.$type.id);
                var defs = val.$type.defs;
                for (var i of val.$type.fields) {
                    var writer = analyzer1.RpcDef.getTypeWriter(defs[i]);
                    if (writer == null) {
                        throw new TypeError("Type writer not found: " + val.$type.name + "." + i + ":" + defs[i]);
                    }
                    writer(data, val[i]);
                }
            }
            static structReader(data) {
                var id = data.getInt16();
                var v = analyzer1.RpcDef.newStruct(id);
                if (!v) {
                    throw new TypeError("Invalid struct type id: " + id);
                }
                var defs = v.$type.defs;
                for (var i of v.$type.fields) {
                    var reader = analyzer1.RpcDef.getTypeReader(defs[i]);
                    if (reader == null) {
                        throw new TypeError("Type reader not found: " + v.$type.name + "." + i + ":" + defs[i]);
                    }
                    v[i] = reader(data);
                }
                return v;
            }
            /**
             * 字典（暂未实现）
             */
            static tableWriter(data, val) {
                //todo
            }
            static tableReader(data) {
                return null; //todo
            }
            /**
             * 压缩包（暂未实现）
             */
            static lzoWriter(data, val) {
                //todo
            }
            static lzoReader(data) {
                return null; //todo
            }
            /**
             * 释放缓存（建议定时执行）
             */
            static clearBuffer() {
                this._buffer.clear();
            }
        }
        RpcType._buffer = new laya.utils.Byte(); //字节流缓存
        analyzer1.RpcType = RpcType;
    })(analyzer1 = analyzer.analyzer1 || (analyzer.analyzer1 = {}));
})(analyzer || (analyzer = {}));
//# sourceMappingURL=RpcType.js.map