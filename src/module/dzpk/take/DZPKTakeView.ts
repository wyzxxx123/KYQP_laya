import { DZPKTakeVM } from './DZPKTakeVM';
    export class DZPKTakeView extends ui.game_dzpk.DZPKTakeUI{

        private _isClick:boolean = false;
        private onOK(){
            this._isClick = true;
            (this.vm as DZPKTakeVM).goToGame();
        }

        //继承的
        public beClose(){
            super.beClose();

            let object = {};
            object["takeScore"] =  this.sid_take.value;
            object["isfirstGame"] = this._isClick;
            object["isautoTakeScore"] = this.chk_chose.selected;
            (this.vm as DZPKTakeVM).updataSetting(object);
        }

        private onChange(){
            let sprMoney = this.sid_take.getChildByName("box_money");
            sprMoney["x"] = this.sid_take.bar.x + 62;

            let txtMoney = sprMoney.getChildByName("txt_money");
            let imgMoney = sprMoney.getChildByName("img_money");
            txtMoney["text"] = CFun.formatCurrency(this.sid_take.value);
            if(txtMoney["width"] > 174) imgMoney["width"] = txtMoney["width"] + 20;
        }

        public viewInit(recv:any){
            // let data = {playerMoney:this._data["gold"],max:0,min:0,take:0};
            this.txt_all.text = CFun.formatCurrency(recv.playerMoney);
            this.txt_min.text = CFun.formatCurrency(recv.min);
            this.txt_max.text = CFun.formatCurrency(recv.max);
            this.sid_take.setSlider(recv.min,recv.max,recv.take);
            this.sid_take.bar.y = -8;
            this.chk_chose.selected = recv.isAuto;

            this.btn_ok.clickHandler = laya.utils.Handler.create(this,this.onOK);
        }

        protected comInit(){
            this.sid_take.changeHandler = new laya.utils.Handler(this, this.onChange,[],false);
        }

        constructor(vm:DZPKTakeVM){
            super();
            this._vm = vm;
        }
    }
