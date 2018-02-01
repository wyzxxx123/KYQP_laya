 /**
     * @description 全局事件管理
     * @author wangyz
     * @export
     * @class EventManager
     */
class EventManager {

        /**
         * 抛出事件
         * 
         */
        public dispatch(type: string,data: any = null): boolean {
            return this._dispatcher.event(type,data);
        }
        /**
         * 添加事件监听
         */
        public on(type: string,listener: Function,caller: any,args:Array<any> = null): void {
            this._dispatcher.on(type,caller,listener,args);
        }
        /**
         * 执行1次就自动移除的监听
         */
        public once(type: string,listener: Function,caller: any,args:Array<any> = null): void {
            this._dispatcher.once(type,caller,listener,args);
        }
        /**
        * 取消事件监听
        */
        public off(type:string, listener:Function, caller:any, once_only:boolean = false): void {
            this._dispatcher.off(type,caller,listener,once_only);
        }
        
        private _dispatcher: laya.events.EventDispatcher;
        constructor(){
            if(EventManager._instance){
                CFun.throw("单例！");
            }
            this._dispatcher = new laya.events.EventDispatcher();
        }

        private static _instance: EventManager;
        public static get ins(): EventManager {
            if(!this._instance) {
                this._instance = new EventManager();
            }
            return this._instance;
        }
    }
