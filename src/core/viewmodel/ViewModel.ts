import { SendHandel } from '../SendHandel';
import { EventManager } from '../event/EventManager';
import { CView } from '../view/CView';
import { CFun } from '../CFun';
import { ComView } from '../view/ComView';

    /**
     * @description VM层
     * @author wangyz
     * @export
     * @class ViewModel
     */
    export class ViewModel extends SendHandel{
        private _event_manager:EventManager;
        private _event_list:any[];
        protected _cview:CView;

        protected _data:any = null;

        public get data():any{
            if(!this._data) CFun.throw("ViewModel的this._data为空");
            return this._data;
        }

        /**
         * Creates an instance of ViewModel.
         * @author wangyz
         * @param {*} vclass 传入的显示类型
         * @memberof ViewModel
         */
        constructor(){
            super();
            this._event_manager = EventManager.ins;
            this._event_list = [];
        }
        
        protected regist(type:string,listener:Function):void{
            if(!this._event_manager) CFun.throw("ViewModel的regist中的this._event_manager还未初始化");
            this._event_manager.on(type,listener,this);
            this._event_list.push({type:type,listener:listener});
        }

        //派发事件
        protected dispach(type: string,data: any = null){
            if(!this._event_manager) CFun.throw("ViewModel的dispach中的this._event_manager还未初始化");
            this._event_manager.dispatch(type,data);
        }

        private eventRemove(){
            let i = 0,len = this._event_list.length;
            for(i = 0;i < len;i++){
                this._event_manager.off(this._event_list["type"],this._event_list["listener"],this);
            }
        }

        protected eventInit():void{

        }

        //内部可被重写的显示方法
        protected vmShow(data:any){
            this._data = data;
            this.cview.showME();
        }

        //设置父对象
        protected setParent(val:laya.display.Node){
            this.cview.setParent(val);
        }
        /*
            设置资源路径
        */
        protected set setAtlasName(arg_params:string) {
            this.cview.setAtlasName(arg_params);
        }

        /*
            设置资源路径
        */
        protected set setViewPath(arg_params:string) {
            this.cview.setViewPath(arg_params);
        }

        /*
          设置显示类型
        */
        protected set setClass(arg_class:any){
            this.cview.setClass(arg_class);
        }

        public get view():ComView{
            return this.cview.display;
        }

        protected get cview():CView{
            if(!this._cview) CFun.throw("_cview还未被初始化！");
            return this._cview;
        }

        protected get is_show():boolean{
            return this.cview.isShow();
        }

        public vmType():string{
            return this.view.viewType;
        }

        //关闭前
        public preClose(){
            this.eventRemove();
        }
        //关闭中
        public closeNow(){
            this.view.beClose();
            this.cview.closeME();
        }
        //关闭后
        public afterClose(){

        }

        //显示前调用，已经加载完成，还未添加到舞台
        public preShow(){
            this.eventInit();
        }

        //显示中接口,会被外部调用
        public onShow(data?:any){
            this.vmShow(data);
        }

        //正常显示后
        public afterShow(){
            this.view.viewInit(this._data);
        }

        /**
         * @description 获取显示对象类型
         * @author wangyz
         * @returns {string} 
         * @memberof ViewModel
         */
        public getViewType():string{
            return this.view.viewType;
        }
    }
