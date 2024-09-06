
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
cc._RF.push(module, 'd5c01VUSP5G8p7xJENgTwyO', 'Responsive');
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
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Responsive = /** @class */ (function (_super) {
    __extends(Responsive, _super);
    function Responsive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.textOpening = null;
        _this.Options = null;
        _this.text = null;
        _this.BG = null;
        _this.Sheeps = [];
        _this.CTA_Btn = null;
        _this.CTA_logo = null;
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
        constants_1.Constants.Responsive.currentDevice = "horizon_Tablet";
        this.textOpening.x = 0;
        this.textOpening.y = 60;
        this.textOpening.scale = 0.6;
        this.Options.x = 0;
        this.Options.y = -50;
        this.Options.scale = 1.3;
        this.text.x = 0;
        this.text.y = 190;
        this.text.scale = 1;
        this.BG.x = 0;
        this.BG.y = -50;
        this.BG.scale = 0.62;
        this.Sheeps[0].x = 67;
        this.Sheeps[0].y = -48;
        this.Sheeps[0].scale = 0.62;
        this.Sheeps[1].x = -63;
        this.Sheeps[1].y = -47;
        this.Sheeps[1].scale = 0.62;
        this.Sheeps[2].x = -37;
        this.Sheeps[2].y = -165;
        this.Sheeps[2].scale = 0.62;
        this.CTA_logo.scale = 0.7;
        this.CTA_Btn.scale = 0.5;
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        constants_1.Constants.Responsive.currentDevice = "horizon_Tablet";
        this.textOpening.x = 0;
        this.textOpening.y = 60;
        this.textOpening.scale = 0.6;
        this.Options.x = 0;
        this.Options.y = -50;
        this.Options.scale = 1.3;
        this.text.x = 0;
        this.text.y = 190;
        this.text.scale = 1;
        this.BG.x = 0;
        this.BG.y = -50;
        this.BG.scale = 0.62;
        this.Sheeps[0].x = 67;
        this.Sheeps[0].y = -48;
        this.Sheeps[0].scale = 0.62;
        this.Sheeps[1].x = -63;
        this.Sheeps[1].y = -47;
        this.Sheeps[1].scale = 0.62;
        this.Sheeps[2].x = -37;
        this.Sheeps[2].y = -165;
        this.Sheeps[2].scale = 0.62;
        this.CTA_logo.scale = 0.6;
        this.CTA_Btn.scale = 0.5;
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
        constants_1.Constants.Responsive.currentDevice = "vertical_mobile";
        this.textOpening.x = 0;
        this.textOpening.y = 50;
        this.textOpening.scale = 0.4;
        this.Options.x = 0;
        this.Options.y = -50;
        this.Options.scale = 0.9;
        this.text.x = 0;
        this.text.y = 170;
        this.text.scale = 0.8;
        this.BG.x = 0;
        this.BG.y = -50;
        this.BG.scale = 0.5;
        this.Sheeps[0].x = 67;
        this.Sheeps[0].y = -48;
        this.Sheeps[0].scale = 0.57;
        this.Sheeps[1].x = -63;
        this.Sheeps[1].y = -47;
        this.Sheeps[1].scale = 0.57;
        this.Sheeps[2].x = -37;
        this.Sheeps[2].y = -165;
        this.Sheeps[2].scale = 0.57;
        this.CTA_logo.scale = 0.48;
        this.CTA_Btn.scale = 0.4;
    };
    Responsive.prototype.setMobile = function () {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        this.device = this.VERTICAL_MOBILE;
        constants_1.Constants.Responsive.currentDevice = "vertical_mobile";
        this.textOpening.x = 0;
        this.textOpening.y = 50;
        this.textOpening.scale = 0.45;
        this.Options.x = 0;
        this.Options.y = -50;
        this.Options.scale = 1;
        this.text.x = 0;
        this.text.y = 190;
        this.text.scale = 1;
        this.BG.x = 0;
        this.BG.y = -50;
        this.BG.scale = 0.62;
        this.Sheeps[0].x = 67;
        this.Sheeps[0].y = -48;
        this.Sheeps[0].scale = 0.62;
        this.Sheeps[1].x = -63;
        this.Sheeps[1].y = -47;
        this.Sheeps[1].scale = 0.62;
        this.Sheeps[2].x = -37;
        this.Sheeps[2].y = -165;
        this.Sheeps[2].scale = 0.62;
        this.CTA_logo.scale = 0.54;
        this.CTA_Btn.scale = 0.4;
        // if(cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.7) {
        //     // Iphone 6 / 6 plus / 7 / 7 Plus
        //     this.boy.scale = 1;
        //     this.boy.y = 0;
        //     this.scratchable.scale = 0.45;
        //     this.scratchable.y = 12.3;
        //     this.bgDoor.scale = 0.45;
        //     this.bgDoor.y = 12.3;
        //     this.girl.scale = 1;
        //     this.girl.y = 0;
        //     this.car.scale = 0.4;
        //     this.car.x = 128;
        //     this.car.y = -32;
        //     this.lamp.scale = 0.4;
        //     this.lamp.x = -73;
        //     this.tool.scale = 0.4;
        //     this.tool.x = 60;
        //     this.text.scale = 0.38;
        //     this.text.y = 182;
        //     this.cancelBtn.scale = 0.45;
        // } else {    
        //     // Ipad
        //     this.boy.scale = 1;
        //     this.boy.y = 0;
        //     this.scratchable.scale = 0.45;
        //     this.scratchable.y = 12.3;
        //     this.bgDoor.scale = 0.45;
        //     this.bgDoor.y = 12.3;
        //     this.girl.scale = 1;
        //     this.girl.y = 0;
        //     this.car.scale = 0.4;
        //     this.car.x = 128;
        //     this.car.y = -32;
        //     this.lamp.scale = 0.4;
        //     this.lamp.x = -73;
        //     this.tool.scale = 0.4;
        //     this.tool.x = 60;
        //     this.text.scale = 0.38;
        //     this.text.y = 182;
        //     this.cancelBtn.scale = 0.45;
        // }
    };
    Responsive.prototype.unActiveLogo = function () {
    };
    Responsive.prototype.update = function (dt) {
        this.handleRotate();
    };
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "textOpening", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "Options", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "text", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "BG", void 0);
    __decorate([
        property([cc.Node])
    ], Responsive.prototype, "Sheeps", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "CTA_Btn", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "CTA_logo", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFJlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsK0NBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBNlNDO1FBM1NHLFlBQVk7UUFFWixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsUUFBRSxHQUFZLElBQUksQ0FBQztRQUVuQixZQUFNLEdBQWMsRUFBRSxDQUFDO1FBR3ZCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixRQUFRO1FBQ1IsWUFBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLG9CQUFjLEdBQVcsZ0JBQWdCLENBQUM7UUFDMUMsdUJBQWlCLEdBQVcsbUJBQW1CLENBQUM7UUFDaEQsa0JBQVksR0FBVyxjQUFjLENBQUM7UUFDdEMscUJBQWUsR0FBVyxpQkFBaUIsQ0FBQzs7SUFtUmhELENBQUM7SUFqUmEsMkJBQU0sR0FBaEI7SUFFQSxDQUFDO0lBRVMsMEJBQUssR0FBZjtJQUVBLENBQUM7SUFHTyxpQ0FBWSxHQUFwQjtRQUNJLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUU7WUFDOUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLEtB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RSxDQUFDLFNBQVMsR0E2U25EO2tCQTdTb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgR2FtZVBsYXkgZnJvbSBcIi4uL0NvbnRyb2xsZXIvR2FtZVBsYXlcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzcG9uc2l2ZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gQ29tcG9uZW50XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRleHRPcGVuaW5nOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgT3B0aW9uczogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRleHQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBCRzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gICAgU2hlZXBzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIENUQV9CdG46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDVEFfbG9nbzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gc3RhdGVcclxuICAgIGRldmljZTogc3RyaW5nID0gXCJcIjtcclxuICAgIGlzUm90YXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgSE9SSVpPTlRBTF9JUFg6IHN0cmluZyA9IFwiaG9yaXpvbnRhbF9JUFhcIjtcclxuICAgIEhPUklaT05UQUxfVEFCTEVUOiBzdHJpbmcgPSBcImhvcml6b250YWxfVGFibGV0XCI7XHJcbiAgICBWRVJUSUNBTF9JUFg6IHN0cmluZyA9IFwidmVydGljYWxfSVBYXCI7XHJcbiAgICBWRVJUSUNBTF9NT0JJTEU6IHN0cmluZyA9IFwidmVydGljYWxfTW9iaWxlXCI7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVSb3RhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggPiBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzUm90YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRIb3Jpem9udGFsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc1JvdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFZlcnRpY2FsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldEhvcml6b250YWwoKTogdm9pZCB7XHJcbiAgICAgICAgaWYoY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoIDwgMC42NSkge1xyXG4gICAgICAgICAgICAvLyBJcGhvbmUgNiAvIDYgcGx1cyAvIDcgLyA3IFBsdXMgLyBYXHJcbiAgICAgICAgICAgIHRoaXMuc2V0SG9yaXpvbnRhbEZvcklwWCgpOyBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWxGb3JUYWJsZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbEZvcklwWCgpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLkhPUklaT05UQUxfSVBYID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuSE9SSVpPTlRBTF9JUFg7XHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY3VycmVudERldmljZSA9IFwiaG9yaXpvbl9UYWJsZXRcIjtcclxuXHJcbiAgICAgICAgdGhpcy50ZXh0T3BlbmluZy54ID0gMDtcclxuICAgICAgICB0aGlzLnRleHRPcGVuaW5nLnkgPSA2MDtcclxuICAgICAgICB0aGlzLnRleHRPcGVuaW5nLnNjYWxlID0gMC42O1xyXG5cclxuICAgICAgICB0aGlzLk9wdGlvbnMueCA9IDA7XHJcbiAgICAgICAgdGhpcy5PcHRpb25zLnkgPSAtNTA7XHJcbiAgICAgICAgdGhpcy5PcHRpb25zLnNjYWxlID0gMS4zO1xyXG5cclxuICAgICAgICB0aGlzLnRleHQueCA9IDA7XHJcbiAgICAgICAgdGhpcy50ZXh0LnkgPSAxOTA7XHJcbiAgICAgICAgdGhpcy50ZXh0LnNjYWxlID0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5CRy54ID0gMDtcclxuICAgICAgICB0aGlzLkJHLnkgPSAtNTA7XHJcbiAgICAgICAgdGhpcy5CRy5zY2FsZSA9IDAuNjI7XHJcblxyXG4gICAgICAgIHRoaXMuU2hlZXBzWzBdLnggPSA2NztcclxuICAgICAgICB0aGlzLlNoZWVwc1swXS55ID0gLTQ4O1xyXG4gICAgICAgIHRoaXMuU2hlZXBzWzBdLnNjYWxlID0gMC42MjtcclxuXHJcbiAgICAgICAgdGhpcy5TaGVlcHNbMV0ueCA9IC02MztcclxuICAgICAgICB0aGlzLlNoZWVwc1sxXS55ID0gLTQ3O1xyXG4gICAgICAgIHRoaXMuU2hlZXBzWzFdLnNjYWxlID0gMC42MjtcclxuXHJcbiAgICAgICAgdGhpcy5TaGVlcHNbMl0ueCA9IC0zNztcclxuICAgICAgICB0aGlzLlNoZWVwc1syXS55ID0gLTE2NTtcclxuICAgICAgICB0aGlzLlNoZWVwc1syXS5zY2FsZSA9IDAuNjI7XHJcblxyXG4gICAgICAgIHRoaXMuQ1RBX2xvZ28uc2NhbGUgPSAwLjc7XHJcbiAgICAgICAgdGhpcy5DVEFfQnRuLnNjYWxlID0gMC41O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldEhvcml6b250YWxGb3JUYWJsZXQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYodGhpcy5IT1JJWk9OVEFMX1RBQkxFVCA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLkhPUklaT05UQUxfVEFCTEVUO1xyXG4gICAgICAgIENvbnN0YW50cy5SZXNwb25zaXZlLmN1cnJlbnREZXZpY2UgPSBcImhvcml6b25fVGFibGV0XCI7XHJcblxyXG4gICAgICAgIHRoaXMudGV4dE9wZW5pbmcueCA9IDA7XHJcbiAgICAgICAgdGhpcy50ZXh0T3BlbmluZy55ID0gNjA7XHJcbiAgICAgICAgdGhpcy50ZXh0T3BlbmluZy5zY2FsZSA9IDAuNjtcclxuXHJcbiAgICAgICAgdGhpcy5PcHRpb25zLnggPSAwO1xyXG4gICAgICAgIHRoaXMuT3B0aW9ucy55ID0gLTUwO1xyXG4gICAgICAgIHRoaXMuT3B0aW9ucy5zY2FsZSA9IDEuMztcclxuXHJcbiAgICAgICAgdGhpcy50ZXh0LnggPSAwO1xyXG4gICAgICAgIHRoaXMudGV4dC55ID0gMTkwO1xyXG4gICAgICAgIHRoaXMudGV4dC5zY2FsZSA9IDE7XHJcblxyXG4gICAgICAgIHRoaXMuQkcueCA9IDA7XHJcbiAgICAgICAgdGhpcy5CRy55ID0gLTUwO1xyXG4gICAgICAgIHRoaXMuQkcuc2NhbGUgPSAwLjYyO1xyXG5cclxuICAgICAgICB0aGlzLlNoZWVwc1swXS54ID0gNjc7XHJcbiAgICAgICAgdGhpcy5TaGVlcHNbMF0ueSA9IC00ODtcclxuICAgICAgICB0aGlzLlNoZWVwc1swXS5zY2FsZSA9IDAuNjI7XHJcblxyXG4gICAgICAgIHRoaXMuU2hlZXBzWzFdLnggPSAtNjM7XHJcbiAgICAgICAgdGhpcy5TaGVlcHNbMV0ueSA9IC00NztcclxuICAgICAgICB0aGlzLlNoZWVwc1sxXS5zY2FsZSA9IDAuNjI7XHJcblxyXG4gICAgICAgIHRoaXMuU2hlZXBzWzJdLnggPSAtMzc7XHJcbiAgICAgICAgdGhpcy5TaGVlcHNbMl0ueSA9IC0xNjU7XHJcbiAgICAgICAgdGhpcy5TaGVlcHNbMl0uc2NhbGUgPSAwLjYyO1xyXG5cclxuICAgICAgICB0aGlzLkNUQV9sb2dvLnNjYWxlID0gMC42O1xyXG4gICAgICAgIHRoaXMuQ1RBX0J0bi5zY2FsZSA9IDAuNTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzZXRWZXJ0aWNhbCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0IDwgMC41KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SXBob25lWCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TW9iaWxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0SXBob25lWCgpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLlZFUlRJQ0FMX0lQWCA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLlZFUlRJQ0FMX0lQWDtcclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY3VycmVudERldmljZSA9IFwidmVydGljYWxfbW9iaWxlXCI7XHJcblxyXG4gICAgICAgIHRoaXMudGV4dE9wZW5pbmcueCA9IDA7XHJcbiAgICAgICAgdGhpcy50ZXh0T3BlbmluZy55ID0gNTA7XHJcbiAgICAgICAgdGhpcy50ZXh0T3BlbmluZy5zY2FsZSA9IDAuNDtcclxuXHJcbiAgICAgICAgdGhpcy5PcHRpb25zLnggPSAwO1xyXG4gICAgICAgIHRoaXMuT3B0aW9ucy55ID0gLTUwO1xyXG4gICAgICAgIHRoaXMuT3B0aW9ucy5zY2FsZSA9IDAuOTtcclxuXHJcbiAgICAgICAgdGhpcy50ZXh0LnggPSAwO1xyXG4gICAgICAgIHRoaXMudGV4dC55ID0gMTcwO1xyXG4gICAgICAgIHRoaXMudGV4dC5zY2FsZSA9IDAuODtcclxuXHJcbiAgICAgICAgdGhpcy5CRy54ID0gMDtcclxuICAgICAgICB0aGlzLkJHLnkgPSAtNTA7XHJcbiAgICAgICAgdGhpcy5CRy5zY2FsZSA9IDAuNTtcclxuXHJcbiAgICAgICAgdGhpcy5TaGVlcHNbMF0ueCA9IDY3O1xyXG4gICAgICAgIHRoaXMuU2hlZXBzWzBdLnkgPSAtNDg7XHJcbiAgICAgICAgdGhpcy5TaGVlcHNbMF0uc2NhbGUgPSAwLjU3O1xyXG5cclxuICAgICAgICB0aGlzLlNoZWVwc1sxXS54ID0gLTYzO1xyXG4gICAgICAgIHRoaXMuU2hlZXBzWzFdLnkgPSAtNDc7XHJcbiAgICAgICAgdGhpcy5TaGVlcHNbMV0uc2NhbGUgPSAwLjU3O1xyXG5cclxuICAgICAgICB0aGlzLlNoZWVwc1syXS54ID0gLTM3O1xyXG4gICAgICAgIHRoaXMuU2hlZXBzWzJdLnkgPSAtMTY1O1xyXG4gICAgICAgIHRoaXMuU2hlZXBzWzJdLnNjYWxlID0gMC41NztcclxuXHJcbiAgICAgICAgdGhpcy5DVEFfbG9nby5zY2FsZSA9IDAuNDg7XHJcbiAgICAgICAgdGhpcy5DVEFfQnRuLnNjYWxlID0gMC40O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0TW9iaWxlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMuVkVSVElDQUxfTU9CSUxFID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSAgIFxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuVkVSVElDQUxfTU9CSUxFO1xyXG5cclxuICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5jdXJyZW50RGV2aWNlID0gXCJ2ZXJ0aWNhbF9tb2JpbGVcIjtcclxuXHJcbiAgICAgICAgdGhpcy50ZXh0T3BlbmluZy54ID0gMDtcclxuICAgICAgICB0aGlzLnRleHRPcGVuaW5nLnkgPSA1MDtcclxuICAgICAgICB0aGlzLnRleHRPcGVuaW5nLnNjYWxlID0gMC40NTtcclxuXHJcbiAgICAgICAgdGhpcy5PcHRpb25zLnggPSAwO1xyXG4gICAgICAgIHRoaXMuT3B0aW9ucy55ID0gLTUwO1xyXG4gICAgICAgIHRoaXMuT3B0aW9ucy5zY2FsZSA9IDE7XHJcblxyXG4gICAgICAgIHRoaXMudGV4dC54ID0gMDtcclxuICAgICAgICB0aGlzLnRleHQueSA9IDE5MDtcclxuICAgICAgICB0aGlzLnRleHQuc2NhbGUgPSAxO1xyXG5cclxuICAgICAgICB0aGlzLkJHLnggPSAwO1xyXG4gICAgICAgIHRoaXMuQkcueSA9IC01MDtcclxuICAgICAgICB0aGlzLkJHLnNjYWxlID0gMC42MjtcclxuXHJcbiAgICAgICAgdGhpcy5TaGVlcHNbMF0ueCA9IDY3O1xyXG4gICAgICAgIHRoaXMuU2hlZXBzWzBdLnkgPSAtNDg7XHJcbiAgICAgICAgdGhpcy5TaGVlcHNbMF0uc2NhbGUgPSAwLjYyO1xyXG5cclxuICAgICAgICB0aGlzLlNoZWVwc1sxXS54ID0gLTYzO1xyXG4gICAgICAgIHRoaXMuU2hlZXBzWzFdLnkgPSAtNDc7XHJcbiAgICAgICAgdGhpcy5TaGVlcHNbMV0uc2NhbGUgPSAwLjYyO1xyXG5cclxuICAgICAgICB0aGlzLlNoZWVwc1syXS54ID0gLTM3O1xyXG4gICAgICAgIHRoaXMuU2hlZXBzWzJdLnkgPSAtMTY1O1xyXG4gICAgICAgIHRoaXMuU2hlZXBzWzJdLnNjYWxlID0gMC42MjtcclxuXHJcbiAgICAgICAgdGhpcy5DVEFfbG9nby5zY2FsZSA9IDAuNTQ7XHJcbiAgICAgICAgdGhpcy5DVEFfQnRuLnNjYWxlID0gMC40O1xyXG5cclxuICAgICAgICAvLyBpZihjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoIC8gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgPCAwLjcpIHtcclxuICAgICAgICAvLyAgICAgLy8gSXBob25lIDYgLyA2IHBsdXMgLyA3IC8gNyBQbHVzXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICB0aGlzLmJveS5zY2FsZSA9IDE7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYm95LnkgPSAwO1xyXG4gICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2NyYXRjaGFibGUuc2NhbGUgPSAwLjQ1O1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNjcmF0Y2hhYmxlLnkgPSAxMi4zO1xyXG4gICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMuYmdEb29yLnNjYWxlID0gMC40NTtcclxuICAgICAgICAvLyAgICAgdGhpcy5iZ0Rvb3IueSA9IDEyLjM7XHJcbiAgICBcclxuICAgICAgICAvLyAgICAgdGhpcy5naXJsLnNjYWxlID0gMTtcclxuICAgICAgICAvLyAgICAgdGhpcy5naXJsLnkgPSAwO1xyXG4gICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMuY2FyLnNjYWxlID0gMC40O1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNhci54ID0gMTI4O1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNhci55ID0gLTMyO1xyXG4gICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMubGFtcC5zY2FsZSA9IDAuNDtcclxuICAgICAgICAvLyAgICAgdGhpcy5sYW1wLnggPSAtNzM7XHJcbiAgICBcclxuICAgICAgICAvLyAgICAgdGhpcy50b29sLnNjYWxlID0gMC40O1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRvb2wueCA9IDYwO1xyXG4gICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMudGV4dC5zY2FsZSA9IDAuMzg7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudGV4dC55ID0gMTgyO1xyXG4gICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMuY2FuY2VsQnRuLnNjYWxlID0gMC40NTtcclxuXHJcbiAgICAgICAgLy8gfSBlbHNlIHsgICAgXHJcbiAgICAgICAgLy8gICAgIC8vIElwYWRcclxuICAgICAgICAvLyAgICAgdGhpcy5ib3kuc2NhbGUgPSAxO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmJveS55ID0gMDtcclxuICAgIFxyXG4gICAgICAgIC8vICAgICB0aGlzLnNjcmF0Y2hhYmxlLnNjYWxlID0gMC40NTtcclxuICAgICAgICAvLyAgICAgdGhpcy5zY3JhdGNoYWJsZS55ID0gMTIuMztcclxuICAgIFxyXG4gICAgICAgIC8vICAgICB0aGlzLmJnRG9vci5zY2FsZSA9IDAuNDU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYmdEb29yLnkgPSAxMi4zO1xyXG4gICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMuZ2lybC5zY2FsZSA9IDE7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZ2lybC55ID0gMDtcclxuICAgIFxyXG4gICAgICAgIC8vICAgICB0aGlzLmNhci5zY2FsZSA9IDAuNDtcclxuICAgICAgICAvLyAgICAgdGhpcy5jYXIueCA9IDEyODtcclxuICAgICAgICAvLyAgICAgdGhpcy5jYXIueSA9IC0zMjtcclxuICAgIFxyXG4gICAgICAgIC8vICAgICB0aGlzLmxhbXAuc2NhbGUgPSAwLjQ7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubGFtcC54ID0gLTczO1xyXG4gICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMudG9vbC5zY2FsZSA9IDAuNDtcclxuICAgICAgICAvLyAgICAgdGhpcy50b29sLnggPSA2MDtcclxuICAgIFxyXG4gICAgICAgIC8vICAgICB0aGlzLnRleHQuc2NhbGUgPSAwLjM4O1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRleHQueSA9IDE4MjtcclxuICAgIFxyXG4gICAgICAgIC8vICAgICB0aGlzLmNhbmNlbEJ0bi5zY2FsZSA9IDAuNDU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHVuQWN0aXZlTG9nbygpOiB2b2lkIHtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhhbmRsZVJvdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=