define(["require", "exports", "../CFun"], function (require, exports, CFun_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @description 全局事件管理
     * @author wangyz
     * @export
     * @class EventManager
     */
    class EventManager {
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
        constructor() {
            if (EventManager._instance) {
                CFun_1.CFun.throw("单例！");
            }
            this._dispatcher = new laya.events.EventDispatcher();
        }
        static get ins() {
            if (!this._instance) {
                this._instance = new EventManager();
            }
            return this._instance;
        }
    }
    exports.EventManager = EventManager;
});
//# sourceMappingURL=EventManager.js.map