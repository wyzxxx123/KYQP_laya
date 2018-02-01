import { SettingView } from './SettingView';
import { MViewModel } from '../../mbase/base/MViewModel';
    /**
     * @description 设置音乐音效
     * @author wangyz
     * @export
     * @class SettingVM
     * @extends {mbase.base.MViewModel}
     */
    export class SettingVM extends MViewModel{
        
        public updataSetting(data:any){
            laya.net.LocalStorage.setItem(StorageKeys.musicValue + "last",data.slMusic);
            laya.net.LocalStorage.setItem(StorageKeys.soundValue + "last",data.slSound);
        }

        //继承的
        public onShow(){
            let music = CFun.getLSItem(StorageKeys.musicValue + "last", "Number");
            let sound = CFun.getLSItem(StorageKeys.soundValue + "last", "Number");

            let obj = {swMusic:true,swSound:true,slMusic:10,slSound:10};
            obj.slMusic = music > 0?music:0;
            obj.slSound= sound > 0?sound:0
            obj.swMusic = obj.slMusic > 0? true:false;
            obj.swSound= obj.slSound > 0? true:false;

            super.onShow(obj);
        }

        constructor(){
            super();

            this.setAtlasName = "res/atlas/settingWindow.atlas";
            this.setClass = SettingView;
        }
    }
