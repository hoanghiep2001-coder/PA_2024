
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
        _this.Frame_Icons = [];
        _this.Items = [];
        _this.Dress_Frames = [];
        _this.Doll_Dresses = [];
        _this.Hair_Frames = [];
        _this.Doll_B_Hairs = [];
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
    ], NodesContainer.prototype, "Doll_B_Hairs", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxOb2Rlc0NvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQW1GQztRQWpGRyxRQUFFLEdBQVksSUFBSSxDQUFDO1FBRW5CLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsUUFBRSxHQUFZLElBQUksQ0FBQztRQUVuQixPQUFPO1FBRVAsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixTQUFHLEdBQVksSUFBSSxDQUFDO1FBR3BCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsaUJBQWlCO1FBRWpCLHVCQUFpQixHQUFZLElBQUksQ0FBQztRQUVsQyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixxQkFBZSxHQUFZLElBQUksQ0FBQztRQUVoQyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixlQUFlO1FBRWYsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsTUFBTTtRQUVOLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsMEJBQW9CLEdBQVksSUFBSSxDQUFDO1FBRXJDLHdCQUFrQixHQUFZLElBQUksQ0FBQztRQUVuQyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixLQUFLO1FBRUwsY0FBUSxHQUFzQixJQUFJLENBQUM7UUFFbkMsYUFBYTtRQUViLHNCQUFnQixH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Qzt1REFDUTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztzREFDTztJQWxGVixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBbUZsQztJQUFELHFCQUFDO0NBbkZELEFBbUZDLENBbkYyQyxFQUFFLENBQUMsU0FBUyxHQW1GdkQ7a0JBbkZvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGVzQ29udGFpbmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQkc6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoaWRlTWFzazogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFVJOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBGbG93XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIE9wZW5TY2VuZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIERyZXNzVXBTY2VuZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEJhdHRsZVNjZW5lOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ1RBOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIENUQV9CdG46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDVEFfT3ZlcmxheTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIC8vIERyZXNzIFVwIFNjZW5lXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIERyZXNzVXBfQ29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgRHJlc3NVcEJnXzE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBEcmVzc1VwQmdfMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIERyZXNzVXBQaWNrVHJheTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIERyZXNzVXBUZXh0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBCYXR0bGUgU2NlbmVcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgRG9sbDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBEb2xsUG9pbnQ6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgT3Bwb25lbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIEJ0blxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBCdG5fU3RhcnQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBPcGVuU2NlbmVfQnRuSW5zdGFsbDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIERyZXNzVXBfQnRuSW5zdGFsbDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEJ0bl9TdWJtaXQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIEZYXHJcbiAgICBAcHJvcGVydHkoY2MuUGFydGljbGVTeXN0ZW0pXHJcbiAgICBGWF9IZWFydDogY2MuUGFydGljbGVTeXN0ZW0gPSBudWxsO1xyXG5cclxuICAgIC8vIERvbGwgSXRlbXNcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgRG9sbERyZXNzRGVmYXVsdDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIEZyYW1lX0ljb25zOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgICBJdGVtczogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIERyZXNzX0ZyYW1lczogY2MuTm9kZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gICAgRG9sbF9EcmVzc2VzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gICAgSGFpcl9GcmFtZXM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIERvbGxfQl9IYWlyczogY2MuTm9kZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gICAgRG9sbF9GX0hhaXJzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gICAgU2hvZV9GcmFtZXM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIERvbGxfU2hvZXM6IGNjLk5vZGVbXSA9IFtdO1xyXG59XHJcbiJdfQ==