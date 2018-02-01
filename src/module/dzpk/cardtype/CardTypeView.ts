import { CardTypeVM } from './CardTypeVM';
    export class CardTypeView extends ui.game_dzpk.DZPKCardTypeUI{


        //覆盖onClick
        protected onClick(e:Event){
        }

        protected layerInit(){
            this.centerX = NaN;
            this.centerY = NaN;
            this.pos(0,81);
        }

        //覆盖对btn_close的处理
        protected btnCloseInit(){}
        
        constructor(vm:CardTypeVM){
            super();
            this._vm = vm;
        }
    }
