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
var Anims_1 = require("../Data/Anims");
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
        _this.star = null;
        _this.touchArea = null;
        // Tools
        _this.hand = null;
        _this.scratchAble = null;
        // state
        _this.trackEnTry = null;
        _this.isActiveRemoveSound1 = false;
        _this.isActiveRemoveSound2 = false;
        _this.isActiveRemoveSound3 = false;
        _this.isActiveRemoveSound4 = false;
        _this.isDoneScratchAble = false;
        _this.activeCTA = false;
        _this.CTA_steps = 0;
        _this.CTA_thumbnail = null;
        _this.CTA_isBtn = false;
        _this.CTA_anyThumbnail = true;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
    };
    GamePlay.prototype.start = function () {
        this.NodeContainer.CTA.active = false;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        this.scaleToDollEar();
    };
    GamePlay.prototype.scaleToDollEar = function () {
        // const DollCurrentPos = this.NodeContainer.Doll.getPosition();
        var _this = this;
        this.scheduleOnce(function () {
            cc.tween(_this.NodeContainer.Doll)
                .to(1, { y: -100, scale: 1.6 })
                .call(function () {
                constants_1.Constants.isCanTouch = true;
                _this.NodeContainer.Hint_Circle.active = true;
                _this.showTools(_this.NodeContainer.Flow1_spineTool, true);
            })
                .start();
        }, 1.5);
    };
    GamePlay.prototype.showHint = function () {
        this.NodeContainer.Hand.active = true;
        this.NodeContainer.Hand.getComponent(cc.Animation).play();
        constants_1.Constants.isDoneStep1 && this.showHintFlow2();
    };
    GamePlay.prototype.showHintFlow2 = function () {
        this.NodeContainer.Hint_Circle_2.active = true;
    };
    GamePlay.prototype.activeCTAAnim = function () {
        var _this = this;
        this.NodeContainer.CTA.active = true;
        this.CTA_thumbnail = this.NodeContainer.CTA_logo;
        cc.tween(this.NodeContainer.CTA_overlay)
            .to(0.5, { opacity: 150 })
            .call(function () {
            _this.showThumbnailTween(_this.CTA_thumbnail, _this.CTA_anyThumbnail, _this.CTA_isBtn);
        })
            .start();
    };
    GamePlay.prototype.showThumbnailTween = function (thumbnail, anyThumbnail, isBtn) {
        var _this = this;
        switch (this.CTA_steps) {
            case 0:
                this.CTA_thumbnail = this.NodeContainer.CTA_logo;
                break;
            case 1:
                this.CTA_thumbnail = this.NodeContainer.CTA_icon;
                break;
            case 2:
                this.CTA_thumbnail = this.NodeContainer.CTA_Btn;
                this.CTA_anyThumbnail = false;
                this.CTA_isBtn = true;
                break;
            default:
                break;
        }
        this.CTA_steps += 1;
        cc.tween(thumbnail)
            .to(0.5, { opacity: 255 })
            .call(function () {
            anyThumbnail && _this.showThumbnailTween(_this.CTA_thumbnail, _this.CTA_anyThumbnail, _this.CTA_isBtn);
            isBtn && _this.activeBtnTween(_this.CTA_thumbnail);
        }).start();
    };
    GamePlay.prototype.activeBtnTween = function (btn) {
        cc.tween(btn)
            .repeatForever(cc.tween(btn)
            .to(0.5, { scale: 0.45 })
            .to(0.5, { scale: 0.5 }, { easing: cc.easing.elasticOut })).start();
    };
    GamePlay.prototype.showTools = function (tool, isActive) {
        var _this = this;
        tool.opacity = 0;
        if (!isActive)
            tool.active = true;
        constants_1.Constants.isCanTouch = true;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.moveItemSound);
        var position = tool.getPosition();
        tool.setPosition(position.x - 30, position.y);
        cc.tween(tool)
            .to(0.5, { x: position.x, opacity: 255 })
            .call(function () {
            _this.showHint();
        })
            .start();
    };
    GamePlay.prototype.checkCollideAcne = function () {
        var toolHeadBdx = this.NodeContainer.Flow1_ToolHead.getBoundingBox();
        var area = this.NodeContainer.Flow1_Area;
        var areaBdx = area.getBoundingBox();
        if (areaBdx.intersects(toolHeadBdx)) {
            constants_1.Constants.isCanTouch = false;
            this.NodeContainer.Doll_SpineRmMaggot.node.active = true;
            this.trackEnTry = this.NodeContainer.Doll_SpineRmMaggot.setAnimation(0, "Action", false);
            this.NodeContainer.Flow1_Tool.active = false;
            this.NodeContainer.Flow1_spineTool.active = false;
            this.NodeContainer.Flow1_Tool.opacity = 0;
            this.setCompleteSpine(this.NodeContainer.Doll_SpineRmMaggot);
        }
    };
    GamePlay.prototype.setCompleteSpine = function (removeSpine) {
        var _this = this;
        removeSpine.setCompleteListener(function (track) {
            if (track.animation.name) {
                _this.doneFlowAndShowNextOption();
            }
        });
    };
    GamePlay.prototype.getCurentTimeOfTrack = function () {
        if (this.trackEnTry) {
            if (this.trackEnTry.trackTime >= 1.2 && !this.isActiveRemoveSound1) {
                this.isActiveRemoveSound1 = true;
                this.NodeContainer.Doll_Maggot.active = false;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun1Sound);
            }
            if (this.trackEnTry.trackTime >= 1.5 && !this.isActiveRemoveSound2) {
                this.isActiveRemoveSound2 = true;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun2Sound);
            }
            if (this.trackEnTry.trackTime >= 5) {
                this.isActiveRemoveSound4 = true;
                this.AudioManager.stopSound(constants_1.Constants.SoundTrack.nhoMun2Sound);
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.gapRuoiSound);
            }
        }
    };
    GamePlay.prototype.doneFlowAndShowNextOption = function () {
        var _this = this;
        !constants_1.Constants.isDoneStep1 && this.touchArea.getComponent("TouchAreaController").registerFlow2Event();
        constants_1.Constants.isDoneStep1 = true;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.DoneStepSound);
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.hmmSound);
        this.star.getComponent(cc.Animation).play("StarAnim");
        this.scheduleOnce(function () { _this.showTools(_this.NodeContainer.Flow2_Tool, false); }, 1.5);
    };
    GamePlay.prototype.checkCollideEarsAcne = function () {
        var _this = this;
        var toolHeadBdx = this.NodeContainer.Flow2_ToolHead.getBoundingBox();
        var area = this.NodeContainer.Flow2_Area;
        var areaBdx = area.getBoundingBox();
        if (areaBdx.intersects(toolHeadBdx)) {
            constants_1.Constants.isCanTouch = false;
            constants_1.Constants.collideEarAcneNumber += 1;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun1Sound);
            this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.bopMunSound); }, 0.5);
            if (constants_1.Constants.collideEarAcneNumber === 1) {
                this.NodeContainer.Doll_Ear.setAnimation(0, Anims_1.SpineAnims.EarAnim.Action1, false);
                this.NodeContainer.Doll_Poke.getComponent(cc.Animation).play("Poke_Anim1");
            }
            else {
                this.NodeContainer.Doll_Ear.setAnimation(0, Anims_1.SpineAnims.EarAnim.Action2, false);
                this.NodeContainer.Doll_Poke.getComponent(cc.Animation).play("Poke_Anim2");
                this.donePA();
            }
            this.NodeContainer.Flow2_Tool.active = false;
            this.NodeContainer.Flow2_Tool.opacity = 0;
            this.NodeContainer.Flow2_Tool.setPosition(this.NodeContainer.initPosTool_Flow2);
            this.setCompleteSpine(this.NodeContainer.Doll_Ear);
        }
    };
    GamePlay.prototype.donePA = function () {
        constants_1.Constants.isToStore = true;
    };
    GamePlay.prototype.update = function (dt) {
        !this.isActiveRemoveSound4 && this.getCurentTimeOfTrack();
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
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "star", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "touchArea", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "hand", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "scratchAble", void 0);
    GamePlay = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

cc._RF.pop();