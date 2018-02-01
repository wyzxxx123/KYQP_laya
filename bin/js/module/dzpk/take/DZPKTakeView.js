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
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DZPKTakeView = /** @class */ (function (_super) {
        __extends(DZPKTakeView, _super);
        function DZPKTakeView(vm) {
            var _this = _super.call(this) || this;
            _this._isClick = false;
            _this._vm = vm;
            return _this;
        }
        DZPKTakeView.prototype.onOK = function () {
            this._isClick = true;
            this.vm.goToGame();
        };
        //继承的
        DZPKTakeView.prototype.beClose = function () {
            _super.prototype.beClose.call(this);
            var object = {};
            object["takeScore"] = this.sid_take.value;
            object["isfirstGame"] = this._isClick;
            object["isautoTakeScore"] = this.chk_chose.selected;
            this.vm.updataSetting(object);
        };
        DZPKTakeView.prototype.onChange = function () {
            var sprMoney = this.sid_take.getChildByName("box_money");
            sprMoney["x"] = this.sid_take.bar.x + 62;
            var txtMoney = sprMoney.getChildByName("txt_money");
            var imgMoney = sprMoney.getChildByName("img_money");
            txtMoney["text"] = CFun.formatCurrency(this.sid_take.value);
            if (txtMoney["width"] > 174)
                imgMoney["width"] = txtMoney["width"] + 20;
        };
        DZPKTakeView.prototype.viewInit = function (recv) {
            // let data = {playerMoney:this._data["gold"],max:0,min:0,take:0};
            this.txt_all.text = CFun.formatCurrency(recv.playerMoney);
            this.txt_min.text = CFun.formatCurrency(recv.min);
            this.txt_max.text = CFun.formatCurrency(recv.max);
            this.sid_take.setSlider(recv.min, recv.max, recv.take);
            this.sid_take.bar.y = -8;
            this.chk_chose.selected = recv.isAuto;
            this.btn_ok.clickHandler = laya.utils.Handler.create(this, this.onOK);
        };
        DZPKTakeView.prototype.comInit = function () {
            this.sid_take.changeHandler = new laya.utils.Handler(this, this.onChange, [], false);
        };
        return DZPKTakeView;
    }(ui.game_dzpk.DZPKTakeUI));
    exports.DZPKTakeView = DZPKTakeView;
});
//# sourceMappingURL=DZPKTakeView.js.map