var PropDef=function(){function e(e){this.id=e.id,this.name=e.name,this.className=e.className,this.type=e.type,this._defVal=e.defVal}return Object.defineProperty(e.prototype,"defVal",{get:function(){switch(this.type){case"float2":return new laya.maths.Point;case"array":return[]}return this._defVal},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"writer",{get:function(){if(this._writer||(this._writer=RpcDef.getTypeWriter(this.type)),null==this._writer)throw new TypeError("Property writer not found: "+this);return this._writer},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"reader",{get:function(){if(this._reader||(this._reader=RpcDef.getTypeReader(this.type)),null==this._reader)throw new TypeError("Property reader not found: "+this);return this._reader},enumerable:!0,configurable:!0}),e.prototype.toString=function(){return null==this._info&&(this._info="<Prop "+this.className+"."+this.name+":"+this.type+">"),this._info},e}();