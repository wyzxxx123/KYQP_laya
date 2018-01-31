import { ModelHandle } from '../../mbase/base/ModelHandle';
import { Player } from '../../mbase/data/Player';
import { Accounts } from '../../mbase/data/Accounts';
import { CityScene } from '../../mbase/data/CityScene';
import { HoldemAgent } from '../../mbase/data/HoldemAgent';
import { HoldemDeck } from '../../mbase/data/HoldemDeck';

export class RegistClass{
    constructor(){

        // this.registClass("ModelHandle","../../mbase/base/ModelHandle");
        // this.registClass("Player","../../mbase/data/Player");
        // this.registClass("Account","../../mbase/data/Accounts");
        // this.registClass("CityScene","../../mbase/data/CityScene");
        // this.registClass("HoldemAgent","../../mbase/data/HoldemAgent");
        // this.registClass("HoldemDeck","../../mbase/data/HoldemDeck");

        this.registClass("ModelHandle",ModelHandle);
        this.registClass("Player",Player);
        this.registClass("Account",Accounts);
        this.registClass("CityScene",CityScene);
        this.registClass("HoldemAgent",HoldemAgent);
        this.registClass("HoldemDeck",HoldemDeck);
        // import { HallVM } from '../../module/hall/HallVM';
        // import { DZPKSceneVM } from '../../module/dzpk/scene/DZPKSceneVM';
        // import { DZPKRoomsVM } from '../../module/dzpk/DZPKRoomsVM';
        // import { AvaterChoseVM } from '../../module/avaterChose/AvaterChoseVM';
        // import { SettingVM } from '../../module/setting/SettingVM';
        // import { DZPKHelpVM } from '../../module/dzpk/help/DZPKHelpVM';
        // import { DZPKRecordVM } from '../../module/dzpk/record/DZPKRecordVM';
        // import { PiPeiVM } from '../../module/dzpk/pipei/PiPeiVM';
        // import { MenuVM } from '../../module/dzpk/menu/MenuVM';
        // import { CardTypeVM } from '../../module/dzpk/cardtype/CardTypeVM';
        // import { DZPKTakeVM } from '../../module/dzpk/take/DZPKTakeVM';

        //显示对象
        this.registClass("SCENE_HallVM","../../module/hall/HallVM");
        this.registClass("SCENE_DZPKSceneVM","../../module/dzpk/scene/DZPKSceneVM");
        this.registClass("SCENE_scene_620","../../module/dzpk/DZPKRoomsVM");
        this.registClass("avaterChose","../../module/avaterChose/AvaterChoseVM");
        this.registClass("setting","../../module/setting/SettingVM");
        this.registClass("DZPKHelpVM","../../module/dzpk/help/DZPKHelpVM");
        this.registClass("DZPKRecordVM","../../module/dzpk/record/DZPKRecordVM");
        this.registClass("DZPKTakeVM","../../module/dzpk/take/DZPKTakeVM");
        this.registClass("PiPeiVM","../../module/dzpk/pipei/PiPeiVM");
        this.registClass("MenuVM","../../module/dzpk/menu/MenuVM");
        this.registClass("CardTypeVM","../../module/dzpk/cardtype/CardTypeVM");
    }

    private registClass(cname:string,cclass:any){
        laya.utils.ClassUtils.regClass(cname,cclass);
    }
}

Date.prototype["format"] = function(format) {
    var o = {
        "M+" : this.getMonth()+1, //month
        "d+" : this.getDate(), //day
        "h+" : this.getHours(), //hour
        "m+" : this.getMinutes(), //minute
        "s+" : this.getSeconds(), //second
        "q+" : Math.floor((this.getMonth()+3)/3), //quarter
        "S" : this.getMilliseconds() //millisecond
    };

    if (/(y+)/.test(format))
        format=format.replace(RegExp.$1,
                (this.getFullYear()+"").substr(4- RegExp.$1.length));

    for (var k in o)
        if (new RegExp("("+ k +")").test(format))
            format = format.replace(RegExp.$1,
                    RegExp.$1.length==1? o[k] :
                    ("00"+ o[k]).substr((""+ o[k]).length));

    return format;
};
