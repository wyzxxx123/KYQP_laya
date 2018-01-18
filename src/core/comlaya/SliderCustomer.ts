    /**
     * @description 有前滚动条，按钮非三态
     * @author wangyz
     * @export
     * @class SliderCustomer
     * @extends {laya.ui.HSlider}
     */
    export class SliderCustomer extends laya.ui.Slider{

        public set is_v(val:boolean){
            this.isVertical = val;
        }

        private on_slider_change(){
            let front = this.getChildByName("cfront");
            if(this.isVertical){
                front["height"] = this.bar.y + 6;
            }
            else{
                front["width"] = this.bar.x + 5;
            }
        }

        protected changeValue(){
            super.changeValue();

            this.on_slider_change();
        }
        
        addChild(node: laya.display.Node):laya.display.Node{
            let s_node = super.addChild(node);

            let front = this.getChildByName("cfront");
            if(front && this._beginOff == -999){
                if(this.isVertical){
                    this._beginOff = front["y"];
                }
                else{
                    this._beginOff = front["x"];
                }

                this.addChild(this.bar);
                this.bar.stateNum = 1;
            }
  
            return s_node;
        }

        private _beginOff:number = -999;

        constructor(skin?: string){
            super(skin);

            this.on(Laya.Event.CHANGE,this,this.on_slider_change);
        }
    }
