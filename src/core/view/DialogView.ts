module mview{
    export class DialogView extends laya.ui.Dialog{

        constructor(){
            super();
        }

        // createChildren():void {
        //     super.createChildren();
        //     let path = CFun.parsingPath(this.constructor);
        //     console.log(path);
        //     this.createView(Laya.loader.getRes(path));
        // }

        loadUI(path:string):void{
            this.createView(Laya.loader.getRes(path + ".json"));
            // this.createView(CFun.parsingPath(this.constructor.));
            super.loadUI(path);
        }
    }
}
