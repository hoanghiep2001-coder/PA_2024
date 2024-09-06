
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
var IronSource_1 = require("./IronSource");
var NodeContanier_1 = require("./NodeContanier");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.IronSource = null;
        _this.NodeContainer = null;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.GamePlay = null;
        // state
        _this.isTouch = false;
        return _this;
    }
    TouchAreaController.prototype.onLoad = function () {
    };
    TouchAreaController.prototype.start = function () {
        this.registerEvent();
    };
    TouchAreaController.prototype.registerEvent = function () {
        this.NodeContainer.Point_Cleanser.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.NodeContainer.Point_Cleanser.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.NodeContainer.Point_Cleanser.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.NodeContainer.Point_Cleanser.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.NodeContainer.Point_Tweezers.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.NodeContainer.Point_Tweezers.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.NodeContainer.Point_Tweezers.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.NodeContainer.Point_Tweezers.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.NodeContainer.HideMask.on(cc.Node.EventType.TOUCH_START, this.hideMaskTouchStart, this);
    };
    TouchAreaController.prototype.hideMaskTouchStart = function (e) {
        // mtg & applovin
        // Constants.maggotRemoved >= 1 && this.GameController.installHandle();
        // ironsource
        // this.IronSource.handleIronSourcePlaySound();
        // mtg & applovin
        // Constants.isToStore && this.GameController.installHandle();
    };
    TouchAreaController.prototype.enableTouch = function () {
        constants_1.Constants.isCanTouch = false;
    };
    TouchAreaController.prototype.touchStart = function (e) {
        constants_1.Constants.isToStore && this.GameController.installHandle();
        if (!constants_1.Constants.isCanTouch)
            return;
        constants_1.Constants.maggotRemoved >= 1 && this.GameController.installHandle();
        if (!constants_1.Constants.isDoneCleanser)
            this.isTouch = true;
        !constants_1.Constants.isDoneCleanser && this.GamePlay.activeCleanSound();
        this.NodeContainer.Hand_1.active = false;
        this.NodeContainer.Hand_2.active = false;
        this.NodeContainer.Text_Drag.active = false;
        // this.IronSource.handleIronSourcePlaySound();
    };
    TouchAreaController.prototype.touchMove = function (e) {
        if (!constants_1.Constants.isCanTouch || constants_1.Constants.ironSource.isEndGame)
            return;
        var pos = e.getLocation();
        var posConverted = this.node.convertToNodeSpaceAR(pos);
        !constants_1.Constants.isDoneCleanser && this.moveCleanser(posConverted, pos);
        constants_1.Constants.isDoneCleanser && this.moveTweezers(posConverted, pos);
    };
    TouchAreaController.prototype.touchEnd = function (e) {
        this.isTouch = false;
        var pos = e.getLocation();
        !constants_1.Constants.isDoneCleanser && this.setCurrentPosCleanser(pos);
        constants_1.Constants.isDoneCleanser && this.setCurrentPosTweezers(pos);
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.cleanSound);
        this.AudioManager.cleanSound.loop = false;
    };
    TouchAreaController.prototype.moveCleanser = function (posConverted, pos) {
        this.NodeContainer.Point_Cleanser.setPosition(posConverted.x + 35, posConverted.y - 30);
        this.NodeContainer.sp_Cleanser.node.x = (pos.x - cc.winSize.width / 2) - 60;
        this.NodeContainer.sp_Cleanser.node.y = (pos.y - cc.winSize.height / 2) - 80;
    };
    TouchAreaController.prototype.moveTweezers = function (posConverted, pos) {
        this.NodeContainer.Point_Tweezers.setPosition(posConverted);
        this.NodeContainer.sp_Tweezers.node.x = (pos.x - cc.winSize.width / 2) - 60 - constants_1.Constants.Responsive.calculatedX;
        this.NodeContainer.sp_Tweezers.node.y = (pos.y - cc.winSize.height / 2) - 90 - constants_1.Constants.Responsive.calculatedY;
        this.NodeContainer.Point_Tweezer_Head.x = (pos.x - cc.winSize.width / 2) - 45 - constants_1.Constants.Responsive.calculatedX;
        this.NodeContainer.Point_Tweezer_Head.y = (pos.y - cc.winSize.height / 2) - 85 - constants_1.Constants.Responsive.calculatedY;
    };
    TouchAreaController.prototype.setCurrentPosCleanser = function (pos) {
        var posConverted = this.node.convertToNodeSpaceAR(pos);
        this.NodeContainer.Point_Cleanser.setPosition(posConverted);
    };
    TouchAreaController.prototype.setCurrentPosTweezers = function (pos) {
        this.NodeContainer.Point_Tweezers.x = (pos.x - cc.winSize.width / 2) - constants_1.Constants.Responsive.calculatedX;
        this.NodeContainer.Point_Tweezers.y = (pos.y - cc.winSize.height / 2) - constants_1.Constants.Responsive.calculatedY;
    };
    __decorate([
        property(IronSource_1.default)
    ], TouchAreaController.prototype, "IronSource", void 0);
    __decorate([
        property(NodeContanier_1.default)
    ], TouchAreaController.prototype, "NodeContainer", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCx1Q0FBa0M7QUFDbEMsMkNBQXNDO0FBQ3RDLGlEQUE0QztBQUV0QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5Qyx1Q0FBWTtJQUFyRDtRQUFBLHFFQXVIQztRQXRIQyxZQUFZO1FBRVosZ0JBQVUsR0FBZSxJQUFJLENBQUM7UUFFOUIsbUJBQWEsR0FBa0IsSUFBSSxDQUFDO1FBRXBDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsY0FBUSxHQUFhLElBQUksQ0FBQztRQUcxQixRQUFRO1FBQ1IsYUFBTyxHQUFZLEtBQUssQ0FBQzs7SUF3RzNCLENBQUM7SUFyR1csb0NBQU0sR0FBaEI7SUFFQSxDQUFDO0lBR1MsbUNBQUssR0FBZjtRQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBR08sMkNBQWEsR0FBckI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUUs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LENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUM3RCxDQUFDO0lBRU8sbURBQXFCLEdBQTdCLFVBQThCLEdBQUc7UUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDeEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7SUFDM0csQ0FBQztJQW5IRDtRQURDLFFBQVEsQ0FBQyxvQkFBVSxDQUFDOzJEQUNTO0lBRTlCO1FBREMsUUFBUSxDQUFDLHVCQUFhLENBQUM7OERBQ1k7SUFFcEM7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQzs2REFDVztJQUVsQztRQURDLFFBQVEsQ0FBQywrQkFBYyxDQUFDOytEQUNhO0lBRXRDO1FBREMsUUFBUSxDQUFDLGtCQUFRLENBQUM7eURBQ087SUFYZixtQkFBbUI7UUFEL0IsT0FBTztPQUNLLG1CQUFtQixDQXVIL0I7SUFBRCwwQkFBQztDQXZIRCxBQXVIQyxDQXZId0MsRUFBRSxDQUFDLFNBQVMsR0F1SHBEO0FBdkhZLGtEQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IEdhbWVQbGF5IGZyb20gXCIuL0dhbWVQbGF5XCI7XHJcbmltcG9ydCBJcm9uU291cmNlIGZyb20gXCIuL0lyb25Tb3VyY2VcIjtcclxuaW1wb3J0IE5vZGVDb250YWluZXIgZnJvbSBcIi4vTm9kZUNvbnRhbmllclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBUb3VjaEFyZWFDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAvLyBDb21wb25lbnRcclxuICBAcHJvcGVydHkoSXJvblNvdXJjZSlcclxuICBJcm9uU291cmNlOiBJcm9uU291cmNlID0gbnVsbDtcclxuICBAcHJvcGVydHkoTm9kZUNvbnRhaW5lcilcclxuICBOb2RlQ29udGFpbmVyOiBOb2RlQ29udGFpbmVyID0gbnVsbDtcclxuICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuICBAcHJvcGVydHkoR2FtZUNvbnRyb2xsZXIpXHJcbiAgR2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICBAcHJvcGVydHkoR2FtZVBsYXkpXHJcbiAgR2FtZVBsYXk6IEdhbWVQbGF5ID0gbnVsbDtcclxuXHJcblxyXG4gIC8vIHN0YXRlXHJcbiAgaXNUb3VjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSByZWdpc3RlckV2ZW50KCk6IHZvaWQge1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlBvaW50X0NsZWFuc2VyLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlBvaW50X0NsZWFuc2VyLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Qb2ludF9DbGVhbnNlci5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlBvaW50X0NsZWFuc2VyLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlBvaW50X1R3ZWV6ZXJzLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlBvaW50X1R3ZWV6ZXJzLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Qb2ludF9Ud2VlemVycy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlBvaW50X1R3ZWV6ZXJzLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkhpZGVNYXNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLmhpZGVNYXNrVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBoaWRlTWFza1RvdWNoU3RhcnQoZTogYW55KTogdm9pZCB7XHJcbiAgICAvLyBtdGcgJiBhcHBsb3ZpblxyXG4gICAgLy8gQ29uc3RhbnRzLm1hZ2dvdFJlbW92ZWQgPj0gMSAmJiB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUoKTtcclxuXHJcbiAgICAvLyBpcm9uc291cmNlXHJcbiAgICAvLyB0aGlzLklyb25Tb3VyY2UuaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpO1xyXG5cclxuICAgICAvLyBtdGcgJiBhcHBsb3ZpblxyXG4gICAgLy8gQ29uc3RhbnRzLmlzVG9TdG9yZSAmJiB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGVuYWJsZVRvdWNoKCk6IHZvaWQge1xyXG4gICAgQ29uc3RhbnRzLmlzQ2FuVG91Y2ggPSBmYWxzZTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHRvdWNoU3RhcnQoZTogYW55KTogdm9pZCB7XHJcbiAgICBDb25zdGFudHMuaXNUb1N0b3JlICYmIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG4gICAgaWYgKCFDb25zdGFudHMuaXNDYW5Ub3VjaCkgcmV0dXJuO1xyXG4gICAgQ29uc3RhbnRzLm1hZ2dvdFJlbW92ZWQgPj0gMSAmJiB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUoKTtcclxuICAgIGlmKCFDb25zdGFudHMuaXNEb25lQ2xlYW5zZXIpIHRoaXMuaXNUb3VjaCA9IHRydWU7XHJcbiAgICAhQ29uc3RhbnRzLmlzRG9uZUNsZWFuc2VyICYmIHRoaXMuR2FtZVBsYXkuYWN0aXZlQ2xlYW5Tb3VuZCgpO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkhhbmRfMS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5IYW5kXzIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuVGV4dF9EcmFnLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gdGhpcy5Jcm9uU291cmNlLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHRvdWNoTW92ZShlOiBjYy5Ub3VjaCk6IHZvaWQge1xyXG4gICAgaWYgKCFDb25zdGFudHMuaXNDYW5Ub3VjaCB8fCBDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUpIHJldHVybjtcclxuICAgIGxldCBwb3MgPSBlLmdldExvY2F0aW9uKCk7XHJcbiAgICBsZXQgcG9zQ29udmVydGVkID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XHJcblxyXG4gICAgIUNvbnN0YW50cy5pc0RvbmVDbGVhbnNlciAmJiB0aGlzLm1vdmVDbGVhbnNlcihwb3NDb252ZXJ0ZWQsIHBvcyk7XHJcbiAgICBDb25zdGFudHMuaXNEb25lQ2xlYW5zZXIgJiYgdGhpcy5tb3ZlVHdlZXplcnMocG9zQ29udmVydGVkLCBwb3MpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgdG91Y2hFbmQoZTogY2MuVG91Y2gpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNUb3VjaCA9IGZhbHNlO1xyXG4gICAgbGV0IHBvcyA9IGUuZ2V0TG9jYXRpb24oKTtcclxuXHJcbiAgICAhQ29uc3RhbnRzLmlzRG9uZUNsZWFuc2VyICYmIHRoaXMuc2V0Q3VycmVudFBvc0NsZWFuc2VyKHBvcyk7XHJcbiAgICBDb25zdGFudHMuaXNEb25lQ2xlYW5zZXIgJiYgdGhpcy5zZXRDdXJyZW50UG9zVHdlZXplcnMocG9zKTtcclxuICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5jbGVhblNvdW5kKVxyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIuY2xlYW5Tb3VuZC5sb29wID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBtb3ZlQ2xlYW5zZXIocG9zQ29udmVydGVkOiBjYy5WZWMyLCBwb3M6IGNjLlZlYzIpOiB2b2lkIHtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Qb2ludF9DbGVhbnNlci5zZXRQb3NpdGlvbihwb3NDb252ZXJ0ZWQueCArIDM1LCBwb3NDb252ZXJ0ZWQueSAtIDMwKTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5zcF9DbGVhbnNlci5ub2RlLnggPSAocG9zLnggLSBjYy53aW5TaXplLndpZHRoIC8gMikgLSA2MDtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5zcF9DbGVhbnNlci5ub2RlLnkgPSAocG9zLnkgLSBjYy53aW5TaXplLmhlaWdodCAvIDIpIC0gODAgO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgbW92ZVR3ZWV6ZXJzKHBvc0NvbnZlcnRlZDogY2MuVmVjMiwgcG9zOiBjYy5WZWMyKTogdm9pZCB7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuUG9pbnRfVHdlZXplcnMuc2V0UG9zaXRpb24ocG9zQ29udmVydGVkKTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5zcF9Ud2VlemVycy5ub2RlLnggPSAocG9zLnggLSBjYy53aW5TaXplLndpZHRoIC8gMikgLSA2MCAtIENvbnN0YW50cy5SZXNwb25zaXZlLmNhbGN1bGF0ZWRYO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLnNwX1R3ZWV6ZXJzLm5vZGUueSA9IChwb3MueSAtIGNjLndpblNpemUuaGVpZ2h0IC8gMikgLSA5MCAtIENvbnN0YW50cy5SZXNwb25zaXZlLmNhbGN1bGF0ZWRZO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlBvaW50X1R3ZWV6ZXJfSGVhZC54ID0gKHBvcy54IC0gY2Mud2luU2l6ZS53aWR0aCAvIDIpIC0gNDUgLSBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkWDtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Qb2ludF9Ud2VlemVyX0hlYWQueSA9IChwb3MueSAtIGNjLndpblNpemUuaGVpZ2h0IC8gMikgLSA4NSAtIENvbnN0YW50cy5SZXNwb25zaXZlLmNhbGN1bGF0ZWRZO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc2V0Q3VycmVudFBvc0NsZWFuc2VyKHBvcyk6IHZvaWQge1xyXG4gICAgbGV0IHBvc0NvbnZlcnRlZCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlBvaW50X0NsZWFuc2VyLnNldFBvc2l0aW9uKHBvc0NvbnZlcnRlZClcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q3VycmVudFBvc1R3ZWV6ZXJzKHBvcyk6IHZvaWQge1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlBvaW50X1R3ZWV6ZXJzLnggPSAocG9zLnggLSBjYy53aW5TaXplLndpZHRoIC8gMikgLSBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkWDtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Qb2ludF9Ud2VlemVycy55ID0gKHBvcy55IC0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyKSAtIENvbnN0YW50cy5SZXNwb25zaXZlLmNhbGN1bGF0ZWRZO1xyXG4gIH1cclxufVxyXG4iXX0=