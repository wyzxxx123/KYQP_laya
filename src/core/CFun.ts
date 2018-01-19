import { md5 } from './md5';
import { StorageKeys } from '../StorageKeys';
import { ExUtils } from './ExUtils';
import { ui } from '../ui/layaUI.max.all';
import { DialogView } from './view/DialogView';
export class CFun {
        public static SCREEN_PRINT:boolean = true;
        public static DEBUG:boolean = true;

        public static throw(des:string){
            laya.utils.Pool.clearBySign("tmpByte");
            laya.utils.Pool.clearBySign("tmpSend");
            laya.utils.Pool.clearBySign("InitData");
            throw new Error(des);
        }

        public static log(log:string){
            if(this.DEBUG){
                console.log(log);
                if(this.SCREEN_PRINT){
                    laya.utils.Log.print(log);
                }
            }
        }

/////////////////////////////////弹框
        public static dialog(content:string="确定要退出游戏？",callback:Function=null,obj:any = this,button:string="确 定|取 消",title:string="提 示"){
            let arrBtn = button.split("|");
            let m_class;
            if(arrBtn.length == 2){
                m_class = ui.dialog.TwoButtonUI;
            }
            else if(arrBtn.length == 1){
                m_class = ui.dialog.OneButtonUI;
            }
            let path = this.parsingPath(m_class);
            Laya.loader.load([{url:path,type:laya.net.Loader.JSON}], laya.utils.Handler.create(this, this.onDialogLoaded,[content,callback,obj,button,title]));
        }

        public static parsingPath(m_class:any):string{
            let c:string = m_class.toString();
            let c_s = "this.loadUI(\"";
            let s_i = c.indexOf(c_s) + c_s.length;
            let e_i = c.indexOf("\");",s_i);
            let t_c = c.substring(s_i,e_i);

            return t_c + ".json";
        }

        private static onDialogLoaded(content:string,callback:Function,obj:any,button:string,title:string){
            let arrBtn = button.split("|");
            let dialog:DialogView;
            if(arrBtn.length == 2){
                dialog= new ui.dialog.TwoButtonUI();
                dialog.getChildByName("cancel")["label"] = arrBtn[1];
                dialog.getChildByName("ok")["label"] = arrBtn[0];
                dialog.getChildByName("title")["text"] = title;
                dialog.getChildByName("content")["text"] = content;
            }
            else if(arrBtn.length == 1){
                dialog= new ui.dialog.OneButtonUI();
                dialog.getChildByName("ok")["label"] = arrBtn[0];
                dialog.getChildByName("title")["text"] = title;
                dialog.getChildByName("content")["text"] = content;
            }
            
            // dialog.isModal = true;
            dialog.closeHandler = laya.utils.Handler.create(obj,callback);

            dialog.popup();
        }
/////////////////////////////////弹框///////////////////////////////


        public static getItem(array: Array<any>, property: string, value: any): any {
            for (var i: number = 0; i < array.length; i++) {
                if (array[i][property] == value) {
                    return array[i];
                }
            }
            return null;
        }

        /**
        * 删除数组中的某项元素
        * */
        public static remove(array: Array<any>, item: any): void {
            var index: number = array.indexOf(item);
            if (index > -1) {
                array.splice(index, 1);
            }
        }

        //0-1
        public static set soundV(val:number){
            laya.media.SoundManager.setSoundVolume(val);
            if(val <= 0){
                laya.media.SoundManager.setSoundVolume(0);
            }
        }

        public static get soundV():number{
            return laya.media.SoundManager.soundVolume;
        }

        //0-1
        public static set musicV(val:number){
            laya.media.SoundManager.setMusicVolume(val);
            if(val <= 0){
                laya.media.SoundManager.setMusicVolume(0);
            }
        }
        public static get musicV():number{
            return laya.media.SoundManager.musicVolume;
        }

        public static playSound(url:string){
            laya.media.SoundManager.playSound(url);
        }

        public static playMusic(url:string){
            laya.media.SoundManager.playMusic(url);
        }

        /** 
        * 将数值保留2位小数后格式化成金额形式 
        * @param num 数值(Number或者String)
        * @param accurate 是否显示后面为.00的小数
        * @type {String} 
        */
        public static formatCurrency(num: any, accurate: boolean = false): string {
            num = parseFloat(num) / 100;
            if (num < 1 && num > -1) {
                return num.toString();
            }
            num = (num.toFixed(2) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
            if (accurate) {
                return num;
            } else {
                var decimal = num.substring(num.length - 2, num.length);
                if (parseInt(decimal) == 0) {
                    decimal = '';
                } else if (parseInt(decimal.substring(1, decimal.length)) == 0) {
                    decimal = '.' + decimal.substring(0, 1);
                } else {
                    decimal = "." + decimal;
                }
                var result = num.substring(0, num.length - 3);
                return result + decimal;
            }
            // var result;
            // if (num < 10000) {
            //     result = this.toFixed(num, 2);
            // }
            // else if (num < 100000000) {
            //     var n = num / 10000;
            //     result = this.isInteger(n) ? n.toString() + "万" : this.toFixed(n, 2) + "万";
            // }
            // else if (num < 1000000000000) {
            //     var n = num / 100000000;
            //     result = this.isInteger(n) ? n.toString() + "亿" : this.toFixed(n, 2) + "亿";
            // }
            // else {
            //     var n = num / 1000000000000;
            //     result = this.isInteger(n) ? n.toString() + "兆" : this.toFixed(n, 2) + "兆";
            // }
            // return result;
        }

        public static getQueryString(argID: string): string {
            var reg: RegExp = new RegExp("(^|&)" + argID + "=([^&]*)(&|$)");
            var r: RegExpMatchArray = window.location.search.substr(1).match(reg);
            if (r != null) {
                return decodeURI(r[2]);
            }
            return null;
        }

        private static md5Object: md5;
        /**
        * md5方式加密字符串
        */
        public static md5(str: string): string {
            this.md5Object = this.md5Object || new md5();
            return this.md5Object.hex_md5(str);
        }

        /**
		 * 格式化字符串函数
		 * 例：format("Hello {0}",world)
		 * @param str {string} 要格式化的字符串
		 * @param args {Array<any>} 参数列表
		 * @returns {string} 格式化之后的字符串
		 */
        public static format(str: string, ...args: Array<any>): string {
            var result: string = str;
            for (var i: number = 0; i < args.length; i++) {
                result = result.replace("{" + i + "}", args[i].toString());
            }
            return result;
        }

        /**
        * 日期格式化
        */
        public static formatDate(date: Date, fmt: string) {
            var o = {
                "M+": date.getMonth() + 1,                 //月份   
                "d+": date.getDate(),                    //日   
                "h+": date.getHours(),                   //小时   
                "m+": date.getMinutes(),                 //分   
                "s+": date.getSeconds(),                 //秒   
                "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
                "S": date.getMilliseconds()             //毫秒   
            };
            if (/(y+)/.test(fmt))
                fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt))
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        }

        /**
        * 获取设备唯一号，暂时只支持安卓平台，别的平台用当前时间的md5代替
        * @returns 设备唯一号
        */
        public static getIMEI(): string {
            if (ExUtils.IMEI) {
                return ExUtils.IMEI;
            }
            var result = laya.net.LocalStorage.getItem(StorageKeys.imei_windows);
            if (!result) {
                result = CFun.md5(CFun.formatDate(new Date(), "qqddMMhhmmS") + Math.random());
                laya.net.LocalStorage.setItem(StorageKeys.imei_windows, result);
            }
            return result;
        }

        public static getLSItem(key: string, type: string): any {
            var localStorageItem: string = laya.net.LocalStorage.getItem(key);
            switch (type) {
                case "Array":
                    if (!localStorageItem) {
                        return [];
                    }
                    else {
                        return JSON.parse(localStorageItem);
                    }
                case "Object":
                    if (!localStorageItem) {
                        return {};
                    }
                    else {
                        return JSON.parse(localStorageItem);
                    }
                case "String":
                    if (!localStorageItem) {
                        return "";
                    }
                    else {
                        return localStorageItem;
                    }
                case "Number":
                    if (!localStorageItem) {
                        return NaN;
                    }
                    else {
                        return parseFloat(localStorageItem);
                    }
                case "Boolean":
                    if (!localStorageItem) {
                        return false;
                    }
                    else {
                        return localStorageItem == "true";
                    }
            }
        }
    }
