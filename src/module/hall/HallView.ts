import { ui } from '../../ui/layaUI.max.all';
import { HallVM } from './HallVM';
import { Player } from '../../mbase/data/Player';
import { CFun } from '../../core/CFun';
    export class HallView extends ui.game_hall.GameHallUI{

        constructor(vm:HallVM){
            super();
            this._vm = vm;
        }

        private onChoseGame(e:any){
            (this.vm as HallVM).gotoScene(e);
        }

        private onShowWindow(){
            (this.vm as HallVM).showAvaterChose();
        }

        private onShowSetting(){
            (this.vm as HallVM).showSetting();
        }

        private onFullScreen(){
            (this.vm as HallVM).setFullScreen();
        }

        //继承的
        protected comInit(){
            this.btn_header.on(Laya.Event.CLICK,this,this.onShowWindow);
            this.btn_setting.on(Laya.Event.CLICK,this,this.onShowSetting);
            this.btn_full.on(Laya.Event.CLICK,this,this.onFullScreen);
            this.btn_620.on(Laya.Event.CLICK,this,this.onChoseGame,[this.btn_620.name]);
        }

        //继承的
        public viewInit(recv:Player){
            this.txt_name.text = recv["name"];
            this.txt_gold.text = CFun.formatCurrency(recv["gold"]);
            this.btn_header.skin = this.getHeadImage((recv["sex"]),(recv["icon"] || 0));
        }

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
    }
