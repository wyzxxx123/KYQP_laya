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
var ModelHandle = /** @class */ (function (_super) {
    __extends(ModelHandle, _super);
    function ModelHandle() {
        var _this = _super.call(this) || this;
        _this.networkTime = 0;
        _this.serverTime = 0;
        _this.latacy = 0;
        _this._seed = 0;
        _this._mManager = ModelManager.ins;
        return _this;
    }
    Object.defineProperty(ModelHandle.prototype, "nowServerTime", {
        //当前服务器时间
        get: function () {
            return this.serverTime + this.latacy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModelHandle.prototype, "seed", {
        get: function () {
            return this._seed;
        },
        set: function (val) {
            this._seed = val;
            StaticData.seed = val;
        },
        enumerable: true,
        configurable: true
    });
    ModelHandle.prototype.recvInit = function () {
        this.regist("server_Client_createEntity", this.onCreateModel);
        this.regist("server_Client_syncProperty", this.onSyncProperty);
        this.regist("server_Client_setNetSeed", this.onSetNetSeed);
        this.regist("server_Client_connectError", this.onConnectError);
        this.regist("server_Client_adjustTime", this.onAdjustTime);
    };
    ModelHandle.prototype.onAdjustTime = function () {
        this.sendData(4026532845, [laya.utils.Browser.now()]);
    };
    ModelHandle.prototype.onConnectError = function () {
        if (this.code == 0) {
            this.sendData(4026532849, [0]);
        }
        else {
            if (this.code != 2 && this.code != 4 && this.code != 30) {
            }
            else {
            }
        }
    };
    ModelHandle.prototype.onSetNetSeed = function () {
        this.sendData(4026532846, [RpcDef.version]);
    };
    ModelHandle.prototype.onSyncProperty = function () {
        if (!this.data)
            CFun.throw("onSyncProperty中没有需要同步的数据");
        this.eid = RpcType.int48Reader(this.data);
        var cName = ModelManager.ins.getInfoByProValue("e_id", this.eid);
        var dataParams = { "e_id": this.eid };
        var proName = "";
        while (this.data.bytesAvailable > 0) {
            var pid = RpcType.vintReader(this.data);
            var def = RpcDef.getProByID(pid);
            if (!def) {
                //若读到未定义的属性，则忽略后面所有数据
                break;
            }
            proName += ("_" + def.name);
            dataParams[def.name] = def.reader(this.data);
        }
        var str_event = "server_Client_syncProperty_" + cName + proName;
        ModelManager.ins.setPro(cName, dataParams, function (aModel) {
            EventManager.ins.dispatch(str_event, aModel);
        }, this, "更新：" + cName + " [event:" + str_event + ",");
        // event.EventManager.ins.dispatch("server_Client_syncProperty_" + cName,aModel);
        this.data = null;
    };
    ModelHandle.prototype.onCreateModel = function () {
        // {"name":"eid","type":"int48"},{"name":"tid","type":"int"},{"name":"active","type":"bool"},{"name":"props","type":"ar"}]},
        var cName = null;
        if (this.tid > 0) {
            cName = RpcDef.getModelClassByID(this.tid);
        }
        else {
            CFun.throw("onCreateModel中需要的类型不存在");
        }
        var data_params = { "e_id": this.eid };
        if (this.props) {
            this.props.pos = 0;
            while (this.props.bytesAvailable > 0) {
                var pid = RpcType.vintReader(this.props);
                var def = RpcDef.getProByID(pid);
                if (!def) {
                    //若读到未定义的属性，则忽略后面所有数据
                    break;
                }
                data_params[def.name] = def.reader(this.props);
            }
        }
        var str_event = "server_Client_createEntity_" + cName;
        ModelManager.ins.setPro(cName, data_params, function (aModel) {
            EventManager.ins.dispatch(str_event, aModel);
        }, this, "创建：" + cName + " [event:" + str_event + ",");
        this.eid = 0;
        this.tid = 0;
        this.active = false;
        if (this.props) {
            this.props.clear();
            this.props.pos = 0;
            this.props = null;
        }
    };
    return ModelHandle;
}(MModel));
//# sourceMappingURL=ModelHandle.js.map