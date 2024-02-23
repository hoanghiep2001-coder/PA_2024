
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Responsive = /** @class */ (function (_super) {
    __extends(Responsive, _super);
    function Responsive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.NodesContainer = null;
        _this.GamePlay = null;
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
            this.isRotate = true;
            this.setHorizontal();
        }
        else {
            this.isRotate = false;
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
        this.NodesContainer.background_2_hor.active = true;
        this.NodesContainer.background_2_ver.active = false;
        this.NodesContainer.background_2_hor.scale = 0.55;
        this.NodesContainer.background_1.scale = 0.45;
        this.NodesContainer.background_1.y = 95;
        this.NodesContainer.background_3.scale = 0.55;
        this.NodesContainer.adultery.scale = 0.65;
        this.NodesContainer.UI_Container.x = 0;
        this.NodesContainer.UI_Container.y = 20;
        this.NodesContainer.buttons.x = 0;
        this.NodesContainer.buttons.y = -10;
        this.NodesContainer.CTA_btn.y = -160;
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        this.NodesContainer.background_2_hor.active = true;
        this.NodesContainer.background_2_ver.active = false;
        this.NodesContainer.background_2_hor.scale = 0.45;
        // this.NodesContainer.background_2_ver.scale = 0.3;
        this.NodesContainer.background_1.scale = 0.3;
        this.NodesContainer.background_1.y = 20;
        this.NodesContainer.background_3.scale = 0.38;
        this.NodesContainer.adultery.scale = 0.65;
        this.NodesContainer.UI_Container.x = 0;
        this.NodesContainer.UI_Container.y = 20;
        this.NodesContainer.buttons.x = 0;
        this.NodesContainer.buttons.y = 0;
        this.NodesContainer.CTA_btn.y = -160;
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
        this.NodesContainer.background_2_hor.active = false;
        this.NodesContainer.background_2_ver.active = true;
        this.NodesContainer.background_2_ver.scale = 0.4;
        this.NodesContainer.background_1.scale = 0.4;
        this.NodesContainer.background_1.y = 20;
        this.NodesContainer.background_3.scale = 0.45;
        this.NodesContainer.adultery.scale = 0.65;
        this.NodesContainer.UI_Container.x = 0;
        this.NodesContainer.UI_Container.y = -30;
        this.NodesContainer.buttons.x = 0;
        this.NodesContainer.buttons.y = -20;
        this.NodesContainer.CTA_btn.y = -160;
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
            this.NodesContainer.background_2_hor.active = false;
            this.NodesContainer.background_2_ver.active = true;
            this.NodesContainer.background_2_ver.scale = 0.3;
            this.NodesContainer.background_1.scale = 0.3;
            this.NodesContainer.background_1.y = 0;
            this.NodesContainer.background_3.scale = 0.3;
            this.NodesContainer.adultery.scale = 0.55;
            this.NodesContainer.UI_Container.x = 0;
            this.NodesContainer.UI_Container.y = 0;
            this.NodesContainer.buttons.x = 0;
            this.NodesContainer.buttons.y = 0;
            this.NodesContainer.CTA_btn.y = -160;
        }
        else {
            this.NodesContainer.background_2_hor.active = true;
            this.NodesContainer.background_2_ver.active = false;
            this.NodesContainer.background_2_hor.scale = 0.45;
            // this.NodesContainer.background_2_ver.scale = 0.3;
            this.NodesContainer.background_1.scale = 0.3;
            this.NodesContainer.background_1.y = 20;
            this.NodesContainer.background_3.scale = 0.38;
            this.NodesContainer.adultery.scale = 0.65;
            this.NodesContainer.UI_Container.x = 0;
            this.NodesContainer.UI_Container.y = 20;
            this.NodesContainer.buttons.x = 0;
            this.NodesContainer.buttons.y = 0;
            this.NodesContainer.CTA_btn.y = -160;
        }
    };
    Responsive.prototype.update = function (dt) {
        this.handleRotate();
    };
    __decorate([
        property(NodesContainer_1.default)
    ], Responsive.prototype, "NodesContainer", void 0);
    __decorate([
        property(GamePlay_1.default)
    ], Responsive.prototype, "GamePlay", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFJlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLCtEQUEwRDtBQUlwRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQWtMQztRQWhMRyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsY0FBUSxHQUFhLElBQUksQ0FBQztRQUcxQixRQUFRO1FBQ1IsWUFBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLG9CQUFjLEdBQVcsZ0JBQWdCLENBQUM7UUFDMUMsdUJBQWlCLEdBQVcsbUJBQW1CLENBQUM7UUFDaEQsa0JBQVksR0FBVyxjQUFjLENBQUM7UUFDdEMscUJBQWUsR0FBVyxpQkFBaUIsQ0FBQzs7SUFvS2hELENBQUM7SUFsS2EsMkJBQU0sR0FBaEI7SUFFQSxDQUFDO0lBRVMsMEJBQUssR0FBZjtJQUVBLENBQUM7SUFFTyxpQ0FBWSxHQUFwQjtRQUNJLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUU7WUFDOUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEI7SUFDTCxDQUFDO0lBRU8sa0NBQWEsR0FBckI7UUFDSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxHQUFH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QztZQUNsQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7U0FDeEM7SUFDTCxDQUFDO0lBR1MsMkJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQS9LRDtRQURDLFFBQVEsQ0FBQyx3QkFBYyxDQUFDO3NEQUNhO0lBRXRDO1FBREMsUUFBUSxDQUFDLGtCQUFRLENBQUM7Z0RBQ087SUFKVCxVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBa0w5QjtJQUFELGlCQUFDO0NBbExELEFBa0xDLENBbEx1QyxFQUFFLENBQUMsU0FBUyxHQWtMbkQ7a0JBbExvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVQbGF5IGZyb20gXCIuLi9Db250cm9sbGVyL0dhbWVQbGF5XCI7XHJcbmltcG9ydCBOb2Rlc0NvbnRhaW5lciBmcm9tIFwiLi4vQ29udHJvbGxlci9Ob2Rlc0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzcG9uc2l2ZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoTm9kZXNDb250YWluZXIpXHJcbiAgICBOb2Rlc0NvbnRhaW5lcjogTm9kZXNDb250YWluZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KEdhbWVQbGF5KVxyXG4gICAgR2FtZVBsYXk6IEdhbWVQbGF5ID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy8gc3RhdGVcclxuICAgIGRldmljZTogc3RyaW5nID0gXCJcIjtcclxuICAgIGlzUm90YXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgSE9SSVpPTlRBTF9JUFg6IHN0cmluZyA9IFwiaG9yaXpvbnRhbF9JUFhcIjtcclxuICAgIEhPUklaT05UQUxfVEFCTEVUOiBzdHJpbmcgPSBcImhvcml6b250YWxfVGFibGV0XCI7XHJcbiAgICBWRVJUSUNBTF9JUFg6IHN0cmluZyA9IFwidmVydGljYWxfSVBYXCI7XHJcbiAgICBWRVJUSUNBTF9NT0JJTEU6IHN0cmluZyA9IFwidmVydGljYWxfTW9iaWxlXCI7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVJvdGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCA+IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNSb3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzUm90YXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmVydGljYWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggPCAwLjY1KSB7XHJcbiAgICAgICAgICAgIC8vIElwaG9uZSA2IC8gNiBwbHVzIC8gNyAvIDcgUGx1cyAvIFhcclxuICAgICAgICAgICAgdGhpcy5zZXRIb3Jpem9udGFsRm9ySXBYKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRIb3Jpem9udGFsRm9yVGFibGV0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbEZvcklwWCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5IT1JJWk9OVEFMX0lQWCA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLkhPUklaT05UQUxfSVBYO1xyXG4gXHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5iYWNrZ3JvdW5kXzJfaG9yLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5iYWNrZ3JvdW5kXzJfdmVyLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmJhY2tncm91bmRfMl9ob3Iuc2NhbGUgPSAwLjU1O1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuYmFja2dyb3VuZF8xLnNjYWxlID0gMC40NTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmJhY2tncm91bmRfMS55ID0gOTU7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5iYWNrZ3JvdW5kXzMuc2NhbGUgPSAwLjU1O1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmFkdWx0ZXJ5LnNjYWxlID0gMC42NTtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5VSV9Db250YWluZXIueCA9IDA7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5VSV9Db250YWluZXIueSA9IDIwO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuYnV0dG9ucy54ID0gMDtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmJ1dHRvbnMueSA9IC0xMDtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkNUQV9idG4ueSA9IC0xNjA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsRm9yVGFibGV0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLkhPUklaT05UQUxfVEFCTEVUID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuSE9SSVpPTlRBTF9UQUJMRVQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5iYWNrZ3JvdW5kXzJfaG9yLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5iYWNrZ3JvdW5kXzJfdmVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuYmFja2dyb3VuZF8yX2hvci5zY2FsZSA9IDAuNDU7XHJcbiAgICAgICAgLy8gdGhpcy5Ob2Rlc0NvbnRhaW5lci5iYWNrZ3JvdW5kXzJfdmVyLnNjYWxlID0gMC4zO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmJhY2tncm91bmRfMS5zY2FsZSA9IDAuMztcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmJhY2tncm91bmRfMS55ID0gMjA7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5iYWNrZ3JvdW5kXzMuc2NhbGUgPSAwLjM4O1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmFkdWx0ZXJ5LnNjYWxlID0gMC42NTtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5VSV9Db250YWluZXIueCA9IDA7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5VSV9Db250YWluZXIueSA9IDIwO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuYnV0dG9ucy54ID0gMDtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmJ1dHRvbnMueSA9IDA7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5DVEFfYnRuLnkgPSAtMTYwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0VmVydGljYWwoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA8IDAuNSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldElwaG9uZVgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldE1vYmlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldElwaG9uZVgoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuVkVSVElDQUxfSVBYID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuVkVSVElDQUxfSVBYO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmJhY2tncm91bmRfMl9ob3IuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5iYWNrZ3JvdW5kXzJfdmVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5iYWNrZ3JvdW5kXzJfdmVyLnNjYWxlID0gMC40O1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmJhY2tncm91bmRfMS5zY2FsZSA9IDAuNDtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmJhY2tncm91bmRfMS55ID0gMjA7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5iYWNrZ3JvdW5kXzMuc2NhbGUgPSAwLjQ1O1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmFkdWx0ZXJ5LnNjYWxlID0gMC42NTtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5VSV9Db250YWluZXIueCA9IDA7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5VSV9Db250YWluZXIueSA9IC0zMDtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmJ1dHRvbnMueCA9IDA7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5idXR0b25zLnkgPSAtMjA7XHJcbiAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5DVEFfYnRuLnkgPSAtMTYwO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRNb2JpbGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuVkVSVElDQUxfTU9CSUxFID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuVkVSVElDQUxfTU9CSUxFO1xyXG5cclxuICAgICAgICBpZiAoY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoID4gMS41KSB7XHJcbiAgICAgICAgICAgIC8vIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoIC8gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgPj0gMC42ICYmIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA8IDAuNjIpIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vIG1vYmlsZSBtb2RlIGFwcGxvdmluXHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElwaG9uZSA2IC8gNiBQbHVzIC8gNyAvIDcgUGx1cyAgIFxyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmJhY2tncm91bmRfMl9ob3IuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuYmFja2dyb3VuZF8yX3Zlci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmJhY2tncm91bmRfMl92ZXIuc2NhbGUgPSAwLjM7XHJcblxyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmJhY2tncm91bmRfMS5zY2FsZSA9IDAuMztcclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5iYWNrZ3JvdW5kXzEueSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuYmFja2dyb3VuZF8zLnNjYWxlID0gMC4zO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5hZHVsdGVyeS5zY2FsZSA9IDAuNTU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLlVJX0NvbnRhaW5lci54ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5VSV9Db250YWluZXIueSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuYnV0dG9ucy54ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5idXR0b25zLnkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLkNUQV9idG4ueSA9IC0xNjA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5iYWNrZ3JvdW5kXzJfaG9yLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuYmFja2dyb3VuZF8yX3Zlci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5iYWNrZ3JvdW5kXzJfaG9yLnNjYWxlID0gMC40NTtcclxuICAgICAgICAgICAgLy8gdGhpcy5Ob2Rlc0NvbnRhaW5lci5iYWNrZ3JvdW5kXzJfdmVyLnNjYWxlID0gMC4zO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuYmFja2dyb3VuZF8xLnNjYWxlID0gMC4zO1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmJhY2tncm91bmRfMS55ID0gMjA7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuYmFja2dyb3VuZF8zLnNjYWxlID0gMC4zODtcclxuICAgIFxyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmFkdWx0ZXJ5LnNjYWxlID0gMC42NTtcclxuICAgIFxyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLlVJX0NvbnRhaW5lci54ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5VSV9Db250YWluZXIueSA9IDIwO1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVzQ29udGFpbmVyLmJ1dHRvbnMueCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250YWluZXIuYnV0dG9ucy55ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRhaW5lci5DVEFfYnRuLnkgPSAtMTYwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSb3RhdGUoKTtcclxuICAgIH1cclxufVxyXG4iXX0=