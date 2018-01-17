var core;
(function (core) {
    var comlaya;
    (function (comlaya) {
        /**
         * @description 附加按钮皮肤修改
         * @author wangyz
         * @export
         * @class ScaleComponent
         */
        class ButtonState extends laya.ui.Button {
            constructor(skin, label) {
                super(skin, label);
                this.state = -1;
                this.state = 0;
            }
            changeState() {
                super.changeState();
                let com = null;
                if (this.state == 0) {
                    com = this.getChildByName("up");
                    if (com)
                        com["visible"] = true;
                    com = this.getChildByName("down");
                    if (com)
                        com["visible"] = false;
                    com = this.getChildByName("over");
                    if (com)
                        com["visible"] = false;
                }
                else if (this.state == 1) {
                    com = this.getChildByName("up");
                    if (com)
                        com["visible"] = false;
                    com = this.getChildByName("down");
                    if (com)
                        com["visible"] = false;
                    com = this.getChildByName("over");
                    if (com)
                        com["visible"] = true;
                }
                else if (this.state == 2) {
                    com = this.getChildByName("up");
                    if (com)
                        com["visible"] = false;
                    com = this.getChildByName("down");
                    if (com)
                        com["visible"] = true;
                    com = this.getChildByName("over");
                    if (com)
                        com["visible"] = false;
                }
            }
        }
        comlaya.ButtonState = ButtonState;
    })(comlaya = core.comlaya || (core.comlaya = {}));
})(core || (core = {}));
//# sourceMappingURL=ButtonState.js.map