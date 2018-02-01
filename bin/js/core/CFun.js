var CFun = /** @class */ (function () {
    function CFun() {
    }
    CFun.throw = function (des) {
        laya.utils.Pool.clearBySign("tmpByte");
        laya.utils.Pool.clearBySign("tmpSend");
        laya.utils.Pool.clearBySign("InitData");
        throw new Error(des);
    };
    CFun.log = function (log) {
        if (this.DEBUG) {
            console.log(log);
            if (this.SCREEN_PRINT) {
                laya.utils.Log.print(log);
            }
        }
    };
    /////////////////////////////////弹框
    CFun.dialog = function (content, callback, obj, button, title) {
        if (content === void 0) { content = "确定要退出游戏？"; }
        if (callback === void 0) { callback = null; }
        if (obj === void 0) { obj = this; }
        if (button === void 0) { button = "确 定|取 消"; }
        if (title === void 0) { title = "提 示"; }
        var arrBtn = button.split("|");
        var m_class;
        var path = "";
        if (arrBtn.length == 2) {
            m_class = ui.dialog.TwoButtonUI;
            path = "dialog/TwoButton.json";
        }
        else if (arrBtn.length == 1) {
            m_class = ui.dialog.OneButtonUI;
            path = "dialog/OneButton.json";
        }
        this.parsingPath(m_class);
        Laya.loader.load([{ url: path, type: laya.net.Loader.JSON }], laya.utils.Handler.create(this, this.onDialogLoaded, [content, callback, obj, button, title]));
    };
    CFun.parsingPath = function (m_class) {
        var ui_txt = Laya.loader.getRes("js/ui/layaUI.max.all.js");
        return "";
    };
    CFun.onDialogLoaded = function (content, callback, obj, button, title) {
        var arrBtn = button.split("|");
        var dialog;
        if (arrBtn.length == 2) {
            dialog = new ui.dialog.TwoButtonUI();
            dialog.getChildByName("cancel")["label"] = arrBtn[1];
            dialog.getChildByName("ok")["label"] = arrBtn[0];
            dialog.getChildByName("title")["text"] = title;
            dialog.getChildByName("content")["text"] = content;
        }
        else if (arrBtn.length == 1) {
            dialog = new ui.dialog.OneButtonUI();
            dialog.getChildByName("ok")["label"] = arrBtn[0];
            dialog.getChildByName("title")["text"] = title;
            dialog.getChildByName("content")["text"] = content;
        }
        // dialog.isModal = true;
        dialog.closeHandler = laya.utils.Handler.create(obj, callback);
        dialog.popup();
    };
    /////////////////////////////////弹框///////////////////////////////
    CFun.getItem = function (array, property, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][property] == value) {
                return array[i];
            }
        }
        return null;
    };
    /**
    * 删除数组中的某项元素
    * */
    CFun.remove = function (array, item) {
        var index = array.indexOf(item);
        if (index > -1) {
            array.splice(index, 1);
        }
    };
    Object.defineProperty(CFun, "soundV", {
        get: function () {
            return laya.media.SoundManager.soundVolume;
        },
        //0-1
        set: function (val) {
            laya.media.SoundManager.setSoundVolume(val);
            if (val <= 0) {
                laya.media.SoundManager.setSoundVolume(0);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CFun, "musicV", {
        get: function () {
            return laya.media.SoundManager.musicVolume;
        },
        //0-1
        set: function (val) {
            laya.media.SoundManager.setMusicVolume(val);
            if (val <= 0) {
                laya.media.SoundManager.setMusicVolume(0);
            }
        },
        enumerable: true,
        configurable: true
    });
    CFun.playSound = function (url) {
        laya.media.SoundManager.playSound(url);
    };
    CFun.playMusic = function (url) {
        laya.media.SoundManager.playMusic(url);
    };
    /**
    * 将数值保留2位小数后格式化成金额形式
    * @param num 数值(Number或者String)
    * @param accurate 是否显示后面为.00的小数
    * @type {String}
    */
    CFun.formatCurrency = function (num, accurate) {
        if (accurate === void 0) { accurate = false; }
        num = parseFloat(num) / 100;
        if (num < 1 && num > -1) {
            return num.toString();
        }
        num = (num.toFixed(2) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
        if (accurate) {
            return num;
        }
        else {
            var decimal = num.substring(num.length - 2, num.length);
            if (parseInt(decimal) == 0) {
                decimal = '';
            }
            else if (parseInt(decimal.substring(1, decimal.length)) == 0) {
                decimal = '.' + decimal.substring(0, 1);
            }
            else {
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
    };
    CFun.getQueryString = function (argID) {
        var reg = new RegExp("(^|&)" + argID + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return decodeURI(r[2]);
        }
        return null;
    };
    /**
    * md5方式加密字符串
    */
    CFun.md5 = function (str) {
        this.md5Object = this.md5Object || new md5();
        return this.md5Object.hex_md5(str);
    };
    /**
     * 格式化字符串函数
     * 例：format("Hello {0}",world)
     * @param str {string} 要格式化的字符串
     * @param args {Array<any>} 参数列表
     * @returns {string} 格式化之后的字符串
     */
    CFun.format = function (str) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var result = str;
        for (var i = 0; i < args.length; i++) {
            result = result.replace("{" + i + "}", args[i].toString());
        }
        return result;
    };
    /**
    * 日期格式化
    */
    CFun.formatDate = function (date, fmt) {
        var o = {
            "M+": date.getMonth() + 1,
            "d+": date.getDate(),
            "h+": date.getHours(),
            "m+": date.getMinutes(),
            "s+": date.getSeconds(),
            "q+": Math.floor((date.getMonth() + 3) / 3),
            "S": date.getMilliseconds() //毫秒   
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };
    /**
    * 获取设备唯一号，暂时只支持安卓平台，别的平台用当前时间的md5代替
    * @returns 设备唯一号
    */
    CFun.getIMEI = function () {
        if (ExUtils.IMEI) {
            return ExUtils.IMEI;
        }
        var result = laya.net.LocalStorage.getItem(StorageKeys.imei_windows);
        if (!result) {
            result = CFun.md5(CFun.formatDate(new Date(), "qqddMMhhmmS") + Math.random());
            laya.net.LocalStorage.setItem(StorageKeys.imei_windows, result);
        }
        return result;
    };
    CFun.getLSItem = function (key, type) {
        var localStorageItem = laya.net.LocalStorage.getItem(key);
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
    };
    CFun.SCREEN_PRINT = true;
    CFun.DEBUG = true;
    return CFun;
}());
//# sourceMappingURL=CFun.js.map