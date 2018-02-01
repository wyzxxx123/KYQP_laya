define(["require", "exports", "./GameConfig", "./mbase/base/MLayer", "./RegistClass"], function (require, exports, GameConfig_1, MLayer_1, RegistClass_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // 程序入口
    var Handler = laya.utils.Handler;
    var Loader = laya.net.Loader;
    var GameMain = /** @class */ (function () {
        function GameMain() {
            // if(CFun.SCREEN_PRINT){
            //     Laya.init(600,400,Laya.Log);
            // }
            // else{
            Laya.init(1280, 720);
            // }
            Laya.stage.screenMode = "horizontal";
            // Laya.stage.scaleMode = "fixedheight";
            Laya.stage.scaleMode = "exactfit";
            Laya.stage.mouseEnabled = false;
            //调用DebugPanel调试面板
            // Laya.DebugPanel.init();
            //调用DebugTool调试面板
            // Laya.DebugTool.init();
            new MCView(null);
            new RegistClass_1.RegistClass();
            new MLayer_1.MLayer();
            this.localInit();
            SocketManager.ins.connect(GameConfig_1.GameConfig.SVR_HOST, GameConfig_1.GameConfig.SVR_PORT);
            Laya.loader.load([{ url: "res/atlas/public.atlas", type: Loader.ATLAS },
                { url: "res/atlas/winTitle.atlas", type: Loader.ATLAS },
                { url: "res/atlas/bitmapFont.atlas", type: Loader.ATLAS },
                { url: "js/ui/layaUI.max.all.js", type: Loader.TEXT },
            ], Handler.create(this, this.onLoadComplete));
        }
        GameMain.prototype.onLoadComplete = function () {
            // let m = Laya.loader.getRes("js/ui/layaUI.max.all.js");
            // console.log(m);
            // let m = require(["js/module/dzpk/help/DZPKHelpVM"]);
            // let c = new m();
            // console.log("");
            // CFun.parsingPath(1);
        };
        GameMain.prototype.localInit = function () {
            CFun.playMusic("sounds/hall/hall_bg.mp3");
            var music = CFun.getLSItem(StorageKeys.musicValue + "last", "Number");
            var sound = CFun.getLSItem(StorageKeys.soundValue + "last", "Number");
            if (music >= 0) {
                CFun.musicV = music * 0.01;
            }
            if (sound >= 0) {
                CFun.soundV = sound * 0.01;
            }
        };
        return GameMain;
    }());
    new GameMain();
});
//# sourceMappingURL=KYQP_laya.js.map