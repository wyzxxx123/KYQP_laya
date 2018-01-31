define(["require", "exports", "../../mbase/base/MViewModel", "./AvaterChoseView"], function (require, exports, MViewModel_1, AvaterChoseView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @description 头像选择界面
     * @author wangyz
     * @export
     * @class AvaterChoseVM
     * @extends {module.base.MViewModel}
     */
    class AvaterChoseVM extends MViewModel_1.MViewModel {
        saveHead(sex, index) {
            this.sendData(16778272, [sex]);
            this.sendData(16778270, ["" + index]);
        }
        constructor() {
            super();
            this.setAtlasName = "res/atlas/userInfoWindow.atlas";
            this.setClass = AvaterChoseView_1.AvaterChoseView;
        }
    }
    exports.AvaterChoseVM = AvaterChoseVM;
});
//# sourceMappingURL=AvaterChoseVM.js.map