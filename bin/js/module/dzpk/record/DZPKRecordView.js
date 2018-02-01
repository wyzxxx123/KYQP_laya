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
define(["require", "exports", "../../../mbase/data/Player"], function (require, exports, Player_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DZPKRecordView = /** @class */ (function (_super) {
        __extends(DZPKRecordView, _super);
        function DZPKRecordView(vm) {
            var _this = _super.call(this) || this;
            _this._vm = vm;
            return _this;
        }
        DZPKRecordView.prototype.viewInit = function (data) {
            var arr = data.holdemRecords, tarr = [], i = 0, len = data.holdemRecords.length;
            for (i = 0; i < len; i++) {
                tarr.push({ img_bg: { visible: i % 2 == 0 }, txt_num: i + 1, txt_id: arr[i].gameNo, txt_room_name: data.getRoomDataById(Player_1.Player.HOLDEM, arr[i].roomType).name,
                    txt_score: CFun.formatCurrency(arr[i].win - arr[i].deduct), txt_end_time: arr[i].time });
            }
            if (arr.length <= 0) {
                this.txt_no_record.visible = true;
                this.box_label.visible = false;
            }
            else {
                this.txt_no_record.visible = false;
                this.box_label.visible = true;
            }
            this.list_record.array = tarr;
        };
        DZPKRecordView.prototype.comInit = function () {
            this.list_record.vScrollBarSkin = "";
        };
        return DZPKRecordView;
    }(ui.game_dzpk.DZPKRecordUI));
    exports.DZPKRecordView = DZPKRecordView;
});
//# sourceMappingURL=DZPKRecordView.js.map