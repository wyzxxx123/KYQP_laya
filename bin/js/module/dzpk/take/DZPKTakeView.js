define(["require", "exports", "../../../ui/layaUI.max.all", "../../../core/CFun"], function (require, exports, layaUI_max_all_1, CFun_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class DZPKTakeView extends layaUI_max_all_1.ui.game_dzpk.DZPKTakeUI {
        constructor(vm) {
            super();
            this._isClick = false;
            this._vm = vm;
        }
        onOK() {
            this._isClick = true;
            this.vm.goToGame();
        }
        //继承的
        beClose() {
            super.beClose();
            let object = {};
            object["takeScore"] = this.sid_take.value;
            object["isfirstGame"] = this._isClick;
            object["isautoTakeScore"] = this.chk_chose.selected;
            this.vm.updataSetting(object);
        }
        onChange() {
            let sprMoney = this.sid_take.getChildByName("box_money");
            sprMoney["x"] = this.sid_take.bar.x + 62;
            let txtMoney = sprMoney.getChildByName("txt_money");
            let imgMoney = sprMoney.getChildByName("img_money");
            txtMoney["text"] = CFun_1.CFun.formatCurrency(this.sid_take.value);
            if (txtMoney["width"] > 174)
                imgMoney["width"] = txtMoney["width"] + 20;
        }
        viewInit(recv) {
            // let data = {playerMoney:this._data["gold"],max:0,min:0,take:0};
            this.txt_all.text = CFun_1.CFun.formatCurrency(recv.playerMoney);
            this.txt_min.text = CFun_1.CFun.formatCurrency(recv.min);
            this.txt_max.text = CFun_1.CFun.formatCurrency(recv.max);
            this.sid_take.setSlider(recv.min, recv.max, recv.take);
            this.sid_take.bar.y = -8;
            this.chk_chose.selected = recv.isAuto;
            this.btn_ok.clickHandler = laya.utils.Handler.create(this, this.onOK);
        }
        comInit() {
            this.sid_take.changeHandler = new laya.utils.Handler(this, this.onChange, [], false);
        }
    }
    exports.DZPKTakeView = DZPKTakeView;
});
//# sourceMappingURL=DZPKTakeView.js.map