var core;
(function (core) {
    var com;
    (function (com) {
        var comlaya;
        (function (comlaya) {
            /**
             * @description 附加组件点击缩放
             * @author wangyz
             * @export
             * @class ScaleComponent
             */
            class ScaleComponent {
                constructor() {
                }
                //设置owner函数，可以直接获取到Button组件的实例
                set owner(v) {
                    this._owner = v;
                    //由于时序问题，我们需要在此处添加逻辑代码，确保_owner不为null
                    if (this._isScale && this._owner) {
                        this._owner.anchorX = 0.5;
                        this._owner.anchorY = 0.5;
                        this._owner.once(laya.events.Event.ADDED, this, this.onChangeHeight);
                        this._owner.on(laya.events.Event.MOUSE_DOWN, this, this.onDown);
                    }
                }
                onChangeHeight() {
                    this._owner.x += this._owner.width * 0.5;
                    this._owner.y += this._owner.height * 0.5;
                }
                get centerScale() {
                    return this._isScale;
                }
                set centerScale(val) {
                    this._isScale = val;
                }
                onDown() {
                    this._owner.scale(0.9, 0.9);
                    this._owner.once(laya.events.Event.MOUSE_UP, this, this.onUP);
                }
                onUP() {
                    this._owner.scale(1, 1);
                }
            }
            comlaya.ScaleComponent = ScaleComponent;
        })(comlaya = com.comlaya || (com.comlaya = {}));
    })(com = core.com || (core.com = {}));
})(core || (core = {}));
//# sourceMappingURL=ScaleComponent.js.map