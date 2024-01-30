
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
        _this.dirty = null;
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
            cc.tween(_this.dirty)
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
    ], GamePlay.prototype, "dirty", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUU1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQW9KQztRQWpKQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBSXRDLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLG1CQUFhLEdBQWtCLEVBQUUsQ0FBQztRQUVsQyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQix5QkFBbUIsR0FBWSxJQUFJLENBQUM7UUFJcEMsbUJBQWEsR0FBd0IsRUFBRSxDQUFDO1FBRXhDLG1CQUFhLEdBQVksS0FBSyxDQUFDOztJQW9IakMsQ0FBQztJQWpIVyx5QkFBTSxHQUFoQjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFHUyx3QkFBSyxHQUFmO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFHTyxpQ0FBYyxHQUF0QjtRQUFBLGlCQWdCQztRQWZDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBRTlELElBQUksQ0FBQyxZQUFZLENBQUM7WUFDaEIsYUFBYTtZQUNiLGtFQUFrRTtRQUNwRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFUixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUM1QixLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDMUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRU4sSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNoQixxQkFBUyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDOUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ1AsQ0FBQztJQUdPLG1DQUFnQixHQUF4QjtRQUFBLGlCQTJFQztRQTFFQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUUvRCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQ2pFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUVQLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDaEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBRVAsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNoQixLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdEUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3RFLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN0RSxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRVIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNoQixLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdEUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3RFLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN0RSxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRVIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNoQixLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdEUs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QUdTLHlCQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDdkIsQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLHFCQUFTLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ2hGLENBQUM7SUEvSUQ7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQztrREFDVztJQUVsQztRQURDLFFBQVEsQ0FBQywrQkFBYyxDQUFDO29EQUNhO0lBSXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7bURBQ1U7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5REFDa0I7SUFJcEM7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7bURBQ1U7SUE5QnJCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FvSjVCO0lBQUQsZUFBQztDQXBKRCxBQW9KQyxDQXBKcUMsRUFBRSxDQUFDLFNBQVMsR0FvSmpEO2tCQXBKb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShHYW1lQ29udHJvbGxlcilcclxuICBHYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgYmFja2dyb3VuZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KFtzcC5Ta2VsZXRvbl0pXHJcbiAgc3BpbmVfQnViYmxlczogc3AuU2tlbGV0b25bXSA9IFtdO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGhhaXJfdHV0OiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBoYW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBvdmVybGF5OiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBjaXJjbGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGRpcnR5OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgY2hhcmFjdGVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBjaGFyYWN0ZXJfZGlydHlIYWlyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gIEBwcm9wZXJ0eShbY2MuUGFydGljbGVTeXN0ZW1dKVxyXG4gIEVmZmVjdF9CbGlua3M6IGNjLlBhcnRpY2xlU3lzdGVtW10gPSBbXTtcclxuXHJcbiAgZG9uZVN0ZXAxRmxhZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaGFpcl90dXQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLmNpcmNsZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuaGFuZC5hY3RpdmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmhhbmRsZUdhbWVQbGF5KCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVHYW1lUGxheSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkdhbWVQbGF5X1R1dG9yaWFsQW5pbVwiKTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIC8vIGlyb25zb3VyY2VcclxuICAgICAgLy8gdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLm1vdmVJdGVtU291bmQpXHJcbiAgICB9LCAwLjUpO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5oYWlyX3R1dC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB0aGlzLmhhbmQuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH0sIDEpO1xyXG4gICAgXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIENvbnN0YW50cy5pc0NhblRvdWNoID0gdHJ1ZTtcclxuICAgIH0sIDIpXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBydW5Eb25lU3RlcDFBbmltKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kb25lU3RlcDFGbGFnID0gdHJ1ZTtcclxuICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5jb25DbGVhclNvdW5kKTtcclxuICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkdhbWVQbGF5X0RvbmVTdGVwMUFuaW1cIik7XHJcbiAgICBcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLm1vdmVJdGVtU291bmQpXHJcbiAgICB9LCAwLjgpXHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suc2hvd2VyU291bmQpO1xyXG4gICAgfSwgMS41KVxyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5zcGluZV9CdWJibGVzWzBdLnNldEFuaW1hdGlvbigwLCBcImFjdGlvbjA0X2J1YmJsZV9jbGVhblwiLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuc3BpbmVfQnViYmxlc1sxXS5zZXRBbmltYXRpb24oMCwgXCJhY3Rpb24wNF9idWJibGVfY2xlYW5cIiwgZmFsc2UpO1xyXG4gICAgICB0aGlzLnNwaW5lX0J1YmJsZXNbMl0uc2V0QW5pbWF0aW9uKDAsIFwiYWN0aW9uMDRfYnViYmxlX2NsZWFuXCIsIGZhbHNlKTtcclxuICAgICAgdGhpcy5zcGluZV9CdWJibGVzWzNdLnNldEFuaW1hdGlvbigwLCBcImFjdGlvbjA0X2J1YmJsZV9jbGVhblwiLCBmYWxzZSk7XHJcbiAgICB9LCAxLjkpO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5zcGluZV9CdWJibGVzWzRdLnNldEFuaW1hdGlvbigwLCBcImFjdGlvbjA0X2J1YmJsZV9jbGVhblwiLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuc3BpbmVfQnViYmxlc1s1XS5zZXRBbmltYXRpb24oMCwgXCJhY3Rpb24wNF9idWJibGVfY2xlYW5cIiwgZmFsc2UpO1xyXG4gICAgICB0aGlzLnNwaW5lX0J1YmJsZXNbNl0uc2V0QW5pbWF0aW9uKDAsIFwiYWN0aW9uMDRfYnViYmxlX2NsZWFuXCIsIGZhbHNlKTtcclxuICAgICAgdGhpcy5zcGluZV9CdWJibGVzWzddLnNldEFuaW1hdGlvbigwLCBcImFjdGlvbjA0X2J1YmJsZV9jbGVhblwiLCBmYWxzZSk7XHJcbiAgICB9LCAyLjMpO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5zcGluZV9CdWJibGVzWzhdLnNldEFuaW1hdGlvbigwLCBcImFjdGlvbjA0X2J1YmJsZV9jbGVhblwiLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuc3BpbmVfQnViYmxlc1s5XS5zZXRBbmltYXRpb24oMCwgXCJhY3Rpb24wNF9idWJibGVfY2xlYW5cIiwgZmFsc2UpO1xyXG4gICAgICB0aGlzLnNwaW5lX0J1YmJsZXNbMTBdLnNldEFuaW1hdGlvbigwLCBcImFjdGlvbjA0X2J1YmJsZV9jbGVhblwiLCBmYWxzZSk7XHJcbiAgICB9LCAyLjcpO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5zcGluZV9CdWJibGVzWzExXS5zZXRBbmltYXRpb24oMCwgXCJhY3Rpb24wNF9idWJibGVfY2xlYW5cIiwgZmFsc2UpO1xyXG4gICAgICB0aGlzLnNwaW5lX0J1YmJsZXNbMTJdLnNldEFuaW1hdGlvbigwLCBcImFjdGlvbjA0X2J1YmJsZV9jbGVhblwiLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuc3BpbmVfQnViYmxlc1sxM10uc2V0QW5pbWF0aW9uKDAsIFwiYWN0aW9uMDRfYnViYmxlX2NsZWFuXCIsIGZhbHNlKTtcclxuICAgIH0sIDMuMSk7XHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBDb25zdGFudHMuc3RlcCA9IDI7XHJcbiAgICAgIENvbnN0YW50cy5pc0RvbmVTdGVwMSA9IHRydWU7XHJcbiAgICB9LCAzLjUpO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNvbXBsZXRlU291bmQpO1xyXG4gICAgICB0aGlzLkVmZmVjdF9CbGlua3MuZm9yRWFjaChlZmZlY3QgPT4gZWZmZWN0LnJlc2V0U3lzdGVtKCkpO1xyXG5cclxuICAgICAgY2MudHdlZW4odGhpcy5jaGFyYWN0ZXIpXHJcbiAgICAgIC50bygxLCB7c2NhbGU6IDAuODV9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICAgICAgY2MudHdlZW4odGhpcy5jaGFyYWN0ZXJfZGlydHlIYWlyKVxyXG4gICAgICAudG8oMSwge29wYWNpdHk6IDB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICAgICAgY2MudHdlZW4odGhpcy5kaXJ0eSlcclxuICAgICAgLnRvKDEsIHtvcGFjaXR5OiAwfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9LCA0LjMpXHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2sud29hQW5pbWVTb3VuZCk7XHJcbiAgICB9LCA1LjMpXHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJHYW1lUGxheV9UdXRvcmlhbFN0ZXAyQW5pbVwiKTtcclxuICAgICAgdGhpcy5jaXJjbGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH0sIDYuNSlcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5tb3ZlSXRlbVNvdW5kKVxyXG4gICAgfSwgNyk7XHJcbiAgICBcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5oYW5kLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9LCA3LjUpXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICF0aGlzLmRvbmVTdGVwMUZsYWcgJiYgQ29uc3RhbnRzLmlzRG9uZUNsZWFuSGFpciAmJiB0aGlzLnJ1bkRvbmVTdGVwMUFuaW0oKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==