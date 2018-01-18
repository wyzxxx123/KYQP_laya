define(["require", "exports", "../mbase/base/ModelHandle", "../mbase/data/Player", "../mbase/data/Account", "../mbase/data/CityScene", "../mbase/data/HoldemAgent", "../mbase/data/HoldemDeck", "./hall/HallVM", "./dzpk/scene/DZPKSceneVM", "./dzpk/DZPKRoomsVM", "./avaterChose/AvaterChoseVM", "./setting/SettingVM", "./dzpk/help/DZPKHelpVM", "./dzpk/record/DZPKRecordVM", "./dzpk/take/DZPKTakeVM", "./dzpk/pipei/PiPeiVM", "./dzpk/menu/MenuVM", "./dzpk/cardtype/CardTypeVM"], function (require, exports, ModelHandle_1, Player_1, Account_1, CityScene_1, HoldemAgent_1, HoldemDeck_1, HallVM_1, DZPKSceneVM_1, DZPKRoomsVM_1, AvaterChoseVM_1, SettingVM_1, DZPKHelpVM_1, DZPKRecordVM_1, DZPKTakeVM_1, PiPeiVM_1, MenuVM_1, CardTypeVM_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class RegistClass {
        constructor() {
            this.registClass("ModelHandle", ModelHandle_1.ModelHandle);
            this.registClass("Player", Player_1.Player);
            this.registClass("Account", Account_1.Accounts);
            this.registClass("CityScene", CityScene_1.CityScene);
            this.registClass("HoldemAgent", HoldemAgent_1.HoldemAgent);
            this.registClass("HoldemDeck", HoldemDeck_1.HoldemDeck);
            //显示对象
            this.registClass("SCENE_HallVM", HallVM_1.HallVM);
            this.registClass("SCENE_DZPKSceneVM", DZPKSceneVM_1.DZPKSceneVM);
            this.registClass("SCENE_scene_620", DZPKRoomsVM_1.DZPKRoomsVM);
            this.registClass("avaterChose", AvaterChoseVM_1.AvaterChoseVM);
            this.registClass("setting", SettingVM_1.SettingVM);
            this.registClass("DZPKHelpVM", DZPKHelpVM_1.DZPKHelpVM);
            this.registClass("DZPKRecordVM", DZPKRecordVM_1.DZPKRecordVM);
            this.registClass("DZPKTakeVM", DZPKTakeVM_1.DZPKTakeVM);
            this.registClass("PiPeiVM", PiPeiVM_1.PiPeiVM);
            this.registClass("MenuVM", MenuVM_1.MenuVM);
            this.registClass("CardTypeVM", CardTypeVM_1.CardTypeVM);
        }
        registClass(cname, cclass) {
            laya.utils.ClassUtils.regClass(cname, cclass);
        }
    }
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