var __extends=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e])};return function(r,e){function p(){this.constructor=r}t(r,e),r.prototype=null===e?Object.create(e):(p.prototype=e.prototype,new p)}}(),TypeArray=function(_super){function TypeArray(type,arr){var _this=_super.call(this)||this,t=eval("this");return t._type=type,arr&&arr.length>0&&t.push.apply(t,arr),t}return __extends(TypeArray,_super),Object.defineProperty(TypeArray.prototype,"$type",{get:function(){return this._type},enumerable:!0,configurable:!0}),TypeArray.prototype.concat=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var e=new TypeArray(this._type,this),p=0,n=t;p<n.length;p++){var y=n[p];y instanceof Array?e.push.apply(e,y):e.push(y)}return e},TypeArray.prototype.slice=function(t,r){return void 0===t&&(t=0),void 0===r&&(r=16777215),new TypeArray(this._type,_super.prototype.slice.call(this,t,r))},TypeArray.prototype.splice=function(t,r){for(var e=[],p=2;p<arguments.length;p++)e[p-2]=arguments[p];return void 0===r?new TypeArray(this._type,_super.prototype.splice.call(this,t)):new TypeArray(this._type,_super.prototype.splice.apply(this,[t,r].concat(e)))},TypeArray.prototype.toString=function(){return"<TypeArray type="+this._type.name+" ["+this.join(",")+"]>"},TypeArray}(Array);