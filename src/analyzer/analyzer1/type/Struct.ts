import { TypeDef } from './TypeDef';

	/**
	 * 结构体数据
	 * @author	Fictiony
	 * @version	2017/7/11
	 */	
	export class Struct
	{
		private _type:TypeDef;			//类型定义

		constructor( type:TypeDef )
		{
			this._type = type;
		}

		/**
		 * 创建新结构体对象（扩展结构体类定义）
		 */
		public static createNew( type:TypeDef ):Struct
		{
			return new Struct(type);
        }

		/**
		 * 获取类型定义
		 */
		public get $type():TypeDef
		{
			return this._type;
		}

		/**
		 * 判断是否包含指定字段
		 */
		public hasKey( name:string ):boolean 
		{
			return this._type.defs[name] != null;
		}
	}
