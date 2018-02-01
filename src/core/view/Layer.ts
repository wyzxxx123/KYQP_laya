class Layer{
        //场景层
        public static SCENE_LAYER:laya.ui.Component;

        //特效层
        public static EFFECT_LAYER:laya.ui.Component;

        //遮罩层，触发关闭界面操作
        public static WINDOW_LAYER:laya.ui.Component;

        //动画层
        public static TOP_LAYER:laya.ui.Component;

        constructor(){

            Layer.SCENE_LAYER = new laya.ui.Component();
            Layer.SCENE_LAYER.width = Laya.stage.width;
            Layer.SCENE_LAYER.height = Laya.stage.height;
            // Layer.SCENE_LAYER.mouseEnabled = false;

            Layer.EFFECT_LAYER = new laya.ui.Component();
            Layer.EFFECT_LAYER.width = Laya.stage.width;
            Layer.EFFECT_LAYER.height = Laya.stage.height;
            Layer.EFFECT_LAYER.mouseEnabled = false;

            Layer.WINDOW_LAYER = new laya.ui.Component();
            Layer.WINDOW_LAYER.width = Laya.stage.width;
            Layer.WINDOW_LAYER.height = Laya.stage.height;
            Layer.WINDOW_LAYER.mouseEnabled = false;

            Layer.TOP_LAYER = new laya.ui.Component();
            Layer.TOP_LAYER.width = Laya.stage.width;
            Layer.TOP_LAYER.height = Laya.stage.height;
            Layer.TOP_LAYER.mouseEnabled = false;

            Laya.stage.addChild(Layer.SCENE_LAYER);
            Laya.stage.addChild(Layer.EFFECT_LAYER);
            Laya.stage.addChild(Layer.WINDOW_LAYER);
            Laya.stage.addChild(Layer.TOP_LAYER);

            
        }
    }
