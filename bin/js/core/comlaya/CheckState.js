var core;
(function (core) {
    var comlaya;
    (function (comlaya) {
        /**
         * @description 实现的一个自定义的checkbox
         * @author wangyz
         * @export
         * @class SettingToggle
         * @extends {laya.ui.Box}
         */
        class CheckState extends laya.ui.CheckBox {
            constructor(skin, label) {
                super(skin, label);
                this.selected = false;
            }
            changeState() {
                super.changeState();
                if (this.selected) {
                    let com = this.getChildByName("on");
                    if (com)
                        com["visible"] = true;
                    com = this.getChildByName("off");
                    if (com)
                        com["visible"] = false;
                }
                else {
                    let com = this.getChildByName("on");
                    if (com)
                        com["visible"] = false;
                    com = this.getChildByName("off");
                    if (com)
                        com["visible"] = true;
                }
            }
        }
        comlaya.CheckState = CheckState;
    })(comlaya = core.comlaya || (core.comlaya = {}));
})(core || (core = {}));
//# sourceMappingURL=CheckState.js.map