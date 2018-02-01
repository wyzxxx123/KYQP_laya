
	/**
	 * 类型定义
	 * @author	Fictiony
	 * @version	2017/7/10
	 */	
class TypeDef
	{
		/** 类型ID */
		public id:number;
		/** 类型名 */
		public name:string;
		/** 字段表：{字段名: 字段类型} */
		public defs:{[key:string]:string} = {};
		/** 字段名列表 */
		public fields:string[] = [];
		
		private _info:string;	//定义信息缓存
		
		constructor( def:any )
		{
			this.id		= def.id;
			this.name	= def.name;
			for (var item of def.defs)
			{
				this.fields.push(item.name);
				this.defs[item.name] = item.type;
			}
		}
		
		public toString():string
		{
			if (this._info == null)
			{
				var arr:string[] = [];
				for (var i of this.fields)
				{
					arr.push(i + ":" + this.defs[i]);
				}
				this._info = "<Type " + this.name + " {" + arr.join(",") + "}>";
			}
			return this._info;
		}
	}
