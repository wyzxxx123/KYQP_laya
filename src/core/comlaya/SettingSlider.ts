    /**
     * @description 设置面板中的Slider
     * @author wangyz
     * @export
     * @class SettingSlider
     * @extends {laya.ui.HSlider}
     */
    export class SettingSlider extends laya.ui.HSlider{

        private onChange(){
            let front = this.getChildByName("front");
            front["width"] = this.bar.x + 5;
        }

        private onAddStage(){
            // this.skin = this["back"];
            // this.bar.skin = val;

            let front = this.getChildByName("front");
            let thumb = this.getChildByName("thumb");
            thumb["visible"] = false;
            this.bar.stateNum = 1;
            this.bar.skin = thumb["skin"];
            this.bar.y = thumb["y"];
            this.addChild(this.bar);

            front["width"] = this.bar.x + 5;
        }

        constructor(){
            super();

            this.showLabel = false;

            this.on(Laya.Event.DISPLAY,this,this.onAddStage);
            this.on(Laya.Event.CHANGE,this,this.onChange);
        }
    }
