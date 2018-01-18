import { RpcDef } from './RpcDef';
import { Struct } from './type/Struct';
import { TypeArray } from './type/TypeArray';

	/**
	 * RPC数据类型定义
	 * @author	Fictiony
	 * @version	2017/7/10
	 */
	export class RpcType
	{
		private static _buffer:laya.utils.Byte = new laya.utils.Byte();		//字节流缓存

		/**
		 * 整数
		 */		
		public static intWriter( data:laya.utils.Byte, val:number ):void
		{
			data.writeInt32(val);
		}
		public static intReader( data:laya.utils.Byte ):number
		{
			return data.getUint32();
		}
		public static int8Writer( data:laya.utils.Byte, val:number ):void
		{
			data.writeByte(val);
		}
		public static int8Reader( data:laya.utils.Byte ):number
		{
			return data.readByte();
		}
		public static int16Writer( data:laya.utils.Byte, val:number ):void
		{
			data.writeInt16(val);
		}
		public static int16Reader( data:laya.utils.Byte ):number
		{
			return data.getInt16();
		}
		public static int48Writer( data:laya.utils.Byte, val:number ):void
		{
			data.writeUint32(val);
			data.writeInt16(Math.floor(val / 4294967296));
		}
		public static int48Reader( data:laya.utils.Byte ):number
		{
			return data.getUint32() + 4294967296 * data.getInt16();
		}

		/**
		 * 无符号整数
		 */		
		public static uintReader( data:laya.utils.Byte ):number
		{
			return data.getUint32();
		}
		public static uintWriter( data:laya.utils.Byte, val:number ):void
		{
			data.writeUint32(val);
		}
		public static uint8Writer( data:laya.utils.Byte, val:number ):void
		{
			data.writeByte(val);
		}
		public static uint8Reader( data:laya.utils.Byte ):number
		{
			return data.getUint8();
		}
		public static uint16Writer( data:laya.utils.Byte, val:number ):void
		{
			data.writeUint16(val);
		}
		public static uint16Reader( data:laya.utils.Byte ):number
		{
			return data.getUint16();
		}

		/**
		 * 浮点数
		 */		
		public static doubleWriter( data:laya.utils.Byte, val:number ):void
		{
			data.writeFloat64(val);
		}
        public static doubleReader( data:laya.utils.Byte ):number
		{
			return data.getFloat64();
		}
		public static floatWriter( data:laya.utils.Byte, val:number ):void
		{
			data.writeFloat32(val);
		}
		public static floatReader( data:laya.utils.Byte ):number
		{
			return data.getFloat32();
		}

		/**
		 * 布尔值
		 */		
		public static boolWriter( data:laya.utils.Byte, val:boolean ):void
		{
			data.writeByte(val?1:0);
		}
		public static boolReader( data:laya.utils.Byte ):boolean
		{
			return data.getByte() == 0;
		}

		/**
		 * 字符串 
		 */		
		public static stringWriter( data:laya.utils.Byte, val:string ):void
		{
			this._buffer.length = 0;
			this._buffer.writeUTFBytes(val);
			if (this._buffer.length > 0xFFFF)
			{
				this._buffer.length = 0xFFFF;
			}
			data.writeUint16(this._buffer.length);
			data.writeArrayBuffer(this._buffer.buffer);
		}
		public static stringReader( data:laya.utils.Byte ):string
		{
			var len:number = data.getUint16();
			return data.readUTFBytes(len);
		}
		public static lstringWriter( data:laya.utils.Byte, val:string ):void
		{
			this._buffer.length = 0;
			this._buffer.writeUTFBytes(val);
			data.writeUint16(this._buffer.length);
			data.writeArrayBuffer(this._buffer.buffer);
		}
		public static lstringReader(data:laya.utils.Byte):string
		{
			var len:number = data.getUint16();
			return data.readUTFBytes(len);
		}

		/**
		 * 字节流
		 */
		public static arWriter( data:laya.utils.Byte, val:laya.utils.Byte ):void
		{
			data.writeArrayBuffer(val.buffer,val.pos);
		}
		public static arReader( data:laya.utils.Byte ):laya.utils.Byte
		{
			var ar:laya.utils.Byte = new (data.constructor as any);
			// return ar;
			ar.writeArrayBuffer(data.buffer,data.pos);
			ar.pos = 0;
			return ar;
		}

		/**
		 * 变长整数（最大限56位，不能为负数）
		 */
		public static vintWriter( data:laya.utils.Byte, val:number ):void
		{
			while (val >= 0x80)
			{
				data.writeByte(val | 0x80);
				val = Math.floor(val / 128);
			}
			data.writeByte(val);
		}
		public static vintReader( data:laya.utils.Byte ):number
		{
			var ch:number = data.readByte();
			var v:number = ch & 0x7F;
			for (var i:number = 128; (ch & 0x80) && (data.bytesAvailable > 0); i *= 128)
			{
				ch = data.readByte();
				v += (ch & 0x7F) * i;
			}
			if(v == 0){
				console.log("");
			}
			return v;
		}

		/**
		 * 双浮点数
		 */
		public static float2Writer( data:laya.utils.Byte, val:laya.maths.Point ):void
		{
			data.writeFloat32(val.x);
			data.writeFloat32(val.y);
		}
		public static float2Reader( data:laya.utils.Byte ):laya.maths.Point
		{
			return new laya.maths.Point(data.getFloat32(), data.getFloat32());
		}

		/**
		 * 数组
		 */		
		public static arrayWriter( data:laya.utils.Byte, val:TypeArray ):void
		{
			data.writeInt16(val.$type.id);
			data.writeInt16(val.length);
			var writer:Function = RpcDef.getTypeWriter(val.$type.name);
			if (writer == null)
			{
				throw new TypeError("Type writer not found: " + val.$type.name);
			}
			for (var i of val)
			{
				writer(data, i);
			}
		}
		public static arrayReader( data:laya.utils.Byte ):TypeArray
		{
			var id:number = data.getInt16();
			var v:TypeArray = RpcDef.newArray(id);
			if (!v)
			{
				throw new TypeError("Invalid array type id: " + id);
			}
			var len:number = data.getInt16();
			var reader:Function = RpcDef.getTypeReader(v.$type.name);
			if (reader == null)
			{
				throw new TypeError("Type reader not found: " + v.$type.name);
			}
			for (var i:number = 0; i < len; i++)
			{
				v.push(reader(data));
			}
			return v;
		}

		/**
		 * 结构体
		 */
		public static structWriter( data:laya.utils.Byte, val:Struct ):void
		{
			data.writeInt16(val.$type.id);
			var defs:Object = val.$type.defs;
			for (var i of val.$type.fields)
			{
				var writer:Function = RpcDef.getTypeWriter(defs[i]);
				if (writer == null)
				{
					throw new TypeError("Type writer not found: " + val.$type.name + "." + i + ":" + defs[i]);
				}
				writer(data, val[i]);
			}
		}
		
		public static structReader( data:laya.utils.Byte ):Struct
		{
			var id:number = data.getInt16();
			var v:Struct = RpcDef.newStruct(id);
			if (!v)
			{
				throw new TypeError("Invalid struct type id: " + id);
			}
			var defs:Object = v.$type.defs;
			for (var i of v.$type.fields)
			{
				var reader:Function = RpcDef.getTypeReader(defs[i]);
				if (reader == null)
				{
					throw new TypeError("Type reader not found: " + v.$type.name + "." + i + ":" + defs[i]);
				}
				v[i] = reader(data);
			}
			return v;
		}

		/**
		 * 字典（暂未实现）
		 */		
		public static tableWriter( data:laya.utils.Byte, val:Object ):void
		{
			//todo
		}
		public static tableReader( data:laya.utils.Byte ):Object
		{
			return null;	//todo
		}

		/**
		 * 压缩包（暂未实现）
		 */		
		public static lzoWriter( data:laya.utils.Byte, val:laya.utils.Byte ):void
		{
			//todo
		}
		public static lzoReader( data:laya.utils.Byte ):laya.utils.Byte
		{
			return null;	//todo
		}

		/**
		 * 释放缓存（建议定时执行）
		 */		
		public static clearBuffer():void
		{
			this._buffer.clear();
		}
	}
