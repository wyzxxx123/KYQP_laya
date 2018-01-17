var module;
(function (module) {
    var dzpk;
    (function (dzpk) {
        var pipei;
        (function (pipei) {
            /**
             * @description 匹配界面
             * @author wangyz
             * @export
             * @class PiPeiVM
             * @extends {base.MViewModel}
             */
            class PiPeiVM extends mbase.base.MViewModel {
                constructor() {
                    super();
                    this.setAtlasName = "1";
                    this.setClass = pipei.PiPeiView;
                }
                cancelPiPei() {
                    this.sendData(16778282, [0]);
                    this.closeNow();
                }
                onCloseMe() {
                    if (this.playerData.queueRoomType == 0) {
                        this.closeNow();
                    }
                }
                eventInit() {
                    //    this.regist("client_HoldemAgent_enterDeck",this.onCloseMe);
                    this.regist("server_Client_syncProperty_Player_queueRoomType", this.onCloseMe);
                }
            }
            pipei.PiPeiVM = PiPeiVM;
        })(pipei = dzpk.pipei || (dzpk.pipei = {}));
    })(dzpk = module.dzpk || (module.dzpk = {}));
})(module || (module = {}));
//# sourceMappingURL=PiPeiVM.js.map