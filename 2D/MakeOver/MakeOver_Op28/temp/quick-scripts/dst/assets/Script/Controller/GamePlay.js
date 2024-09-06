
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCxpREFBNEM7QUFFdEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFxTEM7UUFsTEMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxtQkFBYSxHQUFrQixJQUFJLENBQUM7UUFHcEMsUUFBUTtRQUNSLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLHVCQUFpQixHQUFZLEtBQUssQ0FBQztRQUNuQywyQkFBcUIsR0FBWSxLQUFLLENBQUM7UUFDdkMsc0JBQWdCLEdBQVksS0FBSyxDQUFDOztJQXVLcEMsQ0FBQztJQXBLVyx5QkFBTSxHQUFoQjtJQUVBLENBQUM7SUFHUyx3QkFBSyxHQUFmO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFHTyxpQ0FBYyxHQUF0QjtRQUNFLDZEQUE2RDtRQUM3RCxnRUFBZ0U7UUFGbEUsaUJBTUM7UUFGQyxxR0FBcUc7UUFDckcsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFPLEtBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBLENBQUEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUFHTSxnQ0FBYSxHQUFwQjtRQUFBLGlCQWdCQztRQWZDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0s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TywwQ0FBdUIsR0FBL0IsVUFBZ0MsUUFBaUI7UUFBakQsaUJBU0M7UUFSQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQVEsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFRLEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2xHLFFBQVEsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQVEsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFRLEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2xHLFFBQVEsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQVEsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFRLEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2xHLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBUSxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUVuRyxDQUFDO0lBR00sbUNBQWdCLEdBQXZCLFVBQXdCLEtBQWtCLEVBQUUsWUFBcUI7UUFBakUsaUJBTUM7UUFMQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsVUFBQyxVQUErQjtZQUN4RCxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNoRSxxQkFBUyxDQUFDLGdCQUFnQixJQUFJLENBQUMsSUFBSSxLQUFJLENBQUMsWUFBWSxDQUFDLGNBQVEsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3hHLHFCQUFTLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxJQUFJLEtBQUksQ0FBQyxZQUFZLENBQUMsY0FBTyxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQSxDQUFBLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFJUyx5QkFBTSxHQUFoQixVQUFpQixFQUFVO1FBQ3pCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFoTEQ7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQztrREFDVztJQUVsQztRQURDLFFBQVEsQ0FBQywrQkFBYyxDQUFDO29EQUNhO0lBRXRDO1FBREMsUUFBUSxDQUFDLHVCQUFhLENBQUM7bURBQ1k7SUFQakIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXFMNUI7SUFBRCxlQUFDO0NBckxELEFBcUxDLENBckxxQyxFQUFFLENBQUMsU0FBUyxHQXFMakQ7a0JBckxvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgTm9kZUNvbnRhaW5lciBmcm9tIFwiLi9Ob2RlQ29udGFuaWVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVBsYXkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuICBAcHJvcGVydHkoR2FtZUNvbnRyb2xsZXIpXHJcbiAgR2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICBAcHJvcGVydHkoTm9kZUNvbnRhaW5lcilcclxuICBOb2RlQ29udGFpbmVyOiBOb2RlQ29udGFpbmVyID0gbnVsbDtcclxuXHJcblxyXG4gIC8vIHN0YXRlXHJcbiAgaXNSdW5GbG93MTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGNoZWNrQ2xlYW5zZXJGbGFnOiBib29sZWFuID0gZmFsc2U7XHJcbiAgY2hlY2tzaG93VHdlZXplcnNGbGFnOiBib29sZWFuID0gZmFsc2U7XHJcbiAgaXNSZW1vdmluZ01hZ2dvdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5oYW5kbGVHYW1lUGxheSgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaGFuZGxlR2FtZVBsYXkoKTogdm9pZCB7XHJcbiAgICAvLyB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICAvLyB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suZGlydHlTb3VuZCk7XHJcblxyXG4gICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge3RoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5naXJsU2NyZWFtU291bmQpfSwgMC41KTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHt0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJHYW1lUGxheV9Td3RpY2hTdGVwXCIpfSwgMik7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHJ1bkZsb3cxX09wdDEoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzUnVuRmxvdzEgPSB0cnVlO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkZsb3cxX09wdDEuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuRmxvdzFfT3B0Mi5hY3RpdmUgPSBmYWxzZTtcclxuICAgIENvbnN0YW50cy5vcHRpb25Eb25lTGVuZ3RoICs9IDE7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuU3BfQ2xlYW5zZXIubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlNwX0NsZWFuc2VyLnNldEFuaW1hdGlvbigwLCBcIkludHJvXCIsIGZhbHNlKTtcclxuICAgIHRoaXMuc2hvd1Rvb2xzKHRoaXMuTm9kZUNvbnRhaW5lci5TcF9DbGVhbnNlcik7XHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2subW92ZUl0ZW1Tb3VuZCk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay54aXROdW9jU291bmQpIH0sIDEuMik7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMuTm9kZUNvbnRhaW5lci5TcF9DbGVhbnNlci5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJzcENsZWFuc2VyX01vdmVBbmltXCIpIH0sIDMpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLk5vZGVDb250YWluZXIuUG9pbnRTY3JhdGNoLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgdGhpcy5hY3RpdmVDbGVhblNvdW5kKCk7XHJcbiAgICAgIENvbnN0YW50cy5pc1RvdWNoID0gdHJ1ZTtcclxuICAgIH0sIDMuOCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHJ1bkZsb3cxX09wdDIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzUnVuRmxvdzEgPSB0cnVlO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkZsb3cxX09wdDEuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuRmxvdzFfT3B0Mi5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TcF9TaG93ZXIubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgQ29uc3RhbnRzLm9wdGlvbkRvbmVMZW5ndGggKz0gMTtcclxuICAgIHRoaXMuc2hvd1Rvb2xzKHRoaXMuTm9kZUNvbnRhaW5lci5TcF9TaG93ZXIpO1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLm1vdmVJdGVtU291bmQpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLk5vZGVDb250YWluZXIuU3BfU2hvd2VyLnNldEFuaW1hdGlvbigwLCBcIlNob3dlcl9BY3Rpb25cIiwgdHJ1ZSk7XHJcbiAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Qb2ludFNjcmF0Y2guZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suc2hvd2VyU291bmQpO1xyXG4gICAgICBDb25zdGFudHMuaXNUb3VjaCA9IHRydWU7XHJcbiAgICB9LCAxKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHNob3dUb29scyh0b29sOiBzcC5Ta2VsZXRvbik6IHZvaWQge1xyXG4gICAgbGV0IG5vZGUgPSB0b29sLm5vZGU7XHJcbiAgICBsZXQgcG9zaXRpb24gPSBub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICBub2RlLnNldFBvc2l0aW9uKHBvc2l0aW9uLnggLSA1MCwgcG9zaXRpb24ueSk7XHJcbiAgICBjYy50d2Vlbihub2RlKVxyXG4gICAgICAudG8oMC41LCB7IHg6IHBvc2l0aW9uLngsIG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgYWN0aXZlQ2xlYW5Tb3VuZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5jbGVhblNvdW5kKTtcclxuICAgIHRoaXMuQXVkaW9NYW5hZ2VyLmNsZWFuU291bmQudm9sdW1lID0gMC43O1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNsZWFuU291bmQpIH0sIDAuNSk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5jbGVhblNvdW5kKSB9LCAxKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNsZWFuU291bmQpIH0sIDEuNSk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5jbGVhblNvdW5kKSB9LCAyKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNsZWFuU291bmQpIH0sIDIuNSk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5jbGVhblNvdW5kKSB9LCAzKTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHN0b3BDbGVhblNvdW5kKCk6IHZvaWQge1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIuc3RvcFNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNsZWFuU291bmQpXHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5jbGVhblNvdW5kLmxvb3AgPSBmYWxzZTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgaGFuZGxlRG9uZUNsZWFuc2VyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuTm9kZUNvbnRhaW5lci5TY3JhdGNoYWJsZS5nZXRDb21wb25lbnQoXCJTY3JhdGNoYWJsZVwiKS5pc1dpbikge1xyXG4gICAgICBDb25zdGFudHMuaXNUb3VjaCA9IGZhbHNlO1xyXG4gICAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IHRydWU7XHJcbiAgICAgIHRoaXMuc3RvcENsZWFuU291bmQoKTtcclxuICAgICAgdGhpcy5jaGVja0NsZWFuc2VyRmxhZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TY3JhdGNoYWJsZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlBvaW50U2NyYXRjaC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiUG9pbnRfSGlkZUFuaW1cIik7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5jb21wbGV0ZVNvdW5kKTtcclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0YXJfMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiU3Rhcl9CbGlua0FuaW1cIik7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5zaG93ZXJTb3VuZCk7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJTdGVwMl9TaG93RmxvdzJcIikgfSwgMSlcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgcnVuRmxvdzJfT3B0MSgpOiB2b2lkIHtcclxuICAgIENvbnN0YW50cy5pc0NhblRvdWNoID0gZmFsc2U7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuRmxvdzJfT3B0MS5vcGFjaXR5ID0gMDtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5GbG93Ml9PcHQyLm9wYWNpdHkgPSAwO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlNwaW5lX1JNTUcxLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIENvbnN0YW50cy5vcHRpb25Eb25lTGVuZ3RoICs9IDE7XHJcbiAgICB0aGlzLmFjdGl2ZVJlbW92ZU1hZ2dvdFNvdW5kKGZhbHNlKTtcclxuICAgIHRoaXMuc2V0Q29tcGxldGVTcGluZSh0aGlzLk5vZGVDb250YWluZXIuU3BpbmVfUk1NRzEsIHRoaXMuTm9kZUNvbnRhaW5lci5GbG93Ml9PcHQxKTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TcGluZV9NYWdnb3QyLnNldEFuaW1hdGlvbigwLCBcImlkbGUwMVwiLCBmYWxzZSk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMuTm9kZUNvbnRhaW5lci5TcGluZV9NYWdnb3QyLm5vZGUuYWN0aXZlID0gZmFsc2UgfSwgMC43KTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgcnVuRmxvdzJfT3B0MigpOiB2b2lkIHtcclxuICAgIENvbnN0YW50cy5pc0NhblRvdWNoID0gZmFsc2U7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuRmxvdzJfT3B0MS5vcGFjaXR5ID0gMDtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5GbG93Ml9PcHQyLm9wYWNpdHkgPSAwO1xyXG4gICAgQ29uc3RhbnRzLm9wdGlvbkRvbmVMZW5ndGggKz0gMTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TcGluZV9BY25lLnNldEFuaW1hdGlvbigwLCBcImFjdGlvbjAzX3NxdWV6ZV9iaWdcIiwgZmFsc2UpO1xyXG4gICAgdGhpcy5hY3RpdmVSZW1vdmVNYWdnb3RTb3VuZCh0cnVlKTtcclxuICAgIHRoaXMuc2V0Q29tcGxldGVTcGluZSh0aGlzLk5vZGVDb250YWluZXIuU3BpbmVfQWNuZSwgdGhpcy5Ob2RlQ29udGFpbmVyLkZsb3cyX09wdDIpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc2hvd0Fub3RoZXJPcHRpb24obm9kZVRvRW5hYmxlOiBjYy5Ob2RlKTogdm9pZCB7XHJcbiAgICBub2RlVG9FbmFibGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuU3RlcDIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlN0ZXAyX0Fub3RoZXJPcHRcIik7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IENvbnN0YW50cy5pc0NhblRvdWNoID0gdHJ1ZSB9LCAwLjUpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc2hvd0Zsb3czKCk6IHZvaWQge1xyXG4gICAgQ29uc3RhbnRzLmlzQ2FuVG91Y2ggPSB0cnVlO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJTdGVwMl9TaG93RmxvdzNcIik7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBhY3RpdmVSZW1vdmVNYWdnb3RTb3VuZChpc0xvbmdlcjogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2submhvTXVuMVNvdW5kKTsgfSwgMC43NSk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5uaG9NdW4yU291bmQpOyB9LCAxLjUpO1xyXG4gICAgaXNMb25nZXIgJiYgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2submhvTXVuMlNvdW5kKTsgfSwgMS45KTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLm5ob011bjJTb3VuZCk7IH0sIDIuMik7XHJcbiAgICBpc0xvbmdlciAmJiB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5uaG9NdW4yU291bmQpOyB9LCAxLjUpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2submhvTXVuMlNvdW5kKTsgfSwgMi44KTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLm5ob011bjNTb3VuZCk7IH0sIDMuNSlcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHNldENvbXBsZXRlU3BpbmUoc3BpbmU6IHNwLlNrZWxldG9uLCBub2RlVG9FbmFibGU6IGNjLk5vZGUpOiB2b2lkIHtcclxuICAgIHNwaW5lLnNldENvbXBsZXRlTGlzdGVuZXIoKHRyYWNrRW50cnk6IHNwLnNwaW5lLlRyYWNrRW50cnkpID0+IHtcclxuICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNvbXBsZXRlU291bmQpO1xyXG4gICAgICBDb25zdGFudHMub3B0aW9uRG9uZUxlbmd0aCA8PSAyICYmIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5zaG93QW5vdGhlck9wdGlvbihub2RlVG9FbmFibGUpIH0sIDEpO1xyXG4gICAgICBDb25zdGFudHMub3B0aW9uRG9uZUxlbmd0aCA+PSAzICYmIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHt0aGlzLnNob3dGbG93MygpOyBub2RlVG9FbmFibGUuYWN0aXZlID0gZmFsc2V9LCAxKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgIXRoaXMuY2hlY2tDbGVhbnNlckZsYWcgJiYgdGhpcy5oYW5kbGVEb25lQ2xlYW5zZXIoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==