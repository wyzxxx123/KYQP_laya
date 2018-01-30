declare let require;
import { ViewModel } from './ViewModel';
import { ComView } from '../view/ComView';
import { EventManager } from '../event/EventManager';
import { InitData } from '../../mbase/base/InitData';

    export class VMManager{
        public static SHOW_VIEW:string = "SHOW_VIEW"; //显示头像选择面板
        public static static_dic_vm:{[key:string]:ViewModel} = {};

        private _event_manager:EventManager;
        constructor(){
            this._event_manager = EventManager.ins;

            this._event_manager.on(VMManager.SHOW_VIEW,this.onInitAndShow,this);

            this.eventInit();
        }

        protected eventInit(){

        }

        protected regist(type:string,listener:Function):void{
            this._event_manager.on(type,listener,this);
        }
        
        //初始化显示对象并显示
        protected onInitAndShow(data:InitData){
            let model:ViewModel = VMManager.static_dic_vm[data.className];//laya.utils.ClassUtils.getInstance(data.className);
            if(!model){
                model = laya.utils.ClassUtils.getInstance(data.className);
                VMManager.static_dic_vm[data.className] = model;

                let path = laya.utils.ClassUtils.getRegClass(data.className);
                if(typeof path == "string"){
                    require([path],function(mod){
                        let name = path.substr(path.lastIndexOf("/") + 1);
                        model = new (mod[name])();
                        if(model){
                            VMManager.static_dic_vm[data.className] = model;
                            model.onShow(data.exData);
                            laya.utils.Pool.recover("InitData",data);
                        }
                        else{
                        }
                    });
                }
                else{
                    model = laya.utils.ClassUtils.getInstance(data.className);
                    if(model){
                        VMManager.static_dic_vm[data.className] = model;
                        model.onShow(data.exData);
                        laya.utils.Pool.recover("InitData",data);
                    }
                    else{
                    }
                }
            }
            else{
                model.onShow(data.exData);

                laya.utils.Pool.recover("InitData",data);
            }
        }

        

        public closeAll(){
            let model:ViewModel = null;
            for(let key in VMManager.static_dic_vm){
                model = VMManager.static_dic_vm[key];
                model.closeNow();
            }
        }

        public closeScene(){
            let model:ViewModel = null;
            for(let key in VMManager.static_dic_vm){
                model = VMManager.static_dic_vm[key];
                if(model.getViewType() == ComView.SCENE){
                    model.closeNow();
                }
            }
        }

        public closeWindow(){
            let model:ViewModel = null;
            for(let key in VMManager.static_dic_vm){
                model = VMManager.static_dic_vm[key];
                if(model.getViewType() == ComView.WINDOW){
                    model.closeNow();
                }
            }
        }
    }
