module mbase.base{
    export class MCView extends core.view.CView{
        constructor(mv:core.viewmodel.ViewModel){
            super(mv);
        }

        protected closeNow(){
            if(this.display.viewType == core.view.ComView.WINDOW || this.display.viewType == core.view.ComView.WINDOW_NO_CLOSEAUTO){
                laya.utils.Tween.to(this.display, {scaleX:0.9,scaleY:0.9,alpha:0.5}, 100, null,Handler.create(this,this.tweenClose,[],false));
            }
            else{
                super.closeNow();
            }
        }

        private tweenClose(){
            super.closeNow();
            this.display.scaleX = this.display.scaleY = this.display.alpha = 1;
        }
        
        protected showNow(){
            super.showNow();
            if(this.display.viewType == core.view.ComView.WINDOW || this.display.viewType == core.view.ComView.WINDOW_NO_CLOSEAUTO){
                laya.utils.Tween.from(this.display, {scaleX:0.9,scaleY:0.9,alpha:0.5}, 100, null,Handler.create(this,this.tweenShow,[],false));
            }
            else{
                super.showNow();
            }
        }

        private tweenShow(){
            
        }
    }
}