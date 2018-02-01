var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./PiPeiView", "../../../mbase/base/MViewModel"], function (require, exports, PiPeiView_1, MViewModel_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @description 匹配界面
     * @author wangyz
     * @export
     * @class PiPeiVM
     * @extends {base.MViewModel}
     */
    var PiPeiVM = /** @class */ (function (_super) {
        __extends(PiPeiVM, _super);
        function PiPeiVM() {
            var _this = _super.call(this) || this;
            _this.setAtlasName = "1";
            _this.setClass = PiPeiView_1.PiPeiView;
            _this.setViewPath = "pipei/PiPeiView";
            return _this;
        }
        PiPeiVM.prototype.cancelPiPei = function () {
            this.sendData(16778282, [0]);
            this.closeNow();
        };
        PiPeiVM.prototype.onCloseMe = function () {
            if (this.playerData.queueRoomType == 0) {
                this.closeNow();
            }
        };
        PiPeiVM.prototype.eventInit = function () {
            //    this.regist("client_HoldemAgent_enterDeck",this.onCloseMe);
            this.regist("server_Client_syncProperty_Player_queueRoomType", this.onCloseMe);
        };
        return PiPeiVM;
    }(MViewModel_1.MViewModel));
    exports.PiPeiVM = PiPeiVM;
});
//# sourceMappingURL=PiPeiVM.js.map