import { StorageKeys } from './StorageKeys';
import { RegistClass } from './module/RegistClass';
import { GameConfig } from './GameConfig';
import { SocketManager } from './core/net/SocketManager';
import { MLayer } from './mbase/base/MLayer';
import { CFun } from './core/CFun';
// 程序入口
import Handler = laya.utils.Handler;
import Loader = laya.net.Loader;
export class GameMain {
    public static appName: string;

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

        new RegistClass();
        new MLayer();

        this.localInit();

        SocketManager.ins.connect(GameConfig.SVR_HOST, GameConfig.SVR_PORT);

        Laya.loader.load([{ url: "res/atlas/public.atlas", type: Loader.ATLAS },
        { url: "res/atlas/winTitle.atlas", type: Loader.ATLAS },
        { url: "res/atlas/bitmapFont.atlas", type: Loader.ATLAS }
        ],
            Handler.create(this, this.onLoadComplete));
    }
    private onLoadComplete() {

    }

    private localInit() {
        CFun.playMusic("sounds/hall/hall_bg.mp3");
        let music = CFun.getLSItem(StorageKeys.musicValue + "last", "Number");
        let sound = CFun.getLSItem(StorageKeys.soundValue + "last", "Number");
        CFun.musicV = music * 0.01;
        CFun.soundV = sound * 0.01;
    }
}
new GameMain();