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
        _this.tweezersStartPos = null;
        _this.tweezersPointStartPos = null;
        _this.isRunFlow1 = false;
        _this.checkCleanserFlag = false;
        _this.checkshowTweezersFlag = false;
        _this.isRemovingMaggot = false;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
        this.NodeContainer.Text_Jimin.opacity = 0;
        this.NodeContainer.Text_Drag.opacity = 0;
        this.NodeContainer.sp_Cleanser.node.active = false;
        this.NodeContainer.Cleanser.opacity = 0;
        this.NodeContainer.tweezers.opacity = 0;
        this.tweezersStartPos = this.NodeContainer.sp_Tweezers.node.getPosition();
        this.tweezersPointStartPos = this.NodeContainer.Point_Tweezers.getPosition();
        this.NodeContainer.Acne1_1.active = false;
        this.NodeContainer.Acne1_2.active = false;
        this.NodeContainer.Acne2_1.active = false;
        this.NodeContainer.Acne2_2.active = false;
    };
    GamePlay.prototype.start = function () {
        this.handleGamePlay();
    };
    GamePlay.prototype.handleGamePlay = function () {
        var _this = this;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        this.scheduleOnce(function () { _this.NodeContainer.Text_Jimin.getComponent(cc.Animation).play("ShowAnim"); }, 1);
        this.scheduleOnce(function () {
            _this.NodeContainer.Bg_2.getComponent(cc.Animation).play("ShowAnim");
            _this.NodeContainer.Doll.getComponent(cc.Animation).play("Doll_ScaleAnim");
            _this.NodeContainer.Doll.getChildByName("JiminBase").getComponent(cc.Animation).stop();
            _this.hideUIFirstStep();
        }, 2);
        this.scheduleOnce(function () {
            _this.NodeContainer.Cleanser.getComponent(cc.Animation).play("ShowAnim");
            _this.NodeContainer.sp_Cleanser.node.active = true;
            _this.showTools(_this.NodeContainer.sp_Cleanser);
        }, 3.5);
        this.scheduleOnce(function () {
            _this.NodeContainer.Text_Drag.getComponent(cc.Animation).play("ShowAnim");
        }, 4.5);
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.xitNuocSound);
        }, 4.8);
        this.scheduleOnce(function () { cc.tween(_this.NodeContainer.Hand_1).to(0.5, { opacity: 255 }).start(); constants_1.Constants.isCanTouch = true; }, 6);
    };
    GamePlay.prototype.hideUIFirstStep = function () {
        cc.tween(this.NodeContainer.Text_Jimin)
            .to(0.5, { opacity: 0 })
            .start();
        cc.tween(this.NodeContainer.sp_tearsLeft.node)
            .to(0.5, { opacity: 0 })
            .start();
        cc.tween(this.NodeContainer.sp_tearsRight.node)
            .to(0.5, { opacity: 0 })
            .start();
    };
    GamePlay.prototype.hideAnim = function (node) {
        cc.tween(node)
            .to(0.5, { opacity: 0 })
            .start();
    };
    GamePlay.prototype.showTools = function (tool) {
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.moveItemSound);
        var node = tool.node;
        var position = node.getPosition();
        node.setPosition(position.x - 30, position.y);
        cc.tween(node)
            .to(0.5, { x: position.x })
            .start();
    };
    GamePlay.prototype.activeCleanSound = function () {
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.cleanSound);
        this.AudioManager.cleanSound.loop = true;
    };
    GamePlay.prototype.stopCleanSound = function () {
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.cleanSound);
        this.AudioManager.cleanSound.loop = false;
    };
    GamePlay.prototype.handleDoneCleanser = function () {
        if (this.NodeContainer.Scratchable.getComponent("Scratchable").isWin) {
            constants_1.Constants.isTouch = false;
            constants_1.Constants.isCanTouch = true;
            this.stopCleanSound();
            this.checkCleanserFlag = true;
            this.NodeContainer.Scratchable.active = false;
            this.hideAnim(this.NodeContainer.Cleanser);
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.completeSound);
            this.NodeContainer.Star_1.getComponent(cc.Animation).play("Star_BlinkAnim");
        }
    };
    GamePlay.prototype.showTweezers = function () {
        var _this = this;
        this.checkshowTweezersFlag = true;
        this.scheduleOnce(function () {
            constants_1.Constants.isDoneCleanser = true;
            _this.NodeContainer.tweezers.getComponent(cc.Animation).play("ShowAnim");
            _this.showTools(_this.NodeContainer.sp_Tweezers);
            _this.scheduleOnce(function () {
                _this.NodeContainer.Hand_2.active = true;
                constants_1.Constants.isRotate
                    ? _this.NodeContainer.Hand_2.getComponent(cc.Animation).play("Hand_HrzAnim")
                    : _this.NodeContainer.Hand_2.getComponent(cc.Animation).play("Hand_HintAnim");
                cc.tween(_this.NodeContainer.Hand_2)
                    .to(0.5, { opacity: 255 })
                    .start();
                constants_1.Constants.isCanTouch = true;
            }, 0.5);
        }, 1.5);
    };
    GamePlay.prototype.handleCheckRemoveMaggots = function () {
        var tweezersBdx = this.NodeContainer.Point_Tweezer_Head.getBoundingBox();
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
        this.NodeContainer.tweezers.opacity = 0;
        this.isRemovingMaggot = true;
        constants_1.Constants.maggotRemoved += 1;
        console.log(maggotName);
        switch (maggotName) {
            case "Point_Mg1":
                this.NodeContainer.Acne1_2.active = true;
                this.NodeContainer.Spine_Maggot1.setAnimation(0, "idle01", false);
                this.NodeContainer.Spine_RMMG1.node.active = true;
                this.scheduleOnce(function () { _this.NodeContainer.Spine_Maggot1.node.active = false; }, 0.75);
                this.activeRemoveMaggotSound();
                this.scheduleOnce(function () {
                    _this.NodeContainer.Acne1_1.active = true;
                }, 3.6);
                this.setCompleteSpine(this.NodeContainer.Spine_RMMG1, maggotName);
                break;
            case "Point_Mg3":
                this.NodeContainer.Acne2_2.active = true;
                this.NodeContainer.Spine_Maggot2.setAnimation(0, "idle01", false);
                this.NodeContainer.Spine_RMMG2.node.active = true;
                this.scheduleOnce(function () { _this.NodeContainer.Spine_Maggot2.node.active = false; }, 0.75);
                this.activeRemoveMaggotSound();
                this.scheduleOnce(function () {
                    _this.NodeContainer.Acne2_1.active = true;
                }, 3.6);
                this.setCompleteSpine(this.NodeContainer.Spine_RMMG2, maggotName);
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
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun3Sound); }, 3.6);
    };
    GamePlay.prototype.setCompleteSpine = function (spine, name) {
        var _this = this;
        spine.setCompleteListener(function (trackEntry) {
            if (trackEntry.animation.name === "Action") {
                _this.showTweezers();
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.completeSound);
                _this.NodeContainer.sp_Tweezers.node.setPosition(_this.tweezersStartPos);
                _this.NodeContainer.Point_Tweezers.setPosition(_this.tweezersPointStartPos);
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