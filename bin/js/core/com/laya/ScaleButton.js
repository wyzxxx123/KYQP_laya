var core;
(function (core) {
    var com;
    (function (com) {
        var laya;
        (function (laya) {
            class ScaleButton extends laya.ui.Button {
                constructor() {
                    super();
                    this.once(laya.events.Event.ADDED, this, this.onChangeHeight);
                }
                get isScale() {
                    return this._isScale;
                }
                set isScale(val) {
                    this._isScale = val;
                    if (this._isScale) {
                        this.anchorX = 0.5;
                        this.anchorY = 0.5;
                        this.on(laya.events.Event.MOUSE_DOWN, this, this.onDown);
                    }
                }
                onChangeScale() {
                }
                onDown() {
                    this.scale(0.8, 0.8);
                    this.once(laya.events.Event.MOUSE_UP, this, this.onUP);
                }
                onUP() {
                    this.scale(1, 1);
                }
                onChangeHeight() {
                    if (this._isScale) {
                        this.x += this.width * 0.5;
                        this.y += this.height * 0.5;
                    }
                }
            }
            laya.ScaleButton = ScaleButton;
        })(laya = com.laya || (com.laya = {}));
    })(com = core.com || (core.com = {}));
})(core || (core = {}));
//# sourceMappingURL=ScaleButton.js.map