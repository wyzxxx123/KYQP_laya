var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var View = mview.ComView;
var Dialogs = mview.DialogView;
var Scenes = mview.SceneView;
var Windows = mview.WinView;
var ui;
(function (ui) {
    var avater_chose;
    (function (avater_chose) {
        var AvaterChoseUI = /** @class */ (function (_super) {
            __extends(AvaterChoseUI, _super);
            function AvaterChoseUI() {
                return _super.call(this) || this;
            }
            AvaterChoseUI.prototype.createChildren = function () {
                View.regComponent("ScaleCom", ScaleCom);
                _super.prototype.createChildren.call(this);
                this.loadUI("avater_chose/AvaterChose");
            };
            return AvaterChoseUI;
        }(Windows));
        avater_chose.AvaterChoseUI = AvaterChoseUI;
    })(avater_chose = ui.avater_chose || (ui.avater_chose = {}));
})(ui || (ui = {}));
(function (ui) {
    var dialog;
    (function (dialog) {
        var OneButtonUI = /** @class */ (function (_super) {
            __extends(OneButtonUI, _super);
            function OneButtonUI() {
                return _super.call(this) || this;
            }
            OneButtonUI.prototype.createChildren = function () {
                View.regComponent("ScaleCom", ScaleCom);
                _super.prototype.createChildren.call(this);
                this.loadUI("dialog/OneButton");
            };
            return OneButtonUI;
        }(Dialogs));
        dialog.OneButtonUI = OneButtonUI;
    })(dialog = ui.dialog || (ui.dialog = {}));
})(ui || (ui = {}));
(function (ui) {
    var dialog;
    (function (dialog) {
        var TwoButtonUI = /** @class */ (function (_super) {
            __extends(TwoButtonUI, _super);
            function TwoButtonUI() {
                return _super.call(this) || this;
            }
            TwoButtonUI.prototype.createChildren = function () {
                View.regComponent("ScaleCom", ScaleCom);
                _super.prototype.createChildren.call(this);
                this.loadUI("dialog/TwoButton");
            };
            return TwoButtonUI;
        }(Dialogs));
        dialog.TwoButtonUI = TwoButtonUI;
    })(dialog = ui.dialog || (ui.dialog = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_dzpk;
    (function (game_dzpk) {
        var DZPKCardsUI = /** @class */ (function (_super) {
            __extends(DZPKCardsUI, _super);
            function DZPKCardsUI() {
                return _super.call(this) || this;
            }
            DZPKCardsUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game_dzpk/DZPKCards");
            };
            return DZPKCardsUI;
        }(View));
        game_dzpk.DZPKCardsUI = DZPKCardsUI;
    })(game_dzpk = ui.game_dzpk || (ui.game_dzpk = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_dzpk;
    (function (game_dzpk) {
        var DZPKCardTypeUI = /** @class */ (function (_super) {
            __extends(DZPKCardTypeUI, _super);
            function DZPKCardTypeUI() {
                return _super.call(this) || this;
            }
            DZPKCardTypeUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game_dzpk/DZPKCardType");
            };
            return DZPKCardTypeUI;
        }(Windows));
        game_dzpk.DZPKCardTypeUI = DZPKCardTypeUI;
    })(game_dzpk = ui.game_dzpk || (ui.game_dzpk = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_dzpk;
    (function (game_dzpk) {
        var DZPKHeadUI = /** @class */ (function (_super) {
            __extends(DZPKHeadUI, _super);
            function DZPKHeadUI() {
                return _super.call(this) || this;
            }
            DZPKHeadUI.prototype.createChildren = function () {
                View.regComponent("BoxMask", BoxMask);
                _super.prototype.createChildren.call(this);
                this.loadUI("game_dzpk/DZPKHead");
            };
            return DZPKHeadUI;
        }(View));
        game_dzpk.DZPKHeadUI = DZPKHeadUI;
    })(game_dzpk = ui.game_dzpk || (ui.game_dzpk = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_dzpk;
    (function (game_dzpk) {
        var DZPKHelpUI = /** @class */ (function (_super) {
            __extends(DZPKHelpUI, _super);
            function DZPKHelpUI() {
                return _super.call(this) || this;
            }
            DZPKHelpUI.prototype.createChildren = function () {
                View.regComponent("ScaleCom", ScaleCom);
                View.regComponent("ButtonState", ButtonState);
                _super.prototype.createChildren.call(this);
                this.loadUI("game_dzpk/DZPKHelp");
            };
            return DZPKHelpUI;
        }(Windows));
        game_dzpk.DZPKHelpUI = DZPKHelpUI;
    })(game_dzpk = ui.game_dzpk || (ui.game_dzpk = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_dzpk;
    (function (game_dzpk) {
        var DZPKMenuUI = /** @class */ (function (_super) {
            __extends(DZPKMenuUI, _super);
            function DZPKMenuUI() {
                return _super.call(this) || this;
            }
            DZPKMenuUI.prototype.createChildren = function () {
                View.regComponent("ButtonState", ButtonState);
                _super.prototype.createChildren.call(this);
                this.loadUI("game_dzpk/DZPKMenu");
            };
            return DZPKMenuUI;
        }(Windows));
        game_dzpk.DZPKMenuUI = DZPKMenuUI;
    })(game_dzpk = ui.game_dzpk || (ui.game_dzpk = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_dzpk;
    (function (game_dzpk) {
        var DZPKRecordUI = /** @class */ (function (_super) {
            __extends(DZPKRecordUI, _super);
            function DZPKRecordUI() {
                return _super.call(this) || this;
            }
            DZPKRecordUI.prototype.createChildren = function () {
                View.regComponent("ScaleCom", ScaleCom);
                _super.prototype.createChildren.call(this);
                this.loadUI("game_dzpk/DZPKRecord");
            };
            return DZPKRecordUI;
        }(Windows));
        game_dzpk.DZPKRecordUI = DZPKRecordUI;
    })(game_dzpk = ui.game_dzpk || (ui.game_dzpk = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_dzpk;
    (function (game_dzpk) {
        var DZPKRoomUI = /** @class */ (function (_super) {
            __extends(DZPKRoomUI, _super);
            function DZPKRoomUI() {
                return _super.call(this) || this;
            }
            DZPKRoomUI.prototype.createChildren = function () {
                View.regComponent("ScaleCom", ScaleCom);
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.loadUI("game_dzpk/DZPKRoom");
            };
            return DZPKRoomUI;
        }(Scenes));
        game_dzpk.DZPKRoomUI = DZPKRoomUI;
    })(game_dzpk = ui.game_dzpk || (ui.game_dzpk = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_dzpk;
    (function (game_dzpk) {
        var DZPKSceneUI = /** @class */ (function (_super) {
            __extends(DZPKSceneUI, _super);
            function DZPKSceneUI() {
                return _super.call(this) || this;
            }
            DZPKSceneUI.prototype.createChildren = function () {
                View.regComponent("ScaleCom", ScaleCom);
                View.regComponent("ui.game_dzpk.DZPKHeadUI", ui.game_dzpk.DZPKHeadUI);
                View.regComponent("ui.game_dzpk.DZPKCardsUI", ui.game_dzpk.DZPKCardsUI);
                View.regComponent("SliderCustomer", SliderCustomer);
                View.regComponent("CheckState", CheckState);
                _super.prototype.createChildren.call(this);
                this.loadUI("game_dzpk/DZPKScene");
            };
            return DZPKSceneUI;
        }(Scenes));
        game_dzpk.DZPKSceneUI = DZPKSceneUI;
    })(game_dzpk = ui.game_dzpk || (ui.game_dzpk = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_dzpk;
    (function (game_dzpk) {
        var DZPKSuccUI = /** @class */ (function (_super) {
            __extends(DZPKSuccUI, _super);
            function DZPKSuccUI() {
                return _super.call(this) || this;
            }
            DZPKSuccUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("game_dzpk/DZPKSucc");
            };
            return DZPKSuccUI;
        }(View));
        game_dzpk.DZPKSuccUI = DZPKSuccUI;
    })(game_dzpk = ui.game_dzpk || (ui.game_dzpk = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_dzpk;
    (function (game_dzpk) {
        var DZPKTakeUI = /** @class */ (function (_super) {
            __extends(DZPKTakeUI, _super);
            function DZPKTakeUI() {
                return _super.call(this) || this;
            }
            DZPKTakeUI.prototype.createChildren = function () {
                View.regComponent("ScaleCom", ScaleCom);
                View.regComponent("CheckState", CheckState);
                View.regComponent("SliderCustomer", SliderCustomer);
                _super.prototype.createChildren.call(this);
                this.loadUI("game_dzpk/DZPKTake");
            };
            return DZPKTakeUI;
        }(Windows));
        game_dzpk.DZPKTakeUI = DZPKTakeUI;
    })(game_dzpk = ui.game_dzpk || (ui.game_dzpk = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_dzpk;
    (function (game_dzpk) {
        var TestVSUI = /** @class */ (function (_super) {
            __extends(TestVSUI, _super);
            function TestVSUI() {
                return _super.call(this) || this;
            }
            TestVSUI.prototype.createChildren = function () {
                View.regComponent("SliderCustomer", SliderCustomer);
                _super.prototype.createChildren.call(this);
                this.loadUI("game_dzpk/TestVS");
            };
            return TestVSUI;
        }(View));
        game_dzpk.TestVSUI = TestVSUI;
    })(game_dzpk = ui.game_dzpk || (ui.game_dzpk = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_hall;
    (function (game_hall) {
        var GameChoseUI = /** @class */ (function (_super) {
            __extends(GameChoseUI, _super);
            function GameChoseUI() {
                return _super.call(this) || this;
            }
            GameChoseUI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                View.regComponent("ScaleCom", ScaleCom);
                _super.prototype.createChildren.call(this);
                this.loadUI("game_hall/GameChose");
            };
            return GameChoseUI;
        }(View));
        game_hall.GameChoseUI = GameChoseUI;
    })(game_hall = ui.game_hall || (ui.game_hall = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_hall;
    (function (game_hall) {
        var GameHallUI = /** @class */ (function (_super) {
            __extends(GameHallUI, _super);
            function GameHallUI() {
                return _super.call(this) || this;
            }
            GameHallUI.prototype.createChildren = function () {
                View.regComponent("ScaleCom", ScaleCom);
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.loadUI("game_hall/GameHall");
            };
            return GameHallUI;
        }(Scenes));
        game_hall.GameHallUI = GameHallUI;
    })(game_hall = ui.game_hall || (ui.game_hall = {}));
})(ui || (ui = {}));
(function (ui) {
    var pipei;
    (function (pipei) {
        var PiPeiViewUI = /** @class */ (function (_super) {
            __extends(PiPeiViewUI, _super);
            function PiPeiViewUI() {
                return _super.call(this) || this;
            }
            PiPeiViewUI.prototype.createChildren = function () {
                View.regComponent("ScaleCom", ScaleCom);
                _super.prototype.createChildren.call(this);
                this.loadUI("pipei/PiPeiView");
            };
            return PiPeiViewUI;
        }(Windows));
        pipei.PiPeiViewUI = PiPeiViewUI;
    })(pipei = ui.pipei || (ui.pipei = {}));
})(ui || (ui = {}));
(function (ui) {
    var setting;
    (function (setting) {
        var SettingWindowUI = /** @class */ (function (_super) {
            __extends(SettingWindowUI, _super);
            function SettingWindowUI() {
                return _super.call(this) || this;
            }
            SettingWindowUI.prototype.createChildren = function () {
                View.regComponent("CheckState", CheckState);
                View.regComponent("ScaleCom", ScaleCom);
                View.regComponent("SettingSlider", SettingSlider);
                _super.prototype.createChildren.call(this);
                this.loadUI("setting/SettingWindow");
            };
            return SettingWindowUI;
        }(Windows));
        setting.SettingWindowUI = SettingWindowUI;
    })(setting = ui.setting || (ui.setting = {}));
})(ui || (ui = {}));
(function (ui) {
    var TempleteWindowUI = /** @class */ (function (_super) {
        __extends(TempleteWindowUI, _super);
        function TempleteWindowUI() {
            return _super.call(this) || this;
        }
        TempleteWindowUI.prototype.createChildren = function () {
            View.regComponent("ScaleCom", ScaleCom);
            _super.prototype.createChildren.call(this);
            this.loadUI("TempleteWindow");
        };
        return TempleteWindowUI;
    }(Windows));
    ui.TempleteWindowUI = TempleteWindowUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map