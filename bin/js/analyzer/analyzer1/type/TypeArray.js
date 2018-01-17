var analyzer;
(function (analyzer) {
    var analyzer1;
    (function (analyzer1) {
        /**
         * 指定项类型的列表
         * @author	Fictiony
         * @version	2017/7/22
         */
        class TypeArray extends Array {
            constructor(type, arr) {
                super();
                var t = eval("this"); //因为编译成JS后this会被替换掉造成实例类型错误，因此要重新取this
                t._type = type;
                if (arr && arr.length > 0) {
                    t.push.apply(t, arr);
                }
                return t;
            }
            /**
             * 获取项类型定义
             */
            get $type() {
                return this._type;
            }
            /**
             * 列表连接
             */
            concat(...items) {
                var new_arr = new TypeArray(this._type, this);
                for (var i of items) {
                    if (i instanceof Array) {
                        new_arr.push.apply(new_arr, i);
                    }
                    else {
                        new_arr.push(i);
                    }
                }
                return new_arr;
            }
            /**
             * 列表截取
             */
            slice(start = 0, end = 0xffffff) {
                return new TypeArray(this._type, super.slice(start, end));
            }
            splice(start, deleteCount, ...items) {
                if (deleteCount === undefined) {
                    return new TypeArray(this._type, super.splice(start));
                }
                return new TypeArray(this._type, super.splice.apply(this, [start, deleteCount].concat(items)));
            }
            toString() {
                return "<TypeArray type=" + this._type.name + " [" + this.join(",") + "]>";
            }
        }
        analyzer1.TypeArray = TypeArray;
    })(analyzer1 = analyzer.analyzer1 || (analyzer.analyzer1 = {}));
})(analyzer || (analyzer = {}));
//# sourceMappingURL=TypeArray.js.map