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