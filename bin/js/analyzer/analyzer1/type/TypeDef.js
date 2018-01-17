var analyzer;
(function (analyzer) {
    var analyzer1;
    (function (analyzer1) {
        /**
         * 类型定义
         * @author	Fictiony
         * @version	2017/7/10
         */
        class TypeDef {
            constructor(def) {
                /** 字段表：{字段名: 字段类型} */
                this.defs = {};
                /** 字段名列表 */
                this.fields = [];
                this.id = def.id;
                this.name = def.name;
                for (var item of def.defs) {
                    this.fields.push(item.name);
                    this.defs[item.name] = item.type;
                }
            }
            toString() {
                if (this._info == null) {
                    var arr = [];
                    for (var i of this.fields) {
                        arr.push(i + ":" + this.defs[i]);
                    }
                    this._info = "<Type " + this.name + " {" + arr.join(",") + "}>";
                }
                return this._info;
            }
        }
        analyzer1.TypeDef = TypeDef;
    })(analyzer1 = analyzer.analyzer1 || (analyzer.analyzer1 = {}));
})(analyzer || (analyzer = {}));
//# sourceMappingURL=TypeDef.js.map