define(["require", "exports", "../../../ui/layaUI.max.all", "../../../mbase/data/Player", "../../../core/CFun"], function (require, exports, layaUI_max_all_1, Player_1, CFun_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class DZPKRecordView extends layaUI_max_all_1.ui.game_dzpk.DZPKRecordUI {
        viewInit(data) {
            let arr = data.holdemRecords, tarr = [], i = 0, len = data.holdemRecords.length;
            for (i = 0; i < len; i++) {
                tarr.push({ img_bg: { visible: i % 2 == 0 }, txt_num: i + 1, txt_id: arr[i].gameNo, txt_room_name: data.getRoomDataById(Player_1.Player.HOLDEM, arr[i].roomType).name,
                    txt_score: CFun_1.CFun.formatCurrency(arr[i].win - arr[i].deduct), txt_end_time: arr[i].time });
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
        }
        comInit() {
            this.list_record.vScrollBarSkin = "";
        }
        constructor(vm) {
            super();
            this._vm = vm;
        }
    }
    exports.DZPKRecordView = DZPKRecordView;
});
//# sourceMappingURL=DZPKRecordView.js.map