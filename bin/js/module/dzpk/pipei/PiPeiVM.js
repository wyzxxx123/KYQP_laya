define(["require", "exports", "../../../mbase/base/MViewModel", "./PiPeiView"], function (require, exports, MViewModel_1, PiPeiView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @description 匹配界面
     * @author wangyz
     * @export
     * @class PiPeiVM
     * @extends {base.MViewModel}
     */
    class PiPeiVM extends MViewModel_1.MViewModel {
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
        constructor() {
            super();
            this.setAtlasName = "1";
            this.setClass = PiPeiView_1.PiPeiView;
        }
    }
    exports.PiPeiVM = PiPeiVM;
});
//# sourceMappingURL=PiPeiVM.js.map