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
    /**
     * @description 设置面板
     * @author wangyz
     * @export
     * @class SettingView
     * @extends {ui.setting.SettingWindowUI}
     */
    var SettingView = /** @class */ (function (_super) {
        __extends(SettingView, _super);
        function SettingView(vm) {
            var _this = _super.call(this) || this;
            _this._vm = vm;
            return _this;
        }
        SettingView.prototype.onMusicChange = function () {
            if (this.slider_music.value > 0) {
                if (!this.music_switch.selected)
                    this.music_switch.selected = true;
            }
            else {
                this.music_switch.selected = false;
            }
            CFun_1.CFun.musicV = this.slider_music.value * 0.01;
        };
        SettingView.prototype.onSoundChange = function () {
            if (this.slider_sound.value > 0) {
                if (!this.sound_switch.selected)
                    this.sound_switch.selected = true;
            }
            else {
                this.sound_switch.selected = false;
            }
            CFun_1.CFun.musicV = this.slider_music.value * 0.01;
        };
        SettingView.prototype.onMusicClick = function () {
            if (!this.music_switch.selected) {
                this.slider_music.value = 0;
            }
            else {
                this.slider_music.value = 50;
            }
        };
        SettingView.prototype.onSoundClick = function () {
            if (!this.sound_switch.selected) {
                this.slider_sound.value = 0;
            }
            else {
                this.slider_sound.value = 50;
            }
        };
        //继承的
        SettingView.prototype.beClose = function () {
            _super.prototype.beClose.call(this);
            var object = { swMusic: this.music_switch.selected, swSound: this.sound_switch.selected,
                slMusic: this.slider_music.value > 0 ? this.slider_music.value : 0,
                slSound: this.slider_sound.value > 0 ? this.slider_sound.value : 0 };
            this.vm["updataSetting"](object);
        };
        //继承的
        SettingView.prototype.viewInit = function (data) {
            this.sound_switch.selected = data.swSound;
            this.music_switch.selected = data.swMusic;
            this.slider_music.value = data.swMusic ? data.slMusic > 0 ? data.slMusic : 50 : data.slMusic;
            this.slider_sound.value = data.swSound ? data.slSound > 0 ? data.slSound : 50 : data.slSound;
        };
        //继承的
        SettingView.prototype.comInit = function () {
            this.slider_music.changeHandler = new laya.utils.Handler(this, this.onMusicChange);
            this.slider_sound.changeHandler = new laya.utils.Handler(this, this.onSoundChange);
            this.music_switch.on(Laya.Event.CLICK, this, this.onMusicClick);
            this.sound_switch.on(Laya.Event.CLICK, this, this.onSoundClick);
        };
        return SettingView;
    }(layaUI_max_all_1.ui.setting.SettingWindowUI));
    exports.SettingView = SettingView;
});
//# sourceMappingURL=SettingView.js.map