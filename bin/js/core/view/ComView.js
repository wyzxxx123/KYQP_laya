define(["require", "exports", "../CFun"], function (require, exports, CFun_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ComView extends laya.ui.View {
        constructor() {
            super();
            this._view_type = "other";
            this.on(Laya.Event.CLICK, this, this.onClick);
            this.comInit();
            this.layerInit();
        }
        get viewType() {
            return this._view_type;
        }
        get vm() {
            if (!this._vm)
                CFun_1.CFun.throw("ComView中_vm还未初始化！");
            return this._vm;
        }
        //组件事件初始化，实例化时调用一次
        comInit() {
        }
        //显示对象根据数据初始化，每次显示时调用
        viewInit(data) {
        }
        //关闭前调用
        beClose() {
        }
        onClick(e) {
            //阻止后续节点的监听器
            e.stopPropagation();
        }
        layerInit() {
        }
        createChildren() {
            super.createChildren();
            let path = this.parsingPath();
            this.createView(Laya.loader.getRes(path));
        }
        parsingPath() {
            let c = this.constructor.toString();
            let c_s = this.constructor.name + " extends layaUI_max_all_1.ui.";
            let s_i = c.indexOf(c_s) + c_s.length;
            let e_i = c.indexOf(this.constructor["__proto__"].name) + this.constructor["__proto__"].name.length - 2;
            let t_c = c.substring(s_i, e_i);
            let d_i = t_c.indexOf(".");
            if (d_i != -1) {
                t_c = t_c.split(".").join("/");
            }
            return t_c + ".json";
        }
    }
    ComView.TOP = "top";
    ComView.WINDOW = "window";
    /**
     * 不需要点击空白处关窗的界面
     */
    ComView.WINDOW_NO_CLOSEAUTO = "window_no_closeauto";
    ComView.SCENE = "scene";
    exports.ComView = ComView;
});
//# sourceMappingURL=ComView.js.map