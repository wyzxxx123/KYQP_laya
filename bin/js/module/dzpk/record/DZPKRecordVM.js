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
define(["require", "exports", "./DZPKRecordView", "../../../mbase/base/MViewModel"], function (require, exports, DZPKRecordView_1, MViewModel_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DZPKRecordVM = /** @class */ (function (_super) {
        __extends(DZPKRecordVM, _super);
        function DZPKRecordVM() {
            var _this = _super.call(this) || this;
            _this.setAtlasName = "res/atlas/dzpk/zh-cn/gameRecord.atlas";
            _this.setClass = DZPKRecordView_1.DZPKRecordView;
            _this.setViewPath = "game_dzpk/DZPKRecord";
            return _this;
        }
        //继承的
        DZPKRecordVM.prototype.onShow = function (recv) {
            _super.prototype.onShow.call(this, this.playerData);
        };
        return DZPKRecordVM;
    }(MViewModel_1.MViewModel));
    exports.DZPKRecordVM = DZPKRecordVM;
});
//# sourceMappingURL=DZPKRecordVM.js.map