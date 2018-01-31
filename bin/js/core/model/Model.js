define(["require", "exports", "../SendHandel", "../event/EventManager"], function (require, exports, SendHandel_1, EventManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @description MODEL数据层
     * @author wangyz
     * @export
     * @class Model
     */
    class Model extends SendHandel_1.SendHandel {
        constructor() {
            super();
            this._eventManager = EventManager_1.EventManager.ins;
            this.recvInit();
        }
        regist(type, listener) {
            this._eventManager.on(type, listener, this);
        }
        proChange(type, data) {
            this._eventManager.dispatch(type, data);
        }
        recvInit() {
        }
    }
    exports.Model = Model;
});
//# sourceMappingURL=Model.js.map