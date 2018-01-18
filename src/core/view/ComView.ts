import { ViewModel } from '../viewmodel/ViewModel';
import { CFun } from '../CFun';
    export class ComView extends laya.ui.View{
        public static TOP:string = "top";
        public static WINDOW:string = "window";
        /**
         * 不需要点击空白处关窗的界面
         */
        public static WINDOW_NO_CLOSEAUTO:string = "window_no_closeauto";
        public static SCENE:string = "scene";

        protected _vm:ViewModel;

        public c_name:string;
        protected _view_type:string = "other";
        public get viewType():string{
            return this._view_type;
        }

        public get vm():ViewModel{
            if(!this._vm) CFun.throw("ComView中_vm还未初始化！");
            return this._vm;
        }

        //组件事件初始化，实例化时调用一次
        protected comInit(){

        }

        //显示对象根据数据初始化，每次显示时调用
        public viewInit(data:any):void{

        }

        //关闭前调用
        public beClose(){
            
        }

        protected onClick(e:Event){
            //阻止后续节点的监听器
            e.stopPropagation();
        }

        protected layerInit(){

        }

        constructor(){
            super();
            this.on(Laya.Event.CLICK,this,this.onClick);

            this.comInit();
            this.layerInit();
        }

        createChildren():void {
            super.createChildren();
            let path = this.parsingPath();
            this.createView(Laya.loader.getRes(path));
        }

        private parsingPath(){
            let c:string = this.constructor.toString();
            let c_s = this.constructor.name + " extends layaUI_max_all_1.ui.";
            let s_i = c.indexOf(c_s) + c_s.length;
            let e_i = c.indexOf(this.constructor["__proto__"].name) + this.constructor["__proto__"].name.length - 2;
            let t_c = c.substring(s_i,e_i);

            let d_i = t_c.indexOf(".");
            if(d_i != -1){
               t_c =  t_c.split(".").join("/");
            }

            return t_c + ".json";
        }
    }
