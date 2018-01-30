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
define(["require", "exports", "../../core/CFun", "../../ui/layaUI.max.all"], function (require, exports, CFun_1, layaUI_max_all_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HallView = /** @class */ (function (_super) {
        __extends(HallView, _super);
        function HallView(vm) {
            var _this = _super.call(this) || this;
            _this._vm = vm;
            return _this;
        }
        HallView.prototype.onChoseGame = function (e) {
            this.vm.gotoScene(e);
        };
        HallView.prototype.onShowWindow = function () {
            this.vm.showAvaterChose();
        };
        HallView.prototype.onShowSetting = function () {
            this.vm.showSetting();
        };
        HallView.prototype.onFullScreen = function () {
            this.vm.setFullScreen();
        };
        //继承的
        HallView.prototype.comInit = function () {
            this.btn_header.on(Laya.Event.CLICK, this, this.onShowWindow);
            this.btn_setting.on(Laya.Event.CLICK, this, this.onShowSetting);
            this.btn_full.on(Laya.Event.CLICK, this, this.onFullScreen);
            this.btn_620.on(Laya.Event.CLICK, this, this.onChoseGame, [this.btn_620.name]);
        };
        //继承的
        HallView.prototype.viewInit = function (recv) {
            this.txt_name.text = recv["name"];
            this.txt_gold.text = CFun_1.CFun.formatCurrency(recv["gold"]);
            this.btn_header.skin = this.getHeadImage((recv["sex"]), (recv["icon"] || 0));
        };
        HallView.prototype.getHeadImage = function (sex, index) {
            var icon = "";
            if (sex == 1) {
                icon = "gamehall/avater/man" + index + ".png";
            }
            else {
                icon = "gamehall/avater/women" + index + ".png";
            }
            return icon;
        };
        return HallView;
    }(layaUI_max_all_1.ui.game_hall.GameHallUI));
    exports.HallView = HallView;
});
//# sourceMappingURL=HallView.js.map