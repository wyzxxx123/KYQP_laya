var View = core.view.ComView;
var Dialogs = core.view.DialogView;
var Scenes = core.view.SceneView;
var Windows = core.view.WinView;
var ui;
(function (ui) {
    var avater_chose;
    (function (avater_chose) {
        class AvaterChoseUI extends Windows {
            constructor() { super(); }
            createChildren() {
                View.regComponent("core.comlaya.ScaleCom", core.comlaya.ScaleCom);
                super.createChildren();
                this.loadUI("avater_chose/AvaterChose");
            }
        }
        avater_chose.AvaterChoseUI = AvaterChoseUI;
    })(avater_chose = ui.avater_chose || (ui.avater_chose = {}));
})(ui || (ui = {}));
(function (ui) {
    var dialog;
    (function (dialog) {
        class OneButtonUI extends Dialogs {
            constructor() { super(); }
            createChildren() {
                View.regComponent("core.comlaya.ScaleCom", core.comlaya.ScaleCom);
                super.createChildren();
                this.loadUI("dialog/OneButton");
            }
        }
        dialog.OneButtonUI = OneButtonUI;
    })(dialog = ui.dialog || (ui.dialog = {}));
})(ui || (ui = {}));
(function (ui) {
    var dialog;
    (function (dialog) {
        class TwoButtonUI extends Dialogs {
            constructor() { super(); }
            createChildren() {
                View.regComponent("core.comlaya.ScaleCom", core.comlaya.ScaleCom);
                super.createChildren();
                this.loadUI("dialog/TwoButton");
            }
        }
        dialog.TwoButtonUI = TwoButtonUI;
    })(dialog = ui.dialog || (ui.dialog = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_dzpk;
    (function (game_dzpk) {
        class DZPKCardsUI extends View {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.loadUI("game_dzpk/DZPKCards");
            }
        }
        game_dzpk.DZPKCardsUI = DZPKCardsUI;
    })(game_dzpk = ui.game_dzpk || (ui.game_dzpk = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_dzpk;
    (function (game_dzpk) {
        class DZPKCardTypeUI extends Windows {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.loadUI("game_dzpk/DZPKCardType");
            }
        }
        game_dzpk.DZPKCardTypeUI = DZPKCardTypeUI;
    })(game_dzpk = ui.game_dzpk || (ui.game_dzpk = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_dzpk;
    (function (game_dzpk) {
        class DZPKHeadUI extends View {
            constructor() { super(); }
            createChildren() {
                View.regComponent("core.comlaya.BoxMask", core.comlaya.BoxMask);
                super.createChildren();
                this.loadUI("game_dzpk/DZPKHead");
            }
        }
        game_dzpk.DZPKHeadUI = DZPKHeadUI;
    })(game_dzpk = ui.game_dzpk || (ui.game_dzpk = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_dzpk;
    (function (game_dzpk) {
        class DZPKHelpUI extends Windows {
            constructor() { super(); }
            createChildren() {
                View.regComponent("core.comlaya.ScaleCom", core.comlaya.ScaleCom);
                View.regComponent("core.comlaya.ButtonState", core.comlaya.ButtonState);
                super.createChildren();
                this.loadUI("game_dzpk/DZPKHelp");
            }
        }
        game_dzpk.DZPKHelpUI = DZPKHelpUI;
    })(game_dzpk = ui.game_dzpk || (ui.game_dzpk = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_dzpk;
    (function (game_dzpk) {
        class DZPKMenuUI extends Windows {
            constructor() { super(); }
            createChildren() {
                View.regComponent("core.comlaya.ButtonState", core.comlaya.ButtonState);
                super.createChildren();
                this.loadUI("game_dzpk/DZPKMenu");
            }
        }
        game_dzpk.DZPKMenuUI = DZPKMenuUI;
    })(game_dzpk = ui.game_dzpk || (ui.game_dzpk = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_dzpk;
    (function (game_dzpk) {
        class DZPKRecordUI extends Windows {
            constructor() { super(); }
            createChildren() {
                View.regComponent("core.comlaya.ScaleCom", core.comlaya.ScaleCom);
                super.createChildren();
                this.loadUI("game_dzpk/DZPKRecord");
            }
        }
        game_dzpk.DZPKRecordUI = DZPKRecordUI;
    })(game_dzpk = ui.game_dzpk || (ui.game_dzpk = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_dzpk;
    (function (game_dzpk) {
        class DZPKRoomUI extends Scenes {
            constructor() { super(); }
            createChildren() {
                View.regComponent("core.comlaya.ScaleCom", core.comlaya.ScaleCom);
                View.regComponent("Text", laya.display.Text);
                super.createChildren();
                this.loadUI("game_dzpk/DZPKRoom");
            }
        }
        game_dzpk.DZPKRoomUI = DZPKRoomUI;
    })(game_dzpk = ui.game_dzpk || (ui.game_dzpk = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_dzpk;
    (function (game_dzpk) {
        class DZPKSceneUI extends Scenes {
            constructor() { super(); }
            createChildren() {
                View.regComponent("core.comlaya.ScaleCom", core.comlaya.ScaleCom);
                View.regComponent("ui.game_dzpk.DZPKHeadUI", ui.game_dzpk.DZPKHeadUI);
                View.regComponent("ui.game_dzpk.DZPKCardsUI", ui.game_dzpk.DZPKCardsUI);
                View.regComponent("core.comlaya.SliderCustomer", core.comlaya.SliderCustomer);
                View.regComponent("core.comlaya.CheckState", core.comlaya.CheckState);
                super.createChildren();
                this.loadUI("game_dzpk/DZPKScene");
            }
        }
        game_dzpk.DZPKSceneUI = DZPKSceneUI;
    })(game_dzpk = ui.game_dzpk || (ui.game_dzpk = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_dzpk;
    (function (game_dzpk) {
        class DZPKSuccUI extends View {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.loadUI("game_dzpk/DZPKSucc");
            }
        }
        game_dzpk.DZPKSuccUI = DZPKSuccUI;
    })(game_dzpk = ui.game_dzpk || (ui.game_dzpk = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_dzpk;
    (function (game_dzpk) {
        class DZPKTakeUI extends Windows {
            constructor() { super(); }
            createChildren() {
                View.regComponent("core.comlaya.ScaleCom", core.comlaya.ScaleCom);
                View.regComponent("core.comlaya.CheckState", core.comlaya.CheckState);
                View.regComponent("core.comlaya.SliderCustomer", core.comlaya.SliderCustomer);
                super.createChildren();
                this.loadUI("game_dzpk/DZPKTake");
            }
        }
        game_dzpk.DZPKTakeUI = DZPKTakeUI;
    })(game_dzpk = ui.game_dzpk || (ui.game_dzpk = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_dzpk;
    (function (game_dzpk) {
        class TestVSUI extends View {
            constructor() { super(); }
            createChildren() {
                View.regComponent("core.comlaya.SliderCustomer", core.comlaya.SliderCustomer);
                super.createChildren();
                this.loadUI("game_dzpk/TestVS");
            }
        }
        game_dzpk.TestVSUI = TestVSUI;
    })(game_dzpk = ui.game_dzpk || (ui.game_dzpk = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_hall;
    (function (game_hall) {
        class GameChoseUI extends View {
            constructor() { super(); }
            createChildren() {
                View.regComponent("Text", laya.display.Text);
                View.regComponent("core.comlaya.ScaleCom", core.comlaya.ScaleCom);
                super.createChildren();
                this.loadUI("game_hall/GameChose");
            }
        }
        game_hall.GameChoseUI = GameChoseUI;
    })(game_hall = ui.game_hall || (ui.game_hall = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_hall;
    (function (game_hall) {
        class GameHallUI extends Scenes {
            constructor() { super(); }
            createChildren() {
                View.regComponent("core.comlaya.ScaleCom", core.comlaya.ScaleCom);
                View.regComponent("Text", laya.display.Text);
                super.createChildren();
                this.loadUI("game_hall/GameHall");
            }
        }
        game_hall.GameHallUI = GameHallUI;
    })(game_hall = ui.game_hall || (ui.game_hall = {}));
})(ui || (ui = {}));
(function (ui) {
    var pipei;
    (function (pipei) {
        class PiPeiViewUI extends Windows {
            constructor() { super(); }
            createChildren() {
                View.regComponent("core.comlaya.ScaleCom", core.comlaya.ScaleCom);
                super.createChildren();
                this.loadUI("pipei/PiPeiView");
            }
        }
        pipei.PiPeiViewUI = PiPeiViewUI;
    })(pipei = ui.pipei || (ui.pipei = {}));
})(ui || (ui = {}));
(function (ui) {
    var setting;
    (function (setting) {
        class SettingWindowUI extends Windows {
            constructor() { super(); }
            createChildren() {
                View.regComponent("core.comlaya.CheckState", core.comlaya.CheckState);
                View.regComponent("core.comlaya.ScaleCom", core.comlaya.ScaleCom);
                View.regComponent("core.comlaya.SettingSlider", core.comlaya.SettingSlider);
                super.createChildren();
                this.loadUI("setting/SettingWindow");
            }
        }
        setting.SettingWindowUI = SettingWindowUI;
    })(setting = ui.setting || (ui.setting = {}));
})(ui || (ui = {}));
(function (ui) {
    class TempleteWindowUI extends Windows {
        constructor() { super(); }
        createChildren() {
            View.regComponent("core.comlaya.ScaleCom", core.comlaya.ScaleCom);
            super.createChildren();
            this.loadUI("TempleteWindow");
        }
    }
    ui.TempleteWindowUI = TempleteWindowUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map