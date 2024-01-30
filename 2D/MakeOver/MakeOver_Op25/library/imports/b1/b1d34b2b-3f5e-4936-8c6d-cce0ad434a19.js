"use strict";
cc._RF.push(module, 'b1d34srP15JNoxtzOCtQ0oZ', 'GamePlay');
// Script/Controller/GamePlay.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.background = null;
        _this.spine_Bubbles = [];
        _this.hair_tut = null;
        _this.hand = null;
        _this.overlay = null;
        _this.circle = null;
        _this.character = null;
        _this.character_dirtyHair = null;
        _this.Effect_Blinks = [];
        _this.doneStep1Flag = false;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
        this.hair_tut.active = false;
        this.circle.active = false;
        this.hand.active = false;
    };
    GamePlay.prototype.start = function () {
        this.handleGamePlay();
    };
    GamePlay.prototype.handleGamePlay = function () {
        var _this = this;
        this.getComponent(cc.Animation).play("GamePlay_TutorialAnim");
        this.scheduleOnce(function () {
            // ironsource
            // this.AudioManager.playSound(Constants.SoundTrack.moveItemSound)
        }, 0.5);
        this.scheduleOnce(function () {
            _this.hair_tut.active = true;
            _this.hand.active = true;
        }, 1);
        this.scheduleOnce(function () {
            constants_1.Constants.isCanTouch = true;
        }, 2);
    };
    GamePlay.prototype.runDoneStep1Anim = function () {
        var _this = this;
        this.doneStep1Flag = true;
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.conClearSound);
        this.getComponent(cc.Animation).play("GamePlay_DoneStep1Anim");
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.moveItemSound);
        }, 0.8);
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.showerSound);
        }, 1.5);
        this.scheduleOnce(function () {
            _this.spine_Bubbles[0].setAnimation(0, "action04_bubble_clean", false);
            _this.spine_Bubbles[1].setAnimation(0, "action04_bubble_clean", false);
            _this.spine_Bubbles[2].setAnimation(0, "action04_bubble_clean", false);
            _this.spine_Bubbles[3].setAnimation(0, "action04_bubble_clean", false);
        }, 1.9);
        this.scheduleOnce(function () {
            _this.spine_Bubbles[4].setAnimation(0, "action04_bubble_clean", false);
            _this.spine_Bubbles[5].setAnimation(0, "action04_bubble_clean", false);
            _this.spine_Bubbles[6].setAnimation(0, "action04_bubble_clean", false);
            _this.spine_Bubbles[7].setAnimation(0, "action04_bubble_clean", false);
        }, 2.3);
        this.scheduleOnce(function () {
            _this.spine_Bubbles[8].setAnimation(0, "action04_bubble_clean", false);
            _this.spine_Bubbles[9].setAnimation(0, "action04_bubble_clean", false);
            _this.spine_Bubbles[10].setAnimation(0, "action04_bubble_clean", false);
        }, 2.7);
        this.scheduleOnce(function () {
            _this.spine_Bubbles[11].setAnimation(0, "action04_bubble_clean", false);
            _this.spine_Bubbles[12].setAnimation(0, "action04_bubble_clean", false);
            _this.spine_Bubbles[13].setAnimation(0, "action04_bubble_clean", false);
        }, 3.1);
        this.scheduleOnce(function () {
            constants_1.Constants.step = 2;
            constants_1.Constants.isDoneStep1 = true;
        }, 3.5);
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.completeSound);
            _this.Effect_Blinks.forEach(function (effect) { return effect.resetSystem(); });
            cc.tween(_this.character)
                .to(1, { scale: 0.85 })
                .start();
            cc.tween(_this.character_dirtyHair)
                .to(1, { opacity: 0 })
                .start();
        }, 4.3);
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.woaAnimeSound);
        }, 5.3);
        this.scheduleOnce(function () {
            _this.getComponent(cc.Animation).play("GamePlay_TutorialStep2Anim");
            _this.circle.active = true;
        }, 6.5);
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.moveItemSound);
        }, 7);
        this.scheduleOnce(function () {
            _this.hand.active = true;
        }, 7.5);
    };
    GamePlay.prototype.update = function (dt) {
        !this.doneStep1Flag && constants_1.Constants.isDoneCleanHair && this.runDoneStep1Anim();
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "background", void 0);
    __decorate([
        property([sp.Skeleton])
    ], GamePlay.prototype, "spine_Bubbles", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "hair_tut", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "hand", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "overlay", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "circle", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "character", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "character_dirtyHair", void 0);
    __decorate([
        property([cc.ParticleSystem])
    ], GamePlay.prototype, "Effect_Blinks", void 0);
    GamePlay = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

cc._RF.pop();