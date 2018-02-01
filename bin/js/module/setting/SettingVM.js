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
define(["require", "exports", "./SettingView", "../../mbase/base/MViewModel"], function (require, exports, SettingView_1, MViewModel_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @description 设置音乐音效
     * @author wangyz
     * @export
     * @class SettingVM
     * @extends {mbase.base.MViewModel}
     */
    var SettingVM = /** @class */ (function (_super) {
        __extends(SettingVM, _super);
        function SettingVM() {
            var _this = _super.call(this) || this;
            _this.setAtlasName = "res/atlas/settingWindow.atlas";
            _this.setViewPath = "setting/SettingWindow";
            _this.setClass = SettingView_1.SettingView;
            return _this;
        }
        SettingVM.prototype.updataSetting = function (data) {
            laya.net.LocalStorage.setItem(StorageKeys.musicValue + "last", data.slMusic);
            laya.net.LocalStorage.setItem(StorageKeys.soundValue + "last", data.slSound);
        };
        //继承的
        SettingVM.prototype.onShow = function () {
            var music = CFun.getLSItem(StorageKeys.musicValue + "last", "Number");
            var sound = CFun.getLSItem(StorageKeys.soundValue + "last", "Number");
            var obj = { swMusic: true, swSound: true, slMusic: 10, slSound: 10 };
            obj.slMusic = music > 0 ? music : 0;
            obj.slSound = sound > 0 ? sound : 0;
            obj.swMusic = obj.slMusic > 0 ? true : false;
            obj.swSound = obj.slSound > 0 ? true : false;
            _super.prototype.onShow.call(this, obj);
        };
        return SettingVM;
    }(MViewModel_1.MViewModel));
    exports.SettingVM = SettingVM;
});
//# sourceMappingURL=SettingVM.js.map