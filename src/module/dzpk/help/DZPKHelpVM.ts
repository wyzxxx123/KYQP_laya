module module.dzpk.help{
    export class DZPKHelpVM extends mbase.base.MViewModel{

        constructor(){
            super();

            this.setAtlasName = "res/atlas/dzpk/helpWindow.atlas,res/atlas/dzpk/zh-cn/helpWindow.atlas";
            this.setClass = DZPKHelpView;
        }
    }
}