class SSend{
        private _method_id:number;

        public set method_id(val:number){
            this._method_id = val;

            this._method = RpcDef.getMethodByID(val);
        }

        public get method():any{
            return this._method;
        }

        private _method:any;

        public args:any[];

        public e_id:number = 0;

        public sendClass:string = "";

        public toString():string{
            return new Date()["format"]("dd-hh:mm:ss,S") + " 发送->" + this.sendClass + "->" +this._method_id + "->" +this._method["name"] + " {" + this.args +"}";
        }

        constructor(){

        }
    }
