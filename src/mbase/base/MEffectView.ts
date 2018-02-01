
import { DZPKEffect } from '../../module/dzpk/scene/DZPKEffect';
    export class MEffectView extends EffectView{

        private _dzpk:DZPKEffect;
        public get dzpk():DZPKEffect{
            if(!this._dzpk){
                this._dzpk = new DZPKEffect();
                this._effectLayer.addChild(this._dzpk);
            }
            return this._dzpk;
        }

        constructor(){
            super();
            if(MEffectView._instance){
                CFun.throw("单例！");
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
