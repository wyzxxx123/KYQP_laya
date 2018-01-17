var module;
(function (module) {
    var data;
    (function (data) {
        class ModelHandle extends module.base.MModel {
            constructor() {
                super();
                this.networkTime = 0;
                this.serverTime = 0;
                this.latacy = 0;
                this._seed = 0;
                this._mManager = core.model.ModelManager.ins;
            }
            //当前服务器时间
            get nowServerTime() {
                return this.serverTime + this.latacy;
            }
            set seed(val) {
                this._seed = val;
                analyzer.analyzer1.Analyzer.seed = val;
            }
            get seed() {
                return this._seed;
            }
            recvInit() {
                this.regist("server_Client_createEntity", this.onCreateModel);
                this.regist("server_Client_syncProperty", this.onSyncProperty);
                this.regist("server_Client_setNetSeed", this.onSetNetSeed);
                this.regist("server_Client_connectError", this.onConnectError);
                this.regist("server_Client_adjustTime", this.onAdjustTime);
            }
            onAdjustTime() {
                this.sendData(4026532845, [laya.utils.Browser.now()]);
            }
            onConnectError() {
                if (this.code == 0) {
                    this.sendData(4026532849, [0]);
                }
                else {
                    if (this.code != 2 && this.code != 4 && this.code != 30) {
                    }
                    else {
                    }
                }
            }
            onSetNetSeed() {
                this.sendData(4026532846, [analyzer.analyzer1.RpcDef.version]);
            }
            onSyncProperty() {
                if (this.data) {
                    this.eid = analyzer.analyzer1.RpcType.int48Reader(this.data);
                    let cName = core.model.ModelManager.ins.getInfoByProValue("e_id", this.eid);
                    let data_params = { "e_id": this.eid };
                    while (this.data.bytesAvailable > 0) {
                        var pid = analyzer.analyzer1.RpcType.vintReader(this.data);
                        var def = analyzer.analyzer1.RpcDef.getProByID(pid);
                        if (!def) {
                            //若读到未定义的属性，则忽略后面所有数据
                            break;
                        }
                        data_params[def.name] = def.reader(this.data);
                    }
                    let aModel = core.model.ModelManager.ins.setPro(cName, data_params);
                    core.event.EventManager.ins.dispatch("server_Client_syncProperty_" + cName, aModel);
                    this.data = null;
                }
                else {
                    core.CFun.throw("onSyncProperty中没有需要同步的数据");
                }
            }
            onCreateModel() {
                // {"name":"eid","type":"int48"},{"name":"tid","type":"int"},{"name":"active","type":"bool"},{"name":"props","type":"ar"}]},
                let cName = null;
                if (this.tid > 0) {
                    cName = analyzer.analyzer1.RpcDef.getModelClassByID(this.tid);
                }
                else {
                    core.CFun.throw("onCreateModel中需要的类型不存在");
                }
                let data_params = { "e_id": this.eid };
                if (this.props) {
                    this.props.pos = 0;
                    while (this.props.bytesAvailable > 0) {
                        var pid = analyzer.analyzer1.RpcType.vintReader(this.props);
                        var def = analyzer.analyzer1.RpcDef.getProByID(pid);
                        if (!def) {
                            //若读到未定义的属性，则忽略后面所有数据
                            break;
                        }
                        data_params[def.name] = def.reader(this.props);
                    }
                }
                let aModel = core.model.ModelManager.ins.setPro(cName, data_params);
                core.event.EventManager.ins.dispatch("server_Client_createEntity_" + cName, aModel);
                this.eid = 0;
                this.tid = 0;
                this.active = false;
                if (this.props) {
                    this.props.clear();
                    this.props.pos = 0;
                    this.props = null;
                }
            }
        }
        data.ModelHandle = ModelHandle;
    })(data = module.data || (module.data = {}));
})(module || (module = {}));
//# sourceMappingURL=ModelHandle.js.map