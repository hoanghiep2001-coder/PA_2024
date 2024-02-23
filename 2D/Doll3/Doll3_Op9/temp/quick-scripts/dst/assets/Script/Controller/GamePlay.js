
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
        return _this;
    }
    GamePlay.prototype.start = function () {
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        this.AudioManager.switchVolume(constants_1.Constants.SoundTrack.bgSound, 0.7);
        this.handleGamePlay();
        this.initGame();
    };
    GamePlay.prototype.initGame = function () {
        this.NodesContainer.doll_dress.active = false;
        this.NodesContainer.CTA.active = false;
    };
    GamePlay.prototype.handleGamePlay = function () {
        this.handleOpenDoor();
        this.handleShowAdultery();
    };
    GamePlay.prototype.handleOpenDoor = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.knockDoorSound);
        }, 1);
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.openDoorSound);
            _this.NodesContainer.door.getComponent(cc.Animation).play("OpenDoor_Anim");
        }, 2.5);
        this.scheduleOnce(function () {
            _this.NodesContainer.doll_mouth_default.active = false;
            _this.NodesContainer.doll_mouth_suprise.active = true;
            _this.NodesContainer.doll.getComponent(cc.Animation).play("Doll_InHouseAnim");
            _this.NodesContainer.camera.getComponent(cc.Animation).play("Camera_ShakeAnim");
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.screamSound);
        }, 3);
    };
    GamePlay.prototype.handleShowAdultery = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.NodesContainer.camera.getComponent(cc.Animation).play("Camera_ZoomAnim");
        }, 4.5);
        this.scheduleOnce(function () {
            _this.getComponent(cc.Animation).play("GamePlay_ShowAdultery");
        }, 5);
        this.scheduleOnce(function () {
            _this.NodesContainer.doll_tears_left.node.active = true;
            _this.NodesContainer.doll_tears_right.node.active = true;
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.crySound);
        }, 5.8);
        this.scheduleOnce(function () {
            _this.NodesContainer.camera.getComponent(cc.Animation).play("Camera_ZoomOutAnim");
        }, 6.5);
        this.scheduleOnce(function () {
            constants_1.Constants.isCanClick = true;
            _this.NodesContainer.UI_Container.getComponent(cc.Animation).play("UI_Anim");
        }, 7.5);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCxtREFBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEyRUM7UUF4RUMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxvQkFBYyxHQUFtQixJQUFJLENBQUM7O0lBb0V4QyxDQUFDO0lBakVXLHdCQUFLLEdBQWY7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBR08sMkJBQVEsR0FBaEI7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDekMsQ0FBQztJQUdPLGlDQUFjLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFHTyxpQ0FBYyxHQUF0QjtRQUFBLGlCQWlCQztRQWhCQyxJQUFJLENBQUMsWUFB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UUFEQyxRQUFRLENBQUMsK0JBQWMsQ0FBQztvREFDYTtJQVBuQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMkU1QjtJQUFELGVBQUM7Q0EzRUQsQUEyRUMsQ0EzRXFDLEVBQUUsQ0FBQyxTQUFTLEdBMkVqRDtrQkEzRW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBOb2Rlc0NvbnRhaW5lciBmcm9tIFwiLi9Ob2Rlc0NvbnRhaW5lclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQbGF5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KE5vZGVzQ29udGFpbmVyKVxyXG4gIE5vZGVzQ29udGFpbmVyOiBOb2Rlc0NvbnRhaW5lciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5zd2l0Y2hWb2x1bWUoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCwgMC43KTtcclxuICAgIHRoaXMuaGFuZGxlR2FtZVBsYXkoKTtcclxuICAgIHRoaXMuaW5pdEdhbWUoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGluaXRHYW1lKCk6IHZvaWQge1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5kb2xsX2RyZXNzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5DVEEuYWN0aXZlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVHYW1lUGxheSgpOiB2b2lkIHtcclxuICAgICAgdGhpcy5oYW5kbGVPcGVuRG9vcigpO1xyXG4gICAgICB0aGlzLmhhbmRsZVNob3dBZHVsdGVyeSgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaGFuZGxlT3BlbkRvb3IoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5rbm9ja0Rvb3JTb3VuZCk7XHJcbiAgICB9LCAxKTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5vcGVuRG9vclNvdW5kKVxyXG4gICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmRvb3IuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIk9wZW5Eb29yX0FuaW1cIik7XHJcbiAgICB9LCAyLjUpO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5kb2xsX21vdXRoX2RlZmF1bHQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuZG9sbF9tb3V0aF9zdXByaXNlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuZG9sbC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiRG9sbF9JbkhvdXNlQW5pbVwiKTtcclxuICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5jYW1lcmEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkNhbWVyYV9TaGFrZUFuaW1cIik7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5zY3JlYW1Tb3VuZCk7XHJcbiAgICB9LCAzKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGhhbmRsZVNob3dBZHVsdGVyeSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5jYW1lcmEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkNhbWVyYV9ab29tQW5pbVwiKTtcclxuICAgIH0sIDQuNSk7XHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJHYW1lUGxheV9TaG93QWR1bHRlcnlcIik7XHJcbiAgICB9LCA1KTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuZG9sbF90ZWFyc19sZWZ0Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5kb2xsX3RlYXJzX3JpZ2h0Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNyeVNvdW5kKTtcclxuICAgIH0sIDUuOClcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuY2FtZXJhLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJDYW1lcmFfWm9vbU91dEFuaW1cIik7XHJcbiAgICB9LCA2LjUpO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgQ29uc3RhbnRzLmlzQ2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLlVJX0NvbnRhaW5lci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiVUlfQW5pbVwiKTtcclxuICAgIH0sIDcuNSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=