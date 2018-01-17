var core;
(function (core) {
    var event;
    (function (event) {
        /**
         * @description 全局事件管理
         * @author wangyz
         * @export
         * @class EventManager
         */
        class EventManager {
            constructor() {
                if (EventManager._instance) {
                    core.CFun.throw("单例！");
                }
                this._dispatcher = new laya.events.EventDispatcher();
            }
            /**
             * 抛出事件
             *
             */
            dispatch(type, data = null) {
                return this._dispatcher.event(type, data);
            }
            /**
             * 添加事件监听
             */
            on(type, listener, caller, args = null) {
                this._dispatcher.on(type, caller, listener, args);
            }
            /**
             * 执行1次就自动移除的监听
             */
            once(type, listener, caller, args = null) {
                this._dispatcher.once(type, caller, listener, args);
            }
            /**
            * 取消事件监听
            */
            off(type, listener, caller, once_only = false) {
                this._dispatcher.off(type, caller, listener, once_only);
            }
            static get ins() {
                if (!this._instance) {
                    this._instance = new EventManager();
                }
                return this._instance;
            }
        }
        event.EventManager = EventManager;
    })(event = core.event || (core.event = {}));
})(core || (core = {}));
//# sourceMappingURL=EventManager.js.map