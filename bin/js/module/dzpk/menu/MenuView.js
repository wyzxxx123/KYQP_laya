define(["require", "exports", "../../../ui/layaUI.max.all"], function (require, exports, layaUI_max_all_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class MenuView extends layaUI_max_all_1.ui.game_dzpk.DZPKMenuUI {
        onOpenCard() {
            this.vm.openCard();
        }
        onOut() {
            this.vm.requestOut();
        }
        onRecord() {
            this.vm.showRecord();
        }
        onSetting() {
            this.vm.showSetting();
        }
        beClose() {
            super.beClose();
        }
        comInit() {
            this.btn_card.clickHandler = laya.utils.Handler.create(this, this.onOpenCard, [], false);
            this.btn_out.clickHandler = laya.utils.Handler.create(this, this.onOut, [], false);
            this.btn_record.clickHandler = laya.utils.Handler.create(this, this.onRecord, [], false);
            this.btn_setting.clickHandler = laya.utils.Handler.create(this, this.onSetting, [], false);
        }
        layerInit() {
            this.centerX = NaN;
            this.centerY = NaN;
            this.pos(0, 89);
        }
        //覆盖对btn_close的处理
        btnCloseInit() { }
        constructor(vm) {
            super();
            this._vm = vm;
        }
    }
    exports.MenuView = MenuView;
});
//# sourceMappingURL=MenuView.js.map