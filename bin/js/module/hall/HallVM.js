define(["require", "exports", "../../mbase/base/MViewModel", "../../mbase/data/Player", "./HallView", "../../core/ExUtils", "../../core/CFun"], function (require, exports, MViewModel_1, Player_1, HallView_1, ExUtils_1, CFun_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @description 大厅界面
     * @author wangyz
     * @export
     * @class HallVM
     * @extends {base.MViewModel}
     */
    class HallVM extends MViewModel_1.MViewModel {
        onChangeSexFace(recv) {
            this.view.viewInit(recv);
        }
        gotoScene(scene) {
            let serverid = parseInt(scene.substr(6));
            this.sendData(16778280, [serverid]);
        }
        showAvaterChose() {
            this.showOther("avaterChose", this._data);
        }
        showSetting() {
            this.showOther("setting");
        }
        setFullScreen() {
            ExUtils_1.ExUtils.fullScreen();
        }
        //继承的
        eventInit() {
            this.regist("server_Client_syncProperty_Player_sex", this.onChangeSexFace);
            this.regist("server_Client_syncProperty_Player_icon", this.onChangeSexFace);
            this.regist("server_Client_syncProperty_Player_gold", this.onChangeSexFace);
        }
        //继承的
        onShow(recv) {
            super.onShow(this.playerData);
            this.sendData(16778274, []); //getGameList 
            this.sendData(16778269, [Player_1.Player.HALL]); //changeGameType 
            this.sendData(16778275, []); //getGamePlayer 
            if (CFun_1.CFun.DEBUG) {
                if (this.playerData.gold == 0) {
                    this.sendData(16778278, [0]);
                }
            }
        }
        constructor() {
            super();
            this.setAtlasName = "res/atlas/gamehall/mainScene.atlas";
            this.setClass = HallView_1.HallView;
        }
    }
    exports.HallVM = HallVM;
});
//# sourceMappingURL=HallVM.js.map