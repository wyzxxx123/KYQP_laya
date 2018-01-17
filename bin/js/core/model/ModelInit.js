var core;
(function (core) {
    var model;
    (function (model_1) {
        var ModelInit = /** @class */ (function () {
            function ModelInit() {
                this._dic_model = {};
            }
            ModelInit.prototype.initModule = function (modelCalss) {
                var model = this._dic_model[modelCalss["name"]];
                if (!model) {
                    model = new modelCalss();
                    this._dic_model[modelCalss["name"]] = model;
                }
            };
            Object.defineProperty(ModelInit, "ins", {
                get: function () {
                    if (!this._instance) {
                        this._instance = new ModelInit();
                    }
                    return this._instance;
                },
                enumerable: true,
                configurable: true
            });
            return ModelInit;
        }());
        model_1.ModelInit = ModelInit;
    })(model = core.model || (core.model = {}));
})(core || (core = {}));
//# sourceMappingURL=ModelInit.js.map