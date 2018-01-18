import { TypeDef } from './TypeDef';

	/**
	 * 指定项类型的列表
	 * @author	Fictiony
	 * @version	2017/7/22
	 */	
	export class TypeArray extends Array
	{
		private _type:TypeDef;		//每项的类型定义
		
		constructor( type:TypeDef, arr?:any[] )
		{
			super();
			var t:TypeArray = eval("this");		//因为编译成JS后this会被替换掉造成实例类型错误，因此要重新取this
			t._type = type;
			if (arr && arr.length > 0)
			{
				t.push.apply(t, arr);
			}
			return t;
		}

		/**
		 * 获取项类型定义
		 */
		public get $type():TypeDef
		{
			return this._type;
		}

		/**
		 * 列表连接
		 */
		public concat( ...items:any[] ):any[]
		{
			var new_arr:TypeArray = new TypeArray(this._type, this);
			for (var i of items)
			{
				if (i instanceof Array)
				{
					new_arr.push.apply(new_arr, i);
				}
				else
				{
					new_arr.push(i);
				}
			}
			return new_arr;
		}

		/**
		 * 列表截取
		 */
		public slice( start:number=0, end:number=0xffffff ):any[]
		{
			return new TypeArray(this._type, super.slice(start, end));
		}

		/**
		 * 列表删除插入
		 */
		public splice( start:number ):any[]
		public splice( start:number, deleteCount:number, ...items:any[] ):any[]
		public splice( start:number, deleteCount?:number, ...items:any[] ):any[]
		{
			if (deleteCount === undefined)
			{
				return new TypeArray(this._type, super.splice(start));
			}
			return new TypeArray(this._type, super.splice.apply(this, [start, deleteCount].concat(items)));
		}
		public toString():string
		{
			return "<TypeArray type=" + this._type.name + " [" + this.join(",") + "]>";
		}
	}
