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
define(["require", "exports", "../../ui/layaUI.max.all", "../../mbase/data/Player", "../../core/CFun"], function (require, exports, layaUI_max_all_1, Player_1, CFun_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DZPKRoomsView = /** @class */ (function (_super) {
        __extends(DZPKRoomsView, _super);
        function DZPKRoomsView(vm) {
            var _this = _super.call(this) || this;
            _this._vm = vm;
            return _this;
        }
        DZPKRoomsView.prototype.getHeadImage = function (sex, index) {
            var icon = "";
            if (sex == 1) {
                icon = "gamehall/avater/man" + index + ".png";
            }
            else {
                icon = "gamehall/avater/women" + index + ".png";
            }
            return icon;
        };
        DZPKRoomsView.prototype.onShowHelp = function () {
            this.vm.onShowHelp();
        };
        DZPKRoomsView.prototype.onShowRecord = function () {
            this.vm.onShowRecord();
        };
        //进入房间
        DZPKRoomsView.prototype.onChoseRoom = function (e, index) {
            if (e.type == "mouseup") {
                this.vm.onChoseRoom(index);
            }
        };
        //返回大厅
        DZPKRoomsView.prototype.onBack = function () {
            this.vm.backToHall();
        };
        //继承的
        DZPKRoomsView.prototype.beClose = function () {
            this.list_rooms.selectedIndex = -1;
        };
        //继承的
        DZPKRoomsView.prototype.viewInit = function (recv) {
            this.txt_name.text = recv["name"];
            this.txt_gold.text = CFun_1.CFun.formatCurrency(recv["gold"]);
            this.btn_header.skin = this.getHeadImage((recv["sex"]), (recv["icon"] || 0));
            var arr = recv.roomDataList[Player_1.Player.HOLDEM];
            var i = 0, len = arr.length, list = [];
            for (i = 0; i < len; i++) {
                list.push({ box_scale: { txt_blind: { value: arr[i]["blink"] * 0.01 + "/" + (arr[i]["blink"] * 0.02) },
                        txt_limit_in: "准入：" + arr[i]["chip"] * 0.01,
                        img_bg: { skin: "dzpk/zh-cn/roomHallScene/game_room_" + i + "_selected.png" } }
                });
            }
            this.list_rooms.array = list;
            this.list_rooms.selectedIndex = -1;
        };
        //继承的
        DZPKRoomsView.prototype.comInit = function () {
            this.list_rooms.vScrollBarSkin = "";
            this.list_rooms.selectEnable = true;
            this.list_rooms.mouseHandler = laya.utils.Handler.create(this, this.onChoseRoom, [], false);
            this.btn_back.on(Laya.Event.CLICK, this, this.onBack);
            this.btn_help.on(Laya.Event.CLICK, this, this.onShowHelp);
            this.btn_record.on(Laya.Event.CLICK, this, this.onShowRecord);
        };
        return DZPKRoomsView;
    }(layaUI_max_all_1.ui.game_dzpk.DZPKRoomUI));
    exports.DZPKRoomsView = DZPKRoomsView;
});
//# sourceMappingURL=DZPKRoomsView.js.map