define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RegistClass = /** @class */ (function () {
        function RegistClass() {
            this.registClass("ModelHandle", "js/mbase/base/ModelHandle");
            this.registClass("Player", "js/mbase/data/Player");
            this.registClass("Account", "js/mbase/data/Account");
            this.registClass("CityScene", "js/mbase/data/CityScene");
            this.registClass("HoldemAgent", "js/mbase/data/HoldemAgent");
            this.registClass("HoldemDeck", "js/mbase/data/HoldemDeck");
            //显示对象
            this.registClass("SCENE_HallVM", "js/module/hall/HallVM");
            this.registClass("SCENE_DZPKSceneVM", "js/module/dzpk/scene/DZPKSceneVM");
            this.registClass("SCENE_scene_620", "js/module/dzpk/DZPKRoomsVM");
            this.registClass("avaterChose", "js/module/avaterChose/AvaterChoseVM");
            this.registClass("setting", "js/module/setting/SettingVM");
            this.registClass("DZPKHelpVM", "module/dzpk/help/DZPKHelpVM");
            this.registClass("DZPKRecordVM", "js/module/dzpk/record/DZPKRecordVM");
            this.registClass("DZPKTakeVM", "js/module/dzpk/take/DZPKTakeVM");
            this.registClass("PiPeiVM", "js/module/dzpk/pipei/PiPeiVM");
            this.registClass("MenuVM", "js/module/dzpk/menu/MenuVM");
            this.registClass("CardTypeVM", "js/module/dzpk/cardtype/CardTypeVM");
        }
        RegistClass.prototype.registClass = function (cname, cclass) {
            laya.utils.ClassUtils.regClass(cname, cclass);
        };
        return RegistClass;
    }());
    exports.RegistClass = RegistClass;
    Date.prototype["format"] = function (format) {
        var o = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S": this.getMilliseconds() //millisecond
        };
        if (/(y+)/.test(format))
            format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(format))
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] :
                    ("00" + o[k]).substr(("" + o[k]).length));
        return format;
    };
});
//# sourceMappingURL=RegistClass.js.map