var module;
(function (module) {
    var dzpk;
    (function (dzpk) {
        var take;
        (function (take) {
            class DZPKTakeVM extends mbase.base.MViewModel {
                constructor() {
                    super();
                    this._roomInfo = null;
                    this.setAtlasName = "res/atlas/dzpk/buySitDownWindow.atlas,res/atlas/dzpk/zh-cn/buySitDownWindow.atlas";
                    this.setClass = take.DZPKTakeView;
                }
                updataSetting(data) {
                    let player = core.model.ModelManager.ins.getInstByClassName("Player");
                    laya.net.LocalStorage.setJSON(StorageKeys.DZPKTakeScore + player.lastRoomId, data);
                }
                goToGame() {
                    if (!this._roomInfo)
                        core.CFun.throw("DZPKTakeVM加入的游戏不存在");
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
            take.DZPKTakeVM = DZPKTakeVM;
        })(take = dzpk.take || (dzpk.take = {}));
    })(dzpk = module.dzpk || (module.dzpk = {}));
})(module || (module = {}));
//# sourceMappingURL=DZPKTakeVM.js.map