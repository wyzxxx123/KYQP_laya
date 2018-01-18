
	/**
	 * 数据包加密模块
	 * @author	Fictiony
	 * @version	2017/7/8
	 */	
	export class Ctx
	{
		private _index:number = 0;
		private _addikey:AddiKey[] = [];
		private _buffer:laya.utils.Byte;
		private _bufferBytes:Uint8Array;
		
		/**
		 * 构造函数
		 * @param sd	加密种子
		 * @param mask	加密种子蒙板
		 */
		constructor( sd:number )
		{
			this._buffer = new laya.utils.Byte();
			this._buffer.endian = laya.utils.Byte.LITTLE_ENDIAN;

			this._addikey[0] = new AddiKey();
			this._addikey[0].sd = this.linearity(sd);
			this._addikey[0].dis1 = 55;
			this._addikey[0].dis2 = 24;
		
			this._addikey[1] = new AddiKey();
			this._addikey[1].sd = this.linearity(((sd & 0xAAAAAAAA) >>> 1) | ((sd & 0x55555555) << 1));
			this._addikey[1].dis1 = 57;
			this._addikey[1].dis2 = 7;
		
			this._addikey[2] = new AddiKey();
			this._addikey[2].sd = this.linearity(~(((sd & 0xF0F0F0F0) >>> 4) | ((sd & 0x0F0F0F0F) << 4)));
			this._addikey[2].dis1 = 58;
			this._addikey[2].dis2 = 19;
		
			for (var i:number = 0; i < 3; ++i)
			{
				var tmp:number = this._addikey[i].sd;
				for (var j:number = 0; j < 64; ++j)
				{
					for (var k:number = 0; k < 32; ++k)
					{
						tmp = this.linearity(tmp);
					}
					this._addikey[i].buffer[j] = tmp;
				}
				this._addikey[i].carry = 0;
				this._addikey[i].index = 63;
			}
		
			this._index = 4096;
			this._buffer.length = 4096;
			this._bufferBytes =  this.getBytes( this._buffer )
		}
		
		private linearity( key:number ):number
		{
			var n:number = ((((key >>> 31)
					^ (key >>> 6)
					^ (key >>> 4)
					^ (key >>> 2)
					^ (key >>> 1)
					^ key)
					& 0x00000001) << 31)
					| (key >>> 1);
			return n < 0 ? 0x100000000 + n : n;
		}
		
		private addikeyNext( addikey:AddiKey ):void
		{
			++addikey.index;
			addikey.index &= 0x3F;
		
			var i1:number = ((addikey.index | 0x40) - addikey.dis1) & 0x3F;
			var i2:number = ((addikey.index | 0x40) - addikey.dis2) & 0x3F;
		
			addikey.buffer[addikey.index] = (addikey.buffer[i1] + addikey.buffer[i2]) % 0x100000000;
			addikey.carry = addikey.buffer[addikey.index] < addikey.buffer[i1] || addikey.buffer[addikey.index] < addikey.buffer[i2] ? 1:0;
		}
		
		private generate():void
		{
			this._buffer.pos = 0;
			this._index = 0;
			
			for (var i:number = 0; i < 1024; ++i)
			{
				var carry:number = this._addikey[0].carry + this._addikey[1].carry + this._addikey[2].carry;
			
				if (carry == 0 || carry == 3)
				{
					this.addikeyNext(this._addikey[0]);
					this.addikeyNext(this._addikey[1]);
					this.addikeyNext(this._addikey[2]);
				}
				else
				{
					var flag:number = 0;
					if (carry == 2)
					{
						flag = 1;
					}
					for (var j:number = 0; j < 3; ++j)
					{
						if (this._addikey[j].carry == flag)
						{
							this.addikeyNext(this._addikey[j]);
						}
					}
				}

				this._buffer.writeUint32( this._addikey[0].buffer[this._addikey[0].index]
										^ this._addikey[1].buffer[this._addikey[1].index]
										^ this._addikey[2].buffer[this._addikey[2].index] );
			}
		}
		
		/**
		 * 数据流编码（加密解密对称）
		 * @param data	数据流
		 * @param len	数据字节数
		 * @param start	起始字节序号
		 */		
		public encode( data:laya.utils.Byte, len:number, start:number=0 ):void
		{
			if (!data) return;
			if (len <= 0) return;
			
			var data_bytes:Uint8Array = this.getBytes( data );
			do
			{
				var remnant:number = 4096 - this._index;
				if (remnant <= 0)
				{
					this.generate();
				}
				
				if (remnant > len)
				{
					remnant = len;
				}
				len -= remnant;
		
				for (var i:number = 0; i < remnant; ++i, ++start, ++this._index)
				{
					data_bytes[start] ^= this._bufferBytes[this._index];
				}
			}
			while (len > 0);
		}

		private getBytes(bytes:laya.utils.Byte):Uint8Array
		{
			// 新的版本用bytes代替只读
			if ( bytes['bytes'] )
			{
				return bytes["bytes"]
			}

			return new Uint8Array( bytes.buffer);
		}
	}


	class AddiKey
	{
		public sd:number = 0;
		public dis1:number = 0;
		public dis2:number = 0;
		public index:number = 0;
		public carry:number = 0;
		public buffer:number[] = [];
	}
