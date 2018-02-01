/**
     * 结构体数据
     * @author	Fictiony
     * @version	2017/7/11
     */
var Struct = /** @class */ (function () {
    function Struct(type) {
        this._type = type;
    }
    /**
     * 创建新结构体对象（扩展结构体类定义）
     */
    Struct.createNew = function (type) {
        return new Struct(type);
    };
    Object.defineProperty(Struct.prototype, "$type", {
        /**
         * 获取类型定义
         */
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 判断是否包含指定字段
     */
    Struct.prototype.hasKey = function (name) {
        return this._type.defs[name] != null;
    };
    return Struct;
}());
//# sourceMappingURL=Struct.js.map