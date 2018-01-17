// 程序入口
var Handler = laya.utils.Handler;
var Loader = laya.net.Loader;
class GameMain {
    constructor() {
        // if(core.CFun.SCREEN_PRINT){
        //     Laya.init(600,400,Laya.Log);
        // }
        // else{
        Laya.init(1280, 720);
        // }
        Laya.stage.scaleMode = "exactfit";
        new RegistClass();
        new module.hall.HallVM();
        new module.dzpk.DZPKRoomsVM();
        new module.dzpk.DZPKSceneVM();
        core.net.SocketManager.ins.connect(GameConfig.SVR_HOST, GameConfig.SVR_PORT);
        // let aaa = new core.view.VisibleView("res/atlas/comp.atlas",testViewUI,Laya.stage);
        // aaa.showME();
        // core.model.ModelInit.ins.initModule("TestModel");
    }
}
new GameMain();
//# sourceMappingURL=GameMain.js.map