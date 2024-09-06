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
        _this.star1 = null;
        _this.star2 = null;
        _this.sp_mouth = null;
        // Tools
        _this.sp_dryer = null;
        _this.Teeth_scum = null;
        _this.Options = null;
        _this.hand = null;
        // state
        _this.tweezersStartPos = null;
        _this.tweezersPointStartPos = null;
        _this.isInitVars = false;
        _this.isRunFlow1 = false;
        _this.checkDryerFlag = false;
        _this.checkshowTweezersFlag = false;
        _this.isRemovingMaggot = false;
        _this.checkToothPasteFlag = false;
        _this.checkBrushTeethFlag = false;
        _this.isDoneToothPasteFlag = false;
        _this.DryerPoint = null;
        _this.DryerToMouthArea = null;
        _this.DryerSpine = null;
        _this.toothPastePoint = null;
        _this.toothPasteSpine = null;
        _this.toothPasteHeadPoint = null;
        _this.WaterBubblePoint = null;
        _this.WaterBubbleSpine = null;
        _this.WaterBubbleHeadPoint = null;
        _this.initPos = [];
        _this.checkCollideBubblePoints = function (bdx) {
            for (var i = 0; i < constants_1.Constants.toothPaste_Points.length; i++) {
                var currentNode = constants_1.Constants.toothPaste_Points[i];
                if (currentNode.getBoundingBox().intersects(bdx)) {
                    constants_1.Constants.isTouchToothPaste = true;
                    for (var j = 0; j < constants_1.Constants.toothPaste_PointsStatus.length; j++) {
                        if (!constants_1.Constants.toothPaste_PointsStatus[j]) {
                            constants_1.Constants.toothPaste_PointsStatus[j] = true;
                            constants_1.Constants.toothPaste_Points.splice(i, 1);
                            !_this.AudioManager.toothPaste1Sound.isPlaying && _this.AudioManager.playSound(constants_1.Constants.SoundTrack.toothPaste1Sound);
                            constants_1.Constants.spine_Bubbles[i].setAnimation(0, Anims_1.SpineAnims.bubbleAnim.Show, false);
                            constants_1.Constants.spine_Bubbles.splice(i, 1);
                            if (constants_1.Constants.toothPaste_PointsStatus.every(function (status) { return status === true; })) {
                                constants_1.Constants.isCanTouch = false;
                                constants_1.Constants.isDoneToothPaste = true;
                                _this.NodeContainer.toothPaste.active = false;
                                console.log("Done Tooth Paste ");
                            }
                            break;
                        }
                    }
                    break;
                }
            }
        };
        _this.checkBrushTeeth = function (bdx) {
            for (var i = 0; i < constants_1.Constants.Water_Points.length; i++) {
                var currentNode = constants_1.Constants.Water_Points[i];
                if (currentNode.getBoundingBox().intersects(bdx)) {
                    constants_1.Constants.isTouchToothPaste = true;
                    for (var j = 0; j < constants_1.Constants.water_PointsStatus.length; j++) {
                        if (!constants_1.Constants.water_PointsStatus[j]) {
                            constants_1.Constants.water_PointsStatus[j] = true;
                            constants_1.Constants.Water_Points.splice(i, 1);
                            constants_1.Constants.spine_WaterBubbles[i].setAnimation(0, Anims_1.SpineAnims.bubbleAnim.Clean, false);
                            constants_1.Constants.spine_WaterBubbles.splice(i, 1);
                            if (constants_1.Constants.water_PointsStatus.every(function (status) { return status === true; })) {
                                constants_1.Constants.isCanTouch = false;
                                constants_1.Constants.isDoneWaterBrush = true;
                                _this.NodeContainer.waterTooth.active = false;
                                _this.AudioManager.stopSound(constants_1.Constants.SoundTrack.toothPaste2Sound);
                                console.log("Done Water Bubble ");
                            }
                            break;
                        }
                    }
                    break;
                }
            }
        };
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
        this.Options.active = false;
    };
    GamePlay.prototype.initVariables = function () {
        this.isInitVars = true;
        this.DryerPoint = this.NodeContainer.dryer.getChildByName("Point_Dryer");
        this.DryerSpine = this.NodeContainer.dryer.getChildByName("sp_dryer").getComponent(sp.Skeleton);
        this.DryerToMouthArea = this.NodeContainer.dryer.getChildByName("Point_Mouth");
        this.toothPastePoint = this.NodeContainer.toothPaste.getChildByName("Point_Tooth");
        this.toothPasteSpine = this.NodeContainer.toothPaste.getChildByName("sp_Tooth").getComponent(sp.Skeleton);
        this.toothPasteHeadPoint = this.NodeContainer.toothPaste.getChildByName("HeadPoint_Tooth");
        this.WaterBubblePoint = this.NodeContainer.waterTooth.getChildByName("Point_WaterTooth");
        this.WaterBubbleSpine = this.NodeContainer.waterTooth.getChildByName("sp_WaterTooth").getComponent(sp.Skeleton);
        this.WaterBubbleHeadPoint = this.NodeContainer.waterTooth.getChildByName("HeadPoint_WaterTooth");
        this.initPos[0] = this.WaterBubblePoint.getPosition();
        this.initPos[1] = this.WaterBubbleSpine.node.getPosition();
        this.initPos[2] = this.WaterBubbleHeadPoint.getPosition();
    };
    GamePlay.prototype.start = function () {
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        // to store if user click in intro 
        this.NodeContainer.HideMask.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        this.initVariables();
        this.showIntro();
        // debug
        // this.showTools(this.NodeContainer.dryer, true);
    };
    GamePlay.prototype.showIntro = function () {
        var _this = this;
        // active sound intro
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.walkSound);
        // declare vars
        var Delight_Intro = this.NodeContainer.intro.getChildByName("Delight");
        var spine_Delight = Delight_Intro.getChildByName("Spine_Delight").getComponent(sp.Skeleton);
        var Spider_Intro = this.NodeContainer.intro.getChildByName("Spider");
        var Overlay_Intro = this.NodeContainer.UI.getChildByName("Overlay");
        // scale intro
        cc.tween(Delight_Intro)
            .to(4, { scale: 1.15 })
            .start();
        // caculated time to active/unactive Intro steps & sounds
        this.scheduleOnce(function () {
            Spider_Intro.active = true;
            _this.AudioManager.stopSound(constants_1.Constants.SoundTrack.walkSound);
        }, 1.5);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.spiderSound); }, 2.5);
        this.scheduleOnce(function () {
            Spider_Intro.active = false;
            spine_Delight.setAnimation(0, Anims_1.SpineAnims.Intro_DollAnim.Scare, false);
        }, 3.2);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.hmmSound); }, 5);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.scareSound); }, 6.5);
        this.scheduleOnce(function () {
            cc.tween(Overlay_Intro)
                .to(1, { opacity: 255 })
                .to(1, { opacity: 0 })
                .start();
        }, 7);
        this.scheduleOnce(function () {
            _this.NodeContainer.MainGame.active = true;
            cc.tween(_this.NodeContainer.MainGame)
                .to(1, { scale: 1.1 })
                .to(1, { scale: 1 })
                .start();
        }, 8);
        this.scheduleOnce(function () {
            // off click to store if user watch full intro
            // To store
            // this.NodeContainer.HideMask.off(cc.Node.EventType.TOUCH_START);
            _this.showTools(_this.NodeContainer.dryer, true);
        }, 10);
    };
    GamePlay.prototype.showHint = function () {
        var _this = this;
        this.hand.active = true;
        cc.tween(this.hand)
            .to(0.5, { opacity: 255 })
            .call(function () {
            _this.hand.getComponent(cc.Animation).play("Hand_HintAnim");
        })
            .start();
    };
    GamePlay.prototype.hideAnim = function (node) {
        cc.tween(node)
            .to(0.5, { opacity: 0 })
            .start();
    };
    GamePlay.prototype.showTools = function (tool, isActive) {
        if (!isActive)
            tool.active = true;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.moveItemSound);
        var position = tool.getPosition();
        tool.setPosition(position.x - 30, position.y);
        cc.tween(tool)
            .to(0.5, { x: position.x, opacity: 255 })
            .start();
        this.showHint();
    };
    GamePlay.prototype.handleDoneDryer = function () {
        var _this = this;
        var pointBdx = this.DryerPoint.getBoundingBox();
        var areaBdx = this.DryerToMouthArea.getBoundingBox();
        if (pointBdx.intersects(areaBdx)) {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.drySound);
            this.checkDryerFlag = true;
            this.sp_dryer.node.active = true;
            this.Teeth_scum.getComponent(cc.Animation).play();
            this.sp_mouth.setAnimation(0, Anims_1.SpineAnims.LipsAnim.Dry, true);
            this.scheduleOnce(function () {
                cc.tween(_this.sp_dryer.node)
                    .to(1.5, { opacity: 0 })
                    .call(function () {
                    constants_1.Constants.isDoneDryer = true;
                    _this.sp_mouth.setAnimation(0, Anims_1.SpineAnims.LipsAnim.Idle, false);
                    _this.star.getComponent(cc.Animation).play("StarAnim");
                    _this.AudioManager.playSound(constants_1.Constants.SoundTrack.DoneStepSound);
                    _this.sp_mouth.setAnimation(0, Anims_1.SpineAnims.LipsAnim.DirtySmell, true);
                })
                    .start();
            }, 2);
            this.DryerPoint.active = false;
            this.DryerToMouthArea.active = false;
            this.DryerSpine.node.active = false;
        }
    };
    GamePlay.prototype.showToothPaste = function () {
        var _this = this;
        this.checkToothPasteFlag = true;
        this.scheduleOnce(function () {
            _this.showTools(_this.NodeContainer.toothPaste, false);
        }, 1.5);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.ShakeBrush); }, 1.8);
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.shampooSound);
            constants_1.Constants.isCanTouch = true;
        }, 3.5);
    };
    GamePlay.prototype.showOptions = function () {
        var _this = this;
        this.checkBrushTeethFlag = true;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.DoneStepSound);
        this.star2.getComponent(cc.Animation).play("StarAnim");
        this.scheduleOnce(function () {
            _this.Options.active = true;
            _this.Options.getComponent(cc.Animation).play("ShowOptions");
            // mtg & applovin
            // this.NodeContainer.HideMask.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        }, 1.5);
    };
    GamePlay.prototype.showToothBrush = function () {
        var _this = this;
        this.isDoneToothPasteFlag = true;
        this.sp_mouth.setAnimation(0, Anims_1.SpineAnims.LipsAnim.Idle, true);
        this.scheduleOnce(function () {
            constants_1.Constants.isCanTouch = true;
            _this.showTools(_this.NodeContainer.waterTooth, false);
            _this.WaterBubblePoint.setPosition(_this.initPos[0]);
            _this.WaterBubbleSpine.node.setPosition(_this.initPos[1]);
            _this.WaterBubbleHeadPoint.setPosition(_this.initPos[2]);
        }, 1.5);
    };
    GamePlay.prototype.update = function (dt) {
        !this.checkDryerFlag && this.isInitVars && this.handleDoneDryer();
        constants_1.Constants.isDoneDryer && !this.checkToothPasteFlag && this.showToothPaste();
        constants_1.Constants.isDoneToothPaste && !this.isDoneToothPasteFlag && this.showToothBrush();
        constants_1.Constants.isDoneWaterBrush && !this.checkBrushTeethFlag && this.showOptions();
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
    ], GamePlay.prototype, "star1", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "star2", void 0);
    __decorate([
        property(sp.Skeleton)
    ], GamePlay.prototype, "sp_mouth", void 0);
    __decorate([
        property(sp.Skeleton)
    ], GamePlay.prototype, "sp_dryer", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "Teeth_scum", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "Options", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "hand", void 0);
    GamePlay = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

cc._RF.pop();