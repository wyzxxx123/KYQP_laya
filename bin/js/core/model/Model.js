var core;
(function (core) {
    var model;
    (function (model) {
        /**
         * @description MODEL数据层
         * @author wangyz
         * @export
         * @class Model
         */
        class Model extends core.SendHandel {
            constructor() {
                super();
                this._eventManager = core.event.EventManager.ins;
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
        model.Model = Model;
    })(model = core.model || (core.model = {}));
})(core || (core = {}));
//# sourceMappingURL=Model.js.map