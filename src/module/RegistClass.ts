import { ModelHandle } from '../mbase/base/ModelHandle';
import { Player } from '../mbase/data/Player';
import { Accounts } from '../mbase/data/Account';
import { CityScene } from '../mbase/data/CityScene';
import { HoldemAgent } from '../mbase/data/HoldemAgent';
import { HoldemDeck } from '../mbase/data/HoldemDeck';
import { HallVM } from './hall/HallVM';
import { DZPKSceneVM } from './dzpk/scene/DZPKSceneVM';
import { DZPKRoomsVM } from './dzpk/DZPKRoomsVM';
import { AvaterChoseVM } from './avaterChose/AvaterChoseVM';
import { SettingVM } from './setting/SettingVM';
import { DZPKHelpVM } from './dzpk/help/DZPKHelpVM';
import { DZPKRecordVM } from './dzpk/record/DZPKRecordVM';
import { DZPKTakeVM } from './dzpk/take/DZPKTakeVM';
import { PiPeiVM } from './dzpk/pipei/PiPeiVM';
import { MenuVM } from './dzpk/menu/MenuVM';
import { CardTypeVM } from './dzpk/cardtype/CardTypeVM';
export class RegistClass{
    constructor(){

        this.registClass("ModelHandle",ModelHandle);
        this.registClass("Player",Player);
        this.registClass("Account",Accounts);
        this.registClass("CityScene",CityScene);
        this.registClass("HoldemAgent",HoldemAgent);
        this.registClass("HoldemDeck",HoldemDeck);
        
        //显示对象
        this.registClass("SCENE_HallVM",HallVM);
        this.registClass("SCENE_DZPKSceneVM",DZPKSceneVM);
        this.registClass("SCENE_scene_620",DZPKRoomsVM);
        this.registClass("avaterChose",AvaterChoseVM);
        this.registClass("setting",SettingVM);
        this.registClass("DZPKHelpVM",DZPKHelpVM);
        this.registClass("DZPKRecordVM",DZPKRecordVM);
        this.registClass("DZPKTakeVM",DZPKTakeVM);
        this.registClass("PiPeiVM",PiPeiVM);
        this.registClass("MenuVM",MenuVM);
        this.registClass("CardTypeVM",CardTypeVM);
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
