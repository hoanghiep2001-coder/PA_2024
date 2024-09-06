"use strict";
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