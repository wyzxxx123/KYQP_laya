var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../../../mbase/base/MViewModel", "../../../core/model/ModelManager", "../../../StorageKeys", "../../../core/CFun", "./DZPKTakeView"], function (require, exports, MViewModel_1, ModelManager_1, StorageKeys_1, CFun_1, DZPKTakeView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DZPKTakeVM = /** @class */ (function (_super) {
        __extends(DZPKTakeVM, _super);
        function DZPKTakeVM() {
            var _this = _super.call(this) || this;
            _this._roomInfo = null;
            _this.setAtlasName = "res/atlas/dzpk/buySitDownWindow.atlas,res/atlas/dzpk/zh-cn/buySitDownWindow.atlas";
            _this.setViewPath = "game_dzpk/DZPKTake";
            _this.setClass = DZPKTakeView_1.DZPKTakeView;
            return _this;
        }
        DZPKTakeVM.prototype.updataSetting = function (data) {
            var player = ModelManager_1.ModelManager.ins.getInstByClassName("Player");
            laya.net.LocalStorage.setJSON(StorageKeys_1.StorageKeys.DZPKTakeScore + player.lastRoomId, data);
        };
        DZPKTakeVM.prototype.goToGame = function () {
            if (!this._roomInfo)
                CFun_1.CFun.throw("DZPKTakeVM加入的游戏不存在");
            this.closeNow();
            this.showOther("SCENE_DZPKSceneVM", this._roomInfo);
            this._roomInfo = null;
        };
        //继承的
        DZPKTakeVM.prototype.onShow = function (recv) {
            _super.prototype.onShow.call(this, recv);
            this._roomInfo = recv.roomInfo;
        };
        return DZPKTakeVM;
    }(MViewModel_1.MViewModel));
    exports.DZPKTakeVM = DZPKTakeVM;
});
//# sourceMappingURL=DZPKTakeVM.js.map