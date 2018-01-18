import { CView } from '../../core/view/CView';
import { ViewModel } from '../../core/viewmodel/ViewModel';
import { ComView } from '../../core/view/ComView';
import Handler = laya.utils.Handler;
    export class MCView extends CView{
        
        constructor(mv:ViewModel){
            super(mv);
        }

        protected closeNow(){
            if(this.display.viewType == ComView.WINDOW || this.display.viewType == ComView.WINDOW_NO_CLOSEAUTO){
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
            if(this.display.viewType == ComView.WINDOW || this.display.viewType == ComView.WINDOW_NO_CLOSEAUTO){
                laya.utils.Tween.from(this.display, {scaleX:0.9,scaleY:0.9,alpha:0.5}, 100, null,Handler.create(this,this.tweenShow,[],false));
            }
            else{
                super.showNow();
            }
        }

        private tweenShow(){
            
        }
    }
