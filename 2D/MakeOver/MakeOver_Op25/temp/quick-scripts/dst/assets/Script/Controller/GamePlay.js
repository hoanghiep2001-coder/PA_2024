
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.background = null;
        _this.spine_Bubbles = [];
        _this.hair_tut = null;
        _this.hand = null;
        _this.overlay = null;
        _this.circle = null;
        _this.character = null;
        _this.character_dirtyHair = null;
        _this.Effect_Blinks = [];
        _this.doneStep1Flag = false;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
        this.hair_tut.active = false;
        this.circle.active = false;
        this.hand.active = false;
    };
    GamePlay.prototype.start = function () {
        this.handleGamePlay();
    };
    GamePlay.prototype.handleGamePlay = function () {
        var _this = this;
        this.getComponent(cc.Animation).play("GamePlay_TutorialAnim");
        this.scheduleOnce(function () {
            // ironsource
            // this.AudioManager.playSound(Constants.SoundTrack.moveItemSound)
        }, 0.5);
        this.scheduleOnce(function () {
            _this.hair_tut.active = true;
            _this.hand.active = true;
        }, 1);
        this.scheduleOnce(function () {
            constants_1.Constants.isCanTouch = true;
        }, 2);
    };
    GamePlay.prototype.runDoneStep1Anim = function () {
        var _this = this;
        this.doneStep1Flag = true;
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.conClearSound);
        this.getComponent(cc.Animation).play("GamePlay_DoneStep1Anim");
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.moveItemSound);
        }, 0.8);
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.showerSound);
        }, 1.5);
        this.scheduleOnce(function () {
            _this.spine_Bubbles[0].setAnimation(0, "action04_bubble_clean", false);
            _this.spine_Bubbles[1].setAnimation(0, "action04_bubble_clean", false);
            _this.spine_Bubbles[2].setAnimation(0, "action04_bubble_clean", false);
            _this.spine_Bubbles[3].setAnimation(0, "action04_bubble_clean", false);
        }, 1.9);
        this.scheduleOnce(function () {
            _this.spine_Bubbles[4].setAnimation(0, "action04_bubble_clean", false);
            _this.spine_Bubbles[5].setAnimation(0, "action04_bubble_clean", false);
            _this.spine_Bubbles[6].setAnimation(0, "action04_bubble_clean", false);
            _this.spine_Bubbles[7].setAnimation(0, "action04_bubble_clean", false);
        }, 2.3);
        this.scheduleOnce(function () {
            _this.spine_Bubbles[8].setAnimation(0, "action04_bubble_clean", false);
            _this.spine_Bubbles[9].setAnimation(0, "action04_bubble_clean", false);
            _this.spine_Bubbles[10].setAnimation(0, "action04_bubble_clean", false);
        }, 2.7);
        this.scheduleOnce(function () {
            _this.spine_Bubbles[11].setAnimation(0, "action04_bubble_clean", false);
            _this.spine_Bubbles[12].setAnimation(0, "action04_bubble_clean", false);
            _this.spine_Bubbles[13].setAnimation(0, "action04_bubble_clean", false);
        }, 3.1);
        this.scheduleOnce(function () {
            constants_1.Constants.step = 2;
            constants_1.Constants.isDoneStep1 = true;
        }, 3.5);
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.completeSound);
            _this.Effect_Blinks.forEach(function (effect) { return effect.resetSystem(); });
            cc.tween(_this.character)
                .to(1, { scale: 0.85 })
                .start();
            cc.tween(_this.character_dirtyHair)
                .to(1, { opacity: 0 })
                .start();
        }, 4.3);
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.woaAnimeSound);
        }, 5.3);
        this.scheduleOnce(function () {
            _this.getComponent(cc.Animation).play("GamePlay_TutorialStep2Anim");
            _this.circle.active = true;
        }, 6.5);
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.moveItemSound);
        }, 7);
        this.scheduleOnce(function () {
            _this.hand.active = true;
        }, 7.5);
    };
    GamePlay.prototype.update = function (dt) {
        !this.doneStep1Flag && constants_1.Constants.isDoneCleanHair && this.runDoneStep1Anim();
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "background", void 0);
    __decorate([
        property([sp.Skeleton])
    ], GamePlay.prototype, "spine_Bubbles", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "hair_tut", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "hand", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "overlay", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "circle", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "character", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "character_dirtyHair", void 0);
    __decorate([
        property([cc.ParticleSystem])
    ], GamePlay.prototype, "Effect_Blinks", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUU1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTZJQztRQTFJQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBR3RDLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLG1CQUFhLEdBQWtCLEVBQUUsQ0FBQztRQUVsQyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIseUJBQW1CLEdBQVksSUFBSSxDQUFDO1FBR3BDLG1CQUFhLEdBQXdCLEVBQUUsQ0FBQztRQUV4QyxtQkFBYSxHQUFZLEtBQUssQ0FBQzs7SUFpSGpDLENBQUM7SUE5R1cseUJBQU0sR0FBaEI7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBR1Msd0JBQUssR0FBZjtRQUNFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBR08saUNBQWMsR0FBdEI7UUFBQSxpQkFnQkM7UUFmQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUU5RCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2hCLGFBQWE7WUFDYixrRUFBa0U7UUFDcEUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRVIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNoQixLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDNUIsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzFCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVOLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDaEIscUJBQVMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQzlCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNQLENBQUM7SUFHTyxtQ0FBZ0IsR0FBeEI7UUFBQSxpQkF3RUM7UUF2RUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFFL0QsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNoQixLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUNqRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFFUCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUVQLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDaEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3RFLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN0RSxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdEUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVSLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDaEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3RFLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN0RSxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdEUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVSLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDaEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3RFLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxD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REFDVztJQUVsQztRQURDLFFBQVEsQ0FBQywrQkFBYyxDQUFDO29EQUNhO0lBR3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7bURBQ1U7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eURBQ2tCO0lBR3BDO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDO21EQUNVO0lBMUJyQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNkk1QjtJQUFELGVBQUM7Q0E3SUQsQUE2SUMsQ0E3SXFDLEVBQUUsQ0FBQyxTQUFTLEdBNklqRDtrQkE3SW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVBsYXkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIFxyXG4gIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShHYW1lQ29udHJvbGxlcilcclxuICBHYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBiYWNrZ3JvdW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoW3NwLlNrZWxldG9uXSlcclxuICBzcGluZV9CdWJibGVzOiBzcC5Ta2VsZXRvbltdID0gW107XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgaGFpcl90dXQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIG92ZXJsYXk6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGNpcmNsZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGNoYXJhY3RlcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgY2hhcmFjdGVyX2RpcnR5SGFpcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShbY2MuUGFydGljbGVTeXN0ZW1dKVxyXG4gIEVmZmVjdF9CbGlua3M6IGNjLlBhcnRpY2xlU3lzdGVtW10gPSBbXTtcclxuXHJcbiAgZG9uZVN0ZXAxRmxhZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaGFpcl90dXQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLmNpcmNsZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuaGFuZC5hY3RpdmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmhhbmRsZUdhbWVQbGF5KCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVHYW1lUGxheSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkdhbWVQbGF5X1R1dG9yaWFsQW5pbVwiKTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIC8vIGlyb25zb3VyY2VcclxuICAgICAgLy8gdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLm1vdmVJdGVtU291bmQpXHJcbiAgICB9LCAwLjUpO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5oYWlyX3R1dC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB0aGlzLmhhbmQuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH0sIDEpO1xyXG4gICAgXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIENvbnN0YW50cy5pc0NhblRvdWNoID0gdHJ1ZTtcclxuICAgIH0sIDIpXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBydW5Eb25lU3RlcDFBbmltKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kb25lU3RlcDFGbGFnID0gdHJ1ZTtcclxuICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5jb25DbGVhclNvdW5kKTtcclxuICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkdhbWVQbGF5X0RvbmVTdGVwMUFuaW1cIik7XHJcbiAgICBcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLm1vdmVJdGVtU291bmQpXHJcbiAgICB9LCAwLjgpXHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suc2hvd2VyU291bmQpO1xyXG4gICAgfSwgMS41KVxyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5zcGluZV9CdWJibGVzWzBdLnNldEFuaW1hdGlvbigwLCBcImFjdGlvbjA0X2J1YmJsZV9jbGVhblwiLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuc3BpbmVfQnViYmxlc1sxXS5zZXRBbmltYXRpb24oMCwgXCJhY3Rpb24wNF9idWJibGVfY2xlYW5cIiwgZmFsc2UpO1xyXG4gICAgICB0aGlzLnNwaW5lX0J1YmJsZXNbMl0uc2V0QW5pbWF0aW9uKDAsIFwiYWN0aW9uMDRfYnViYmxlX2NsZWFuXCIsIGZhbHNlKTtcclxuICAgICAgdGhpcy5zcGluZV9CdWJibGVzWzNdLnNldEFuaW1hdGlvbigwLCBcImFjdGlvbjA0X2J1YmJsZV9jbGVhblwiLCBmYWxzZSk7XHJcbiAgICB9LCAxLjkpO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5zcGluZV9CdWJibGVzWzRdLnNldEFuaW1hdGlvbigwLCBcImFjdGlvbjA0X2J1YmJsZV9jbGVhblwiLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuc3BpbmVfQnViYmxlc1s1XS5zZXRBbmltYXRpb24oMCwgXCJhY3Rpb24wNF9idWJibGVfY2xlYW5cIiwgZmFsc2UpO1xyXG4gICAgICB0aGlzLnNwaW5lX0J1YmJsZXNbNl0uc2V0QW5pbWF0aW9uKDAsIFwiYWN0aW9uMDRfYnViYmxlX2NsZWFuXCIsIGZhbHNlKTtcclxuICAgICAgdGhpcy5zcGluZV9CdWJibGVzWzddLnNldEFuaW1hdGlvbigwLCBcImFjdGlvbjA0X2J1YmJsZV9jbGVhblwiLCBmYWxzZSk7XHJcbiAgICB9LCAyLjMpO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5zcGluZV9CdWJibGVzWzhdLnNldEFuaW1hdGlvbigwLCBcImFjdGlvbjA0X2J1YmJsZV9jbGVhblwiLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuc3BpbmVfQnViYmxlc1s5XS5zZXRBbmltYXRpb24oMCwgXCJhY3Rpb24wNF9idWJibGVfY2xlYW5cIiwgZmFsc2UpO1xyXG4gICAgICB0aGlzLnNwaW5lX0J1YmJsZXNbMTBdLnNldEFuaW1hdGlvbigwLCBcImFjdGlvbjA0X2J1YmJsZV9jbGVhblwiLCBmYWxzZSk7XHJcbiAgICB9LCAyLjcpO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5zcGluZV9CdWJibGVzWzExXS5zZXRBbmltYXRpb24oMCwgXCJhY3Rpb24wNF9idWJibGVfY2xlYW5cIiwgZmFsc2UpO1xyXG4gICAgICB0aGlzLnNwaW5lX0J1YmJsZXNbMTJdLnNldEFuaW1hdGlvbigwLCBcImFjdGlvbjA0X2J1YmJsZV9jbGVhblwiLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuc3BpbmVfQnViYmxlc1sxM10uc2V0QW5pbWF0aW9uKDAsIFwiYWN0aW9uMDRfYnViYmxlX2NsZWFuXCIsIGZhbHNlKTtcclxuICAgIH0sIDMuMSk7XHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBDb25zdGFudHMuc3RlcCA9IDI7XHJcbiAgICAgIENvbnN0YW50cy5pc0RvbmVTdGVwMSA9IHRydWU7XHJcbiAgICB9LCAzLjUpO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNvbXBsZXRlU291bmQpO1xyXG4gICAgICB0aGlzLkVmZmVjdF9CbGlua3MuZm9yRWFjaChlZmZlY3QgPT4gZWZmZWN0LnJlc2V0U3lzdGVtKCkpO1xyXG5cclxuICAgICAgY2MudHdlZW4odGhpcy5jaGFyYWN0ZXIpXHJcbiAgICAgIC50bygxLCB7c2NhbGU6IDAuODV9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICAgICAgY2MudHdlZW4odGhpcy5jaGFyYWN0ZXJfZGlydHlIYWlyKVxyXG4gICAgICAudG8oMSwge29wYWNpdHk6IDB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICAgIH0sIDQuMylcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay53b2FBbmltZVNvdW5kKTtcclxuICAgIH0sIDUuMylcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkdhbWVQbGF5X1R1dG9yaWFsU3RlcDJBbmltXCIpO1xyXG4gICAgICB0aGlzLmNpcmNsZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfSwgNi41KVxyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLm1vdmVJdGVtU291bmQpXHJcbiAgICB9LCA3KTtcclxuICAgIFxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLmhhbmQuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH0sIDcuNSlcclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgIXRoaXMuZG9uZVN0ZXAxRmxhZyAmJiBDb25zdGFudHMuaXNEb25lQ2xlYW5IYWlyICYmIHRoaXMucnVuRG9uZVN0ZXAxQW5pbSgpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19