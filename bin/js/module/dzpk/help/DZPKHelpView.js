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
    var DZPKHelpView = /** @class */ (function (_super) {
        __extends(DZPKHelpView, _super);
        function DZPKHelpView(vm) {
            var _this = _super.call(this) || this;
            _this._vm = vm;
            return _this;
        }
        DZPKHelpView.prototype.onSelecte = function (index) {
            //切换ViewStack子页面
            this.vs_des.selectedIndex = index;
        };
        DZPKHelpView.prototype.initSelect = function () {
            this.tab_chose.selectedIndex = 0;
        };
        DZPKHelpView.prototype.beClose = function () {
            this.tab_chose.selectedIndex = -1;
        };
        DZPKHelpView.prototype.comInit = function () {
            this.on(Laya.Event.DISPLAY, this, this.initSelect);
            this.tab_chose.selectHandler = laya.utils.Handler.create(this, this.onSelecte, [], false);
            this.tab_chose.selectedIndex = -1;
        };
        return DZPKHelpView;
    }(layaUI_max_all_1.ui.game_dzpk.DZPKHelpUI));
    exports.DZPKHelpView = DZPKHelpView;
});
//# sourceMappingURL=DZPKHelpView.js.map