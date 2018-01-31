define(["require", "exports", "../../mbase/base/MViewModel", "../../StorageKeys", "../../core/CFun", "./SettingView"], function (require, exports, MViewModel_1, StorageKeys_1, CFun_1, SettingView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @description 设置音乐音效
     * @author wangyz
     * @export
     * @class SettingVM
     * @extends {mbase.base.MViewModel}
     */
    class SettingVM extends MViewModel_1.MViewModel {
        updataSetting(data) {
            laya.net.LocalStorage.setItem(StorageKeys_1.StorageKeys.musicValue + "last", data.slMusic);
            laya.net.LocalStorage.setItem(StorageKeys_1.StorageKeys.soundValue + "last", data.slSound);
        }
        //继承的
        onShow() {
            let music = CFun_1.CFun.getLSItem(StorageKeys_1.StorageKeys.musicValue + "last", "Number");
            let sound = CFun_1.CFun.getLSItem(StorageKeys_1.StorageKeys.soundValue + "last", "Number");
            let obj = { swMusic: true, swSound: true, slMusic: 10, slSound: 10 };
            obj.slMusic = music > 0 ? music : 0;
            obj.slSound = sound > 0 ? sound : 0;
            obj.swMusic = obj.slMusic > 0 ? true : false;
            obj.swSound = obj.slSound > 0 ? true : false;
            super.onShow(obj);
        }
        constructor() {
            super();
            this.setAtlasName = "res/atlas/settingWindow.atlas";
            this.setViewPath = "setting/SettingWindow";
            this.setClass = SettingView_1.SettingView;
        }
    }
    exports.SettingVM = SettingVM;
});
//# sourceMappingURL=SettingVM.js.map