var analyzer;
(function (analyzer) {
    var analyzer1;
    (function (analyzer1) {
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
        analyzer1.Struct = Struct;
    })(analyzer1 = analyzer.analyzer1 || (analyzer.analyzer1 = {}));
})(analyzer || (analyzer = {}));
//# sourceMappingURL=Struct.js.map