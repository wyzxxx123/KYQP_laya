module core.comlaya{
    /**
     * @description BOX内部的遮罩
     * @author wangyz
     * @export
     * @class BoxMask
     */
    export class BoxMask extends laya.ui.Box{
        private onSetMask(){
            this.getChildByName("img_head")["mask"] = this.getChildByName("mmask");
        }
        private onRemoveMask(){
            this.getChildByName("img_head")["mask"] = null;
        }

        constructor(){
            super();

            this.on(Laya.Event.DISPLAY,this,this.onSetMask);
            this.on(Laya.Event.UNDISPLAY,this,this.onRemoveMask);
        }
    }
}
