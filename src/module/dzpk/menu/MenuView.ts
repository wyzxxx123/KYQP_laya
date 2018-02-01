import { MenuVM } from './MenuVM';
    export class MenuView extends ui.game_dzpk.DZPKMenuUI{

        private onOpenCard(){
            (this.vm as MenuVM).openCard();
        }
        private onOut(){
            (this.vm as MenuVM).requestOut();
        }
        private onRecord(){
            (this.vm as MenuVM).showRecord();
        }
        private onSetting(){
            (this.vm as MenuVM).showSetting();
        }

        public beClose(){
            super.beClose();


        }

        protected comInit(){
            this.btn_card.clickHandler = laya.utils.Handler.create(this,this.onOpenCard,[],false);
            this.btn_out.clickHandler = laya.utils.Handler.create(this,this.onOut,[],false);
            this.btn_record.clickHandler = laya.utils.Handler.create(this,this.onRecord,[],false);
            this.btn_setting.clickHandler = laya.utils.Handler.create(this,this.onSetting,[],false);
        }

        protected layerInit(){
            this.centerX = NaN;
            this.centerY = NaN;
            this.pos(0,89);
        }

        //覆盖对btn_close的处理
        protected btnCloseInit(){}
        
        constructor(vm:MenuVM){
            super();
            this._vm = vm;
        }
    }
