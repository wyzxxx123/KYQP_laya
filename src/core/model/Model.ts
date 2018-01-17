module core.model{
    /**
     * @description MODEL数据层
     * @author wangyz
     * @export
     * @class Model
     */
    export class Model extends SendHandel{
        private _eventManager:core.event.EventManager;

        constructor(){
            super();
            this._eventManager = core.event.EventManager.ins;
            this.recvInit();
        }
        protected regist(type:string,listener:Function):void{
            this._eventManager.on(type,listener,this);
        }

        protected proChange(type:string,data:any):void{
            this._eventManager.dispatch(type,data);
        }

        protected recvInit():void{

        }
    }
}