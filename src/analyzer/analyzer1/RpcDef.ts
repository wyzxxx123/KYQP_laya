class RpcDef{

        public static getTypeReader( type:number|string ):Function
		{
			let f = this._type_readers[type];
			if(!f) CFun.throw("getTypeReader的"+type+"不存在");
			return f;
		}

		/**
		 * 获取类型写入方法
		 * @param type	类型ID或类型名
		 * @return		类型写入方法，格式为：function( data:ByteArray, val:any ):void
		 */
		public static getTypeWriter( type:number|string ):Function
		{
			let f = this._type_writers[type];
			if(!f) CFun.throw("getTypeWriter的"+type+"不存在");
			return f;
		}

        public static getMethodByID(id:number):Object{
            let o = this._method_id[id];
            if(!o) CFun.throw("getMethodByID的"+id+"不存在");
            return o;
        }

		public static getModelClassByID(id:number):any{
			let m = this._class_id[id];
            if(!m) CFun.throw("getModelClassByID的"+id+"不存在");
            return m;
		}

		public static getProByID(id:number):any{
			let p = this._pro_id[id];
            if(!p) {
				CFun.log("getProByID的"+id+"不存在");//CFun.throw("getProByID的"+id+"不存在");
			}
            return p;
		}

		/**
		 * 创建指定类型的结构体
		 * @param type	类型ID或类型名
		 * @return		成功则返回结构体对象，否则返回null
		 */
		public static newStruct( type:number|string ):Struct
		{
			var def:TypeDef = this._type_defs[type];
			if (def && def.id >= RpcDef.STRUCT_BASE_ID)
			{
				return Struct.createNew(def);
			}
			return null;
		}

		/**
		 * 创建指定项类型的列表
		 * @param type	类型ID或类型名
		 * @return		成功则返回列表对象，否则返回null
		 */
		public static newArray( type:number|string ):TypeArray
		{
			var def:TypeDef = this._type_defs[type];
			if (def)
			{
				return new TypeArray(def);
			}
			return null;
		}

		/**
		 * 版本编号
		 */		
		public static get version():number
		{
			return this._version;
		}

        private static STRUCT_BASE_ID:number = 20;						//结构体类型起始ID
        private static _type_writers:{[key:string]:Function};					//类型写入方法表：{类型ID或类型名: 写入方法}
		private static _type_readers:{[key:string]:Function};					//类型读取方法表：{类型ID或类型名: 读取方法}
		private static _type_defs:{[key:string]:TypeDef};						//类型定义映射表：{类型ID或类型名: 类型定义}
		private static _class_props:{[key:string]:{[key:string]:PropDef}};				//类属性映射表：{类名: {属性ID或属性名: 属性定义}}
        
        private static _method_id:Object;
		private static _class_id:Object;
		private static _pro_id:Object;
		private static _version:number;
        private _dump:any;
        constructor(){
            this._dump = Dump;

			RpcDef._version = this._dump.Digi;
            RpcDef._type_writers= {};
			RpcDef._type_readers= {};
			RpcDef._type_defs= {};

            RpcDef._method_id = {};
			RpcDef._class_id = {};
			RpcDef._class_props = {};
			RpcDef._pro_id = {};

			this.initDump();
        }

        private initDump(){
            let arr_method = this._dump["MethodList"];
            if(!arr_method) CFun.throw("dump中的MethodList不存在");
			let i,tobj,len = arr_method.length;
			for(i = 0;i < len;i++){
				tobj = arr_method[i];
				RpcDef._method_id[tobj["id"]] = tobj;
			}

            let arr_type = this._dump["TypeList"];
            if(!arr_type) CFun.throw("dump中的TypeList不存在");
			len = arr_type.length;
			for(i = 0;i < len;i++){
				let def:TypeDef = new TypeDef(arr_type[i]);
				RpcDef._type_defs[def.id] = RpcDef._type_defs[def.name] = def;

				var type:string = def.id < RpcDef.STRUCT_BASE_ID ? def.name : "struct";
				var writer:Function = (RpcType[type + "Writer"] as Function).bind(RpcType);
				var reader:Function = (RpcType[type + "Reader"] as Function).bind(RpcType);
				RpcDef._type_writers[def.id] = writer;
				RpcDef._type_writers[def.name] = writer;
				RpcDef._type_readers[def.id] = reader;
				RpcDef._type_readers[def.name] = reader;
			}

			let arr_enter = this._dump["EntityList"];
			if(!arr_enter) CFun.throw("dump中的EntityList不存在");
			len = arr_enter.length;
			for(i = 0;i < len;i++){
				tobj = arr_enter[i];
				RpcDef._class_id[tobj.id] = tobj.className;
			}

			let arr_pros = this._dump["PropList"];
			if(!arr_pros) CFun.throw("dump中的PropList不存在");
			len = arr_pros.length;
			for(i = 0;i < len;i++){
				tobj = arr_pros[i];
				if (tobj.flag != "CLIENT" && tobj.flag != "ALLCLIENTS") continue;
				var def:PropDef = new PropDef(tobj);
				RpcDef._pro_id[def.id] = def;
				if (!RpcDef._class_props[def.className])
				{
					RpcDef._class_props[def.className] = {};
				}
				RpcDef._class_props[def.className][def.id] = def;
				RpcDef._class_props[def.className][def.name] = def;
			}
		}
    }
