import { MViewModel } from '../../../mbase/base/MViewModel';
import { DZPKRecordView } from './DZPKRecordView';
    export class DZPKRecordVM extends MViewModel{

       //继承的
        public onShow(recv?:any){
            super.onShow(this.playerData);
        }

        constructor(){
            super();

            this.setAtlasName = "res/atlas/dzpk/zh-cn/gameRecord.atlas";
            this.setClass = DZPKRecordView;
        }
    }
