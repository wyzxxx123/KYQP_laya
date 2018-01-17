module core.comlaya{
    /**
     * @description 附加组件点击缩放
     * @author wangyz
     * @export
     * @class ScaleComponent
     */
    export class ScaleCom{
      private _is_scale:boolean = true;
      private _scale_scope:number = 0.9;
      private _owner:laya.ui.Component;

      //设置owner函数，可以直接获取到Button组件的实例
        public set owner(v:laya.ui.Component)
        {
            this._owner = v;
            //由于时序问题，我们需要在此处添加逻辑代码，确保_owner不为null
            if(this._is_scale&&this._owner)
            {
                this._owner.anchorX = 0.5;
                this._owner.anchorY = 0.5;

                // if(this._owner.width > 0){
                //     this.onChangeHeight();
                // }
                // else{
                    this._owner.once(laya.events.Event.ADDED,this,this.onChangeHeight);
                // }

                this._owner.on(laya.events.Event.MOUSE_DOWN,this,this.onDown);
            }
        }

        private onChangeHeight(){
            this._owner.x += this._owner.width * 0.5;
            this._owner.y += this._owner.height * 0.5;
        }

        private onLoaded(){
            this._owner.x += this._owner.width * 0.5;
            this._owner.y += this._owner.height * 0.5;
        }

        public get is_scale():boolean
        {
            return this._is_scale;
        }
        public set is_scale(val:boolean)
        {
            this._is_scale=val;
        }
        public get scale_scope():number
        {
            return this._scale_scope;
        }
        public set scale_scope(val:number)
        {
            this._scale_scope=val;
        }
        
        private onDown(){
            this._owner.scale(this._scale_scope,this._scale_scope);
            this._owner.once(laya.events.Event.MOUSE_UP,this,this.onUP);
            this._owner.once(laya.events.Event.MOUSE_OUT,this,this.onUP);
        }

        private onUP(){
            this._owner.scale(1,1);
        }

      constructor(){
      }
    }
}