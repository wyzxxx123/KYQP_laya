define(["require", "exports", "./RpcDef"], function (require, exports, RpcDef_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * 属性定义
     * @author	Fictiony
     * @version	2017/7/10
     */
    class PropDef {
        constructor(def) {
            this.id = def.id;
            this.name = def.name;
            this.className = def.className;
            this.type = def.type;
            this._defVal = def.defVal;
        }
        /**
         * 默认值
         */
        get defVal() {
            switch (this.type) {
                case "float2": return new laya.maths.Point;
                case "array": return [];
            }
            return this._defVal;
        }
        /**
         * 属性写入方法
         * @throw TypeError	属性类型未定义则抛出异常
         */
        get writer() {
            if (!this._writer) {
                this._writer = RpcDef_1.RpcDef.getTypeWriter(this.type);
            }
            if (this._writer == null) {
                throw new TypeError("Property writer not found: " + this);
            }
            return this._writer;
        }
        /**
         * 属性读取方法
         * @throw TypeError	属性类型未定义则抛出异常
         */
        get reader() {
            if (!this._reader) {
                this._reader = RpcDef_1.RpcDef.getTypeReader(this.type);
            }
            if (this._reader == null) {
                throw new TypeError("Property reader not found: " + this);
            }
            return this._reader;
        }
        toString() {
            if (this._info == null) {
                this._info = "<Prop " + this.className + "." + this.name + ":" + this.type + ">";
            }
            return this._info;
        }
    }
    exports.PropDef = PropDef;
});
//# sourceMappingURL=PropDef.js.map