define(["require", "exports", "./StorageKeys", "./module/RegistClass", "./GameConfig", "./core/net/SocketManager", "./mbase/base/MLayer", "./core/CFun"], function (require, exports, StorageKeys_1, RegistClass_1, GameConfig_1, SocketManager_1, MLayer_1, CFun_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // 程序入口
    var Handler = laya.utils.Handler;
    var Loader = laya.net.Loader;
    class GameMain {
        constructor() {
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
            console.log("aaaaaaaa");
            new RegistClass_1.RegistClass();
            new MLayer_1.MLayer();
            this.localInit();
            SocketManager_1.SocketManager.ins.connect(GameConfig_1.GameConfig.SVR_HOST, GameConfig_1.GameConfig.SVR_PORT);
            Laya.loader.load([{ url: "res/atlas/public.atlas", type: Loader.ATLAS },
                { url: "res/atlas/winTitle.atlas", type: Loader.ATLAS },
                { url: "res/atlas/bitmapFont.atlas", type: Loader.ATLAS }
            ], Handler.create(this, this.onLoadComplete));
        }
        onLoadComplete() {
        }
        localInit() {
            CFun_1.CFun.playMusic("sounds/hall/hall_bg.mp3");
            let music = CFun_1.CFun.getLSItem(StorageKeys_1.StorageKeys.musicValue + "last", "Number");
            let sound = CFun_1.CFun.getLSItem(StorageKeys_1.StorageKeys.soundValue + "last", "Number");
            CFun_1.CFun.musicV = music * 0.01;
            CFun_1.CFun.soundV = sound * 0.01;
        }
    }
    exports.GameMain = GameMain;
    new GameMain();
});
//# sourceMappingURL=KYQP_laya.js.map