    export class DialogView extends laya.ui.Dialog{

        constructor(){
            super();
        }

        private _my_path:string;
        protected loadUI(path: string): void{
            super.loadUI(path);

            this._my_path = path;
        }

        createChildren():void {
            super.createChildren();

            this.createView(Laya.loader.getRes(this._my_path + ".json"));
        }
    }
