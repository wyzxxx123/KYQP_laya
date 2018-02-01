import { DZPKHelpVM } from './DZPKHelpVM';
    export class DZPKHelpView extends ui.game_dzpk.DZPKHelpUI{

        private onSelecte(index:number){
            //切换ViewStack子页面
            this.vs_des.selectedIndex=index;
        }

        private initSelect(){
            this.tab_chose.selectedIndex = 0;
        }

        public beClose(){
            this.tab_chose.selectedIndex = -1;
        }

        protected comInit(){
            this.on(Laya.Event.DISPLAY,this,this.initSelect);
            this.tab_chose.selectHandler = laya.utils.Handler.create(this,this.onSelecte,[],false);
            this.tab_chose.selectedIndex = -1;
        }

        constructor(vm:DZPKHelpVM){
            super();
            this._vm = vm;
        }
    }
