
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/Bee.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c3a1loUGhKZZS1Pj7UbsBp', 'Bee');
// Script/Controller/Bee.ts

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
var AudioManager_1 = require("../Plugin/AudioManager");
// import * as PF from "pathfinding";
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.rigidBody = null;
        _this.isCollide = false;
        return _this;
    }
    Bee.prototype.start = function () {
        this.beginContact();
        // let grid = new PF.Grid(100, 100);
        // console.log(grid);
    };
    Bee.prototype.createPathFinding = function () {
        // let grid = new PF.Grid(10, 10);
        // console.log(PF.Grid(100, 100));
    };
    Bee.prototype.beginContact = function () {
        var _this = this;
        this.rigidBody.onBeginContact = function (c, s, o) {
            if (o.tag === 4) {
                console.log("collide");
            }
            if (o.tag === 3) {
                if (_this.isCollide) {
                    return;
                }
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.stingSound);
                _this.isCollide = true;
                constants_1.Constants.isHit = true;
                // let random = Math.floor(Math.random() * 3) + 1;
                // console.log(random);
                // if(random === 1) {
                //     targetPosition = Constants.Char_Point1;
                // } else if (random === 2) {
                //     targetPosition = Constants.Char_Point2;
                // } else {
                //     targetPosition = Constants.Char_Point3;
                // }
                // switch (random) {
                //     case 1:
                //         targetPosition = Constants.Char_Point1;
                //         break;
                //     case 2:
                //         targetPosition = Constants.Char_Point2;
                //         break;
                //     case 3:
                //         targetPosition = Constants.Char_Point3;
                //         break;
                //     default:
                //         break;
                // }
                // let currentPosition = this.node.getPosition();
                // currentPosition.lerp(targetPosition, 0.5, currentPosition);
                // this.node.setPosition(currentPosition);
            }
        };
    };
    Bee.prototype.attack = function () {
        var targetPosition = constants_1.Constants.CharacterPos;
        var currentPosition = this.node.getPosition();
        currentPosition.lerp(targetPosition, 0.015, currentPosition);
        this.node.setPosition(currentPosition);
    };
    Bee.prototype.update = function (dt) {
        if (window.isDraw && !this.isCollide) {
            this.attack();
        }
    };
    __decorate([
        property(AudioManager_1.default)
    ], Bee.prototype, "AudioManager", void 0);
    __decorate([
        property(cc.RigidBody)
    ], Bee.prototype, "rigidBody", void 0);
    Bee = __decorate([
        ccclass
    ], Bee);
    return Bee;
}(cc.Component));
exports.default = Bee;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxCZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUNsRCxxQ0FBcUM7QUFDL0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBaUMsdUJBQVk7SUFBN0M7UUFBQSxxRUFzRkM7UUFuRkcsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBR2xDLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGVBQVMsR0FBWSxLQUFLLENBQUE7O0lBOEU5QixDQUFDO0lBNUVhLG1CQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFcEIsb0NBQW9DO1FBQ3BDLHFCQUFxQjtJQUN6QixDQUFDO0lBR08sK0JBQWlCLEdBQXpCO1FBQ0ksa0NBQWtDO1FBQ2xDLGtDQUFrQztJQUV0QyxDQUFDO0lBR08sMEJBQVksR0FBcEI7UUFBQSxpQkE0Q0M7UUEzQ0csSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsVUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFFcEMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDYixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzFCO1lBRUQsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDYixJQUFHLEtBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ2YsT0FBTztpQkFDVjtnQkFFRCxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtnQkFDNUQsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLHFCQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDdkIsa0RBQWtEO2dCQUNsRCx1QkFBdUI7Z0JBRXZCLHFCQUFxQjtnQkFDckIsOENBQThDO2dCQUM5Qyw2QkFBNkI7Z0JBQzdCLDhDQUE4QztnQkFDOUMsV0FBVztnQkFDWCw4Q0FBOEM7Z0JBQzlDLElBQUk7Z0JBQ0osb0JBQW9CO2dCQUNwQixjQUFjO2dCQUNkLGtEQUFrRDtnQkFDbEQsaUJBQWlCO2dCQUNqQixjQUFjO2dCQUNkLGtEQUFrRDtnQkFDbEQsaUJBQWlCO2dCQUNqQixjQUFjO2dCQUNkLGtEQUFrRDtnQkFDbEQsaUJBQWlCO2dCQUNqQixlQUFlO2dCQUNmLGlCQUFpQjtnQkFDakIsSUFBSTtnQkFFSixpREFBaUQ7Z0JBQ2pELDhEQUE4RDtnQkFDOUQsMENBQTBDO2FBQzdDO1FBQ0wsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQUdPLG9CQUFNLEdBQWQ7UUFDSSxJQUFJLGNBQWMsR0FBRyxxQkFBUyxDQUFDLFlBQVksQ0FBQztRQUM1QyxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlDLGVBQWUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBRSxlQUFlLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBR1Msb0JBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNqQjtJQUNMLENBQUM7SUFqRkQ7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQzs2Q0FDVztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzBDQUNRO0lBTmQsR0FBRztRQUR2QixPQUFPO09BQ2EsR0FBRyxDQXNGdkI7SUFBRCxVQUFDO0NBdEZELEFBc0ZDLENBdEZnQyxFQUFFLENBQUMsU0FBUyxHQXNGNUM7a0JBdEZvQixHQUFHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuLy8gaW1wb3J0ICogYXMgUEYgZnJvbSBcInBhdGhmaW5kaW5nXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCZWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlJpZ2lkQm9keSlcclxuICAgIHJpZ2lkQm9keTogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuXHJcbiAgICBpc0NvbGxpZGU6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJlZ2luQ29udGFjdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGxldCBncmlkID0gbmV3IFBGLkdyaWQoMTAwLCAxMDApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGdyaWQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVBhdGhGaW5kaW5nKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGxldCBncmlkID0gbmV3IFBGLkdyaWQoMTAsIDEwKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhQRi5HcmlkKDEwMCwgMTAwKSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGJlZ2luQ29udGFjdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJpZ2lkQm9keS5vbkJlZ2luQ29udGFjdCA9IChjLCBzLCBvKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChvLnRhZyA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb2xsaWRlXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoby50YWcgPT09IDMpIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaXNDb2xsaWRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5zdGluZ1NvdW5kKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvbGxpZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmlzSGl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKSArIDE7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyYW5kb20pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGlmKHJhbmRvbSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRhcmdldFBvc2l0aW9uID0gQ29uc3RhbnRzLkNoYXJfUG9pbnQxO1xyXG4gICAgICAgICAgICAgICAgLy8gfSBlbHNlIGlmIChyYW5kb20gPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0YXJnZXRQb3NpdGlvbiA9IENvbnN0YW50cy5DaGFyX1BvaW50MjtcclxuICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGFyZ2V0UG9zaXRpb24gPSBDb25zdGFudHMuQ2hhcl9Qb2ludDM7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyBzd2l0Y2ggKHJhbmRvbSkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGFyZ2V0UG9zaXRpb24gPSBDb25zdGFudHMuQ2hhcl9Qb2ludDE7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGFyZ2V0UG9zaXRpb24gPSBDb25zdGFudHMuQ2hhcl9Qb2ludDI7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGFyZ2V0UG9zaXRpb24gPSBDb25zdGFudHMuQ2hhcl9Qb2ludDM7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIC8vIGN1cnJlbnRQb3NpdGlvbi5sZXJwKHRhcmdldFBvc2l0aW9uLCAwLjUsIGN1cnJlbnRQb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuc2V0UG9zaXRpb24oY3VycmVudFBvc2l0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBhdHRhY2soKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHRhcmdldFBvc2l0aW9uID0gQ29uc3RhbnRzLkNoYXJhY3RlclBvcztcclxuICAgICAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgY3VycmVudFBvc2l0aW9uLmxlcnAodGFyZ2V0UG9zaXRpb24sIDAuMDE1LCBjdXJyZW50UG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihjdXJyZW50UG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAod2luZG93LmlzRHJhdyAmJiAhdGhpcy5pc0NvbGxpZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5hdHRhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==