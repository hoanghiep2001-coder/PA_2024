
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
    GamePlay.prototype.start = function () {
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    };
    GamePlay.prototype.playGreatSound = function () {
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.woaAnimeSound);
        var random = Math.floor(Math.random() * 4) + 1;
        switch (random) {
            case 1:
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Fx_Bonus1);
                this.AudioManager.Fx_Bonus1.volume = 0.5;
                break;
            case 2:
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Fx_Bonus2);
                this.AudioManager.Fx_Bonus1.volume = 0.5;
                break;
            case 3:
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Fx_Bonus3);
                this.AudioManager.Fx_Bonus1.volume = 0.5;
                break;
            case 4:
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.Fx_Bonus4);
                this.AudioManager.Fx_Bonus1.volume = 0.5;
                break;
            default:
                break;
        }
    };
    GamePlay.prototype.switchToLv2 = function () {
        var _this = this;
        this.scheduleOnce(function () {
            cc.tween(_this.NodesContainer.Overlay)
                .to(1, { opacity: 150 })
                .call(function () {
                _this.switchDollToStep2();
                _this.NodesContainer.Lv1_Hint.active = false;
                _this.NodesContainer.Lv2_Hint.active = true;
                _this.NodesContainer.FX_Blink.stopSystem();
            })
                .to(1, { opacity: 0 })
                .start();
        }, 1.5);
    };
    GamePlay.prototype.switchDollToStep2 = function () {
        this.NodesContainer.Dolls[0].active = false;
        this.NodesContainer.Dolls[1].active = false;
        this.NodesContainer.Dolls[2].active = false;
        this.NodesContainer.Dolls.splice(0, 3);
        this.NodesContainer.Dolls[0].active = true;
        this.NodesContainer.Dolls[1].active = true;
        this.NodesContainer.Dolls[2].active = true;
        var _loop_1 = function (index) {
            var doll = this_1.NodesContainer.Dolls[index];
            cc.tween(doll)
                .to(1, { scale: 0.38, opacity: 255 }, { easing: 'elasticInOut' })
                .call(function () { doll.getComponent(cc.Animation).play(); })
                .start();
        };
        var this_1 = this;
        for (var index = 0; index < this.NodesContainer.Dolls.length; index++) {
            _loop_1(index);
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCxtREFBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUErRUM7UUE1RUMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIscUJBQWUsR0FBVyxDQUFDLENBQUM7O0lBcUU5QixDQUFDO0lBbEVXLHdCQUFLLEdBQWY7UUFDRSw2REFBNkQ7SUFDL0QsQ0FBQztJQUdNLGlDQUFjLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDL0QsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLFFBQVEsTUFBTSxFQUFFO1lBQ2QsS0FBSyxDQUFDO2dCQUNKLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO2dCQUMzRCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO2dCQUN6QyxNQUFNO1lBQ1IsS0FBSyxDQUFDO2dCQUNKLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFD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QUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO29CQUE1RCxLQUFLO1NBTWI7SUFDSCxDQUFDO0lBM0VEO1FBREMsUUFBUSxDQUFDLHNCQUFZLENBQUM7a0RBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsd0JBQWMsQ0FBQztvREFDYTtJQUV0QztRQURDLFFBQVEsQ0FBQywrQkFBYyxDQUFDO29EQUNhO0lBUG5CLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0ErRTVCO0lBQUQsZUFBQztDQS9FRCxBQStFQyxDQS9FcUMsRUFBRSxDQUFDLFNBQVMsR0ErRWpEO2tCQS9Fb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IE5vZGVzQ29udGFpbmVyIGZyb20gXCIuL05vZGVzQ29udGFpbmVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVBsYXkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuICBAcHJvcGVydHkoTm9kZXNDb250YWluZXIpXHJcbiAgTm9kZXNDb250YWluZXI6IE5vZGVzQ29udGFpbmVyID0gbnVsbDtcclxuICBAcHJvcGVydHkoR2FtZUNvbnRyb2xsZXIpXHJcbiAgR2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuXHJcbiAgZG9sbFByZWNlbnQ6IG51bWJlciA9IDA7XHJcbiAgb3Bwb25lbnRQcmVjZW50OiBudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgLy8gdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBwbGF5R3JlYXRTb3VuZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay53b2FBbmltZVNvdW5kKVxyXG4gICAgbGV0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpICsgMTtcclxuICAgIHN3aXRjaCAocmFuZG9tKSB7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suRnhfQm9udXMxKVxyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLkZ4X0JvbnVzMS52b2x1bWUgPSAwLjU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMjpcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suRnhfQm9udXMyKVxyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLkZ4X0JvbnVzMS52b2x1bWUgPSAwLjU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMzpcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suRnhfQm9udXMzKVxyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLkZ4X0JvbnVzMS52b2x1bWUgPSAwLjU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgNDpcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suRnhfQm9udXM0KVxyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLkZ4X0JvbnVzMS52b2x1bWUgPSAwLjU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHN3aXRjaFRvTHYyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBjYy50d2Vlbih0aGlzLk5vZGVzQ29udGFpbmVyLk92ZXJsYXkpXHJcbiAgICAgICAgLnRvKDEsIHsgb3BhY2l0eTogMTUwIH0pXHJcbiAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zd2l0Y2hEb2xsVG9TdGVwMigpO1xyXG4gICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5MdjFfSGludC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuTHYyX0hpbnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRlhfQmxpbmsuc3RvcFN5c3RlbSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRvKDEsIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG4gICAgfSwgMS41KVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc3dpdGNoRG9sbFRvU3RlcDIoKTogdm9pZCB7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRvbGxzWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5Eb2xsc1sxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuRG9sbHNbMl0uYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5Eb2xscy5zcGxpY2UoMCwgMyk7XHJcblxyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5Eb2xsc1swXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5Eb2xsc1sxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5Eb2xsc1syXS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLk5vZGVzQ29udGFpbmVyLkRvbGxzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBkb2xsID0gdGhpcy5Ob2Rlc0NvbnRhaW5lci5Eb2xsc1tpbmRleF07XHJcbiAgICAgIGNjLnR3ZWVuKGRvbGwpXHJcbiAgICAgICAgLnRvKDEsIHsgc2NhbGU6IDAuMzgsIG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogJ2VsYXN0aWNJbk91dCcgfSlcclxuICAgICAgICAuY2FsbCgoKSA9PiB7IGRvbGwuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpIH0pXHJcbiAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==