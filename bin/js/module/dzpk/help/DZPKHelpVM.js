define(["require", "exports", "../../../mbase/base/MViewModel", "./DZPKHelpView"], function (require, exports, MViewModel_1, DZPKHelpView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class DZPKHelpVM extends MViewModel_1.MViewModel {
        constructor() {
            super();
            this.setAtlasName = "res/atlas/dzpk/helpWindow.atlas,res/atlas/dzpk/zh-cn/helpWindow.atlas";
            this.setClass = DZPKHelpView_1.DZPKHelpView;
        }
    }
    exports.DZPKHelpVM = DZPKHelpVM;
});
//# sourceMappingURL=DZPKHelpVM.js.map