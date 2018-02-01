import { CardTypeView } from './CardTypeView';
import { MViewModel } from '../../../mbase/base/MViewModel';
    export class CardTypeVM extends MViewModel{


        

        constructor(){
            super();

            this.setAtlasName = "1";
            this.setClass = CardTypeView;
            this.setViewPath = "game_dzpk/DZPKCardType";
        }
    }
