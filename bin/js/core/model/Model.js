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
define(["require", "exports", "../SendHandel", "../event/EventManager"], function (require, exports, SendHandel_1, EventManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @description MODEL数据层
     * @author wangyz
     * @export
     * @class Model
     */
    var Model = /** @class */ (function (_super) {
        __extends(Model, _super);
        function Model() {
            var _this = _super.call(this) || this;
            _this._eventManager = EventManager_1.EventManager.ins;
            _this.recvInit();
            return _this;
        }
        Model.prototype.regist = function (type, listener) {
            this._eventManager.on(type, listener, this);
        };
        Model.prototype.proChange = function (type, data) {
            this._eventManager.dispatch(type, data);
        };
        Model.prototype.recvInit = function () {
        };
        return Model;
    }(SendHandel_1.SendHandel));
    exports.Model = Model;
});
//# sourceMappingURL=Model.js.map