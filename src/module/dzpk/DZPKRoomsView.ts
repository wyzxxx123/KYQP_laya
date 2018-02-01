import { DZPKRoomsVM } from './DZPKRoomsVM';
import { Player } from '../../mbase/data/Player';
    export class DZPKRoomsView extends ui.game_dzpk.DZPKRoomUI{
        private getHeadImage(sex:number,index:number):string{
            let icon:string = "";
            if(sex == 1){
                icon = "gamehall/avater/man" + index + ".png";
            }
            else{
                icon = "gamehall/avater/women" + index + ".png";
            }
            return icon;
        }

        private onShowHelp(){
            (this.vm as DZPKRoomsVM).onShowHelp();
        }

        private onShowRecord(){
            (this.vm as DZPKRoomsVM).onShowRecord();
        }

        //进入房间
        private onChoseRoom(e:Event,index:number){
            if(e.type == "mouseup"){
                (this.vm as DZPKRoomsVM).onChoseRoom(index);
            }
        }

        //返回大厅
        private onBack(){
            (this.vm as DZPKRoomsVM).backToHall();
        }

        //继承的
        public beClose(){
            this.list_rooms.selectedIndex = -1;
        }

        //继承的
        public viewInit(recv:Player){
            this.txt_name.text = recv["name"];
            this.txt_gold.text = CFun.formatCurrency(recv["gold"]);
            this.btn_header.skin = this.getHeadImage((recv["sex"]),(recv["icon"] || 0));

            let arr = recv.roomDataList[ StaticData.HOLDEM];
            let i = 0,len = arr.length,list = [];
            for(i = 0;i < len;i++){
                list.push({ box_scale:{txt_blind:{value:arr[i]["blink"] * 0.01 + "/" + (arr[i]["blink"] * 0.02)},
                            txt_limit_in:　"准入：" +　arr[i]["chip"] * 0.01,
                            img_bg:{skin:"dzpk/zh-cn/roomHallScene/game_room_" + i + "_selected.png"}}
                });
            }

            this.list_rooms.array = list;
            this.list_rooms.selectedIndex = -1;
        }

         //继承的
        protected comInit(){
            this.list_rooms.vScrollBarSkin = "";
            this.list_rooms.selectEnable = true;
            this.list_rooms.mouseHandler = laya.utils.Handler.create(this,this.onChoseRoom,[],false);
            this.btn_back.on(Laya.Event.CLICK,this,this.onBack);
            this.btn_help.on(Laya.Event.CLICK,this,this.onShowHelp);
            this.btn_record.on(Laya.Event.CLICK,this,this.onShowRecord);
        }

        constructor(vm:DZPKRoomsVM){
            super();
            this._vm = vm;
        }
    }
