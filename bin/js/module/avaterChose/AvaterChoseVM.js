var module;
(function (module) {
    var avaterChose;
    (function (avaterChose) {
        /**
         * @description 头像选择界面
         * @author wangyz
         * @export
         * @class AvaterChoseVM
         * @extends {module.base.MViewModel}
         */
        class AvaterChoseVM extends mbase.base.MViewModel {
            constructor() {
                super();
                this.setAtlasName = "res/atlas/userInfoWindow.atlas";
                this.setClass = avaterChose.AvaterChoseView;
            }
            saveHead(sex, index) {
                this.sendData(16778272, [sex]);
                this.sendData(16778270, ["" + index]);
            }
        }
        avaterChose.AvaterChoseVM = AvaterChoseVM;
    })(avaterChose = module.avaterChose || (module.avaterChose = {}));
})(module || (module = {}));
//# sourceMappingURL=AvaterChoseVM.js.map