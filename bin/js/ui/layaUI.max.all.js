define(["require", "exports", "../core/view/ComView", "../core/view/DialogView", "../core/view/SceneView", "../core/view/WinView", "../core/comlaya/ScaleCom", "../core/comlaya/BoxMask", "../core/comlaya/ButtonState", "../core/comlaya/SliderCustomer", "../core/comlaya/CheckState", "../core/comlaya/SettingSlider"], function (require, exports, ComView_1, DialogView_1, SceneView_1, WinView_1, ScaleCom_1, BoxMask_1, ButtonState_1, SliderCustomer_1, CheckState_1, SettingSlider_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ui;
    (function (ui) {
        var avater_chose;
        (function (avater_chose) {
            class AvaterChoseUI extends WinView_1.WinView {
                constructor() { super(); }
                createChildren() {
                    ComView_1.ComView.regComponent("ScaleCom", ScaleCom_1.ScaleCom);
                    super.createChildren();
                    this.loadUI("avater_chose/AvaterChose");
                }
            }
            avater_chose.AvaterChoseUI = AvaterChoseUI;
        })(avater_chose = ui.avater_chose || (ui.avater_chose = {}));
    })(ui = exports.ui || (exports.ui = {}));
    (function (ui) {
        var dialog;
        (function (dialog) {
            class OneButtonUI extends DialogView_1.DialogView {
                constructor() { super(); }
                createChildren() {
                    ComView_1.ComView.regComponent("ScaleCom", ScaleCom_1.ScaleCom);
                    super.createChildren();
                    this.loadUI("dialog/OneButton");
                }
            }
            dialog.OneButtonUI = OneButtonUI;
        })(dialog = ui.dialog || (ui.dialog = {}));
    })(ui = exports.ui || (exports.ui = {}));
    (function (ui) {
        var dialog;
        (function (dialog) {
            class TwoButtonUI extends DialogView_1.DialogView {
                constructor() { super(); }
                createChildren() {
                    ComView_1.ComView.regComponent("ScaleCom", ScaleCom_1.ScaleCom);
                    super.createChildren();
                    this.loadUI("dialog/TwoButton");
                }
            }
            dialog.TwoButtonUI = TwoButtonUI;
        })(dialog = ui.dialog || (ui.dialog = {}));
    })(ui = exports.ui || (exports.ui = {}));
    (function (ui) {
        var game_dzpk;
        (function (game_dzpk) {
            class DZPKCardsUI extends ComView_1.ComView {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadUI("game_dzpk/DZPKCards");
                }
            }
            game_dzpk.DZPKCardsUI = DZPKCardsUI;
        })(game_dzpk = ui.game_dzpk || (ui.game_dzpk = {}));
    })(ui = exports.ui || (exports.ui = {}));
    (function (ui) {
        var game_dzpk;
        (function (game_dzpk) {
            class DZPKCardTypeUI extends WinView_1.WinView {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadUI("game_dzpk/DZPKCardType");
                }
            }
            game_dzpk.DZPKCardTypeUI = DZPKCardTypeUI;
        })(game_dzpk = ui.game_dzpk || (ui.game_dzpk = {}));
    })(ui = exports.ui || (exports.ui = {}));
    (function (ui) {
        var game_dzpk;
        (function (game_dzpk) {
            class DZPKHeadUI extends ComView_1.ComView {
                constructor() { super(); }
                createChildren() {
                    ComView_1.ComView.regComponent("BoxMask", BoxMask_1.BoxMask);
                    super.createChildren();
                    this.loadUI("game_dzpk/DZPKHead");
                }
            }
            game_dzpk.DZPKHeadUI = DZPKHeadUI;
        })(game_dzpk = ui.game_dzpk || (ui.game_dzpk = {}));
    })(ui = exports.ui || (exports.ui = {}));
    (function (ui) {
        var game_dzpk;
        (function (game_dzpk) {
            class DZPKHelpUI extends WinView_1.WinView {
                constructor() { super(); }
                createChildren() {
                    ComView_1.ComView.regComponent("ScaleCom", ScaleCom_1.ScaleCom);
                    ComView_1.ComView.regComponent("ButtonState", ButtonState_1.ButtonState);
                    super.createChildren();
                    this.loadUI("game_dzpk/DZPKHelp");
                }
            }
            game_dzpk.DZPKHelpUI = DZPKHelpUI;
        })(game_dzpk = ui.game_dzpk || (ui.game_dzpk = {}));
    })(ui = exports.ui || (exports.ui = {}));
    (function (ui) {
        var game_dzpk;
        (function (game_dzpk) {
            class DZPKMenuUI extends WinView_1.WinView {
                constructor() { super(); }
                createChildren() {
                    ComView_1.ComView.regComponent("ButtonState", ButtonState_1.ButtonState);
                    super.createChildren();
                    this.loadUI("game_dzpk/DZPKMenu");
                }
            }
            game_dzpk.DZPKMenuUI = DZPKMenuUI;
        })(game_dzpk = ui.game_dzpk || (ui.game_dzpk = {}));
    })(ui = exports.ui || (exports.ui = {}));
    (function (ui) {
        var game_dzpk;
        (function (game_dzpk) {
            class DZPKRecordUI extends WinView_1.WinView {
                constructor() { super(); }
                createChildren() {
                    ComView_1.ComView.regComponent("ScaleCom", ScaleCom_1.ScaleCom);
                    super.createChildren();
                    this.loadUI("game_dzpk/DZPKRecord");
                }
            }
            game_dzpk.DZPKRecordUI = DZPKRecordUI;
        })(game_dzpk = ui.game_dzpk || (ui.game_dzpk = {}));
    })(ui = exports.ui || (exports.ui = {}));
    (function (ui) {
        var game_dzpk;
        (function (game_dzpk) {
            class DZPKRoomUI extends SceneView_1.SceneView {
                constructor() { super(); }
                createChildren() {
                    ComView_1.ComView.regComponent("ScaleCom", ScaleCom_1.ScaleCom);
                    ComView_1.ComView.regComponent("Text", laya.display.Text);
                    super.createChildren();
                    this.loadUI("game_dzpk/DZPKRoom");
                }
            }
            game_dzpk.DZPKRoomUI = DZPKRoomUI;
        })(game_dzpk = ui.game_dzpk || (ui.game_dzpk = {}));
    })(ui = exports.ui || (exports.ui = {}));
    (function (ui) {
        var game_dzpk;
        (function (game_dzpk) {
            class DZPKSceneUI extends SceneView_1.SceneView {
                constructor() { super(); }
                createChildren() {
                    ComView_1.ComView.regComponent("ScaleCom", ScaleCom_1.ScaleCom);
                    ComView_1.ComView.regComponent("ui.game_dzpk.DZPKHeadUI", ui.game_dzpk.DZPKHeadUI);
                    ComView_1.ComView.regComponent("ui.game_dzpk.DZPKCardsUI", ui.game_dzpk.DZPKCardsUI);
                    ComView_1.ComView.regComponent("SliderCustomer", SliderCustomer_1.SliderCustomer);
                    ComView_1.ComView.regComponent("CheckState", CheckState_1.CheckState);
                    super.createChildren();
                    this.loadUI("game_dzpk/DZPKScene");
                }
            }
            game_dzpk.DZPKSceneUI = DZPKSceneUI;
        })(game_dzpk = ui.game_dzpk || (ui.game_dzpk = {}));
    })(ui = exports.ui || (exports.ui = {}));
    (function (ui) {
        var game_dzpk;
        (function (game_dzpk) {
            class DZPKSuccUI extends ComView_1.ComView {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadUI("game_dzpk/DZPKSucc");
                }
            }
            game_dzpk.DZPKSuccUI = DZPKSuccUI;
        })(game_dzpk = ui.game_dzpk || (ui.game_dzpk = {}));
    })(ui = exports.ui || (exports.ui = {}));
    (function (ui) {
        var game_dzpk;
        (function (game_dzpk) {
            class DZPKTakeUI extends WinView_1.WinView {
                constructor() { super(); }
                createChildren() {
                    ComView_1.ComView.regComponent("ScaleCom", ScaleCom_1.ScaleCom);
                    ComView_1.ComView.regComponent("CheckState", CheckState_1.CheckState);
                    ComView_1.ComView.regComponent("SliderCustomer", SliderCustomer_1.SliderCustomer);
                    super.createChildren();
                    this.loadUI("game_dzpk/DZPKTake");
                }
            }
            game_dzpk.DZPKTakeUI = DZPKTakeUI;
        })(game_dzpk = ui.game_dzpk || (ui.game_dzpk = {}));
    })(ui = exports.ui || (exports.ui = {}));
    (function (ui) {
        var game_dzpk;
        (function (game_dzpk) {
            class TestVSUI extends ComView_1.ComView {
                constructor() { super(); }
                createChildren() {
                    ComView_1.ComView.regComponent("SliderCustomer", SliderCustomer_1.SliderCustomer);
                    super.createChildren();
                    this.loadUI("game_dzpk/TestVS");
                }
            }
            game_dzpk.TestVSUI = TestVSUI;
        })(game_dzpk = ui.game_dzpk || (ui.game_dzpk = {}));
    })(ui = exports.ui || (exports.ui = {}));
    (function (ui) {
        var game_hall;
        (function (game_hall) {
            class GameChoseUI extends ComView_1.ComView {
                constructor() { super(); }
                createChildren() {
                    ComView_1.ComView.regComponent("Text", laya.display.Text);
                    ComView_1.ComView.regComponent("ScaleCom", ScaleCom_1.ScaleCom);
                    super.createChildren();
                    this.loadUI("game_hall/GameChose");
                }
            }
            game_hall.GameChoseUI = GameChoseUI;
        })(game_hall = ui.game_hall || (ui.game_hall = {}));
    })(ui = exports.ui || (exports.ui = {}));
    (function (ui) {
        var game_hall;
        (function (game_hall) {
            class GameHallUI extends SceneView_1.SceneView {
                constructor() { super(); }
                createChildren() {
                    ComView_1.ComView.regComponent("ScaleCom", ScaleCom_1.ScaleCom);
                    ComView_1.ComView.regComponent("Text", laya.display.Text);
                    super.createChildren();
                    this.loadUI("game_hall/GameHall");
                }
            }
            game_hall.GameHallUI = GameHallUI;
        })(game_hall = ui.game_hall || (ui.game_hall = {}));
    })(ui = exports.ui || (exports.ui = {}));
    (function (ui) {
        var pipei;
        (function (pipei) {
            class PiPeiViewUI extends WinView_1.WinView {
                constructor() { super(); }
                createChildren() {
                    ComView_1.ComView.regComponent("ScaleCom", ScaleCom_1.ScaleCom);
                    super.createChildren();
                    this.loadUI("pipei/PiPeiView");
                }
            }
            pipei.PiPeiViewUI = PiPeiViewUI;
        })(pipei = ui.pipei || (ui.pipei = {}));
    })(ui = exports.ui || (exports.ui = {}));
    (function (ui) {
        var setting;
        (function (setting) {
            class SettingWindowUI extends WinView_1.WinView {
                constructor() { super(); }
                createChildren() {
                    ComView_1.ComView.regComponent("CheckState", CheckState_1.CheckState);
                    ComView_1.ComView.regComponent("ScaleCom", ScaleCom_1.ScaleCom);
                    ComView_1.ComView.regComponent("SettingSlider", SettingSlider_1.SettingSlider);
                    super.createChildren();
                    this.loadUI("setting/SettingWindow");
                }
            }
            setting.SettingWindowUI = SettingWindowUI;
        })(setting = ui.setting || (ui.setting = {}));
    })(ui = exports.ui || (exports.ui = {}));
    (function (ui) {
        class TempleteWindowUI extends WinView_1.WinView {
            constructor() { super(); }
            createChildren() {
                ComView_1.ComView.regComponent("ScaleCom", ScaleCom_1.ScaleCom);
                super.createChildren();
                this.loadUI("TempleteWindow");
            }
        }
        ui.TempleteWindowUI = TempleteWindowUI;
    })(ui = exports.ui || (exports.ui = {}));
});
//# sourceMappingURL=layaUI.max.all.js.map