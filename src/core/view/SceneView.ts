import { ComView } from './ComView';
    export class SceneView extends ComView{

        protected layerInit(){
            this.centerX = 0;
            this.centerY = 0;
        }

        constructor(){
            super();
            this._view_type = ComView.SCENE;
        }
    }
