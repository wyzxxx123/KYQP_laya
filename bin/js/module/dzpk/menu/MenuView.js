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
define(["require", "exports", "../../../ui/layaUI.max.all"], function (require, exports, layaUI_max_all_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MenuView = /** @class */ (function (_super) {
        __extends(MenuView, _super);
        function MenuView(vm) {
            var _this = _super.call(this) || this;
            _this._vm = vm;
            return _this;
        }
        MenuView.prototype.onOpenCard = function () {
            this.vm.openCard();
        };
        MenuView.prototype.onOut = function () {
            this.vm.requestOut();
        };
        MenuView.prototype.onRecord = function () {
            this.vm.showRecord();
        };
        MenuView.prototype.onSetting = function () {
            this.vm.showSetting();
        };
        MenuView.prototype.beClose = function () {
            _super.prototype.beClose.call(this);
        };
        MenuView.prototype.comInit = function () {
            this.btn_card.clickHandler = laya.utils.Handler.create(this, this.onOpenCard, [], false);
            this.btn_out.clickHandler = laya.utils.Handler.create(this, this.onOut, [], false);
            this.btn_record.clickHandler = laya.utils.Handler.create(this, this.onRecord, [], false);
            this.btn_setting.clickHandler = laya.utils.Handler.create(this, this.onSetting, [], false);
        };
        MenuView.prototype.layerInit = function () {
            this.centerX = NaN;
            this.centerY = NaN;
            this.pos(0, 89);
        };
        //覆盖对btn_close的处理
        MenuView.prototype.btnCloseInit = function () { };
        return MenuView;
    }(layaUI_max_all_1.ui.game_dzpk.DZPKMenuUI));
    exports.MenuView = MenuView;
});
//# sourceMappingURL=MenuView.js.map