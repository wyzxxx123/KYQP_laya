module mbase.base{
    export class MViewModel extends core.viewmodel.ViewModel{
        constructor(){
            super();

            this._cview = new base.MCView(this);
        }

        public e_id:number = 0;

        public get playerData():data.Player{
            if(!core.model.ModelManager.ins.getInstByClassName("Player")){
                core.CFun.throw("MViewModel中使用的Player数据还未初始化");
            }
            return core.model.ModelManager.ins.getInstByClassName("Player");
        }

        protected sendData(method_id:number,args:any[]=[]){
            let method = analyzer.analyzer1.RpcDef.getMethodByID(method_id);
            let inst = core.model.ModelManager.ins.getInstByClassName(method["className"]);
            if(!inst) core.CFun.throw("未获得发送实例！");
            let send2 = laya.utils.Pool.getItemByClass("tmpSend",analyzer.analyzer1.SSend);
            send2.method_id = method_id;
            send2.args = args;
            send2.e_id = inst["e_id"];
            send2.sendClass = inst["wyz_class_name"];
            this.send(send2);
        }

        protected showOther(className:string,exData?:any){
            let initData = laya.utils.Pool.getItemByClass("InitData",base.InitData);
            initData.className = className;
            initData.exData = exData;
            this.dispach(core.viewmodel.VMManager.SHOW_VIEW,initData);
        }
    }
}