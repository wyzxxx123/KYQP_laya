import { CFun } from '../CFun';
    export class DialogView extends laya.ui.Dialog{

        constructor(){
            super();
        }

        createChildren():void {
            super.createChildren();
            let path = CFun.parsingPath(this.constructor);
            console.log(path);
            this.createView(Laya.loader.getRes(path));
        }
    }
