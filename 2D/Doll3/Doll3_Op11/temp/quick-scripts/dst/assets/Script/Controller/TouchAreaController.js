
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/TouchAreaController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '85711X2lIBGPIPjaJXFSYaE', 'TouchAreaController');
// Script/Controller/TouchAreaController.ts

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
exports.TouchAreaController = void 0;
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var GamePlay_1 = require("./GamePlay");
var NodesContainer_1 = require("./NodesContainer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.NodesContainer = null;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.GamePlay = null;
        return _this;
        // protected update(dt: number): void {
        //     this.handleMuteSoundIronSource();
        // }
    }
    TouchAreaController.prototype.onLoad = function () {
    };
    TouchAreaController.prototype.start = function () {
        this.registerEvent();
    };
    TouchAreaController.prototype.registerEvent = function () {
        var _this = this;
        this.NodesContainer.hideMask.on(cc.Node.EventType.TOUCH_START, function () {
            _this.handleIronSourcePlaySound();
        }, this);
        this.NodesContainer.Btn_Start.on(cc.Node.EventType.TOUCH_START, this.GamePlay.goToDressUp, this);
        this.NodesContainer.OpenScene_BtnInstall.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        this.NodesContainer.DressUp_BtnInstall.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        this.activeFrameIconsWhenClick();
        this.activeDressWhenClick();
        this.activeHairWhenClick();
        this.activeShoesWhenClick();
        this.NodesContainer.Btn_Submit.on(cc.Node.EventType.TOUCH_START, this.GamePlay.goToBattle, this);
        // mtg & applovin
        // this.NodesContainer.hideMask.on(cc.Node.EventType.TOUCH_START, this.hideMaskClick, this);
    };
    TouchAreaController.prototype.activeFrameIconsWhenClick = function () {
        var _this = this;
        var _loop_1 = function (index) {
            var node = this_1.NodesContainer.Frame_Icons[index];
            node.on(cc.Node.EventType.TOUCH_START, function () {
                _this.NodesContainer.Frame_Icons.forEach(function (frame) { return frame.opacity = 0; });
                _this.NodesContainer.Items.forEach(function (item) { return item.active = false; });
                _this.NodesContainer.Items[index].active = true;
                node.opacity = 255;
            }, this_1);
        };
        var this_1 = this;
        for (var index = 0; index < this.NodesContainer.Frame_Icons.length; index++) {
            _loop_1(index);
        }
    };
    TouchAreaController.prototype.activeDressWhenClick = function () {
        var _this = this;
        var _loop_2 = function (index) {
            var node = this_2.NodesContainer.Dress_Frames[index];
            node.on(cc.Node.EventType.TOUCH_START, function () {
                !constants_1.Constants.isShowBtnSubmit && _this.GamePlay.activeBlinkAnimForBtnSubmit();
                _this.NodesContainer.Dress_Frames.forEach(function (frame) { return frame.opacity = 0; });
                _this.NodesContainer.Doll_Dresses.forEach(function (item) { return item.active = false; });
                _this.NodesContainer.Doll_Dresses[index].active = true;
                _this.NodesContainer.DollDressDefault.active = false;
                node.opacity = 255;
                _this.NodesContainer.FX_Heart.resetSystem();
                _this.GamePlay.playGreatSound();
            }, this_2);
        };
        var this_2 = this;
        for (var index = 0; index < this.NodesContainer.Dress_Frames.length; index++) {
            _loop_2(index);
        }
    };
    TouchAreaController.prototype.activeHairWhenClick = function () {
        var _this = this;
        var _loop_3 = function (index) {
            var node = this_3.NodesContainer.Hair_Frames[index];
            node.on(cc.Node.EventType.TOUCH_START, function () {
                !constants_1.Constants.isShowBtnSubmit && _this.GamePlay.activeBlinkAnimForBtnSubmit();
                _this.NodesContainer.Hair_Frames.forEach(function (frame) { return frame.opacity = 0; });
                _this.NodesContainer.Doll_B_Hairs.forEach(function (item) { return item.active = false; });
                _this.NodesContainer.Doll_F_Hairs.forEach(function (item) { return item.active = false; });
                _this.NodesContainer.Doll_B_Hairs[index].active = true;
                _this.NodesContainer.Doll_F_Hairs[index].active = true;
                node.opacity = 255;
                _this.NodesContainer.FX_Heart.resetSystem();
                _this.GamePlay.playGreatSound();
            }, this_3);
        };
        var this_3 = this;
        for (var index = 0; index < this.NodesContainer.Hair_Frames.length; index++) {
            _loop_3(index);
        }
    };
    TouchAreaController.prototype.activeShoesWhenClick = function () {
        var _this = this;
        var _loop_4 = function (index) {
            var node = this_4.NodesContainer.Shoe_Frames[index];
            node.on(cc.Node.EventType.TOUCH_START, function () {
                !constants_1.Constants.isShowBtnSubmit && _this.GamePlay.activeBlinkAnimForBtnSubmit();
                _this.NodesContainer.Shoe_Frames.forEach(function (frame) { return frame.opacity = 0; });
                _this.NodesContainer.Doll_Shoes.forEach(function (item) { return item.active = false; });
                _this.NodesContainer.Doll_Shoes[index].active = true;
                node.opacity = 255;
                _this.NodesContainer.FX_Heart.resetSystem();
                _this.GamePlay.playGreatSound();
            }, this_4);
        };
        var this_4 = this;
        for (var index = 0; index < this.NodesContainer.Shoe_Frames.length; index++) {
            _loop_4(index);
        }
    };
    TouchAreaController.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        constants_1.Constants.ironSource.isPlayBgSound = true;
        if (constants_1.Constants.ironSource.SoundState) {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
    };
    __decorate([
        property(NodesContainer_1.default)
    ], TouchAreaController.prototype, "NodesContainer", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], TouchAreaController.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], TouchAreaController.prototype, "GameController", void 0);
    __decorate([
        property(GamePlay_1.default)
    ], TouchAreaController.prototype, "GamePlay", void 0);
    TouchAreaController = __decorate([
        ccclass
    ], TouchAreaController);
    return TouchAreaController;
}(cc.Component));
exports.TouchAreaController = TouchAreaController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCx1Q0FBa0M7QUFDbEMsbURBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLHVDQUFZO0lBQXJEO1FBQUEscUVBbUlDO1FBaklDLFlBQVk7UUFFWixvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxjQUFRLEdBQWEsSUFBSSxDQUFDOztRQXNIMUIsdUNBQXVDO1FBQ3ZDLHdDQUF3QztRQUN4QyxJQUFJO0lBQ04sQ0FBQztJQXRIVyxvQ0FBTSxHQUFoQjtJQUVBLENBQUM7SUFHUyxtQ0FBSyxHQUFmO1FBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFHTywyQ0FBYSxHQUFyQjtRQUFBLGlCQWlCQztRQWhCQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFO1lBQzdELEtBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBQ25DLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQkFB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QUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztnQkFDbkIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQzNDLEtBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDakMsQ0FBQyxTQUFPLENBQUM7OztRQVpYLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO29CQUFsRSxLQUFLO1NBYWI7SUFDSCxDQUFDO0lBR00sdURBQXlCLEdBQWhDO1FBQ0UsSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDdEMsT0FBTztTQUNSO1FBRUQscUJBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUUxQyxJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtZQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMzRDtJQUNILENBQUM7SUF6SEQ7UUFEQyxRQUFRLENBQUMsd0JBQWMsQ0FBQzsrREFDYTtJQUV0QztRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDOzZEQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLCtCQUFjLENBQUM7K0RBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsa0JBQVEsQ0FBQzt5REFDTztJQVZmLG1CQUFtQjtRQUQvQixPQUFPO09BQ0ssbUJBQW1CLENBbUkvQjtJQUFELDBCQUFDO0NBbklELEFBbUlDLENBbkl3QyxFQUFFLENBQUMsU0FBUyxHQW1JcEQ7QUFuSVksa0RBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IEdhbWVQbGF5IGZyb20gXCIuL0dhbWVQbGF5XCI7XHJcbmltcG9ydCBOb2Rlc0NvbnRhaW5lciBmcm9tIFwiLi9Ob2Rlc0NvbnRhaW5lclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBUb3VjaEFyZWFDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgLy8gQ29tcG9uZW50XHJcbiAgQHByb3BlcnR5KE5vZGVzQ29udGFpbmVyKVxyXG4gIE5vZGVzQ29udGFpbmVyOiBOb2Rlc0NvbnRhaW5lciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVQbGF5KVxyXG4gIEdhbWVQbGF5OiBHYW1lUGxheSA9IG51bGw7XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xyXG5cclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgc3RhcnQoKSB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVyRXZlbnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmhpZGVNYXNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpO1xyXG4gICAgfSwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5CdG5fU3RhcnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZVBsYXkuZ29Ub0RyZXNzVXAsIHRoaXMpO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5PcGVuU2NlbmVfQnRuSW5zdGFsbC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlLCB0aGlzKTtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuRHJlc3NVcF9CdG5JbnN0YWxsLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMuYWN0aXZlRnJhbWVJY29uc1doZW5DbGljaygpO1xyXG4gICAgdGhpcy5hY3RpdmVEcmVzc1doZW5DbGljaygpO1xyXG4gICAgdGhpcy5hY3RpdmVIYWlyV2hlbkNsaWNrKCk7XHJcbiAgICB0aGlzLmFjdGl2ZVNob2VzV2hlbkNsaWNrKCk7XHJcblxyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5CdG5fU3VibWl0Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVQbGF5LmdvVG9CYXR0bGUsIHRoaXMpO1xyXG4gICAgLy8gbXRnICYgYXBwbG92aW5cclxuICAgIC8vIHRoaXMuTm9kZXNDb250YWluZXIuaGlkZU1hc2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuaGlkZU1hc2tDbGljaywgdGhpcyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBhY3RpdmVGcmFtZUljb25zV2hlbkNsaWNrKCk6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuTm9kZXNDb250YWluZXIuRnJhbWVfSWNvbnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLk5vZGVzQ29udGFpbmVyLkZyYW1lX0ljb25zW2luZGV4XTtcclxuICAgICAgbm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4ge1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkZyYW1lX0ljb25zLmZvckVhY2goZnJhbWUgPT4gZnJhbWUub3BhY2l0eSA9IDApO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuSXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWN0aXZlID0gZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuSXRlbXNbaW5kZXhdLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIG5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBhY3RpdmVEcmVzc1doZW5DbGljaygpOiB2b2lkIHtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLk5vZGVzQ29udGFpbmVyLkRyZXNzX0ZyYW1lcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuTm9kZXNDb250YWluZXIuRHJlc3NfRnJhbWVzW2luZGV4XTtcclxuICAgICAgbm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4ge1xyXG4gICAgICAgICFDb25zdGFudHMuaXNTaG93QnRuU3VibWl0ICYmIHRoaXMuR2FtZVBsYXkuYWN0aXZlQmxpbmtBbmltRm9yQnRuU3VibWl0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRHJlc3NfRnJhbWVzLmZvckVhY2goZnJhbWUgPT4gZnJhbWUub3BhY2l0eSA9IDApO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRG9sbF9EcmVzc2VzLmZvckVhY2goaXRlbSA9PiBpdGVtLmFjdGl2ZSA9IGZhbHNlKTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRvbGxfRHJlc3Nlc1tpbmRleF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRvbGxEcmVzc0RlZmF1bHQuYWN0aXZlID0gZmFsc2VcclxuXHJcbiAgICAgICAgbm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRlhfSGVhcnQucmVzZXRTeXN0ZW0oKTtcclxuICAgICAgICB0aGlzLkdhbWVQbGF5LnBsYXlHcmVhdFNvdW5kKCk7XHJcbiAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgYWN0aXZlSGFpcldoZW5DbGljaygpOiB2b2lkIHtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLk5vZGVzQ29udGFpbmVyLkhhaXJfRnJhbWVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBub2RlID0gdGhpcy5Ob2Rlc0NvbnRhaW5lci5IYWlyX0ZyYW1lc1tpbmRleF07XHJcbiAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsICgpID0+IHtcclxuICAgICAgICAhQ29uc3RhbnRzLmlzU2hvd0J0blN1Ym1pdCAmJiB0aGlzLkdhbWVQbGF5LmFjdGl2ZUJsaW5rQW5pbUZvckJ0blN1Ym1pdCgpO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkhhaXJfRnJhbWVzLmZvckVhY2goZnJhbWUgPT4gZnJhbWUub3BhY2l0eSA9IDApO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRG9sbF9CX0hhaXJzLmZvckVhY2goaXRlbSA9PiBpdGVtLmFjdGl2ZSA9IGZhbHNlKTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRvbGxfRl9IYWlycy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hY3RpdmUgPSBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5Eb2xsX0JfSGFpcnNbaW5kZXhdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5Eb2xsX0ZfSGFpcnNbaW5kZXhdLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIG5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkZYX0hlYXJ0LnJlc2V0U3lzdGVtKCk7XHJcbiAgICAgICAgdGhpcy5HYW1lUGxheS5wbGF5R3JlYXRTb3VuZCgpO1xyXG4gICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGFjdGl2ZVNob2VzV2hlbkNsaWNrKCk6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuTm9kZXNDb250YWluZXIuU2hvZV9GcmFtZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLk5vZGVzQ29udGFpbmVyLlNob2VfRnJhbWVzW2luZGV4XTtcclxuICAgICAgbm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4ge1xyXG4gICAgICAgICFDb25zdGFudHMuaXNTaG93QnRuU3VibWl0ICYmIHRoaXMuR2FtZVBsYXkuYWN0aXZlQmxpbmtBbmltRm9yQnRuU3VibWl0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuU2hvZV9GcmFtZXMuZm9yRWFjaChmcmFtZSA9PiBmcmFtZS5vcGFjaXR5ID0gMCk7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5Eb2xsX1Nob2VzLmZvckVhY2goaXRlbSA9PiBpdGVtLmFjdGl2ZSA9IGZhbHNlKTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRvbGxfU2hvZXNbaW5kZXhdLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIG5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkZYX0hlYXJ0LnJlc2V0U3lzdGVtKCk7XHJcbiAgICAgICAgdGhpcy5HYW1lUGxheS5wbGF5R3JlYXRTb3VuZCgpO1xyXG4gICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpOiB2b2lkIHtcclxuICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgLy8gICAgIHRoaXMuaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpO1xyXG4gIC8vIH1cclxufVxyXG4iXX0=