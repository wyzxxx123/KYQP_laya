    /**
     * @description 附加按钮皮肤修改
     * @author wangyz
     * @export
     * @class ScaleComponent
     */
  class ButtonState extends laya.ui.Button{

        protected changeState(){
            super.changeState();

            let com = null;
            if(this.state == 0){ //mouseup
                    com = this.getChildByName("up");
                    if(com) com["visible"] = true;
                    com = this.getChildByName("down");
                    if(com) com["visible"] = false;
                    com = this.getChildByName("over");
                    if(com) com["visible"] = false;
            }
            else if(this.state == 1){ //mouseover
                    com = this.getChildByName("up");
                    if(com) com["visible"] = false;
                    com = this.getChildByName("down");
                    if(com) com["visible"] = false;
                    com = this.getChildByName("over");
                    if(com) com["visible"] = true;
            }
            else if(this.state == 2){ //mousedown
                    com = this.getChildByName("up");
                    if(com) com["visible"] = false;
                    com = this.getChildByName("down");
                    if(com) com["visible"] = true;
                    com = this.getChildByName("over");
                    if(com) com["visible"] = false;
            }
        }

        public state_skin:boolean;

        constructor(skin?: string, label?: string){
            super(skin, label);

            this.state = -1;
            this.state = 0;
        }
    }
