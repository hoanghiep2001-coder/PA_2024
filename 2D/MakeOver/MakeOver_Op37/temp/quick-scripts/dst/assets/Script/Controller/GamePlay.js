
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBMkM7QUFDM0MsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUNsRCxtREFBa0Q7QUFDbEQsaURBQTRDO0FBRXRDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBNFJDO1FBMVJDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsbUJBQWEsR0FBa0IsSUFBSSxDQUFDO1FBR3BDLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixRQUFRO1FBRVIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixRQUFRO1FBQ1IsZ0JBQVUsR0FBd0IsSUFBSSxDQUFDO1FBRXZDLDBCQUFvQixHQUFZLEtBQUssQ0FBQztRQUN0QywwQkFBb0IsR0FBWSxLQUFLLENBQUM7UUFDdEMsMEJBQW9CLEdBQVksS0FBSyxDQUFDO1FBQ3RDLDBCQUFvQixHQUFZLEtBQUssQ0FBQztRQUV0Qyx1QkFBaUIsR0FBWSxLQUFLLENBQUM7UUFFbkMsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0Isc0JBQWdCLEdBQVksSUFBSSxDQUFDOztJQXlQbkMsQ0FBQztJQXRQVyx5QkFBTSxHQUFoQjtJQUVBLENBQUM7SUFHUyx3QkFBSyxHQUFmO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFB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QVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBRWhGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQztJQUdPLHlCQUFNLEdBQWQ7UUFDRSxxQkFBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUdTLHlCQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDekIsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDNUQsQ0FBQztJQXhSRDtRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDO2tEQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLCtCQUFjLENBQUM7b0RBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsdUJBQWEsQ0FBQzttREFDWTtJQUdwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1E7SUFLMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNVO0lBbEJULFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E0UjVCO0lBQUQsZUFBQztDQTVSRCxBQTRSQyxDQTVScUMsRUFBRSxDQUFDLFNBQVMsR0E0UmpEO2tCQTVSb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNwaW5lQW5pbXMgfSBmcm9tIFwiLi4vRGF0YS9Bbmltc1wiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBOb2RlQ29udGFpbmVyIGZyb20gXCIuL05vZGVDb250YW5pZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KE5vZGVDb250YWluZXIpXHJcbiAgTm9kZUNvbnRhaW5lcjogTm9kZUNvbnRhaW5lciA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHN0YXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHRvdWNoQXJlYTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAvLyBUb29sc1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHNjcmF0Y2hBYmxlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gIC8vIHN0YXRlXHJcbiAgdHJhY2tFblRyeTogc3Auc3BpbmUuVHJhY2tFbnRyeSA9IG51bGw7XHJcblxyXG4gIGlzQWN0aXZlUmVtb3ZlU291bmQxOiBib29sZWFuID0gZmFsc2U7XHJcbiAgaXNBY3RpdmVSZW1vdmVTb3VuZDI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBpc0FjdGl2ZVJlbW92ZVNvdW5kMzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGlzQWN0aXZlUmVtb3ZlU291bmQ0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGlzRG9uZVNjcmF0Y2hBYmxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGFjdGl2ZUNUQTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIENUQV9zdGVwczogbnVtYmVyID0gMDtcclxuICBDVEFfdGh1bWJuYWlsOiBjYy5Ob2RlID0gbnVsbDtcclxuICBDVEFfaXNCdG46IGJvb2xlYW4gPSBmYWxzZTtcclxuICBDVEFfYW55VGh1bWJuYWlsOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcblxyXG4gIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5DVEEuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG5cclxuICAgIHRoaXMuc2NhbGVUb0RvbGxFYXIoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHNjYWxlVG9Eb2xsRWFyKCk6IHZvaWQge1xyXG4gICAgLy8gY29uc3QgRG9sbEN1cnJlbnRQb3MgPSB0aGlzLk5vZGVDb250YWluZXIuRG9sbC5nZXRQb3NpdGlvbigpO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgY2MudHdlZW4odGhpcy5Ob2RlQ29udGFpbmVyLkRvbGwpXHJcbiAgICAgICAgLnRvKDEsIHsgeTogIC0xMDAsIHNjYWxlOiAxLjYgfSlcclxuICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkhpbnRfQ2lyY2xlLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgdGhpcy5zaG93VG9vbHModGhpcy5Ob2RlQ29udGFpbmVyLkZsb3cxX3NwaW5lVG9vbCwgdHJ1ZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG4gICAgfSwgMS41KVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc2hvd0hpbnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuSGFuZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkhhbmQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG5cclxuICAgIENvbnN0YW50cy5pc0RvbmVTdGVwMSAmJiB0aGlzLnNob3dIaW50RmxvdzIoKTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBzaG93SGludEZsb3cyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkhpbnRfQ2lyY2xlXzIuYWN0aXZlID0gdHJ1ZTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGFjdGl2ZUNUQUFuaW0oKTogdm9pZCB7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuQ1RBLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLkNUQV90aHVtYm5haWwgPSB0aGlzLk5vZGVDb250YWluZXIuQ1RBX2xvZ287XHJcblxyXG4gICAgY2MudHdlZW4odGhpcy5Ob2RlQ29udGFpbmVyLkNUQV9vdmVybGF5KVxyXG4gICAgICAudG8oMC41LCB7IG9wYWNpdHk6IDE1MCB9KVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zaG93VGh1bWJuYWlsVHdlZW4odGhpcy5DVEFfdGh1bWJuYWlsLCB0aGlzLkNUQV9hbnlUaHVtYm5haWwsIHRoaXMuQ1RBX2lzQnRuKTtcclxuICAgICAgfSlcclxuICAgICAgLnN0YXJ0KClcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHNob3dUaHVtYm5haWxUd2Vlbih0aHVtYm5haWw6IGNjLk5vZGUsIGFueVRodW1ibmFpbDogYm9vbGVhbiwgaXNCdG46IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHN3aXRjaCAodGhpcy5DVEFfc3RlcHMpIHtcclxuICAgICAgY2FzZSAwOlxyXG4gICAgICAgIHRoaXMuQ1RBX3RodW1ibmFpbCA9IHRoaXMuTm9kZUNvbnRhaW5lci5DVEFfbG9nbztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHRoaXMuQ1RBX3RodW1ibmFpbCA9IHRoaXMuTm9kZUNvbnRhaW5lci5DVEFfaWNvbjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIHRoaXMuQ1RBX3RodW1ibmFpbCA9IHRoaXMuTm9kZUNvbnRhaW5lci5DVEFfQnRuO1xyXG4gICAgICAgIHRoaXMuQ1RBX2FueVRodW1ibmFpbCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuQ1RBX2lzQnRuID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLkNUQV9zdGVwcyArPSAxO1xyXG5cclxuICAgIGNjLnR3ZWVuKHRodW1ibmFpbClcclxuICAgICAgLnRvKDAuNSwgeyBvcGFjaXR5OiAyNTUgfSlcclxuICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIGFueVRodW1ibmFpbCAmJiB0aGlzLnNob3dUaHVtYm5haWxUd2Vlbih0aGlzLkNUQV90aHVtYm5haWwsIHRoaXMuQ1RBX2FueVRodW1ibmFpbCwgdGhpcy5DVEFfaXNCdG4pXHJcbiAgICAgICAgaXNCdG4gJiYgdGhpcy5hY3RpdmVCdG5Ud2Vlbih0aGlzLkNUQV90aHVtYm5haWwpXHJcbiAgICAgIH1cclxuICAgICAgKS5zdGFydCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgYWN0aXZlQnRuVHdlZW4oYnRuOiBjYy5Ob2RlKTogdm9pZCB7XHJcbiAgICBjYy50d2VlbihidG4pXHJcbiAgICAgIC5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgIGNjLnR3ZWVuKGJ0bilcclxuICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuNDUgfSlcclxuICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuNSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLmVsYXN0aWNPdXQgfSlcclxuICAgICAgKS5zdGFydCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc2hvd1Rvb2xzKHRvb2w6IGNjLk5vZGUsIGlzQWN0aXZlOiBib29sZWFuKTogdm9pZCB7XHJcblxyXG4gICAgdG9vbC5vcGFjaXR5ID0gMDtcclxuXHJcbiAgICBpZiAoIWlzQWN0aXZlKSB0b29sLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgQ29uc3RhbnRzLmlzQ2FuVG91Y2ggPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5tb3ZlSXRlbVNvdW5kKTtcclxuXHJcbiAgICBsZXQgcG9zaXRpb24gPSB0b29sLmdldFBvc2l0aW9uKCk7XHJcblxyXG4gICAgdG9vbC5zZXRQb3NpdGlvbihwb3NpdGlvbi54IC0gMzAsIHBvc2l0aW9uLnkpO1xyXG5cclxuICAgIGNjLnR3ZWVuKHRvb2wpXHJcbiAgICAgIC50bygwLjUsIHsgeDogcG9zaXRpb24ueCwgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93SGludCgpO1xyXG4gICAgICB9XHJcbiAgICAgIClcclxuICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBjaGVja0NvbGxpZGVBY25lKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdG9vbEhlYWRCZHggPSB0aGlzLk5vZGVDb250YWluZXIuRmxvdzFfVG9vbEhlYWQuZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgIGNvbnN0IGFyZWEgPSB0aGlzLk5vZGVDb250YWluZXIuRmxvdzFfQXJlYTtcclxuICAgIGNvbnN0IGFyZWFCZHggPSBhcmVhLmdldEJvdW5kaW5nQm94KCk7XHJcblxyXG4gICAgaWYgKGFyZWFCZHguaW50ZXJzZWN0cyh0b29sSGVhZEJkeCkpIHtcclxuXHJcbiAgICAgIENvbnN0YW50cy5pc0NhblRvdWNoID0gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLk5vZGVDb250YWluZXIuRG9sbF9TcGluZVJtTWFnZ290Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMudHJhY2tFblRyeSA9IHRoaXMuTm9kZUNvbnRhaW5lci5Eb2xsX1NwaW5lUm1NYWdnb3Quc2V0QW5pbWF0aW9uKDAsIFwiQWN0aW9uXCIsIGZhbHNlKTtcclxuXHJcbiAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5GbG93MV9Ub29sLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkZsb3cxX3NwaW5lVG9vbC5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5GbG93MV9Ub29sLm9wYWNpdHkgPSAwO1xyXG5cclxuICAgICAgdGhpcy5zZXRDb21wbGV0ZVNwaW5lKHRoaXMuTm9kZUNvbnRhaW5lci5Eb2xsX1NwaW5lUm1NYWdnb3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc2V0Q29tcGxldGVTcGluZShyZW1vdmVTcGluZTogc3AuU2tlbGV0b24pOiB2b2lkIHtcclxuICAgIHJlbW92ZVNwaW5lLnNldENvbXBsZXRlTGlzdGVuZXIoKHRyYWNrOiBzcC5zcGluZS5UcmFja0VudHJ5KSA9PiB7XHJcbiAgICAgIGlmICh0cmFjay5hbmltYXRpb24ubmFtZSkge1xyXG4gICAgICAgIHRoaXMuZG9uZUZsb3dBbmRTaG93TmV4dE9wdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgZ2V0Q3VyZW50VGltZU9mVHJhY2soKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50cmFja0VuVHJ5KSB7XHJcbiAgICAgIGlmICh0aGlzLnRyYWNrRW5UcnkudHJhY2tUaW1lID49IDEuMiAmJiAhdGhpcy5pc0FjdGl2ZVJlbW92ZVNvdW5kMSkge1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmVSZW1vdmVTb3VuZDEgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Eb2xsX01hZ2dvdC5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLm5ob011bjFTb3VuZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnRyYWNrRW5UcnkudHJhY2tUaW1lID49IDEuNSAmJiAhdGhpcy5pc0FjdGl2ZVJlbW92ZVNvdW5kMikge1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmVSZW1vdmVTb3VuZDIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5uaG9NdW4yU291bmQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy50cmFja0VuVHJ5LnRyYWNrVGltZSA+PSA1KSB7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZVJlbW92ZVNvdW5kNCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIuc3RvcFNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLm5ob011bjJTb3VuZCk7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmdhcFJ1b2lTb3VuZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGRvbmVGbG93QW5kU2hvd05leHRPcHRpb24oKTogdm9pZCB7XHJcbiAgICAhQ29uc3RhbnRzLmlzRG9uZVN0ZXAxICYmIHRoaXMudG91Y2hBcmVhLmdldENvbXBvbmVudChcIlRvdWNoQXJlYUNvbnRyb2xsZXJcIikucmVnaXN0ZXJGbG93MkV2ZW50KCk7XHJcblxyXG4gICAgQ29uc3RhbnRzLmlzRG9uZVN0ZXAxID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suRG9uZVN0ZXBTb3VuZCk7XHJcblxyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmhtbVNvdW5kKTtcclxuXHJcbiAgICB0aGlzLnN0YXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlN0YXJBbmltXCIpO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5zaG93VG9vbHModGhpcy5Ob2RlQ29udGFpbmVyLkZsb3cyX1Rvb2wsIGZhbHNlKSB9LCAxLjUpXHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGNoZWNrQ29sbGlkZUVhcnNBY25lKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdG9vbEhlYWRCZHggPSB0aGlzLk5vZGVDb250YWluZXIuRmxvdzJfVG9vbEhlYWQuZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgIGNvbnN0IGFyZWEgPSB0aGlzLk5vZGVDb250YWluZXIuRmxvdzJfQXJlYTtcclxuICAgIGNvbnN0IGFyZWFCZHggPSBhcmVhLmdldEJvdW5kaW5nQm94KCk7XHJcblxyXG4gICAgaWYgKGFyZWFCZHguaW50ZXJzZWN0cyh0b29sSGVhZEJkeCkpIHtcclxuXHJcbiAgICAgIENvbnN0YW50cy5pc0NhblRvdWNoID0gZmFsc2U7XHJcblxyXG4gICAgICBDb25zdGFudHMuY29sbGlkZUVhckFjbmVOdW1iZXIgKz0gMTtcclxuXHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5uaG9NdW4xU291bmQpO1xyXG5cclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYm9wTXVuU291bmQpIH0sIDAuNSk7XHJcblxyXG4gICAgICBpZiAoQ29uc3RhbnRzLmNvbGxpZGVFYXJBY25lTnVtYmVyID09PSAxKSB7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkRvbGxfRWFyLnNldEFuaW1hdGlvbigwLCBTcGluZUFuaW1zLkVhckFuaW0uQWN0aW9uMSwgZmFsc2UpO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuRG9sbF9Qb2tlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJQb2tlX0FuaW0xXCIpO1xyXG5cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Eb2xsX0Vhci5zZXRBbmltYXRpb24oMCwgU3BpbmVBbmltcy5FYXJBbmltLkFjdGlvbjIsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkRvbGxfUG9rZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiUG9rZV9BbmltMlwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5kb25lUEEoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkZsb3cyX1Rvb2wuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLk5vZGVDb250YWluZXIuRmxvdzJfVG9vbC5vcGFjaXR5ID0gMDtcclxuXHJcbiAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5GbG93Ml9Ub29sLnNldFBvc2l0aW9uKHRoaXMuTm9kZUNvbnRhaW5lci5pbml0UG9zVG9vbF9GbG93Mik7XHJcblxyXG4gICAgICB0aGlzLnNldENvbXBsZXRlU3BpbmUodGhpcy5Ob2RlQ29udGFpbmVyLkRvbGxfRWFyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGRvbmVQQSgpOiB2b2lkIHtcclxuICAgIENvbnN0YW50cy5pc1RvU3RvcmUgPSB0cnVlO1xyXG4gIH1cclxuXHJcblxyXG4gIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgIXRoaXMuaXNBY3RpdmVSZW1vdmVTb3VuZDQgJiYgdGhpcy5nZXRDdXJlbnRUaW1lT2ZUcmFjaygpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19