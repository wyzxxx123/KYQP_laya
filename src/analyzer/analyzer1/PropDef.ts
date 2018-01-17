module analyzer.analyzer1
{
	/**
	 * 属性定义
	 * @author	Fictiony
	 * @version	2017/7/10
	 */	
	export class PropDef
	{
		/** 属性ID */
		public id:number;
		/** 属性名 */
		public name:string;
		/** 所属类名 */
		public className:string;
		/** 属性类型名 */
		public type:string;
		
		private _defVal:any;		//默认值
		private _writer:Function;	//属性写入方法（null表示尚未获取）
		private _reader:Function;	//属性读取方法（null表示尚未获取）
		private _info:string;		//定义信息缓存
		
		constructor( def:any )
		{
			this.id			= def.id;
			this.name		= def.name;
			this.className	= def.className;
			this.type		= def.type;
			this._defVal	= def.defVal;
		}
		
		/**
		 * 默认值
		 */
		public get defVal():any
		{
			switch (this.type)
			{
				case "float2":	return new laya.maths.Point;
				case "array":	return [];
			}
			return this._defVal;
		}
		
		/**
		 * 属性写入方法
		 * @throw TypeError	属性类型未定义则抛出异常
		 */		
		public get writer():Function
		{
			if (!this._writer)
			{
				this._writer = RpcDef.getTypeWriter(this.type);
			}
			if (this._writer == null)
			{
				throw new TypeError("Property writer not found: " + this);
			}
			return this._writer;
		}
		
		/**
		 * 属性读取方法
		 * @throw TypeError	属性类型未定义则抛出异常
		 */		
		public get reader():Function
		{
			if (!this._reader)
			{
				this._reader = RpcDef.getTypeReader(this.type);
			}
			if (this._reader == null)
			{
				throw new TypeError("Property reader not found: " + this);
			}
			return this._reader;
		}
		
		public toString():string
		{
			if (this._info == null)
			{
				this._info = "<Prop " + this.className + "." + this.name + ":" + this.type + ">";
			}
			return this._info;
		}
	}
}
