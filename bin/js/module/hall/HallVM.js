var module;
(function (module) {
    var hall;
    (function (hall) {
        /**
         * @description 大厅界面
         * @author wangyz
         * @export
         * @class HallVM
         * @extends {base.MViewModel}
         */
        class HallVM extends mbase.base.MViewModel {
            constructor() {
                super();
                this.setAtlasName = "res/atlas/gamehall/mainScene.atlas";
                this.setClass = hall.HallView;
            }
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
                core.ExUtils.fullScreen();
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
                this.sendData(16778269, [mbase.data.Player.HALL]); //changeGameType 
                this.sendData(16778275, []); //getGamePlayer 
                if (core.CFun.DEBUG) {
                    if (this.playerData.gold == 0) {
                        this.sendData(16778278, [0]);
                    }
                }
            }
        }
        hall.HallVM = HallVM;
    })(hall = module.hall || (module.hall = {}));
})(module || (module = {}));
//# sourceMappingURL=HallVM.js.map