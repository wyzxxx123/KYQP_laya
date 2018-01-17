var module;
(function (module) {
    class StaticData extends core.model.Model {
        constructor() {
            super();
            this.encryptSeed = 0;
        }
        recvInit() {
            // this.regist();
        }
        static get ins() {
            if (!this._instance) {
                this._instance = new StaticData();
            }
            return this._instance;
        }
    }
    module.StaticData = StaticData;
})(module || (module = {}));
//# sourceMappingURL=StaticData.js.map