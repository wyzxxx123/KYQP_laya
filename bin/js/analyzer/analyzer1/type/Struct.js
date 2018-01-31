define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * 结构体数据
     * @author	Fictiony
     * @version	2017/7/11
     */
    class Struct {
        constructor(type) {
            this._type = type;
        }
        /**
         * 创建新结构体对象（扩展结构体类定义）
         */
        static createNew(type) {
            return new Struct(type);
        }
        /**
         * 获取类型定义
         */
        get $type() {
            return this._type;
        }
        /**
         * 判断是否包含指定字段
         */
        hasKey(name) {
            return this._type.defs[name] != null;
        }
    }
    exports.Struct = Struct;
});
//# sourceMappingURL=Struct.js.map