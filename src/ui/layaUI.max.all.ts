
import View=core.view.ComView;
import Dialogs=core.view.DialogView;
import Scenes=core.view.SceneView;
import Windows=core.view.WinView;
module ui.avater_chose {
    export class AvaterChoseUI extends Windows {
		public btn_close:Laya.Image;
		public btn_save:Laya.Button;
		public man_list:Laya.List;
		public woman_list:Laya.List;
		public img_my_avater:Laya.Image;

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("core.comlaya.ScaleCom",core.comlaya.ScaleCom);

            super.createChildren();
            this.loadUI("avater_chose/AvaterChose");

        }

    }
}

module ui.dialog {
    export class OneButtonUI extends Dialogs {

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("core.comlaya.ScaleCom",core.comlaya.ScaleCom);

            super.createChildren();
            this.loadUI("dialog/OneButton");

        }

    }
}

module ui.dialog {
    export class TwoButtonUI extends Dialogs {

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("core.comlaya.ScaleCom",core.comlaya.ScaleCom);

            super.createChildren();
            this.loadUI("dialog/TwoButton");

        }

    }
}

module ui.game_dzpk {
    export class DZPKCardsUI extends View {

        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.loadUI("game_dzpk/DZPKCards");

        }

    }
}

module ui.game_dzpk {
    export class DZPKCardTypeUI extends Windows {

        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.loadUI("game_dzpk/DZPKCardType");

        }

    }
}

module ui.game_dzpk {
    export class DZPKHeadUI extends View {

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("core.comlaya.BoxMask",core.comlaya.BoxMask);

            super.createChildren();
            this.loadUI("game_dzpk/DZPKHead");

        }

    }
}

module ui.game_dzpk {
    export class DZPKHelpUI extends Windows {
		public btn_close:Laya.Image;
		public vs_des:Laya.ViewStack;
		public tab_chose:Laya.Tab;

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("core.comlaya.ScaleCom",core.comlaya.ScaleCom);
			View.regComponent("core.comlaya.ButtonState",core.comlaya.ButtonState);

            super.createChildren();
            this.loadUI("game_dzpk/DZPKHelp");

        }

    }
}

module ui.game_dzpk {
    export class DZPKMenuUI extends Windows {
		public btn_out:core.comlaya.ButtonState;
		public btn_setting:core.comlaya.ButtonState;
		public btn_card:core.comlaya.ButtonState;
		public btn_record:core.comlaya.ButtonState;

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("core.comlaya.ButtonState",core.comlaya.ButtonState);

            super.createChildren();
            this.loadUI("game_dzpk/DZPKMenu");

        }

    }
}

module ui.game_dzpk {
    export class DZPKRecordUI extends Windows {
		public btn_close:Laya.Image;
		public list_record:Laya.List;
		public box_label:Laya.Box;
		public txt_no_record:Laya.Label;

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("core.comlaya.ScaleCom",core.comlaya.ScaleCom);

            super.createChildren();
            this.loadUI("game_dzpk/DZPKRecord");

        }

    }
}

module ui.game_dzpk {
    export class DZPKRoomUI extends Scenes {
		public btn_back:Laya.Button;
		public list_rooms:Laya.List;
		public txt_name:laya.display.Text;
		public txt_gold:laya.display.Text;
		public btn_header:Laya.Image;
		public btn_help:Laya.Box;
		public btn_record:Laya.Box;

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("core.comlaya.ScaleCom",core.comlaya.ScaleCom);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.loadUI("game_dzpk/DZPKRoom");

        }

    }
}

module ui.game_dzpk {
    export class DZPKSceneUI extends Scenes {
		public img_bg:Laya.Image;
		public btn_menu:Laya.Image;
		public box_player0:Laya.Box;
		public box_player1:Laya.Box;
		public box_player2:Laya.Box;
		public box_player3:Laya.Box;
		public box_player4:Laya.Box;
		public box_player5:Laya.Box;
		public box_player6:Laya.Box;
		public box_player7:Laya.Box;
		public box_player8:Laya.Box;
		public box_common_cards:Laya.Box;
		public box_dichi:Laya.Box;
		public txt_dichi:Laya.Label;
		public txt_blind:Laya.Label;
		public vs_state:Laya.ViewStack;
		public btn_pipei:Laya.Button;
		public btn_follow:Laya.Button;
		public btn_add:Laya.Button;
		public btn_qipai:Laya.Button;
		public box_slid:Laya.Box;
		public sid_money:core.comlaya.SliderCustomer;
		public btn_mu10:Laya.Button;
		public btn_mu5:Laya.Button;
		public btn_mu3:Laya.Button;
		public btn_allin:Laya.Button;
		public txt_money:Laya.Label;
		public cb_qi:core.comlaya.CheckState;
		public cb_gen:core.comlaya.CheckState;
		public cb_gen_all:core.comlaya.CheckState;
		public txt_game_id:Laya.Label;
		public img_heguan:Laya.Image;

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("core.comlaya.ScaleCom",core.comlaya.ScaleCom);
			View.regComponent("ui.game_dzpk.DZPKHeadUI",ui.game_dzpk.DZPKHeadUI);
			View.regComponent("ui.game_dzpk.DZPKCardsUI",ui.game_dzpk.DZPKCardsUI);
			View.regComponent("core.comlaya.SliderCustomer",core.comlaya.SliderCustomer);
			View.regComponent("core.comlaya.CheckState",core.comlaya.CheckState);

            super.createChildren();
            this.loadUI("game_dzpk/DZPKScene");

        }

    }
}

module ui.game_dzpk {
    export class DZPKSuccUI extends View {
		public img_succ_type:Laya.Image;

        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.loadUI("game_dzpk/DZPKSucc");

        }

    }
}

module ui.game_dzpk {
    export class DZPKTakeUI extends Windows {
		public btn_close:Laya.Image;
		public txt_all:Laya.Label;
		public txt_min:Laya.Label;
		public txt_max:Laya.Label;
		public chk_chose:core.comlaya.CheckState;
		public btn_ok:Laya.Button;
		public sid_take:core.comlaya.SliderCustomer;

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("core.comlaya.ScaleCom",core.comlaya.ScaleCom);
			View.regComponent("core.comlaya.CheckState",core.comlaya.CheckState);
			View.regComponent("core.comlaya.SliderCustomer",core.comlaya.SliderCustomer);

            super.createChildren();
            this.loadUI("game_dzpk/DZPKTake");

        }

    }
}

module ui.game_dzpk {
    export class TestVSUI extends View {
		public vs:core.comlaya.SliderCustomer;

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("core.comlaya.SliderCustomer",core.comlaya.SliderCustomer);

            super.createChildren();
            this.loadUI("game_dzpk/TestVS");

        }

    }
}

module ui.game_hall {
    export class GameChoseUI extends View {

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);
			View.regComponent("core.comlaya.ScaleCom",core.comlaya.ScaleCom);

            super.createChildren();
            this.loadUI("game_hall/GameChose");

        }

    }
}

module ui.game_hall {
    export class GameHallUI extends Scenes {
		public btn_full:Laya.Button;
		public btn_setting:Laya.Button;
		public txt_name:laya.display.Text;
		public txt_gold:laya.display.Text;
		public btn_header:Laya.Image;
		public ani_title:Laya.Animation;
		public btn_620:Laya.Box;
		public btn_720:Laya.Box;
		public btn_820:Laya.Box;

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("core.comlaya.ScaleCom",core.comlaya.ScaleCom);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.loadUI("game_hall/GameHall");

        }

    }
}

module ui.pipei {
    export class PiPeiViewUI extends Windows {
		public btn_close:Laya.Image;
		public txt_content:Laya.Label;

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("core.comlaya.ScaleCom",core.comlaya.ScaleCom);

            super.createChildren();
            this.loadUI("pipei/PiPeiView");

        }

    }
}

module ui.setting {
    export class SettingWindowUI extends Windows {
		public btn_close:Laya.Image;
		public slider_music:core.comlaya.SettingSlider;
		public slider_sound:core.comlaya.SettingSlider;
		public sound_switch:core.comlaya.CheckState;
		public music_switch:core.comlaya.CheckState;

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("core.comlaya.CheckState",core.comlaya.CheckState);
			View.regComponent("core.comlaya.ScaleCom",core.comlaya.ScaleCom);
			View.regComponent("core.comlaya.SettingSlider",core.comlaya.SettingSlider);

            super.createChildren();
            this.loadUI("setting/SettingWindow");

        }

    }
}

module ui {
    export class TempleteWindowUI extends Windows {
		public btn_close:Laya.Image;

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("core.comlaya.ScaleCom",core.comlaya.ScaleCom);

            super.createChildren();
            this.loadUI("TempleteWindow");

        }

    }
}
