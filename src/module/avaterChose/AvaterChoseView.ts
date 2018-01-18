import { ui } from '../../ui/layaUI.max.all';
import { Player } from '../../mbase/data/Player';
import { AvaterChoseVM } from './AvaterChoseVM';
    /**
     * @description 头像选择界面
     * @author wangyz
     * @export
     * @class AvaterChoseView
     * @extends {ui.avater_chose.AvaterChoseUI}
     */
    export class AvaterChoseView extends ui.avater_chose.AvaterChoseUI{

        protected _sex_index:number;
        protected _icon_index:number;

        protected _chose_sex:number;
        protected _chose_index:number;

        private onSaveHead(){
            if(this._sex_index == this._chose_sex && this._icon_index == this._chose_index)
            {

            }
            else{
                this.vm["saveHead"](this._chose_sex,this._chose_index);
            }
        }

        private onManChose(){
            if(this._chose_sex == 1){
                this.man_list.getItem(this._chose_index)["selected_bg"].visible = false;
            }
            else{
                this.woman_list.selectedIndex = -1;
            }

            let item = this.man_list.selectedItem;
            if(!item) return;
            item["selected_bg"].visible = true;
            this.img_my_avater.skin = item["img_head"];

            this._chose_index = this.man_list.selectedIndex;
            this._chose_sex = 1;
        }

        private onWomenChose(){
            if(this._chose_sex == 1){
                this.man_list.selectedIndex = -1;
            }
            else{
                this.woman_list.getItem(this._chose_index)["selected_bg"].visible = false;
            }

            let item = this.woman_list.selectedItem;
            if(!item) return;
            item["selected_bg"].visible = true;
            this.img_my_avater.skin = item["img_head"];

            this._chose_index = this.woman_list.selectedIndex;
            this._chose_sex = 0;
        }

        //继承的
        public beClose(){
            this.man_list.selectedIndex = -1;
            this.woman_list.selectedIndex = -1;
        }

        //继承的
        protected comInit(){
            this.man_list.selectHandler = laya.utils.Handler.create(this,this.onManChose,[],false);
            this.woman_list.selectHandler = laya.utils.Handler.create(this,this.onWomenChose,[],false);
            this.btn_save.on(Laya.Event.CLICK,this,this.onSaveHead);
        }

        //继承的
        public viewInit(recv:Player){
            var manList = [], womenList = [], icon0 = recv["icon"] || 0;
            this._sex_index = this._chose_sex = recv["sex"];
            this._icon_index = this._chose_index = parseInt(icon0);
            for (var i = 0; i < 8; i++) {
                var icon1 = "gamehall/avater/man" + i + ".png", icon2 = "gamehall/avater/women" + i + ".png";
                manList.push({"selected_bg": {visible:false},
                    "img_head":icon1
                });
                womenList.push({"selected_bg": {visible:false},
                    "img_head":icon2
                });
            }
            this.man_list.array = manList;
            this.woman_list.array = womenList;

            if(this._chose_sex == 1){
                this.man_list.selectedIndex = this._chose_index;
            }
            else{
                this.woman_list.selectedIndex = this._chose_index;
            }
        }

        constructor(vm:AvaterChoseVM){
            super();
            this._vm = vm;

            this.man_list.vScrollBarSkin = "";
            
            //滚动在头或底回弹时间
            this.man_list.scrollBar.elasticBackTime = 500;
            //滚动在头或底最大距离
            this.man_list.scrollBar.elasticDistance = 200;

            this.woman_list.vScrollBarSkin = "";
             //滚动在头或底回弹时间
            this.woman_list.scrollBar.elasticBackTime = 500;
            //滚动在头或底最大距离
            this.woman_list.scrollBar.elasticDistance = 200;
        }
    }
