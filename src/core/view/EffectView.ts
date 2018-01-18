import { Layer } from './Layer';
    export class EffectView{


        protected _effectLayer:laya.ui.Component;
        constructor(){
            this._effectLayer = Layer.EFFECT_LAYER;
        }
    }
