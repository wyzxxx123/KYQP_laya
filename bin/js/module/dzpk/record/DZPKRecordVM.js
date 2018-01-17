var module;
(function (module) {
    var dzpk;
    (function (dzpk) {
        var record;
        (function (record) {
            class DZPKRecordVM extends mbase.base.MViewModel {
                constructor() {
                    super();
                    this.setAtlasName = "res/atlas/dzpk/zh-cn/gameRecord.atlas";
                    this.setClass = record.DZPKRecordView;
                }
                //继承的
                onShow(recv) {
                    super.onShow(this.playerData);
                }
            }
            record.DZPKRecordVM = DZPKRecordVM;
        })(record = dzpk.record || (dzpk.record = {}));
    })(dzpk = module.dzpk || (module.dzpk = {}));
})(module || (module = {}));
//# sourceMappingURL=DZPKRecordVM.js.map