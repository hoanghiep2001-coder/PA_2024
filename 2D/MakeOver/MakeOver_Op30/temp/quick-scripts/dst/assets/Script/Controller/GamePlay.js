
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/GamePlay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBMkM7QUFDM0MsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUNsRCxtREFBa0Q7QUFDbEQsaURBQTRDO0FBRXRDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBZ1VDO1FBOVRDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsbUJBQWEsR0FBa0IsSUFBSSxDQUFDO1FBR3BDLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBRzdCLFFBQVE7UUFFUixjQUFRLEdBQWdCLElBQUksQ0FBQztRQUU3QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsUUFBUTtRQUNSLHNCQUFnQixHQUFZLElBQUksQ0FBQztRQUNqQywyQkFBcUIsR0FBWSxJQUFJLENBQUM7UUFFdEMsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsb0JBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsMkJBQXFCLEdBQVksS0FBSyxDQUFDO1FBQ3ZDLHNCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyx5QkFBbUIsR0FBWSxLQUFLLENBQUM7UUFDckMseUJBQW1CLEdBQVksS0FBSyxDQUFDO1FBQ3JDLDBCQUFvQixHQUFZLEtBQUssQ0FBQztRQUd0QyxnQkFBVSxH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T0FBTztPQUNhLFFBQVEsQ0FnVTVCO0lBQUQsZUFBQztDQWhVRCxBQWdVQyxDQWhVcUMsRUFBRSxDQUFDLFNBQVMsR0FnVWpEO2tCQWhVb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNwaW5lQW5pbXMgfSBmcm9tIFwiLi4vRGF0YS9Bbmltc1wiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBOb2RlQ29udGFpbmVyIGZyb20gXCIuL05vZGVDb250YW5pZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KE5vZGVDb250YWluZXIpXHJcbiAgTm9kZUNvbnRhaW5lcjogTm9kZUNvbnRhaW5lciA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHN0YXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHN0YXIxOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBzdGFyMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gIHNwX21vdXRoOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcblxyXG5cclxuICAvLyBUb29sc1xyXG4gIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICBzcF9kcnllcjogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIFRlZXRoX3NjdW06IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIE9wdGlvbnM6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAvLyBzdGF0ZVxyXG4gIHR3ZWV6ZXJzU3RhcnRQb3M6IGNjLlZlYzIgPSBudWxsO1xyXG4gIHR3ZWV6ZXJzUG9pbnRTdGFydFBvczogY2MuVmVjMiA9IG51bGw7XHJcblxyXG4gIGlzSW5pdFZhcnM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBpc1J1bkZsb3cxOiBib29sZWFuID0gZmFsc2U7XHJcbiAgY2hlY2tEcnllckZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBjaGVja3Nob3dUd2VlemVyc0ZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBpc1JlbW92aW5nTWFnZ290OiBib29sZWFuID0gZmFsc2U7XHJcbiAgY2hlY2tUb290aFBhc3RlRmxhZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGNoZWNrQnJ1c2hUZWV0aEZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBpc0RvbmVUb290aFBhc3RlRmxhZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgRHJ5ZXJQb2ludDogY2MuTm9kZSA9IG51bGw7XHJcbiAgRHJ5ZXJUb01vdXRoQXJlYTogY2MuTm9kZSA9IG51bGw7XHJcbiAgRHJ5ZXJTcGluZTogc3AuU2tlbGV0b24gPSBudWxsO1xyXG5cclxuICB0b290aFBhc3RlUG9pbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gIHRvb3RoUGFzdGVTcGluZTogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gIHRvb3RoUGFzdGVIZWFkUG9pbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBXYXRlckJ1YmJsZVBvaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuICBXYXRlckJ1YmJsZVNwaW5lOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgV2F0ZXJCdWJibGVIZWFkUG9pbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBpbml0UG9zOiBjYy5WZWMyW10gPSBbXTtcclxuXHJcblxyXG4gIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLk9wdGlvbnMuYWN0aXZlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBpbml0VmFyaWFibGVzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0luaXRWYXJzID0gdHJ1ZTtcclxuICAgIHRoaXMuRHJ5ZXJQb2ludCA9IHRoaXMuTm9kZUNvbnRhaW5lci5kcnllci5nZXRDaGlsZEJ5TmFtZShcIlBvaW50X0RyeWVyXCIpO1xyXG4gICAgdGhpcy5EcnllclNwaW5lID0gdGhpcy5Ob2RlQ29udGFpbmVyLmRyeWVyLmdldENoaWxkQnlOYW1lKFwic3BfZHJ5ZXJcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgIHRoaXMuRHJ5ZXJUb01vdXRoQXJlYSA9IHRoaXMuTm9kZUNvbnRhaW5lci5kcnllci5nZXRDaGlsZEJ5TmFtZShcIlBvaW50X01vdXRoXCIpO1xyXG5cclxuICAgIHRoaXMudG9vdGhQYXN0ZVBvaW50ID0gdGhpcy5Ob2RlQ29udGFpbmVyLnRvb3RoUGFzdGUuZ2V0Q2hpbGRCeU5hbWUoXCJQb2ludF9Ub290aFwiKTtcclxuICAgIHRoaXMudG9vdGhQYXN0ZVNwaW5lID0gdGhpcy5Ob2RlQ29udGFpbmVyLnRvb3RoUGFzdGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcF9Ub290aFwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgdGhpcy50b290aFBhc3RlSGVhZFBvaW50ID0gdGhpcy5Ob2RlQ29udGFpbmVyLnRvb3RoUGFzdGUuZ2V0Q2hpbGRCeU5hbWUoXCJIZWFkUG9pbnRfVG9vdGhcIik7XHJcblxyXG4gICAgdGhpcy5XYXRlckJ1YmJsZVBvaW50ID0gdGhpcy5Ob2RlQ29udGFpbmVyLndhdGVyVG9vdGguZ2V0Q2hpbGRCeU5hbWUoXCJQb2ludF9XYXRlclRvb3RoXCIpO1xyXG4gICAgdGhpcy5XYXRlckJ1YmJsZVNwaW5lID0gdGhpcy5Ob2RlQ29udGFpbmVyLndhdGVyVG9vdGguZ2V0Q2hpbGRCeU5hbWUoXCJzcF9XYXRlclRvb3RoXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICB0aGlzLldhdGVyQnViYmxlSGVhZFBvaW50ID0gdGhpcy5Ob2RlQ29udGFpbmVyLndhdGVyVG9vdGguZ2V0Q2hpbGRCeU5hbWUoXCJIZWFkUG9pbnRfV2F0ZXJUb290aFwiKTtcclxuXHJcbiAgICB0aGlzLmluaXRQb3NbMF0gPSB0aGlzLldhdGVyQnViYmxlUG9pbnQuZ2V0UG9zaXRpb24oKTtcclxuICAgIHRoaXMuaW5pdFBvc1sxXSA9IHRoaXMuV2F0ZXJCdWJibGVTcGluZS5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICB0aGlzLmluaXRQb3NbMl0gPSB0aGlzLldhdGVyQnViYmxlSGVhZFBvaW50LmdldFBvc2l0aW9uKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG5cclxuICAgIC8vIHRvIHN0b3JlIGlmIHVzZXIgY2xpY2sgaW4gaW50cm8gXHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuSGlkZU1hc2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5pbml0VmFyaWFibGVzKCk7XHJcbiAgICB0aGlzLnNob3dJbnRybygpO1xyXG5cclxuICAgIC8vIGRlYnVnXHJcbiAgICAvLyB0aGlzLnNob3dUb29scyh0aGlzLk5vZGVDb250YWluZXIuZHJ5ZXIsIHRydWUpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc2hvd0ludHJvKCk6IHZvaWQge1xyXG4gICAgLy8gYWN0aXZlIHNvdW5kIGludHJvXHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2sud2Fsa1NvdW5kKTtcclxuXHJcbiAgICAvLyBkZWNsYXJlIHZhcnNcclxuICAgIGxldCBEZWxpZ2h0X0ludHJvID0gdGhpcy5Ob2RlQ29udGFpbmVyLmludHJvLmdldENoaWxkQnlOYW1lKFwiRGVsaWdodFwiKTtcclxuICAgIGxldCBzcGluZV9EZWxpZ2h0OiBzcC5Ta2VsZXRvbiA9IERlbGlnaHRfSW50cm8uZ2V0Q2hpbGRCeU5hbWUoXCJTcGluZV9EZWxpZ2h0XCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICBsZXQgU3BpZGVyX0ludHJvID0gdGhpcy5Ob2RlQ29udGFpbmVyLmludHJvLmdldENoaWxkQnlOYW1lKFwiU3BpZGVyXCIpO1xyXG4gICAgbGV0IE92ZXJsYXlfSW50cm8gPSB0aGlzLk5vZGVDb250YWluZXIuVUkuZ2V0Q2hpbGRCeU5hbWUoXCJPdmVybGF5XCIpO1xyXG5cclxuICAgIC8vIHNjYWxlIGludHJvXHJcbiAgICBjYy50d2VlbihEZWxpZ2h0X0ludHJvKVxyXG4gICAgICAudG8oNCwgeyBzY2FsZTogMS4xNSB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAvLyBjYWN1bGF0ZWQgdGltZSB0byBhY3RpdmUvdW5hY3RpdmUgSW50cm8gc3RlcHMgJiBzb3VuZHNcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgU3BpZGVyX0ludHJvLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BTb3VuZChDb25zdGFudHMuU291bmRUcmFjay53YWxrU291bmQpO1xyXG4gICAgfSwgMS41KTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLnNwaWRlclNvdW5kKSB9LCAyLjUpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBTcGlkZXJfSW50cm8uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIHNwaW5lX0RlbGlnaHQuc2V0QW5pbWF0aW9uKDAsIFNwaW5lQW5pbXMuSW50cm9fRG9sbEFuaW0uU2NhcmUsIGZhbHNlKTtcclxuICAgIH0sIDMuMik7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5obW1Tb3VuZCkgfSwgNSk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5zY2FyZVNvdW5kKSB9LCA2LjUpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBjYy50d2VlbihPdmVybGF5X0ludHJvKVxyXG4gICAgICAgIC50bygxLCB7IG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAgIC50bygxLCB7IG9wYWNpdHk6IDAgfSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH0sIDcpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLk5vZGVDb250YWluZXIuTWFpbkdhbWUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgIGNjLnR3ZWVuKHRoaXMuTm9kZUNvbnRhaW5lci5NYWluR2FtZSlcclxuICAgICAgICAudG8oMSwgeyBzY2FsZTogMS4xIH0pXHJcbiAgICAgICAgLnRvKDEsIHsgc2NhbGU6IDEgfSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH0sIDgpO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgLy8gb2ZmIGNsaWNrIHRvIHN0b3JlIGlmIHVzZXIgd2F0Y2ggZnVsbCBpbnRyb1xyXG4gICAgICAvLyBUbyBzdG9yZVxyXG4gICAgICAvLyB0aGlzLk5vZGVDb250YWluZXIuSGlkZU1hc2sub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJUKTtcclxuXHJcbiAgICAgIHRoaXMuc2hvd1Rvb2xzKHRoaXMuTm9kZUNvbnRhaW5lci5kcnllciwgdHJ1ZSk7XHJcbiAgICB9LCAxMCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBzaG93SGludCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaGFuZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgY2MudHdlZW4odGhpcy5oYW5kKVxyXG4gICAgLnRvKDAuNSwge29wYWNpdHk6IDI1NX0pXHJcbiAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuaGFuZC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiSGFuZF9IaW50QW5pbVwiKTtcclxuICAgIH0pXHJcbiAgICAuc3RhcnQoKVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaGlkZUFuaW0obm9kZTogY2MuTm9kZSkge1xyXG4gICAgY2MudHdlZW4obm9kZSlcclxuICAgICAgLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc2hvd1Rvb2xzKHRvb2w6IGNjLk5vZGUsIGlzQWN0aXZlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZighaXNBY3RpdmUpIHRvb2wuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5tb3ZlSXRlbVNvdW5kKTtcclxuICAgIGxldCBwb3NpdGlvbiA9IHRvb2wuZ2V0UG9zaXRpb24oKTtcclxuICAgIHRvb2wuc2V0UG9zaXRpb24ocG9zaXRpb24ueCAtIDMwLCBwb3NpdGlvbi55KTtcclxuICAgIGNjLnR3ZWVuKHRvb2wpXHJcbiAgICAgIC50bygwLjUsIHsgeDogcG9zaXRpb24ueCwgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgIHRoaXMuc2hvd0hpbnQoKTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgaGFuZGxlRG9uZURyeWVyKCk6IHZvaWQge1xyXG4gICAgbGV0IHBvaW50QmR4ID0gdGhpcy5EcnllclBvaW50LmdldEJvdW5kaW5nQm94KCk7XHJcbiAgICBsZXQgYXJlYUJkeCA9IHRoaXMuRHJ5ZXJUb01vdXRoQXJlYS5nZXRCb3VuZGluZ0JveCgpO1xyXG4gICAgaWYgKHBvaW50QmR4LmludGVyc2VjdHMoYXJlYUJkeCkpIHtcclxuICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmRyeVNvdW5kKTtcclxuXHJcbiAgICAgIHRoaXMuY2hlY2tEcnllckZsYWcgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNwX2RyeWVyLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5UZWV0aF9zY3VtLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgdGhpcy5zcF9tb3V0aC5zZXRBbmltYXRpb24oMCwgU3BpbmVBbmltcy5MaXBzQW5pbS5EcnksIHRydWUpO1xyXG5cclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuc3BfZHJ5ZXIubm9kZSlcclxuICAgICAgICAudG8oMS41LCB7IG9wYWNpdHk6IDAgfSlcclxuICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICBDb25zdGFudHMuaXNEb25lRHJ5ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5zcF9tb3V0aC5zZXRBbmltYXRpb24oMCwgU3BpbmVBbmltcy5MaXBzQW5pbS5JZGxlLCBmYWxzZSk7XHJcbiAgICAgICAgICB0aGlzLnN0YXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlN0YXJBbmltXCIpO1xyXG4gICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkRvbmVTdGVwU291bmQpO1xyXG4gICAgICAgICAgdGhpcy5zcF9tb3V0aC5zZXRBbmltYXRpb24oMCwgU3BpbmVBbmltcy5MaXBzQW5pbS5EaXJ0eVNtZWxsLCB0cnVlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG4gICAgICB9LCAyKTtcclxuXHJcbiAgICAgIHRoaXMuRHJ5ZXJQb2ludC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5EcnllclRvTW91dGhBcmVhLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLkRyeWVyU3BpbmUubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgY2hlY2tDb2xsaWRlQnViYmxlUG9pbnRzID0gKGJkeDogY2MuUmVjdCk6IHZvaWQgPT4ge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDb25zdGFudHMudG9vdGhQYXN0ZV9Qb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IGN1cnJlbnROb2RlID0gQ29uc3RhbnRzLnRvb3RoUGFzdGVfUG9pbnRzW2ldO1xyXG4gICAgICBpZiAoY3VycmVudE5vZGUuZ2V0Qm91bmRpbmdCb3goKS5pbnRlcnNlY3RzKGJkeCkpIHtcclxuICAgICAgICBDb25zdGFudHMuaXNUb3VjaFRvb3RoUGFzdGUgPSB0cnVlO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQ29uc3RhbnRzLnRvb3RoUGFzdGVfUG9pbnRzU3RhdHVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBpZiAoIUNvbnN0YW50cy50b290aFBhc3RlX1BvaW50c1N0YXR1c1tqXSkge1xyXG4gICAgICAgICAgICBDb25zdGFudHMudG9vdGhQYXN0ZV9Qb2ludHNTdGF0dXNbal0gPSB0cnVlO1xyXG4gICAgICAgICAgICBDb25zdGFudHMudG9vdGhQYXN0ZV9Qb2ludHMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAhdGhpcy5BdWRpb01hbmFnZXIudG9vdGhQYXN0ZTFTb3VuZC5pc1BsYXlpbmcgJiYgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLnRvb3RoUGFzdGUxU291bmQpO1xyXG4gICAgICAgICAgICBDb25zdGFudHMuc3BpbmVfQnViYmxlc1tpXS5zZXRBbmltYXRpb24oMCwgU3BpbmVBbmltcy5idWJibGVBbmltLlNob3csIGZhbHNlKTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLnNwaW5lX0J1YmJsZXMuc3BsaWNlKGksIDEpO1xyXG5cclxuICAgICAgICAgICAgaWYgKENvbnN0YW50cy50b290aFBhc3RlX1BvaW50c1N0YXR1cy5ldmVyeShzdGF0dXMgPT4gc3RhdHVzID09PSB0cnVlKSkge1xyXG4gICAgICAgICAgICAgIENvbnN0YW50cy5pc0NhblRvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgQ29uc3RhbnRzLmlzRG9uZVRvb3RoUGFzdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci50b290aFBhc3RlLmFjdGl2ZSA9IGZhbHNlOyAgICAgIFxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRG9uZSBUb290aCBQYXN0ZSBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGNoZWNrQnJ1c2hUZWV0aCA9IChiZHg6IGNjLlJlY3QpOiB2b2lkID0+IHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ29uc3RhbnRzLldhdGVyX1BvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgY3VycmVudE5vZGUgPSBDb25zdGFudHMuV2F0ZXJfUG9pbnRzW2ldO1xyXG4gICAgICBpZiAoY3VycmVudE5vZGUuZ2V0Qm91bmRpbmdCb3goKS5pbnRlcnNlY3RzKGJkeCkpIHtcclxuICAgICAgICBDb25zdGFudHMuaXNUb3VjaFRvb3RoUGFzdGUgPSB0cnVlO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQ29uc3RhbnRzLndhdGVyX1BvaW50c1N0YXR1cy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgaWYgKCFDb25zdGFudHMud2F0ZXJfUG9pbnRzU3RhdHVzW2pdKSB7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy53YXRlcl9Qb2ludHNTdGF0dXNbal0gPSB0cnVlO1xyXG4gICAgICAgICAgICBDb25zdGFudHMuV2F0ZXJfUG9pbnRzLnNwbGljZShpLCAxKTtcclxuICAgIFxyXG4gICAgICAgICAgICBDb25zdGFudHMuc3BpbmVfV2F0ZXJCdWJibGVzW2ldLnNldEFuaW1hdGlvbigwLCBTcGluZUFuaW1zLmJ1YmJsZUFuaW0uQ2xlYW4sIGZhbHNlKTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLnNwaW5lX1dhdGVyQnViYmxlcy5zcGxpY2UoaSwgMSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoQ29uc3RhbnRzLndhdGVyX1BvaW50c1N0YXR1cy5ldmVyeShzdGF0dXMgPT4gc3RhdHVzID09PSB0cnVlKSkge1xyXG4gICAgICAgICAgICAgIENvbnN0YW50cy5pc0NhblRvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgQ29uc3RhbnRzLmlzRG9uZVdhdGVyQnJ1c2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci53YXRlclRvb3RoLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BTb3VuZChDb25zdGFudHMuU291bmRUcmFjay50b290aFBhc3RlMlNvdW5kKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRvbmUgV2F0ZXIgQnViYmxlIFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcbiAgcHJpdmF0ZSBzaG93VG9vdGhQYXN0ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hlY2tUb290aFBhc3RlRmxhZyA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNob3dUb29scyh0aGlzLk5vZGVDb250YWluZXIudG9vdGhQYXN0ZSwgZmFsc2UpO1xyXG4gICAgfSwgMS41KTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7dGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLlNoYWtlQnJ1c2gpfSwgMS44KTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHt0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoXHJcbiAgICAgIENvbnN0YW50cy5Tb3VuZFRyYWNrLnNoYW1wb29Tb3VuZClcclxuICAgICAgQ29uc3RhbnRzLmlzQ2FuVG91Y2ggPSB0cnVlO1xyXG4gICAgfSwgMy41KTtcclxuICB9IFxyXG5cclxuXHJcbiAgcHJpdmF0ZSBzaG93T3B0aW9ucygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hlY2tCcnVzaFRlZXRoRmxhZyA9IHRydWU7XHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suRG9uZVN0ZXBTb3VuZCk7XHJcbiAgICB0aGlzLnN0YXIyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJTdGFyQW5pbVwiKTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuT3B0aW9ucy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB0aGlzLk9wdGlvbnMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlNob3dPcHRpb25zXCIpO1xyXG5cclxuICAgICAgLy8gbXRnICYgYXBwbG92aW5cclxuICAgICAgLy8gdGhpcy5Ob2RlQ29udGFpbmVyLkhpZGVNYXNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUsIHRoaXMpO1xyXG4gICAgfSwgMS41KVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc2hvd1Rvb3RoQnJ1c2goKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRG9uZVRvb3RoUGFzdGVGbGFnID0gdHJ1ZTtcclxuICAgIHRoaXMuc3BfbW91dGguc2V0QW5pbWF0aW9uKDAsIFNwaW5lQW5pbXMuTGlwc0FuaW0uSWRsZSwgdHJ1ZSk7XHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2hvd1Rvb2xzKHRoaXMuTm9kZUNvbnRhaW5lci53YXRlclRvb3RoLCBmYWxzZSk7XHJcblxyXG4gICAgICB0aGlzLldhdGVyQnViYmxlUG9pbnQuc2V0UG9zaXRpb24odGhpcy5pbml0UG9zWzBdKVxyXG4gICAgICB0aGlzLldhdGVyQnViYmxlU3BpbmUubm9kZS5zZXRQb3NpdGlvbih0aGlzLmluaXRQb3NbMV0pXHJcbiAgICAgIHRoaXMuV2F0ZXJCdWJibGVIZWFkUG9pbnQuc2V0UG9zaXRpb24odGhpcy5pbml0UG9zWzJdKVxyXG4gICAgfSwgMS41KTtcclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICF0aGlzLmNoZWNrRHJ5ZXJGbGFnICYmIHRoaXMuaXNJbml0VmFycyAmJiB0aGlzLmhhbmRsZURvbmVEcnllcigpO1xyXG4gICAgQ29uc3RhbnRzLmlzRG9uZURyeWVyICYmICF0aGlzLmNoZWNrVG9vdGhQYXN0ZUZsYWcgJiYgdGhpcy5zaG93VG9vdGhQYXN0ZSgpO1xyXG4gICAgQ29uc3RhbnRzLmlzRG9uZVRvb3RoUGFzdGUgJiYgIXRoaXMuaXNEb25lVG9vdGhQYXN0ZUZsYWcgJiYgdGhpcy5zaG93VG9vdGhCcnVzaCgpO1xyXG4gICAgQ29uc3RhbnRzLmlzRG9uZVdhdGVyQnJ1c2ggJiYgIXRoaXMuY2hlY2tCcnVzaFRlZXRoRmxhZyAmJiB0aGlzLnNob3dPcHRpb25zKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=