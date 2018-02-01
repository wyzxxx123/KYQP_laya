import { DZPKHelpView } from './DZPKHelpView';
import { MViewModel } from '../../../mbase/base/MViewModel';
    export class DZPKHelpVM extends MViewModel{

        constructor(){
            super();

            this.setAtlasName = "res/atlas/dzpk/helpWindow.atlas,res/atlas/dzpk/zh-cn/helpWindow.atlas";
            this.setClass = DZPKHelpView;
        }
    }
