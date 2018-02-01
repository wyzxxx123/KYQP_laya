module mview{
    export class WinView extends ComView{

        constructor(){
            super();
            this._view_type = ComView.WINDOW;

            this.btnCloseInit();
        }
        protected layerInit(){
            this.centerX = 0;
            this.centerY = 0;
        }

        protected btnCloseInit(){
            this["btn_close"].on(Laya.Event.CLICK,this,this.onClose);
            this.on(Laya.Event.DISPLAY,this,this.onWinShow);
            this.on(Laya.Event.REMOVED,this,this.onWinHide);
        }

        private onWinShow(){
            CFun.playSound("sounds/hall/window_open.mp3");
        }
        private onWinHide(){
            CFun.playSound("sounds/hall/window_close.mp3");
        }

        private onClose(){
            this.vm.closeNow();
        }
    }
}
