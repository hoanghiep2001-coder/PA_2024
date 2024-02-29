"use strict";
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