define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @description 附加按钮皮肤修改
     * @author wangyz
     * @export
     * @class ScaleComponent
     */
    class ButtonState extends laya.ui.Button {
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
        constructor(skin, label) {
            super(skin, label);
            this.state = -1;
            this.state = 0;
        }
    }
    exports.ButtonState = ButtonState;
});
//# sourceMappingURL=ButtonState.js.map