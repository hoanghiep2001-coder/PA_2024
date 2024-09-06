
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/SupporterController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e572/MVNFO0p1py0Apfw5p', 'SupporterController');
// Script/Controller/SupporterController.ts

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
var Supporter_1 = require("../Other/Supporter");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SupporterController = /** @class */ (function (_super) {
    __extends(SupporterController, _super);
    function SupporterController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.supporters = [];
        // state
        _this.tweenStates = [];
        return _this;
    }
    SupporterController.prototype.start = function () {
        for (var index = 0; index < this.supporters.length; index++) {
            var node = this.supporters[index];
            var tweenState = cc.tween(node)
                .repeatForever(cc.tween(node)
                .to(0.8, { opacity: 120 })
                .to(0.8, { opacity: 50 })).start();
            this.tweenStates.push(tweenState);
        }
    };
    SupporterController.prototype.activeSupporter = function (index) {
        this.tweenStates[index].stop();
        this.supporters[index].opacity = 255;
        this.supporters[index].getComponent(Supporter_1.default).isActive = true;
    };
    __decorate([
        property([cc.Node])
    ], SupporterController.prototype, "supporters", void 0);
    SupporterController = __decorate([
        ccclass
    ], SupporterController);
    return SupporterController;
}(cc.Component));
exports.default = SupporterController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxTdXBwb3J0ZXJDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUVyQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFpRCx1Q0FBWTtJQUE3RDtRQUFBLHFFQTZCQztRQTFCRyxnQkFBVSxHQUFjLEVBQUUsQ0FBQztRQUUzQixRQUFRO1FBQ1IsaUJBQVcsR0FBZSxFQUFFLENBQUM7O0lBdUJqQyxDQUFDO0lBckJhLG1DQUFLLEdBQWY7UUFDSSxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDekQsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVwQyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztpQkFDOUIsYUFBYSxDQUNWLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2lCQUNULEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7aUJBQ3pCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FDaEMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUVWLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQztJQUdNLDZDQUFlLEdBQXRCLFVBQXVCLEtBQWE7UUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsbUJBQVMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDbkUsQ0FBQztJQXpCRDtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzsyREFDTztJQUhWLG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBNkJ2QztJQUFELDBCQUFDO0NBN0JELEFBNkJDLENBN0JnRCxFQUFFLENBQUMsU0FBUyxHQTZCNUQ7a0JBN0JvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3VwcG9ydGVyIGZyb20gXCIuLi9PdGhlci9TdXBwb3J0ZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VwcG9ydGVyQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIHN1cHBvcnRlcnM6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIC8vIHN0YXRlXHJcbiAgICB0d2VlblN0YXRlczogY2MuVHdlZW5bXSA9IFtdO1xyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5zdXBwb3J0ZXJzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5zdXBwb3J0ZXJzW2luZGV4XTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0d2VlblN0YXRlID0gY2MudHdlZW4obm9kZSlcclxuICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjgsIHsgb3BhY2l0eTogMTIwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuOCwgeyBvcGFjaXR5OiA1MCB9KVxyXG4gICAgICAgICAgICApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnR3ZWVuU3RhdGVzLnB1c2godHdlZW5TdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgYWN0aXZlU3VwcG9ydGVyKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnR3ZWVuU3RhdGVzW2luZGV4XS5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5zdXBwb3J0ZXJzW2luZGV4XS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIHRoaXMuc3VwcG9ydGVyc1tpbmRleF0uZ2V0Q29tcG9uZW50KFN1cHBvcnRlcikuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==