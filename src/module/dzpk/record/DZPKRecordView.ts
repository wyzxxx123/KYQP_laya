import { DZPKRecordVM } from './DZPKRecordVM';
import { Player } from '../../../mbase/data/Player';
    export class DZPKRecordView extends ui.game_dzpk.DZPKRecordUI{

        public viewInit(data:Player){
            let arr = data.holdemRecords,tarr = [],i = 0,len = data.holdemRecords.length;
            for(i = 0;i < len;i++){
                tarr.push({img_bg:{visible:i%2==0},txt_num:i + 1,txt_id:arr[i].gameNo,txt_room_name:data.getRoomDataById(Player.HOLDEM,arr[i].roomType).name,
                    txt_score:CFun.formatCurrency(arr[i].win - arr[i].deduct),txt_end_time:arr[i].time});
            }

            if(arr.length <= 0){
                this.txt_no_record.visible = true;
                this.box_label.visible = false;
            }
            else{
                this.txt_no_record.visible = false;
                this.box_label.visible = true;
            }

            this.list_record.array = tarr;
        }

        protected comInit(){
            this.list_record.vScrollBarSkin = "";
        }

        constructor(vm:DZPKRecordVM){
            super();
            this._vm = vm;
        }
    }
