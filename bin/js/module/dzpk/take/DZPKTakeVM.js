define(["require", "exports", "../../../mbase/base/MViewModel", "../../../core/model/ModelManager", "../../../StorageKeys", "../../../core/CFun", "./DZPKTakeView"], function (require, exports, MViewModel_1, ModelManager_1, StorageKeys_1, CFun_1, DZPKTakeView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class DZPKTakeVM extends MViewModel_1.MViewModel {
        constructor() {
            super();
            this._roomInfo = null;
            this.setAtlasName = "res/atlas/dzpk/buySitDownWindow.atlas,res/atlas/dzpk/zh-cn/buySitDownWindow.atlas";
            this.setClass = DZPKTakeView_1.DZPKTakeView;
        }
        updataSetting(data) {
            let player = ModelManager_1.ModelManager.ins.getInstByClassName("Player");
            laya.net.LocalStorage.setJSON(StorageKeys_1.StorageKeys.DZPKTakeScore + player.lastRoomId, data);
        }
        goToGame() {
            if (!this._roomInfo)
                CFun_1.CFun.throw("DZPKTakeVM加入的游戏不存在");
            this.closeNow();
            this.showOther("SCENE_DZPKSceneVM", this._roomInfo);
            this._roomInfo = null;
        }
        //继承的
        onShow(recv) {
            super.onShow(recv);
            this._roomInfo = recv.roomInfo;
        }
    }
    exports.DZPKTakeVM = DZPKTakeVM;
});
//# sourceMappingURL=DZPKTakeVM.js.map