
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/LoadFoodController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8aaf1Qac2lG3aTwixhAfLvl', 'LoadFoodController');
// Script/Controller/LoadFoodController.ts

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
var LoadFoodController = /** @class */ (function (_super) {
    __extends(LoadFoodController, _super);
    function LoadFoodController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overlay = null;
        _this.label = null;
        _this.unitCosts = [];
        _this.unitFrames = [];
        return _this;
    }
    LoadFoodController.prototype.start = function () {
        // this.label.string = String(Constants.food);
    };
    LoadFoodController.prototype.increaseFood = function () {
        var _this = this;
        this.overlay.scaleX = 0;
        if (constants_1.Constants.isPauseGame)
            return;
        cc.tween(this.overlay)
            .to(1.2, { scaleX: 1 })
            .call(function () {
            constants_1.Constants.food += 1;
            _this.increaseFood();
        })
            .start();
    };
    LoadFoodController.prototype.checkEnableCost = function () {
        for (var index = 0; index < this.unitCosts.length; index++) {
            var label = this.unitCosts[index];
            if (Number(this.label.string) >= Number(label.string)) {
                if (index === 0) {
                    this.unitFrames[index].opacity = 255;
                    label.node.color = cc.Color.WHITE;
                }
                if (index === 1 && constants_1.Constants.isCanBuyArmyLv2) {
                    this.unitFrames[index].opacity = 255;
                    label.node.color = cc.Color.WHITE;
                }
                if (index === 2 && constants_1.Constants.isCanBuyArmyLv3) {
                    this.unitFrames[index].opacity = 255;
                    label.node.color = cc.Color.WHITE;
                }
            }
            else {
                label.node.color = cc.Color.RED;
                if (index === 1 && constants_1.Constants.isCanBuyArmyLv2)
                    this.unitFrames[index].opacity = 255;
                if (index === 2 && constants_1.Constants.isCanBuyArmyLv3)
                    this.unitFrames[index].opacity = 255;
                this.unitFrames[index].opacity = 0;
            }
        }
    };
    LoadFoodController.prototype.update = function (dt) {
        // if(Constants.isPauseGame) return;
        this.label.string = String(constants_1.Constants.food);
        this.checkEnableCost();
    };
    __decorate([
        property(cc.Node)
    ], LoadFoodController.prototype, "overlay", void 0);
    __decorate([
        property(cc.Label)
    ], LoadFoodController.prototype, "label", void 0);
    __decorate([
        property([cc.Label])
    ], LoadFoodController.prototype, "unitCosts", void 0);
    __decorate([
        property([cc.Node])
    ], LoadFoodController.prototype, "unitFrames", void 0);
    LoadFoodController = __decorate([
        ccclass
    ], LoadFoodController);
    return LoadFoodController;
}(cc.Component));
exports.default = LoadFoodController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxMb2FkRm9vZENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBRXhDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBbUVDO1FBakVHLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixlQUFTLEdBQWUsRUFBRSxDQUFDO1FBRTNCLGdCQUFVLEdBQWMsRUFBRSxDQUFDOztJQTBEL0IsQ0FBQztJQXZEYSxrQ0FBSyxHQUFmO1FBQ0ksOENBQThDO0lBQ2xELENBQUM7SUFHTSx5Q0FBWSxHQUFuQjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRXhCLElBQUcscUJBQVMsQ0FBQyxXQUFXO1lBQUUsT0FBTztRQUVqQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDckIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQzthQUNwQixJQUFJLENBQUM7WUFDRixxQkFBUyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7WUFDcEIsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQU1PLDRDQUFlLEdBQXZCO1FBQ0ksS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3hELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEMsSUFBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNsRCxJQUFHLEtBQUssS0FBSyxDQUFDLEVBQUU7b0JBQ1osSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO29CQUNyQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztpQkFDckM7Z0JBQ0QsSUFBRyxLQUFLLEtBQUssQ0FBQyxJQUFJLHFCQUFTLENBQUMsZUFBZSxFQUFFO29CQUN6QyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7b0JBQ3JDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO2lCQUNyQztnQkFDRCxJQUFHLEtBQUssS0FBSyxDQUFDLElBQUkscUJBQVMsQ0FBQyxlQUFlLEVBQUU7b0JBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztvQkFDckMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7aUJBQ3JDO2FBQ0o7aUJBQU07Z0JBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7Z0JBQ2hDLElBQUcsS0FBSyxLQUFLLENBQUMsSUFBSSxxQkFBUyxDQUFDLGVBQWU7b0JBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO2dCQUNsRixJQUFHLEtBQUssS0FBSyxDQUFDLElBQUkscUJBQVMsQ0FBQyxlQUFlO29CQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztnQkFDbEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2FBQ3RDO1NBQ0o7SUFDTCxDQUFDO0lBR1MsbUNBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLHFCQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFM0MsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFoRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO3lEQUNNO0lBRTNCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDOzBEQUNPO0lBVFYsa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0FtRXRDO0lBQUQseUJBQUM7Q0FuRUQsQUFtRUMsQ0FuRStDLEVBQUUsQ0FBQyxTQUFTLEdBbUUzRDtrQkFuRW9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkRm9vZENvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBvdmVybGF5OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5MYWJlbF0pXHJcbiAgICB1bml0Q29zdHM6IGNjLkxhYmVsW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgICB1bml0RnJhbWVzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRoaXMubGFiZWwuc3RyaW5nID0gU3RyaW5nKENvbnN0YW50cy5mb29kKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGluY3JlYXNlRm9vZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm92ZXJsYXkuc2NhbGVYID0gMDtcclxuICAgICAgICBcclxuICAgICAgICBpZihDb25zdGFudHMuaXNQYXVzZUdhbWUpIHJldHVybjtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5vdmVybGF5KVxyXG4gICAgICAgIC50bygxLjIsIHtzY2FsZVg6IDF9KVxyXG4gICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmZvb2QgKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5pbmNyZWFzZUZvb2QoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrRW5hYmxlQ29zdCgpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy51bml0Q29zdHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy51bml0Q29zdHNbaW5kZXhdO1xyXG4gICAgICAgICAgICBpZihOdW1iZXIodGhpcy5sYWJlbC5zdHJpbmcpID49IE51bWJlcihsYWJlbC5zdHJpbmcpKSB7XHJcbiAgICAgICAgICAgICAgICBpZihpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5pdEZyYW1lc1tpbmRleF0ub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5ub2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihpbmRleCA9PT0gMSAmJiBDb25zdGFudHMuaXNDYW5CdXlBcm15THYyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bml0RnJhbWVzW2luZGV4XS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGluZGV4ID09PSAyICYmIENvbnN0YW50cy5pc0NhbkJ1eUFybXlMdjMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuaXRGcmFtZXNbaW5kZXhdLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwubm9kZS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwubm9kZS5jb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgICAgICAgICAgIGlmKGluZGV4ID09PSAxICYmIENvbnN0YW50cy5pc0NhbkJ1eUFybXlMdjIpIHRoaXMudW5pdEZyYW1lc1tpbmRleF0ub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgICAgIGlmKGluZGV4ID09PSAyICYmIENvbnN0YW50cy5pc0NhbkJ1eUFybXlMdjMpIHRoaXMudW5pdEZyYW1lc1tpbmRleF0ub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5pdEZyYW1lc1tpbmRleF0ub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIC8vIGlmKENvbnN0YW50cy5pc1BhdXNlR2FtZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gU3RyaW5nKENvbnN0YW50cy5mb29kKTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGVja0VuYWJsZUNvc3QoKTtcclxuICAgIH1cclxufVxyXG4iXX0=