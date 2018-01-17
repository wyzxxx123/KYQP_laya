
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

        public static  uiView:any ={"type":"Windows","props":{"width":1000,"height":550},"child":[{"type":"Image","props":{"y":0,"x":0,"top":0,"skin":"template/TempleteWindow/public/b1.png","sizeGrid":"100,80,60,80","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"y":18,"x":842,"var":"btn_close","top":18,"skin":"template/TempleteWindow/public/b3_normal.png","right":18},"child":[{"type":"Script","props":{"runtime":"core.comlaya.ScaleCom"}}]},{"type":"Image","props":{"y":12,"skin":"winTitle/header_icon.png","centerX":0}},{"type":"Button","props":{"y":437,"x":690,"var":"btn_save","stateNum":1,"skin":"userInfoWindow/btn_save_selected.png"},"child":[{"type":"Script","props":{"runtime":"core.comlaya.ScaleCom"}}]},{"type":"Image","props":{"y":94,"x":499,"skin":"userInfoWindow/line1.png","height":300,"centerX":0}},{"type":"Image","props":{"y":400,"x":153,"width":112,"skin":"public/header_bg.png","height":112}},{"type":"List","props":{"y":96,"x":46,"width":440,"var":"man_list","selectEnable":true,"height":300},"child":[{"type":"Box","props":{"y":0,"x":0,"name":"render"},"child":[{"type":"Image","props":{"skin":"userInfoWindow/header_scroll_bg.png"}},{"type":"Image","props":{"width":94,"name":"img_head","height":94,"centerY":0,"centerX":0}},{"type":"Image","props":{"skin":"userInfoWindow/header_selected.png","name":"selected_bg","centerY":0,"centerX":0}}]}]},{"type":"List","props":{"y":96,"x":510,"width":440,"var":"woman_list","selectEnable":true,"repeatX":3,"height":300},"child":[{"type":"Box","props":{"name":"render"},"child":[{"type":"Image","props":{"skin":"userInfoWindow/header_scroll_bg.png"}},{"type":"Image","props":{"y":42,"x":35,"width":94,"name":"img_head","height":94,"centerY":0,"centerX":0}},{"type":"Image","props":{"skin":"userInfoWindow/header_selected.png","name":"selected_bg","centerY":0,"centerX":0}}]}]},{"type":"Image","props":{"y":409,"x":161,"width":96,"var":"img_my_avater","height":96}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("core.comlaya.ScaleCom",core.comlaya.ScaleCom);

            super.createChildren();
            this.createView(ui.avater_chose.AvaterChoseUI.uiView);

        }

    }
}

module ui.dialog {
    export class OneButtonUI extends Dialogs {

        public static  uiView:any ={"type":"Dialogs","props":{"width":754,"height":418},"child":[{"type":"Image","props":{"y":133,"x":208,"top":0,"skin":"template/TempleteWindow/public/b1.png","sizeGrid":"100,80,60,80","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"y":151,"x":650,"top":18,"skin":"template/TempleteWindow/public/b3_normal.png","right":18,"name":"close"},"child":[{"type":"Script","props":{"runtime":"core.comlaya.ScaleCom"}}]},{"type":"Label","props":{"y":22,"text":"提  示","name":"title","fontSize":42,"font":"Microsoft YaHei","color":"#FAFFFF","centerX":0.427734375}},{"type":"Label","props":{"y":115,"width":624,"valign":"middle","text":"确定要退出游戏？","name":"content","height":158,"fontSize":28,"font":"Microsoft YaHei","color":"#FAFFFF","centerX":0,"align":"center"}},{"type":"Button","props":{"y":298,"x":260,"width":248,"stateNum":1,"skin":"public/a01.png","name":"ok","layoutEnabled":false,"labelSize":40,"labelPadding":"-6","labelFont":"Microsoft YaHei","labelColors":"#FAFFFF","labelAlign":"center","label":"确 定","height":78},"child":[{"type":"Script","props":{"runtime":"core.comlaya.ScaleCom"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("core.comlaya.ScaleCom",core.comlaya.ScaleCom);

            super.createChildren();
            this.createView(ui.dialog.OneButtonUI.uiView);

        }

    }
}

module ui.dialog {
    export class TwoButtonUI extends Dialogs {

        public static  uiView:any ={"type":"Dialogs","props":{"width":754,"height":418},"child":[{"type":"Image","props":{"y":123,"x":198,"top":0,"skin":"template/TempleteWindow/public/b1.png","sizeGrid":"100,80,60,80","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"y":141,"x":640,"top":18,"skin":"template/TempleteWindow/public/b3_normal.png","right":18,"name":"close"},"child":[{"type":"Script","props":{"runtime":"core.comlaya.ScaleCom"}}]},{"type":"Label","props":{"y":22,"text":"提  示","name":"title","fontSize":42,"font":"Microsoft YaHei","color":"#FAFFFF","centerX":0}},{"type":"Label","props":{"y":122,"x":10,"width":624,"valign":"middle","text":"确定要退出游戏？","name":"content","height":158,"fontSize":28,"font":"Microsoft YaHei","color":"#FAFFFF","centerX":0,"align":"center"}},{"type":"Button","props":{"y":300,"x":66,"width":248,"stateNum":1,"skin":"public/a1.png","name":"cancel","labelSize":40,"labelPadding":"-6","labelFont":"Microsoft YaHei","labelColors":"#FAFFFF","label":"取 消","height":78},"child":[{"type":"Script","props":{"runtime":"core.comlaya.ScaleCom"}}]},{"type":"Button","props":{"y":301,"x":443,"width":248,"stateNum":1,"skin":"public/a01.png","name":"ok","layoutEnabled":false,"labelSize":40,"labelPadding":"-6","labelFont":"Microsoft YaHei","labelColors":"#FAFFFF","labelAlign":"center","label":"确 定","height":78},"child":[{"type":"Script","props":{"runtime":"core.comlaya.ScaleCom"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("core.comlaya.ScaleCom",core.comlaya.ScaleCom);

            super.createChildren();
            this.createView(ui.dialog.TwoButtonUI.uiView);

        }

    }
}

module ui.game_dzpk {
    export class DZPKCardsUI extends View {

        public static  uiView:any ={"type":"View","props":{},"child":[{"type":"Box","props":{"y":12,"x":0,"scaleY":0.8,"scaleX":0.8,"rotation":-11,"name":"box_lcard"},"child":[{"type":"Image","props":{"skin":"dzpk/cards/card_0.png","name":"img_card"}},{"type":"Image","props":{"skin":"dzpk/cards/cardzhezhao.png","name":"img_zhao"}},{"type":"Image","props":{"width":95,"skin":"dzpk/cards/cardTypeTip2.png","name":"img_tip","height":130}}]},{"type":"Box","props":{"y":-2,"x":44,"scaleY":0.8,"scaleX":0.8,"rotation":11,"name":"box_rcard"},"child":[{"type":"Image","props":{"skin":"dzpk/cards/card_0.png","name":"img_card"}},{"type":"Image","props":{"skin":"dzpk/cards/cardzhezhao.png","name":"img_zhao"}},{"type":"Image","props":{"width":95,"skin":"dzpk/cards/cardTypeTip2.png","name":"img_tip","height":130}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.game_dzpk.DZPKCardsUI.uiView);

        }

    }
}

module ui.game_dzpk {
    export class DZPKCardTypeUI extends Windows {

        public static  uiView:any ={"type":"Windows","props":{"y":0,"x":0,"width":324,"height":630},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"dzpk/zh-cn/gameScene/cardType.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.game_dzpk.DZPKCardTypeUI.uiView);

        }

    }
}

module ui.game_dzpk {
    export class DZPKHeadUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":156,"height":156},"child":[{"type":"Box","props":{"y":16,"x":16,"name":"box_info"},"child":[{"type":"Box","props":{"width":124,"name":"box_head","height":124,"runtime":"core.comlaya.BoxMask"},"child":[{"type":"Image","props":{"width":124,"skin":"dzpk/gameScene/headbiankuang.png","name":"mmask","height":124,"centerY":0,"centerX":0}},{"type":"Image","props":{"width":124,"skin":"gamehall/avater/man0.png","name":"img_head","height":124,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"skin":"dzpk/gameScene/headFrame.png","scaleY":0.8,"scaleX":0.8}},{"type":"Box","props":{"y":89,"x":-16,"name":"box_name"},"child":[{"type":"Image","props":{"skin":"dzpk/gameScene/userinfo_bg.png"}},{"type":"Label","props":{"y":3,"x":-3,"width":84,"text":"label","name":"txt_nickname","height":13,"fontSize":18,"font":"Microsoft YaHei","color":"#ffffff","centerX":0,"align":"center"}},{"type":"Label","props":{"y":23,"x":-3,"width":109,"text":"label","name":"txt_money","height":12,"fontSize":19,"font":"Microsoft YaHei","color":"#CDC585","centerX":0,"align":"center"}}]}]},{"type":"Box","props":{"y":0,"x":23,"name":"box_operator","height":56},"child":[{"type":"Image","props":{"skin":"dzpk/zh-cn/font/operateActionFont/operateAction_bg.png","centerY":0}},{"type":"Image","props":{"skin":"dzpk/zh-cn/font/operateActionFont/operateAction_guopai.png","name":"img_operator"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("core.comlaya.BoxMask",core.comlaya.BoxMask);

            super.createChildren();
            this.createView(ui.game_dzpk.DZPKHeadUI.uiView);

        }

    }
}

module ui.game_dzpk {
    export class DZPKHelpUI extends Windows {
		public btn_close:Laya.Image;
		public vs_des:Laya.ViewStack;
		public tab_chose:Laya.Tab;

        public static  uiView:any ={"type":"Windows","props":{"width":790,"height":570},"child":[{"type":"Image","props":{"width":778,"top":0,"skin":"template/TempleteWindow/public/b1.png","sizeGrid":"100,50,60,50","right":0,"left":0,"height":551,"bottom":0}},{"type":"Image","props":{"y":146,"x":636,"var":"btn_close","top":18,"skin":"template/TempleteWindow/public/b3_normal.png","right":18},"child":[{"type":"Script","props":{"runtime":"core.comlaya.ScaleCom"}}]},{"type":"Image","props":{"y":84,"skin":"dzpk/helpWindow/bg_helpbtns2.png","centerX":-0.5}},{"type":"Image","props":{"y":12,"skin":"dzpk/zh-cn/helpWindow/title_help.png","centerX":0}},{"type":"ViewStack","props":{"y":129,"width":732,"var":"vs_des","height":412,"centerX":0},"child":[{"type":"Image","props":{"skin":"dzpk/zh-cn/helpWindow/help3.png","name":"item3","centerY":0,"centerX":0}},{"type":"Image","props":{"skin":"dzpk/zh-cn/helpWindow/help2.png","name":"item2","centerY":0,"centerX":0}},{"type":"Image","props":{"skin":"dzpk/zh-cn/helpWindow/help1.png","name":"item1","centerY":0,"centerX":0}},{"type":"Image","props":{"skin":"dzpk/zh-cn/helpWindow/help0.png","name":"item0","centerY":0,"centerX":0}}]},{"type":"Tab","props":{"y":86,"x":30,"var":"tab_chose","selectedIndex":0},"child":[{"type":"Button","props":{"width":181,"name":"item0","height":39,"runtime":"core.comlaya.ButtonState"},"child":[{"type":"Image","props":{"visible":false,"skin":"dzpk/zh-cn/helpWindow/help_tabar1_0.png","name":"up","centerY":0,"centerX":0}},{"type":"Box","props":{"width":181,"name":"over","height":54,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"visible":true,"skin":"dzpk/zh-cn/helpWindow/help_tabarBg_0.png","centerY":0}},{"type":"Image","props":{"visible":true,"skin":"dzpk/zh-cn/helpWindow/help_tabar1_1.png","centerY":0,"centerX":0}}]},{"type":"Box","props":{"width":181,"name":"down","height":54,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"skin":"dzpk/zh-cn/helpWindow/help_tabarBg_0.png","centerY":0}},{"type":"Image","props":{"skin":"dzpk/zh-cn/helpWindow/help_tabar1_1.png","centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"x":181,"width":182,"name":"item1","height":39,"runtime":"core.comlaya.ButtonState"},"child":[{"type":"Image","props":{"y":9,"x":143,"visible":false,"skin":"dzpk/zh-cn/helpWindow/help_tabar2_0.png","name":"up","centerY":0,"centerX":0}},{"type":"Box","props":{"y":5,"x":93,"width":181,"name":"over","height":54,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"visible":true,"skin":"dzpk/zh-cn/helpWindow/help_tabarBg_1.png","centerY":0}},{"type":"Image","props":{"visible":true,"skin":"dzpk/zh-cn/helpWindow/help_tabar2_1.png","centerY":0,"centerX":0}}]},{"type":"Box","props":{"y":5,"x":93,"width":181,"name":"down","height":54,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"skin":"dzpk/zh-cn/helpWindow/help_tabarBg_1.png","centerY":0}},{"type":"Image","props":{"skin":"dzpk/zh-cn/helpWindow/help_tabar2_1.png","centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"x":364,"width":182,"name":"item2","height":39,"runtime":"core.comlaya.ButtonState"},"child":[{"type":"Image","props":{"y":10,"x":-40,"visible":false,"skin":"dzpk/zh-cn/helpWindow/help_tabar3_0.png","name":"up","centerY":0,"centerX":0}},{"type":"Box","props":{"y":10,"x":-90,"width":181,"name":"over","height":54,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"visible":true,"skin":"dzpk/zh-cn/helpWindow/help_tabarBg_1.png","centerY":0}},{"type":"Image","props":{"visible":true,"skin":"dzpk/zh-cn/helpWindow/help_tabar3_1.png","centerY":0,"centerX":0}}]},{"type":"Box","props":{"y":10,"x":-90,"width":181,"name":"down","height":54,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"skin":"dzpk/zh-cn/helpWindow/help_tabarBg_1.png","centerY":0}},{"type":"Image","props":{"skin":"dzpk/zh-cn/helpWindow/help_tabar3_1.png","centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"x":547,"width":181,"name":"item3","height":39,"runtime":"core.comlaya.ButtonState"},"child":[{"type":"Image","props":{"y":15,"x":-223,"visible":false,"skin":"dzpk/zh-cn/helpWindow/help_tabar4_0.png","name":"up","centerY":0,"centerX":0}},{"type":"Box","props":{"y":15,"x":-273,"width":181,"name":"over","height":54,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"x":181,"visible":true,"skin":"dzpk/zh-cn/helpWindow/help_tabarBg_0.png","scaleX":-1,"centerY":0}},{"type":"Image","props":{"visible":true,"skin":"dzpk/zh-cn/helpWindow/help_tabar4_1.png","centerY":0,"centerX":0}}]},{"type":"Box","props":{"y":15,"x":-273,"width":181,"name":"down","height":54,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"x":181,"skin":"dzpk/zh-cn/helpWindow/help_tabarBg_0.png","scaleX":-1,"centerY":0}},{"type":"Image","props":{"skin":"dzpk/zh-cn/helpWindow/help_tabar4_1.png","centerY":0,"centerX":0}}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("core.comlaya.ScaleCom",core.comlaya.ScaleCom);
			View.regComponent("core.comlaya.ButtonState",core.comlaya.ButtonState);

            super.createChildren();
            this.createView(ui.game_dzpk.DZPKHelpUI.uiView);

        }

    }
}

module ui.game_dzpk {
    export class DZPKMenuUI extends Windows {
		public btn_out:core.comlaya.ButtonState;
		public btn_setting:core.comlaya.ButtonState;
		public btn_card:core.comlaya.ButtonState;
		public btn_record:core.comlaya.ButtonState;

        public static  uiView:any ={"type":"Windows","props":{"width":206,"height":255},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"dzpk/gameScene/menuPanelBg.png"}},{"type":"Button","props":{"y":4,"x":4,"width":196,"var":"btn_out","stateNum":1,"height":58,"runtime":"core.comlaya.ButtonState"},"child":[{"type":"Image","props":{"skin":"dzpk/gameScene/menuPanelButtonBg1.png","name":"over"}},{"type":"Image","props":{"skin":"dzpk/gameScene/menuPanelButtonBg1.png","name":"down"}},{"type":"Image","props":{"y":5,"x":20,"skin":"dzpk/zh-cn/font/menuPanelFont/backButton.png","centerY":0,"centerX":0}}]},{"type":"Button","props":{"y":63,"x":4,"width":196,"var":"btn_setting","stateNum":1,"height":62,"runtime":"core.comlaya.ButtonState"},"child":[{"type":"Image","props":{"skin":"dzpk/gameScene/menuPanelButtonBg2.png","name":"over","centerY":0,"centerX":0}},{"type":"Image","props":{"y":0,"x":0,"skin":"dzpk/gameScene/menuPanelButtonBg2.png","name":"down","centerY":0,"centerX":0}},{"type":"Image","props":{"skin":"dzpk/zh-cn/font/menuPanelFont/settingButton.png","centerY":0,"centerX":0}}]},{"type":"Button","props":{"y":126,"x":4,"width":196,"var":"btn_card","stateNum":1,"height":62,"runtime":"core.comlaya.ButtonState"},"child":[{"type":"Image","props":{"skin":"dzpk/gameScene/menuPanelButtonBg2.png","name":"over"}},{"type":"Image","props":{"skin":"dzpk/gameScene/menuPanelButtonBg2.png","name":"down"}},{"type":"Image","props":{"skin":"dzpk/zh-cn/font/menuPanelFont/cardTypeButton.png","centerY":0,"centerX":0}}]},{"type":"Button","props":{"y":189,"x":4,"width":196,"var":"btn_record","stateNum":1,"height":58,"runtime":"core.comlaya.ButtonState"},"child":[{"type":"Image","props":{"y":58,"x":0,"skin":"dzpk/gameScene/menuPanelButtonBg1.png","scaleY":-1,"name":"over"}},{"type":"Image","props":{"y":58,"skin":"dzpk/gameScene/menuPanelButtonBg1.png","scaleY":-1,"name":"down"}},{"type":"Image","props":{"skin":"dzpk/zh-cn/font/menuPanelFont/gameRecordButton.png","centerY":0,"centerX":0}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("core.comlaya.ButtonState",core.comlaya.ButtonState);

            super.createChildren();
            this.createView(ui.game_dzpk.DZPKMenuUI.uiView);

        }

    }
}

module ui.game_dzpk {
    export class DZPKRecordUI extends Windows {
		public btn_close:Laya.Image;
		public list_record:Laya.List;
		public box_label:Laya.Box;
		public txt_no_record:Laya.Label;

        public static  uiView:any ={"type":"Windows","props":{"y":0,"x":0,"width":1000,"height":490},"child":[{"type":"Image","props":{"top":0,"skin":"dzpk/gameRecord/gameRecordBg.png","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"var":"btn_close","top":9,"skin":"template/TempleteWindow/public/b3_normal.png","right":10},"child":[{"type":"Script","props":{"runtime":"core.comlaya.ScaleCom"}}]},{"type":"List","props":{"y":144,"x":24,"width":952,"var":"list_record","height":275},"child":[{"type":"Box","props":{"width":952,"name":"render","height":66},"child":[{"type":"Image","props":{"skin":"dzpk/gameRecord/gameRecorditemBg.png","name":"img_bg"}},{"type":"Label","props":{"y":21,"x":29,"text":"label","name":"txt_num","fontSize":26,"font":"Microsoft YaHei","color":"#FFFFFF"}},{"type":"Label","props":{"y":23,"x":98,"width":320,"text":"label","name":"txt_id","fontSize":21,"font":"Microsoft YaHei","color":"#6FD361","align":"center"}},{"type":"Label","props":{"y":22,"x":427,"width":115,"text":"label","name":"txt_room_name","fontSize":23,"font":"Microsoft YaHei","color":"#FFFFFF","align":"center"}},{"type":"Label","props":{"y":23,"x":551,"width":150,"text":"label","name":"txt_score","fontSize":21,"font":"Microsoft YaHei","color":"#6FD361","align":"center"}},{"type":"Label","props":{"y":25,"x":710,"width":200,"text":"label","name":"txt_end_time","fontSize":18,"font":"Microsoft YaHei","color":"#FFFFFF","align":"center"}}]}]},{"type":"Box","props":{"y":85,"x":61,"var":"box_label"},"child":[{"type":"Label","props":{"y":0,"x":-2,"text":"序号","fontSize":26,"font":"Microsoft YaHei","color":"#77F3FF","bold":true}},{"type":"Label","props":{"y":0,"x":172,"text":"牌局编号","fontSize":26,"font":"Microsoft YaHei","color":"#77F3FF","bold":true}},{"type":"Label","props":{"y":0,"x":418,"text":"房间","fontSize":26,"font":"Microsoft YaHei","color":"#77F3FF","bold":true}},{"type":"Label","props":{"y":0,"x":564,"text":"盈利","fontSize":26,"font":"Microsoft YaHei","color":"#77F3FF","bold":true}},{"type":"Label","props":{"y":0,"x":723,"text":"结束时间","fontSize":26,"font":"Microsoft YaHei","color":"#77F3FF","bold":true}}]},{"type":"Image","props":{"y":8,"skin":"dzpk/zh-cn/gameRecord/gameRecordTitle.png","centerX":0.5}},{"type":"Label","props":{"y":436,"text":"展示当天内最近10条游戏记录","fontSize":22,"font":"Microsoft YaHei","color":"#74D5F6","centerX":-0.0986328125}},{"type":"Label","props":{"y":231,"var":"txt_no_record","text":"暂无牌局记录","fontSize":30,"font":"Microsoft YaHei","color":"#ffffff","centerX":0}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("core.comlaya.ScaleCom",core.comlaya.ScaleCom);

            super.createChildren();
            this.createView(ui.game_dzpk.DZPKRecordUI.uiView);

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

        public static  uiView:any ={"type":"Scenes","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"skin":"dzpk/roomHallScene/roomHallScene_bg.jpg"}},{"type":"Image","props":{"y":47,"x":260,"skin":"dzpk/roomHallScene/effcet_pic_person.png","centerY":117,"centerX":-208}},{"type":"Image","props":{"y":0,"x":0,"skin":"dzpk/roomHallScene/left_bg.png"}},{"type":"Button","props":{"y":653,"x":0,"stateNum":1,"skin":"dzpk/roomHallScene/btn_bg.png","selected":false,"mouseEnabled":false,"left":0,"bottom":0}},{"type":"Button","props":{"y":0,"x":1139,"var":"btn_back","top":0,"stateNum":1,"skin":"dzpk/roomHallScene/btn_back_bg.png","right":0},"child":[{"type":"Script","props":{"runtime":"core.comlaya.ScaleCom"}}]},{"type":"Box","props":{"y":91,"right":20},"child":[{"type":"Image","props":{"y":8,"x":12,"skin":"dzpk/roomHallScene/right_bg.png"}},{"type":"Image","props":{"skin":"dzpk/roomHallScene/tesax_icon.png"}},{"type":"Button","props":{"y":35,"x":131,"stateNum":1,"skin":"dzpk/zh-cn/roomHallScene/btn_3_normal.png"}},{"type":"List","props":{"y":121,"x":79,"width":579,"var":"list_rooms","spaceY":20,"spaceX":20,"selectEnable":false,"repeatX":2,"height":430},"child":[{"type":"Box","props":{"width":272,"name":"render","height":195},"child":[{"type":"Box","props":{"y":0,"x":0,"name":"box_scale"},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"dzpk/zh-cn/roomHallScene/game_room_0_selected.png","name":"img_bg"}},{"type":"Image","props":{"y":113,"x":91,"skin":"dzpk/zh-cn/roomHallScene/base_score_icon.png"}},{"type":"FontClip","props":{"y":113,"x":145,"value":1.5,"skin":"bitmapFont/scoreNumber.png","sheet":"2/0. 3891 7645   ","name":"txt_blind","direction":"horizontal","align":"left"}},{"type":"Label","props":{"y":161,"x":86,"text":"准入：00","name":"txt_limit_in","fontSize":24,"font":"Microsoft YaHei","color":"#BBD5CC","centerX":0.07421875}},{"type":"Script","props":{"runtime":"core.comlaya.ScaleCom"}}]}]}]}]},{"type":"Box","props":{"y":12,"x":6},"child":[{"type":"Image","props":{"y":48,"x":105,"skin":"gamehall/mainScene/cion_bg.png"}},{"type":"Image","props":{"y":42,"x":82,"skin":"gamehall/mainScene/cion_icon.png"}},{"type":"Text","props":{"y":4,"x":93,"var":"txt_name","text":"ID：{0}","height":30,"fontSize":21,"font":"Microsoft YaHei","color":"#BABDC2","bold":false,"align":"left"}},{"type":"Text","props":{"y":49,"x":130,"width":132,"var":"txt_gold","text":"9,999,999.99","height":29,"fontSize":22,"font":"Microsoft YaHei","color":"#ffd570"}},{"type":"Image","props":{"y":0,"x":0,"width":80,"var":"btn_header","height":80}}]},{"type":"Box","props":{"y":651,"x":25,"width":100,"var":"btn_help","height":74},"child":[{"type":"Button","props":{"width":96,"stateNum":1,"skin":"dzpk/zh-cn/roomHallScene/btn_help_normal.png","height":41,"centerY":0}},{"type":"Script","props":{"runtime":"core.comlaya.ScaleCom"}}]},{"type":"Box","props":{"y":651,"x":165,"width":100,"var":"btn_record","height":74},"child":[{"type":"Button","props":{"stateNum":1,"skin":"dzpk/zh-cn/roomHallScene/btn_record_normal.png","centerY":0}},{"type":"Script","props":{"runtime":"core.comlaya.ScaleCom"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("core.comlaya.ScaleCom",core.comlaya.ScaleCom);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.game_dzpk.DZPKRoomUI.uiView);

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

        public static  uiView:any ={"type":"Scenes","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"img_bg","skin":"dzpk/gameScene/gameBg.png"}},{"type":"Image","props":{"skin":"dzpk/gameScene/game_top_bg.png"}},{"type":"Image","props":{"var":"btn_menu","top":0,"skin":"dzpk/gameScene/menuButton.png","left":0},"child":[{"type":"Script","props":{"runtime":"core.comlaya.ScaleCom"}}]},{"type":"Image","props":{"skin":"dzpk/gameScene/table_blue.png","centerY":26,"centerX":0}},{"type":"Box","props":{"y":462,"x":490,"var":"box_player0"},"child":[{"type":"DZPKHead","props":{"y":0,"x":0,"name":"ui_player","runtime":"ui.game_dzpk.DZPKHeadUI"}},{"type":"Image","props":{"y":20,"x":-3,"skin":"dzpk/gameScene/bankerIcon.png","scaleY":0.6,"scaleX":0.6,"name":"img_banker"}},{"type":"Box","props":{"y":-20,"x":54,"width":155,"name":"box_blind","height":33},"child":[{"type":"Image","props":{"y":6,"x":29,"skin":"dzpk/gameScene/chipValueBg.png","centerY":0}},{"type":"Image","props":{"y":0,"x":0,"skin":"dzpk/gameScene/score5.png"}},{"type":"Label","props":{"y":4,"x":34,"width":118,"text":"9,999,999.99","name":"txt_blind","height":19,"fontSize":20,"font":"Microsoft YaHei","color":"#FFF001"}}]},{"type":"DZPKCards","props":{"y":22,"x":159,"name":"box_cards","runtime":"ui.game_dzpk.DZPKCardsUI"}},{"type":"Box","props":{"y":97,"x":151,"name":"box_type"},"child":[{"type":"Image","props":{"skin":"dzpk/gameScene/catdTypeBg.png"}},{"type":"Image","props":{"y":6,"x":41,"skin":"dzpk/zh-cn/font/cardTypeFont/cardType_1.png","name":"img_type"}}]}]},{"type":"Box","props":{"y":462,"x":272,"var":"box_player1"},"child":[{"type":"DZPKHead","props":{"y":0,"x":0,"name":"ui_player","runtime":"ui.game_dzpk.DZPKHeadUI"}},{"type":"Image","props":{"y":20,"x":142,"skin":"dzpk/gameScene/bankerIcon.png","scaleY":0.6,"scaleX":0.6,"name":"img_banker"}},{"type":"Box","props":{"y":-20,"x":5,"width":155,"name":"box_blind","height":33},"child":[{"type":"Image","props":{"y":6,"x":29,"skin":"dzpk/gameScene/chipValueBg.png","centerY":0}},{"type":"Image","props":{"y":0,"x":0,"skin":"dzpk/gameScene/score5.png"}},{"type":"Label","props":{"y":4,"x":34,"width":118,"text":"9,999,999.99","name":"txt_blind","height":19,"fontSize":20,"font":"Microsoft YaHei","color":"#FFF001"}}]},{"type":"DZPKCards","props":{"y":30,"x":20,"name":"box_cards","runtime":"ui.game_dzpk.DZPKCardsUI"}},{"type":"Box","props":{"y":110,"x":10,"name":"box_type"},"child":[{"type":"Image","props":{"skin":"dzpk/gameScene/catdTypeBg.png"}},{"type":"Image","props":{"y":6,"x":41,"skin":"dzpk/zh-cn/font/cardTypeFont/cardType_1.png","name":"img_type"}}]},{"type":"Sprite","props":{"y":30,"x":20,"name":"box_fan"}},{"type":"Sprite","props":{"y":80,"x":150,"name":"box_gai"}}]},{"type":"Box","props":{"y":389,"x":65,"var":"box_player2"},"child":[{"type":"DZPKHead","props":{"y":0,"x":0,"name":"ui_player","runtime":"ui.game_dzpk.DZPKHeadUI"}},{"type":"Image","props":{"y":20,"x":144,"skin":"dzpk/gameScene/bankerIcon.png","scaleY":0.6,"scaleX":0.6,"name":"img_banker"}},{"type":"Box","props":{"y":-24,"x":86,"width":155,"name":"box_blind","height":33},"child":[{"type":"Image","props":{"y":6,"x":29,"skin":"dzpk/gameScene/chipValueBg.png","centerY":0}},{"type":"Image","props":{"y":0,"x":0,"skin":"dzpk/gameScene/score5.png"}},{"type":"Label","props":{"y":4,"x":34,"width":118,"text":"9,999,999.99","name":"txt_blind","height":19,"fontSize":20,"font":"Microsoft YaHei","color":"#FFF001"}}]},{"type":"DZPKCards","props":{"y":30,"x":20,"name":"box_cards","runtime":"ui.game_dzpk.DZPKCardsUI"}},{"type":"Box","props":{"y":110,"x":10,"name":"box_type"},"child":[{"type":"Image","props":{"skin":"dzpk/gameScene/catdTypeBg.png"}},{"type":"Image","props":{"y":6,"x":41,"skin":"dzpk/zh-cn/font/cardTypeFont/cardType_1.png","name":"img_type"}}]},{"type":"Sprite","props":{"y":30,"x":20,"name":"box_fan"}},{"type":"Sprite","props":{"y":80,"x":-32,"name":"box_gai"}}]},{"type":"Box","props":{"y":150,"x":65,"var":"box_player3"},"child":[{"type":"DZPKHead","props":{"y":0,"x":0,"name":"ui_player","runtime":"ui.game_dzpk.DZPKHeadUI"}},{"type":"Image","props":{"y":20,"x":138,"skin":"dzpk/gameScene/bankerIcon.png","scaleY":0.6,"scaleX":0.6,"name":"img_banker"}},{"type":"Box","props":{"y":170,"x":86,"width":155,"name":"box_blind","height":33},"child":[{"type":"Image","props":{"y":6,"x":29,"skin":"dzpk/gameScene/chipValueBg.png","centerY":0}},{"type":"Image","props":{"y":0,"x":0,"skin":"dzpk/gameScene/score5.png"}},{"type":"Label","props":{"y":4,"x":34,"width":118,"text":"9,999,999.99","name":"txt_blind","height":19,"fontSize":20,"font":"Microsoft YaHei","color":"#FFF001"}}]},{"type":"DZPKCards","props":{"y":30,"x":20,"name":"box_cards","runtime":"ui.game_dzpk.DZPKCardsUI"}},{"type":"Box","props":{"y":110,"x":10,"name":"box_type"},"child":[{"type":"Image","props":{"skin":"dzpk/gameScene/catdTypeBg.png"}},{"type":"Image","props":{"y":6,"x":41,"skin":"dzpk/zh-cn/font/cardTypeFont/cardType_1.png","name":"img_type"}}]},{"type":"Sprite","props":{"y":80,"x":-32,"name":"box_gai"}},{"type":"Sprite","props":{"y":30,"x":20,"name":"box_fan"}}]},{"type":"Box","props":{"y":67,"x":299,"var":"box_player4"},"child":[{"type":"DZPKHead","props":{"y":0,"x":0,"name":"ui_player","runtime":"ui.game_dzpk.DZPKHeadUI"}},{"type":"Image","props":{"y":20,"x":144,"skin":"dzpk/gameScene/bankerIcon.png","scaleY":0.6,"scaleX":0.6,"name":"img_banker"}},{"type":"Box","props":{"y":160,"x":0,"width":155,"name":"box_blind","height":33},"child":[{"type":"Image","props":{"y":6,"x":29,"skin":"dzpk/gameScene/chipValueBg.png","centerY":0}},{"type":"Image","props":{"y":0,"x":0,"skin":"dzpk/gameScene/score5.png"}},{"type":"Label","props":{"y":4,"x":34,"width":118,"text":"9,999,999.99","name":"txt_blind","height":19,"fontSize":20,"font":"Microsoft YaHei","color":"#FFF001"}}]},{"type":"DZPKCards","props":{"y":30,"x":20,"name":"box_cards","runtime":"ui.game_dzpk.DZPKCardsUI"}},{"type":"Box","props":{"y":110,"x":10,"name":"box_type"},"child":[{"type":"Image","props":{"skin":"dzpk/gameScene/catdTypeBg.png"}},{"type":"Image","props":{"y":6,"x":41,"skin":"dzpk/zh-cn/font/cardTypeFont/cardType_1.png","name":"img_type"}}]},{"type":"Sprite","props":{"y":30,"x":20,"name":"box_fan"}},{"type":"Sprite","props":{"y":72,"x":146,"name":"box_gai"}}]},{"type":"Box","props":{"y":67,"x":803,"var":"box_player5"},"child":[{"type":"DZPKHead","props":{"y":0,"x":0,"name":"ui_player","runtime":"ui.game_dzpk.DZPKHeadUI"}},{"type":"Image","props":{"y":20,"x":-13,"skin":"dzpk/gameScene/bankerIcon.png","scaleY":0.6,"scaleX":0.6,"name":"img_banker"}},{"type":"Box","props":{"y":160,"x":-16,"width":155,"name":"box_blind","height":33},"child":[{"type":"Image","props":{"y":6,"x":29,"skin":"dzpk/gameScene/chipValueBg.png","centerY":0}},{"type":"Image","props":{"x":154,"skin":"dzpk/gameScene/score5.png","centerY":0}},{"type":"Label","props":{"y":4,"x":34,"width":118,"text":"9,999,999.99","name":"txt_blind","height":19,"fontSize":20,"font":"Microsoft YaHei","color":"#FFF001"}}]},{"type":"DZPKCards","props":{"y":30,"x":20,"name":"box_cards","runtime":"ui.game_dzpk.DZPKCardsUI"}},{"type":"Box","props":{"y":110,"x":10,"name":"box_type"},"child":[{"type":"Image","props":{"skin":"dzpk/gameScene/catdTypeBg.png"}},{"type":"Image","props":{"y":6,"x":41,"skin":"dzpk/zh-cn/font/cardTypeFont/cardType_1.png","name":"img_type"}}]},{"type":"Sprite","props":{"y":30,"x":20,"name":"box_fan"}},{"type":"Sprite","props":{"y":80,"x":150,"name":"box_gai"}}]},{"type":"Box","props":{"y":151,"x":999,"var":"box_player6"},"child":[{"type":"DZPKHead","props":{"y":0,"x":0,"name":"ui_player","runtime":"ui.game_dzpk.DZPKHeadUI"}},{"type":"Image","props":{"y":20,"x":-12,"skin":"dzpk/gameScene/bankerIcon.png","scaleY":0.6,"scaleX":0.6,"name":"img_banker"}},{"type":"Box","props":{"y":170,"x":-80,"width":155,"name":"box_blind","height":33},"child":[{"type":"Image","props":{"y":6,"x":29,"skin":"dzpk/gameScene/chipValueBg.png","centerY":0}},{"type":"Image","props":{"x":156,"skin":"dzpk/gameScene/score5.png","centerY":0}},{"type":"Label","props":{"y":4,"x":34,"width":118,"text":"9,999,999.99","name":"txt_blind","height":19,"fontSize":20,"font":"Microsoft YaHei","color":"#FFF001"}}]},{"type":"DZPKCards","props":{"y":30,"x":20,"name":"box_cards","runtime":"ui.game_dzpk.DZPKCardsUI"}},{"type":"Box","props":{"y":110,"x":10,"name":"box_type"},"child":[{"type":"Image","props":{"skin":"dzpk/gameScene/catdTypeBg.png"}},{"type":"Image","props":{"y":6,"x":41,"skin":"dzpk/zh-cn/font/cardTypeFont/cardType_1.png","name":"img_type"}}]},{"type":"Sprite","props":{"y":30,"x":20,"name":"box_fan"}},{"type":"Sprite","props":{"y":80,"x":150,"name":"box_gai"}}]},{"type":"Box","props":{"y":391,"x":999,"var":"box_player7"},"child":[{"type":"DZPKHead","props":{"y":0,"x":0,"name":"ui_player","runtime":"ui.game_dzpk.DZPKHeadUI"}},{"type":"Image","props":{"y":20,"x":-12,"skin":"dzpk/gameScene/bankerIcon.png","scaleY":0.6,"scaleX":0.6,"name":"img_banker"}},{"type":"Box","props":{"y":-20,"x":-80,"width":155,"name":"box_blind","height":33},"child":[{"type":"Image","props":{"y":6,"x":29,"skin":"dzpk/gameScene/chipValueBg.png","centerY":0}},{"type":"Image","props":{"x":157,"skin":"dzpk/gameScene/score5.png","centerY":0}},{"type":"Label","props":{"y":4,"x":34,"width":118,"text":"9,999,999.99","name":"txt_blind","height":19,"fontSize":20,"font":"Microsoft YaHei","color":"#FFF001"}}]},{"type":"DZPKCards","props":{"y":30,"x":20,"name":"box_cards","runtime":"ui.game_dzpk.DZPKCardsUI"}},{"type":"Box","props":{"y":110,"x":10,"name":"box_type"},"child":[{"type":"Image","props":{"skin":"dzpk/gameScene/catdTypeBg.png"}},{"type":"Image","props":{"y":6,"x":41,"skin":"dzpk/zh-cn/font/cardTypeFont/cardType_1.png","name":"img_type"}}]},{"type":"Sprite","props":{"y":30,"x":20,"name":"box_fan"}},{"type":"Sprite","props":{"y":80,"x":150,"name":"box_gai"}}]},{"type":"Box","props":{"y":462,"x":810,"var":"box_player8"},"child":[{"type":"DZPKHead","props":{"y":0,"x":0,"name":"ui_player","runtime":"ui.game_dzpk.DZPKHeadUI"}},{"type":"Image","props":{"y":20,"x":-14,"skin":"dzpk/gameScene/bankerIcon.png","scaleY":0.6,"scaleX":0.6,"name":"img_banker"}},{"type":"Box","props":{"y":-20,"x":-36,"width":155,"name":"box_blind","height":33},"child":[{"type":"Image","props":{"y":6,"x":29,"skin":"dzpk/gameScene/chipValueBg.png","centerY":0}},{"type":"Image","props":{"x":155,"skin":"dzpk/gameScene/score5.png","centerY":0}},{"type":"Label","props":{"y":4,"x":34,"width":118,"text":"9,999,999.99","name":"txt_blind","height":19,"fontSize":20,"font":"Microsoft YaHei","color":"#FFF001"}}]},{"type":"DZPKCards","props":{"y":30,"x":20,"name":"box_cards","runtime":"ui.game_dzpk.DZPKCardsUI"}},{"type":"Box","props":{"y":110,"x":10,"name":"box_type"},"child":[{"type":"Image","props":{"skin":"dzpk/gameScene/catdTypeBg.png"}},{"type":"Image","props":{"y":6,"x":41,"skin":"dzpk/zh-cn/font/cardTypeFont/cardType_1.png","name":"img_type"}}]},{"type":"Sprite","props":{"y":30,"x":20,"name":"box_fan"}},{"type":"Sprite","props":{"y":80,"x":150,"name":"box_gai"}}]},{"type":"Box","props":{"y":253,"x":341,"var":"box_common_cards"},"child":[{"type":"Box","props":{"y":30,"x":0,"name":"box_card0"},"child":[{"type":"Image","props":{"skin":"dzpk/cards/card_0.png","name":"img_card"}},{"type":"Image","props":{"width":95,"skin":"dzpk/cards/cardTypeTip1.png","name":"img_chose","height":130}}]},{"type":"Box","props":{"y":30,"x":122,"name":"box_card1"},"child":[{"type":"Image","props":{"skin":"dzpk/cards/card_0.png","name":"img_card"}},{"type":"Image","props":{"width":95,"skin":"dzpk/cards/cardTypeTip1.png","name":"img_chose","height":130}}]},{"type":"Box","props":{"y":30,"x":244,"name":"box_card2"},"child":[{"type":"Image","props":{"skin":"dzpk/cards/card_0.png","name":"img_card"}},{"type":"Image","props":{"width":95,"skin":"dzpk/cards/cardTypeTip1.png","name":"img_chose","height":130}}]},{"type":"Box","props":{"y":30,"x":365,"name":"box_card3"},"child":[{"type":"Image","props":{"skin":"dzpk/cards/card_0.png","name":"img_card"}},{"type":"Image","props":{"width":95,"skin":"dzpk/cards/cardTypeTip1.png","name":"img_chose","height":130}}]},{"type":"Box","props":{"y":30,"x":487,"name":"box_card4"},"child":[{"type":"Image","props":{"skin":"dzpk/cards/card_0.png","name":"img_card"}},{"type":"Image","props":{"width":95,"skin":"dzpk/cards/cardTypeTip1.png","name":"img_chose","height":130}}]}]},{"type":"Box","props":{"y":229,"x":554,"width":155,"var":"box_dichi","height":33},"child":[{"type":"Image","props":{"y":6,"x":29,"skin":"dzpk/gameScene/chipValueBg.png","centerY":0}},{"type":"Image","props":{"x":2,"skin":"dzpk/gameScene/score5.png","centerY":0}},{"type":"Label","props":{"y":3,"x":30,"width":118,"var":"txt_dichi","text":"9,999,999.99","height":19,"fontSize":20,"font":"Microsoft YaHei","color":"#FFF001"}}]},{"type":"Label","props":{"y":423,"var":"txt_blind","text":"盲注：100000/200000","fontSize":20,"font":"Microsoft YaHei","color":"#398E45","centerX":0,"bold":true}},{"type":"ViewStack","props":{"width":800,"var":"vs_state","selectedIndex":2,"right":0,"height":580,"bottom":0},"child":[{"type":"Button","props":{"width":226,"var":"btn_pipei","stateNum":1,"skin":"dzpk/gameScene/resumeGameBg.png","name":"item0","left":0,"labelSize":18,"labelPadding":"14,10,0,10","labelFont":"Microsoft YaHei","labelColors":"#ffffff","labelBold":true,"labelAlign":"center","label":"5秒后自动继续游戏","height":81,"bottom":0},"child":[{"type":"Image","props":{"skin":"dzpk/zh-cn/font/buttonFont/resumeGameFont.png","name":"img_continue","centerY":-9,"centerX":0}},{"type":"Script","props":{"runtime":"core.comlaya.ScaleCom"}}]},{"type":"Box","props":{"y":0,"x":0,"width":800,"name":"item1","height":580},"child":[{"type":"Button","props":{"y":486,"x":278,"width":242,"var":"btn_follow","stateNum":1,"skin":"dzpk/gameScene/game_button1.png","labelStroke":0,"labelSize":30,"labelFont":"Microsoft YaHei","labelColors":"#ffffff","labelBold":true,"label":"跟注","height":94,"centerX":0},"child":[{"type":"Image","props":{"skin":"dzpk/zh-cn/font/buttonFont/gengFont.png","name":"img_type","centerY":0,"centerX":0}},{"type":"Script","props":{"runtime":"core.comlaya.ScaleCom"}}]},{"type":"Button","props":{"y":486,"x":558,"width":242,"var":"btn_add","stateNum":1,"skin":"dzpk/gameScene/button0.png","height":94},"child":[{"type":"Image","props":{"skin":"dzpk/zh-cn/font/buttonFont/jiazhuFont.png","centerY":0,"centerX":0}},{"type":"Script","props":{"runtime":"core.comlaya.ScaleCom"}}]},{"type":"Button","props":{"y":486,"width":242,"var":"btn_qipai","stateNum":1,"skin":"dzpk/gameScene/qipaiBtn.png","left":0,"height":94},"child":[{"type":"Image","props":{"skin":"dzpk/zh-cn/font/buttonFont/qipaiFont.png","centerY":0,"centerX":0}},{"type":"Script","props":{"runtime":"core.comlaya.ScaleCom"}}]},{"type":"Box","props":{"width":224,"var":"box_slid","right":0,"height":556,"bottom":86},"child":[{"type":"Image","props":{"skin":"dzpk/gameScene/jiazhuDi.png"}},{"type":"VSlider","props":{"y":512,"x":151,"var":"sid_money","skin":"dzpk/gameScene/track2.png","showLabel":false,"scaleY":-1,"is_v":true,"runtime":"core.comlaya.SliderCustomer"},"child":[{"type":"Image","props":{"y":2,"x":3,"skin":"dzpk/gameScene/track1.png","sizeGrid":"8,0,8,0","name":"cfront"}}]},{"type":"Button","props":{"y":107,"x":26,"var":"btn_mu10","stateNum":1,"skin":"dzpk/gameScene/jiazhuBtnBg1.png","labelSize":25,"labelFont":"Microsoft YaHei","labelColors":"#FDF8A4","labelBold":true,"label":"big10"},"child":[{"type":"Script","props":{"runtime":"core.comlaya.ScaleCom"}}]},{"type":"Button","props":{"y":199,"x":26,"var":"btn_mu5","stateNum":1,"skin":"dzpk/gameScene/jiazhuBtnBg1.png","labelSize":25,"labelFont":"Microsoft YaHei","labelColors":"#FDF8A4","labelBold":true,"label":"big5"},"child":[{"type":"Script","props":{"runtime":"core.comlaya.ScaleCom"}}]},{"type":"Button","props":{"y":292,"x":26,"var":"btn_mu3","stateNum":1,"skin":"dzpk/gameScene/jiazhuBtnBg1.png","labelSize":25,"labelFont":"Microsoft YaHei","labelColors":"#FDF8A4","labelBold":true,"label":"big3"},"child":[{"type":"Script","props":{"runtime":"core.comlaya.ScaleCom"}}]},{"type":"Button","props":{"y":384,"x":26,"var":"btn_allin","stateNum":1,"skin":"dzpk/gameScene/jiazhuBtnBg1.png","labelSize":25,"labelFont":"Microsoft YaHei","labelColors":"#FDF8A4","labelBold":true,"label":"ALLIN"},"child":[{"type":"Script","props":{"runtime":"core.comlaya.ScaleCom"}}]},{"type":"Label","props":{"y":21,"x":67,"var":"txt_money","text":"label","fontSize":36,"font":"Microsoft YaHei","color":"#FFFAA5","bold":true}}]}]},{"type":"Box","props":{"y":0,"x":0,"width":800,"name":"item2","height":580},"child":[{"type":"CheckBox","props":{"y":488,"width":241,"var":"cb_qi","stateNum":1,"name":"aaa","left":0,"label":" ","height":92,"runtime":"core.comlaya.CheckState"},"child":[{"type":"Image","props":{"skin":"dzpk/gameScene/chose.png","name":"off"}},{"type":"Box","props":{"y":0,"x":0,"name":"on"},"child":[{"type":"Image","props":{"skin":"dzpk/gameScene/chose.png"}},{"type":"Image","props":{"y":57,"x":30,"skin":"dzpk/gameScene/chose1.png"}}]},{"type":"Image","props":{"skin":"dzpk/zh-cn/font/buttonFont/ranghuoqiBtnFont.png","centerY":-7,"centerX":0}},{"type":"Script","props":{"runtime":"core.comlaya.ScaleCom"}}]},{"type":"CheckBox","props":{"y":488,"x":280,"width":241,"var":"cb_gen","stateNum":1,"labelSize":30,"labelFont":"Microsoft YaHei","labelColors":"#ffffff","labelBold":true,"label":" ","height":92,"runtime":"core.comlaya.CheckState"},"child":[{"type":"Image","props":{"skin":"dzpk/gameScene/chose.png","name":"off"}},{"type":"Box","props":{"y":0,"x":0,"name":"on"},"child":[{"type":"Image","props":{"skin":"dzpk/gameScene/chose.png"}},{"type":"Image","props":{"y":57,"x":30,"skin":"dzpk/gameScene/chose1.png"}}]},{"type":"Image","props":{"skin":"dzpk/zh-cn/font/buttonFont/zidongrangpaiFont.png","centerY":-7,"centerX":0}},{"type":"Script","props":{"runtime":"core.comlaya.ScaleCom"}}]},{"type":"CheckBox","props":{"y":488,"x":559,"width":241,"var":"cb_gen_all","stateNum":1,"name":"ccc","label":" ","height":92,"runtime":"core.comlaya.CheckState"},"child":[{"type":"Image","props":{"skin":"dzpk/gameScene/chose.png","name":"off"}},{"type":"Box","props":{"y":0,"x":0,"name":"on"},"child":[{"type":"Image","props":{"skin":"dzpk/gameScene/chose.png"}},{"type":"Image","props":{"y":57,"x":30,"skin":"dzpk/gameScene/chose1.png"}}]},{"type":"Image","props":{"skin":"dzpk/zh-cn/font/buttonFont/genrenhezhuFont.png","centerY":-7,"centerX":0}},{"type":"Script","props":{"runtime":"core.comlaya.ScaleCom"}}]}]}]},{"type":"Label","props":{"y":18,"x":209,"width":480,"var":"txt_game_id","height":30,"fontSize":25,"font":"Microsoft YaHei","color":"#ffffff","bold":true}},{"type":"Image","props":{"y":44,"x":561,"var":"img_heguan","skin":"dzpk/gameScene/heguanIcon.png"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("core.comlaya.ScaleCom",core.comlaya.ScaleCom);
			View.regComponent("ui.game_dzpk.DZPKHeadUI",ui.game_dzpk.DZPKHeadUI);
			View.regComponent("ui.game_dzpk.DZPKCardsUI",ui.game_dzpk.DZPKCardsUI);
			View.regComponent("core.comlaya.SliderCustomer",core.comlaya.SliderCustomer);
			View.regComponent("core.comlaya.CheckState",core.comlaya.CheckState);

            super.createChildren();
            this.createView(ui.game_dzpk.DZPKSceneUI.uiView);

        }

    }
}

module ui.game_dzpk {
    export class DZPKSuccUI extends View {
		public img_succ_type:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":252,"height":157},"child":[{"type":"Image","props":{"y":4,"x":52,"skin":"dzpk/gameScene/victoryLine.png","centerY":0,"centerX":0}},{"type":"Image","props":{"y":92,"x":0,"skin":"dzpk/gameScene/catdTypeBg2.png","centerX":0,"bottom":0}},{"type":"Image","props":{"y":106,"x":45,"var":"img_succ_type","skin":"dzpk/zh-cn/font/gameOverFont/victory_cardType0.png","centerX":0}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.game_dzpk.DZPKSuccUI.uiView);

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

        public static  uiView:any ={"type":"Windows","props":{"width":900,"height":500},"child":[{"type":"Image","props":{"y":161,"x":124,"top":0,"skin":"template/TempleteWindow/public/b1.png","sizeGrid":"100,80,60,80","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"y":179,"x":566,"var":"btn_close","top":18,"skin":"template/TempleteWindow/public/b3_normal.png","right":18},"child":[{"type":"Script","props":{"runtime":"core.comlaya.ScaleCom"}}]},{"type":"Image","props":{"y":0,"skin":"dzpk/zh-cn/buySitDownWindow/buySitDownWindow_title.png","centerX":0}},{"type":"Image","props":{"y":371,"skin":"dzpk/buySitDownWindow/buySitDownWindow_box_Bg.png","right":29,"left":28}},{"type":"Label","props":{"y":114,"x":61,"text":"总游戏币：","fontSize":25,"font":"Microsoft YaHei","color":"#F9DDA2"}},{"type":"Label","props":{"y":114,"x":188,"var":"txt_all","text":"label","fontSize":26,"font":"Microsoft YaHei","color":"#F9DDA2"}},{"type":"Label","props":{"y":276,"x":76,"text":"最小携带","fontSize":26,"font":"Microsoft YaHei","color":"#73CFFF"}},{"type":"Label","props":{"y":314,"x":33,"width":180,"var":"txt_min","text":"label","fontSize":24,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":276,"x":718,"text":"最大携带","fontSize":26,"font":"Microsoft YaHei","color":"#73CFFF"}},{"type":"Label","props":{"y":314,"x":682,"width":180,"var":"txt_max","text":"label","fontSize":24,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"CheckBox","props":{"y":400,"x":120,"var":"chk_chose","labelSize":25,"labelPadding":"3,0,0,50","labelFont":"Microsoft YaHei","labelColors":"#ffffff","label":"自动买入设置数额","runtime":"core.comlaya.CheckState"},"child":[{"type":"Box","props":{"visible":false,"name":"off"},"child":[{"type":"Image","props":{"skin":"gamehall/mainScene/checkBoxButton0.png"}}]},{"type":"Box","props":{"name":"on","runtime":"core.comlaya.CheckState"},"child":[{"type":"Image","props":{"skin":"gamehall/mainScene/checkBoxButton0.png"}},{"type":"Image","props":{"y":7,"x":4,"skin":"gamehall/mainScene/checkBoxButton1.png"}}]}]},{"type":"Button","props":{"y":385,"x":586,"width":222,"var":"btn_ok","stateNum":1,"skin":"public/a1.png","labelSize":40,"labelPadding":"-8","labelFont":"Microsoft YaHei","labelColors":"#ffffff","label":"确 定","height":75},"child":[{"type":"Script","props":{"runtime":"core.comlaya.ScaleCom"}}]},{"type":"HSlider","props":{"y":217,"x":97,"var":"sid_take","skin":"dzpk/buySitDownWindow/buySitDownWindow_track2.png","showLabel":false,"is_v":false,"runtime":"core.comlaya.SliderCustomer"},"child":[{"type":"Image","props":{"y":8,"x":3,"skin":"dzpk/buySitDownWindow/buySitDownWindow_track1.png","sizeGrid":"0,1,0,1","name":"cfront"}},{"type":"Box","props":{"y":-59,"x":0,"name":"box_money"},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"dzpk/buySitDownWindow/buySitDownWindow_thumb_labelBg.png","sizeGrid":"0,22,0,22","name":"img_money","anchorX":0.5}},{"type":"Label","props":{"y":5,"x":0,"text":"3333333333333333","name":"txt_money","fontSize":22,"font":"Microsoft YaHei","color":"#E9A945","anchorX":0.5,"align":"center"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("core.comlaya.ScaleCom",core.comlaya.ScaleCom);
			View.regComponent("core.comlaya.CheckState",core.comlaya.CheckState);
			View.regComponent("core.comlaya.SliderCustomer",core.comlaya.SliderCustomer);

            super.createChildren();
            this.createView(ui.game_dzpk.DZPKTakeUI.uiView);

        }

    }
}

module ui.game_dzpk {
    export class TestVSUI extends View {
		public vs:core.comlaya.SliderCustomer;

        public static  uiView:any ={"type":"View","props":{},"child":[{"type":"VSlider","props":{"y":409,"x":53,"var":"vs","skin":"dzpk/gameScene/track2.png","showLabel":false,"scaleY":-1,"min":1,"max":100,"runtime":"core.comlaya.SliderCustomer"},"child":[{"type":"Image","props":{"y":2,"x":3,"skin":"dzpk/gameScene/track1.png","sizeGrid":"8,0,8,0","name":"cfront"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("core.comlaya.SliderCustomer",core.comlaya.SliderCustomer);

            super.createChildren();
            this.createView(ui.game_dzpk.TestVSUI.uiView);

        }

    }
}

module ui.game_hall {
    export class GameChoseUI extends View {

        public static  uiView:any ={"type":"View","props":{},"child":[{"type":"Box","props":{"y":-3,"x":0},"child":[{"type":"Image","props":{"y":3,"skin":"gamehall/mainScene/game_620_bg.png"}},{"type":"Image","props":{"y":514,"x":177,"skin":"gamehall/mainScene/totle_preson.png"}},{"type":"Animation","props":{"y":3,"mouseEnabled":false,"interval":100,"autoPlay":true}},{"type":"Text","props":{"y":510,"x":201,"text":250,"fontSize":18,"font":"Microsoft YaHei","color":"#D8A459"}},{"type":"Animation","props":{"x":14,"source":"gamehall/620/game_620_effect_000.png,gamehall/620/game_620_effect_001.png,gamehall/620/game_620_effect_002.png,gamehall/620/game_620_effect_003.png,gamehall/620/game_620_effect_004.png,gamehall/620/game_620_effect_005.png,gamehall/620/game_620_effect_006.png,gamehall/620/game_620_effect_007.png,gamehall/620/game_620_effect_008.png,gamehall/620/game_620_effect_009.png,gamehall/620/game_620_effect_010.png,gamehall/620/game_620_effect_011.png,gamehall/620/game_620_effect_012.png,gamehall/620/game_620_effect_013.png,gamehall/620/game_620_effect_014.png,gamehall/620/game_620_effect_015.png,gamehall/620/game_620_effect_016.png,gamehall/620/game_620_effect_017.png,gamehall/620/game_620_effect_018.png,gamehall/620/game_620_effect_019.png,gamehall/620/game_620_effect_020.png,gamehall/620/game_620_effect_021.png,gamehall/620/game_620_effect_022.png,gamehall/620/game_620_effect_023.png","interval":100,"autoPlay":true}},{"type":"Script","props":{"y":3,"scale_scope":0.99,"runtime":"core.comlaya.ScaleCom"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);
			View.regComponent("core.comlaya.ScaleCom",core.comlaya.ScaleCom);

            super.createChildren();
            this.createView(ui.game_hall.GameChoseUI.uiView);

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

        public static  uiView:any ={"type":"Scenes","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"skin":"gamehall/mainScene/bg1.png"}},{"type":"Image","props":{"skin":"gamehall/mainScene/top_bg.png"}},{"type":"Button","props":{"y":10,"x":1015,"visible":true,"var":"btn_full","stateNum":1,"skin":"gamehall/mainScene/btn_screen_normal.png","centerScale":true},"child":[{"type":"Script","props":{"centerScale":true,"runtime":"core.comlaya.ScaleCom"}}]},{"type":"Button","props":{"y":10,"x":1180,"var":"btn_setting","stateNum":1,"skin":"gamehall/mainScene/btn_setting_normal.png","centerScale":true},"child":[{"type":"Script","props":{"runtime":"core.comlaya.ScaleCom"}}]},{"type":"Box","props":{"top":10,"left":10},"child":[{"type":"Image","props":{"y":17,"x":312,"skin":"gamehall/mainScene/cion_bg.png"}},{"type":"Image","props":{"y":10,"x":267,"skin":"gamehall/mainScene/cion_icon.png"}},{"type":"Text","props":{"y":18,"x":93,"var":"txt_name","text":"ID：{0}","height":30,"fontSize":22,"font":"Microsoft YaHei","color":"#BABDC2","bold":false,"align":"left"}},{"type":"Text","props":{"y":19,"x":326,"width":137,"var":"txt_gold","text":"9,999,999.99","height":29,"fontSize":22,"font":"Microsoft YaHei","color":"#ffd570"}},{"type":"Image","props":{"y":-1,"x":0,"width":85,"var":"btn_header","height":85}}]},{"type":"Box","props":{"top":0,"layoutEnabled":true,"centerX":0},"child":[{"type":"Animation","props":{"y":-20,"x":-144,"var":"ani_title","source":"res/atlas/gamehall/effect/logo.atlas","interval":100,"index":0,"autoPlay":true}}]},{"type":"Box","props":{"y":129,"x":98,"width":288,"var":"btn_620","name":"scene_620","height":542},"child":[{"type":"Image","props":{"y":3,"skin":"gamehall/mainScene/game_620_bg.png"}},{"type":"Image","props":{"y":514,"x":177,"skin":"template/GameChose/gamehall/mainScene/totle_preson.png"}},{"type":"Animation","props":{"y":3,"mouseEnabled":false,"interval":100,"autoPlay":true}},{"type":"Text","props":{"y":510,"x":201,"text":250,"fontSize":18,"font":"Microsoft YaHei","color":"#D8A459"}},{"type":"Animation","props":{"x":14,"source":"gamehall/620/game_620_effect_000.png,gamehall/620/game_620_effect_001.png,gamehall/620/game_620_effect_002.png,gamehall/620/game_620_effect_003.png,gamehall/620/game_620_effect_004.png,gamehall/620/game_620_effect_005.png,gamehall/620/game_620_effect_006.png,gamehall/620/game_620_effect_007.png,gamehall/620/game_620_effect_008.png,gamehall/620/game_620_effect_009.png,gamehall/620/game_620_effect_010.png,gamehall/620/game_620_effect_011.png,gamehall/620/game_620_effect_012.png,gamehall/620/game_620_effect_013.png,gamehall/620/game_620_effect_014.png,gamehall/620/game_620_effect_015.png,gamehall/620/game_620_effect_016.png,gamehall/620/game_620_effect_017.png,gamehall/620/game_620_effect_018.png,gamehall/620/game_620_effect_019.png,gamehall/620/game_620_effect_020.png,gamehall/620/game_620_effect_021.png,gamehall/620/game_620_effect_022.png,gamehall/620/game_620_effect_023.png","interval":100,"autoPlay":true}},{"type":"Script","props":{"y":3,"scale_scope":0.99,"runtime":"core.comlaya.ScaleCom"}}]},{"type":"Box","props":{"y":129,"x":491,"width":257,"var":"btn_720","name":"scene_720","height":542},"child":[{"type":"Image","props":{"y":3,"skin":"gamehall/mainScene/game_720_bg.png"}},{"type":"Image","props":{"y":514,"x":177,"skin":"template/GameChose/gamehall/mainScene/totle_preson.png"}},{"type":"Animation","props":{"y":3,"mouseEnabled":false,"interval":100,"autoPlay":true}},{"type":"Text","props":{"y":510,"x":201,"text":250,"fontSize":18,"font":"Microsoft YaHei","color":"#D8A459"}},{"type":"Animation","props":{"x":0,"source":"gamehall/720/game_720_effect_000.png,gamehall/720/game_720_effect_001.png,gamehall/720/game_720_effect_002.png,gamehall/720/game_720_effect_003.png,gamehall/720/game_720_effect_004.png,gamehall/720/game_720_effect_005.png,gamehall/720/game_720_effect_006.png,gamehall/720/game_720_effect_007.png,gamehall/720/game_720_effect_008.png,gamehall/720/game_720_effect_009.png,gamehall/720/game_720_effect_010.png,gamehall/720/game_720_effect_011.png,gamehall/720/game_720_effect_012.png,gamehall/720/game_720_effect_013.png,gamehall/720/game_720_effect_014.png,gamehall/720/game_720_effect_015.png,gamehall/720/game_720_effect_016.png,gamehall/720/game_720_effect_017.png,gamehall/720/game_720_effect_018.png,gamehall/720/game_720_effect_019.png,gamehall/720/game_720_effect_020.png,gamehall/720/game_720_effect_021.png,gamehall/720/game_720_effect_022.png,gamehall/720/game_720_effect_023.png","interval":100,"autoPlay":true}},{"type":"Script","props":{"y":3,"scale_scope":0.99,"runtime":"core.comlaya.ScaleCom"}}]},{"type":"Box","props":{"y":129,"x":852,"width":265,"var":"btn_820","name":"scene_820","height":542},"child":[{"type":"Image","props":{"y":3,"skin":"gamehall/mainScene/game_820_bg.png"}},{"type":"Image","props":{"y":514,"x":177,"skin":"template/GameChose/gamehall/mainScene/totle_preson.png"}},{"type":"Animation","props":{"y":3,"mouseEnabled":false,"interval":100,"autoPlay":true}},{"type":"Text","props":{"y":510,"x":201,"text":250,"fontSize":18,"font":"Microsoft YaHei","color":"#D8A459"}},{"type":"Animation","props":{"x":0,"source":"gamehall/820/game_820_effect_000.png,gamehall/820/game_820_effect_001.png,gamehall/820/game_820_effect_002.png,gamehall/820/game_820_effect_003.png,gamehall/820/game_820_effect_004.png,gamehall/820/game_820_effect_005.png,gamehall/820/game_820_effect_006.png,gamehall/820/game_820_effect_007.png,gamehall/820/game_820_effect_008.png,gamehall/820/game_820_effect_009.png,gamehall/820/game_820_effect_010.png,gamehall/820/game_820_effect_011.png,gamehall/820/game_820_effect_012.png,gamehall/820/game_820_effect_013.png,gamehall/820/game_820_effect_014.png,gamehall/820/game_820_effect_015.png,gamehall/820/game_820_effect_016.png,gamehall/820/game_820_effect_017.png,gamehall/820/game_820_effect_018.png,gamehall/820/game_820_effect_019.png,gamehall/820/game_820_effect_020.png,gamehall/820/game_820_effect_021.png,gamehall/820/game_820_effect_022.png,gamehall/820/game_820_effect_023.png","interval":100,"autoPlay":true}},{"type":"Script","props":{"y":3,"scale_scope":0.99,"runtime":"core.comlaya.ScaleCom"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("core.comlaya.ScaleCom",core.comlaya.ScaleCom);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.game_hall.GameHallUI.uiView);

        }

    }
}

module ui.pipei {
    export class PiPeiViewUI extends Windows {
		public btn_close:Laya.Image;
		public txt_content:Laya.Label;

        public static  uiView:any ={"type":"Windows","props":{"width":748,"height":442},"child":[{"type":"Image","props":{"y":153,"x":149,"top":0,"skin":"template/TempleteWindow/public/b1.png","sizeGrid":"100,80,60,80","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"y":171,"x":591,"var":"btn_close","top":18,"skin":"template/TempleteWindow/public/b3_normal.png","right":18},"child":[{"type":"Script","props":{"runtime":"core.comlaya.ScaleCom"}}]},{"type":"Label","props":{"y":20,"text":"提  示","name":"title","fontSize":42,"font":"Microsoft YaHei","color":"#FAFFFF","centerX":0}},{"type":"Label","props":{"width":650,"var":"txt_content","valign":"middle","text":"正在匹配中...","height":190,"fontSize":28,"font":"Microsoft YaHei","color":"#ffffff","centerY":-20,"centerX":0,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("core.comlaya.ScaleCom",core.comlaya.ScaleCom);

            super.createChildren();
            this.createView(ui.pipei.PiPeiViewUI.uiView);

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

        public static  uiView:any ={"type":"Windows","props":{"width":747,"height":442,"runtime":"core.comlaya.CheckState"},"child":[{"type":"Image","props":{"y":107,"x":162,"top":0,"skin":"template/TempleteWindow/public/b1.png","sizeGrid":"100,80,60,80","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"y":125,"x":604,"var":"btn_close","top":18,"skin":"template/TempleteWindow/public/b3_normal.png","right":18},"child":[{"type":"Script","props":{"runtime":"core.comlaya.ScaleCom"}}]},{"type":"Image","props":{"top":10,"skin":"winTitle/title_sz.png","centerX":0.5}},{"type":"Image","props":{"y":114,"x":73,"skin":"settingWindow/setlinebg.png"}},{"type":"Image","props":{"y":200,"x":73,"skin":"settingWindow/setlinebg.png"}},{"type":"Label","props":{"y":122,"x":114,"text":"音   乐","fontSize":32,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Label","props":{"y":208,"x":114,"text":"音   效","fontSize":32,"font":"Microsoft YaHei","color":"#ffffffff"}},{"type":"Label","props":{"y":287,"x":179,"text":"音乐开关","fontSize":32,"font":"Microsoft YaHei","color":"#7ED5F6"}},{"type":"Label","props":{"y":287,"x":458,"text":"音效开关","fontSize":32,"font":"Microsoft YaHei","color":"#7ED5F6"}},{"type":"HSlider","props":{"y":137,"x":256,"var":"slider_music","skin":"settingWindow/volume_track.png","allowClickBack":true,"runtime":"core.comlaya.SettingSlider"},"child":[{"type":"Image","props":{"y":1,"x":1,"skin":"settingWindow/volume_trackHighlight.png","sizeGrid":"0,6,0,6","name":"front"}},{"type":"Image","props":{"y":-10,"x":0,"skin":"settingWindow/volume_track&bar.png","name":"thumb"}}]},{"type":"HSlider","props":{"y":223,"x":256,"var":"slider_sound","skin":"settingWindow/volume_track.png","runtime":"core.comlaya.SettingSlider"},"child":[{"type":"Image","props":{"y":1,"x":1,"skin":"settingWindow/volume_trackHighlight.png","sizeGrid":"0,8,0,7","name":"front"}},{"type":"Image","props":{"y":-10,"x":0,"skin":"settingWindow/volume_track&bar.png","name":"thumb"}}]},{"type":"CheckBox","props":{"y":341,"x":446,"width":164,"var":"sound_switch","height":56,"runtime":"core.comlaya.CheckState"},"child":[{"type":"Box","props":{"visible":false,"name":"off"},"child":[{"type":"Image","props":{"y":5,"skin":"settingWindow/btnPro.png"}},{"type":"Image","props":{"x":2,"skin":"settingWindow/btnPro2.png"}}]},{"type":"Box","props":{"name":"on"},"child":[{"type":"Image","props":{"y":5,"skin":"settingWindow/pool.png"}},{"type":"Image","props":{"x":108,"skin":"settingWindow/btnPro2.png"}}]}]},{"type":"CheckBox","props":{"y":341,"x":164,"width":164,"var":"music_switch","height":56,"runtime":"core.comlaya.CheckState"},"child":[{"type":"Box","props":{"visible":false,"name":"off"},"child":[{"type":"Image","props":{"y":5,"skin":"settingWindow/btnPro.png"}},{"type":"Image","props":{"x":2,"skin":"settingWindow/btnPro2.png"}}]},{"type":"Box","props":{"name":"on"},"child":[{"type":"Image","props":{"y":5,"skin":"settingWindow/pool.png"}},{"type":"Image","props":{"x":108,"skin":"settingWindow/btnPro2.png"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("core.comlaya.CheckState",core.comlaya.CheckState);
			View.regComponent("core.comlaya.ScaleCom",core.comlaya.ScaleCom);
			View.regComponent("core.comlaya.SettingSlider",core.comlaya.SettingSlider);

            super.createChildren();
            this.createView(ui.setting.SettingWindowUI.uiView);

        }

    }
}

module ui {
    export class TempleteWindowUI extends Windows {
		public btn_close:Laya.Image;

        public static  uiView:any ={"type":"Windows","props":{},"child":[{"type":"Image","props":{"y":0,"x":0,"top":0,"skin":"public/b1.png","sizeGrid":"100,80,60,80","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"y":18,"x":442,"var":"btn_close","top":18,"skin":"public/b3_normal.png","right":18},"child":[{"type":"Script","props":{"runtime":"core.comlaya.ScaleCom"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("core.comlaya.ScaleCom",core.comlaya.ScaleCom);

            super.createChildren();
            this.createView(ui.TempleteWindowUI.uiView);

        }

    }
}
