var mbase;
(function (mbase) {
    var data;
    (function (data) {
        class CityScene extends mbase.base.MModel {
            constructor() {
                super();
            }
            recvInit() {
                this.regist("server_Client_createEntity_CityScene", this.onCreateMe);
            }
            onCreateMe() {
            }
        }
        data.CityScene = CityScene;
    })(data = mbase.data || (mbase.data = {}));
})(mbase || (mbase = {}));
//# sourceMappingURL=CityScene.js.map