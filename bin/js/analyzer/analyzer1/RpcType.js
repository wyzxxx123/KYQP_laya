/**
 * RPC数据类型定义
 * @author	Fictiony
 * @version	2017/7/10
 */
var RpcType = /** @class */ (function () {
    function RpcType() {
    }
    /**
     * 整数
     */
    RpcType.intWriter = function (data, val) {
        data.writeInt32(val);
    };
    RpcType.intReader = function (data) {
        return data.getUint32();
    };
    RpcType.int8Writer = function (data, val) {
        data.writeByte(val);
    };
    RpcType.int8Reader = function (data) {
        return data.readByte();
    };
    RpcType.int16Writer = function (data, val) {
        data.writeInt16(val);
    };
    RpcType.int16Reader = function (data) {
        return data.getInt16();
    };
    RpcType.int48Writer = function (data, val) {
        data.writeUint32(val);
        data.writeInt16(Math.floor(val / 4294967296));
    };
    RpcType.int48Reader = function (data) {
        return data.getUint32() + 4294967296 * data.getInt16();
    };
    /**
     * 无符号整数
     */
    RpcType.uintReader = function (data) {
        return data.getUint32();
    };
    RpcType.uintWriter = function (data, val) {
        data.writeUint32(val);
    };
    RpcType.uint8Writer = function (data, val) {
        data.writeByte(val);
    };
    RpcType.uint8Reader = function (data) {
        return data.getUint8();
    };
    RpcType.uint16Writer = function (data, val) {
        data.writeUint16(val);
    };
    RpcType.uint16Reader = function (data) {
        return data.getUint16();
    };
    /**
     * 浮点数
     */
    RpcType.doubleWriter = function (data, val) {
        data.writeFloat64(val);
    };
    RpcType.doubleReader = function (data) {
        return data.getFloat64();
    };
    RpcType.floatWriter = function (data, val) {
        data.writeFloat32(val);
    };
    RpcType.floatReader = function (data) {
        return data.getFloat32();
    };
    /**
     * 布尔值
     */
    RpcType.boolWriter = function (data, val) {
        data.writeByte(val ? 1 : 0);
    };
    RpcType.boolReader = function (data) {
        return data.getByte() == 0;
    };
    /**
     * 字符串
     */
    RpcType.stringWriter = function (data, val) {
        this._buffer.length = 0;
        this._buffer.writeUTFBytes(val);
        if (this._buffer.length > 0xFFFF) {
            this._buffer.length = 0xFFFF;
        }
        data.writeUint16(this._buffer.length);
        data.writeArrayBuffer(this._buffer.buffer);
    };
    RpcType.stringReader = function (data) {
        var len = data.getUint16();
        return data.readUTFBytes(len);
    };
    RpcType.lstringWriter = function (data, val) {
        this._buffer.length = 0;
        this._buffer.writeUTFBytes(val);
        data.writeUint16(this._buffer.length);
        data.writeArrayBuffer(this._buffer.buffer);
    };
    RpcType.lstringReader = function (data) {
        var len = data.getUint16();
        return data.readUTFBytes(len);
    };
    /**
     * 字节流
     */
    RpcType.arWriter = function (data, val) {
        data.writeArrayBuffer(val.buffer, val.pos);
    };
    RpcType.arReader = function (data) {
        var ar = new data.constructor;
        // return ar;
        ar.writeArrayBuffer(data.buffer, data.pos);
        ar.pos = 0;
        return ar;
    };
    /**
     * 变长整数（最大限56位，不能为负数）
     */
    RpcType.vintWriter = function (data, val) {
        while (val >= 0x80) {
            data.writeByte(val | 0x80);
            val = Math.floor(val / 128);
        }
        data.writeByte(val);
    };
    RpcType.vintReader = function (data) {
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
    };
    /**
     * 双浮点数
     */
    RpcType.float2Writer = function (data, val) {
        data.writeFloat32(val.x);
        data.writeFloat32(val.y);
    };
    RpcType.float2Reader = function (data) {
        return new laya.maths.Point(data.getFloat32(), data.getFloat32());
    };
    /**
     * 数组
     */
    RpcType.arrayWriter = function (data, val) {
        data.writeInt16(val.$type.id);
        data.writeInt16(val.length);
        var writer = RpcDef.getTypeWriter(val.$type.name);
        if (writer == null) {
            throw new TypeError("Type writer not found: " + val.$type.name);
        }
        for (var _i = 0, val_1 = val; _i < val_1.length; _i++) {
            var i = val_1[_i];
            writer(data, i);
        }
    };
    RpcType.arrayReader = function (data) {
        var id = data.getInt16();
        var v = RpcDef.newArray(id);
        if (!v) {
            throw new TypeError("Invalid array type id: " + id);
        }
        var len = data.getInt16();
        var reader = RpcDef.getTypeReader(v.$type.name);
        if (reader == null) {
            throw new TypeError("Type reader not found: " + v.$type.name);
        }
        for (var i = 0; i < len; i++) {
            v.push(reader(data));
        }
        return v;
    };
    /**
     * 结构体
     */
    RpcType.structWriter = function (data, val) {
        data.writeInt16(val.$type.id);
        var defs = val.$type.defs;
        for (var _i = 0, _a = val.$type.fields; _i < _a.length; _i++) {
            var i = _a[_i];
            var writer = RpcDef.getTypeWriter(defs[i]);
            if (writer == null) {
                throw new TypeError("Type writer not found: " + val.$type.name + "." + i + ":" + defs[i]);
            }
            writer(data, val[i]);
        }
    };
    RpcType.structReader = function (data) {
        var id = data.getInt16();
        var v = RpcDef.newStruct(id);
        if (!v) {
            throw new TypeError("Invalid struct type id: " + id);
        }
        var defs = v.$type.defs;
        for (var _i = 0, _a = v.$type.fields; _i < _a.length; _i++) {
            var i = _a[_i];
            var reader = RpcDef.getTypeReader(defs[i]);
            if (reader == null) {
                throw new TypeError("Type reader not found: " + v.$type.name + "." + i + ":" + defs[i]);
            }
            v[i] = reader(data);
        }
        return v;
    };
    /**
     * 字典（暂未实现）
     */
    RpcType.tableWriter = function (data, val) {
        //todo
    };
    RpcType.tableReader = function (data) {
        return null; //todo
    };
    /**
     * 压缩包（暂未实现）
     */
    RpcType.lzoWriter = function (data, val) {
        //todo
    };
    RpcType.lzoReader = function (data) {
        return null; //todo
    };
    /**
     * 释放缓存（建议定时执行）
     */
    RpcType.clearBuffer = function () {
        this._buffer.clear();
    };
    RpcType._buffer = new laya.utils.Byte(); //字节流缓存
    return RpcType;
}());
//# sourceMappingURL=RpcType.js.map