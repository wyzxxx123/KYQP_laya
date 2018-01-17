module module.avaterChose{
    /**
     * @description 头像选择界面
     * @author wangyz
     * @export
     * @class AvaterChoseVM
     * @extends {module.base.MViewModel}
     */
    export class AvaterChoseVM extends mbase.base.MViewModel{

        public saveHead(sex:number,index:number){
            this.sendData(16778272,[sex]);
            this.sendData(16778270,["" + index]);
        }

        constructor(){
            super();

            this.setAtlasName = "res/atlas/userInfoWindow.atlas";
            this.setClass = AvaterChoseView;
        }
    } 
}