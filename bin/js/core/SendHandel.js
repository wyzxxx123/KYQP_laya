var core;
(function (core) {
    class SendHandel {
        constructor() {
            //设置个默认连接，子类需要给其他链接发送数据可改
        }
        send(data) {
            core.net.SocketManager.ins.send(data, this._host == undefined ? core.net.SocketManager.arr_address[0]["main"] : this._host, this._port == undefined ? core.net.SocketManager.arr_address[0]["sub"] : this._port);
        }
    }
    core.SendHandel = SendHandel;
})(core || (core = {}));
//# sourceMappingURL=SendHandel.js.map