
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
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCxtREFBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEyRUM7UUF4RUMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxvQkFBYyxHQUFtQixJQUFJLENBQUM7O0lBb0V4QyxDQUFDO0lBakVXLHdCQUFLLEdBQWY7UUFDRSw2REFBNkQ7UUFDN0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUdPLDJCQUFRLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3pDLENBQUM7SUFHTyxpQ0FBYyxHQUF0QjtRQUNJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBR08saUNBQWMsR0FBdEI7UUFBQSxpQkFpQkM7UUFoQkMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNoQixLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUs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UUFBUSxDQTJFNUI7SUFBRCxlQUFDO0NBM0VELEFBMkVDLENBM0VxQyxFQUFFLENBQUMsU0FBUyxHQTJFakQ7a0JBM0VvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgTm9kZXNDb250YWluZXIgZnJvbSBcIi4vTm9kZXNDb250YWluZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShOb2Rlc0NvbnRhaW5lcilcclxuICBOb2Rlc0NvbnRhaW5lcjogTm9kZXNDb250YWluZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShHYW1lQ29udHJvbGxlcilcclxuICBHYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgLy8gdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIuc3dpdGNoVm9sdW1lKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQsIDAuNyk7XHJcbiAgICB0aGlzLmhhbmRsZUdhbWVQbGF5KCk7XHJcbiAgICB0aGlzLmluaXRHYW1lKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBpbml0R2FtZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuZG9sbF9kcmVzcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuQ1RBLmFjdGl2ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaGFuZGxlR2FtZVBsYXkoKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuaGFuZGxlT3BlbkRvb3IoKTtcclxuICAgICAgdGhpcy5oYW5kbGVTaG93QWR1bHRlcnkoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGhhbmRsZU9wZW5Eb29yKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2sua25vY2tEb29yU291bmQpO1xyXG4gICAgfSwgMSk7XHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2sub3BlbkRvb3JTb3VuZClcclxuICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5kb29yLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJPcGVuRG9vcl9BbmltXCIpO1xyXG4gICAgfSwgMi41KTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuZG9sbF9tb3V0aF9kZWZhdWx0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmRvbGxfbW91dGhfc3VwcmlzZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmRvbGwuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkRvbGxfSW5Ib3VzZUFuaW1cIik7XHJcbiAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuY2FtZXJhLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJDYW1lcmFfU2hha2VBbmltXCIpO1xyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suc2NyZWFtU291bmQpO1xyXG4gICAgfSwgMyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVTaG93QWR1bHRlcnkoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuY2FtZXJhLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJDYW1lcmFfWm9vbUFuaW1cIik7XHJcbiAgICB9LCA0LjUpO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiR2FtZVBsYXlfU2hvd0FkdWx0ZXJ5XCIpO1xyXG4gICAgfSwgNSk7XHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmRvbGxfdGVhcnNfbGVmdC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuZG9sbF90ZWFyc19yaWdodC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5jcnlTb3VuZCk7XHJcbiAgICB9LCA1LjgpXHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmNhbWVyYS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiQ2FtZXJhX1pvb21PdXRBbmltXCIpO1xyXG4gICAgfSwgNi41KTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIENvbnN0YW50cy5pc0NhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5VSV9Db250YWluZXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlVJX0FuaW1cIik7XHJcbiAgICB9LCA3LjUpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19