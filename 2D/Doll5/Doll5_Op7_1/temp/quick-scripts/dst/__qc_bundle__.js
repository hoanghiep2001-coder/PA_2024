
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
        // state
        _this.isCanChangeColor = false;
        _this.itemChangeColor1 = null;
        _this.itemChangeColor2 = null;
        _this.checkClick = 0;
        return _this;
        // protected update(dt: number): void {
        //   this.GamePlay.handleMuteSoundIronSource();
        // }
    }
    TouchAreaController.prototype.onLoad = function () {
    };
    TouchAreaController.prototype.start = function () {
        this.registerEvent();
    };
    TouchAreaController.prototype.registerEvent = function () {
        var _this = this;
        this.NodesContainer.BtnDownload.getChildByName("btnDownload")
            .on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        var _loop_1 = function (index) {
            var frame = this_1.NodesContainer.Frame_Hairs[index];
            frame.on(cc.Node.EventType.TOUCH_START, function () { _this.activeHairOnTouch(index); }, this_1);
        };
        var this_1 = this;
        // hair on click event
        for (var index = 0; index < this.NodesContainer.Frame_Hairs.length; index++) {
            _loop_1(index);
        }
        var _loop_2 = function (index) {
            var frame = this_2.NodesContainer.Frame_Colors[index];
            frame.on(cc.Node.EventType.TOUCH_START, function () { _this.activeColorOnTouch(frame); }, this_2);
        };
        var this_2 = this;
        // color hair on click event
        for (var index = 0; index < this.NodesContainer.Frame_Colors.length; index++) {
            _loop_2(index);
        }
        var _loop_3 = function (index) {
            var frame = this_3.NodesContainer.Frame_Dresses[index];
            frame.on(cc.Node.EventType.TOUCH_START, function () { _this.activeDressOnTouch(index); }, this_3);
        };
        var this_3 = this;
        // dress on click event
        for (var index = 0; index < this.NodesContainer.Frame_Dresses.length; index++) {
            _loop_3(index);
        }
        var _loop_4 = function (index) {
            var frame = this_4.NodesContainer.Frame_Shoes[index];
            frame.on(cc.Node.EventType.TOUCH_START, function () { _this.activeShoeOnTouch(index); }, this_4);
        };
        var this_4 = this;
        // shoe on click event
        for (var index = 0; index < this.NodesContainer.Frame_Shoes.length; index++) {
            _loop_4(index);
        }
        this.NodesContainer.BtnLeft.children[0].on(cc.Node.EventType.TOUCH_START, this.naviagateItems, this);
        this.NodesContainer.BtnRight.children[0].on(cc.Node.EventType.TOUCH_START, this.naviagateItems, this);
        this.NodesContainer.hideMask
            .on(cc.Node.EventType.TOUCH_START, this.hideMaskTouchStart, this);
        this.NodesContainer.Btn_DollCamera.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    };
    TouchAreaController.prototype.hideMaskTouchStart = function () {
        // applovin & mtg
        if ((constants_1.Constants.countClick >= constants_1.Constants.maxClickToStore) || constants_1.Constants.isTakePhoto) {
            this.GameController.installHandle();
            return;
        }
        // ironsource
        // this.handleIronSourcePlaySound();
    };
    TouchAreaController.prototype.activeHairOnTouch = function (index) {
        if (constants_1.Constants.countClick >= constants_1.Constants.maxClickToStore) {
            this.GameController.installHandle();
            return;
        }
        // ironsource
        // this.handleIronSourcePlaySound();
        if (!constants_1.Constants.isDoneStep1)
            constants_1.Constants.currentStep = 1;
        constants_1.Constants.countClick += 1;
        constants_1.Constants.isDoneStep1 = true;
        if (this.checkClick === 2)
            this.checkClick = 0;
        if (this.checkClick === 0) {
            this.GamePlay.playGreatSound();
        }
        this.checkClick += 1;
        var result = index + 1;
        this.NodesContainer.Char_Hairs.forEach(function (hair) { return hair.active = false; });
        this.NodesContainer.Frame_Hairs.forEach(function (frame) { return frame.color = cc.Color.WHITE; });
        this.NodesContainer.Frame_Hairs[index].color = cc.Color.fromHEX(new cc.Color, "#FC8C8C");
        this.NodesContainer.PS_Blink_Head.resetSystem();
        this.NodesContainer.BtnRight.active = true;
        this.NodesContainer.Hand.active = false;
        switch (result) {
            case 1:
                this.isCanChangeColor = false;
                this.NodesContainer.Char_Hairs[2].active = true;
                this.NodesContainer.Char_Hairs[3].active = true;
                break;
            case 2:
                this.isCanChangeColor = false;
                this.NodesContainer.Char_Hairs[4].active = true;
                break;
            case 3:
                this.isCanChangeColor = false;
                this.NodesContainer.Char_Hairs[5].active = true;
                this.NodesContainer.Char_Hairs[6].active = true;
                break;
            case 4:
                this.isCanChangeColor = false;
                this.NodesContainer.Char_Hairs[7].active = true;
                break;
            case 5:
                this.isCanChangeColor = false;
                this.NodesContainer.Char_Hairs[8].active = true;
                this.NodesContainer.Char_Hairs[9].active = true;
                break;
            case 6:
                this.isCanChangeColor = false;
                this.NodesContainer.Char_Hairs[10].active = true;
                this.NodesContainer.Char_Hairs[11].active = true;
                break;
            default:
                break;
        }
        this.activeChangeColor(this.isCanChangeColor);
    };
    TouchAreaController.prototype.activeDressOnTouch = function (index) {
        if (constants_1.Constants.countClick >= constants_1.Constants.maxClickToStore) {
            this.GameController.installHandle();
            return;
        }
        if (!constants_1.Constants.isDoneStep2)
            constants_1.Constants.currentStep = 2;
        constants_1.Constants.countClick += 1;
        constants_1.Constants.isDoneStep2 = true;
        if (this.checkClick === 2)
            this.checkClick = 0;
        if (this.checkClick === 0) {
            this.GamePlay.playGreatSound();
        }
        this.checkClick += 1;
        this.NodesContainer.Char_Dresses.forEach(function (shoe) { return shoe.active = false; });
        this.NodesContainer.Frame_Dresses.forEach(function (frame) { return frame.color = cc.Color.WHITE; });
        this.NodesContainer.Frame_Dresses[index].color = cc.Color.fromHEX(new cc.Color, "#FC8C8C");
        this.NodesContainer.PS_Blink_Base.resetSystem();
        this.NodesContainer.BtnRight.active = true;
        this.NodesContainer.BtnLeft.active = true;
        this.NodesContainer.Char_Dresses[index].active = true;
    };
    TouchAreaController.prototype.activeShoeOnTouch = function (index) {
        if (constants_1.Constants.countClick >= constants_1.Constants.maxClickToStore) {
            this.GameController.installHandle();
            return;
        }
        if (!constants_1.Constants.isDoneStep3)
            constants_1.Constants.currentStep = 3;
        constants_1.Constants.countClick += 1;
        constants_1.Constants.isDoneStep3 = true;
        if (this.checkClick === 2)
            this.checkClick = 0;
        if (this.checkClick === 0) {
            this.GamePlay.playGreatSound();
        }
        this.checkClick += 1;
        this.NodesContainer.Char_Shoes.forEach(function (shoe) { return shoe.active = false; });
        this.NodesContainer.Frame_Shoes.forEach(function (frame) { return frame.color = cc.Color.WHITE; });
        this.NodesContainer.Frame_Shoes[index].color = cc.Color.fromHEX(new cc.Color, "#FC8C8C");
        this.NodesContainer.PS_Blink_Shoe.resetSystem();
        this.NodesContainer.BtnRight.active = true;
        this.NodesContainer.BtnLeft.active = true;
        this.NodesContainer.Char_Shoes[index].active = true;
    };
    TouchAreaController.prototype.activeChangeColor = function (active) {
        active ? this.NodesContainer.ListColor.active = true : this.NodesContainer.ListColor.active = false;
    };
    TouchAreaController.prototype.activeColorOnTouch = function (frame) {
        if (constants_1.Constants.countClick >= constants_1.Constants.maxClickToStore) {
            this.GameController.installHandle();
            return;
        }
        var color = frame.color.toHEX();
        this.itemChangeColor1.color = cc.Color.fromHEX(new cc.Color, color);
        this.itemChangeColor2.color = cc.Color.fromHEX(new cc.Color, color);
        if (this.checkClick === 2)
            this.checkClick = 0;
        if (this.checkClick === 0) {
            this.GamePlay.playGreatSound();
        }
        this.checkClick += 1;
        this.NodesContainer.PS_Blink_Head.resetSystem();
    };
    TouchAreaController.prototype.naviagateItems = function (e) {
        if (constants_1.Constants.countClick >= constants_1.Constants.maxClickToStore) {
            this.GameController.installHandle();
            return;
        }
        this.isCanChangeColor = false;
        var Node = e.target;
        this.NodesContainer.BtnRight.active = false;
        if (Node.parent.name === "Btn_Right") {
            if (constants_1.Constants.isDoneStep3) {
                constants_1.Constants.isTakePhoto = true;
                this.GamePlay.handleTakePhoto();
            }
            this.NodesContainer.BtnLeft.active = true;
            constants_1.Constants.currentListItem += 1;
            if (constants_1.Constants.currentListItem > 2)
                constants_1.Constants.currentListItem = 2;
        }
        else {
            constants_1.Constants.currentListItem -= 1;
            if (constants_1.Constants.currentListItem < 0)
                constants_1.Constants.currentListItem = 0;
        }
        this.GamePlay.updateProgress();
        this.NodesContainer.Items.forEach(function (item) { return item.active = false; });
        this.NodesContainer.Items[constants_1.Constants.currentListItem].active = true;
        this.activeChangeColor(this.isCanChangeColor);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCx1Q0FBa0M7QUFDbEMsbURBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLHVDQUFZO0lBQXJEO1FBQUEscUVBK1FDO1FBOVFDLFlBQVk7UUFFWixvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRzFCLFFBQVE7UUFDUixzQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFDbEMsc0JBQWdCLEdBQVksSUFBSSxDQUFDO1FBQ2pDLHNCQUFnQixHQUFZLElBQUksQ0FBQztRQUNqQyxnQkFBVSxHQUFXLENBQUMsQ0FBQzs7UUEyUHZCLHVDQUF1QztRQUN2QywrQ0FBK0M7UUFDL0MsSUFBSTtJQUVOLENBQUM7SUE1UFcsb0NBQU0sR0FBaEI7SUFFQSxDQUFDO0lBR1MsbUNBQUssR0FBZjtRQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBR08sMkNBQWEsR0FBckI7UUFBQSxpQkF1Q0M7UUFyQ0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQzthQUMxRCxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO2dDQUdyRSxLQUFLO1lBQ1osSUFBTSxLQUFLLEdBQUcs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RTtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLEVBQW5CLENBQW1CLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxxQkFBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFHTSx1REFBeUIsR0FBaEM7UUFDRSxJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUN0QyxPQUFPO1NBQ1I7UUFFRCxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBRTFDLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO1lBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNEO0lBQ0gsQ0FBQztJQXJRRDtRQURDLFFBQVEsQ0FBQyx3QkFBYyxDQUFDOytEQUNhO0lBRXRDO1FBREMsUUFBUSxDQUFDLHNCQUFZLENBQUM7NkRBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsK0JBQWMsQ0FBQzsrREFDYTtJQUV0QztRQURDLFFBQVEsQ0FBQyxrQkFBUSxDQUFDO3lEQUNPO0lBVGYsbUJBQW1CO1FBRC9CLE9BQU87T0FDSyxtQkFBbUIsQ0ErUS9CO0lBQUQsMEJBQUM7Q0EvUUQsQUErUUMsQ0EvUXdDLEVBQUUsQ0FBQyxTQUFTLEdBK1FwRDtBQS9RWSxrREFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBHYW1lUGxheSBmcm9tIFwiLi9HYW1lUGxheVwiO1xyXG5pbXBvcnQgTm9kZXNDb250YWluZXIgZnJvbSBcIi4vTm9kZXNDb250YWluZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgVG91Y2hBcmVhQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgLy8gQ29tcG9uZW50XHJcbiAgQHByb3BlcnR5KE5vZGVzQ29udGFpbmVyKVxyXG4gIE5vZGVzQ29udGFpbmVyOiBOb2Rlc0NvbnRhaW5lciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVQbGF5KVxyXG4gIEdhbWVQbGF5OiBHYW1lUGxheSA9IG51bGw7XHJcblxyXG5cclxuICAvLyBzdGF0ZVxyXG4gIGlzQ2FuQ2hhbmdlQ29sb3I6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBpdGVtQ2hhbmdlQ29sb3IxOiBjYy5Ob2RlID0gbnVsbDtcclxuICBpdGVtQ2hhbmdlQ29sb3IyOiBjYy5Ob2RlID0gbnVsbDtcclxuICBjaGVja0NsaWNrOiBudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSByZWdpc3RlckV2ZW50KCk6IHZvaWQge1xyXG5cclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuQnRuRG93bmxvYWQuZ2V0Q2hpbGRCeU5hbWUoXCJidG5Eb3dubG9hZFwiKVxyXG4gICAgICAub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSwgdGhpcyk7XHJcblxyXG4gICAgLy8gaGFpciBvbiBjbGljayBldmVudFxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuTm9kZXNDb250YWluZXIuRnJhbWVfSGFpcnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IGZyYW1lID0gdGhpcy5Ob2Rlc0NvbnRhaW5lci5GcmFtZV9IYWlyc1tpbmRleF07XHJcbiAgICAgIGZyYW1lLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7IHRoaXMuYWN0aXZlSGFpck9uVG91Y2goaW5kZXgpIH0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbG9yIGhhaXIgb24gY2xpY2sgZXZlbnRcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLk5vZGVzQ29udGFpbmVyLkZyYW1lX0NvbG9ycy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgZnJhbWUgPSB0aGlzLk5vZGVzQ29udGFpbmVyLkZyYW1lX0NvbG9yc1tpbmRleF07XHJcbiAgICAgIGZyYW1lLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7IHRoaXMuYWN0aXZlQ29sb3JPblRvdWNoKGZyYW1lKSB9LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkcmVzcyBvbiBjbGljayBldmVudFxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuTm9kZXNDb250YWluZXIuRnJhbWVfRHJlc3Nlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgZnJhbWUgPSB0aGlzLk5vZGVzQ29udGFpbmVyLkZyYW1lX0RyZXNzZXNbaW5kZXhdO1xyXG4gICAgICBmcmFtZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4geyB0aGlzLmFjdGl2ZURyZXNzT25Ub3VjaChpbmRleCkgfSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2hvZSBvbiBjbGljayBldmVudFxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuTm9kZXNDb250YWluZXIuRnJhbWVfU2hvZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IGZyYW1lID0gdGhpcy5Ob2Rlc0NvbnRhaW5lci5GcmFtZV9TaG9lc1tpbmRleF07XHJcbiAgICAgIGZyYW1lLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7IHRoaXMuYWN0aXZlU2hvZU9uVG91Y2goaW5kZXgpIH0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuQnRuTGVmdC5jaGlsZHJlblswXS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5uYXZpYWdhdGVJdGVtcywgdGhpcyk7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkJ0blJpZ2h0LmNoaWxkcmVuWzBdLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm5hdmlhZ2F0ZUl0ZW1zLCB0aGlzKTtcclxuXHJcblxyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5oaWRlTWFza1xyXG4gICAgICAub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuaGlkZU1hc2tUb3VjaFN0YXJ0LCB0aGlzKTtcclxuXHJcblxyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5CdG5fRG9sbENhbWVyYS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlLCB0aGlzKTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBoaWRlTWFza1RvdWNoU3RhcnQoKTogdm9pZCB7XHJcbiAgICAvLyBhcHBsb3ZpbiAmIG10Z1xyXG4gICAgaWYgKChDb25zdGFudHMuY291bnRDbGljayA+PSBDb25zdGFudHMubWF4Q2xpY2tUb1N0b3JlKSB8fCBDb25zdGFudHMuaXNUYWtlUGhvdG8pIHtcclxuICAgICAgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpcm9uc291cmNlXHJcbiAgICAvLyB0aGlzLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGFjdGl2ZUhhaXJPblRvdWNoKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChDb25zdGFudHMuY291bnRDbGljayA+PSBDb25zdGFudHMubWF4Q2xpY2tUb1N0b3JlKSB7XHJcbiAgICAgIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaXJvbnNvdXJjZVxyXG4gICAgLy8gdGhpcy5oYW5kbGVJcm9uU291cmNlUGxheVNvdW5kKCk7XHJcblxyXG4gICAgaWYgKCFDb25zdGFudHMuaXNEb25lU3RlcDEpIENvbnN0YW50cy5jdXJyZW50U3RlcCA9IDE7XHJcblxyXG4gICAgQ29uc3RhbnRzLmNvdW50Q2xpY2sgKz0gMTtcclxuICAgIENvbnN0YW50cy5pc0RvbmVTdGVwMSA9IHRydWU7XHJcblxyXG4gICAgaWYgKHRoaXMuY2hlY2tDbGljayA9PT0gMikgdGhpcy5jaGVja0NsaWNrID0gMDtcclxuICAgIGlmICh0aGlzLmNoZWNrQ2xpY2sgPT09IDApIHtcclxuICAgICAgdGhpcy5HYW1lUGxheS5wbGF5R3JlYXRTb3VuZCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jaGVja0NsaWNrICs9IDE7XHJcbiAgICBsZXQgcmVzdWx0ID0gaW5kZXggKyAxO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5DaGFyX0hhaXJzLmZvckVhY2goaGFpciA9PiBoYWlyLmFjdGl2ZSA9IGZhbHNlKTtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuRnJhbWVfSGFpcnMuZm9yRWFjaChmcmFtZSA9PiBmcmFtZS5jb2xvciA9IGNjLkNvbG9yLldISVRFKTtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuRnJhbWVfSGFpcnNbaW5kZXhdLmNvbG9yID0gY2MuQ29sb3IuZnJvbUhFWChuZXcgY2MuQ29sb3IsIFwiI0ZDOEM4Q1wiKTtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuUFNfQmxpbmtfSGVhZC5yZXNldFN5c3RlbSgpO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5CdG5SaWdodC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5IYW5kLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgIHN3aXRjaCAocmVzdWx0KSB7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICB0aGlzLmlzQ2FuQ2hhbmdlQ29sb3IgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkNoYXJfSGFpcnNbMl0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkNoYXJfSGFpcnNbM10uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIHRoaXMuaXNDYW5DaGFuZ2VDb2xvciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuQ2hhcl9IYWlyc1s0XS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDM6XHJcbiAgICAgICAgdGhpcy5pc0NhbkNoYW5nZUNvbG9yID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5DaGFyX0hhaXJzWzVdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5DaGFyX0hhaXJzWzZdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgNDpcclxuICAgICAgICB0aGlzLmlzQ2FuQ2hhbmdlQ29sb3IgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkNoYXJfSGFpcnNbN10uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSA1OlxyXG4gICAgICAgIHRoaXMuaXNDYW5DaGFuZ2VDb2xvciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuQ2hhcl9IYWlyc1s4XS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuQ2hhcl9IYWlyc1s5XS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDY6XHJcbiAgICAgICAgdGhpcy5pc0NhbkNoYW5nZUNvbG9yID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5DaGFyX0hhaXJzWzEwXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuQ2hhcl9IYWlyc1sxMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFjdGl2ZUNoYW5nZUNvbG9yKHRoaXMuaXNDYW5DaGFuZ2VDb2xvcik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFjdGl2ZURyZXNzT25Ub3VjaChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoQ29uc3RhbnRzLmNvdW50Q2xpY2sgPj0gQ29uc3RhbnRzLm1heENsaWNrVG9TdG9yZSkge1xyXG4gICAgICB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghQ29uc3RhbnRzLmlzRG9uZVN0ZXAyKSBDb25zdGFudHMuY3VycmVudFN0ZXAgPSAyO1xyXG5cclxuICAgIENvbnN0YW50cy5jb3VudENsaWNrICs9IDE7XHJcbiAgICBDb25zdGFudHMuaXNEb25lU3RlcDIgPSB0cnVlO1xyXG5cclxuICAgIGlmICh0aGlzLmNoZWNrQ2xpY2sgPT09IDIpIHRoaXMuY2hlY2tDbGljayA9IDA7XHJcbiAgICBpZiAodGhpcy5jaGVja0NsaWNrID09PSAwKSB7XHJcbiAgICAgIHRoaXMuR2FtZVBsYXkucGxheUdyZWF0U291bmQoKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2hlY2tDbGljayArPSAxO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5DaGFyX0RyZXNzZXMuZm9yRWFjaChzaG9lID0+IHNob2UuYWN0aXZlID0gZmFsc2UpO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5GcmFtZV9EcmVzc2VzLmZvckVhY2goZnJhbWUgPT4gZnJhbWUuY29sb3IgPSBjYy5Db2xvci5XSElURSk7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkZyYW1lX0RyZXNzZXNbaW5kZXhdLmNvbG9yID0gY2MuQ29sb3IuZnJvbUhFWChuZXcgY2MuQ29sb3IsIFwiI0ZDOEM4Q1wiKTtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuUFNfQmxpbmtfQmFzZS5yZXNldFN5c3RlbSgpO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5CdG5SaWdodC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5CdG5MZWZ0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkNoYXJfRHJlc3Nlc1tpbmRleF0uYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFjdGl2ZVNob2VPblRvdWNoKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChDb25zdGFudHMuY291bnRDbGljayA+PSBDb25zdGFudHMubWF4Q2xpY2tUb1N0b3JlKSB7XHJcbiAgICAgIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFDb25zdGFudHMuaXNEb25lU3RlcDMpIENvbnN0YW50cy5jdXJyZW50U3RlcCA9IDM7XHJcblxyXG4gICAgQ29uc3RhbnRzLmNvdW50Q2xpY2sgKz0gMTtcclxuICAgIENvbnN0YW50cy5pc0RvbmVTdGVwMyA9IHRydWU7XHJcblxyXG4gICAgaWYgKHRoaXMuY2hlY2tDbGljayA9PT0gMikgdGhpcy5jaGVja0NsaWNrID0gMDtcclxuICAgIGlmICh0aGlzLmNoZWNrQ2xpY2sgPT09IDApIHtcclxuICAgICAgdGhpcy5HYW1lUGxheS5wbGF5R3JlYXRTb3VuZCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jaGVja0NsaWNrICs9IDE7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkNoYXJfU2hvZXMuZm9yRWFjaChzaG9lID0+IHNob2UuYWN0aXZlID0gZmFsc2UpO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5GcmFtZV9TaG9lcy5mb3JFYWNoKGZyYW1lID0+IGZyYW1lLmNvbG9yID0gY2MuQ29sb3IuV0hJVEUpO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5GcmFtZV9TaG9lc1tpbmRleF0uY29sb3IgPSBjYy5Db2xvci5mcm9tSEVYKG5ldyBjYy5Db2xvciwgXCIjRkM4QzhDXCIpO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5QU19CbGlua19TaG9lLnJlc2V0U3lzdGVtKCk7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkJ0blJpZ2h0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkJ0bkxlZnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuQ2hhcl9TaG9lc1tpbmRleF0uYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFjdGl2ZUNoYW5nZUNvbG9yKGFjdGl2ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgYWN0aXZlID8gdGhpcy5Ob2Rlc0NvbnRhaW5lci5MaXN0Q29sb3IuYWN0aXZlID0gdHJ1ZSA6IHRoaXMuTm9kZXNDb250YWluZXIuTGlzdENvbG9yLmFjdGl2ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgYWN0aXZlQ29sb3JPblRvdWNoKGZyYW1lOiBjYy5Ob2RlKTogdm9pZCB7XHJcbiAgICBpZiAoQ29uc3RhbnRzLmNvdW50Q2xpY2sgPj0gQ29uc3RhbnRzLm1heENsaWNrVG9TdG9yZSkge1xyXG4gICAgICB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjb2xvciA9IGZyYW1lLmNvbG9yLnRvSEVYKCk7XHJcbiAgICB0aGlzLml0ZW1DaGFuZ2VDb2xvcjEuY29sb3IgPSBjYy5Db2xvci5mcm9tSEVYKG5ldyBjYy5Db2xvciwgY29sb3IpO1xyXG4gICAgdGhpcy5pdGVtQ2hhbmdlQ29sb3IyLmNvbG9yID0gY2MuQ29sb3IuZnJvbUhFWChuZXcgY2MuQ29sb3IsIGNvbG9yKTtcclxuXHJcbiAgICBpZiAodGhpcy5jaGVja0NsaWNrID09PSAyKSB0aGlzLmNoZWNrQ2xpY2sgPSAwO1xyXG4gICAgaWYgKHRoaXMuY2hlY2tDbGljayA9PT0gMCkge1xyXG4gICAgICB0aGlzLkdhbWVQbGF5LnBsYXlHcmVhdFNvdW5kKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNoZWNrQ2xpY2sgKz0gMTtcclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuUFNfQmxpbmtfSGVhZC5yZXNldFN5c3RlbSgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgbmF2aWFnYXRlSXRlbXMoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCk6IHZvaWQge1xyXG4gICAgaWYgKENvbnN0YW50cy5jb3VudENsaWNrID49IENvbnN0YW50cy5tYXhDbGlja1RvU3RvcmUpIHtcclxuICAgICAgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmlzQ2FuQ2hhbmdlQ29sb3IgPSBmYWxzZTtcclxuICAgIGxldCBOb2RlOiBjYy5Ob2RlID0gZS50YXJnZXQ7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkJ0blJpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgaWYgKE5vZGUucGFyZW50Lm5hbWUgPT09IFwiQnRuX1JpZ2h0XCIpIHtcclxuXHJcbiAgICAgIGlmIChDb25zdGFudHMuaXNEb25lU3RlcDMpIHtcclxuICAgICAgICBDb25zdGFudHMuaXNUYWtlUGhvdG8gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuR2FtZVBsYXkuaGFuZGxlVGFrZVBob3RvKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuQnRuTGVmdC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICBDb25zdGFudHMuY3VycmVudExpc3RJdGVtICs9IDE7XHJcbiAgICAgIGlmIChDb25zdGFudHMuY3VycmVudExpc3RJdGVtID4gMikgQ29uc3RhbnRzLmN1cnJlbnRMaXN0SXRlbSA9IDI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBDb25zdGFudHMuY3VycmVudExpc3RJdGVtIC09IDE7XHJcbiAgICAgIGlmIChDb25zdGFudHMuY3VycmVudExpc3RJdGVtIDwgMCkgQ29uc3RhbnRzLmN1cnJlbnRMaXN0SXRlbSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5HYW1lUGxheS51cGRhdGVQcm9ncmVzcygpO1xyXG5cclxuICAgIHRoaXMuTm9kZXNDb250YWluZXIuSXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWN0aXZlID0gZmFsc2UpO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5JdGVtc1tDb25zdGFudHMuY3VycmVudExpc3RJdGVtXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5hY3RpdmVDaGFuZ2VDb2xvcih0aGlzLmlzQ2FuQ2hhbmdlQ29sb3IpO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBoYW5kbGVJcm9uU291cmNlUGxheVNvdW5kKCk6IHZvaWQge1xyXG4gICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQgPSB0cnVlO1xyXG5cclxuICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlKSB7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvLyBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAvLyAgIHRoaXMuR2FtZVBsYXkuaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpO1xyXG4gIC8vIH1cclxuXHJcbn1cclxuIl19
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
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    Constants.isStartCalculate = false;
    Constants.isRotate = false;
    Constants.isCanTouch = true;
    Constants.countClick = 0;
    Constants.currentListItem = 0;
    Constants.isDoneStep1 = false;
    Constants.isDoneStep2 = false;
    Constants.isDoneStep3 = false;
    Constants.currentStep = 0;
    Constants.maxClickToStore = 3;
    Constants.isTakePhoto = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxLQUtKO0FBTEQsV0FBSyxLQUFLO0lBQ04sa0NBQXlCLENBQUE7SUFDekIsZ0NBQXVCLENBQUE7SUFDdkIsOEJBQXFCLENBQUE7SUFDckIsb0NBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQUxJLEtBQUssS0FBTCxLQUFLLFFBS1Q7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLGNBQWM7SUFDZCxVQUFVLEVBQUUsSUFBSTtJQUNoQixLQUFLLEVBQUUsQ0FBQztJQUNSLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLGFBQWEsRUFBRSxLQUFLO0NBQ3ZCLENBQUE7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLFdBQVcsRUFBRSxDQUFDO0lBQ2QsV0FBVyxFQUFFLENBQUM7SUFDZCxhQUFhLEVBQUUsRUFBRTtJQUNqQixlQUFlLEVBQUUsQ0FBQztDQUNyQixDQUFBO0FBR0QsSUFBSyxVQWFKO0FBYkQsV0FBSyxVQUFVO0lBQ1gsaUNBQW1CLENBQUE7SUFDbkIsNkNBQStCLENBQUE7SUFDL0IsNkNBQStCLENBQUE7SUFDL0IsNkNBQStCLENBQUE7SUFDL0IsNkNBQStCLENBQUE7SUFDL0IsMkNBQTZCLENBQUE7SUFDN0IsaURBQW1DLENBQUE7SUFDbkMscUNBQXVCLENBQUE7SUFDdkIscUNBQXVCLENBQUE7SUFDdkIscUNBQXVCLENBQUE7SUFDdkIscUNBQXVCLENBQUE7SUFDdkIsaUNBQW1CLENBQUE7QUFDdkIsQ0FBQyxFQWJJLFVBQVUsS0FBVixVQUFVLFFBYWQ7QUFHRDtJQUFBO0lBOEJBLENBQUM7SUE1QkcsWUFBWTtJQUNMLDBCQUFnQixHQUFZLEtBQUssQ0FBQztJQUNsQyxrQkFBUSxHQUFZLEtBQUssQ0FBQztJQUMxQixvQkFBVSxHQUFZLElBQUksQ0FBQztJQUMzQixvQkFBVSxHQUFXLENBQUMsQ0FBQztJQUN2Qix5QkFBZSxHQUFXLENBQUMsQ0FBQztJQUM1QixxQkFBVyxHQUFZLEtBQUssQ0FBQztJQUM3QixxQkFBVyxHQUFZLEtBQUssQ0FBQztJQUM3QixxQkFBVyxHQUFZLEtBQUssQ0FBQztJQUM3QixxQkFBVyxHQUFXLENBQUMsQ0FBQztJQUN4Qix5QkFBZSxHQUFXLENBQUMsQ0FBQztJQUM1QixxQkFBVyxHQUFZLEtBQUssQ0FBQztJQUVwQyxRQUFRO0lBQ0QsZUFBSyxHQUFpQixLQUFLLENBQUM7SUFHbkMsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUdsRCxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBR2xELGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFFdEQsZ0JBQUM7Q0E5QkQsQUE4QkMsSUFBQTtBQTlCWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZW51bSBFdmVudCB7XHJcbiAgICB0b3VjaFN0YXJ0ID0gXCJ0b3VjaHN0YXJ0XCIsXHJcbiAgICB0b3VjaE1vdmUgPSBcInRvdWNobW92ZVwiLFxyXG4gICAgdG91Y2hFbmQgPSBcInRvdWNoZW5kXCIsXHJcbiAgICB0b3VjaENhbmNlbCA9IFwidG91Y2hjYW5jZWxcIlxyXG59XHJcblxyXG5cclxuY29uc3QgSXJvblNvdXJjZSA9IHtcclxuICAgIC8vIGlyb25zb3VyY2UgXHJcbiAgICBTb3VuZFN0YXRlOiB0cnVlLFxyXG4gICAgU3RhdGU6IDEsXHJcbiAgICBpc0VuZEdhbWU6IGZhbHNlLFxyXG4gICAgaXNQbGF5QmdTb3VuZDogZmFsc2UsXHJcbn1cclxuXHJcblxyXG5jb25zdCBSZXNwb25zaXZlID0ge1xyXG4gICAgY2FsY3VsYXRlZFk6IDAsXHJcbiAgICBjYWxjdWxhdGVkWDogMCxcclxuICAgIGN1cnJlbnREZXZpY2U6IFwiXCIsXHJcbiAgICBjYWxjdWxhdGVkU2NhbGU6IDAsXHJcbn1cclxuXHJcblxyXG5lbnVtIFNvdW5kVHJhY2sge1xyXG4gICAgYmdTb3VuZCA9IFwiYmdTb3VuZFwiLFxyXG4gICAgd29hQW5pbWVTb3VuZCA9IFwid29hQW5pbWVTb3VuZFwiLFxyXG4gICAgb3BlbkJvb2tTb3VuZCA9IFwib3BlbkJvb2tTb3VuZFwiLFxyXG4gICAgc2hvd0l0ZW1Tb3VuZCA9IFwic2hvd0l0ZW1Tb3VuZFwiLFxyXG4gICAgcGlja0l0ZW1Tb3VuZCA9IFwicGlja0l0ZW1Tb3VuZFwiLFxyXG4gICAgd2FvR2FtZVNvdW5kID0gXCJ3YW9HYW1lU291bmRcIixcclxuICAgIHN3dGljaEl0ZW1Tb3VuZCA9IFwic3d0aWNoSXRlbVNvdW5kXCIsXHJcbiAgICBGeF9Cb251czEgPSBcIkZ4X0JvbnVzMVwiLFxyXG4gICAgRnhfQm9udXMyID0gXCJGeF9Cb251czJcIixcclxuICAgIEZ4X0JvbnVzMyA9IFwiRnhfQm9udXMzXCIsXHJcbiAgICBGeF9Cb251czQgPSBcIkZ4X0JvbnVzNFwiLFxyXG4gICAgRnhfTG9zZSA9IFwiRnhfTG9zZVwiXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uc3RhbnRzIHtcclxuXHJcbiAgICAvLyBzdGF0ZSAgICBcclxuICAgIHN0YXRpYyBpc1N0YXJ0Q2FsY3VsYXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNSb3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0NhblRvdWNoOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHN0YXRpYyBjb3VudENsaWNrOiBudW1iZXIgPSAwO1xyXG4gICAgc3RhdGljIGN1cnJlbnRMaXN0SXRlbTogbnVtYmVyID0gMDtcclxuICAgIHN0YXRpYyBpc0RvbmVTdGVwMTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzRG9uZVN0ZXAyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNEb25lU3RlcDM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBjdXJyZW50U3RlcDogbnVtYmVyID0gMDtcclxuICAgIHN0YXRpYyBtYXhDbGlja1RvU3RvcmU6IG51bWJlciA9IDM7XHJcbiAgICBzdGF0aWMgaXNUYWtlUGhvdG86IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyBldmVudFxyXG4gICAgc3RhdGljIEV2ZW50OiB0eXBlb2YgRXZlbnQgPSBFdmVudDtcclxuXHJcblxyXG4gICAgLy8gU291bmRUcmFja1xyXG4gICAgc3RhdGljIFNvdW5kVHJhY2s6IHR5cGVvZiBTb3VuZFRyYWNrID0gU291bmRUcmFjaztcclxuXHJcblxyXG4gICAgLy8gaXJvblNvdXJjZVxyXG4gICAgc3RhdGljIGlyb25Tb3VyY2U6IHR5cGVvZiBJcm9uU291cmNlID0gSXJvblNvdXJjZTtcclxuXHJcblxyXG4gICAgLy8gUmVzcG9uc2l2ZVxyXG4gICAgc3RhdGljIFJlc3BvbnNpdmU6IHR5cGVvZiBSZXNwb25zaXZlID0gUmVzcG9uc2l2ZTtcclxuXHJcbn1cclxuIl19
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
        _this.pickItemSound = null;
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
                case "pickItemSound":
                    this.pickItemSound.play();
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
            case "Fx_Lose":
                this.Fx_Lose.stop();
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
            case "pickItemSound":
                this.pickItemSound.stop();
                break;
            default:
                break;
        }
    };
    AudioManager.prototype.stopAllSoundExceptBgSound = function () {
        this.pickItemSound.stop();
        this.Fx_Lose.stop();
        this.Fx_Bonus1.stop();
        this.Fx_Bonus2.stop();
        this.Fx_Bonus3.stop();
        this.Fx_Bonus4.stop();
    };
    AudioManager.prototype.stopAllSound = function () {
        this.bgSound.stop();
        this.Fx_Lose.stop();
        this.pickItemSound.stop();
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
    ], AudioManager.prototype, "pickItemSound", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXEF1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFJNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFrR0M7UUFoR0csU0FBUztRQUVULGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLG1CQUFhLEdBQW1CLElBQUksQ0FBQztRQUdyQyxlQUFTLEdBQW1CLElBQUksQ0FBQztRQUVqQyxlQUFTLEdBQW1CLElBQUksQ0FBQztRQUVqQyxlQUFTLEdBQW1CLElBQUksQ0FBQztRQUVqQyxlQUFTLEdBQW1CLElBQUksQ0FBQztRQUdqQyxhQUFPLEdBQW1CLElBQUksQ0FBQzs7SUFnRm5DLENBQUM7SUE5RVUsZ0NBQVMsR0FBaEIsVUFBaUIsU0FBaUI7UUFDOUIsSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7WUFDakMsUUFBUSxTQUFTLEVBQUU7Z0JBQ2YsS0FBSyxTQUFTO29CQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3BCLE1BQU07Z0JBQ1YsS0FBSyxTQUFTO29CQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3BCLE1BQU07Z0JBQ1YsS0FBSyxXQUFXO29CQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3RCLE1BQU07Z0JBQ1YsS0FBSyxXQUFXO29CQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3RCLE1BQU07Z0JBQ1YsS0FBSyxXQUFXO29CQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3RCLE1BQU07Z0JBQ1Ys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cnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpb01hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIHNvdW5kIFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgYmdTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgcGlja0l0ZW1Tb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIEZ4X0JvbnVzMTogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgRnhfQm9udXMyOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBGeF9Cb251czM6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIEZ4X0JvbnVzNDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIEZ4X0xvc2U6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgcGxheVNvdW5kKHNvdW5kTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChzb3VuZE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJiZ1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZ1NvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJGeF9Mb3NlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5GeF9Mb3NlLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJGeF9Cb251czFcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkZ4X0JvbnVzMS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiRnhfQm9udXMyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5GeF9Cb251czIucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkZ4X0JvbnVzM1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuRnhfQm9udXMzLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJGeF9Cb251czRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkZ4X0JvbnVzNC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicGlja0l0ZW1Tb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGlja0l0ZW1Tb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wU291bmQoc291bmROYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKHNvdW5kTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYmdTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5iZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiRnhfTG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5GeF9Mb3NlLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiRnhfQm9udXMxXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLkZ4X0JvbnVzMS5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkZ4X0JvbnVzMlwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5GeF9Cb251czIuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJGeF9Cb251czNcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuRnhfQm9udXMzLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiRnhfQm9udXM0XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLkZ4X0JvbnVzNC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInBpY2tJdGVtU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMucGlja0l0ZW1Tb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0b3BBbGxTb3VuZEV4Y2VwdEJnU291bmQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5waWNrSXRlbVNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLkZ4X0xvc2Uuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuRnhfQm9udXMxLnN0b3AoKTtcclxuICAgICAgICB0aGlzLkZ4X0JvbnVzMi5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5GeF9Cb251czMuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuRnhfQm9udXM0LnN0b3AoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0b3BBbGxTb3VuZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJnU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuRnhfTG9zZS5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5waWNrSXRlbVNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLkZ4X0JvbnVzMS5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5GeF9Cb251czIuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuRnhfQm9udXMzLnN0b3AoKTtcclxuICAgICAgICB0aGlzLkZ4X0JvbnVzNC5zdG9wKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
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
                mraid.open("https://play.google.com/store/apps/details?id=com.an.dolldressup.pastelsimulator");
                return;
            }
            if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
                mraid.open("https://itunes.apple.com/us/app/id6475341990?mt=8");
                return;
            }
            mraid.open("https://play.google.com/store/apps/details?id=com.an.dolldressup.pastelsimulator");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUc1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQyxrQ0FBWTtJQUFoRDtRQUFBLHFFQXNEQztRQXBERyxrQkFBWSxHQUFpQixJQUFJLENBQUM7O0lBb0R0QyxDQUFDO0lBbERhLCtCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUVTLDhCQUFLLEdBQWY7UUFDSSxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRU0sc0NBQWEsR0FBcEI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLHFCQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqQyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVuQyx5QkFBeUI7UUFDekIsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQ3JDLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbEMsT0FBTztTQUNWO1FBRUQsOEJBQThCO1FBQzlCLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLFdBQVcsRUFBRTtZQUNqQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZixPQUFPO1NBQ1Y7UUFFRCwrQkFBK0I7UUFDL0IsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixPQUFPO1NBQ1Y7UUFFRCxrQ0FBa0M7UUFDbEMsSUFBSSxPQUFNLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQy9ELEtBQUssQ0FBQyxJQUFJLENBQUMsa0ZBQWtGLENBQUMsQ0FBQztnQkFDL0YsT0FBTzthQUNWO1lBRUQsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtnQkFDdEYsS0FBSyxDQUFDLElBQUksQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO2dCQUNoRSxPQUFPO2FBQ1Y7WUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLGtGQUFrRixDQUFDLENBQUM7WUFDL0YsT0FBTztTQUNWO1FBQ0QsMkVBQTJFO1FBQzNFLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFuREQ7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQzt3REFDVztJQUZ6QixjQUFjO1FBRDFCLE9BQU87T0FDSyxjQUFjLENBc0QxQjtJQUFELHFCQUFDO0NBdERELEFBc0RDLENBdERtQyxFQUFFLENBQUMsU0FBUyxHQXNEL0M7QUF0RFksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbiBcclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIEdhbWVDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnN0YWxsSGFuZGxlKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5zdGFsbFwiKTtcclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUgPSB0cnVlOyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIuc3RvcEFsbFNvdW5kKCk7XHJcbiAgICAgICAgd2luZG93LmdhbWVFbmQgJiYgd2luZG93LmdhbWVFbmQoKTtcclxuXHJcbiAgICAgICAgLy9JZiBhZCBuZXR3b3JrIGlzIHRpa3Rva1xyXG4gICAgICAgIGlmICh0eXBlb2YgKHBsYXlhYmxlU0RLKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5wbGF5YWJsZVNESy5vcGVuQXBwU3RvcmUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d29yayBpcyBnb29nbGUgYWRzXHJcbiAgICAgICAgaWYgKHR5cGVvZiAoRXhpdEFwaSkgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBFeGl0QXBpLmV4aXQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d3JvayBpcyBpcm9uc291cmNlc1xyXG4gICAgICAgIGlmICh0eXBlb2YgKGRhcGkpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgZGFwaS5vcGVuU3RvcmVVcmwoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d29yayBzdXBwb3J0IE1SQUlEIDIuMFxyXG4gICAgICAgIGlmICh0eXBlb2YobXJhaWQpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLkFORFJPSUQpIHtcclxuICAgICAgICAgICAgICAgIG1yYWlkLm9wZW4oXCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLmFuLmRvbGxkcmVzc3VwLnBhc3RlbHNpbXVsYXRvclwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TIHx8IGNjLnN5cy5vcyA9PSBjYy5zeXMuSVBIT05FIHx8IGNjLnN5cy5vcyA9PSBjYy5zeXMuSVBBRCkge1xyXG4gICAgICAgICAgICAgICAgbXJhaWQub3BlbihcImh0dHBzOi8vaXR1bmVzLmFwcGxlLmNvbS91cy9hcHAvaWQ2NDc1MzQxOTkwP210PThcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1yYWlkLm9wZW4oXCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLmFuLmRvbGxkcmVzc3VwLnBhc3RlbHNpbXVsYXRvclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBJZiBhZCBuZXR3b3JrIGlzIG1pbmR3b3JrLiB3aW5kb3cgYWx3YXkgYXZhaWFibGUgc28gc2tpcCB1bmRlZmluZWQgY2hlY2tcclxuICAgICAgICB3aW5kb3cuaW5zdGFsbCAmJiB3aW5kb3cuaW5zdGFsbCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=
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
        _this.skinIndex = 0;
        _this.currentProgress = null;
        _this.PrevProgress = null;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
    };
    GamePlay.prototype.start = function () {
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        this.currentProgress = this.NodesContainer.ProgressSteps[constants_1.Constants.currentListItem];
    };
    GamePlay.prototype.updateProgress = function () {
        this.PrevProgress = this.currentProgress;
        this.currentProgress = this.NodesContainer.ProgressSteps[constants_1.Constants.currentListItem];
        this.setupTween();
    };
    GamePlay.prototype.setupTween = function () {
        var icon = this.currentProgress.getChildByName("icon");
        var frame = this.currentProgress.getChildByName("khungicon");
        var framePick = this.currentProgress.getChildByName("Pickicon");
        var stroke = this.currentProgress.getChildByName("ElipseStroke");
        var tick = this.currentProgress.getChildByName("tick");
        icon.active = true;
        tick.active = false;
        frame.active = true;
        framePick.active = false;
        stroke.color = cc.Color.fromHEX(new cc.Color, "#FFFFFF");
        if (this.PrevProgress) {
            var prev_icon = this.PrevProgress.getChildByName("icon");
            var prev_frame = this.PrevProgress.getChildByName("khungicon");
            var prev_framePick = this.PrevProgress.getChildByName("Pickicon");
            var prev_stroke = this.PrevProgress.getChildByName("ElipseStroke");
            var prev_tick = this.PrevProgress.getChildByName("tick");
            prev_icon.active = false;
            prev_tick.active = true;
            prev_frame.active = false;
            prev_framePick.active = true;
            prev_stroke.color = cc.Color.fromHEX(new cc.Color, "#00FF14");
        }
        this.callTween();
    };
    GamePlay.prototype.callTween = function () {
        cc.tween(this.currentProgress)
            .to(1, { scale: 0.8 }, { easing: "elasticOut" })
            .start();
        if (this.PrevProgress) {
            cc.tween(this.PrevProgress)
                .to(1, { scale: 0.6 }, { easing: "elasticOut" })
                .start();
        }
    };
    GamePlay.prototype.handleTakePhoto = function () {
        var _this = this;
        this.NodesContainer.Doll_Camera.active = true;
        this.NodesContainer.Progress.active = false;
        this.NodesContainer.UI.getChildByName("PickTray").active = false;
        var cameraFrame = this.NodesContainer.Doll_Camera.getChildByName("frame");
        var doll = this.NodesContainer.UI.getChildByName("Dolls");
        cc.tween(cameraFrame)
            .to(1, { opacity: 255 }, { easing: 'elasticOut' })
            .start();
        cc.tween(doll)
            .to(1, { y: 40, scale: 0.22 }, { easing: "elasticOut" })
            .start();
        cc.tween(this.NodesContainer.Btn_DollCamera)
            .to(1, { opacity: 255 }, { easing: 'elasticOut' })
            .call(function () {
            cc.tween(_this.NodesContainer.Btn_DollCamera)
                .repeatForever(cc.tween(_this.NodesContainer.Btn_DollCamera)
                .to(0.5, { scale: 1 })
                .to(0.5, { scale: 0.9 }, { easing: 'elasticOut' })).start();
        })
            .start();
    };
    GamePlay.prototype.showCTA = function (intervalID) {
        var _this = this;
        clearInterval(intervalID);
        this.scheduleOnce(function () {
            _this.NodesContainer.UI.getComponent(cc.Animation).play("CTA_Anim");
        }, 0.5);
        // this.scheduleOnce(() => {
        // this.reset();
        // this.activeCasualSkinsWithAnim();
        // }, 2.5);
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
        if (constants_1.Constants.currentListItem <= 0)
            this.NodesContainer.BtnLeft.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCxtREFBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE4S0M7UUEzS0Msa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixxQkFBZSxHQUFZLElBQUksQ0FBQztRQUNoQyxrQkFBWSxHQUFZLElBQUksQ0FBQzs7SUFtSy9CLENBQUM7SUFoS1cseUJBQU0sR0FBaEI7SUFFQSxDQUFDO0lBR1Msd0JBQUssR0FBZjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMscUJBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBR00saUNBQWMsR0FBckI7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDekMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxxQkFBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBR08sNkJBQVUsR0FBbEI7UUFDRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMs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WUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ2xDO1NBQ0Y7SUFDSCxDQUFDO0lBSVMseUJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN6QixJQUFJLHFCQUFTLENBQUMsZUFBZSxJQUFJLENBQUM7WUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ2pGLENBQUM7SUF6S0Q7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQztrREFDVztJQUVsQztRQURDLFFBQVEsQ0FBQyx3QkFBYyxDQUFDO29EQUNhO0lBRXRDO1FBREMsUUFBUSxDQUFDLCtCQUFjLENBQUM7b0RBQ2E7SUFQbkIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQThLNUI7SUFBRCxlQUFDO0NBOUtELEFBOEtDLENBOUtxQyxFQUFFLENBQUMsU0FBUyxHQThLakQ7a0JBOUtvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgTm9kZXNDb250YWluZXIgZnJvbSBcIi4vTm9kZXNDb250YWluZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShOb2Rlc0NvbnRhaW5lcilcclxuICBOb2Rlc0NvbnRhaW5lcjogTm9kZXNDb250YWluZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShHYW1lQ29udHJvbGxlcilcclxuICBHYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuICBza2luSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgY3VycmVudFByb2dyZXNzOiBjYy5Ob2RlID0gbnVsbDtcclxuICBQcmV2UHJvZ3Jlc3M6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgdGhpcy5jdXJyZW50UHJvZ3Jlc3MgPSB0aGlzLk5vZGVzQ29udGFpbmVyLlByb2dyZXNzU3RlcHNbQ29uc3RhbnRzLmN1cnJlbnRMaXN0SXRlbV07XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHVwZGF0ZVByb2dyZXNzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5QcmV2UHJvZ3Jlc3MgPSB0aGlzLmN1cnJlbnRQcm9ncmVzcztcclxuICAgIHRoaXMuY3VycmVudFByb2dyZXNzID0gdGhpcy5Ob2Rlc0NvbnRhaW5lci5Qcm9ncmVzc1N0ZXBzW0NvbnN0YW50cy5jdXJyZW50TGlzdEl0ZW1dO1xyXG4gICAgdGhpcy5zZXR1cFR3ZWVuKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBzZXR1cFR3ZWVuKCk6IHZvaWQge1xyXG4gICAgbGV0IGljb24gPSB0aGlzLmN1cnJlbnRQcm9ncmVzcy5nZXRDaGlsZEJ5TmFtZShcImljb25cIik7XHJcbiAgICBsZXQgZnJhbWUgPSB0aGlzLmN1cnJlbnRQcm9ncmVzcy5nZXRDaGlsZEJ5TmFtZShcImtodW5naWNvblwiKTtcclxuICAgIGxldCBmcmFtZVBpY2sgPSB0aGlzLmN1cnJlbnRQcm9ncmVzcy5nZXRDaGlsZEJ5TmFtZShcIlBpY2tpY29uXCIpO1xyXG4gICAgbGV0IHN0cm9rZSA9IHRoaXMuY3VycmVudFByb2dyZXNzLmdldENoaWxkQnlOYW1lKFwiRWxpcHNlU3Ryb2tlXCIpO1xyXG4gICAgbGV0IHRpY2sgPSB0aGlzLmN1cnJlbnRQcm9ncmVzcy5nZXRDaGlsZEJ5TmFtZShcInRpY2tcIik7XHJcbiAgICBcclxuICAgIGljb24uYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRpY2suYWN0aXZlID0gZmFsc2U7XHJcbiAgICBmcmFtZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgZnJhbWVQaWNrLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgc3Ryb2tlLmNvbG9yID0gY2MuQ29sb3IuZnJvbUhFWChuZXcgY2MuQ29sb3IsIFwiI0ZGRkZGRlwiKTtcclxuXHJcbiAgICBpZih0aGlzLlByZXZQcm9ncmVzcykge1xyXG4gICAgICBsZXQgcHJldl9pY29uID0gdGhpcy5QcmV2UHJvZ3Jlc3MuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpO1xyXG4gICAgICBsZXQgcHJldl9mcmFtZSA9IHRoaXMuUHJldlByb2dyZXNzLmdldENoaWxkQnlOYW1lKFwia2h1bmdpY29uXCIpO1xyXG4gICAgICBsZXQgcHJldl9mcmFtZVBpY2sgPSB0aGlzLlByZXZQcm9ncmVzcy5nZXRDaGlsZEJ5TmFtZShcIlBpY2tpY29uXCIpO1xyXG4gICAgICBsZXQgcHJldl9zdHJva2UgPSB0aGlzLlByZXZQcm9ncmVzcy5nZXRDaGlsZEJ5TmFtZShcIkVsaXBzZVN0cm9rZVwiKTtcclxuICAgICAgbGV0IHByZXZfdGljayA9IHRoaXMuUHJldlByb2dyZXNzLmdldENoaWxkQnlOYW1lKFwidGlja1wiKTtcclxuICAgICAgcHJldl9pY29uLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICBwcmV2X3RpY2suYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgcHJldl9mcmFtZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgcHJldl9mcmFtZVBpY2suYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgcHJldl9zdHJva2UuY29sb3IgPSBjYy5Db2xvci5mcm9tSEVYKG5ldyBjYy5Db2xvciwgXCIjMDBGRjE0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2FsbFR3ZWVuKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBjYWxsVHdlZW4oKTogdm9pZCB7XHJcbiAgICBjYy50d2Vlbih0aGlzLmN1cnJlbnRQcm9ncmVzcylcclxuICAgIC50bygxLCB7c2NhbGU6IDAuOH0sIHtlYXNpbmc6IFwiZWxhc3RpY091dFwifSlcclxuICAgIC5zdGFydCgpO1xyXG5cclxuICAgIGlmKHRoaXMuUHJldlByb2dyZXNzKSB7XHJcbiAgICAgIGNjLnR3ZWVuKHRoaXMuUHJldlByb2dyZXNzKVxyXG4gICAgICAudG8oMSwge3NjYWxlOiAwLjZ9LCB7ZWFzaW5nOiBcImVsYXN0aWNPdXRcIn0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBoYW5kbGVUYWtlUGhvdG8oKTogdm9pZCB7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkRvbGxfQ2FtZXJhLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLk5vZGVzQ29udGFpbmVyLlByb2dyZXNzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5VSS5nZXRDaGlsZEJ5TmFtZShcIlBpY2tUcmF5XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgbGV0IGNhbWVyYUZyYW1lID0gdGhpcy5Ob2Rlc0NvbnRhaW5lci5Eb2xsX0NhbWVyYS5nZXRDaGlsZEJ5TmFtZShcImZyYW1lXCIpO1xyXG4gICAgbGV0IGRvbGwgPSB0aGlzLk5vZGVzQ29udGFpbmVyLlVJLmdldENoaWxkQnlOYW1lKFwiRG9sbHNcIik7XHJcblxyXG4gICAgY2MudHdlZW4oY2FtZXJhRnJhbWUpXHJcbiAgICAudG8oMSwge29wYWNpdHk6IDI1NX0sICB7ZWFzaW5nOiAnZWxhc3RpY091dCd9KVxyXG4gICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgY2MudHdlZW4oZG9sbClcclxuICAgIC50bygxLCB7eTogNDAsIHNjYWxlOiAwLjIyfSwge2Vhc2luZzogXCJlbGFzdGljT3V0XCJ9KVxyXG4gICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgY2MudHdlZW4odGhpcy5Ob2Rlc0NvbnRhaW5lci5CdG5fRG9sbENhbWVyYSlcclxuICAgIC50bygxLCB7b3BhY2l0eTogMjU1fSwgIHtlYXNpbmc6ICdlbGFzdGljT3V0J30pXHJcbiAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgIGNjLnR3ZWVuKHRoaXMuTm9kZXNDb250YWluZXIuQnRuX0RvbGxDYW1lcmEpXHJcbiAgICAgIC5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgICAgY2MudHdlZW4odGhpcy5Ob2Rlc0NvbnRhaW5lci5CdG5fRG9sbENhbWVyYSlcclxuICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAxIH0pXHJcbiAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC45IH0sIHsgZWFzaW5nOiAnZWxhc3RpY091dCcgfSlcclxuICAgICAgKS5zdGFydCgpO1xyXG4gICAgfSlcclxuICAgIC5zdGFydCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc2hvd0NUQShpbnRlcnZhbElEOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuVUkuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkNUQV9BbmltXCIpO1xyXG4gICAgfSwgMC41KTtcclxuXHJcbiAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyB0aGlzLnJlc2V0KCk7XHJcbiAgICAvLyB0aGlzLmFjdGl2ZUNhc3VhbFNraW5zV2l0aEFuaW0oKTtcclxuICAgIC8vIH0sIDIuNSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHBsYXlHcmVhdFNvdW5kKCk6IHZvaWQge1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLnBpY2tJdGVtU291bmQpXHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5waWNrSXRlbVNvdW5kLnZvbHVtZSA9IDAuNTtcclxuICAgIGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KSArIDE7XHJcbiAgICBzd2l0Y2ggKHJhbmRvbSkge1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkZ4X0JvbnVzMSlcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5GeF9Cb251czIpXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMzpcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suRnhfQm9udXMzKVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDQ6XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkZ4X0JvbnVzNClcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpOiB2b2lkIHtcclxuICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kID0gdHJ1ZTtcclxuICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBoYW5kbGVNdXRlU291bmRJcm9uU291cmNlKCk6IHZvaWQge1xyXG4gICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvY29zU291bmRTdGF0ZVwiKSwgMTApXHJcblxyXG4gICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlKSB7XHJcbiAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9PT0gMSAmJiAhQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSAmJiAhQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNFbmRHYW1lKSB7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPT09IDIgJiYgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5zdG9wQWxsU291bmQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgXHJcblxyXG4gIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKENvbnN0YW50cy5jdXJyZW50TGlzdEl0ZW0gPD0gMCkgdGhpcy5Ob2Rlc0NvbnRhaW5lci5CdG5MZWZ0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
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
        // FX
        _this.PS_Blink_Head = null;
        _this.PS_Blink_Base = null;
        _this.PS_Blink_Shoe = null;
        // UI
        _this.Hand = null;
        _this.doll = null;
        _this.Doll_Camera = null;
        _this.Logo = null;
        _this.Icon = null;
        _this.Progress = null;
        _this.ProgressSteps = [];
        _this.Btn_DollCamera = null;
        _this.BtnDownload = null;
        _this.BtnLeft = null;
        _this.BtnRight = null;
        _this.ListItem = null;
        _this.ListColor = null;
        // Items
        _this.Char_Hairs = [];
        _this.Char_DressDefault = null;
        _this.Char_Dresses = [];
        _this.Char_ShoesDefault = null;
        _this.Char_Shoes = [];
        _this.Items = [];
        _this.Frame_Colors = [];
        _this.Frame_Hairs = [];
        _this.Frame_Dresses = [];
        _this.Frame_Shoes = [];
        return _this;
    }
    NodesContainer.prototype.onLoad = function () {
        this.BtnLeft.active = false;
        this.BtnRight.active = false;
    };
    NodesContainer.prototype.start = function () {
        // màu FX #FF8F00
        var _this = this;
        // init progress Steps
        this.ProgressSteps = this.Progress.getChildByName("thanhngang").children;
        // init items
        this.Items = this.ListItem.children;
        // init frame pick hairs
        this.ListItem.getChildByName("Hair").children.filter(function (item, index) {
            var framePick = item.getChildByName("FramePick");
            if (framePick.name)
                _this.Frame_Hairs.push(framePick);
        });
        // init frame pick dress
        this.ListItem.getChildByName("Dress").children.filter(function (item, index) {
            var framePick = item.getChildByName("FramePick");
            if (framePick.name)
                _this.Frame_Dresses.push(framePick);
        });
        // init frame pick shoe
        this.ListItem.getChildByName("Shoe").children.filter(function (item, index) {
            var framePick = item.getChildByName("FramePick");
            if (framePick.name)
                _this.Frame_Shoes.push(framePick);
        });
        // init frame pick colors
        this.Frame_Colors = this.ListColor.children;
        // init camera
        this.Btn_DollCamera = this.Doll_Camera.getChildByName("btn");
    };
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
        property(cc.ParticleSystem)
    ], NodesContainer.prototype, "PS_Blink_Head", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], NodesContainer.prototype, "PS_Blink_Base", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], NodesContainer.prototype, "PS_Blink_Shoe", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "Hand", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "doll", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "Doll_Camera", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "Logo", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "Icon", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "Progress", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "BtnDownload", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "BtnLeft", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "BtnRight", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "ListItem", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "ListColor", void 0);
    __decorate([
        property([cc.Node])
    ], NodesContainer.prototype, "Char_Hairs", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "Char_DressDefault", void 0);
    __decorate([
        property([cc.Node])
    ], NodesContainer.prototype, "Char_Dresses", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "Char_ShoesDefault", void 0);
    __decorate([
        property([cc.Node])
    ], NodesContainer.prototype, "Char_Shoes", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxOb2Rlc0NvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQXNHQztRQXBHRyxRQUFFLEdBQVksSUFBSSxDQUFDO1FBRW5CLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsUUFBRSxHQUFZLElBQUksQ0FBQztRQUVuQixLQUFLO1FBRUwsbUJBQWEsR0FBc0IsSUFBSSxDQUFDO1FBRXhDLG1CQUFhLEdBQXNCLElBQUksQ0FBQztRQUV4QyxtQkFBYSxHQUFzQixJQUFJLENBQUM7UUFFeEMsS0FBSztRQUVMLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixtQkFBYSxHQUFjLEVBQUUsQ0FBQztRQUU5QixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUUvQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLFFBQVE7UUFFUixnQkFBVSxHQUFjLEVBQUUsQ0FBQztRQUUzQix1QkFBaUIsR0FBWSxJQUFJLENBQUM7UUFFbEMsa0JBQVksR0FBYyxFQUFFLENBQUM7UUFFN0IsdUJBQWlCLEdBQVksSUFBSSxDQUFDO1FBRWxDLGdCQUFVLEdBQWMsRUFB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QUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ087SUFLekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNRO0lBSTFCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO3NEQUNPO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkRBQ2dCO0lBRWxDO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO3dEQUNTO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkRBQ2dCO0lBRWxDO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO3NEQUNPO0lBdERWLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FzR2xDO0lBQUQscUJBQUM7Q0F0R0QsQUFzR0MsQ0F0RzJDLEVBQUUsQ0FBQyxTQUFTLEdBc0d2RDtrQkF0R29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZXNDb250YWluZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBCRzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhpZGVNYXNrOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgVUk6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIEZYXHJcbiAgICBAcHJvcGVydHkoY2MuUGFydGljbGVTeXN0ZW0pXHJcbiAgICBQU19CbGlua19IZWFkOiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUGFydGljbGVTeXN0ZW0pXHJcbiAgICBQU19CbGlua19CYXNlOiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUGFydGljbGVTeXN0ZW0pXHJcbiAgICBQU19CbGlua19TaG9lOiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XHJcblxyXG4gICAgLy8gVUlcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgSGFuZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRvbGw6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBEb2xsX0NhbWVyYTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIExvZ286IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBJY29uOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgUHJvZ3Jlc3M6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgUHJvZ3Jlc3NTdGVwczogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgQnRuX0RvbGxDYW1lcmE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBCdG5Eb3dubG9hZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEJ0bkxlZnQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBCdG5SaWdodDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBMaXN0SXRlbTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIExpc3RDb2xvcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gSXRlbXNcclxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgICBDaGFyX0hhaXJzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ2hhcl9EcmVzc0RlZmF1bHQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIENoYXJfRHJlc3NlczogY2MuTm9kZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIENoYXJfU2hvZXNEZWZhdWx0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgICBDaGFyX1Nob2VzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBJdGVtczogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgRnJhbWVfQ29sb3JzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIEZyYW1lX0hhaXJzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIEZyYW1lX0RyZXNzZXM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgRnJhbWVfU2hvZXM6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuQnRuTGVmdC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkJ0blJpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gbcOgdSBGWCAjRkY4RjAwXHJcblxyXG4gICAgICAgIC8vIGluaXQgcHJvZ3Jlc3MgU3RlcHNcclxuICAgICAgICB0aGlzLlByb2dyZXNzU3RlcHMgPSB0aGlzLlByb2dyZXNzLmdldENoaWxkQnlOYW1lKFwidGhhbmhuZ2FuZ1wiKS5jaGlsZHJlbjtcclxuXHJcbiAgICAgICAgLy8gaW5pdCBpdGVtc1xyXG4gICAgICAgIHRoaXMuSXRlbXMgPSB0aGlzLkxpc3RJdGVtLmNoaWxkcmVuO1xyXG5cclxuICAgICAgICAvLyBpbml0IGZyYW1lIHBpY2sgaGFpcnNcclxuICAgICAgICB0aGlzLkxpc3RJdGVtLmdldENoaWxkQnlOYW1lKFwiSGFpclwiKS5jaGlsZHJlbi5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBmcmFtZVBpY2sgPSBpdGVtLmdldENoaWxkQnlOYW1lKFwiRnJhbWVQaWNrXCIpO1xyXG4gICAgICAgICAgICBpZiAoZnJhbWVQaWNrLm5hbWUpIHRoaXMuRnJhbWVfSGFpcnMucHVzaChmcmFtZVBpY2spO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGluaXQgZnJhbWUgcGljayBkcmVzc1xyXG4gICAgICAgIHRoaXMuTGlzdEl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJEcmVzc1wiKS5jaGlsZHJlbi5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBmcmFtZVBpY2sgPSBpdGVtLmdldENoaWxkQnlOYW1lKFwiRnJhbWVQaWNrXCIpO1xyXG4gICAgICAgICAgICBpZiAoZnJhbWVQaWNrLm5hbWUpIHRoaXMuRnJhbWVfRHJlc3Nlcy5wdXNoKGZyYW1lUGljayk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gaW5pdCBmcmFtZSBwaWNrIHNob2VcclxuICAgICAgICB0aGlzLkxpc3RJdGVtLmdldENoaWxkQnlOYW1lKFwiU2hvZVwiKS5jaGlsZHJlbi5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBmcmFtZVBpY2sgPSBpdGVtLmdldENoaWxkQnlOYW1lKFwiRnJhbWVQaWNrXCIpO1xyXG4gICAgICAgICAgICBpZiAoZnJhbWVQaWNrLm5hbWUpIHRoaXMuRnJhbWVfU2hvZXMucHVzaChmcmFtZVBpY2spO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBpbml0IGZyYW1lIHBpY2sgY29sb3JzXHJcbiAgICAgICAgdGhpcy5GcmFtZV9Db2xvcnMgPSB0aGlzLkxpc3RDb2xvci5jaGlsZHJlbjtcclxuXHJcbiAgICAgICAgLy8gaW5pdCBjYW1lcmFcclxuICAgICAgICB0aGlzLkJ0bl9Eb2xsQ2FtZXJhID0gdGhpcy5Eb2xsX0NhbWVyYS5nZXRDaGlsZEJ5TmFtZShcImJ0blwiKTtcclxuXHJcbiAgICB9XHJcbn1cclxuIl19
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
        this.NodesContainer.BG.scale = 0.6;
        this.NodesContainer.ListItem.scale = 1;
        this.NodesContainer.ListItem.getComponent(cc.Widget).top = 240;
        this.NodesContainer.doll.y = 70;
        this.NodesContainer.Progress.getComponent(cc.Widget).top = 30;
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        this.NodesContainer.BG.scale = 0.5;
        this.NodesContainer.ListItem.scale = 1;
        this.NodesContainer.ListItem.getComponent(cc.Widget).top = 240;
        this.NodesContainer.doll.y = 70;
        this.NodesContainer.Progress.getComponent(cc.Widget).top = 30;
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
        this.NodesContainer.BG.scale = 0.5;
        this.NodesContainer.ListItem.scale = 0.9;
        this.NodesContainer.ListItem.getComponent(cc.Widget).top = 255;
        this.NodesContainer.doll.y = 50;
        this.NodesContainer.Progress.getComponent(cc.Widget).top = 55;
    };
    Responsive.prototype.setMobile = function () {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        this.device = this.VERTICAL_MOBILE;
        this.NodesContainer.BG.scale = 0.5;
        this.NodesContainer.ListItem.scale = 1;
        this.NodesContainer.ListItem.getComponent(cc.Widget).top = 240;
        this.NodesContainer.doll.y = 70;
        this.NodesContainer.Progress.getComponent(cc.Widget).top = 30;
        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width > 1.5) {
            // if (cc.view.getFrameSize().width / cc.view.getFrameSize().height >= 0.6 && cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.62) {
            //     // mobile mode applovin
            //     return;
            // }
            // Iphone 6 / 6 Plus / 7 / 7 Plus   
        }
        else {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFJlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLCtEQUEwRDtBQUMxRCwrQ0FBOEM7QUFHeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUF5SUM7UUF0SUcsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsUUFBUTtRQUNSLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixvQkFBYyxHQUFXLGdCQUFnQixDQUFDO1FBQzFDLHVCQUFpQixHQUFXLG1CQUFtQixDQUFDO1FBQ2hELGtCQUFZLEdBQVcsY0FBYyxDQUFDO1FBQ3RDLHFCQUFlLEdBQVcsaUJBQWlCLENBQUM7O0lBMkhoRCxDQUFDO0lBeEhhLDJCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUdTLDBCQUFLLEdBQWY7SUFFQSxDQUFDO0lBR08saUNBQVksR0FBcEI7UUFDSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxFQUFFO1lBQzlELHFCQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUMxQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDeEI7YUFBTTtZQUNILHFCQUFTLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEI7SUFDTCxDQUFDO0lBR08sa0NBQWEsR0FBckI7UUFDSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFF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LE9BQU87T0FDYSxVQUFVLENBeUk5QjtJQUFELGlCQUFDO0NBeklELEFBeUlDLENBekl1QyxFQUFFLENBQUMsU0FBUyxHQXlJbkQ7a0JBeklvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVQbGF5IGZyb20gXCIuLi9Db250cm9sbGVyL0dhbWVQbGF5XCI7XHJcbmltcG9ydCBOb2Rlc0NvbnRhaW5lciBmcm9tIFwiLi4vQ29udHJvbGxlci9Ob2Rlc0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzcG9uc2l2ZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KEdhbWVQbGF5KVxyXG4gICAgR2FtZVBsYXk6IEdhbWVQbGF5ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShOb2Rlc0NvbnRhaW5lcilcclxuICAgIE5vZGVzQ29udGFpbmVyOiBOb2Rlc0NvbnRhaW5lciA9IG51bGw7XHJcblxyXG4gICAgLy8gc3RhdGVcclxuICAgIGRldmljZTogc3RyaW5nID0gXCJcIjtcclxuICAgIGlzUm90YXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgSE9SSVpPTlRBTF9JUFg6IHN0cmluZyA9IFwiaG9yaXpvbnRhbF9JUFhcIjtcclxuICAgIEhPUklaT05UQUxfVEFCTEVUOiBzdHJpbmcgPSBcImhvcml6b250YWxfVGFibGV0XCI7XHJcbiAgICBWRVJUSUNBTF9JUFg6IHN0cmluZyA9IFwidmVydGljYWxfSVBYXCI7XHJcbiAgICBWRVJUSUNBTF9NT0JJTEU6IHN0cmluZyA9IFwidmVydGljYWxfTW9iaWxlXCI7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVJvdGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCA+IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5pc1JvdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SG9yaXpvbnRhbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5pc1JvdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFZlcnRpY2FsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldEhvcml6b250YWwoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0IC8gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCA8IDAuNjUpIHtcclxuICAgICAgICAgICAgLy8gSXBob25lIDYgLyA2IHBsdXMgLyA3IC8gNyBQbHVzIC8gWFxyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWxGb3JJcFgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWxGb3JUYWJsZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbEZvcklwWCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5IT1JJWk9OVEFMX0lQWCA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLkhPUklaT05UQUxfSVBYO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkJHLnNjYWxlID0gMC42O1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuTGlzdEl0ZW0uc2NhbGUgPSAxO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuTGlzdEl0ZW0uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gMjQwO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmRvbGwueSA9IDcwO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuUHJvZ3Jlc3MuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gMzA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbEZvclRhYmxldCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5IT1JJWk9OVEFMX1RBQkxFVCA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLkhPUklaT05UQUxfVEFCTEVUO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkJHLnNjYWxlID0gMC41O1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuTGlzdEl0ZW0uc2NhbGUgPSAxO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuTGlzdEl0ZW0uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gMjQwO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmRvbGwueSA9IDcwO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuUHJvZ3Jlc3MuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gMzA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0VmVydGljYWwoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA8IDAuNSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldElwaG9uZVgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldE1vYmlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzZXRJcGhvbmVYKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLlZFUlRJQ0FMX0lQWCA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLlZFUlRJQ0FMX0lQWDtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5CRy5zY2FsZSA9IDAuNTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkxpc3RJdGVtLnNjYWxlID0gMC45O1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuTGlzdEl0ZW0uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gMjU1O1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmRvbGwueSA9IDUwO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuUHJvZ3Jlc3MuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gNTU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0TW9iaWxlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLlZFUlRJQ0FMX01PQklMRSA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLlZFUlRJQ0FMX01PQklMRTtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5CRy5zY2FsZSA9IDAuNTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkxpc3RJdGVtLnNjYWxlID0gMTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkxpc3RJdGVtLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDI0MDtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5kb2xsLnkgPSA3MDtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLlByb2dyZXNzLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDMwO1xyXG5cclxuICAgICAgICBpZiAoY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoID4gMS41KSB7XHJcbiAgICAgICAgICAgIC8vIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoIC8gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgPj0gMC42ICYmIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA8IDAuNjIpIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vIG1vYmlsZSBtb2RlIGFwcGxvdmluXHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElwaG9uZSA2IC8gNiBQbHVzIC8gNyAvIDcgUGx1cyAgIFxyXG5cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhhbmRsZVJvdGF0ZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
