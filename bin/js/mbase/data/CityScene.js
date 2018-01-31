define(["require", "exports", "../base/MModel"], function (require, exports, MModel_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class CityScene extends MModel_1.MModel {
        recvInit() {
            this.regist("server_Client_createEntity_CityScene", this.onCreateMe);
        }
        onCreateMe() {
        }
        constructor() {
            super();
        }
    }
    exports.CityScene = CityScene;
});
//# sourceMappingURL=CityScene.js.map