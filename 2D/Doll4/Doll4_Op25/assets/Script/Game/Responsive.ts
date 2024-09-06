import { Constants } from "../Data/constants";
import GamePlay from "./GamePlay";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Responsive extends cc.Component {

    // Component
    @property(GamePlay)
    GamePlay: GamePlay = null;


    // state
    device: string = "";
    HORIZONTAL_IPX: string = "horizontal_IPX";
    HORIZONTAL_TABLET: string = "horizontal_Tablet";
    VERTICAL_IPX: string = "vertical_IPX";
    VERTICAL_MOBILE: string = "vertical_Mobile";

    protected onLoad(): void {

    }

    protected start(): void {

    }

    private handleRotate(): void {
        if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
            Constants.isRotate = true;
            this.setHorizontal();
        } else {
            Constants.isRotate = false;
            this.setVertical();
        }
    }

    private setHorizontal(): void {
        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width < 0.65) {
            // Iphone 6 / 6 plus / 7 / 7 Plus / X
            this.setHorizontalForIpX();
        } else {
            this.setHorizontalForTablet();
        }
    }

    private setHorizontalForIpX(): void {
        if (this.HORIZONTAL_IPX === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_IPX;

        // if(cc.view.getFrameSize().height / cc.view.getFrameSize().width >= 0.6) {
        //     // Applovin horizontal

        //     return;
        // }

        // setup intro makeup btn
        this.GamePlay.MakeUp_Btn.y = -246;
        this.GamePlay.MakeUp_Btn.scale = 0.3;
        this.GamePlay.MakeUp_Btn.getComponent(cc.Widget).isAlignBottom = true;
        this.GamePlay.MakeUp_Btn.getComponent(cc.Widget).bottom = 15;
        // --------------

        // --------------------- set pos for intro characters
        this.GamePlay.intro_Doll.scale = 0.35;
        // this.GamePlay.intro_Doll.getComponent(cc.Widget).isAlignLeft = true;
        this.GamePlay.intro_Doll.getComponent(cc.Widget).isAlignBottom = true;
        // this.GamePlay.intro_Doll.getComponent(cc.Widget).left = 235;
        this.GamePlay.intro_Doll.getComponent(cc.Widget).bottom = 0;

        this.GamePlay.mC_CharDefault.scale = 0.35;
        this.GamePlay.mC_CharDefault.getComponent(cc.Widget).isAlignBottom = true;
        this.GamePlay.mC_CharDefault.getComponent(cc.Widget).bottom = -20;

        this.GamePlay.mC_CharMain.scale = 0.35;
        this.GamePlay.mC_CharMain.getComponent(cc.Widget).isAlignBottom = true;
        this.GamePlay.mC_CharMain.getComponent(cc.Widget).bottom = -75;

        this.GamePlay.mC_CharSub.scale = 0.35;
        this.GamePlay.mC_CharSub.getComponent(cc.Widget).isAlignBottom = true;
        this.GamePlay.mC_CharSub.getComponent(cc.Widget).bottom = -75;
        // ------------------------------ 


        // setup pos for btn
        this.GamePlay.Btns[0].scale = 0.3;
        this.GamePlay.Btns[1].scale = 0.3;
        this.GamePlay.Btns[2].scale = 0.3;

        this.GamePlay.Btns[0].x = -220;
        this.GamePlay.Btns[2].x = 220;
        // ----------------


        // --------- set anim for intro characters
        this.GamePlay.intro_Doll.getComponent(cc.Animation).play("Character_IdleAnim_Hrz");

        this.GamePlay.mC_CharDefault.getComponent(cc.Animation).play("Character_IdleAnim_Hrz");
        this.GamePlay.mC_CharMain.getComponent(cc.Animation).play("Character_IdleAnim_Hrz");
        this.GamePlay.mC_CharSub.getComponent(cc.Animation).play("Character_IdleAnim_Hrz");
        // -----------------------------


        // -------- setup effect
        this.GamePlay.mc_Effect.y = -150;
        this.GamePlay.Effects[3].y = 750;
        // ---------------------

        // UI
        this.GamePlay.Text.y = -150;
        this.GamePlay.Text.scale = 0.5;
        // ---------------------

        // if (cc.view.getFrameSize().height / cc.view.getFrameSize().width > 0.55) {
        //     // Ip 6 / 6Plus / 7 / 7 Plus
        // } else {
        //     // IpX
        // }

    }

    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;


        // setup intro makeup btn
        this.GamePlay.MakeUp_Btn.y = -246;
        this.GamePlay.MakeUp_Btn.scale = 0.3;
        this.GamePlay.MakeUp_Btn.getComponent(cc.Widget).isAlignBottom = true;
        this.GamePlay.MakeUp_Btn.getComponent(cc.Widget).bottom = 15;
        // --------------

        // --------------------- set pos for intro characters
        this.GamePlay.intro_Doll.scale = 0.35;
        // this.GamePlay.intro_Doll.getComponent(cc.Widget).isAlignLeft = true;
        this.GamePlay.intro_Doll.getComponent(cc.Widget).isAlignBottom = true;
        // this.GamePlay.intro_Doll.getComponent(cc.Widget).left = 200;
        this.GamePlay.intro_Doll.getComponent(cc.Widget).bottom = 0;

        this.GamePlay.mC_CharDefault.scale = 0.35;
        this.GamePlay.mC_CharDefault.getComponent(cc.Widget).isAlignBottom = true;
        this.GamePlay.mC_CharDefault.getComponent(cc.Widget).bottom = -20;

        this.GamePlay.mC_CharMain.scale = 0.35;
        this.GamePlay.mC_CharMain.getComponent(cc.Widget).isAlignBottom = true;
        this.GamePlay.mC_CharMain.getComponent(cc.Widget).bottom = -75;

        this.GamePlay.mC_CharSub.scale = 0.35;
        this.GamePlay.mC_CharSub.getComponent(cc.Widget).isAlignBottom = true;
        this.GamePlay.mC_CharSub.getComponent(cc.Widget).bottom = -75;
        // ------------------------------ 


        // setup pos for btn
        this.GamePlay.Btns[0].scale = 0.3;
        this.GamePlay.Btns[1].scale = 0.3;
        this.GamePlay.Btns[2].scale = 0.3;

        this.GamePlay.Btns[0].x = -220;
        this.GamePlay.Btns[2].x = 220;
        // ----------------


        // -    -------- set anim for intro characters
        this.GamePlay.intro_Doll.getComponent(cc.Animation).play("Character_IdleAnim_Hrz");

        this.GamePlay.mC_CharDefault.getComponent(cc.Animation).play("Character_IdleAnim_Hrz");
        this.GamePlay.mC_CharMain.getComponent(cc.Animation).play("Character_IdleAnim_Hrz");
        this.GamePlay.mC_CharSub.getComponent(cc.Animation).play("Character_IdleAnim_Hrz");
        // -----------------------------


        // -------- setup effect
        this.GamePlay.mc_Effect.y = -150;
        this.GamePlay.Effects[3].y = 750;
        // ---------------------

          // UI
          this.GamePlay.Text.y = -150;
          this.GamePlay.Text.scale = 0.5;
          // ---------------------

        // horizontal google
        // if(cc.view.getFrameSize().width / cc.view.getFrameSize().height <= 1.2 && cc.view.getFrameSize().width / cc.view.getFrameSize().height >= 1.2) {

        //     return;
        // }

    }


    private setVertical(): void {
        if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.5) {
            this.setIphoneX();
        } else {
            this.setMobile();
        }
    }


    private setIphoneX(): void {
        if (this.VERTICAL_IPX === this.device) {
            return;
        }

        this.device = this.VERTICAL_IPX;

        // setup intro makeup btn
        this.GamePlay.MakeUp_Btn.getComponent(cc.Widget).isAlignBottom = false;
        this.GamePlay.MakeUp_Btn.y = -230;
        this.GamePlay.MakeUp_Btn.scale = 0.25;
        // --------------

        // --------------------- set pos for intro characters
        this.GamePlay.intro_Doll.scale = 0.35;
        // this.GamePlay.intro_Doll.getComponent(cc.Widget).isAlignLeft = true;
        this.GamePlay.intro_Doll.getComponent(cc.Widget).isAlignBottom = true;
        // this.GamePlay.intro_Doll.getComponent(cc.Widget).left = -10;
        this.GamePlay.intro_Doll.getComponent(cc.Widget).bottom = 0;

        this.GamePlay.mC_CharDefault.scale = 0.35;
        this.GamePlay.mC_CharDefault.getComponent(cc.Widget).isAlignBottom = true;
        this.GamePlay.mC_CharDefault.getComponent(cc.Widget).bottom = 0;

        this.GamePlay.mC_CharMain.scale = 0.35;
        this.GamePlay.mC_CharMain.getComponent(cc.Widget).isAlignBottom = true;
        this.GamePlay.mC_CharMain.getComponent(cc.Widget).bottom = -75;

        this.GamePlay.mC_CharSub.scale = 0.35;
        this.GamePlay.mC_CharSub.getComponent(cc.Widget).isAlignBottom = true;
        this.GamePlay.mC_CharSub.getComponent(cc.Widget).bottom = -75;
        // ------------------------------ 

        // --------- set anim for intro characters
        this.GamePlay.intro_Doll.getComponent(cc.Animation).play("Character_IdleAnim_Hrz");

        this.GamePlay.mC_CharDefault.getComponent(cc.Animation).play("Character_IdleAnim_Hrz");
        this.GamePlay.mC_CharMain.getComponent(cc.Animation).play("Character_IdleAnim_Hrz");
        this.GamePlay.mC_CharSub.getComponent(cc.Animation).play("Character_IdleAnim_Hrz");
        // -----------------------------


        // setup pos for btn
        this.GamePlay.Btns[0].scale = 0.21;
        this.GamePlay.Btns[1].scale = 0.21;
        this.GamePlay.Btns[2].scale = 0.21;

        this.GamePlay.Btns[0].x = -95;
        this.GamePlay.Btns[2].x = 95;
        // ----------------


        // -------- setup effect
        this.GamePlay.mc_Effect.y = -150;
        this.GamePlay.Effects[3].y = 680;
        // ---------------------

          // UI
          this.GamePlay.Text.y = -150;
          this.GamePlay.Text.scale = 0.3;
          // ---------------------
    }

    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }

        this.device = this.VERTICAL_MOBILE;

        if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.7) {

            // if (cc.view.getFrameSize().width / cc.view.getFrameSize().height >= 0.6 && cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.62) {
            //     // mobile mode applovin


            //     return;
            // }

            // Iphone 6 / 6 plus / 7 / 7 Plus

            // setup intro makeup btn
            this.GamePlay.MakeUp_Btn.getComponent(cc.Widget).isAlignBottom = false;
            this.GamePlay.MakeUp_Btn.y = -220;
            this.GamePlay.MakeUp_Btn.scale = 0.25;
            // --------------

            // --------------------- set pos for intro characters
            this.GamePlay.intro_Doll.scale = 0.35;
            // this.GamePlay.intro_Doll.getComponent(cc.Widget).isAlignLeft = true;
            this.GamePlay.intro_Doll.getComponent(cc.Widget).isAlignBottom = true;
            // this.GamePlay.intro_Doll.getComponent(cc.Widget).left = -10;
            this.GamePlay.intro_Doll.getComponent(cc.Widget).bottom = 0;

            this.GamePlay.mC_CharDefault.scale = 0.35;
            this.GamePlay.mC_CharDefault.getComponent(cc.Widget).isAlignBottom = true;
            this.GamePlay.mC_CharDefault.getComponent(cc.Widget).bottom = -75;

            this.GamePlay.mC_CharMain.scale = 0.35;
            this.GamePlay.mC_CharMain.getComponent(cc.Widget).isAlignBottom = true;
            this.GamePlay.mC_CharMain.getComponent(cc.Widget).bottom = -75;

            this.GamePlay.mC_CharSub.scale = 0.35;
            this.GamePlay.mC_CharSub.getComponent(cc.Widget).isAlignBottom = true;
            this.GamePlay.mC_CharSub.getComponent(cc.Widget).bottom = -75;
            // ------------------------------ 

            // --------- set anim for intro characters
            this.GamePlay.intro_Doll.getComponent(cc.Animation).play("Character_IdleAnim_Hrz");

            this.GamePlay.mC_CharDefault.getComponent(cc.Animation).play("Character_IdleAnim_Hrz");
            this.GamePlay.mC_CharMain.getComponent(cc.Animation).play("Character_IdleAnim_Hrz");
            this.GamePlay.mC_CharSub.getComponent(cc.Animation).play("Character_IdleAnim_Hrz");
            // -----------------------------


            // setup pos for btn
            this.GamePlay.Btns[0].scale = 0.22;
            this.GamePlay.Btns[1].scale = 0.22;
            this.GamePlay.Btns[2].scale = 0.22;

            this.GamePlay.Btns[0].x = -110;
            this.GamePlay.Btns[2].x = 110;
            // ----------------


            // -------- setup effect
            this.GamePlay.mc_Effect.y = -150;
            this.GamePlay.Effects[3].y = 680;
            // ---------------------

               // UI
          this.GamePlay.Text.y = -150;
          this.GamePlay.Text.scale = 0.3;
          // ---------------------

        } else {
            // if(cc.view.getFrameSize().width / cc.view.getFrameSize().height < 8.5 
            // && cc.view.getFrameSize().width / cc.view.getFrameSize().height > 8.3) {

            //     return;
            // }

            // Ipad
            // setup intro makeup btn
            this.GamePlay.MakeUp_Btn.getComponent(cc.Widget).isAlignBottom = false;
            this.GamePlay.MakeUp_Btn.y = -220;
            this.GamePlay.MakeUp_Btn.scale = 0.25;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
            // --------------

            // --------------------- set pos for intro characters
            this.GamePlay.intro_Doll.scale = 0.35;
            // this.GamePlay.intro_Doll.getComponent(cc.Widget).isAlignLeft = true;
            this.GamePlay.intro_Doll.getComponent(cc.Widget).isAlignBottom = true;
            // this.GamePlay.intro_Doll.getComponent(cc.Widget).left = 0;
            this.GamePlay.intro_Doll.getComponent(cc.Widget).bottom = 0;

            this.GamePlay.mC_CharDefault.scale = 0.35;
            this.GamePlay.mC_CharMain.getComponent(cc.Widget).isAlignBottom = true;
            this.GamePlay.mC_CharDefault.getComponent(cc.Widget).bottom = -75;

            this.GamePlay.mC_CharMain.scale = 0.35;
            this.GamePlay.mC_CharMain.getComponent(cc.Widget).isAlignBottom = true;
            this.GamePlay.mC_CharMain.getComponent(cc.Widget).bottom = -75;

            this.GamePlay.mC_CharSub.scale = 0.35;
            this.GamePlay.mC_CharSub.getComponent(cc.Widget).isAlignBottom = true;
            this.GamePlay.mC_CharSub.getComponent(cc.Widget).bottom = -75;
            // ------------------------------ 

            // --------- set anim for intro characters
            this.GamePlay.intro_Doll.getComponent(cc.Animation).play("Character_IdleAnim_Hrz");

            this.GamePlay.mC_CharDefault.getComponent(cc.Animation).play("Character_IdleAnim_Hrz");
            this.GamePlay.mC_CharMain.getComponent(cc.Animation).play("Character_IdleAnim_Hrz");
            this.GamePlay.mC_CharSub.getComponent(cc.Animation).play("Character_IdleAnim_Hrz");
            // -----------------------------


            // setup pos for btn
            this.GamePlay.Btns[0].scale = 0.23;
            this.GamePlay.Btns[1].scale = 0.23;
            this.GamePlay.Btns[2].scale = 0.23;

            this.GamePlay.Btns[0].x = -130;
            this.GamePlay.Btns[2].x = 130;
            // ----------------


            // -------- setup effect
            this.GamePlay.mc_Effect.y = -150;
            this.GamePlay.Effects[3].y = 680;
            // ---------------------

               // UI
          this.GamePlay.Text.y = -150;
          this.GamePlay.Text.scale = 0.3;
          // ---------------------

        }

    }

    protected update(dt: number): void {
        this.handleRotate();
    }

}
