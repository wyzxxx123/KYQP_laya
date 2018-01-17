class RegistClass {
    constructor() {
        this.registClass("ModelHandle", module.base.ModelHandle);
        this.registClass("Player", module.base.Player);
    }
    registClass(cname, cclass) {
        laya.utils.ClassUtils.regClass(cname, cclass);
    }
}
//# sourceMappingURL=RegistClass.js.map