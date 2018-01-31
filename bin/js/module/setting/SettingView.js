define(["require", "exports", "../../core/CFun", "../../ui/layaUI.max.all"], function (require, exports, CFun_1, layaUI_max_all_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @description 设置面板
     * @author wangyz
     * @export
     * @class SettingView
     * @extends {ui.setting.SettingWindowUI}
     */
    class SettingView extends layaUI_max_all_1.ui.setting.SettingWindowUI {
        onMusicChange() {
            if (this.slider_music.value > 0) {
                if (!this.music_switch.selected)
                    this.music_switch.selected = true;
            }
            else {
                this.music_switch.selected = false;
            }
            CFun_1.CFun.musicV = this.slider_music.value * 0.01;
        }
        onSoundChange() {
            if (this.slider_sound.value > 0) {
                if (!this.sound_switch.selected)
                    this.sound_switch.selected = true;
            }
            else {
                this.sound_switch.selected = false;
            }
            CFun_1.CFun.musicV = this.slider_music.value * 0.01;
        }
        onMusicClick() {
            if (!this.music_switch.selected) {
                this.slider_music.value = 0;
            }
            else {
                this.slider_music.value = 50;
            }
        }
        onSoundClick() {
            if (!this.sound_switch.selected) {
                this.slider_sound.value = 0;
            }
            else {
                this.slider_sound.value = 50;
            }
        }
        //继承的
        beClose() {
            super.beClose();
            let object = { swMusic: this.music_switch.selected, swSound: this.sound_switch.selected,
                slMusic: this.slider_music.value > 0 ? this.slider_music.value : 0,
                slSound: this.slider_sound.value > 0 ? this.slider_sound.value : 0 };
            this.vm["updataSetting"](object);
        }
        //继承的
        viewInit(data) {
            this.sound_switch.selected = data.swSound;
            this.music_switch.selected = data.swMusic;
            this.slider_music.value = data.swMusic ? data.slMusic > 0 ? data.slMusic : 50 : data.slMusic;
            this.slider_sound.value = data.swSound ? data.slSound > 0 ? data.slSound : 50 : data.slSound;
        }
        //继承的
        comInit() {
            this.slider_music.changeHandler = new laya.utils.Handler(this, this.onMusicChange);
            this.slider_sound.changeHandler = new laya.utils.Handler(this, this.onSoundChange);
            this.music_switch.on(Laya.Event.CLICK, this, this.onMusicClick);
            this.sound_switch.on(Laya.Event.CLICK, this, this.onSoundClick);
        }
        constructor(vm) {
            super();
            this._vm = vm;
        }
    }
    exports.SettingView = SettingView;
});
//# sourceMappingURL=SettingView.js.map