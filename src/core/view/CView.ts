import ComView = mview.ComView;
    /*
    可显示对象
    */
class CView{
        // private static _dic_show:{[key:string]:{[key:string]:any}} = {};
        private _event_manager:EventManager;
        constructor(vm:ViewModel){
            this._event_manager = EventManager.ins;
            this._vm = vm;
        }

        protected regist(type:string,listener:Function):void{
            this._event_manager.on(type,listener,this);
        }

        protected  _vm:ViewModel;
        protected  _parent:laya.display.Node = null;
        protected  _class:any = null;
        protected  _atlas_url:string = null;//需要多个不同资源，用逗号隔开
        protected  _view_path:string = null;//排版路径
        protected  _is_show:boolean = false;
        protected  _is_need_show:boolean = false;
        protected  _is_on_parent:boolean = false;
        protected  _is_load_complete:boolean = false;
        protected  _display:ComView;
        /*
            设置资源路径
        */
        public setAtlasName(arg_params:string) {
            this._atlas_url = arg_params;
        }

         /*
            设置资源路径
        */
        public setViewPath(arg_params:string) {
            this._view_path = arg_params;
        }

        public setParent(val:laya.display.Node){
            this._parent = val;
        }

        public get vm():ViewModel{
            if(!this._vm) CFun.throw("CView中_vm还未初始化！");
            return this._vm;
        }

        /*
          设置显示类型
        */
        public setClass(arg_class:any){
            this._class = arg_class;
        }

        private onLoaded(){
            this._is_load_complete = true;   

            if(!this._class) {
                CFun.throw("VisibleView的_class为空！");
            }

            this._display = new (this._class)(this.vm);
            if(this._parent == null){
                if(this.display.viewType == ComView.WINDOW){
                    this._parent = Layer.WINDOW_LAYER;
                }
                else if(this.display.viewType == ComView.TOP){
                    this._parent = Layer.TOP_LAYER;
                }
                else if(this.display.viewType == ComView.SCENE){
                    this._parent = Layer.SCENE_LAYER;
                }
                else{
                    this._parent = Layer.SCENE_LAYER;
                }
            }

            if(this._is_need_show){
                this.showNow();
            }
        }

        protected onLoadResource(){
            if(!this._atlas_url) {
                CFun.throw("VisibleView的_atlas_url为空！");
            }
            let tmp_arrAtlas = [];
            let arr_atlas = this._atlas_url.split(",");
            let len = arr_atlas.length;
            
            for(let i = 0;i < len;i++){
                if(arr_atlas[i] == "") continue;
                tmp_arrAtlas.push({url:arr_atlas[i],type:laya.net.Loader.ATLAS});
            }
            // let path = CFun.parsingPath(this._class.prototype.constructor.__proto__);
            let arr_json = this._view_path.split(",");
            for(let i = 0;i < len;i++){
                if(arr_json[i] == "") continue;
                tmp_arrAtlas.push({url:arr_json[i] +".json",type:laya.net.Loader.JSON});
            }
            
            if(tmp_arrAtlas.length > 0){
                Laya.loader.load(tmp_arrAtlas, laya.utils.Handler.create(this, this.onLoaded));
            }
        }

        protected addToParent(){
            if(!this._parent) {
                CFun.throw("VisibleView的addToParent中的_parent为空！");
            }
            
            this._parent.addChild(this.display);
            if(Layer.WINDOW_LAYER == this._parent){
                Layer.WINDOW_LAYER.mouseEnabled = true;
            }
            if(Layer.TOP_LAYER == this._parent){
                Layer.TOP_LAYER.mouseEnabled = true;
            }
            
            this._is_on_parent = true;
        }

        protected removeFromParent(){
            if(!this._parent) {
                CFun.throw("VisibleView的removeFromParent中的_parent为空！");
            }
            this._parent.removeChild(this.display);
            if(this._parent.numChildren <= 0){
                if(Layer.WINDOW_LAYER == this._parent){
                    Layer.WINDOW_LAYER.mouseEnabled = false;
                }
                if(Layer.TOP_LAYER == this._parent){
                    Layer.TOP_LAYER.mouseEnabled = false;
                }
            }
            
            this._is_on_parent = false;
            this._is_show = false;
        }

        public get display():ComView{
            if(!this._display) {
                CFun.throw("VisibleView的_display为空！");
            }
            return this._display;
        }

        //请求显示，内部重写，调用
        protected showNow(){
            this.vm.preShow();
            this._is_need_show = false;
            this.addToParent();
            this.setVisible(true);
            this.vm.afterShow();
        }

        //请求关闭，内部重写，调用
        protected closeNow(){
            this.vm.preClose();
            this.removeFromParent();
            this.setVisible(false);
            this.vm.afterClose();
        }

        /*
        是否添加在父显示对象上
        */
        public isOnParent():boolean{
            return this._is_on_parent;
        }

        /*
          是否已经显示
        */
        public isShow():boolean{
            return this._is_show;
        }

        //关闭，外部调用
        public closeME(){
            if(!this._is_load_complete) return;

            this.closeNow();
        }

        /*
          开始显示，外部调用
        */
        public showME(){
            if(this._is_need_show) return;
            this._is_need_show = true;
            if(this._is_load_complete){
                this.showNow();
            }
            else{
                this.onLoadResource();
            }
        }
        
        /*
        设置显示对象的visible属性
        */
        public setVisible(visible:boolean){
            this.display.visible = visible;
            if(this.isOnParent()) this._is_show = visible;
        }
    }
