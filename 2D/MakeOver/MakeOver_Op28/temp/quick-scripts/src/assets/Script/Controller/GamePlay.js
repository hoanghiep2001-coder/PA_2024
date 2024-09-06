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
var NodeContanier_1 = require("./NodeContanier");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.NodeContainer = null;
        // state
        _this.isRunFlow1 = false;
        _this.checkCleanserFlag = false;
        _this.checkshowTweezersFlag = false;
        _this.isRemovingMaggot = false;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
    };
    GamePlay.prototype.start = function () {
        this.handleGamePlay();
    };
    GamePlay.prototype.handleGamePlay = function () {
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        // this.AudioManager.playSound(Constants.SoundTrack.dirtySound);
        var _this = this;
        // this.scheduleOnce(() => {this.AudioManager.playSound(Constants.SoundTrack.girlScreamSound)}, 0.5);
        this.scheduleOnce(function () { _this.getComponent(cc.Animation).play("GamePlay_SwtichStep"); }, 2);
    };
    GamePlay.prototype.runFlow1_Opt1 = function () {
        var _this = this;
        this.isRunFlow1 = true;
        this.NodeContainer.Flow1_Opt1.active = false;
        this.NodeContainer.Flow1_Opt2.active = false;
        constants_1.Constants.optionDoneLength += 1;
        this.NodeContainer.Sp_Cleanser.node.active = true;
        this.NodeContainer.Sp_Cleanser.setAnimation(0, "Intro", false);
        this.showTools(this.NodeContainer.Sp_Cleanser);
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.moveItemSound);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.xitNuocSound); }, 1.2);
        this.scheduleOnce(function () { _this.NodeContainer.Sp_Cleanser.node.getComponent(cc.Animation).play("spCleanser_MoveAnim"); }, 3);
        this.scheduleOnce(function () {
            _this.NodeContainer.PointScratch.getComponent(cc.Animation).play();
            _this.activeCleanSound();
            constants_1.Constants.isTouch = true;
        }, 3.8);
    };
    GamePlay.prototype.runFlow1_Opt2 = function () {
        var _this = this;
        this.isRunFlow1 = true;
        this.NodeContainer.Flow1_Opt1.active = false;
        this.NodeContainer.Flow1_Opt2.active = false;
        this.NodeContainer.Sp_Shower.node.active = true;
        constants_1.Constants.optionDoneLength += 1;
        this.showTools(this.NodeContainer.Sp_Shower);
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.moveItemSound);
        this.scheduleOnce(function () {
            _this.NodeContainer.Sp_Shower.setAnimation(0, "Shower_Action", true);
            _this.NodeContainer.PointScratch.getComponent(cc.Animation).play();
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.showerSound);
            constants_1.Constants.isTouch = true;
        }, 1);
    };
    GamePlay.prototype.showTools = function (tool) {
        var node = tool.node;
        var position = node.getPosition();
        node.setPosition(position.x - 50, position.y);
        cc.tween(node)
            .to(0.5, { x: position.x, opacity: 255 })
            .start();
    };
    GamePlay.prototype.activeCleanSound = function () {
        var _this = this;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.cleanSound);
        this.AudioManager.cleanSound.volume = 0.7;
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.cleanSound); }, 0.5);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.cleanSound); }, 1);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.cleanSound); }, 1.5);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.cleanSound); }, 2);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.cleanSound); }, 2.5);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.cleanSound); }, 3);
    };
    GamePlay.prototype.stopCleanSound = function () {
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.cleanSound);
        this.AudioManager.cleanSound.loop = false;
    };
    GamePlay.prototype.handleDoneCleanser = function () {
        var _this = this;
        if (this.NodeContainer.Scratchable.getComponent("Scratchable").isWin) {
            constants_1.Constants.isTouch = false;
            constants_1.Constants.isCanTouch = true;
            this.stopCleanSound();
            this.checkCleanserFlag = true;
            this.NodeContainer.Scratchable.active = false;
            this.NodeContainer.PointScratch.getComponent(cc.Animation).play("Point_HideAnim");
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.completeSound);
            this.NodeContainer.Star_1.getComponent(cc.Animation).play("Star_BlinkAnim");
            this.AudioManager.stopSound(constants_1.Constants.SoundTrack.showerSound);
            this.scheduleOnce(function () { _this.NodeContainer.Step2.getComponent(cc.Animation).play("Step2_ShowFlow2"); }, 1);
        }
    };
    GamePlay.prototype.runFlow2_Opt1 = function () {
        var _this = this;
        constants_1.Constants.isCanTouch = false;
        this.NodeContainer.Flow2_Opt1.opacity = 0;
        this.NodeContainer.Flow2_Opt2.opacity = 0;
        this.NodeContainer.Spine_RMMG1.node.active = true;
        constants_1.Constants.optionDoneLength += 1;
        this.activeRemoveMaggotSound(false);
        this.setCompleteSpine(this.NodeContainer.Spine_RMMG1, this.NodeContainer.Flow2_Opt1);
        this.NodeContainer.Spine_Maggot2.setAnimation(0, "idle01", false);
        this.scheduleOnce(function () { _this.NodeContainer.Spine_Maggot2.node.active = false; }, 0.7);
    };
    GamePlay.prototype.runFlow2_Opt2 = function () {
        constants_1.Constants.isCanTouch = false;
        this.NodeContainer.Flow2_Opt1.opacity = 0;
        this.NodeContainer.Flow2_Opt2.opacity = 0;
        constants_1.Constants.optionDoneLength += 1;
        this.NodeContainer.Spine_Acne.setAnimation(0, "action03_squeze_big", false);
        this.activeRemoveMaggotSound(true);
        this.setCompleteSpine(this.NodeContainer.Spine_Acne, this.NodeContainer.Flow2_Opt2);
    };
    GamePlay.prototype.showAnotherOption = function (nodeToEnable) {
        nodeToEnable.active = false;
        this.NodeContainer.Step2.getComponent(cc.Animation).play("Step2_AnotherOpt");
        this.scheduleOnce(function () { constants_1.Constants.isCanTouch = true; }, 0.5);
    };
    GamePlay.prototype.showFlow3 = function () {
        constants_1.Constants.isCanTouch = true;
        this.NodeContainer.Step2.getComponent(cc.Animation).play("Step2_ShowFlow3");
    };
    GamePlay.prototype.activeRemoveMaggotSound = function (isLonger) {
        var _this = this;
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun1Sound); }, 0.75);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun2Sound); }, 1.5);
        isLonger && this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun2Sound); }, 1.9);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun2Sound); }, 2.2);
        isLonger && this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun2Sound); }, 1.5);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun2Sound); }, 2.8);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun3Sound); }, 3.5);
    };
    GamePlay.prototype.setCompleteSpine = function (spine, nodeToEnable) {
        var _this = this;
        spine.setCompleteListener(function (trackEntry) {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.completeSound);
            constants_1.Constants.optionDoneLength <= 2 && _this.scheduleOnce(function () { _this.showAnotherOption(nodeToEnable); }, 1);
            constants_1.Constants.optionDoneLength >= 3 && _this.scheduleOnce(function () { _this.showFlow3(); nodeToEnable.active = false; }, 1);
        });
    };
    GamePlay.prototype.update = function (dt) {
        !this.checkCleanserFlag && this.handleDoneCleanser();
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(NodeContanier_1.default)
    ], GamePlay.prototype, "NodeContainer", void 0);
    GamePlay = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

cc._RF.pop();