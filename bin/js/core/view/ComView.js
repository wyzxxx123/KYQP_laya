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
        // createChildren():void {
        //     super.createChildren();
        //     let path = CFun.parsingPath(this.constructor.prototype.constructor.__proto__);
        //     this.createView(Laya.loader.getRes(path));
        // }
        loadUI(path) {
            this.createView(Laya.loader.getRes(path + ".json"));
            super.loadUI(path);
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