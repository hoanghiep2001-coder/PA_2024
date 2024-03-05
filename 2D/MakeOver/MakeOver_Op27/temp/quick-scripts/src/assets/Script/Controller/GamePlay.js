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
        _this.checkCleanserFlag = false;
        _this.checkshowTweezersFlag = false;
        _this.isRemovingMaggot = false;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
    };
    GamePlay.prototype.start = function () {
        this.handleGamePlay();
        this.NodeContainer.Tweezers.opacity = 0;
        this.NodeContainer.Circle_1.active = false;
        this.NodeContainer.Circle_2.active = false;
    };
    GamePlay.prototype.handleGamePlay = function () {
        var _this = this;
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.dirtySound);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.girlScreamSound); }, 0.5);
        this.scheduleOnce(function () { _this.getComponent(cc.Animation).play("GamePlay_SwtichStep"); }, 2);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.wormBgSound); }, 3);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.moveItemSound); }, 4.3);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.xitNuocSound); constants_1.Constants.isCanTouch = true; }, 5.8);
        this.scheduleOnce(function () {
            constants_1.Constants.isRotate
                ? _this.NodeContainer.Hand_1.getComponent(cc.Animation).play("Hand_HrzHintAnim")
                : _this.NodeContainer.Hand_1.getComponent(cc.Animation).play("Hand_VtcHintAnim");
        }, 7);
    };
    GamePlay.prototype.activeCleanSound = function () {
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.cleanSound);
        this.AudioManager.cleanSound.loop = true;
    };
    GamePlay.prototype.handleDoneCleanser = function () {
        if (this.NodeContainer.Scratchable.getComponent("Scratchable").isWin) {
            this.checkCleanserFlag = true;
            this.NodeContainer.Scratchable.active = false;
            this.NodeContainer.Cleanser_Point.active = false;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.completeSound);
            this.NodeContainer.Cleanser.getComponent(cc.Animation).play("Cleanser_HideAnim");
            this.NodeContainer.Star_1.getComponent(cc.Animation).play("Star_BlinkAnim");
            this.AudioManager.stopSound(constants_1.Constants.SoundTrack.cleanSound);
            this.AudioManager.cleanSound.loop = false;
        }
    };
    GamePlay.prototype.showTweezers = function () {
        var _this = this;
        this.checkshowTweezersFlag = true;
        this.scheduleOnce(function () {
            constants_1.Constants.isDoneCleanser = true;
            _this.NodeContainer.Circle_1.active = true;
            _this.NodeContainer.Circle_2.active = true;
            _this.NodeContainer.Tweezers.getComponent(cc.Animation).play("Tweezers_ShowAnim");
            _this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.moveItemSound); }, 0.2);
            _this.scheduleOnce(function () {
                _this.NodeContainer.Hand_2.active = true;
                constants_1.Constants.isRotate
                    ? _this.NodeContainer.Hand_2.getComponent(cc.Animation).play("Hand_HrzHintAnim")
                    : _this.NodeContainer.Hand_2.getComponent(cc.Animation).play("Hand_VtcHintAnim");
            }, 1.5);
        }, 1.5);
    };
    GamePlay.prototype.handleCheckRemoveMaggots = function () {
        var tweezersBdx = this.NodeContainer.Tweezers_HeadPoint.getBoundingBox();
        var points = [this.NodeContainer.Tweezers_InteractPoint1, this.NodeContainer.Tweezers_InteractPoint2];
        for (var i = 0; i < points.length; i++) {
            var PointBdx = points[i].getBoundingBox();
            var pointName = points[i].name;
            if (tweezersBdx.intersects(PointBdx)) {
                this.handleRemoveMaggot(pointName);
            }
        }
    };
    GamePlay.prototype.handleRemoveMaggot = function (maggotName) {
        var _this = this;
        this.NodeContainer.Tweezers.opacity = 0;
        this.NodeContainer.Circle_1.active = false;
        this.NodeContainer.Circle_2.active = false;
        this.isRemovingMaggot = true;
        switch (maggotName) {
            case "Tws_InteractPoint1":
                constants_1.Constants.maggotRemoved += 1;
                this.NodeContainer.Spine_Maggot1.setAnimation(0, "idle01", false);
                this.NodeContainer.Spine_RMMG1.node.active = true;
                this.NodeContainer.Circle_1.opacity = 0;
                this.scheduleOnce(function () { _this.NodeContainer.Spine_Maggot1.node.active = false; }, 0.75);
                this.activeRemoveMaggotSound();
                this.setCompleteSpine(this.NodeContainer.Spine_RMMG1);
                break;
            case "Tws_InteractPoint2":
                constants_1.Constants.maggotRemoved += 1;
                this.NodeContainer.Spine_Maggot2.setAnimation(0, "idle01", false);
                this.NodeContainer.Spine_RMMG2.node.active = true;
                this.NodeContainer.Circle_2.opacity = 0;
                this.scheduleOnce(function () { _this.NodeContainer.Spine_Maggot2.node.active = false; }, 0.75);
                this.activeRemoveMaggotSound();
                this.setCompleteSpine(this.NodeContainer.Spine_RMMG2);
                break;
            default:
                break;
        }
    };
    GamePlay.prototype.activeRemoveMaggotSound = function () {
        var _this = this;
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun1Sound); }, 0.75);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun2Sound); }, 1.5);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun2Sound); }, 2.2);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun2Sound); }, 2.8);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun3Sound); }, 4);
    };
    GamePlay.prototype.setCompleteSpine = function (spine) {
        var _this = this;
        spine.setCompleteListener(function (trackEntry) {
            if (trackEntry.animation.name === "Action") {
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.completeSound);
                _this.showTweezers();
            }
        });
    };
    GamePlay.prototype.update = function (dt) {
        !this.checkCleanserFlag && this.handleDoneCleanser();
        this.checkCleanserFlag && !this.checkshowTweezersFlag && this.showTweezers();
        this.checkshowTweezersFlag && !this.isRemovingMaggot && this.handleCheckRemoveMaggots();
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