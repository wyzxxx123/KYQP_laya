var core;
(function (core) {
    var comlaya;
    (function (comlaya) {
        /**
         * @description 附加组件点击缩放
         * @author wangyz
         * @export
         * @class ScaleComponent
         */
        class ScaleCom {
            constructor() {
                this._is_scale = true;
                this._scale_scope = 0.9;
            }
            //设置owner函数，可以直接获取到Button组件的实例
            set owner(v) {
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
            }
            onChangeHeight() {
                this._owner.x += this._owner.width * 0.5;
                this._owner.y += this._owner.height * 0.5;
            }
            onLoaded() {
                this._owner.x += this._owner.width * 0.5;
                this._owner.y += this._owner.height * 0.5;
            }
            get is_scale() {
                return this._is_scale;
            }
            set is_scale(val) {
                this._is_scale = val;
            }
            get scale_scope() {
                return this._scale_scope;
            }
            set scale_scope(val) {
                this._scale_scope = val;
            }
            onDown() {
                this._owner.scale(this._scale_scope, this._scale_scope);
                this._owner.once(laya.events.Event.MOUSE_UP, this, this.onUP);
                this._owner.once(laya.events.Event.MOUSE_OUT, this, this.onUP);
            }
            onUP() {
                this._owner.scale(1, 1);
            }
        }
        comlaya.ScaleCom = ScaleCom;
    })(comlaya = core.comlaya || (core.comlaya = {}));
})(core || (core = {}));
//# sourceMappingURL=ScaleCom.js.map