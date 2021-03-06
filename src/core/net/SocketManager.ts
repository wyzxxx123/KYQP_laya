/**
 * @description socket管理类，通过connect可生成多个socket连接
 * @author wangyz
 * @export
 * @class SocketManager
 */
class SocketManager{

        //设置一个默认的地址
        public static arr_address:Object[] = [];
        /*
        main是URL或者host
        如果sub不存在，则是连接url
        */
        public connect(main:string,sub:string=null){
            if(SocketManager.arr_address.length > 0){
                for(let i = 0;i < SocketManager.arr_address.length;i++){
                    if(SocketManager.arr_address[i].hasOwnProperty("main")){
                        if(SocketManager.arr_address[i]["main"] == main && SocketManager.arr_address[i]["sub"] == sub){

                        }
                        else{
                            SocketManager.arr_address.push({"main":main,"sub":sub});
                        }
                    }
                }
            }
            else{
                SocketManager.arr_address.push({"main":main,"sub":sub});
            }
            
            let tuple = this.getWSBykey(main,sub);
            let ws = tuple[0];
            let key = tuple[1];
            if(!ws){
                ws = new laya.net.Socket();
                ws.endian = Laya.Byte.LITTLE_ENDIAN;
                this._dic_ws[key] = ws;

                ws.on(laya.events.Event.MESSAGE,ws,this.onMessage);
                ws.on(laya.events.Event.OPEN, ws,this.onOpen);
                ws.on(laya.events.Event.CLOSE,ws, this.onClose);
                ws.on(laya.events.Event.ERROR, ws,this.onError);
            }
            else{
                ws = this._dic_ws[key];
            }

            if(!sub){
                ws.connectByUrl(main);
            }
            else{
                ws.connect(main, Number(sub));
            }
        }

        /**
         * @description 清除socket连接
         * @author wangyz
         * @param {string} main 连接地址(url\host)
         * @param {string} [sub] 连接地址(port)
         * @memberof SocketManager
         */
        public destroy(main:string,sub:string=null){
            let tuple = this.getWSBykey(main,sub);
            let ws = tuple[0];
            let key = tuple[1];
            if(ws){
                ws.offAll();

                ws.cleanSocket();
                ws = null;
                this._dic_ws[key] = null;
                delete this._dic_ws[key];
            }
            else{
                CFun.throw("正在清除不存在的链接");
            }
        }

        /*
        关闭连接，但是事件和字典没有移除
        */
        public close(main:string,sub:string=null){
            let tuple = this.getWSBykey(main,sub);
            let ws = tuple[0];
            if(ws){
                ws.close();
            }
            else{
                CFun.throw("正在关闭不存在的链接");
            }
        }

        /**
         * 发送数据
         * @param {*} pac 待发送数据
         * @param {string} main 连接地址(url\host)
         * @param {string} [sub] 连接地址(port)
         * @memberof SocketManager 
         */
        public send(pac:any,main:string,sub:string=null){
            let tuple = this.getWSBykey(main,sub);
            let ws = tuple[0];
            let key = tuple[1];

            if(!ws){
                CFun.throw("正在向不存在的" + key +"链接发送消息");
            }

            let flushData = AnalyzeData.ins.analyzeSend(pac,key);
            ws.send(flushData[1]);

            laya.utils.Pool.recover("tmpByte",flushData[0]);
        }

        private onMessage(msg:any = null){
           let key = SocketManager.ins.getKeyByWS(this);
           let recvData = AnalyzeData.ins.analyzeRecv(msg,key);
        }

        /**
        获取不到key值，把作用域改了
        */
        public getKeyByWS(ws:any):string{
            for(var key in this._dic_ws){
                if(this._dic_ws[key] == ws){
                    return key;
                }
            }

            return "";
        }

        private getWSBykey(main:string,sub:string=null):[laya.net.Socket,string]{
            let key = "";
            if(!sub) key = main + "," + sub;
            else key = main;

            return [this._dic_ws[key],key];
        }

        private _dic_ws: { [key: string]: laya.net.Socket};
        constructor(){
            this._dic_ws = {};
        }
        private static _instance:SocketManager;
        public static get ins(): SocketManager {
            if (!this._instance) {
                this._instance = new SocketManager();
            }
            return this._instance;
        }
        private onOpen(event: any = null){
        }

        private onClose(event: any = null){
            CFun.log("连接关闭："+event);
        }

        private onError(event: any = null){
            CFun.log("连接错误："+ event);
        }
    }
