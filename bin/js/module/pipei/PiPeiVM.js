var module;
(function (module) {
    var pipei;
    (function (pipei) {
        /**
         * @description 匹配界面
         * @author wangyz
         * @export
         * @class PiPeiVM
         * @extends {base.MViewModel}
         */
        class PiPeiVM extends mbase.base.MViewModel {
            constructor() {
                super();
                this.setAtlasName = "";
                this.setClass = pipei.PiPeiView;
            }
        }
        pipei.PiPeiVM = PiPeiVM;
    })(pipei = module.pipei || (module.pipei = {}));
})(module || (module = {}));
//# sourceMappingURL=PiPeiVM.js.map