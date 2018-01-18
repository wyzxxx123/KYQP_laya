import { MViewModel } from '../../../mbase/base/MViewModel';
import { CardTypeView } from './CardTypeView';
    export class CardTypeVM extends MViewModel{


        

        constructor(){
            super();

            this.setAtlasName = "1";
            this.setClass = CardTypeView;
        }
    }
