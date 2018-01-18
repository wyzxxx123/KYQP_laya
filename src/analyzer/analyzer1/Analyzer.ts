import { RpcDef } from './RpcDef';
import { RpcType } from './RpcType';
import { Ctx } from './crypt/Ctx';
import { CFun } from '../../core/CFun';
import { SSend } from './SSend';
import { ClassPro } from '../../core/net/ClassPro';
    /**
	 * @description 解析具体数据
	 * @author wangyz
	 * @export
	 * @class Analyzer
	 */
	export class Analyzer{
        public analyzeRecv(data:any):ClassPro{
			// console.log("前：" + this._byte.length + "_" + this._byte.pos + "_" + this._byte.bytesAvailable);
            this._byte.writeArrayBuffer(data);//把接收到的二进制数据读进byte数组便于解析。
			// console.log("中：" + this._byte.length + "_" + this._byte.pos + "_" + this._byte.bytesAvailable);
			let len = this._packetLen;
			if(len == 0){
				this._byte.pos = 0;
				if(this._byte.bytesAvailable >= this.INT_SIZE){
					if(Analyzer.seed > 0 ){
						if(this._encrypter == undefined){
							this._encrypter = new Ctx(Analyzer.seed ^ this.GENIUS_NUMBER);
							this._decrypter = new Ctx(Analyzer.seed ^ this.GENIUS_NUMBER);
						}

						this._decrypter.encode(this._byte, this.INT_SIZE, this._byte.pos);
					}
					len = this._byte.getUint32();

					let flag: number = (len >> 24) & 0xFF;
					len &= 0xFFFFFF;
					if (len == 0 || len > this.BAD_LEN || flag != (len % 255))	//数据包长度非法
					{
						CFun.throw("Invalid packet size: " + len);
						return null;
					}
					if (len > this.MAX_LEN)		//数据包过长
					{
						CFun.throw("packet size exceed: " + len);
						return null;
					}

					this._packetLen = len;
				}
			}
			// console.log("后：" + this._byte.length + "_" + this._byte.pos + "_" + this._byte.bytesAvailable);
			if(len > 0 && this._byte.bytesAvailable >= len){ //读到足够的数据
				this._packetLen = 0;

				if(Analyzer.seed > 0 ){
					if(this._encrypter == undefined){
						this._encrypter = new Ctx(Analyzer.seed ^ this.GENIUS_NUMBER);
						this._decrypter = new Ctx(Analyzer.seed ^ this.GENIUS_NUMBER);
					}

					this._decrypter.encode(this._byte, len, this._byte.pos);
				}
				
				let data_id = this._byte.getUint32();
				let data_obj = RpcDef.getMethodByID(data_id);

				let data_eid = data_obj["isStatic"] ? 0 : ( this._byte.getUint32() + 4294967296 * this._byte.getInt16());
				let data_params = {"e_id":data_eid};
				let cName = data_obj["isStatic"]?"ModelHandle":data_obj["className"];
				let args:Object[] = data_obj["args"],ilen=args.length,targ,tname;
				for (let i:number = 0; i < ilen; i++){
					targ = args[i];
					tname = targ["name"];
					// if(tname == "props"){
					// 	console.log("");
					// }
					var reader:Function = RpcDef.getTypeReader(targ.type);
					data_params[tname] = reader(this._byte);
				}
				
				let cPro = new ClassPro();
				cPro.recv_id = data_obj["id"];
				cPro.className = cName;
				cPro.event_id = data_obj["server"] +"_"+ data_obj["className"]  +"_"+ data_obj["name"];
				cPro.params = data_params;
				
				this._byte.clear();
				this._byte.pos = 0;

				return cPro;
			}

			return null;
        }

		public analyzeSend(data:SSend):any{
			let tmp_byte:laya.utils.Byte = laya.utils.Pool.getItemByClass("tmpByte",laya.utils.Byte);
			tmp_byte.endian = laya.utils.Byte.LITTLE_ENDIAN;
			tmp_byte.clear();
			tmp_byte.pos = 0;
			let data_obj = data.method;
			if (!data_obj) CFun.throw("RPC method not found: " + data_obj["id"]);

			RpcType.uintWriter(tmp_byte, data_obj["id"]);
			if (!data_obj["isStatic"]){
				RpcType.int48Writer(tmp_byte, data.e_id);
			}

			let args:Object[] = data_obj["args"],ilen=args.length,targ,tname;
			for (let i:number = 0; i < ilen; i++){
				targ = args[i];
				var writer:Function = RpcDef.getTypeWriter(targ.type);
				if (writer == null){
					CFun.throw("Type writer not found: " + targ.type);
				}
				writer(tmp_byte,data.args[i]);
			}

			var len: number = tmp_byte.length;
			if (!len) return;
			if (len > this.BAD_LEN)	{//数据包长度非法
				CFun.throw("Invalid packet size: " + len);
			}
			// SocketInterface.debugLog && SocketInterface.debugLog("Sending packet: " + packet);

			let write_byte:laya.utils.Byte = laya.utils.Pool.getItemByClass("tmpByte",laya.utils.Byte);
			write_byte.endian = laya.utils.Byte.LITTLE_ENDIAN;
			write_byte.clear();
			write_byte.pos = 0;

			//写入数据包
			let flag: number = ((len % 255) << 24) | len;
			write_byte.length = len + this.INT_SIZE;
			write_byte.writeUint32(flag);
			write_byte.writeArrayBuffer(tmp_byte.buffer);
			
			if(Analyzer.seed > 0 ){
				if(this._encrypter == undefined){
					this._encrypter = new Ctx(Analyzer.seed ^ this.GENIUS_NUMBER);
					this._decrypter = new Ctx(Analyzer.seed ^ this.GENIUS_NUMBER);
				}

				this._encrypter.encode(write_byte, write_byte.length);
			}

			// let t_encrypter = new Ctx(1 ^ this.GENIUS_NUMBER);
			// t_encrypter.encode(write_byte, write_byte.length);
			CFun.log(data.toString());
			laya.utils.Pool.recover("tmpSend",data);
			laya.utils.Pool.recover("tmpByte",tmp_byte);

			return [write_byte,write_byte.buffer];
		}
		
		private _encrypter: Ctx;					//数据流加密算法对象
		private _decrypter: Ctx;					//数据流解密算法对象
		private _byte:laya.utils.Byte;
        constructor(){
            this._byte = new laya.utils.Byte();
            this._byte.endian = laya.utils.Byte.LITTLE_ENDIAN;
			this._byte.pos = 0;

			new RpcDef();
			new RpcType();
        }

		public static seed:number = 0;
		private GENIUS_NUMBER: number = 0x05027919;	//加密蒙板数字
        private MAX_LEN: number = 0xFFFF;			//最大数据包体长度
        private BAD_LEN: number = 0xFFFF00;			//异常数据包体长度
        private INT_SIZE:number = 4;
        private _packetLen:number = 0;
    }
