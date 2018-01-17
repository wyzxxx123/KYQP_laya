module mbase.base{
    export class MEffectView extends core.view.EffectView{

        private _dzpk:module.dzpk.scene.DZPKEffect;
        public get dzpk():module.dzpk.scene.DZPKEffect{
            if(!this._dzpk){
                this._dzpk = new module.dzpk.scene.DZPKEffect();
                this._effectLayer.addChild(this._dzpk);
            }
            return this._dzpk;
        }

        constructor(){
            super();
            if(MEffectView._instance){
                core.CFun.throw("单例！");
            }
        }

        private static _instance: MEffectView;
        public static get ins(): MEffectView {
            if(!this._instance) {
                this._instance = new MEffectView();
            }
            return this._instance;
        }
    }
}