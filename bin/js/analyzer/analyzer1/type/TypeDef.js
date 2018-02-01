/**
 * 类型定义
 * @author	Fictiony
 * @version	2017/7/10
 */
var TypeDef = /** @class */ (function () {
    function TypeDef(def) {
        /** 字段表：{字段名: 字段类型} */
        this.defs = {};
        /** 字段名列表 */
        this.fields = [];
        this.id = def.id;
        this.name = def.name;
        for (var _i = 0, _a = def.defs; _i < _a.length; _i++) {
            var item = _a[_i];
            this.fields.push(item.name);
            this.defs[item.name] = item.type;
        }
    }
    TypeDef.prototype.toString = function () {
        if (this._info == null) {
            var arr = [];
            for (var _i = 0, _a = this.fields; _i < _a.length; _i++) {
                var i = _a[_i];
                arr.push(i + ":" + this.defs[i]);
            }
            this._info = "<Type " + this.name + " {" + arr.join(",") + "}>";
        }
        return this._info;
    };
    return TypeDef;
}());
//# sourceMappingURL=TypeDef.js.map