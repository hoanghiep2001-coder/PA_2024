import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { Circle } from "./Circle";
import { GameField } from "./GameField";
const { ccclass, property } = cc._decorator;

@ccclass
export class GameController extends cc.Component {

    @property
    countTypeAndMove: number = 12;

    private allpoints: number = 0;

    private taskpoints: number = 0;

    private movepoints: number = 0;

    @property
    testGame: boolean = true;

    @property(GameField)
    gameField: GameField = null;

    @property(cc.Node)
    blockField: cc.Node = null;

    
    onLoad() {

        this.node.on('moveCircleEnd', this.gameField.createOneLineCircles, this.gameField);
        this.node.on('moveCircleEnd', function (event) {
            event.stopPropagation();
        });

        this.node.on('clickOnCellForDestroyCircle', this.gameField.clickDestroyCircleInCell, this.gameField);
        this.node.on('clickOnCellForDestroyCircle', function (event) {
            event.stopPropagation();
        });

        this.node.on('destroyCircles', this.gameField.allCirclesMove, this.gameField);
        this.node.on('destroyCircles', function (event) {
            event.stopPropagation();
        });

        this.node.on('needCheckField', this.gameField.checkLine, this.gameField);
        this.node.on('needCheckField', function (event) {
            event.stopPropagation();
        });

        this.node.on('setPoint', this.setPoint, this);
        this.node.on('setPoint', function (event) {
            event.stopPropagation();
        });


        this.node.on('getDestroyCirclesType', this.gameField.getTypeDestroyCircle, this.gameField);
        this.node.on('getDestroyCirclesType', function (event) {
            event.stopPropagation();
        });

        this.node.on('setDestroyCirclesType_', this.setTypeDestroyCircle, this);
        this.node.on('setDestroyCirclesType_', function (event) {
            event.stopPropagation();
        });

        this.node.on('countProgressStep', this.countProgressStep, this);
        this.node.on('countProgressStep', function (event) {
            event.stopPropagation();
        });
        this.node.on('countProgressDestrCirles', this.countProgressStep, this);
        this.node.on('countProgressDestrCirles', function (event) {
            event.stopPropagation();
        });
    }


    private setPoint() {
        this.allpoints += 1;
    }


    private countProgressStep() {
        this.movepoints--;
        cc.log(this.movepoints)
    }

    progressTargetDestoyCircle(){

    }

    gameOverNodeDeActivate(){
     
    }

    gameWonNodeDeActivate(){
     
    }

    private CheckGameOverIfColorChallengeIsComplete(){

    }

    RestartGame() {
        this.gameField.node.active = false;
        this.gameField.node.active = true;
        this.allpoints = 1;
        this.movepoints = this.countTypeAndMove;
    }

    setTypeDestroyCircle() {
        this.progressTargetDestoyCircle();
    }


    @property(AudioManager)
    AudioManager: AudioManager = null;
    
    protected start(): void {
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound)
        window.gameReady && window.gameReady();
    }

    public installHandle(): void {
        console.log("install");
        Constants.ironSource.isEndGame = true;
        this.AudioManager.stopAllSound();
        window.gameEnd && window.gameEnd();

        //If ad network is tiktok
        if (typeof (playableSDK) != "undefined") {
            window.playableSDK.openAppStore();
            return;
        }

        // If ad network is google ads
        if (typeof (ExitApi) != "undefined") {
            ExitApi.exit();
            return;
        }

        // If ad netwrok is ironsources
        if (typeof (dapi) != "undefined") {
            dapi.openStoreUrl();
            return;
        }

        // If ad network support MRAID 2.0
        if (typeof(mraid) != "undefined") {
            if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.ANDROID) {
                mraid.open("https://play.google.com/store/apps/details?id=com.an.fashiongame.dolldressup");
                return;
            }

            // if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
            //     mraid.open("https://itunes.apple.com/us/app/id6449269733?mt=8");
            //     return;
            // }

            mraid.open("https://play.google.com/store/apps/details?id=com.an.fashiongame.dolldressup");
            return;
        }
        // If ad network is mindwork. window alway avaiable so skip undefined check
        window.install && window.install();
    }

}