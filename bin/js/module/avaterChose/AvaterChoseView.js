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
    /**
     * @description 头像选择界面
     * @author wangyz
     * @export
     * @class AvaterChoseView
     * @extends {ui.avater_chose.AvaterChoseUI}
     */
    var AvaterChoseView = /** @class */ (function (_super) {
        __extends(AvaterChoseView, _super);
        function AvaterChoseView(vm) {
            var _this = _super.call(this) || this;
            _this._vm = vm;
            _this.man_list.vScrollBarSkin = "";
            //滚动在头或底回弹时间
            _this.man_list.scrollBar.elasticBackTime = 500;
            //滚动在头或底最大距离
            _this.man_list.scrollBar.elasticDistance = 200;
            _this.woman_list.vScrollBarSkin = "";
            //滚动在头或底回弹时间
            _this.woman_list.scrollBar.elasticBackTime = 500;
            //滚动在头或底最大距离
            _this.woman_list.scrollBar.elasticDistance = 200;
            return _this;
        }
        AvaterChoseView.prototype.onSaveHead = function () {
            if (this._sex_index == this._chose_sex && this._icon_index == this._chose_index) {
            }
            else {
                this.vm["saveHead"](this._chose_sex, this._chose_index);
            }
        };
        AvaterChoseView.prototype.onManChose = function () {
            if (this._chose_sex == 1) {
                this.man_list.getItem(this._chose_index)["selected_bg"].visible = false;
            }
            else {
                this.woman_list.selectedIndex = -1;
            }
            var item = this.man_list.selectedItem;
            if (!item)
                return;
            item["selected_bg"].visible = true;
            this.img_my_avater.skin = item["img_head"];
            this._chose_index = this.man_list.selectedIndex;
            this._chose_sex = 1;
        };
        AvaterChoseView.prototype.onWomenChose = function () {
            if (this._chose_sex == 1) {
                this.man_list.selectedIndex = -1;
            }
            else {
                this.woman_list.getItem(this._chose_index)["selected_bg"].visible = false;
            }
            var item = this.woman_list.selectedItem;
            if (!item)
                return;
            item["selected_bg"].visible = true;
            this.img_my_avater.skin = item["img_head"];
            this._chose_index = this.woman_list.selectedIndex;
            this._chose_sex = 0;
        };
        //继承的
        AvaterChoseView.prototype.beClose = function () {
            this.man_list.selectedIndex = -1;
            this.woman_list.selectedIndex = -1;
        };
        //继承的
        AvaterChoseView.prototype.comInit = function () {
            this.man_list.selectHandler = laya.utils.Handler.create(this, this.onManChose, [], false);
            this.woman_list.selectHandler = laya.utils.Handler.create(this, this.onWomenChose, [], false);
            this.btn_save.on(Laya.Event.CLICK, this, this.onSaveHead);
        };
        //继承的
        AvaterChoseView.prototype.viewInit = function (recv) {
            var manList = [], womenList = [], icon0 = recv["icon"] || 0;
            this._sex_index = this._chose_sex = recv["sex"];
            this._icon_index = this._chose_index = parseInt(icon0);
            for (var i = 0; i < 8; i++) {
                var icon1 = "gamehall/avater/man" + i + ".png", icon2 = "gamehall/avater/women" + i + ".png";
                manList.push({ "selected_bg": { visible: false },
                    "img_head": icon1
                });
                womenList.push({ "selected_bg": { visible: false },
                    "img_head": icon2
                });
            }
            this.man_list.array = manList;
            this.woman_list.array = womenList;
            if (this._chose_sex == 1) {
                this.man_list.selectedIndex = this._chose_index;
            }
            else {
                this.woman_list.selectedIndex = this._chose_index;
            }
        };
        return AvaterChoseView;
    }(ui.avater_chose.AvaterChoseUI));
    exports.AvaterChoseView = AvaterChoseView;
});
//# sourceMappingURL=AvaterChoseView.js.map