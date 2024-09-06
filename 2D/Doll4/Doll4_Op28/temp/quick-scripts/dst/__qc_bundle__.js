
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Controller/GameController');
require('./assets/Script/Controller/GamePlay');
require('./assets/Script/Controller/NodesContainer');
require('./assets/Script/Controller/TouchAreaController');
require('./assets/Script/Data/Ultils');
require('./assets/Script/Data/constants');
require('./assets/Script/Plugin/AudioManager');
require('./assets/Script/Plugin/Responsive');

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
//------QC-SOURCE-SPLIT------

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
        // ironsource
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
                _this.NodesContainer.Doll_F_Hairs.forEach(function (item) { return item.active = false; });
                _this.NodesContainer.Doll_F_Hairs[index].active = true;
                _this.NodesContainer.DollHairDefault.active = false;
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
        if (constants_1.Constants.ironSource.SoundState) {
            constants_1.Constants.ironSource.isPlayBgSound = true;
            constants_1.Constants.isClickStartBtn
                ? this.AudioManager.playSound(constants_1.Constants.SoundTrack.chickFunSound)
                : this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCx1Q0FBa0M7QUFDbEMsbURBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLHVDQUFZO0lBQXJEO1FBQUEscUVBa0lDO1FBaElDLFlBQVk7UUFFWixvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxjQUFRLEdBQWEsSUFBSSxDQUFDOztRQXFIMUIsdUNBQXVDO1FBQ3ZDLHdDQUF3QztRQUN4QyxJQUFJO0lBQ04sQ0FBQztJQXJIVyxvQ0FBTSxHQUFoQjtJQUVBLENBQUM7SUFHUyxtQ0FBSyxHQUFmO1FBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFHTywyQ0FBYSxHQUFyQjtRQUFBLGlCQWdCQztRQWZDLGFBQWE7UUFDYixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFO1lBQzdELEtBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBQ25DLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakcsSUFBSSxDQUFDLGNBQWMs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QVpYLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO29CQUFsRSxLQUFLO1NBYWI7SUFDSCxDQUFDO0lBR00sdURBQXlCLEdBQWhDO1FBQ0UsSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDdEMsT0FBTztTQUNSO1FBRUQsSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7WUFDbkMscUJBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQyxxQkFBUyxDQUFDLGVBQWU7Z0JBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7Z0JBQ2pFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM3RDtJQUNILENBQUM7SUF4SEQ7UUFEQyxRQUFRLENBQUMsd0JBQWMsQ0FBQzsrREFDYTtJQUV0QztRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDOzZEQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLCtCQUFjLENBQUM7K0RBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsa0JBQVEsQ0FBQzt5REFDTztJQVZmLG1CQUFtQjtRQUQvQixPQUFPO09BQ0ssbUJBQW1CLENBa0kvQjtJQUFELDBCQUFDO0NBbElELEFBa0lDLENBbEl3QyxFQUFFLENBQUMsU0FBUyxHQWtJcEQ7QUFsSVksa0RBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IEdhbWVQbGF5IGZyb20gXCIuL0dhbWVQbGF5XCI7XHJcbmltcG9ydCBOb2Rlc0NvbnRhaW5lciBmcm9tIFwiLi9Ob2Rlc0NvbnRhaW5lclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBUb3VjaEFyZWFDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgLy8gQ29tcG9uZW50XHJcbiAgQHByb3BlcnR5KE5vZGVzQ29udGFpbmVyKVxyXG4gIE5vZGVzQ29udGFpbmVyOiBOb2Rlc0NvbnRhaW5lciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVQbGF5KVxyXG4gIEdhbWVQbGF5OiBHYW1lUGxheSA9IG51bGw7XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xyXG5cclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgc3RhcnQoKSB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVyRXZlbnQoKTogdm9pZCB7XHJcbiAgICAvLyBpcm9uc291cmNlXHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmhpZGVNYXNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpO1xyXG4gICAgfSwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5CdG5fU3RhcnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZVBsYXkuZ29Ub0RyZXNzVXAsIHRoaXMpO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5PcGVuU2NlbmVfQnRuSW5zdGFsbC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlLCB0aGlzKTtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuRHJlc3NVcF9CdG5JbnN0YWxsLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMuYWN0aXZlRnJhbWVJY29uc1doZW5DbGljaygpO1xyXG4gICAgdGhpcy5hY3RpdmVEcmVzc1doZW5DbGljaygpO1xyXG4gICAgdGhpcy5hY3RpdmVIYWlyV2hlbkNsaWNrKCk7XHJcbiAgICB0aGlzLmFjdGl2ZVNob2VzV2hlbkNsaWNrKCk7XHJcblxyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5CdG5fU3VibWl0Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVQbGF5LmdvVG9CYXR0bGUsIHRoaXMpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgYWN0aXZlRnJhbWVJY29uc1doZW5DbGljaygpOiB2b2lkIHtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLk5vZGVzQ29udGFpbmVyLkZyYW1lX0ljb25zLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBub2RlID0gdGhpcy5Ob2Rlc0NvbnRhaW5lci5GcmFtZV9JY29uc1tpbmRleF07XHJcbiAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsICgpID0+IHtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5GcmFtZV9JY29ucy5mb3JFYWNoKGZyYW1lID0+IGZyYW1lLm9wYWNpdHkgPSAwKTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkl0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLmFjdGl2ZSA9IGZhbHNlKTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkl0ZW1zW2luZGV4XS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICBub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgYWN0aXZlRHJlc3NXaGVuQ2xpY2soKTogdm9pZCB7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5Ob2Rlc0NvbnRhaW5lci5EcmVzc19GcmFtZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLk5vZGVzQ29udGFpbmVyLkRyZXNzX0ZyYW1lc1tpbmRleF07XHJcbiAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsICgpID0+IHtcclxuICAgICAgICAhQ29uc3RhbnRzLmlzU2hvd0J0blN1Ym1pdCAmJiB0aGlzLkdhbWVQbGF5LmFjdGl2ZUJsaW5rQW5pbUZvckJ0blN1Ym1pdCgpO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRyZXNzX0ZyYW1lcy5mb3JFYWNoKGZyYW1lID0+IGZyYW1lLm9wYWNpdHkgPSAwKTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRvbGxfRHJlc3Nlcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hY3RpdmUgPSBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5Eb2xsX0RyZXNzZXNbaW5kZXhdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5Eb2xsRHJlc3NEZWZhdWx0LmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgIG5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkZYX0hlYXJ0LnJlc2V0U3lzdGVtKCk7XHJcbiAgICAgICAgdGhpcy5HYW1lUGxheS5wbGF5R3JlYXRTb3VuZCgpO1xyXG4gICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGFjdGl2ZUhhaXJXaGVuQ2xpY2soKTogdm9pZCB7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5Ob2Rlc0NvbnRhaW5lci5IYWlyX0ZyYW1lcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuTm9kZXNDb250YWluZXIuSGFpcl9GcmFtZXNbaW5kZXhdO1xyXG4gICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7XHJcbiAgICAgICAgIUNvbnN0YW50cy5pc1Nob3dCdG5TdWJtaXQgJiYgdGhpcy5HYW1lUGxheS5hY3RpdmVCbGlua0FuaW1Gb3JCdG5TdWJtaXQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5IYWlyX0ZyYW1lcy5mb3JFYWNoKGZyYW1lID0+IGZyYW1lLm9wYWNpdHkgPSAwKTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRvbGxfRl9IYWlycy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hY3RpdmUgPSBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5Eb2xsX0ZfSGFpcnNbaW5kZXhdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5Eb2xsSGFpckRlZmF1bHQuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIG5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkZYX0hlYXJ0LnJlc2V0U3lzdGVtKCk7XHJcbiAgICAgICAgdGhpcy5HYW1lUGxheS5wbGF5R3JlYXRTb3VuZCgpO1xyXG4gICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGFjdGl2ZVNob2VzV2hlbkNsaWNrKCk6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuTm9kZXNDb250YWluZXIuU2hvZV9GcmFtZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLk5vZGVzQ29udGFpbmVyLlNob2VfRnJhbWVzW2luZGV4XTtcclxuICAgICAgbm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4ge1xyXG4gICAgICAgICFDb25zdGFudHMuaXNTaG93QnRuU3VibWl0ICYmIHRoaXMuR2FtZVBsYXkuYWN0aXZlQmxpbmtBbmltRm9yQnRuU3VibWl0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuU2hvZV9GcmFtZXMuZm9yRWFjaChmcmFtZSA9PiBmcmFtZS5vcGFjaXR5ID0gMCk7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5Eb2xsX1Nob2VzLmZvckVhY2goaXRlbSA9PiBpdGVtLmFjdGl2ZSA9IGZhbHNlKTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRvbGxfU2hvZXNbaW5kZXhdLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIG5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkZYX0hlYXJ0LnJlc2V0U3lzdGVtKCk7XHJcbiAgICAgICAgdGhpcy5HYW1lUGxheS5wbGF5R3JlYXRTb3VuZCgpO1xyXG4gICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpOiB2b2lkIHtcclxuICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kID0gdHJ1ZTtcclxuICAgICAgQ29uc3RhbnRzLmlzQ2xpY2tTdGFydEJ0biBcclxuICAgICAgPyB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suY2hpY2tGdW5Tb3VuZClcclxuICAgICAgOiB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgLy8gICAgIHRoaXMuaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpO1xyXG4gIC8vIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Plugin/Responsive.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd3abaWwEQhAi5Yf4wF9VZxN', 'Responsive');
// Script/Plugin/Responsive.ts

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
var GamePlay_1 = require("../Controller/GamePlay");
var NodesContainer_1 = require("../Controller/NodesContainer");
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Responsive = /** @class */ (function (_super) {
    __extends(Responsive, _super);
    function Responsive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GamePlay = null;
        _this.NodesContainer = null;
        // state
        _this.device = "";
        _this.isRotate = false;
        _this.HORIZONTAL_IPX = "horizontal_IPX";
        _this.HORIZONTAL_TABLET = "horizontal_Tablet";
        _this.VERTICAL_IPX = "vertical_IPX";
        _this.VERTICAL_MOBILE = "vertical_Mobile";
        return _this;
    }
    Responsive.prototype.onLoad = function () {
    };
    Responsive.prototype.start = function () {
    };
    Responsive.prototype.handleRotate = function () {
        if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
            constants_1.Constants.isRotate = true;
            this.setHorizontal();
        }
        else {
            constants_1.Constants.isRotate = false;
            this.setVertical();
        }
    };
    Responsive.prototype.setHorizontal = function () {
        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width < 0.65) {
            // Iphone 6 / 6 plus / 7 / 7 Plus / X
            this.setHorizontalForIpX();
        }
        else {
            this.setHorizontalForTablet();
        }
    };
    Responsive.prototype.setHorizontalForIpX = function () {
        if (this.HORIZONTAL_IPX === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_IPX;
        constants_1.Constants.Responsive.calculatedX = -180;
        constants_1.Constants.Responsive.calculatedY = -125;
        constants_1.Constants.Responsive.calculatedScale = 1.2;
        this.NodesContainer.OpenScene.scale = 1;
        this.NodesContainer.BG.scale = 1;
        this.NodesContainer.OpenScene.scale = 0.9;
        this.NodesContainer.Doll.x = -200;
        this.NodesContainer.Doll.y = -180;
        this.NodesContainer.Doll.scale = 1.4;
        this.NodesContainer.DollPoint.node.scale = 0.8;
        this.NodesContainer.DollPoint.node.y = -60;
        this.NodesContainer.Opponent.x = 180;
        this.NodesContainer.Opponent.y = 20;
        this.NodesContainer.Opponent.scale = 0.48;
        this.NodesContainer.DressUpBg_1.active = false;
        this.NodesContainer.DressUpBg_2.active = true;
        this.NodesContainer.DressUpPickTray.x = 150;
        this.NodesContainer.DressUpPickTray.y = 70;
        this.NodesContainer.DressUpPickTray.scale = 0.4;
        this.NodesContainer.DressUpText.scale = 0.6;
        this.NodesContainer.DressUpText.x = 150;
        this.NodesContainer.DressUpText.y = 150;
        this.NodesContainer.DressUp_BtnInstall.scale = 0.4;
        this.NodesContainer.DressUp_BtnInstall.x = 150;
        this.NodesContainer.DressUp_BtnInstall.y = -190;
        this.NodesContainer.Btn_Submit.scale = 0.45;
        this.NodesContainer.Btn_Submit.x = 150;
        this.NodesContainer.Btn_Submit.y = -130;
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        constants_1.Constants.Responsive.calculatedX = -180;
        constants_1.Constants.Responsive.calculatedY = -125;
        constants_1.Constants.Responsive.calculatedScale = 1.2;
        this.NodesContainer.BG.scale = 1;
        this.NodesContainer.OpenScene.scale = 0.9;
        this.NodesContainer.Doll.x = -200;
        this.NodesContainer.Doll.y = -180;
        this.NodesContainer.Doll.scale = 1.4;
        this.NodesContainer.DollPoint.node.scale = 0.8;
        this.NodesContainer.DollPoint.node.y = -60;
        this.NodesContainer.Opponent.x = 180;
        this.NodesContainer.Opponent.y = 25;
        this.NodesContainer.Opponent.scale = 0.48;
        this.NodesContainer.DressUpBg_1.active = false;
        this.NodesContainer.DressUpBg_2.active = true;
        this.NodesContainer.DressUpPickTray.x = 120;
        this.NodesContainer.DressUpPickTray.y = 70;
        this.NodesContainer.DressUpPickTray.scale = 0.3;
        this.NodesContainer.DressUpText.scale = 0.45;
        this.NodesContainer.DressUpText.x = 120;
        this.NodesContainer.DressUpText.y = 150;
        this.NodesContainer.DressUp_BtnInstall.scale = 0.4;
        this.NodesContainer.DressUp_BtnInstall.x = 120;
        this.NodesContainer.DressUp_BtnInstall.y = -190;
        this.NodesContainer.Btn_Submit.scale = 0.45;
        this.NodesContainer.Btn_Submit.x = 120;
        this.NodesContainer.Btn_Submit.y = -120;
    };
    Responsive.prototype.setVertical = function () {
        if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.5) {
            this.setIphoneX();
        }
        else {
            this.setMobile();
        }
    };
    Responsive.prototype.setIphoneX = function () {
        if (this.VERTICAL_IPX === this.device) {
            return;
        }
        this.device = this.VERTICAL_IPX;
        constants_1.Constants.Responsive.calculatedX = -80;
        constants_1.Constants.Responsive.calculatedY = -195;
        constants_1.Constants.Responsive.calculatedScale = 1.05;
        this.NodesContainer.BG.scale = 1.3;
        this.NodesContainer.OpenScene.scale = 1;
        this.NodesContainer.Doll.x = -0;
        this.NodesContainer.Doll.y = -0;
        this.NodesContainer.Doll.scale = 1;
        this.NodesContainer.DollPoint.node.scale = 0.8;
        this.NodesContainer.DollPoint.node.y = -90;
        this.NodesContainer.Opponent.x = 80;
        this.NodesContainer.Opponent.y = -85;
        this.NodesContainer.Opponent.scale = 0.45;
        this.NodesContainer.DressUpBg_1.active = true;
        this.NodesContainer.DressUpBg_1.scale = 0.45;
        this.NodesContainer.DressUpBg_2.active = false;
        this.NodesContainer.DressUpPickTray.x = 0;
        this.NodesContainer.DressUpPickTray.y = -79.6;
        this.NodesContainer.DressUpPickTray.scale = 0.3;
        this.NodesContainer.DressUpText.scale = 0.33;
        this.NodesContainer.DressUpText.x = 0;
        this.NodesContainer.DressUpText.y = -230;
        this.NodesContainer.DressUp_BtnInstall.scale = 0.3;
        this.NodesContainer.DressUp_BtnInstall.x = 0;
        this.NodesContainer.DressUp_BtnInstall.y = -300;
        this.NodesContainer.Btn_Submit.scale = 0.35;
        this.NodesContainer.Btn_Submit.x = 100;
        this.NodesContainer.Btn_Submit.y = -10;
    };
    Responsive.prototype.setMobile = function () {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        this.device = this.VERTICAL_MOBILE;
        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width > 1.5) {
            // if (cc.view.getFrameSize().width / cc.view.getFrameSize().height >= 0.6 && cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.62) {
            //     // mobile mode applovin
            //     return;
            // }
            // Iphone 6 / 6 Plus / 7 / 7 Plus   
            constants_1.Constants.Responsive.calculatedX = -80;
            constants_1.Constants.Responsive.calculatedY = -145;
            constants_1.Constants.Responsive.calculatedScale = 1.05;
            this.NodesContainer.OpenScene.scale = 1;
            this.NodesContainer.Doll.x = -0;
            this.NodesContainer.Doll.y = -0;
            this.NodesContainer.Doll.scale = 1;
            this.NodesContainer.DollPoint.node.scale = 0.8;
            this.NodesContainer.DollPoint.node.y = -90;
            this.NodesContainer.Opponent.x = 80;
            this.NodesContainer.Opponent.y = -35;
            this.NodesContainer.Opponent.scale = 0.45;
            this.NodesContainer.DressUpBg_1.active = true;
            this.NodesContainer.DressUpBg_2.active = false;
            this.NodesContainer.DressUpPickTray.x = 0;
            this.NodesContainer.DressUpPickTray.y = -59.6;
            this.NodesContainer.DressUpPickTray.scale = 0.3;
            this.NodesContainer.DressUpText.scale = 0.33;
            this.NodesContainer.DressUpText.x = 0;
            this.NodesContainer.DressUpText.y = -200;
            this.NodesContainer.DressUp_BtnInstall.scale = 0.3;
            this.NodesContainer.DressUp_BtnInstall.x = 0;
            this.NodesContainer.DressUp_BtnInstall.y = -245;
            this.NodesContainer.Btn_Submit.scale = 0.35;
            this.NodesContainer.Btn_Submit.x = 100;
            this.NodesContainer.Btn_Submit.y = -10;
        }
        else {
            constants_1.Constants.Responsive.calculatedX = -80;
            constants_1.Constants.Responsive.calculatedY = -130;
            constants_1.Constants.Responsive.calculatedScale = 0.9;
            this.NodesContainer.OpenScene.scale = 0.9;
            this.NodesContainer.Doll.x = -0;
            this.NodesContainer.Doll.y = 25;
            this.NodesContainer.Doll.scale = 0.8;
            this.NodesContainer.DollPoint.node.scale = 0.8;
            this.NodesContainer.DollPoint.node.y = -90;
            this.NodesContainer.Opponent.x = 80;
            this.NodesContainer.Opponent.y = -30;
            this.NodesContainer.Opponent.scale = 0.4;
            this.NodesContainer.DressUpBg_1.active = true;
            this.NodesContainer.DressUpBg_1.scale = 0.4;
            this.NodesContainer.DressUpBg_2.active = false;
            this.NodesContainer.DressUpPickTray.x = 0;
            this.NodesContainer.DressUpPickTray.y = -29.6;
            this.NodesContainer.DressUpPickTray.scale = 0.3;
            this.NodesContainer.DressUpText.scale = 0.33;
            this.NodesContainer.DressUpText.x = 0;
            this.NodesContainer.DressUpText.y = -170;
            this.NodesContainer.DressUp_BtnInstall.scale = 0.3;
            this.NodesContainer.DressUp_BtnInstall.x = 0;
            this.NodesContainer.DressUp_BtnInstall.y = -210;
            this.NodesContainer.Btn_Submit.scale = 0.35;
            this.NodesContainer.Btn_Submit.x = 110;
            this.NodesContainer.Btn_Submit.y = 20;
        }
    };
    Responsive.prototype.update = function (dt) {
        this.handleRotate();
    };
    __decorate([
        property(GamePlay_1.default)
    ], Responsive.prototype, "GamePlay", void 0);
    __decorate([
        property(NodesContainer_1.default)
    ], Responsive.prototype, "NodesContainer", void 0);
    Responsive = __decorate([
        ccclass
    ], Responsive);
    return Responsive;
}(cc.Component));
exports.default = Responsive;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFJlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLCtEQUEwRDtBQUMxRCwrQ0FBOEM7QUFHeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFzUkM7UUFuUkcsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsUUFBUTtRQUNSLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixvQkFBYyxHQUFXLGdCQUFnQixDQUFDO1FBQzFDLHVCQUFpQixHQUFXLG1CQUFtQixDQUFDO1FBQ2hELGtCQUFZLEdBQVcsY0FBYyxDQUFDO1FBQ3RDLHFCQUFlLEdBQVcsaUJBQWlCLENBQUM7O0lBd1FoRCxDQUFDO0lBdFFhLDJCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUVTLDBCQUFLLEdBQWY7SUFFQSxDQUFDO0lBRU8saUNBQVksR0FBcEI7UUFDSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxFQUFFO1lBQzlELHFCQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUMxQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDeEI7YUFBTTtZQUNILHFCQUFTLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEI7SUFDTCxDQUFDO0lBRU8sa0NBQWEsR0FBckI7UUFDSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFF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QUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQWxSRDtRQURDLFFBQVEsQ0FBQyxrQkFBUSxDQUFDO2dEQUNPO0lBRTFCO1FBREMsUUFBUSxDQUFDLHdCQUFjLENBQUM7c0RBQ2E7SUFMckIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQXNSOUI7SUFBRCxpQkFBQztDQXRSRCxBQXNSQyxDQXRSdUMsRUFBRSxDQUFDLFNBQVMsR0FzUm5EO2tCQXRSb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lUGxheSBmcm9tIFwiLi4vQ29udHJvbGxlci9HYW1lUGxheVwiO1xyXG5pbXBvcnQgTm9kZXNDb250YWluZXIgZnJvbSBcIi4uL0NvbnRyb2xsZXIvTm9kZXNDb250YWluZXJcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNpdmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShHYW1lUGxheSlcclxuICAgIEdhbWVQbGF5OiBHYW1lUGxheSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoTm9kZXNDb250YWluZXIpXHJcbiAgICBOb2Rlc0NvbnRhaW5lcjogTm9kZXNDb250YWluZXIgPSBudWxsO1xyXG5cclxuICAgIC8vIHN0YXRlXHJcbiAgICBkZXZpY2U6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBpc1JvdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEhPUklaT05UQUxfSVBYOiBzdHJpbmcgPSBcImhvcml6b250YWxfSVBYXCI7XHJcbiAgICBIT1JJWk9OVEFMX1RBQkxFVDogc3RyaW5nID0gXCJob3Jpem9udGFsX1RhYmxldFwiO1xyXG4gICAgVkVSVElDQUxfSVBYOiBzdHJpbmcgPSBcInZlcnRpY2FsX0lQWFwiO1xyXG4gICAgVkVSVElDQUxfTU9CSUxFOiBzdHJpbmcgPSBcInZlcnRpY2FsX01vYmlsZVwiO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVSb3RhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggPiBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCkge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNSb3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNSb3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWZXJ0aWNhbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEhvcml6b250YWwoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0IC8gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCA8IDAuNjUpIHtcclxuICAgICAgICAgICAgLy8gSXBob25lIDYgLyA2IHBsdXMgLyA3IC8gNyBQbHVzIC8gWFxyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWxGb3JJcFgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWxGb3JUYWJsZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsRm9ySXBYKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLkhPUklaT05UQUxfSVBYID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuSE9SSVpPTlRBTF9JUFg7XHJcblxyXG4gICAgICAgIENvbnN0YW50cy5SZXNwb25zaXZlLmNhbGN1bGF0ZWRYID0gLTE4MDtcclxuICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkWSA9IC0xMjU7XHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFNjYWxlID0gMS4yO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLk9wZW5TY2VuZS5zY2FsZSA9IDE7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5CRy5zY2FsZSA9IDE7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuT3BlblNjZW5lLnNjYWxlID0gMC45O1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRvbGwueCA9IC0yMDBcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRvbGwueSA9IC0xODA7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5Eb2xsLnNjYWxlID0gMS40O1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRG9sbFBvaW50Lm5vZGUuc2NhbGUgPSAwLjg7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5Eb2xsUG9pbnQubm9kZS55ID0gLTYwO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLk9wcG9uZW50LnggPSAxODBcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLk9wcG9uZW50LnkgPSAyMDtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLk9wcG9uZW50LnNjYWxlID0gMC40ODtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5EcmVzc1VwQmdfMS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRyZXNzVXBCZ18yLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRHJlc3NVcFBpY2tUcmF5LnggPSAxNTA7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5EcmVzc1VwUGlja1RyYXkueSA9IDcwO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRHJlc3NVcFBpY2tUcmF5LnNjYWxlID0gMC40O1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRyZXNzVXBUZXh0LnNjYWxlID0gMC42O1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRHJlc3NVcFRleHQueCA9IDE1MDtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRyZXNzVXBUZXh0LnkgPSAxNTA7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRHJlc3NVcF9CdG5JbnN0YWxsLnNjYWxlID0gMC40O1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRHJlc3NVcF9CdG5JbnN0YWxsLnggPSAxNTA7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5EcmVzc1VwX0J0bkluc3RhbGwueSA9IC0xOTA7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuQnRuX1N1Ym1pdC5zY2FsZSA9IDAuNDU7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5CdG5fU3VibWl0LnggPSAxNTA7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5CdG5fU3VibWl0LnkgPSAtMTMwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbEZvclRhYmxldCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5IT1JJWk9OVEFMX1RBQkxFVCA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLkhPUklaT05UQUxfVEFCTEVUO1xyXG4gICAgICAgIENvbnN0YW50cy5SZXNwb25zaXZlLmNhbGN1bGF0ZWRYID0gLTE4MDtcclxuICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkWSA9IC0xMjU7XHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFNjYWxlID0gMS4yO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuQkcuc2NhbGUgPSAxO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuT3BlblNjZW5lLnNjYWxlID0gMC45O1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRvbGwueCA9IC0yMDBcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRvbGwueSA9IC0xODA7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5Eb2xsLnNjYWxlID0gMS40O1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRG9sbFBvaW50Lm5vZGUuc2NhbGUgPSAwLjg7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5Eb2xsUG9pbnQubm9kZS55ID0gLTYwO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLk9wcG9uZW50LnggPSAxODBcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLk9wcG9uZW50LnkgPSAyNTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLk9wcG9uZW50LnNjYWxlID0gMC40ODtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5EcmVzc1VwQmdfMS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRyZXNzVXBCZ18yLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRHJlc3NVcFBpY2tUcmF5LnggPSAxMjA7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5EcmVzc1VwUGlja1RyYXkueSA9IDcwO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRHJlc3NVcFBpY2tUcmF5LnNjYWxlID0gMC4zO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRyZXNzVXBUZXh0LnNjYWxlID0gMC40NTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRyZXNzVXBUZXh0LnggPSAxMjA7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5EcmVzc1VwVGV4dC55ID0gMTUwO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRyZXNzVXBfQnRuSW5zdGFsbC5zY2FsZSA9IDAuNDtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRyZXNzVXBfQnRuSW5zdGFsbC54ID0gMTIwO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRHJlc3NVcF9CdG5JbnN0YWxsLnkgPSAtMTkwO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkJ0bl9TdWJtaXQuc2NhbGUgPSAwLjQ1O1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuQnRuX1N1Ym1pdC54ID0gMTIwO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuQnRuX1N1Ym1pdC55ID0gLTEyMDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRWZXJ0aWNhbCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0IDwgMC41KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SXBob25lWCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TW9iaWxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0SXBob25lWCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5WRVJUSUNBTF9JUFggPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gdGhpcy5WRVJUSUNBTF9JUFg7XHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFggPSAtODA7XHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFkgPSAtMTk1O1xyXG4gICAgICAgIENvbnN0YW50cy5SZXNwb25zaXZlLmNhbGN1bGF0ZWRTY2FsZSA9IDEuMDU7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuQkcuc2NhbGUgPSAxLjM7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuT3BlblNjZW5lLnNjYWxlID0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5Eb2xsLnggPSAtMFxyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRG9sbC55ID0gLTA7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5Eb2xsLnNjYWxlID0gMTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRvbGxQb2ludC5ub2RlLnNjYWxlID0gMC44O1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRG9sbFBvaW50Lm5vZGUueSA9IC05MDtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5PcHBvbmVudC54ID0gODBcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLk9wcG9uZW50LnkgPSAtODU7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5PcHBvbmVudC5zY2FsZSA9IDAuNDU7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRHJlc3NVcEJnXzEuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRyZXNzVXBCZ18xLnNjYWxlID0gMC40NTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRyZXNzVXBCZ18yLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRyZXNzVXBQaWNrVHJheS54ID0gMDtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRyZXNzVXBQaWNrVHJheS55ID0gLTc5LjY7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5EcmVzc1VwUGlja1RyYXkuc2NhbGUgPSAwLjM7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRHJlc3NVcFRleHQuc2NhbGUgPSAwLjMzO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRHJlc3NVcFRleHQueCA9IDA7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5EcmVzc1VwVGV4dC55ID0gLTIzMDtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5EcmVzc1VwX0J0bkluc3RhbGwuc2NhbGUgPSAwLjM7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5EcmVzc1VwX0J0bkluc3RhbGwueCA9IDA7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5EcmVzc1VwX0J0bkluc3RhbGwueSA9IC0zMDA7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuQnRuX1N1Ym1pdC5zY2FsZSA9IDAuMzU7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5CdG5fU3VibWl0LnggPSAxMDA7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5CdG5fU3VibWl0LnkgPSAtMTA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0TW9iaWxlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLlZFUlRJQ0FMX01PQklMRSA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuVkVSVElDQUxfTU9CSUxFO1xyXG5cclxuICAgICAgICBpZiAoY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoID4gMS41KSB7XHJcbiAgICAgICAgICAgIC8vIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoIC8gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgPj0gMC42ICYmIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA8IDAuNjIpIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vIG1vYmlsZSBtb2RlIGFwcGxvdmluXHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElwaG9uZSA2IC8gNiBQbHVzIC8gNyAvIDcgUGx1cyAgIFxyXG4gICAgICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkWCA9IC04MDtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFkgPSAtMTQ1O1xyXG4gICAgICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkU2NhbGUgPSAxLjA1O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5PcGVuU2NlbmUuc2NhbGUgPSAxO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5Eb2xsLnggPSAtMFxyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRvbGwueSA9IC0wO1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRvbGwuc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRvbGxQb2ludC5ub2RlLnNjYWxlID0gMC44O1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRvbGxQb2ludC5ub2RlLnkgPSAtOTA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLk9wcG9uZW50LnggPSA4MFxyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLk9wcG9uZW50LnkgPSAtMzU7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuT3Bwb25lbnQuc2NhbGUgPSAwLjQ1O1xyXG4gICAgXHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRHJlc3NVcEJnXzEuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5EcmVzc1VwQmdfMi5hY3RpdmUgPSBmYWxzZTtcclxuICAgIFxyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRyZXNzVXBQaWNrVHJheS54ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5EcmVzc1VwUGlja1RyYXkueSA9IC01OS42O1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRyZXNzVXBQaWNrVHJheS5zY2FsZSA9IDAuMztcclxuICAgIFxyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRyZXNzVXBUZXh0LnNjYWxlID0gMC4zMztcclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5EcmVzc1VwVGV4dC54ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5EcmVzc1VwVGV4dC55ID0gLTIwMDtcclxuICAgIFxyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRyZXNzVXBfQnRuSW5zdGFsbC5zY2FsZSA9IDAuMztcclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5EcmVzc1VwX0J0bkluc3RhbGwueCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRHJlc3NVcF9CdG5JbnN0YWxsLnkgPSAtMjQ1O1xyXG4gICAgXHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuQnRuX1N1Ym1pdC5zY2FsZSA9IDAuMzU7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuQnRuX1N1Ym1pdC54ID0gMTAwO1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkJ0bl9TdWJtaXQueSA9IC0xMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFggPSAtODA7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5SZXNwb25zaXZlLmNhbGN1bGF0ZWRZID0gLTEzMDtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFNjYWxlID0gMC45O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5PcGVuU2NlbmUuc2NhbGUgPSAwLjk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRvbGwueCA9IC0wO1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRvbGwueSA9IDI1O1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRvbGwuc2NhbGUgPSAwLjg7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRG9sbFBvaW50Lm5vZGUuc2NhbGUgPSAwLjg7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRG9sbFBvaW50Lm5vZGUueSA9IC05MDtcclxuICAgIFxyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLk9wcG9uZW50LnggPSA4MFxyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLk9wcG9uZW50LnkgPSAtMzA7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuT3Bwb25lbnQuc2NhbGUgPSAwLjQ7XHJcbiAgICBcclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5EcmVzc1VwQmdfMS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRyZXNzVXBCZ18xLnNjYWxlID0gMC40O1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRyZXNzVXBCZ18yLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRHJlc3NVcFBpY2tUcmF5LnggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRyZXNzVXBQaWNrVHJheS55ID0gLTI5LjY7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRHJlc3NVcFBpY2tUcmF5LnNjYWxlID0gMC4zO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRHJlc3NVcFRleHQuc2NhbGUgPSAwLjMzO1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRyZXNzVXBUZXh0LnggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRyZXNzVXBUZXh0LnkgPSAtMTcwO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRHJlc3NVcF9CdG5JbnN0YWxsLnNjYWxlID0gMC4zO1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRyZXNzVXBfQnRuSW5zdGFsbC54ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5EcmVzc1VwX0J0bkluc3RhbGwueSA9IC0yMTA7XHJcbiAgICBcclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5CdG5fU3VibWl0LnNjYWxlID0gMC4zNTtcclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5CdG5fU3VibWl0LnggPSAxMTA7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuQnRuX1N1Ym1pdC55ID0gMjA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhhbmRsZVJvdGF0ZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/Ultils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '03f2ceupvBEfa9putmH215T', 'Ultils');
// Script/Data/Ultils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ultils = void 0;
var constants_1 = require("./constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var checkCollideBubblePoints = function (bdx) {
    for (var i = 0; i < constants_1.Constants.cleanHair_Points.length; i++) {
        var currentNode = constants_1.Constants.cleanHair_Points[i];
        if (currentNode.getBoundingBox().intersects(bdx)) {
            constants_1.Constants.isTouchCleanHair = true;
            for (var j = 0; j < constants_1.Constants.cleanHair_PointsStatus.length; j++) {
                if (!constants_1.Constants.cleanHair_PointsStatus[j]) {
                    constants_1.Constants.cleanHair_PointsStatus[j] = true;
                    constants_1.Constants.cleanHair_Points.splice(i, 1);
                    constants_1.Constants.spine_Bubbles[i].setAnimation(0, "action03_only_bubble", false);
                    constants_1.Constants.spine_Bubbles.splice(i, 1);
                    if (constants_1.Constants.cleanHair_PointsStatus.every(function (status) { return status === true; })) {
                        constants_1.Constants.isDoneCleanHair = true;
                    }
                    break;
                }
            }
            break;
        }
    }
};
var checkCollideMaggot = function (bdx, maggot) {
    if (bdx.intersects(maggot)) {
        constants_1.Constants.isTouchMaggot = true;
    }
};
var TouchArea = {
// checkCollideBubblePoints: checkCollideBubblePoints,
// checkCollideMaggot: checkCollideMaggot
};
var Ultils = /** @class */ (function () {
    function Ultils() {
    }
    Ultils.TouchArea = TouchArea;
    return Ultils;
}());
exports.Ultils = Ultils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxVbHRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXdDO0FBRWxDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDLElBQU0sd0JBQXdCLEdBQUcsVUFBQyxHQUFZO0lBQzFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxxQkFBUyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN4RCxJQUFJLFdBQVcsR0FBRyxxQkFBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM5QyxxQkFBUyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztZQUNsQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcscUJBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzlELElBQUksQ0FBQyxxQkFBUyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUN0QyxxQkFBUyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDM0MscUJBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUV4QyxxQkFBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUMxRSxxQkFBUyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUVyQyxJQUFJLHFCQUFTLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxLQUFLLElBQUksRUFBZixDQUFlLENBQUMsRUFBRTt3QkFDbkUscUJBQVMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO3FCQUNwQztvQkFDRCxNQUFNO2lCQUNUO2FBQ0o7WUFDRCxNQUFNO1NBQ1Q7S0FDSjtBQUNMLENBQUMsQ0FBQTtBQUVELElBQU0sa0JBQWtCLEdBQUcsVUFBQyxHQUFZLEVBQUUsTUFBZTtJQUNyRCxJQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDdkIscUJBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0tBQ2xDO0FBQ0wsQ0FBQyxDQUFBO0FBRUQsSUFBTSxTQUFTLEdBQUc7QUFDZCxzREFBc0Q7QUFDdEQseUNBQXlDO0NBQzVDLENBQUE7QUFFRDtJQUFBO0lBSUEsQ0FBQztJQUZTLGdCQUFTLEdBQXFCLFNBQVMsQ0FBQztJQUVsRCxhQUFDO0NBSkQsQUFJQyxJQUFBO0FBSlksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5cclxuY29uc3QgY2hlY2tDb2xsaWRlQnViYmxlUG9pbnRzID0gKGJkeDogY2MuUmVjdCk6IHZvaWQgPT4ge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDb25zdGFudHMuY2xlYW5IYWlyX1BvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IENvbnN0YW50cy5jbGVhbkhhaXJfUG9pbnRzW2ldO1xyXG4gICAgICAgIGlmIChjdXJyZW50Tm9kZS5nZXRCb3VuZGluZ0JveCgpLmludGVyc2VjdHMoYmR4KSkge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNUb3VjaENsZWFuSGFpciA9IHRydWU7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQ29uc3RhbnRzLmNsZWFuSGFpcl9Qb2ludHNTdGF0dXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICghQ29uc3RhbnRzLmNsZWFuSGFpcl9Qb2ludHNTdGF0dXNbal0pIHtcclxuICAgICAgICAgICAgICAgICAgICBDb25zdGFudHMuY2xlYW5IYWlyX1BvaW50c1N0YXR1c1tqXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29uc3RhbnRzLmNsZWFuSGFpcl9Qb2ludHMuc3BsaWNlKGksIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBDb25zdGFudHMuc3BpbmVfQnViYmxlc1tpXS5zZXRBbmltYXRpb24oMCwgXCJhY3Rpb24wM19vbmx5X2J1YmJsZVwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29uc3RhbnRzLnNwaW5lX0J1YmJsZXMuc3BsaWNlKGksIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoQ29uc3RhbnRzLmNsZWFuSGFpcl9Qb2ludHNTdGF0dXMuZXZlcnkoc3RhdHVzID0+IHN0YXR1cyA9PT0gdHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uc3RhbnRzLmlzRG9uZUNsZWFuSGFpciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgY2hlY2tDb2xsaWRlTWFnZ290ID0gKGJkeDogY2MuUmVjdCwgbWFnZ290OiBjYy5SZWN0KTogdm9pZCA9PiB7XHJcbiAgICBpZihiZHguaW50ZXJzZWN0cyhtYWdnb3QpKSB7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlzVG91Y2hNYWdnb3QgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBUb3VjaEFyZWEgPSB7XHJcbiAgICAvLyBjaGVja0NvbGxpZGVCdWJibGVQb2ludHM6IGNoZWNrQ29sbGlkZUJ1YmJsZVBvaW50cyxcclxuICAgIC8vIGNoZWNrQ29sbGlkZU1hZ2dvdDogY2hlY2tDb2xsaWRlTWFnZ290XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVbHRpbHMge1xyXG5cclxuICAgc3RhdGljIFRvdWNoQXJlYTogdHlwZW9mIFRvdWNoQXJlYSA9IFRvdWNoQXJlYTtcclxuXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '459a6fkmHFH5Z+5+z1O55SB', 'GameController');
// Script/Controller/GameController.ts

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
exports.GameController = void 0;
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        return _this;
    }
    GameController.prototype.onLoad = function () {
    };
    GameController.prototype.start = function () {
        window.gameReady && window.gameReady();
    };
    GameController.prototype.installHandle = function () {
        console.log("install");
        constants_1.Constants.ironSource.isEndGame = true;
        this.AudioManager.stopAllSound();
        window.gameEnd && window.gameEnd();
        //If ad network is tiktok
        if (typeof (playableSDK) != "undefined") {
            window.playableSDK.openAppStore();
            return;
        }
        // If ad network is google ads
        if (typeof (ExitApi) != "undefined") {
            ExitApi.exit();
            return;
        }
        // If ad netwrok is ironsources
        if (typeof (dapi) != "undefined") {
            dapi.openStoreUrl();
            return;
        }
        // If ad network support MRAID 2.0
        if (typeof (mraid) != "undefined") {
            if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.ANDROID) {
                mraid.open("https://play.google.com/store/apps/details?id=com.makeupbattle.dressup");
                return;
            }
            if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
                mraid.open("https://itunes.apple.com/us/app/id1627374569?mt=8");
                return;
            }
            mraid.open("https://play.google.com/store/apps/details?id=com.makeupbattle.dressup");
            return;
        }
        // If ad network is mindwork. window alway avaiable so skip undefined check
        window.install && window.install();
    };
    __decorate([
        property(AudioManager_1.default)
    ], GameController.prototype, "AudioManager", void 0);
    GameController = __decorate([
        ccclass
    ], GameController);
    return GameController;
}(cc.Component));
exports.GameController = GameController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUc1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQyxrQ0FBWTtJQUFoRDtRQUFBLHFFQXNEQztRQXBERyxrQkFBWSxHQUFpQixJQUFJLENBQUM7O0lBb0R0QyxDQUFDO0lBbERhLCtCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUVTLDhCQUFLLEdBQWY7UUFDSSxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRU0sc0NBQWEsR0FBcEI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLHFCQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqQyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVuQyx5QkFBeUI7UUFDekIsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQ3JDLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbEMsT0FBTztTQUNWO1FBRUQsOEJBQThCO1FBQzlCLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLFdBQVcsRUFBRTtZQUNqQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZixPQUFPO1NBQ1Y7UUFFRCwrQkFBK0I7UUFDL0IsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixPQUFPO1NBQ1Y7UUFFRCxrQ0FBa0M7UUFDbEMsSUFBSSxPQUFNLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQy9ELEtBQUssQ0FBQyxJQUFJLENBQUMsd0VBQXdFLENBQUMsQ0FBQztnQkFDckYsT0FBTzthQUNWO1lBRUQsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtnQkFDdEYsS0FBSyxDQUFDLElBQUksQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO2dCQUNoRSxPQUFPO2FBQ1Y7WUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLHdFQUF3RSxDQUFDLENBQUM7WUFDckYsT0FBTztTQUNWO1FBQ0QsMkVBQTJFO1FBQzNFLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFuREQ7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQzt3REFDVztJQUZ6QixjQUFjO1FBRDFCLE9BQU87T0FDSyxjQUFjLENBc0QxQjtJQUFELHFCQUFDO0NBdERELEFBc0RDLENBdERtQyxFQUFFLENBQUMsU0FBUyxHQXNEL0M7QUF0RFksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbiBcclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIEdhbWVDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnN0YWxsSGFuZGxlKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5zdGFsbFwiKTtcclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BBbGxTb3VuZCgpO1xyXG4gICAgICAgIHdpbmRvdy5nYW1lRW5kICYmIHdpbmRvdy5nYW1lRW5kKCk7XHJcblxyXG4gICAgICAgIC8vSWYgYWQgbmV0d29yayBpcyB0aWt0b2tcclxuICAgICAgICBpZiAodHlwZW9mIChwbGF5YWJsZVNESykgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB3aW5kb3cucGxheWFibGVTREsub3BlbkFwcFN0b3JlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdvcmsgaXMgZ29vZ2xlIGFkc1xyXG4gICAgICAgIGlmICh0eXBlb2YgKEV4aXRBcGkpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgRXhpdEFwaS5leGl0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdyb2sgaXMgaXJvbnNvdXJjZXNcclxuICAgICAgICBpZiAodHlwZW9mIChkYXBpKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGRhcGkub3BlblN0b3JlVXJsKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdvcmsgc3VwcG9ydCBNUkFJRCAyLjBcclxuICAgICAgICBpZiAodHlwZW9mKG1yYWlkKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQgfHwgY2Muc3lzLm9zID09IGNjLnN5cy5BTkRST0lEKSB7XHJcbiAgICAgICAgICAgICAgICBtcmFpZC5vcGVuKFwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5tYWtldXBiYXR0bGUuZHJlc3N1cFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TIHx8IGNjLnN5cy5vcyA9PSBjYy5zeXMuSVBIT05FIHx8IGNjLnN5cy5vcyA9PSBjYy5zeXMuSVBBRCkge1xyXG4gICAgICAgICAgICAgICAgbXJhaWQub3BlbihcImh0dHBzOi8vaXR1bmVzLmFwcGxlLmNvbS91cy9hcHAvaWQxNjI3Mzc0NTY5P210PThcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1yYWlkLm9wZW4oXCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLm1ha2V1cGJhdHRsZS5kcmVzc3VwXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdvcmsgaXMgbWluZHdvcmsuIHdpbmRvdyBhbHdheSBhdmFpYWJsZSBzbyBza2lwIHVuZGVmaW5lZCBjaGVja1xyXG4gICAgICAgIHdpbmRvdy5pbnN0YWxsICYmIHdpbmRvdy5pbnN0YWxsKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/NodesContainer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '97c94wUbc5Pebqv3On9B17z', 'NodesContainer');
// Script/Controller/NodesContainer.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NodesContainer = /** @class */ (function (_super) {
    __extends(NodesContainer, _super);
    function NodesContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.BG = null;
        _this.hideMask = null;
        _this.UI = null;
        // Flow
        _this.OpenScene = null;
        _this.DressUpScene = null;
        _this.BattleScene = null;
        _this.CTA = null;
        _this.CTA_Btn = null;
        _this.CTA_Overlay = null;
        // Dress Up Scene
        _this.DressUp_Container = null;
        _this.DressUpBg_1 = null;
        _this.DressUpBg_2 = null;
        _this.DressUpPickTray = null;
        _this.DressUpText = null;
        // Battle Scene
        _this.Doll = null;
        _this.DollPoint = null;
        _this.Opponent = null;
        // Btn
        _this.Btn_Start = null;
        _this.OpenScene_BtnInstall = null;
        _this.DressUp_BtnInstall = null;
        _this.Btn_Submit = null;
        // FX
        _this.FX_Heart = null;
        // Doll Items
        _this.DollDressDefault = null;
        _this.DollHairDefault = null;
        _this.Frame_Icons = [];
        _this.Items = [];
        _this.Dress_Frames = [];
        _this.Doll_Dresses = [];
        _this.Hair_Frames = [];
        _this.Doll_F_Hairs = [];
        _this.Shoe_Frames = [];
        _this.Doll_Shoes = [];
        return _this;
    }
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "BG", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "hideMask", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "UI", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "OpenScene", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "DressUpScene", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "BattleScene", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "CTA", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "CTA_Btn", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "CTA_Overlay", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "DressUp_Container", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "DressUpBg_1", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "DressUpBg_2", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "DressUpPickTray", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "DressUpText", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "Doll", void 0);
    __decorate([
        property(cc.Label)
    ], NodesContainer.prototype, "DollPoint", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "Opponent", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "Btn_Start", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "OpenScene_BtnInstall", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "DressUp_BtnInstall", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "Btn_Submit", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], NodesContainer.prototype, "FX_Heart", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "DollDressDefault", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "DollHairDefault", void 0);
    __decorate([
        property([cc.Node])
    ], NodesContainer.prototype, "Frame_Icons", void 0);
    __decorate([
        property([cc.Node])
    ], NodesContainer.prototype, "Items", void 0);
    __decorate([
        property([cc.Node])
    ], NodesContainer.prototype, "Dress_Frames", void 0);
    __decorate([
        property([cc.Node])
    ], NodesContainer.prototype, "Doll_Dresses", void 0);
    __decorate([
        property([cc.Node])
    ], NodesContainer.prototype, "Hair_Frames", void 0);
    __decorate([
        property([cc.Node])
    ], NodesContainer.prototype, "Doll_F_Hairs", void 0);
    __decorate([
        property([cc.Node])
    ], NodesContainer.prototype, "Shoe_Frames", void 0);
    __decorate([
        property([cc.Node])
    ], NodesContainer.prototype, "Doll_Shoes", void 0);
    NodesContainer = __decorate([
        ccclass
    ], NodesContainer);
    return NodesContainer;
}(cc.Component));
exports.default = NodesContainer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxOb2Rlc0NvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQW1GQztRQWpGRyxRQUFFLEdBQVksSUFBSSxDQUFDO1FBRW5CLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsUUFBRSxHQUFZLElBQUksQ0FBQztRQUVuQixPQUFPO1FBRVAsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixTQUFHLEdBQVksSUFBSSxDQUFDO1FBR3BCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsaUJBQWlCO1FBRWpCLHVCQUFpQixHQUFZLElBQUksQ0FBQztRQUVsQyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixxQkFBZSxHQUFZLElBQUksQ0FBQztRQUVoQyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixlQUFlO1FBRWYsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsTUFBTTtRQUVOLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsMEJBQW9CLEdBQVksSUFBSSxDQUFDO1FBRXJDLHdCQUFrQixHQUFZLElBQUksQ0FBQztRQUVuQyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixLQUFLO1FBRUwsY0FBUSxHQUFzQixJQUFJLENBQUM7UUFFbkMsYUFBYTtRQUViLHNCQUFnQixH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RTVCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO3NEQUNPO0lBbEZWLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FtRmxDO0lBQUQscUJBQUM7Q0FuRkQsQUFtRkMsQ0FuRjJDLEVBQUUsQ0FBQyxTQUFTLEdBbUZ2RDtrQkFuRm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZXNDb250YWluZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBCRzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhpZGVNYXNrOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgVUk6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIEZsb3dcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgT3BlblNjZW5lOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgRHJlc3NVcFNjZW5lOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQmF0dGxlU2NlbmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDVEE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ1RBX0J0bjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIENUQV9PdmVybGF5OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy8gRHJlc3MgVXAgU2NlbmVcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgRHJlc3NVcF9Db250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBEcmVzc1VwQmdfMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIERyZXNzVXBCZ18yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgRHJlc3NVcFBpY2tUcmF5OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgRHJlc3NVcFRleHQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIEJhdHRsZSBTY2VuZVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBEb2xsOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIERvbGxQb2ludDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBPcHBvbmVudDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gQnRuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEJ0bl9TdGFydDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIE9wZW5TY2VuZV9CdG5JbnN0YWxsOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgRHJlc3NVcF9CdG5JbnN0YWxsOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQnRuX1N1Ym1pdDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gRlhcclxuICAgIEBwcm9wZXJ0eShjYy5QYXJ0aWNsZVN5c3RlbSlcclxuICAgIEZYX0hlYXJ0OiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XHJcblxyXG4gICAgLy8gRG9sbCBJdGVtc1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBEb2xsRHJlc3NEZWZhdWx0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgRG9sbEhhaXJEZWZhdWx0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gICAgRnJhbWVfSWNvbnM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIEl0ZW1zOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gICAgRHJlc3NfRnJhbWVzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgICBEb2xsX0RyZXNzZXM6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgICBIYWlyX0ZyYW1lczogY2MuTm9kZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gICAgRG9sbF9GX0hhaXJzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gICAgU2hvZV9GcmFtZXM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIERvbGxfU2hvZXM6IGNjLk5vZGVbXSA9IFtdO1xyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Plugin/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c7cf9rDSJL36cJtz1lUze/', 'AudioManager');
// Script/Plugin/AudioManager.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AudioManager = /** @class */ (function (_super) {
    __extends(AudioManager, _super);
    function AudioManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // sound 
        _this.bgSound = null;
        _this.woaAnimeSound = null;
        _this.openBookSound = null;
        _this.showItemSound = null;
        _this.pickItemSound = null;
        _this.waoGameSound = null;
        _this.swtichItemSound = null;
        _this.chickFunSound = null;
        _this.Fx_Bonus1 = null;
        _this.Fx_Bonus2 = null;
        _this.Fx_Bonus3 = null;
        _this.Fx_Bonus4 = null;
        _this.Fx_Lose = null;
        return _this;
    }
    AudioManager.prototype.playSound = function (soundName) {
        if (constants_1.Constants.ironSource.SoundState) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "chickFunSound":
                    this.chickFunSound.play();
                    break;
                case "woaAnimeSound":
                    this.woaAnimeSound.play();
                    break;
                case "Fx_Lose":
                    this.Fx_Lose.play();
                    break;
                case "Fx_Bonus1":
                    this.Fx_Bonus1.play();
                    break;
                case "Fx_Bonus2":
                    this.Fx_Bonus2.play();
                    break;
                case "Fx_Bonus3":
                    this.Fx_Bonus3.play();
                    break;
                case "Fx_Bonus4":
                    this.Fx_Bonus4.play();
                    break;
                case "openBookSound":
                    this.openBookSound.play();
                    break;
                case "showItemSound":
                    this.showItemSound.play();
                    break;
                case "pickItemSound":
                    this.pickItemSound.play();
                    break;
                case "waoGameSound":
                    this.waoGameSound.play();
                    break;
                case "swtichItemSound":
                    this.swtichItemSound.play();
                    break;
                default:
                    break;
            }
        }
    };
    AudioManager.prototype.stopSound = function (soundName) {
        switch (soundName) {
            case "bgSound":
                this.bgSound.stop();
                break;
            case "woaAnimeSound":
                this.woaAnimeSound.stop();
                break;
            case "chickFunSound":
                this.chickFunSound.stop();
                break;
            case "Fx_Lose":
                this.Fx_Lose.stop();
                break;
            case "openBookSound":
                this.openBookSound.stop();
                break;
            case "Fx_Bonus1":
                this.Fx_Bonus1.stop();
                break;
            case "Fx_Bonus2":
                this.Fx_Bonus2.stop();
                break;
            case "Fx_Bonus3":
                this.Fx_Bonus3.stop();
                break;
            case "Fx_Bonus4":
                this.Fx_Bonus4.stop();
                break;
            case "showItemSound":
                this.showItemSound.stop();
                break;
            case "pickItemSound":
                this.pickItemSound.stop();
                break;
            case "waoGameSound":
                this.waoGameSound.stop();
                break;
            case "swtichItemSound":
                this.swtichItemSound.stop();
                break;
            default:
                break;
        }
    };
    AudioManager.prototype.stopAllSoundExceptBgSound = function () {
        this.showItemSound.stop();
        this.woaAnimeSound.stop();
        this.openBookSound.stop();
        this.pickItemSound.stop();
        this.Fx_Lose.stop();
        this.waoGameSound.stop();
        this.swtichItemSound.stop();
        this.Fx_Bonus1.stop();
        this.Fx_Bonus2.stop();
        this.Fx_Bonus3.stop();
        this.Fx_Bonus4.stop();
    };
    AudioManager.prototype.stopAllSound = function () {
        this.bgSound.stop();
        this.chickFunSound.stop();
        this.Fx_Lose.stop();
        this.showItemSound.stop();
        this.woaAnimeSound.stop();
        this.openBookSound.stop();
        this.pickItemSound.stop();
        this.waoGameSound.stop();
        this.swtichItemSound.stop();
        this.Fx_Bonus1.stop();
        this.Fx_Bonus2.stop();
        this.Fx_Bonus3.stop();
        this.Fx_Bonus4.stop();
    };
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "bgSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "woaAnimeSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "openBookSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "showItemSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "pickItemSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "waoGameSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "swtichItemSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "chickFunSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "Fx_Bonus1", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "Fx_Bonus2", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "Fx_Bonus3", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "Fx_Bonus4", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "Fx_Lose", void 0);
    AudioManager = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
}(cc.Component));
exports.default = AudioManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXEF1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFJNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUE0SkM7UUExSkcsU0FBUztRQUVULGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLG1CQUFhLEdBQW1CLElBQUksQ0FBQztRQUVyQyxtQkFBYSxHQUFtQixJQUFJLENBQUM7UUFFckMsbUJBQWEsR0FBbUIsSUFBSSxDQUFDO1FBRXJDLG1CQUFhLEdBQW1CLElBQUksQ0FBQztRQUVyQyxrQkFBWSxHQUFtQixJQUFJLENBQUM7UUFFcEMscUJBQWUsR0FBbUIsSUFBSSxDQUFDO1FBRXZDLG1CQUFhLEdBQW1CLElBQUksQ0FBQztRQUdyQyxlQUFTLEdBQW1CLElBQUksQ0FBQztRQUVqQyxlQUFTLEdBQW1CLElBQUksQ0FBQztRQUVqQyxlQUFTLEdBQW1CLElBQUksQ0FBQztRQUVqQyxlQUFTLEdBQW1CLElBQUksQ0FBQztRQUdqQyxhQUFPLEdBQW1CLElBQUksQ0FBQzs7SUE4SG5DLENBQUM7SUE1SFUsZ0NBQVMsR0FBaEIsVUFBaUIsU0FBaUI7UUFFOUIsSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7WUFDakMsUUFBUSxTQUFTLEVBQUU7Z0JBQ2YsS0FBSyxTQUFTO29CQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3BCLE1BQU07Z0JBQ04sS0FBSyxlQUFlO29CQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUMxQixNQUFNO2dCQUNkLEtBQUssZUFBZTtvQkFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJ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LElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQXZKRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2lEQUNNO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7dURBQ1k7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt1REFDWTtJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3VEQUNZO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7dURBQ1k7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztzREFDVztJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3lEQUNjO0lBRXZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7dURBQ1k7SUFHckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzttREFDUTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO21EQUNRO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7bURBQ1E7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzttREFDUTtJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2lEQUNNO0lBOUJkLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0E0SmhDO0lBQUQsbUJBQUM7Q0E1SkQsQUE0SkMsQ0E1SnlDLEVBQUUsQ0FBQyxTQUFTLEdBNEpyRDtrQkE1Sm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpb01hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIHNvdW5kIFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgYmdTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgd29hQW5pbWVTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgb3BlbkJvb2tTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgc2hvd0l0ZW1Tb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgcGlja0l0ZW1Tb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgd2FvR2FtZVNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBzd3RpY2hJdGVtU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIGNoaWNrRnVuU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBGeF9Cb251czE6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIEZ4X0JvbnVzMjogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgRnhfQm9udXMzOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBGeF9Cb251czQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBGeF9Mb3NlOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHBsYXlTb3VuZChzb3VuZE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHNvdW5kTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImJnU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJnU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjaGlja0Z1blNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hpY2tGdW5Tb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIndvYUFuaW1lU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndvYUFuaW1lU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJGeF9Mb3NlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuRnhfTG9zZS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkZ4X0JvbnVzMVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuRnhfQm9udXMxLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJGeF9Cb251czJcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkZ4X0JvbnVzMi5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiRnhfQm9udXMzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5GeF9Cb251czMucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkZ4X0JvbnVzNFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuRnhfQm9udXM0LnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJvcGVuQm9va1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuQm9va1NvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzaG93SXRlbVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SXRlbVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJwaWNrSXRlbVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5waWNrSXRlbVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ3YW9HYW1lU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndhb0dhbWVTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwic3d0aWNoSXRlbVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zd3RpY2hJdGVtU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RvcFNvdW5kKHNvdW5kTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoIChzb3VuZE5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImJnU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYmdTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIndvYUFuaW1lU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMud29hQW5pbWVTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJjaGlja0Z1blNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlja0Z1blNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJGeF9Mb3NlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5GeF9Mb3NlLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm9wZW5Cb29rU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlbkJvb2tTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJGeF9Cb251czFcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkZ4X0JvbnVzMS5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiRnhfQm9udXMyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5GeF9Cb251czIuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkZ4X0JvbnVzM1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuRnhfQm9udXMzLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJGeF9Cb251czRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkZ4X0JvbnVzNC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzaG93SXRlbVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dJdGVtU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwaWNrSXRlbVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tJdGVtU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3YW9HYW1lU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMud2FvR2FtZVNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic3d0aWNoSXRlbVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN3dGljaEl0ZW1Tb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0b3BBbGxTb3VuZEV4Y2VwdEJnU291bmQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zaG93SXRlbVNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLndvYUFuaW1lU291bmQuc3RvcCgpOyBcclxuICAgICAgICB0aGlzLm9wZW5Cb29rU291bmQuc3RvcCgpOyBcclxuICAgICAgICB0aGlzLnBpY2tJdGVtU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuRnhfTG9zZS5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy53YW9HYW1lU291bmQuc3RvcCgpOyBcclxuICAgICAgICB0aGlzLnN3dGljaEl0ZW1Tb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5GeF9Cb251czEuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuRnhfQm9udXMyLnN0b3AoKTtcclxuICAgICAgICB0aGlzLkZ4X0JvbnVzMy5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5GeF9Cb251czQuc3RvcCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RvcEFsbFNvdW5kKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmdTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5jaGlja0Z1blNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLkZ4X0xvc2Uuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuc2hvd0l0ZW1Tb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy53b2FBbmltZVNvdW5kLnN0b3AoKTsgdGhpcy5vcGVuQm9va1NvdW5kLnN0b3AoKTsgdGhpcy5waWNrSXRlbVNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLndhb0dhbWVTb3VuZC5zdG9wKCk7IHRoaXMuc3d0aWNoSXRlbVNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLkZ4X0JvbnVzMS5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5GeF9Cb251czIuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuRnhfQm9udXMzLnN0b3AoKTtcclxuICAgICAgICB0aGlzLkZ4X0JvbnVzNC5zdG9wKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/constants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eaccb/69FZDu6rC4YmR+uAW', 'constants');
// Script/Data/constants.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Event;
(function (Event) {
    Event["touchStart"] = "touchstart";
    Event["touchMove"] = "touchmove";
    Event["touchEnd"] = "touchend";
    Event["touchCancel"] = "touchcancel";
})(Event || (Event = {}));
var IronSource = {
    // ironsource 
    SoundState: true,
    State: 1,
    isEndGame: false,
    isPlayBgSound: false,
};
var Responsive = {
    calculatedY: 0,
    calculatedX: 0,
    currentDevice: "",
    calculatedScale: 0,
};
var SoundTrack;
(function (SoundTrack) {
    SoundTrack["bgSound"] = "bgSound";
    SoundTrack["woaAnimeSound"] = "woaAnimeSound";
    SoundTrack["openBookSound"] = "openBookSound";
    SoundTrack["showItemSound"] = "showItemSound";
    SoundTrack["pickItemSound"] = "pickItemSound";
    SoundTrack["waoGameSound"] = "waoGameSound";
    SoundTrack["swtichItemSound"] = "swtichItemSound";
    SoundTrack["Fx_Bonus1"] = "Fx_Bonus1";
    SoundTrack["Fx_Bonus2"] = "Fx_Bonus2";
    SoundTrack["Fx_Bonus3"] = "Fx_Bonus3";
    SoundTrack["Fx_Bonus4"] = "Fx_Bonus4";
    SoundTrack["Fx_Lose"] = "Fx_Lose";
    SoundTrack["chickFunSound"] = "chickFunSound";
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    Constants.isStartCalculate = false;
    Constants.isRotate = false;
    Constants.isCanTouch = true;
    Constants.isDresUp = false;
    Constants.isShowBtnSubmit = false;
    Constants.isClickStartBtn = false;
    // event
    Constants.Event = Event;
    // SoundTrack
    Constants.SoundTrack = SoundTrack;
    // ironSource
    Constants.ironSource = IronSource;
    // Responsive
    Constants.Responsive = Responsive;
    return Constants;
}());
exports.Constants = Constants;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxLQUtKO0FBTEQsV0FBSyxLQUFLO0lBQ04sa0NBQXlCLENBQUE7SUFDekIsZ0NBQXVCLENBQUE7SUFDdkIsOEJBQXFCLENBQUE7SUFDckIsb0NBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQUxJLEtBQUssS0FBTCxLQUFLLFFBS1Q7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLGNBQWM7SUFDZCxVQUFVLEVBQUUsSUFBSTtJQUNoQixLQUFLLEVBQUUsQ0FBQztJQUNSLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLGFBQWEsRUFBRSxLQUFLO0NBQ3ZCLENBQUE7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLFdBQVcsRUFBRSxDQUFDO0lBQ2QsV0FBVyxFQUFFLENBQUM7SUFDZCxhQUFhLEVBQUUsRUFBRTtJQUNqQixlQUFlLEVBQUUsQ0FBQztDQUNyQixDQUFBO0FBR0QsSUFBSyxVQWNKO0FBZEQsV0FBSyxVQUFVO0lBQ1gsaUNBQW1CLENBQUE7SUFDbkIsNkNBQStCLENBQUE7SUFDL0IsNkNBQStCLENBQUE7SUFDL0IsNkNBQStCLENBQUE7SUFDL0IsNkNBQStCLENBQUE7SUFDL0IsMkNBQTZCLENBQUE7SUFDN0IsaURBQW1DLENBQUE7SUFDbkMscUNBQXVCLENBQUE7SUFDdkIscUNBQXVCLENBQUE7SUFDdkIscUNBQXVCLENBQUE7SUFDdkIscUNBQXVCLENBQUE7SUFDdkIsaUNBQW1CLENBQUE7SUFDbkIsNkNBQStCLENBQUE7QUFDbkMsQ0FBQyxFQWRJLFVBQVUsS0FBVixVQUFVLFFBY2Q7QUFHRDtJQUFBO0lBeUJBLENBQUM7SUF2QkcsWUFBWTtJQUNMLDBCQUFnQixHQUFZLEtBQUssQ0FBQztJQUNsQyxrQkFBUSxHQUFZLEtBQUssQ0FBQztJQUMxQixvQkFBVSxHQUFZLElBQUksQ0FBQztJQUMzQixrQkFBUSxHQUFZLEtBQUssQ0FBQztJQUMxQix5QkFBZSxHQUFZLEtBQUssQ0FBQztJQUNqQyx5QkFBZSxHQUFZLEtBQUssQ0FBQztJQUV4QyxRQUFRO0lBQ0QsZUFBSyxHQUFpQixLQUFLLENBQUM7SUFHbkMsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUdsRCxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBR2xELGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFFdEQsZ0JBQUM7Q0F6QkQsQUF5QkMsSUFBQTtBQXpCWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZW51bSBFdmVudCB7XHJcbiAgICB0b3VjaFN0YXJ0ID0gXCJ0b3VjaHN0YXJ0XCIsXHJcbiAgICB0b3VjaE1vdmUgPSBcInRvdWNobW92ZVwiLFxyXG4gICAgdG91Y2hFbmQgPSBcInRvdWNoZW5kXCIsXHJcbiAgICB0b3VjaENhbmNlbCA9IFwidG91Y2hjYW5jZWxcIlxyXG59XHJcblxyXG5cclxuY29uc3QgSXJvblNvdXJjZSA9IHtcclxuICAgIC8vIGlyb25zb3VyY2UgXHJcbiAgICBTb3VuZFN0YXRlOiB0cnVlLFxyXG4gICAgU3RhdGU6IDEsXHJcbiAgICBpc0VuZEdhbWU6IGZhbHNlLFxyXG4gICAgaXNQbGF5QmdTb3VuZDogZmFsc2UsXHJcbn1cclxuXHJcblxyXG5jb25zdCBSZXNwb25zaXZlID0ge1xyXG4gICAgY2FsY3VsYXRlZFk6IDAsXHJcbiAgICBjYWxjdWxhdGVkWDogMCxcclxuICAgIGN1cnJlbnREZXZpY2U6IFwiXCIsXHJcbiAgICBjYWxjdWxhdGVkU2NhbGU6IDAsXHJcbn1cclxuXHJcblxyXG5lbnVtIFNvdW5kVHJhY2sge1xyXG4gICAgYmdTb3VuZCA9IFwiYmdTb3VuZFwiLFxyXG4gICAgd29hQW5pbWVTb3VuZCA9IFwid29hQW5pbWVTb3VuZFwiLFxyXG4gICAgb3BlbkJvb2tTb3VuZCA9IFwib3BlbkJvb2tTb3VuZFwiLFxyXG4gICAgc2hvd0l0ZW1Tb3VuZCA9IFwic2hvd0l0ZW1Tb3VuZFwiLFxyXG4gICAgcGlja0l0ZW1Tb3VuZCA9IFwicGlja0l0ZW1Tb3VuZFwiLFxyXG4gICAgd2FvR2FtZVNvdW5kID0gXCJ3YW9HYW1lU291bmRcIixcclxuICAgIHN3dGljaEl0ZW1Tb3VuZCA9IFwic3d0aWNoSXRlbVNvdW5kXCIsXHJcbiAgICBGeF9Cb251czEgPSBcIkZ4X0JvbnVzMVwiLFxyXG4gICAgRnhfQm9udXMyID0gXCJGeF9Cb251czJcIixcclxuICAgIEZ4X0JvbnVzMyA9IFwiRnhfQm9udXMzXCIsXHJcbiAgICBGeF9Cb251czQgPSBcIkZ4X0JvbnVzNFwiLFxyXG4gICAgRnhfTG9zZSA9IFwiRnhfTG9zZVwiLFxyXG4gICAgY2hpY2tGdW5Tb3VuZCA9IFwiY2hpY2tGdW5Tb3VuZFwiXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uc3RhbnRzIHtcclxuXHJcbiAgICAvLyBzdGF0ZSAgICBcclxuICAgIHN0YXRpYyBpc1N0YXJ0Q2FsY3VsYXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNSb3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0NhblRvdWNoOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHN0YXRpYyBpc0RyZXNVcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzU2hvd0J0blN1Ym1pdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzQ2xpY2tTdGFydEJ0bjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8vIGV2ZW50XHJcbiAgICBzdGF0aWMgRXZlbnQ6IHR5cGVvZiBFdmVudCA9IEV2ZW50O1xyXG5cclxuXHJcbiAgICAvLyBTb3VuZFRyYWNrXHJcbiAgICBzdGF0aWMgU291bmRUcmFjazogdHlwZW9mIFNvdW5kVHJhY2sgPSBTb3VuZFRyYWNrO1xyXG5cclxuXHJcbiAgICAvLyBpcm9uU291cmNlXHJcbiAgICBzdGF0aWMgaXJvblNvdXJjZTogdHlwZW9mIElyb25Tb3VyY2UgPSBJcm9uU291cmNlO1xyXG5cclxuXHJcbiAgICAvLyBSZXNwb25zaXZlXHJcbiAgICBzdGF0aWMgUmVzcG9uc2l2ZTogdHlwZW9mIFJlc3BvbnNpdmUgPSBSZXNwb25zaXZlO1xyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
        constants_1.Constants.isClickStartBtn = true;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.swtichItemSound);
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.chickFunSound);
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.bgSound);
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
            constants_1.Constants.isClickStartBtn
                ? this.AudioManager.playSound(constants_1.Constants.SoundTrack.chickFunSound)
                : this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
    };
    GamePlay.prototype.handleMuteSoundIronSource = function () {
        constants_1.Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10);
        if (constants_1.Constants.ironSource.State) {
            if (constants_1.Constants.ironSource.State === 1 && !constants_1.Constants.ironSource.SoundState && !constants_1.Constants.ironSource.isEndGame) {
                constants_1.Constants.ironSource.SoundState = true;
                constants_1.Constants.isClickStartBtn
                    ? this.AudioManager.playSound(constants_1.Constants.SoundTrack.chickFunSound)
                    : this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCxtREFBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF3TUM7UUFyTUMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIscUJBQWUsR0FBVyxDQUFDLENBQUM7O0lBOEw5QixDQUFDO0lBM0xXLHlCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUdTLHdCQUFLLEdBQWY7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNsRCw2REFBNkQ7UUFDN0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFHTyxpQ0FBYyxHQUF0QjtRQUNFLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFHTyw2Q0FBMEIsR0FBbEM7UUFDRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO2FBQ3BDLGFBQWEsQ0FDWixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO2FBQ3BDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUM7YUFDdkIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVB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QUMsV0FBVyxDQUFDLE9BQUksQ0FBQztZQUMzRSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVE7aUJBQzNCLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBTSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBSSxDQUFDO1NBQ3RHO1FBRUQsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7SUFDckMsQ0FBQztJQW5NRDtRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDO2tEQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLHdCQUFjLENBQUM7b0RBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsK0JBQWMsQ0FBQztvREFDYTtJQVBuQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBd001QjtJQUFELGVBQUM7Q0F4TUQsQUF3TUMsQ0F4TXFDLEVBQUUsQ0FBQyxTQUFTLEdBd01qRDtrQkF4TW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBOb2Rlc0NvbnRhaW5lciBmcm9tIFwiLi9Ob2Rlc0NvbnRhaW5lclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQbGF5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KE5vZGVzQ29udGFpbmVyKVxyXG4gIE5vZGVzQ29udGFpbmVyOiBOb2Rlc0NvbnRhaW5lciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG4gIGRvbGxQcmVjZW50OiBudW1iZXIgPSAwO1xyXG4gIG9wcG9uZW50UHJlY2VudDogbnVtYmVyID0gMDtcclxuXHJcblxyXG4gIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuRG9sbFBvaW50Lm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICB0aGlzLmhhbmRsZUdhbWVQbGF5KCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVHYW1lUGxheSgpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZlQmxpbmtBbmltRm9yQnRuU3RhcnQoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGFjdGl2ZUJsaW5rQW5pbUZvckJ0blN0YXJ0KCk6IHZvaWQge1xyXG4gICAgY2MudHdlZW4odGhpcy5Ob2Rlc0NvbnRhaW5lci5CdG5fU3RhcnQpXHJcbiAgICAgIC5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuTm9kZXNDb250YWluZXIuQnRuX1N0YXJ0KVxyXG4gICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC4zIH0pXHJcbiAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjMyIH0sIHsgZWFzaW5nOiAnZWxhc3RpY091dCcgfSlcclxuICAgICAgKS5zdGFydCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBhY3RpdmVCbGlua0FuaW1Gb3JCdG5TdWJtaXQoKTogdm9pZCB7XHJcbiAgICBDb25zdGFudHMuaXNTaG93QnRuU3VibWl0ID0gdHJ1ZTtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuQnRuX1N1Ym1pdC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgIGlmKENvbnN0YW50cy5pc1JvdGF0ZSkge1xyXG4gICAgICBjYy50d2Vlbih0aGlzLk5vZGVzQ29udGFpbmVyLkJ0bl9TdWJtaXQpXHJcbiAgICAgIC5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuTm9kZXNDb250YWluZXIuQnRuX1N1Ym1pdClcclxuICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuNDUgfSlcclxuICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuNCB9LCB7IGVhc2luZzogJ2VsYXN0aWNPdXQnIH0pXHJcbiAgICAgICkuc3RhcnQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNjLnR3ZWVuKHRoaXMuTm9kZXNDb250YWluZXIuQnRuX1N1Ym1pdClcclxuICAgICAgLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5Ob2Rlc0NvbnRhaW5lci5CdG5fU3VibWl0KVxyXG4gICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC4zNSB9KVxyXG4gICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC4zMiB9LCB7IGVhc2luZzogJ2VsYXN0aWNPdXQnIH0pXHJcbiAgICAgICkuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHBsYXlHcmVhdFNvdW5kKCk6IHZvaWQge1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLnBpY2tJdGVtU291bmQpXHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5waWNrSXRlbVNvdW5kLnZvbHVtZSA9IDAuNTtcclxuICAgIGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KSArIDE7XHJcbiAgICBzd2l0Y2ggKHJhbmRvbSkge1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkZ4X0JvbnVzMSlcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5GeF9Cb251czIpXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMzpcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suRnhfQm9udXMzKVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDQ6XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkZ4X0JvbnVzNClcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgZ29Ub0RyZXNzVXAoKTogdm9pZCB7XHJcbiAgICBDb25zdGFudHMuaXNDbGlja1N0YXJ0QnRuID0gdHJ1ZTtcclxuICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5zd3RpY2hJdGVtU291bmQpO1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNoaWNrRnVuU291bmQpXHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5zdG9wU291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZClcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuT3BlblNjZW5lLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5EcmVzc1VwU2NlbmUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuQkcuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5oYW5kbGVJcm9uU291cmNlUGxheVNvdW5kKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGdvVG9CYXR0bGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2sucGlja0l0ZW1Tb3VuZCk7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRyZXNzVXBfQ29udGFpbmVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5Eb2xsLm9wYWNpdHkgPSAwO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5CRy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5Eb2xsLnNjYWxlID0gQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFNjYWxlO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5Eb2xsLnNldFBvc2l0aW9uKFxyXG4gICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkWCwgXHJcbiAgICAgIENvbnN0YW50cy5SZXNwb25zaXZlLmNhbGN1bGF0ZWRZXHJcbiAgICAgIClcclxuICAgIC8vICFDb25zdGFudHMuaXNSb3RhdGUgJiYgdGhpcy5Ob2Rlc0NvbnRhaW5lci5Eb2xsLnNldFBvc2l0aW9uKC04MCwgLTE0MCk7XHJcbiAgICAvLyBDb25zdGFudHMuaXNSb3RhdGUgJiYgdGhpcy5Ob2Rlc0NvbnRhaW5lci5Eb2xsLnNldFBvc2l0aW9uKC0xODAsIC0xMTApO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyAgICAgIFxyXG4gICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRvbGxQb2ludC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRG9sbFBvaW50LnN0cmluZyA9IGAwICVgO1xyXG4gICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLlVJLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJVSV9TaG93QmF0dGxlXCIpO1xyXG5cclxuICAgICAgLy8gY2FjdWxhdGUgRG9sbCBQb2ludFxyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7Q29uc3RhbnRzLmlzU3RhcnRDYWxjdWxhdGUgPSBmYWxzZVxyXG4gICAgICAgIENvbnN0YW50cy5pc1N0YXJ0Q2FsY3VsYXRlID0gdHJ1ZTtcclxuICAgICAgfSwgMC41KVxyXG5cclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge0NvbnN0YW50cy5pc1N0YXJ0Q2FsY3VsYXRlID0gZmFsc2U7fSwgMS4yKVxyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7Q29uc3RhbnRzLmlzU3RhcnRDYWxjdWxhdGUgPSB0cnVlO30sIDEuNilcclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge0NvbnN0YW50cy5pc1N0YXJ0Q2FsY3VsYXRlID0gZmFsc2U7fSwgMi4yKVxyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7Q29uc3RhbnRzLmlzU3RhcnRDYWxjdWxhdGUgPSB0cnVlO30sIDIuNClcclxuXHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkNUQS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuQ1RBLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJDVEFfQW5pbVwiKTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5Ob2Rlc0NvbnRhaW5lci5DVEFfQnRuKVxyXG4gICAgICAgIC5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgICAgY2MudHdlZW4odGhpcy5Ob2Rlc0NvbnRhaW5lci5DVEFfQnRuKVxyXG4gICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjUgfSlcclxuICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC41MyB9LCB7IGVhc2luZzogJ2VsYXN0aWNPdXQnIH0pXHJcbiAgICAgICAgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkNUQV9CdG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSwgdGhpcyk7XHJcblxyXG4gICAgICAgIC8vIG10ZyAmIGFwcGxvdmluXHJcbiAgICAgICAgLy8gdGhpcy5Ob2Rlc0NvbnRhaW5lci5DVEFfT3ZlcmxheS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlLCB0aGlzKTtcclxuICAgICAgfSwgNS41KVxyXG4gICAgfSwgMSk7XHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBDb25zdGFudHMuaXNTdGFydENhbGN1bGF0ZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suRnhfTG9zZSk7XHJcbiAgICB9LCA0KTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTogdm9pZCB7XHJcbiAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCA9IHRydWU7XHJcbiAgICAgIENvbnN0YW50cy5pc0NsaWNrU3RhcnRCdG4gXHJcbiAgICAgID8gdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNoaWNrRnVuU291bmQpXHJcbiAgICAgIDogdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGhhbmRsZU11dGVTb3VuZElyb25Tb3VyY2UoKTogdm9pZCB7XHJcbiAgICBDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29jb3NTb3VuZFN0YXRlXCIpLCAxMClcclxuXHJcbiAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUpIHtcclxuICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID09PSAxICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUpIHtcclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLmlzQ2xpY2tTdGFydEJ0biBcclxuICAgICAgICA/IHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5jaGlja0Z1blNvdW5kKVxyXG4gICAgICAgIDogdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPT09IDIgJiYgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5zdG9wQWxsU291bmQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgXHJcbiAgICAgIGlmKENvbnN0YW50cy5pc1N0YXJ0Q2FsY3VsYXRlKSB7XHJcbiAgICAgICAgdGhpcy5kb2xsUHJlY2VudCArPSAwLjQ7XHJcbiAgICAgICAgdGhpcy5vcHBvbmVudFByZWNlbnQgKz0gMC42O1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuRG9sbFBvaW50LnN0cmluZyA9IGAke01hdGguZmxvb3IodGhpcy5kb2xsUHJlY2VudCl9ICVgO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuT3Bwb25lbnRcclxuICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJEb2xsUG9pbnRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBgJHtNYXRoLmZsb29yKHRoaXMub3Bwb25lbnRQcmVjZW50KX0gJWA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------
