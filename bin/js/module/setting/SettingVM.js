var module;
(function (module) {
    var setting;
    (function (setting) {
        /**
         * @description 设置音乐音效
         * @author wangyz
         * @export
         * @class SettingVM
         * @extends {mbase.base.MViewModel}
         */
        class SettingVM extends mbase.base.MViewModel {
            constructor() {
                super();
                this.setAtlasName = "res/atlas/settingWindow.atlas";
                this.setClass = setting.SettingView;
            }
            updataSetting(data) {
                laya.net.LocalStorage.setItem(StorageKeys.musicValue + "last", data.slMusic);
                laya.net.LocalStorage.setItem(StorageKeys.soundValue + "last", data.slSound);
            }
            //继承的
            onShow() {
                let music = core.CFun.getLSItem(StorageKeys.musicValue + "last", "Number");
                let sound = core.CFun.getLSItem(StorageKeys.soundValue + "last", "Number");
                let obj = { swMusic: true, swSound: true, slMusic: 10, slSound: 10 };
                obj.slMusic = music > 0 ? music : 0;
                obj.slSound = sound > 0 ? sound : 0;
                obj.swMusic = obj.slMusic > 0 ? true : false;
                obj.swSound = obj.slSound > 0 ? true : false;
                super.onShow(obj);
            }
        }
        setting.SettingVM = SettingVM;
    })(setting = module.setting || (module.setting = {}));
})(module || (module = {}));
//# sourceMappingURL=SettingVM.js.map