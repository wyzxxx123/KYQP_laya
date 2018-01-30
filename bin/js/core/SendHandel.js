define(["require", "exports", "./net/SocketManager"], function (require, exports, SocketManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SendHandel = /** @class */ (function () {
        function SendHandel() {
            //设置个默认连接，子类需要给其他链接发送数据可改
        }
        SendHandel.prototype.send = function (data) {
            SocketManager_1.SocketManager.ins.send(data, this._host == undefined ? SocketManager_1.SocketManager.arr_address[0]["main"] : this._host, this._port == undefined ? SocketManager_1.SocketManager.arr_address[0]["sub"] : this._port);
        };
        return SendHandel;
    }());
    exports.SendHandel = SendHandel;
});
//# sourceMappingURL=SendHandel.js.map