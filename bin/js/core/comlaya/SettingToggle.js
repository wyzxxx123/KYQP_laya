var core;
(function (core) {
    var comlaya;
    (function (comlaya) {
        /**
         * @description 实现的一个自定义的toggle
         * @author wangyz
         * @export
         * @class SettingToggle
         * @extends {laya.ui.Box}
         */
        class SettingToggle extends laya.ui.Box {
            constructor() {
                super();
                this._is_on = true;
                this.on(Laya.Event.CLICK, this, this.onClick);
            }
            set isOn(val) {
                this._is_on = val;
                this.getChildByName("off")["visible"] = !this._is_on;
                this.getChildByName("on")["visible"] = this._is_on;
            }
            get isOn() {
                return this._is_on;
            }
            onClick() {
                this.isOn = !this.isOn;
            }
        }
        comlaya.SettingToggle = SettingToggle;
    })(comlaya = core.comlaya || (core.comlaya = {}));
})(core || (core = {}));
//# sourceMappingURL=SettingToggle.js.map