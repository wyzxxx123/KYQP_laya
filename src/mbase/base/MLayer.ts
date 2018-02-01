import { MVMManager } from './MVMManager';
export class MLayer extends Layer{

        private _vm_manager:MVMManager;
        constructor(){
            super();

            this._vm_manager = new MVMManager();

            Layer.WINDOW_LAYER.on(Laya.Event.CLICK,this,this.onCloseWindows);
        }

        private onCloseWindows(){
            this._vm_manager.closeWindow();
        }
    }
