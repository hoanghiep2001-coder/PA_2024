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
var NodesContainer_1 = require("./NodesContainer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.NodesContainer = null;
        _this.GameController = null;
        _this.dollPrecent = 0;
        _this.opponentPrecent = 0;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
    };
    GamePlay.prototype.start = function () {
        this.NodesContainer.DollPoint.node.active = false;
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.handleGamePlay();
    };
    GamePlay.prototype.handleGamePlay = function () {
        this.activeBlinkAnimForBtnStart();
    };
    GamePlay.prototype.activeBlinkAnimForBtnStart = function () {
        cc.tween(this.NodesContainer.Btn_Start)
            .repeatForever(cc.tween(this.NodesContainer.Btn_Start)
            .to(0.5, { scale: 0.3 })
            .to(0.5, { scale: 0.32 }, { easing: 'elasticOut' })).start();
    };
    GamePlay.prototype.activeBlinkAnimForBtnSubmit = function () {
        constants_1.Constants.isShowBtnSubmit = true;
        this.NodesContainer.Btn_Submit.active = true;
        if (constants_1.Constants.isRotate) {
            cc.tween(this.NodesContainer.Btn_Submit)
                .repeatForever(cc.tween(this.NodesContainer.Btn_Submit)
                .to(0.5, { scale: 0.45 })
                .to(0.5, { scale: 0.4 }, { easing: 'elasticOut' })).start();
        }
        else {
            cc.tween(this.NodesContainer.Btn_Submit)
                .repeatForever(cc.tween(this.NodesContainer.Btn_Submit)
                .to(0.5, { scale: 0.35 })
                .to(0.5, { scale: 0.32 }, { easing: 'elasticOut' })).start();
        }
    };
    GamePlay.prototype.playGreatSound = function () {
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.pickItemSound);
        this.AudioManager.pickItemSound.volume = 0.5;
        var random = Math.floor(Math.random() * 4) + 1;
        switch (random) {
            case 1:
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Fx_Bonus1);
                break;
            case 2:
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Fx_Bonus2);
                break;
            case 3:
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Fx_Bonus3);
                break;
            case 4:
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Fx_Bonus4);
                break;
            default:
                break;
        }
    };
    GamePlay.prototype.goToDressUp = function () {
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.pickItemSound);
        this.NodesContainer.OpenScene.active = false;
        this.NodesContainer.DressUpScene.active = true;
        this.NodesContainer.BG.active = false;
        this.handleIronSourcePlaySound();
    };
    GamePlay.prototype.goToBattle = function () {
        var _this = this;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.pickItemSound);
        this.NodesContainer.DressUp_Container.active = false;
        this.NodesContainer.Doll.opacity = 0;
        this.NodesContainer.BG.active = true;
        this.NodesContainer.Doll.scale = constants_1.Constants.Responsive.calculatedScale;
        this.NodesContainer.Doll.setPosition(constants_1.Constants.Responsive.calculatedX, constants_1.Constants.Responsive.calculatedY);
        // !Constants.isRotate && this.NodesContainer.Doll.setPosition(-80, -140);
        // Constants.isRotate && this.NodesContainer.Doll.setPosition(-180, -110);
        this.scheduleOnce(function () {
            _this.NodesContainer.DollPoint.node.active = true;
            _this.NodesContainer.DollPoint.string = "0 %";
            _this.NodesContainer.UI.getComponent(cc.Animation).play("UI_ShowBattle");
            // caculate Doll Point
            _this.scheduleOnce(function () {
                constants_1.Constants.isStartCalculate = false;
                constants_1.Constants.isStartCalculate = true;
            }, 0.5);
            _this.scheduleOnce(function () { constants_1.Constants.isStartCalculate = false; }, 1.2);
            _this.scheduleOnce(function () { constants_1.Constants.isStartCalculate = true; }, 1.6);
            _this.scheduleOnce(function () { constants_1.Constants.isStartCalculate = false; }, 2.2);
            _this.scheduleOnce(function () { constants_1.Constants.isStartCalculate = true; }, 2.4);
            _this.scheduleOnce(function () {
                _this.NodesContainer.CTA.active = true;
                _this.NodesContainer.CTA.getComponent(cc.Animation).play("CTA_Anim");
                cc.tween(_this.NodesContainer.CTA_Btn)
                    .repeatForever(cc.tween(_this.NodesContainer.CTA_Btn)
                    .to(0.5, { scale: 0.5 })
                    .to(0.5, { scale: 0.53 }, { easing: 'elasticOut' })).start();
                _this.NodesContainer.CTA_Btn.on(cc.Node.EventType.TOUCH_START, _this.GameController.installHandle, _this);
                // mtg & applovin
                // this.NodesContainer.CTA_Overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
            }, 5.5);
        }, 1);
        this.scheduleOnce(function () {
            constants_1.Constants.isStartCalculate = false;
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.Fx_Lose);
        }, 4);
    };
    GamePlay.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        if (constants_1.Constants.ironSource.SoundState) {
            constants_1.Constants.ironSource.isPlayBgSound = true;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
    };
    GamePlay.prototype.handleMuteSoundIronSource = function () {
        constants_1.Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10);
        if (constants_1.Constants.ironSource.State) {
            if (constants_1.Constants.ironSource.State === 1 && !constants_1.Constants.ironSource.SoundState && !constants_1.Constants.ironSource.isEndGame) {
                constants_1.Constants.ironSource.SoundState = true;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
            }
            if (constants_1.Constants.ironSource.State === 2 && constants_1.Constants.ironSource.SoundState) {
                constants_1.Constants.ironSource.SoundState = false;
                this.AudioManager.stopAllSound();
            }
        }
    };
    GamePlay.prototype.update = function (dt) {
        if (constants_1.Constants.isStartCalculate) {
            this.dollPrecent += 0.4;
            this.opponentPrecent += 0.6;
            this.NodesContainer.DollPoint.string = Math.floor(this.dollPrecent) + " %";
            this.NodesContainer.Opponent
                .getChildByName("DollPoint").getComponent(cc.Label).string = Math.floor(this.opponentPrecent) + " %";
        }
        this.handleMuteSoundIronSource();
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(NodesContainer_1.default)
    ], GamePlay.prototype, "NodesContainer", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    GamePlay = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

cc._RF.pop();