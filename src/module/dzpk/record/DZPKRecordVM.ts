module module.dzpk.record{
    export class DZPKRecordVM extends mbase.base.MViewModel{

       //继承的
        public onShow(recv?:any){
            super.onShow(this.playerData);
        }

        constructor(){
            super();

            this.setAtlasName = "res/atlas/dzpk/zh-cn/gameRecord.atlas";
            this.setClass = DZPKRecordView;
        }
    }
}