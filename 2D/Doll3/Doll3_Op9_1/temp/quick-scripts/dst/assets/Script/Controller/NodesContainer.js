
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
cc._RF.push(module, 'a876a3+anpHqp1oP95zhFm5', 'NodesContainer');
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
        // Component
        _this.camera = null;
        // environment
        _this.hideMask = null;
        _this.background_1 = null;
        _this.background_2_ver = null;
        _this.background_2_hor = null;
        _this.background_3 = null;
        // container
        _this.GamePlay = null;
        _this.UI_Container = null;
        _this.buttons = null;
        _this.scene1 = null;
        _this.scene3 = null;
        // CTA
        _this.CTA = null;
        _this.CTA_overlay = null;
        _this.CTA_btn = null;
        _this.CTA_icon = null;
        _this.CTA_logo = null;
        // hint
        _this.hand_1 = null;
        _this.hand_2 = null;
        // doll
        _this.doll = null;
        _this.doll_scene3 = null;
        _this.doll_mouth_default = null;
        _this.doll_mouth_suprise = null;
        _this.doll_tears_left = null;
        _this.doll_tears_right = null;
        _this.doll_dress_default = null;
        _this.doll_dress = null;
        // UI
        _this.logo = null;
        _this.icon = null;
        _this.door = null;
        _this.adultery = null;
        _this.UI_button_revenge = null;
        _this.item_Dress_btn = null;
        _this.items = [];
        // effects
        _this.effect_blink_Doll = null;
        _this.effect_blink_item = null;
        _this.effect_heart = null;
        return _this;
    }
    NodesContainer.prototype.start = function () {
    };
    __decorate([
        property(cc.Camera)
    ], NodesContainer.prototype, "camera", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "hideMask", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "background_1", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "background_2_ver", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "background_2_hor", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "background_3", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "GamePlay", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "UI_Container", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "buttons", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "scene1", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "scene3", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "CTA", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "CTA_overlay", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "CTA_btn", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "CTA_icon", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "CTA_logo", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "hand_1", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "hand_2", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "doll", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "doll_scene3", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "doll_mouth_default", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "doll_mouth_suprise", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodesContainer.prototype, "doll_tears_left", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodesContainer.prototype, "doll_tears_right", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "doll_dress_default", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "doll_dress", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "logo", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "icon", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "door", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "adultery", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "UI_button_revenge", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "item_Dress_btn", void 0);
    __decorate([
        property([cc.Node])
    ], NodesContainer.prototype, "items", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], NodesContainer.prototype, "effect_blink_Doll", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], NodesContainer.prototype, "effect_blink_item", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], NodesContainer.prototype, "effect_heart", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxOb2Rlc0NvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQStGQztRQTdGRyxZQUFZO1FBRVosWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixjQUFjO1FBRWQsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFFakMsc0JBQWdCLEdBQVksSUFBSSxDQUFDO1FBRWpDLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLFlBQVk7UUFFWixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLE1BQU07UUFFTixTQUFHLEdBQVksSUFBSSxDQUFDO1FBRXBCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLE9BQU87UUFFUCxZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsT0FBTztRQUVQLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsd0JBQWtCLEdBQVksSUFBSSxDQUFDO1FBRW5DLHdCQUFrQixHQUFZLElBQUksQ0FBQztRQUVuQyxxQkFBZSxHQUFnQixJ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QUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZEQUNnQjtJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBEQUNhO0lBRy9CO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2lEQUNFO0lBSXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUM7NkRBQ2dCO0lBRTVDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUM7NkRBQ2dCO0lBRTVDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUM7d0RBQ1c7SUF6RnRCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0ErRmxDO0lBQUQscUJBQUM7Q0EvRkQsQUErRkMsQ0EvRjJDLEVBQUUsQ0FBQyxTQUFTLEdBK0Z2RDtrQkEvRm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2Rlc0NvbnRhaW5lciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gQ29tcG9uZW50XHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xyXG5cclxuICAgIC8vIGVudmlyb25tZW50XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhpZGVNYXNrOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFja2dyb3VuZF8xOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFja2dyb3VuZF8yX3ZlcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhY2tncm91bmRfMl9ob3I6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYWNrZ3JvdW5kXzM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIGNvbnRhaW5lclxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBHYW1lUGxheTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFVJX0NvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ1dHRvbnM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzY2VuZTE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzY2VuZTM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICBcclxuICAgIC8vIENUQVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDVEE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDVEFfb3ZlcmxheTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIENUQV9idG46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDVEFfaWNvbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIENUQV9sb2dvOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBoaW50XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmRfMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmRfMjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gZG9sbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkb2xsOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZG9sbF9zY2VuZTM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkb2xsX21vdXRoX2RlZmF1bHQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkb2xsX21vdXRoX3N1cHJpc2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgZG9sbF90ZWFyc19sZWZ0OiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBkb2xsX3RlYXJzX3JpZ2h0OiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRvbGxfZHJlc3NfZGVmYXVsdDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRvbGxfZHJlc3M6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIFVJXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxvZ286IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBpY29uOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZG9vcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGFkdWx0ZXJ5OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgVUlfYnV0dG9uX3JldmVuZ2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBpdGVtX0RyZXNzX2J0bjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIGl0ZW1zOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICAvLyBlZmZlY3RzXHJcbiAgICBAcHJvcGVydHkoY2MuUGFydGljbGVTeXN0ZW0pXHJcbiAgICBlZmZlY3RfYmxpbmtfRG9sbDogY2MuUGFydGljbGVTeXN0ZW0gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlBhcnRpY2xlU3lzdGVtKVxyXG4gICAgZWZmZWN0X2JsaW5rX2l0ZW06IGNjLlBhcnRpY2xlU3lzdGVtID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QYXJ0aWNsZVN5c3RlbSlcclxuICAgIGVmZmVjdF9oZWFydDogY2MuUGFydGljbGVTeXN0ZW0gPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIl19