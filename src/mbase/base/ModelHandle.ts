import { MModel } from './MModel';
import { ModelManager } from '../../core/model/ModelManager';
import { Analyzer } from '../../analyzer/analyzer1/Analyzer';
import { RpcDef } from '../../analyzer/analyzer1/RpcDef';
import { CFun } from '../../core/CFun';
import { RpcType } from '../../analyzer/analyzer1/RpcType';
import { PropDef } from '../../analyzer/analyzer1/PropDef';
import { EventManager } from '../../core/event/EventManager';
    export class ModelHandle extends MModel{
        protected _mManager:ModelManager;


        public networkTime:number = 0;
        public serverTime:number = 0;
        public latacy:number = 0;

        //当前服务器时间
        public get nowServerTime():number{
            return this.serverTime + this.latacy;
        }

        private _seed:number = 0;
        public set seed(val:number){
            this._seed = val;
            Analyzer.seed = val;
        }

        public get seed():number{
            return this._seed;
        }

        public data:any;

        public eid:number;

        public tid:number;

        public active:boolean;

        public props:laya.utils.Byte;

        public sn:number;

        public code:number;

        constructor(){
            super();

            this._mManager = ModelManager.ins;
        }

        protected recvInit(){
            this.regist("server_Client_createEntity",this.onCreateModel);
            this.regist("server_Client_syncProperty",this.onSyncProperty);

            this.regist("server_Client_setNetSeed",this.onSetNetSeed);

            this.regist("server_Client_connectError",this.onConnectError);
            this.regist("server_Client_adjustTime",this.onAdjustTime);
        }

        private onAdjustTime(){
            this.sendData(4026532845,[laya.utils.Browser.now()]);
        }

        private onConnectError(){
            if (this.code == 0) {
                this.sendData(4026532849,[0]);
            }
            else{
                if (this.code != 2 && this.code != 4 && this.code != 30) {//封号和顶号需要删除网络连接断开窗口

                }
                else {

                }
            }
        }
        
        private onSetNetSeed(){
            this.sendData(4026532846,[RpcDef.version]);
        }

        private onSyncProperty(){
            if(!this.data) CFun.throw("onSyncProperty中没有需要同步的数据");

            this.eid = RpcType.int48Reader(this.data);
            let cName = ModelManager.ins.getInfoByProValue("e_id",this.eid);
            let dataParams = {"e_id":this.eid};

            let proName = "";
            while ( this.data.bytesAvailable > 0 ) {
                var pid: number = RpcType.vintReader(this.data);
                var def:PropDef = RpcDef.getProByID(pid);
                if (!def) {
                    //若读到未定义的属性，则忽略后面所有数据
                    break;
                }
                proName += ("_" + def.name);
                dataParams[def.name] = def.reader(this.data);
            }

            let str_event = "server_Client_syncProperty_" + cName + proName;
            ModelManager.ins.setPro(cName,dataParams,function(aModel){
                    EventManager.ins.dispatch(str_event,aModel);
                },this,"更新：" +　cName + " [event:" + str_event + ",");
            
            // event.EventManager.ins.dispatch("server_Client_syncProperty_" + cName,aModel);
            
            this.data = null;
        }

        private onCreateModel(){
            // {"name":"eid","type":"int48"},{"name":"tid","type":"int"},{"name":"active","type":"bool"},{"name":"props","type":"ar"}]},

            let cName = null;
            if(this.tid > 0){
                cName = RpcDef.getModelClassByID(this.tid);
            }
            else{
                CFun.throw("onCreateModel中需要的类型不存在");
            }
            let data_params = {"e_id":this.eid};
            if (this.props) {
                this.props.pos = 0;

				while ( this.props.bytesAvailable > 0 ) {
					var pid: number = RpcType.vintReader(this.props);
					var def:PropDef = RpcDef.getProByID(pid);
					if (!def) {
						//若读到未定义的属性，则忽略后面所有数据
						break;
					}
					data_params[def.name] = def.reader(this.props);
				}
			}

            let str_event = "server_Client_createEntity_" + cName;
            ModelManager.ins.setPro(cName,data_params,function(aModel){
                    EventManager.ins.dispatch(str_event,aModel);
                },this,"创建：" +　cName + "[event:" + str_event + ",");
            
            this.eid = 0;
            this.tid = 0;
            this.active = false;
            if(this.props){
                this.props.clear();
                this.props.pos = 0;
                this.props = null;
            }
        }
    }
