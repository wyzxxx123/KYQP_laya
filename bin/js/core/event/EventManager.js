define(["require", "exports", "../CFun"], function (require, exports, CFun_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @description 全局事件管理
     * @author wangyz
     * @export
     * @class EventManager
     */
    var EventManager = /** @class */ (function () {
        function EventManager() {
            if (EventManager._instance) {
                CFun_1.CFun.throw("单例！");
            }
            this._dispatcher = new laya.events.EventDispatcher();
        }
        /**
         * 抛出事件
         *
         */
        EventManager.prototype.dispatch = function (type, data) {
            if (data === void 0) { data = null; }
            return this._dispatcher.event(type, data);
        };
        /**
         * 添加事件监听
         */
        EventManager.prototype.on = function (type, listener, caller, args) {
            if (args === void 0) { args = null; }
            this._dispatcher.on(type, caller, listener, args);
        };
        /**
         * 执行1次就自动移除的监听
         */
        EventManager.prototype.once = function (type, listener, caller, args) {
            if (args === void 0) { args = null; }
            this._dispatcher.once(type, caller, listener, args);
        };
        /**
        * 取消事件监听
        */
        EventManager.prototype.off = function (type, listener, caller, once_only) {
            if (once_only === void 0) { once_only = false; }
            this._dispatcher.off(type, caller, listener, once_only);
        };
        Object.defineProperty(EventManager, "ins", {
            get: function () {
                if (!this._instance) {
                    this._instance = new EventManager();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        return EventManager;
    }());
    exports.EventManager = EventManager;
});
//# sourceMappingURL=EventManager.js.map