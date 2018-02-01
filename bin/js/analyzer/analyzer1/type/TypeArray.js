var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 指定项类型的列表
 * @author	Fictiony
 * @version	2017/7/22
 */
var TypeArray = /** @class */ (function (_super) {
    __extends(TypeArray, _super);
    function TypeArray(type, arr) {
        var _this = _super.call(this) || this;
        var t = eval("this"); //因为编译成JS后this会被替换掉造成实例类型错误，因此要重新取this
        t._type = type;
        if (arr && arr.length > 0) {
            t.push.apply(t, arr);
        }
        return t;
    }
    Object.defineProperty(TypeArray.prototype, "$type", {
        /**
         * 获取项类型定义
         */
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 列表连接
     */
    TypeArray.prototype.concat = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var new_arr = new TypeArray(this._type, this);
        for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
            var i = items_1[_a];
            if (i instanceof Array) {
                new_arr.push.apply(new_arr, i);
            }
            else {
                new_arr.push(i);
            }
        }
        return new_arr;
    };
    /**
     * 列表截取
     */
    TypeArray.prototype.slice = function (start, end) {
        if (start === void 0) { start = 0; }
        if (end === void 0) { end = 0xffffff; }
        return new TypeArray(this._type, _super.prototype.slice.call(this, start, end));
    };
    TypeArray.prototype.splice = function (start, deleteCount) {
        var items = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            items[_i - 2] = arguments[_i];
        }
        if (deleteCount === undefined) {
            return new TypeArray(this._type, _super.prototype.splice.call(this, start));
        }
        return new TypeArray(this._type, _super.prototype.splice.apply(this, [start, deleteCount].concat(items)));
    };
    TypeArray.prototype.toString = function () {
        return "<TypeArray type=" + this._type.name + " [" + this.join(",") + "]>";
    };
    return TypeArray;
}(Array));
//# sourceMappingURL=TypeArray.js.map