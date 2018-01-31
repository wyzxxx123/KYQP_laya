define(["require", "exports", "../../../mbase/base/MViewModel", "./DZPKRecordView"], function (require, exports, MViewModel_1, DZPKRecordView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class DZPKRecordVM extends MViewModel_1.MViewModel {
        //继承的
        onShow(recv) {
            super.onShow(this.playerData);
        }
        constructor() {
            super();
            this.setAtlasName = "res/atlas/dzpk/zh-cn/gameRecord.atlas";
            this.setClass = DZPKRecordView_1.DZPKRecordView;
            this.setViewPath = "game_dzpk/DZPKRecord";
        }
    }
    exports.DZPKRecordVM = DZPKRecordVM;
});
//# sourceMappingURL=DZPKRecordVM.js.map