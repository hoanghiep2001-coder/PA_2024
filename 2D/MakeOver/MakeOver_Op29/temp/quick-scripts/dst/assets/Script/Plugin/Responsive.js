
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
var NodeContanier_1 = require("../Controller/NodeContanier");
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Responsive = /** @class */ (function (_super) {
    __extends(Responsive, _super);
    function Responsive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.NodeContainer = null;
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
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        if (width > height) {
            constants_1.Constants.isRotate = true;
            this.setHorizontal();
        }
        else {
            constants_1.Constants.isRotate = false;
            this.setVertical();
        }
    };
    Responsive.prototype.setHorizontal = function () {
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        if (height / width < 0.65) {
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
        constants_1.Constants.isRotate
            ? this.NodeContainer.Hand_2.getComponent(cc.Animation).play("Hand_HrzAnim")
            : this.NodeContainer.Hand_2.getComponent(cc.Animation).play("Hand_HintAnim");
        this.NodeContainer.Text_Jimin.scale = 0.35;
        this.NodeContainer.Text_Jimin.x = 0;
        this.NodeContainer.Text_Jimin.y = 200;
        this.NodeContainer.Text_Drag.x = 0;
        this.NodeContainer.Text_Drag.y = -210;
        this.NodeContainer.tweezers.x = -310;
        this.NodeContainer.Tweezers_InteractPoint1.x = -26 + 310;
        this.NodeContainer.Tweezers_InteractPoint2.x = 34 + 310;
        constants_1.Constants.Responsive.calculatedX = -310;
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        constants_1.Constants.isRotate
            ? this.NodeContainer.Hand_2.getComponent(cc.Animation).play("Hand_HrzAnim")
            : this.NodeContainer.Hand_2.getComponent(cc.Animation).play("Hand_HintAnim");
        this.NodeContainer.Text_Jimin.x = 0;
        this.NodeContainer.Text_Jimin.y = 200;
        this.NodeContainer.Text_Drag.x = 0;
        this.NodeContainer.Text_Drag.y = -210;
        this.NodeContainer.tweezers.x = -310;
        this.NodeContainer.Tweezers_InteractPoint1.x = -26 + 310;
        this.NodeContainer.Tweezers_InteractPoint2.x = 34 + 310;
        constants_1.Constants.Responsive.calculatedX = -310;
    };
    Responsive.prototype.setVertical = function () {
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        if (width / height < 0.5) {
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
        constants_1.Constants.isRotate
            ? this.NodeContainer.Hand_2.getComponent(cc.Animation).play("Hand_HrzAnim")
            : this.NodeContainer.Hand_2.getComponent(cc.Animation).play("Hand_HintAnim");
        this.NodeContainer.Text_Jimin.scale = 0.28;
        this.NodeContainer.Text_Jimin.x = 0;
        this.NodeContainer.Text_Jimin.y = 245;
        this.NodeContainer.Text_Drag.x = 0;
        this.NodeContainer.Text_Drag.y = -250;
        this.NodeContainer.tweezers.x = 0;
        this.NodeContainer.Tweezers_InteractPoint1.x = -26;
        this.NodeContainer.Tweezers_InteractPoint2.x = 34;
        constants_1.Constants.Responsive.calculatedX = 0;
    };
    Responsive.prototype.setMobile = function () {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        this.device = this.VERTICAL_MOBILE;
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        constants_1.Constants.Responsive.calculatedX = 0;
        constants_1.Constants.isRotate
            ? this.NodeContainer.Hand_2.getComponent(cc.Animation).play("Hand_HrzAnim")
            : this.NodeContainer.Hand_2.getComponent(cc.Animation).play("Hand_HintAnim");
        if (height / width > 1.5) {
            if (width / height >= 0.6 && width / height < 0.62) {
                // mobile mode applovin
                this.NodeContainer.Text_Jimin.scale = 0.28;
                this.NodeContainer.Text_Jimin.x = 0;
                this.NodeContainer.Text_Jimin.y = 235;
                this.NodeContainer.Text_Drag.x = 0;
                this.NodeContainer.Text_Drag.y = -220;
                this.NodeContainer.tweezers.x = 0;
                this.NodeContainer.Tweezers_InteractPoint1.x = -26;
                this.NodeContainer.Tweezers_InteractPoint2.x = 34;
                return;
            }
            // Iphone 6 / 6 Plus / 7 / 7 Plus   
            this.NodeContainer.Text_Jimin.scale = 0.28;
            this.NodeContainer.Text_Jimin.x = 0;
            this.NodeContainer.Text_Jimin.y = 245;
            this.NodeContainer.Text_Drag.x = 0;
            this.NodeContainer.Text_Drag.y = -220;
            this.NodeContainer.tweezers.x = 0;
            this.NodeContainer.Tweezers_InteractPoint1.x = -26;
            this.NodeContainer.Tweezers_InteractPoint2.x = 34;
        }
        else {
            this.NodeContainer.Text_Jimin.x = 0;
            this.NodeContainer.Text_Jimin.y = 200;
            this.NodeContainer.Text_Drag.x = 0;
            this.NodeContainer.Text_Drag.y = -210;
            this.NodeContainer.tweezers.x = 0;
            this.NodeContainer.Tweezers_InteractPoint1.x = -26;
            this.NodeContainer.Tweezers_InteractPoint2.x = 34;
        }
    };
    Responsive.prototype.update = function (dt) {
        this.handleRotate();
    };
    __decorate([
        property(NodeContanier_1.default)
    ], Responsive.prototype, "NodeContainer", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFJlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQXdEO0FBQ3hELCtDQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQXlMQztRQXRMRyxtQkFBYSxHQUFrQixJQUFJLENBQUM7UUFHcEMsUUFBUTtRQUNSLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixvQkFBYyxHQUFXLGdCQUFnQixDQUFDO1FBQzFDLHVCQUFpQixHQUFXLG1CQUFtQixDQUFDO1FBQ2hELGtCQUFZLEdBQVcsY0FBYyxDQUFDO1FBQ3RDLHFCQUFlLEdBQVcsaUJBQWlCLENBQUM7O0lBNEtoRCxDQUFDO0lBekthLDJCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUVTLDBCQUFLLEdBQWY7SUFFQSxDQUFDO0lBRU8saUNBQVksR0FBcEI7UUFDSSxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssQ0FBQztRQUN6QyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUMzQyxJQUFJLEtBQUssR0FBRyxNQUFNLEVBQUU7WUFDaEIscUJBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4QjthQUFNO1lBQ0gscUJBQVMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFFTyxrQ0FBYSxHQUFyQjtRQUNJLElBQUksS0FBSyxH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Q0F6THVDLEVBQUUsQ0FBQyxTQUFTLEdBeUxuRDtrQkF6TG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZUNvbnRhaW5lciBmcm9tIFwiLi4vQ29udHJvbGxlci9Ob2RlQ29udGFuaWVyXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNpdmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShOb2RlQ29udGFpbmVyKVxyXG4gICAgTm9kZUNvbnRhaW5lcjogTm9kZUNvbnRhaW5lciA9IG51bGw7XHJcblxyXG5cclxuICAgIC8vIHN0YXRlXHJcbiAgICBkZXZpY2U6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBpc1JvdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEhPUklaT05UQUxfSVBYOiBzdHJpbmcgPSBcImhvcml6b250YWxfSVBYXCI7XHJcbiAgICBIT1JJWk9OVEFMX1RBQkxFVDogc3RyaW5nID0gXCJob3Jpem9udGFsX1RhYmxldFwiO1xyXG4gICAgVkVSVElDQUxfSVBYOiBzdHJpbmcgPSBcInZlcnRpY2FsX0lQWFwiO1xyXG4gICAgVkVSVElDQUxfTU9CSUxFOiBzdHJpbmcgPSBcInZlcnRpY2FsX01vYmlsZVwiO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlUm90YXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCB3aWR0aCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0O1xyXG4gICAgICAgIGlmICh3aWR0aCA+IGhlaWdodCkge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNSb3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNSb3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWZXJ0aWNhbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEhvcml6b250YWwoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aDtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQ7XHJcbiAgICAgICAgaWYgKGhlaWdodCAvIHdpZHRoIDwgMC42NSkge1xyXG4gICAgICAgICAgICAvLyBJcGhvbmUgNiAvIDYgcGx1cyAvIDcgLyA3IFBsdXMgLyBYXHJcbiAgICAgICAgICAgIHRoaXMuc2V0SG9yaXpvbnRhbEZvcklwWCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SG9yaXpvbnRhbEZvclRhYmxldCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEhvcml6b250YWxGb3JJcFgoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuSE9SSVpPTlRBTF9JUFggPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gdGhpcy5IT1JJWk9OVEFMX0lQWDtcclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLmlzUm90YXRlXHJcbiAgICAgICAgICAgID8gdGhpcy5Ob2RlQ29udGFpbmVyLkhhbmRfMi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiSGFuZF9IcnpBbmltXCIpXHJcbiAgICAgICAgICAgIDogdGhpcy5Ob2RlQ29udGFpbmVyLkhhbmRfMi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiSGFuZF9IaW50QW5pbVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlRleHRfSmltaW4uc2NhbGUgPSAwLjM1O1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5UZXh0X0ppbWluLnggPSAwO1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5UZXh0X0ppbWluLnkgPSAyMDA7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlRleHRfRHJhZy54ID0gMDtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVGV4dF9EcmFnLnkgPSAtMjEwO1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci50d2VlemVycy54ID0gLTMxMDtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX0ludGVyYWN0UG9pbnQxLnggPSAtMjYgKyAzMTA7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX0ludGVyYWN0UG9pbnQyLnggPSAzNCArIDMxMDtcclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFggPSAtMzEwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbEZvclRhYmxldCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5IT1JJWk9OVEFMX1RBQkxFVCA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLkhPUklaT05UQUxfVEFCTEVUO1xyXG5cclxuICAgICAgICBDb25zdGFudHMuaXNSb3RhdGVcclxuICAgICAgICAgICAgPyB0aGlzLk5vZGVDb250YWluZXIuSGFuZF8yLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJIYW5kX0hyekFuaW1cIilcclxuICAgICAgICAgICAgOiB0aGlzLk5vZGVDb250YWluZXIuSGFuZF8yLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJIYW5kX0hpbnRBbmltXCIpO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVGV4dF9KaW1pbi54ID0gMDtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVGV4dF9KaW1pbi55ID0gMjAwO1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5UZXh0X0RyYWcueCA9IDA7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlRleHRfRHJhZy55ID0gLTIxMDtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIudHdlZXplcnMueCA9IC0zMTA7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Ud2VlemVyc19JbnRlcmFjdFBvaW50MS54ID0gLTI2ICsgMzEwO1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Ud2VlemVyc19JbnRlcmFjdFBvaW50Mi54ID0gMzQgKyAzMTA7XHJcblxyXG4gICAgICAgIENvbnN0YW50cy5SZXNwb25zaXZlLmNhbGN1bGF0ZWRYID0gLTMxMDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRWZXJ0aWNhbCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgd2lkdGggPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodDtcclxuICAgICAgICBpZiAod2lkdGggLyBoZWlnaHQgPCAwLjUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRJcGhvbmVYKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRNb2JpbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRJcGhvbmVYKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLlZFUlRJQ0FMX0lQWCA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLlZFUlRJQ0FMX0lQWDtcclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLmlzUm90YXRlXHJcbiAgICAgICAgICAgID8gdGhpcy5Ob2RlQ29udGFpbmVyLkhhbmRfMi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiSGFuZF9IcnpBbmltXCIpXHJcbiAgICAgICAgICAgIDogdGhpcy5Ob2RlQ29udGFpbmVyLkhhbmRfMi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiSGFuZF9IaW50QW5pbVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlRleHRfSmltaW4uc2NhbGUgPSAwLjI4O1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5UZXh0X0ppbWluLnggPSAwO1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5UZXh0X0ppbWluLnkgPSAyNDU7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlRleHRfRHJhZy54ID0gMDtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVGV4dF9EcmFnLnkgPSAtMjUwO1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci50d2VlemVycy54ID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX0ludGVyYWN0UG9pbnQxLnggPSAtMjY7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX0ludGVyYWN0UG9pbnQyLnggPSAzNDtcclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0TW9iaWxlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLlZFUlRJQ0FMX01PQklMRSA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLlZFUlRJQ0FMX01PQklMRTtcclxuICAgICAgICBsZXQgd2lkdGggPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodDtcclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFggPSAwO1xyXG4gICAgICAgIENvbnN0YW50cy5pc1JvdGF0ZVxyXG4gICAgICAgICAgICA/IHRoaXMuTm9kZUNvbnRhaW5lci5IYW5kXzIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkhhbmRfSHJ6QW5pbVwiKVxyXG4gICAgICAgICAgICA6IHRoaXMuTm9kZUNvbnRhaW5lci5IYW5kXzIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkhhbmRfSGludEFuaW1cIik7XHJcblxyXG4gICAgICAgIGlmIChoZWlnaHQgLyB3aWR0aCA+IDEuNSkge1xyXG4gICAgICAgICAgICBpZiAod2lkdGggLyBoZWlnaHQgPj0gMC42ICYmIHdpZHRoIC8gaGVpZ2h0IDwgMC42Mikge1xyXG4gICAgICAgICAgICAgICAgLy8gbW9iaWxlIG1vZGUgYXBwbG92aW5cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVGV4dF9KaW1pbi5zY2FsZSA9IDAuMjg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVGV4dF9KaW1pbi54ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5UZXh0X0ppbWluLnkgPSAyMzU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVGV4dF9EcmFnLnggPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlRleHRfRHJhZy55ID0gLTIyMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci50d2VlemVycy54ID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnNfSW50ZXJhY3RQb2ludDEueCA9IC0yNjtcclxuICAgICAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Ud2VlemVyc19JbnRlcmFjdFBvaW50Mi54ID0gMzQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElwaG9uZSA2IC8gNiBQbHVzIC8gNyAvIDcgUGx1cyAgIFxyXG4gICAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVGV4dF9KaW1pbi5zY2FsZSA9IDAuMjg7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5UZXh0X0ppbWluLnggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVGV4dF9KaW1pbi55ID0gMjQ1O1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVGV4dF9EcmFnLnggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVGV4dF9EcmFnLnkgPSAtMjIwO1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIudHdlZXplcnMueCA9IDA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVHdlZXplcnNfSW50ZXJhY3RQb2ludDEueCA9IC0yNjtcclxuICAgICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX0ludGVyYWN0UG9pbnQyLnggPSAzNDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuVGV4dF9KaW1pbi54ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlRleHRfSmltaW4ueSA9IDIwMDtcclxuICAgICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlRleHRfRHJhZy54ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlRleHRfRHJhZy55ID0gLTIxMDtcclxuICAgICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLnR3ZWV6ZXJzLnggPSAwO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlR3ZWV6ZXJzX0ludGVyYWN0UG9pbnQxLnggPSAtMjY7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Ud2VlemVyc19JbnRlcmFjdFBvaW50Mi54ID0gMzQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhhbmRsZVJvdGF0ZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==