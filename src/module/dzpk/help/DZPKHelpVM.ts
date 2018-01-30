import { MViewModel } from '../../../mbase/base/MViewModel';
import { DZPKHelpView } from './DZPKHelpView';
    export class DZPKHelpVM extends MViewModel{

        constructor(){
            super();

            this.setAtlasName = "res/atlas/dzpk/helpWindow.atlas,res/atlas/dzpk/zh-cn/helpWindow.atlas";
            this.setClass = DZPKHelpView;
            this.setViewPath = "game_dzpk/DZPKHelp";
        }
    }
