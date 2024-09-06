import { Constants } from "../Data/constants";
import AudioManager from "./AudioManager";
import { GameController } from "./GameController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GamePlay extends cc.Component {

    // Component
    @property(GameController)
    GameController: GameController = null;
    @property(AudioManager)
    AudioManager: AudioManager = null;


    // Container
    @property(cc.Node)
    background: cc.Node = null;
    @property(cc.Node)
    intro: cc.Node = null;
    @property(cc.Node)
    mainContent: cc.Node = null;
    @property(cc.Node)
    mc_Effect: cc.Node = null;
    @property(cc.Node)
    BrushContainer: cc.Node = null;
    @property(cc.Node)
    CharacterContanier: cc.Node = null;


    // node
    @property(cc.Node)
    Hand_Hint_1: cc.Node = null;
    @property(cc.Node)
    Hand_Hint_2: cc.Node = null;
    @property(cc.Node)
    Overlay: cc.Node = null;
    @property(cc.Node)
    Overlay_black: cc.Node = null;
    @property(cc.Node)
    Text: cc.Node = null;
    
    
    // array
    @property([cc.Node])
    Background_Casuals: cc.Node[] = [];
    @property([cc.Node])
    Btns: cc.Node[] = [];
    @property([cc.Node])
    Dresses: cc.Node[] = [];
    @property([cc.Node])
    Skincares: cc.Node[] = [];
    @property([cc.Node])
    Hairs: cc.Node[] = [];
    @property([cc.Node])
    Effects: cc.Node[] = [];

    
    // UI Button
    @property(cc.Node)
    MakeUp_Btn: cc.Node = null;
    @property(cc.Node)
    Btn_1: cc.Node = null;


    // Characters
    @property(cc.Node)
    intro_Doll: cc.Node = null;

    @property(cc.Node)
    mC_CharDefault: cc.Node = null;
    @property(cc.Node)
    mC_CharMain: cc.Node = null;
    @property(cc.Node)
    mC_CharSub: cc.Node = null;


    // effect 
    @property(cc.ParticleSystem)
    Effect_Boom: cc.ParticleSystem = null;
    @property(cc.ParticleSystem)
    Effect_Boom_2: cc.ParticleSystem = null;
    @property(cc.ParticleSystem)
    Effect_Sparkle: cc.ParticleSystem = null;
    @property(cc.ParticleSystem)
    Effect_Blink: cc.ParticleSystem = null;


    currentBgNumber: number = 0;
    targetBgNumber: number = 3;
    intervalState: NodeJS.Timeout | number = null;
    timeHandler: number = 0;


    protected onLoad(): void {
        this.mainContent.active = false;
        this.mC_CharMain.active = false;
        this.mC_CharSub.active = false;
        this.Overlay_black.opacity = 0;
        this.Btns.forEach(btn => btn.opacity = 0);
        this.BrushContainer.opacity = 0;
        this.Skincares.forEach(skincare => skincare.opacity = 0);
        this.Hairs.forEach(hair => hair.opacity = 0);
    }


    protected start(): void {
        this.handleGamePlay();
        this.registerEvent();
    }


    private handleGamePlay(): void {
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound_1);
        this.AudioManager.bgSound_1.volume = 0.5;
        this.randonBackground();
    }


    private randonBackground(): void {
        this.intervalState = setInterval(() => {
            
            if(this.currentBgNumber === this.targetBgNumber) {
                this.intro.getComponent(cc.Animation).play("Intro_Anim");

                cc.tween(this.MakeUp_Btn)
                .repeatForever(
                    cc.tween(this.MakeUp_Btn)
                    .to(0.5, {scale: 0.25})
                    .to(0.5, {scale: 0.3}, {easing: 'elasticOut'})
                    .start()
                ).start();

                // this.Hand_Hint_1.getComponent(cc.Animation).play("Hand_HintAnim");
                Constants.isCanClick = true;
                clearInterval(this.intervalState);
                return;
            }
            
            console.log(this.Background_Casuals[this.currentBgNumber].name);
            this.timeHandler += 200;
            this.Background_Casuals[this.currentBgNumber].active = false;
            this.currentBgNumber += 1;
            if(this.currentBgNumber === this.targetBgNumber) this.AudioManager.playSound(Constants.SoundTrack.GirlSound_1);
            this.Background_Casuals[this.currentBgNumber].active = true;
        }, 500);
    }


    public registerEvent(): void {
        this.MakeUp_Btn.on(cc.Node.EventType.TOUCH_START, this.onBtnMakeUpTouch, this);
        this.Btn_1.on(cc.Node.EventType.TOUCH_START, this.onBtnTouchStart, this);    
        this.node.on(cc.Node.EventType.TOUCH_START, this.handleIronSourcePlaySound, this);
    }


    private onBtnMakeUpTouch(): void {
        if(!Constants.isCanClick) {
            return;
        }

        // ironsource
        this.handleIronSourcePlaySound();

        Constants.isClickBtnMakeUp = true;
        this.AudioManager.playSound(Constants.SoundTrack.clickSound);
        this.AudioManager.stopSound(Constants.SoundTrack.bgSound_1);
        this.Overlay.getComponent(cc.Animation).play("Overlay_Anim");
        
        this.Text.active = false;
        this.MakeUp_Btn.active = false;

        this.scheduleOnce(() => {
            this.AudioManager.playSound(Constants.SoundTrack.bgSound_2);
        }, 0.2);
 
        this.scheduleOnce(() => {
            this.intro_Doll.active = false;
            
            // this.bg_1.active = false;
            // this.bg_2.active = true;
            this.mainContent.active = true;
            this.mainContent.getComponent(cc.Animation).play("MainContent_Anim");
            this.Hand_Hint_2.getComponent(cc.Animation).play("Hand_HintAnim");
        }, 1);
    }


    private onBtnTouchStart(): void {
        if(!Constants.isCanClick) {
            return;
        }

        if(Constants.step === 2) {
            this.handleClickBtnStep2();
            return;
        }

        if(Constants.step === 3) {
            this.handleClickBtnStep3();
            return;
        }

        Constants.step++;
        Constants.isCanClick = false;
        this.mainContent.getComponent(cc.Animation).stop("MainContent_Anim");
        this.mC_CharDefault.active = false;
        this.mC_CharMain.active = true;
        this.AudioManager.playSound(Constants.SoundTrack.GirlSound_1);
        this.AudioManager.playSound(Constants.SoundTrack.BlinkSound);
        this.Effect_Boom.resetSystem();
        this.Effect_Boom_2.resetSystem();
        this.Overlay_black.opacity = 0;
        this.Btns.forEach(btn => btn.opacity = 0);

        this.scheduleOnce(() => {
            this.Dresses.forEach(dress => dress.active = false);
            this.Skincares.forEach(skincare => skincare.opacity = 255);
            this.Effect_Sparkle.resetSystem();
            this.Effect_Blink.resetSystem();
        }, 0.4);

        this.scheduleOnce(() => {
            this.mainContent.getComponent(cc.Animation).play("MainContent_Anim");
        }, 0.8);

        this.scheduleOnce(() => {
            Constants.isCanClick = true;
        }, 1.6)
    }


    private handleClickBtnStep2(): void {
        console.log(2);
        
        Constants.step++;
        Constants.isCanClick = false;
        this.mainContent.getComponent(cc.Animation).stop("MainContent_Anim");
        this.BrushContainer.getComponent(cc.Animation).play("BurshContainer_Anim");
        this.Overlay_black.opacity = 0;
        this.Btns.forEach(btn => btn.opacity = 0);
        this.AudioManager.playSound(Constants.SoundTrack.BrushSound);

        this.scheduleOnce(() => {
            this.Skincares.forEach(skincare => skincare.active = false);
            this.Hairs.forEach(hair => hair.opacity = 255);
            // this.Effect_Sparkle.resetSystem();
            // this.Effect_Blink.resetSystem();
        }, 0.4);
        
        this.scheduleOnce(() => {
            // this.Effect_Blink.stopSystem();
            this.mC_CharMain.active = false;
            this.mC_CharSub.active = true;
            this.AudioManager.playSound(Constants.SoundTrack.GirlSound_2);
        }, 1);

        this.scheduleOnce(() => {
            this.mainContent.getComponent(cc.Animation).play("MainContent_Anim");
        }, 1.5);

        this.scheduleOnce(() => {
            Constants.isCanClick = true;

            // mtg & applovin
            // this.Overlay_black.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        }, 2.5);
    }


    private handleClickBtnStep3(): void {
        console.log(3);
        this.GameController.installHandle();
    }


    private handleIronSourcePlaySound(): void {
        if (Constants.ironSource.isPlayBgSound || Constants.isClickBtnMakeUp) {
            return;
        }

        if (Constants.ironSource.SoundState) {
            this.AudioManager.playSound(Constants.SoundTrack.bgSound_1);
        }

        Constants.ironSource.isPlayBgSound = true;
    }


    private handleMuteSoundIronSource(): void {
        Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10)

        if (Constants.ironSource.State) {
            if (Constants.ironSource.State === 1 && !Constants.ironSource.SoundState && !Constants.ironSource.isEndGame) {
                Constants.ironSource.SoundState = true;
                Constants.isClickBtnMakeUp 
                    ? this.AudioManager.playSound(Constants.SoundTrack.bgSound_2)
                    : this.AudioManager.playSound(Constants.SoundTrack.bgSound_1);
            }

            if (Constants.ironSource.State === 2 && Constants.ironSource.SoundState) {
                Constants.ironSource.SoundState = false;
                this.AudioManager.stopAllSound();
            }
        }
    }


    protected update(dt: number): void {
        // ironsource
        this.handleMuteSoundIronSource();
    }


}
