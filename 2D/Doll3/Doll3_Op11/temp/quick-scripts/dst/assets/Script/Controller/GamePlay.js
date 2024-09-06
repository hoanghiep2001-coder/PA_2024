
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
var NodesContainer_1 = require("./NodesContainer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.NodesContainer = null;
        _this.GameController = null;
        _this.dollPrecent = 0;
        _this.opponentPrecent = 0;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
    };
    GamePlay.prototype.start = function () {
        this.NodesContainer.DollPoint.node.active = false;
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.handleGamePlay();
    };
    GamePlay.prototype.handleGamePlay = function () {
        this.activeBlinkAnimForBtnStart();
    };
    GamePlay.prototype.activeBlinkAnimForBtnStart = function () {
        cc.tween(this.NodesContainer.Btn_Start)
            .repeatForever(cc.tween(this.NodesContainer.Btn_Start)
            .to(0.5, { scale: 0.3 })
            .to(0.5, { scale: 0.32 }, { easing: 'elasticOut' })).start();
    };
    GamePlay.prototype.activeBlinkAnimForBtnSubmit = function () {
        constants_1.Constants.isShowBtnSubmit = true;
        this.NodesContainer.Btn_Submit.active = true;
        if (constants_1.Constants.isRotate) {
            cc.tween(this.NodesContainer.Btn_Submit)
                .repeatForever(cc.tween(this.NodesContainer.Btn_Submit)
                .to(0.5, { scale: 0.45 })
                .to(0.5, { scale: 0.4 }, { easing: 'elasticOut' })).start();
        }
        else {
            cc.tween(this.NodesContainer.Btn_Submit)
                .repeatForever(cc.tween(this.NodesContainer.Btn_Submit)
                .to(0.5, { scale: 0.35 })
                .to(0.5, { scale: 0.32 }, { easing: 'elasticOut' })).start();
        }
    };
    GamePlay.prototype.playGreatSound = function () {
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.pickItemSound);
        this.AudioManager.pickItemSound.volume = 0.5;
        var random = Math.floor(Math.random() * 4) + 1;
        switch (random) {
            case 1:
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Fx_Bonus1);
                break;
            case 2:
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Fx_Bonus2);
                break;
            case 3:
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Fx_Bonus3);
                break;
            case 4:
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Fx_Bonus4);
                break;
            default:
                break;
        }
    };
    GamePlay.prototype.goToDressUp = function () {
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.pickItemSound);
        this.NodesContainer.OpenScene.active = false;
        this.NodesContainer.DressUpScene.active = true;
        this.NodesContainer.BG.active = false;
        this.handleIronSourcePlaySound();
    };
    GamePlay.prototype.goToBattle = function () {
        var _this = this;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.pickItemSound);
        this.NodesContainer.DressUp_Container.active = false;
        this.NodesContainer.Doll.opacity = 0;
        this.NodesContainer.BG.active = true;
        this.NodesContainer.Doll.scale = constants_1.Constants.Responsive.calculatedScale;
        this.NodesContainer.Doll.setPosition(constants_1.Constants.Responsive.calculatedX, constants_1.Constants.Responsive.calculatedY);
        // !Constants.isRotate && this.NodesContainer.Doll.setPosition(-80, -140);
        // Constants.isRotate && this.NodesContainer.Doll.setPosition(-180, -110);
        this.scheduleOnce(function () {
            _this.NodesContainer.DollPoint.node.active = true;
            _this.NodesContainer.DollPoint.string = "0 %";
            _this.NodesContainer.UI.getComponent(cc.Animation).play("UI_ShowBattle");
            // caculate Doll Point
            _this.scheduleOnce(function () {
                constants_1.Constants.isStartCalculate = false;
                constants_1.Constants.isStartCalculate = true;
            }, 0.5);
            _this.scheduleOnce(function () { constants_1.Constants.isStartCalculate = false; }, 1.2);
            _this.scheduleOnce(function () { constants_1.Constants.isStartCalculate = true; }, 1.6);
            _this.scheduleOnce(function () { constants_1.Constants.isStartCalculate = false; }, 2.2);
            _this.scheduleOnce(function () { constants_1.Constants.isStartCalculate = true; }, 2.4);
            _this.scheduleOnce(function () {
                _this.NodesContainer.CTA.active = true;
                _this.NodesContainer.CTA.getComponent(cc.Animation).play("CTA_Anim");
                cc.tween(_this.NodesContainer.CTA_Btn)
                    .repeatForever(cc.tween(_this.NodesContainer.CTA_Btn)
                    .to(0.5, { scale: 0.5 })
                    .to(0.5, { scale: 0.53 }, { easing: 'elasticOut' })).start();
                _this.NodesContainer.CTA_Btn.on(cc.Node.EventType.TOUCH_START, _this.GameController.installHandle, _this);
                // mtg & applovin
                // this.NodesContainer.CTA_Overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
            }, 5.5);
        }, 1);
        this.scheduleOnce(function () {
            constants_1.Constants.isStartCalculate = false;
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.Fx_Lose);
        }, 4);
    };
    GamePlay.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        if (constants_1.Constants.ironSource.SoundState) {
            constants_1.Constants.ironSource.isPlayBgSound = true;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
    };
    GamePlay.prototype.handleMuteSoundIronSource = function () {
        constants_1.Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10);
        if (constants_1.Constants.ironSource.State) {
            if (constants_1.Constants.ironSource.State === 1 && !constants_1.Constants.ironSource.SoundState && !constants_1.Constants.ironSource.isEndGame) {
                constants_1.Constants.ironSource.SoundState = true;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
            }
            if (constants_1.Constants.ironSource.State === 2 && constants_1.Constants.ironSource.SoundState) {
                constants_1.Constants.ironSource.SoundState = false;
                this.AudioManager.stopAllSound();
            }
        }
    };
    GamePlay.prototype.update = function (dt) {
        if (constants_1.Constants.isStartCalculate) {
            this.dollPrecent += 0.4;
            this.opponentPrecent += 0.6;
            this.NodesContainer.DollPoint.string = Math.floor(this.dollPrecent) + " %";
            this.NodesContainer.Opponent
                .getChildByName("DollPoint").getComponent(cc.Label).string = Math.floor(this.opponentPrecent) + " %";
        }
        this.handleMuteSoundIronSource();
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(NodesContainer_1.default)
    ], GamePlay.prototype, "NodesContainer", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCxtREFBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUErTEM7UUE1TEMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIscUJBQWUsR0FBVyxDQUFDLENBQUM7O0lBcUw5QixDQUFDO0lBbkxXLHlCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUdTLHdCQUFLLEdBQWY7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNsRCw2REFBNkQ7UUFDN0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFHTyxpQ0FBYyxHQUF0QjtRQUNFLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFHTyw2Q0FBMEIsR0FBbEM7UUFDRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO2FBQ3BDLGFBQWEsQ0FDWixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO2FBQ3BDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUM7YUFDdkIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVB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QyxDQS9McUMsRUFBRSxDQUFDLFNBQVMsR0ErTGpEO2tCQS9Mb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IE5vZGVzQ29udGFpbmVyIGZyb20gXCIuL05vZGVzQ29udGFpbmVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVBsYXkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuICBAcHJvcGVydHkoTm9kZXNDb250YWluZXIpXHJcbiAgTm9kZXNDb250YWluZXI6IE5vZGVzQ29udGFpbmVyID0gbnVsbDtcclxuICBAcHJvcGVydHkoR2FtZUNvbnRyb2xsZXIpXHJcbiAgR2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuXHJcbiAgZG9sbFByZWNlbnQ6IG51bWJlciA9IDA7XHJcbiAgb3Bwb25lbnRQcmVjZW50OiBudW1iZXIgPSAwO1xyXG5cclxuICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG5cclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRvbGxQb2ludC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgdGhpcy5oYW5kbGVHYW1lUGxheSgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaGFuZGxlR2FtZVBsYXkoKTogdm9pZCB7XHJcbiAgICB0aGlzLmFjdGl2ZUJsaW5rQW5pbUZvckJ0blN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBhY3RpdmVCbGlua0FuaW1Gb3JCdG5TdGFydCgpOiB2b2lkIHtcclxuICAgIGNjLnR3ZWVuKHRoaXMuTm9kZXNDb250YWluZXIuQnRuX1N0YXJ0KVxyXG4gICAgICAucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICBjYy50d2Vlbih0aGlzLk5vZGVzQ29udGFpbmVyLkJ0bl9TdGFydClcclxuICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuMyB9KVxyXG4gICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC4zMiB9LCB7IGVhc2luZzogJ2VsYXN0aWNPdXQnIH0pXHJcbiAgICAgICkuc3RhcnQoKTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgYWN0aXZlQmxpbmtBbmltRm9yQnRuU3VibWl0KCk6IHZvaWQge1xyXG4gICAgQ29uc3RhbnRzLmlzU2hvd0J0blN1Ym1pdCA9IHRydWU7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkJ0bl9TdWJtaXQuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICBpZihDb25zdGFudHMuaXNSb3RhdGUpIHtcclxuICAgICAgY2MudHdlZW4odGhpcy5Ob2Rlc0NvbnRhaW5lci5CdG5fU3VibWl0KVxyXG4gICAgICAucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICBjYy50d2Vlbih0aGlzLk5vZGVzQ29udGFpbmVyLkJ0bl9TdWJtaXQpXHJcbiAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjQ1IH0pXHJcbiAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjQgfSwgeyBlYXNpbmc6ICdlbGFzdGljT3V0JyB9KVxyXG4gICAgICApLnN0YXJ0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYy50d2Vlbih0aGlzLk5vZGVzQ29udGFpbmVyLkJ0bl9TdWJtaXQpXHJcbiAgICAgIC5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuTm9kZXNDb250YWluZXIuQnRuX1N1Ym1pdClcclxuICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuMzUgfSlcclxuICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuMzIgfSwgeyBlYXNpbmc6ICdlbGFzdGljT3V0JyB9KVxyXG4gICAgICApLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBwbGF5R3JlYXRTb3VuZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5waWNrSXRlbVNvdW5kKVxyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGlja0l0ZW1Tb3VuZC52b2x1bWUgPSAwLjU7XHJcbiAgICBsZXQgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCkgKyAxO1xyXG4gICAgc3dpdGNoIChyYW5kb20pIHtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5GeF9Cb251czEpXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMjpcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suRnhfQm9udXMyKVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDM6XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkZ4X0JvbnVzMylcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSA0OlxyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5GeF9Cb251czQpXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGdvVG9EcmVzc1VwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLnBpY2tJdGVtU291bmQpO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5PcGVuU2NlbmUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRyZXNzVXBTY2VuZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5CRy5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgZ29Ub0JhdHRsZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5waWNrSXRlbVNvdW5kKTtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuRHJlc3NVcF9Db250YWluZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRvbGwub3BhY2l0eSA9IDA7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkJHLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRvbGwuc2NhbGUgPSBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkU2NhbGU7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRvbGwuc2V0UG9zaXRpb24oXHJcbiAgICAgIENvbnN0YW50cy5SZXNwb25zaXZlLmNhbGN1bGF0ZWRYLCBcclxuICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFlcclxuICAgICAgKVxyXG4gICAgLy8gIUNvbnN0YW50cy5pc1JvdGF0ZSAmJiB0aGlzLk5vZGVzQ29udGFpbmVyLkRvbGwuc2V0UG9zaXRpb24oLTgwLCAtMTQwKTtcclxuICAgIC8vIENvbnN0YW50cy5pc1JvdGF0ZSAmJiB0aGlzLk5vZGVzQ29udGFpbmVyLkRvbGwuc2V0UG9zaXRpb24oLTE4MCwgLTExMCk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7ICAgICAgXHJcbiAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRG9sbFBvaW50Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5Eb2xsUG9pbnQuc3RyaW5nID0gYDAgJWA7XHJcbiAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuVUkuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlVJX1Nob3dCYXR0bGVcIik7XHJcblxyXG4gICAgICAvLyBjYWN1bGF0ZSBEb2xsIFBvaW50XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtDb25zdGFudHMuaXNTdGFydENhbGN1bGF0ZSA9IGZhbHNlXHJcbiAgICAgICAgQ29uc3RhbnRzLmlzU3RhcnRDYWxjdWxhdGUgPSB0cnVlO1xyXG4gICAgICB9LCAwLjUpXHJcblxyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7Q29uc3RhbnRzLmlzU3RhcnRDYWxjdWxhdGUgPSBmYWxzZTt9LCAxLjIpXHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtDb25zdGFudHMuaXNTdGFydENhbGN1bGF0ZSA9IHRydWU7fSwgMS42KVxyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7Q29uc3RhbnRzLmlzU3RhcnRDYWxjdWxhdGUgPSBmYWxzZTt9LCAyLjIpXHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtDb25zdGFudHMuaXNTdGFydENhbGN1bGF0ZSA9IHRydWU7fSwgMi40KVxyXG5cclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuQ1RBLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5DVEEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkNUQV9BbmltXCIpO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLk5vZGVzQ29udGFpbmVyLkNUQV9CdG4pXHJcbiAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgICBjYy50d2Vlbih0aGlzLk5vZGVzQ29udGFpbmVyLkNUQV9CdG4pXHJcbiAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuNSB9KVxyXG4gICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjUzIH0sIHsgZWFzaW5nOiAnZWxhc3RpY091dCcgfSlcclxuICAgICAgICApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuQ1RBX0J0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gbXRnICYgYXBwbG92aW5cclxuICAgICAgICAvLyB0aGlzLk5vZGVzQ29udGFpbmVyLkNUQV9PdmVybGF5Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUsIHRoaXMpO1xyXG4gICAgICB9LCA1LjUpXHJcbiAgICB9LCAxKTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIENvbnN0YW50cy5pc1N0YXJ0Q2FsY3VsYXRlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5GeF9Mb3NlKTtcclxuICAgIH0sIDQpO1xyXG5cclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpOiB2b2lkIHtcclxuICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kID0gdHJ1ZTtcclxuICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGhhbmRsZU11dGVTb3VuZElyb25Tb3VyY2UoKTogdm9pZCB7XHJcbiAgICBDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29jb3NTb3VuZFN0YXRlXCIpLCAxMClcclxuXHJcbiAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUpIHtcclxuICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID09PSAxICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUpIHtcclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9PT0gMiAmJiBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlKSB7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BBbGxTb3VuZCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBcclxuICAgICAgaWYoQ29uc3RhbnRzLmlzU3RhcnRDYWxjdWxhdGUpIHtcclxuICAgICAgICB0aGlzLmRvbGxQcmVjZW50ICs9IDAuNDtcclxuICAgICAgICB0aGlzLm9wcG9uZW50UHJlY2VudCArPSAwLjY7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5Eb2xsUG9pbnQuc3RyaW5nID0gYCR7TWF0aC5mbG9vcih0aGlzLmRvbGxQcmVjZW50KX0gJWA7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5PcHBvbmVudFxyXG4gICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIkRvbGxQb2ludFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGAke01hdGguZmxvb3IodGhpcy5vcHBvbmVudFByZWNlbnQpfSAlYDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5oYW5kbGVNdXRlU291bmRJcm9uU291cmNlKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=