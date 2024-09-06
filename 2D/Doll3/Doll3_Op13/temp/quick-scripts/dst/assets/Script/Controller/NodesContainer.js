
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
        _this.PickTray = null;
        // Flow
        _this.OpenScene = null;
        _this.DressUpScene = null;
        _this.BattleScene = null;
        _this.CTA = null;
        _this.Hand = null;
        _this.CTA_Btn = null;
        _this.CTA_Overlay = null;
        // Dress Up Scene
        _this.DressUp_Container = null;
        _this.DressUpBg_2 = null;
        _this.DressUpPickTray = null;
        // Battle Scene
        _this.Doll = null;
        // Btn
        _this.Btn_Submit = null;
        // FX
        _this.FX_Heart = null;
        // Doll Items
        _this.DollDressDefault = null;
        _this.DollHairDefault = null;
        _this.Items = [];
        _this.Dress_Frames = [];
        _this.Doll_Dresses = [];
        _this.Hair_Frames = [];
        _this.Doll_F_Hairs = [];
        _this.Shoe_Frames = [];
        // state
        _this.frameItems = [];
        _this.btnSubmit_Sprite = null;
        _this.btnNext_Sprite = null;
        return _this;
    }
    NodesContainer.prototype.onLoad = function () {
        for (var index = 0; index < this.Items.length; index++) {
            var itemNode = this.Items[index];
            var itemsInNodeArr = itemNode.children;
            for (var index_1 = 0; index_1 < itemsInNodeArr.length; index_1++) {
                var item = itemsInNodeArr[index_1];
                this.frameItems.push(item);
            }
        }
        this.btnSubmit_Sprite = this.Btn_Submit.getChildByName("Btn_Submit");
        this.btnNext_Sprite = this.Btn_Submit.getChildByName("Btn_Next");
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
        property(cc.Node)
    ], NodesContainer.prototype, "PickTray", void 0);
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
    ], NodesContainer.prototype, "Hand", void 0);
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
    ], NodesContainer.prototype, "DressUpBg_2", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "DressUpPickTray", void 0);
    __decorate([
        property(cc.Node)
    ], NodesContainer.prototype, "Doll", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxOb2Rlc0NvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQTBGQztRQXhGRyxRQUFFLEdBQVksSUFBSSxDQUFDO1FBRW5CLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsUUFBRSxHQUFZLElBQUksQ0FBQztRQUVuQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLE9BQU87UUFFUCxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFHcEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGlCQUFpQjtRQUVqQix1QkFBaUIsR0FBWSxJQUFJLENBQUM7UUFFbEMsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFFaEMsZUFBZTtRQUVmLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsTUFBTTtRQUVOLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLEtBQUs7UUFFTCxjQUFRLEdBQXNCLElBQUksQ0FBQztRQUVuQyxhQUFhO1FBRWIsc0JBQWdCLEdBQVksSUFBSSxDQUFDO1FBRWpDLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBR2hDLFdBQUssR0FBYyxFQUFFLENBQUM7UUFHdEIsa0JBQVksR0FBYyxFQUFFLENBQUM7UUFFN0Isa0JBQVksR0FBYyxFQUFFLENBQUM7UUFHN0IsaUJBQVcsR0FB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LENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7dURBQ1E7SUFFNUI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7d0RBQ1M7SUFHN0I7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7dURBQ1E7SUFwRVgsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQTBGbEM7SUFBRCxxQkFBQztDQTFGRCxBQTBGQyxDQTFGMkMsRUFBRSxDQUFDLFNBQVMsR0EwRnZEO2tCQTFGb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2Rlc0NvbnRhaW5lciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEJHOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGlkZU1hc2s6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBVSTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFBpY2tUcmF5OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBGbG93XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIE9wZW5TY2VuZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIERyZXNzVXBTY2VuZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEJhdHRsZVNjZW5lOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ1RBOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDVEFfQnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ1RBX092ZXJsYXk6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBEcmVzcyBVcCBTY2VuZVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBEcmVzc1VwX0NvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIERyZXNzVXBCZ18yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgRHJlc3NVcFBpY2tUcmF5OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBCYXR0bGUgU2NlbmVcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgRG9sbDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gQnRuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEJ0bl9TdWJtaXQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIEZYXHJcbiAgICBAcHJvcGVydHkoY2MuUGFydGljbGVTeXN0ZW0pXHJcbiAgICBGWF9IZWFydDogY2MuUGFydGljbGVTeXN0ZW0gPSBudWxsO1xyXG5cclxuICAgIC8vIERvbGwgSXRlbXNcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgRG9sbERyZXNzRGVmYXVsdDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIERvbGxIYWlyRGVmYXVsdDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIEl0ZW1zOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gICAgRHJlc3NfRnJhbWVzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgICBEb2xsX0RyZXNzZXM6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgICBIYWlyX0ZyYW1lczogY2MuTm9kZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gICAgRG9sbF9GX0hhaXJzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gICAgU2hvZV9GcmFtZXM6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuXHJcbiAgICAvLyBzdGF0ZVxyXG4gICAgZnJhbWVJdGVtczogY2MuTm9kZVtdID0gW107XHJcbiAgICBidG5TdWJtaXRfU3ByaXRlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGJ0bk5leHRfU3ByaXRlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5JdGVtcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbU5vZGU6IGNjLk5vZGUgPSB0aGlzLkl0ZW1zW2luZGV4XTtcclxuICAgICAgICAgICAgY29uc3QgaXRlbXNJbk5vZGVBcnI6IGNjLk5vZGVbXSA9IGl0ZW1Ob2RlLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaXRlbXNJbk5vZGVBcnIubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gaXRlbXNJbk5vZGVBcnJbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZUl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5idG5TdWJtaXRfU3ByaXRlID0gdGhpcy5CdG5fU3VibWl0LmdldENoaWxkQnlOYW1lKFwiQnRuX1N1Ym1pdFwiKTtcclxuICAgICAgICB0aGlzLmJ0bk5leHRfU3ByaXRlID0gdGhpcy5CdG5fU3VibWl0LmdldENoaWxkQnlOYW1lKFwiQnRuX05leHRcIik7XHJcbiAgICB9XHJcbn1cclxuIl19