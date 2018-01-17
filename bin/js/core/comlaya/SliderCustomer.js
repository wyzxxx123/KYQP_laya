var core;
(function (core) {
    var comlaya;
    (function (comlaya) {
        /**
         * @description 有前滚动条，按钮非三态
         * @author wangyz
         * @export
         * @class SliderCustomer
         * @extends {laya.ui.HSlider}
         */
        class SliderCustomer extends laya.ui.Slider {
            constructor(skin) {
                super(skin);
                this._beginOff = -999;
                this.on(Laya.Event.CHANGE, this, this.on_slider_change);
            }
            set is_v(val) {
                this.isVertical = val;
            }
            on_slider_change() {
                let front = this.getChildByName("cfront");
                if (this.isVertical) {
                    front["height"] = this.bar.y + 6;
                }
                else {
                    front["width"] = this.bar.x + 5;
                }
            }
            changeValue() {
                super.changeValue();
                this.on_slider_change();
            }
            addChild(node) {
                let s_node = super.addChild(node);
                let front = this.getChildByName("cfront");
                if (front && this._beginOff == -999) {
                    if (this.isVertical) {
                        this._beginOff = front["y"];
                    }
                    else {
                        this._beginOff = front["x"];
                    }
                    this.addChild(this.bar);
                    this.bar.stateNum = 1;
                }
                return s_node;
            }
        }
        comlaya.SliderCustomer = SliderCustomer;
    })(comlaya = core.comlaya || (core.comlaya = {}));
})(core || (core = {}));
//# sourceMappingURL=SliderCustomer.js.map