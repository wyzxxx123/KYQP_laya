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
define(["require", "exports", "./HallView", "../../mbase/data/Player", "../../mbase/base/MViewModel"], function (require, exports, HallView_1, Player_1, MViewModel_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @description 大厅界面
     * @author wangyz
     * @export
     * @class HallVM
     * @extends {base.MViewModel}
     */
    var HallVM = /** @class */ (function (_super) {
        __extends(HallVM, _super);
        function HallVM() {
            var _this = _super.call(this) || this;
            _this.setAtlasName = "res/atlas/gamehall/mainScene.atlas";
            _this.setViewPath = "game_hall/GameHall";
            _this.setClass = HallView_1.HallView;
            return _this;
        }
        HallVM.prototype.onChangeSexFace = function (recv) {
            this.view.viewInit(recv);
        };
        HallVM.prototype.gotoScene = function (scene) {
            var serverid = parseInt(scene.substr(6));
            this.sendData(16778280, [serverid]);
        };
        HallVM.prototype.showAvaterChose = function () {
            this.showOther("avaterChose", this._data);
        };
        HallVM.prototype.showSetting = function () {
            this.showOther("setting");
        };
        HallVM.prototype.setFullScreen = function () {
            ExUtils.fullScreen();
        };
        //继承的
        HallVM.prototype.eventInit = function () {
            this.regist("server_Client_syncProperty_Player_sex", this.onChangeSexFace);
            this.regist("server_Client_syncProperty_Player_icon", this.onChangeSexFace);
            this.regist("server_Client_syncProperty_Player_gold", this.onChangeSexFace);
        };
        //继承的
        HallVM.prototype.onShow = function (recv) {
            _super.prototype.onShow.call(this, this.playerData);
            this.sendData(16778274, []); //getGameList 
            this.sendData(16778269, [Player_1.Player.HALL]); //changeGameType 
            this.sendData(16778275, []); //getGamePlayer 
            if (CFun.DEBUG) {
                if (this.playerData.gold == 0) {
                    this.sendData(16778278, [10000]);
                }
            }
        };
        return HallVM;
    }(MViewModel_1.MViewModel));
    exports.HallVM = HallVM;
});
//# sourceMappingURL=HallVM.js.map