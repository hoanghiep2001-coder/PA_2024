
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
        // hint
        _this.hand_1 = null;
        _this.hand_2 = null;
        // doll
        _this.doll = null;
        _this.doll_mouth_default = null;
        _this.doll_mouth_suprise = null;
        _this.doll_tears_left = null;
        _this.doll_tears_right = null;
        _this.doll_dress = null;
        _this.doll_dress_default = null;
        // UI
        _this.door = null;
        _this.adultery = null;
        _this.UI_button_revenge = null;
        _this.item_Dress_btn = null;
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
    ], NodesContainer.prototype, "hand_1", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "hand_2", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "doll", void 0);
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
    ], NodesContainer.prototype, "doll_dress", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "doll_dress_default", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxOb2Rlc0NvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQWdGQztRQTlFRyxZQUFZO1FBRVosWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixjQUFjO1FBRWQsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0Isc0JBQWdCLEdBQVksSUFBSSxDQUFDO1FBRWpDLHNCQUFnQixHQUFZLElBQUksQ0FBQztRQUVqQyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixZQUFZO1FBRVosY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixNQUFNO1FBRU4sU0FBRyxHQUFZLElBQUksQ0FBQztRQUVwQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLE9BQU87UUFFUCxZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsT0FBTztRQUVQLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsd0JBQWtCLEdBQVksSUFBSSxDQUFDO1FBRW5DLHdCQUFrQixHQUFZLElBQUksQ0FBQztRQUVuQyxxQkFBZSxHQUFnQixJQUFJLENBQUM7UUFFcEMsc0JBQWdCLEdBQWdCLElBQUksQ0FBQztRQUVyQyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQix3QkFBa0IsR0FBWSxJQUFJLENBQUM7UUFFbkMsS0FBSztRQUVMLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6Qix1QkFBaUIsR0FBWSxJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0IsVUFBVTtRQUVWLHVCQUFpQixHQUFzQixJQUFJLENBQUM7UUFFNUMsdUJBQWlCLEdBQXNCLElBQUksQ0FBQztRQUU1QyxrQkFBWSxHQUFzQixJQUFJLENBQUM7O0lBTTNDLENBQUM7SUFIYSw4QkFBSyxHQUFmO0lBRUEsQ0FBQztJQTNFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2tEQUNLO0lBSXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ1c7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0REFDZTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzREQUNlO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ1c7SUFJN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNXO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNLO0lBSXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ0U7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNNO0lBSXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDSztJQUl2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OERBQ2lCO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OERBQ2lCO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7MkRBQ2M7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs0REFDZTtJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OERBQ2lCO0lBSW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZEQUNnQjtJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBEQUNhO0lBSS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUM7NkRBQ2dCO0lBRTVDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUM7NkRBQ2dCO0lBRTVDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUM7d0RBQ1c7SUExRXRCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FnRmxDO0lBQUQscUJBQUM7Q0FoRkQsQUFnRkMsQ0FoRjJDLEVBQUUsQ0FBQyxTQUFTLEdBZ0Z2RDtrQkFoRm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2Rlc0NvbnRhaW5lciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gQ29tcG9uZW50XHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxyXG4gICAgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xyXG5cclxuICAgIC8vIGVudmlyb25tZW50XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhY2tncm91bmRfMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhY2tncm91bmRfMl92ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYWNrZ3JvdW5kXzJfaG9yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFja2dyb3VuZF8zOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBjb250YWluZXJcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgR2FtZVBsYXk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBVSV9Db250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidXR0b25zOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc2NlbmUxOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc2NlbmUzOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgXHJcbiAgICAvLyBDVEFcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ1RBOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ1RBX292ZXJsYXk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDVEFfYnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBoaW50XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmRfMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbmRfMjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gZG9sbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkb2xsOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZG9sbF9tb3V0aF9kZWZhdWx0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZG9sbF9tb3V0aF9zdXByaXNlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIGRvbGxfdGVhcnNfbGVmdDogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgZG9sbF90ZWFyc19yaWdodDogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkb2xsX2RyZXNzOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZG9sbF9kcmVzc19kZWZhdWx0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBVSVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkb29yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYWR1bHRlcnk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBVSV9idXR0b25fcmV2ZW5nZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGl0ZW1fRHJlc3NfYnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBlZmZlY3RzXHJcbiAgICBAcHJvcGVydHkoY2MuUGFydGljbGVTeXN0ZW0pXHJcbiAgICBlZmZlY3RfYmxpbmtfRG9sbDogY2MuUGFydGljbGVTeXN0ZW0gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlBhcnRpY2xlU3lzdGVtKVxyXG4gICAgZWZmZWN0X2JsaW5rX2l0ZW06IGNjLlBhcnRpY2xlU3lzdGVtID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QYXJ0aWNsZVN5c3RlbSlcclxuICAgIGVmZmVjdF9oZWFydDogY2MuUGFydGljbGVTeXN0ZW0gPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIl19