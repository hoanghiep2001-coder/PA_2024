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
        _this.touchArea = null;
        _this.coutingTime = 0;
        _this.isCrouch = false;
        _this.timeoutId = null;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
    };
    GamePlay.prototype.start = function () {
        var _this = this;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        this.handleYourOrientation();
        this.activeBubbleAnimForText();
        cc.view.setResizeCallback(function () {
            _this.handleYourOrientation();
        });
        this.activeHint(0);
    };
    GamePlay.prototype.caculateTime = function () {
        var _this = this;
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
        this.timeoutId = setTimeout(function () {
            var random = cc.math.randomRangeInt(0, _this.NodesContainer.Cats.length);
            _this.activeHint(random);
        }, 3000);
    };
    GamePlay.prototype.activeBubbleAnimForText = function () {
        cc.tween(this.NodesContainer.Text)
            .repeatForever(cc.tween(this.NodesContainer.Text)
            .to(0.5, { scale: 0.8 })
            .to(0.5, { scale: 0.83 }, { easing: 'elasticOut' })).start();
    };
    GamePlay.prototype.unActiveHints = function () {
        for (var index = 0; index < this.NodesContainer.Hints.length; index++) {
            var hint = this.NodesContainer.Hints[index];
            hint.active = false;
        }
    };
    GamePlay.prototype.activeHint = function (index) {
        this.unActiveHints();
        this.NodesContainer.Hints[index].active = true;
        cc.tween(this.NodesContainer.Hints[index])
            .to(0.5, { opacity: 255 })
            .start();
        this.NodesContainer.Hints[index].getComponent(cc.Animation).play();
    };
    GamePlay.prototype.handleActiveCat = function (index) {
        constants_1.Constants.countCat >= 3 && this.GameController.installHandle();
        constants_1.Constants.countCat += 1;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.CatSound);
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.ClickSound);
        this.NodesContainer.Cats[index].opacity = 255;
        this.NodesContainer.Stars[index].active = true;
        this.NodesContainer.Hints[index].active = false;
        this.touchArea.getComponent("TouchAreaController").offEvent();
        this.NodesContainer.Cats.splice(index, 1);
        this.NodesContainer.Stars.splice(index, 1);
        this.NodesContainer.Hints.splice(index, 1);
        this.touchArea.getComponent("TouchAreaController").registerEvent();
    };
    GamePlay.prototype.handleYourOrientation = function () {
        if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
            this.NodesContainer.CatBackground.y = 32;
            this.NodesContainer.RotateArea.active = false;
        }
        else {
            this.NodesContainer.CatBackground.y = 0;
            this.NodesContainer.RotateArea.active = true;
        }
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
        // this.handleMuteSoundIronSource();
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
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "touchArea", void 0);
    GamePlay = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

cc._RF.pop();