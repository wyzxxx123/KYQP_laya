module core.viewmodel{
    export class VMManager{
        public static SHOW_VIEW:string = "SHOW_VIEW"; //显示头像选择面板
        public static static_dic_vm:{[key:string]:core.viewmodel.ViewModel} = {};

        private _event_manager:core.event.EventManager;
        constructor(){
            this._event_manager = core.event.EventManager.ins;

            this._event_manager.on(VMManager.SHOW_VIEW,this.onInitAndShow,this);

            this.eventInit();
        }

        protected eventInit(){

        }

        protected regist(type:string,listener:Function):void{
            this._event_manager.on(type,listener,this);
        }
        
        //初始化显示对象并显示
        protected onInitAndShow(data:mbase.base.InitData){
            let model:core.viewmodel.ViewModel = VMManager.static_dic_vm[data.className];//laya.utils.ClassUtils.getInstance(data.className);
            if(!model){
                model = laya.utils.ClassUtils.getInstance(data.className);
                VMManager.static_dic_vm[data.className] = model;
            }

            model.onShow(data.exData);

            laya.utils.Pool.recover("InitData",data);
        }

        public closeAll(){
            let model:core.viewmodel.ViewModel = null;
            for(let key in VMManager.static_dic_vm){
                model = VMManager.static_dic_vm[key];
                model.closeNow();
            }
        }

        public closeScene(){
            let model:core.viewmodel.ViewModel = null;
            for(let key in VMManager.static_dic_vm){
                model = VMManager.static_dic_vm[key];
                if(model.getViewType() == view.ComView.SCENE){
                    model.closeNow();
                }
            }
        }

        public closeWindow(){
            let model:core.viewmodel.ViewModel = null;
            for(let key in VMManager.static_dic_vm){
                model = VMManager.static_dic_vm[key];
                if(model.getViewType() == view.ComView.WINDOW){
                    model.closeNow();
                }
            }
        }
    }
}
