define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @description 附加组件点击缩放
     * @author wangyz
     * @export
     * @class ScaleComponent
     */
    var ScaleCom = /** @class */ (function () {
        function ScaleCom() {
            this._is_scale = true;
            this._scale_scope = 0.9;
        }
        Object.defineProperty(ScaleCom.prototype, "owner", {
            //设置owner函数，可以直接获取到Button组件的实例
            set: function (v) {
                this._owner = v;
                //由于时序问题，我们需要在此处添加逻辑代码，确保_owner不为null
                if (this._is_scale && this._owner) {
                    this._owner.anchorX = 0.5;
                    this._owner.anchorY = 0.5;
                    // if(this._owner.width > 0){
                    //     this.onChangeHeight();
                    // }
                    // else{
                    this._owner.once(laya.events.Event.ADDED, this, this.onChangeHeight);
                    // }
                    this._owner.on(laya.events.Event.MOUSE_DOWN, this, this.onDown);
                }
            },
            enumerable: true,
            configurable: true
        });
        ScaleCom.prototype.onChangeHeight = function () {
            this._owner.x += this._owner.width * 0.5;
            this._owner.y += this._owner.height * 0.5;
        };
        ScaleCom.prototype.onLoaded = function () {
            this._owner.x += this._owner.width * 0.5;
            this._owner.y += this._owner.height * 0.5;
        };
        Object.defineProperty(ScaleCom.prototype, "is_scale", {
            get: function () {
                return this._is_scale;
            },
            set: function (val) {
                this._is_scale = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScaleCom.prototype, "scale_scope", {
            get: function () {
                return this._scale_scope;
            },
            set: function (val) {
                this._scale_scope = val;
            },
            enumerable: true,
            configurable: true
        });
        ScaleCom.prototype.onDown = function () {
            this._owner.scale(this._scale_scope, this._scale_scope);
            this._owner.once(laya.events.Event.MOUSE_UP, this, this.onUP);
            this._owner.once(laya.events.Event.MOUSE_OUT, this, this.onUP);
        };
        ScaleCom.prototype.onUP = function () {
            this._owner.scale(1, 1);
        };
        return ScaleCom;
    }());
    exports.ScaleCom = ScaleCom;
});
//# sourceMappingURL=ScaleCom.js.map