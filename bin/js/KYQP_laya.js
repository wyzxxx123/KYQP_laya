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
        Laya.stage.screenMode = "horizontal";
        // Laya.stage.scaleMode = "fixedheight";
        Laya.stage.scaleMode = "exactfit";
        Laya.stage.mouseEnabled = false;
        //调用DebugPanel调试面板
        // Laya.DebugPanel.init();
        //调用DebugTool调试面板
        // Laya.DebugTool.init();
        new RegistClass();
        new mbase.base.MLayer();
        this.localInit();
        core.net.SocketManager.ins.connect(GameConfig.SVR_HOST, GameConfig.SVR_PORT);
        // Laya.loader.load([{ url: "res/atlas/gamehall/effect/logo.atlas", type: Loader.ATLAS }]);
        Laya.loader.load([{ url: "res/atlas/public.atlas", type: Loader.ATLAS },
            { url: "res/atlas/winTitle.atlas", type: Loader.ATLAS },
            { url: "res/atlas/bitmapFont.atlas", type: Loader.ATLAS },
        ], Handler.create(this, this.onLoadComplete));
    }
    onRmoeve() {
        if (this._aa.parent) {
            // this._aa.mask_test.getChildByName("box_info").getChildByName("box_head")["mask"] = null;
            // this._aa.mask_test.img_mask._renderType = Laya.RenderSprite.MASK;
            // this._aa.mask_test.img_mask = null;
            core.view.Layer.SCENE_LAYER.removeChild(this._aa);
        }
        else {
            // this._aa.mask_test.getChildByName("box_info").getChildByName("box_head")["mask"] = this._aa.mask_test.getChildByName("box_info").getChildByName("img_mask")
            // this._aa.mask_test.img_mask._renderType = 1;
            // this._aa.mask_test.img_mask._renderType = Laya.RenderSprite.MASK;
            // this._aa.mask_test.img_mask.skin = "dzpk/gameScene/headbiankuang.png";
            core.view.Layer.SCENE_LAYER.addChild(this._aa);
            // this._aa.img_bg.visible = true;
        }
    }
    onLoadComplete() {
        // this._aa = new module.dzpk.scene.DZPKSceneView(null);
        // this._aa = new ui.game_dzpk.TestVSUI();
        // this._aa.vs.max = 100;
        // this._aa.vs.min = 1;
        // this._aa.vs.value = 100;
        // this._aa.x = 500;
        // this._aa.y = 100;
        // core.view.Layer.SCENE_LAYER.addChild(this._aa);
        // Laya.timer.loop(1000,this,this.onRmoeve);
        // let list = [{seatNO:1,getScoreCount:100,cardType:2,bet:100},
        // {seatNO:2,getScoreCount:100,cardType:2,bet:100},{seatNO:6,getScoreCount:100,cardType:2,bet:100},
        // {seatNO:3,getScoreCount:100,cardType:2,bet:100},{seatNO:7,getScoreCount:100,cardType:2,bet:100},
        // {seatNO:4,getScoreCount:100,cardType:2,bet:100},{seatNO:8,getScoreCount:100,cardType:2,bet:100},
        // {seatNO:5,getScoreCount:100,cardType:2,bet:100},{seatNO:9,getScoreCount:100,cardType:2,bet:100}];
        // aa.showResults(list);
        // aa.updataOperatePanel(1);
        // for(let i = 0;i < list.length;i++){
        //     list[i]["action"] = 8;
        //     aa.showPlay(list[i]);
        // }
        //  33,7,20,27,49 
        // [f_id:50332950,event:client_HoldemDeck_showdown,
        // holeCards:{0:{seatNO:2,cards:{0:47,1:50}},
        // 1:{seatNO:4,cards:{0:3,1:18}},
        // 2:{seatNO:7,cards:{0:5,1:9}},
        // 3:{seatNO:9,cards:{0:32,1:11}}},
        // bestHands:{0:{seatNO:2,type:4,cards:{0:33,1:7,2:20,3:50,4:49}},
        // 1:{seatNO:4,type:4,cards:{0:33,1:7,2:20,3:49,4:18}},
        // 2:{seatNO:7,type:4,cards:{0:33,1:7,2:20,3:49,4:9}},
        // 3:{seatNO:9,type:4,cards:{0:33,1:7,2:20,3:11,4:49}}},
        // winner:{0:{seatNO:2,order:1,chip:200},1:{seatNO:9,order:1,chip:200}}]
        // core.CFun.dialog();
    }
    localInit() {
        core.CFun.playMusic("sounds/hall/hall_bg.mp3");
        let music = core.CFun.getLSItem(StorageKeys.musicValue + "last", "Number");
        let sound = core.CFun.getLSItem(StorageKeys.soundValue + "last", "Number");
        core.CFun.musicV = music * 0.01;
        core.CFun.soundV = sound * 0.01;
    }
}
new GameMain();
//# sourceMappingURL=KYQP_laya.js.map