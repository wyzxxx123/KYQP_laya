define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @description 实现的一个自定义的checkbox
     * @author wangyz
     * @export
     * @class SettingToggle
     * @extends {laya.ui.Box}
     */
    class CheckState extends laya.ui.CheckBox {
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
        constructor(skin, label) {
            super(skin, label);
            this.selected = false;
        }
    }
    exports.CheckState = CheckState;
});
//# sourceMappingURL=CheckState.js.map