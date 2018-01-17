var module;
(function (module) {
    var base;
    (function (base) {
        class StaticData extends base.MModel {
            constructor() {
                super();
            }
            recvInit() {
                // this.regist();
            }
        }
        StaticData.encryptSeed = 0;
        base.StaticData = StaticData;
    })(base = module.base || (module.base = {}));
})(module || (module = {}));
//# sourceMappingURL=StaticData.js.map