var module;
(function (module) {
    var dzpk;
    (function (dzpk) {
        class DZPKRoomsView extends ui.game_dzpk.DZPKRoomUI {
            constructor(vm) {
                super();
                this._vm = vm;
            }
            getHeadImage(sex, index) {
                let icon = "";
                if (sex == 1) {
                    icon = "gamehall/avater/man" + index + ".png";
                }
                else {
                    icon = "gamehall/avater/women" + index + ".png";
                }
                return icon;
            }
            onShowHelp() {
                this.vm.onShowHelp();
            }
            onShowRecord() {
                this.vm.onShowRecord();
            }
            //进入房间
            onChoseRoom(e, index) {
                if (e.type == "mouseup") {
                    this.vm.onChoseRoom(index);
                }
            }
            //返回大厅
            onBack() {
                this.vm.backToHall();
            }
            //继承的
            beClose() {
                this.list_rooms.selectedIndex = -1;
            }
            //继承的
            viewInit(recv) {
                this.txt_name.text = recv["name"];
                this.txt_gold.text = core.CFun.formatCurrency(recv["gold"]);
                this.btn_header.skin = this.getHeadImage((recv["sex"]), (recv["icon"] || 0));
                let arr = recv.roomDataList[mbase.data.Player.HOLDEM];
                let i = 0, len = arr.length, list = [];
                for (i = 0; i < len; i++) {
                    list.push({ box_scale: { txt_blind: { value: arr[i]["blink"] * 0.01 + "/" + (arr[i]["blink"] * 0.02) },
                            txt_limit_in: "准入：" + arr[i]["chip"] * 0.01,
                            img_bg: { skin: "dzpk/zh-cn/roomHallScene/game_room_" + i + "_selected.png" } }
                    });
                }
                this.list_rooms.array = list;
                this.list_rooms.selectedIndex = -1;
            }
            //继承的
            comInit() {
                this.list_rooms.vScrollBarSkin = "";
                this.list_rooms.selectEnable = true;
                this.list_rooms.mouseHandler = Handler.create(this, this.onChoseRoom, [], false);
                this.btn_back.on(Laya.Event.CLICK, this, this.onBack);
                this.btn_help.on(Laya.Event.CLICK, this, this.onShowHelp);
                this.btn_record.on(Laya.Event.CLICK, this, this.onShowRecord);
            }
        }
        dzpk.DZPKRoomsView = DZPKRoomsView;
    })(dzpk = module.dzpk || (module.dzpk = {}));
})(module || (module = {}));
//# sourceMappingURL=DZPKRoomsView.js.map