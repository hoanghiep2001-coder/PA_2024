
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/GamePlay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1d34srP15JNoxtzOCtQ0oZ', 'GamePlay');
// Script/Controller/GamePlay.ts

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
var GameController_1 = require("./GameController");
var LoadFoodController_1 = require("./LoadFoodController");
var SpawnController_1 = require("./SpawnController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.LoadFoodController = null;
        _this.SpawnController = null;
        // Node
        _this.CTA = null;
        _this.Boss = null;
        // state
        _this.isCollideBaseFlag = false;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
        var physics = cc.director.getPhysicsManager();
        physics.enabled = true;
        var collisionManager = cc.director.getCollisionManager();
        collisionManager.enabled = true;
        // collisionManager.enabledDrawBoundingBox = true;
        // collisionManager.enabledDebugDraw = true;
    };
    GamePlay.prototype.start = function () {
        var _this = this;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        this.AudioManager.bgSound.volume = 0.5;
        cc.view.setResizeCallback(function () {
            _this.handleYourOrientation();
        });
    };
    GamePlay.prototype.handleYourOrientation = function () {
        if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
            cc.director.loadScene("game_Horizontal");
            constants_1.Constants.scaleArmy = 0.5;
        }
        else {
            var width = cc.view.getFrameSize().width;
            var height = cc.view.getFrameSize().height;
            if (width / height < 0.5) {
                // IPX
                cc.director.loadScene("game_IPX");
                constants_1.Constants.scaleArmy = 0.3;
            }
            else {
                // other
                if (height / width > 1.5) {
                    cc.director.loadScene("game_Vertical");
                    constants_1.Constants.scaleArmy = 0.3;
                }
                else {
                    cc.director.loadScene("game_VerticalIpad");
                    constants_1.Constants.scaleArmy = 0.35;
                }
            }
        }
    };
    GamePlay.prototype.spawnArmy = function (index) {
        switch (index) {
            case 1:
                !constants_1.Constants.isStartGame && this.LoadFoodController.increaseFood();
                !constants_1.Constants.isStartGame && this.SpawnController.SpawnEnemies();
                constants_1.Constants.isStartGame = true;
                // spawn army lv1
                if (constants_1.Constants.food >= 3) {
                    constants_1.Constants.food -= 3;
                    this.SpawnController.SpawnPlayerArmy(constants_1.Constants.ArmySkin.Ally, 1);
                }
                break;
            case 2:
                // spawn army lv2
                if (constants_1.Constants.food >= 4 && constants_1.Constants.isCanBuyArmyLv2) {
                    constants_1.Constants.food -= 4;
                    this.SpawnController.SpawnPlayerArmy(constants_1.Constants.ArmySkin.Ally, 2);
                }
                break;
            case 3:
                // spawn army lv3
                if (constants_1.Constants.food >= 5 && constants_1.Constants.isCanBuyArmyLv3) {
                    constants_1.Constants.food -= 5;
                    this.SpawnController.SpawnPlayerArmy(constants_1.Constants.ArmySkin.Ally, 3);
                }
                break;
            default:
                console.log("can not spawn");
                break;
        }
    };
    GamePlay.prototype.update = function (dt) {
        var _this = this;
        if (constants_1.Constants.isCollideBase && !this.isCollideBaseFlag) {
            this.isCollideBaseFlag = true;
            this.Boss.active = true;
            this.scheduleOnce(function () {
                _this.CTA.active = true;
            }, 1.5);
        }
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(LoadFoodController_1.default)
    ], GamePlay.prototype, "LoadFoodController", void 0);
    __decorate([
        property(SpawnController_1.default)
    ], GamePlay.prototype, "SpawnController", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "CTA", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "Boss", void 0);
    GamePlay = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCwyREFBc0Q7QUFDdEQscURBQWdEO0FBRTFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBZ0hDO1FBOUdDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsd0JBQWtCLEdBQXVCLElBQUksQ0FBQztRQUU5QyxxQkFBZSxHQUFvQixJQUFJLENBQUM7UUFFeEMsT0FBTztRQUVQLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFFcEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixRQUFRO1FBQ1IsdUJBQWlCLEdBQVksS0FBSyxDQUFDOztJQStGckMsQ0FBQztJQTVGVyx5QkFBTSxHQUFoQjtRQUNFLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUM5QyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN6RCxnQkFBZ0IsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLGtEQUFrRDtRQUNsRCw0Q0FBNEM7SUFDOUMsQ0FBQztJQUdTLHdCQUFLLEdBQWY7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFFdkMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUN4QixLQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHTyx3Q0FBcUIsR0FBN0I7UUFDRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxFQUFFO1lBQ2hFLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDekMscUJBQVMsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1NBQzNCO2FBQU07WUFDTCxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN6QyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUMzQyxJQUFJLEtBQUssR0FBRyxNQUFNLEdBQUcsR0FBRyxFQUFFO2dCQUN4QixNQUFNO2dCQUNOLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNsQyxxQkFBUyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7YUFDM0I7aUJBQU07Z0JBQ0wsUUFBUTtnQkFDUixJQUFJLE1BQU0sR0FBRyxLQUFLLEdBQUcsR0FBRyxFQUFFO29CQUN4QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDdkMscUJBQVMsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO2lCQUMzQjtxQkFBTTtvQkFDTCxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO29CQUMzQyxxQkFBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7aUJBQzVCO2FBQ0Y7U0FFRjtJQUNILENBQUM7SUFHTSw0QkFBUyxHQUFoQixVQUFpQixLQUFhO1FBQzVCLFFBQVEsS0FBSyxFQUFFO1lBQ2IsS0FBSyxDQUFDO2dCQUNKLENBQUMscUJBQVMsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUNqRSxDQUFDLHFCQUFTLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQzlELHFCQUFTLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFFN0IsaUJBQWlCO2dCQUNqQixJQUFJLHFCQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtvQkFDdkIscUJBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO29CQUNwQixJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ2xFO2dCQUVELE1BQU07WUFDUixLQUFLLENBQUM7Z0JBQ0osaUJBQWlCO2dCQUNqQixJQUFJLHFCQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxxQkFBUyxDQUFDLGVBQWUsRUFBRTtvQkFDcEQscUJBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO29CQUNwQixJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ2xFO2dCQUNELE1BQU07WUFFUixLQUFLLENBQUM7Z0JBQ0osaUJBQWlCO2dCQUNqQixJQUFJLHFCQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxxQkFBUyxDQUFDLGVBQWUsRUFBRTtvQkFDcEQscUJBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO29CQUNwQixJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ2xFO2dCQUNELE1BQU07WUFDUjtnQkFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUM3QixNQUFNO1NBQ1Q7SUFDSCxDQUFDO0lBR1MseUJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUEzQixpQkFRQztRQVBDLElBQUkscUJBQVMsQ0FBQyxhQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDdEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDaEIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtTQUNSO0lBQ0gsQ0FBQztJQTVHRDtRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDO2tEQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLCtCQUFjLENBQUM7b0RBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsNEJBQWtCLENBQUM7d0RBQ2lCO0lBRTlDO1FBREMsUUFBUSxDQUFDLHlCQUFlLENBQUM7cURBQ2M7SUFJeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDRTtJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBZEYsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWdINUI7SUFBRCxlQUFDO0NBaEhELEFBZ0hDLENBaEhxQyxFQUFFLENBQUMsU0FBUyxHQWdIakQ7a0JBaEhvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgTG9hZEZvb2RDb250cm9sbGVyIGZyb20gXCIuL0xvYWRGb29kQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgU3Bhd25Db250cm9sbGVyIGZyb20gXCIuL1NwYXduQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQbGF5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuICBAcHJvcGVydHkoR2FtZUNvbnRyb2xsZXIpXHJcbiAgR2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICBAcHJvcGVydHkoTG9hZEZvb2RDb250cm9sbGVyKVxyXG4gIExvYWRGb29kQ29udHJvbGxlcjogTG9hZEZvb2RDb250cm9sbGVyID0gbnVsbDtcclxuICBAcHJvcGVydHkoU3Bhd25Db250cm9sbGVyKVxyXG4gIFNwYXduQ29udHJvbGxlcjogU3Bhd25Db250cm9sbGVyID0gbnVsbDtcclxuXHJcbiAgLy8gTm9kZVxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIENUQTogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgQm9zczogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIC8vIHN0YXRlXHJcbiAgaXNDb2xsaWRlQmFzZUZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICBsZXQgcGh5c2ljcyA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XHJcbiAgICBwaHlzaWNzLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgbGV0IGNvbGxpc2lvbk1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICBjb2xsaXNpb25NYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgLy8gY29sbGlzaW9uTWFuYWdlci5lbmFibGVkRHJhd0JvdW5kaW5nQm94ID0gdHJ1ZTtcclxuICAgIC8vIGNvbGxpc2lvbk1hbmFnZXIuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIuYmdTb3VuZC52b2x1bWUgPSAwLjU7XHJcblxyXG4gICAgY2Mudmlldy5zZXRSZXNpemVDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgIHRoaXMuaGFuZGxlWW91ck9yaWVudGF0aW9uKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGhhbmRsZVlvdXJPcmllbnRhdGlvbigpIHtcclxuICAgIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoID4gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQpIHtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZV9Ib3Jpem9udGFsXCIpO1xyXG4gICAgICBDb25zdGFudHMuc2NhbGVBcm15ID0gMC41O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IHdpZHRoID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aDtcclxuICAgICAgbGV0IGhlaWdodCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0O1xyXG4gICAgICBpZiAod2lkdGggLyBoZWlnaHQgPCAwLjUpIHtcclxuICAgICAgICAvLyBJUFhcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lX0lQWFwiKTtcclxuICAgICAgICBDb25zdGFudHMuc2NhbGVBcm15ID0gMC4zO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIG90aGVyXHJcbiAgICAgICAgaWYgKGhlaWdodCAvIHdpZHRoID4gMS41KSB7XHJcbiAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lX1ZlcnRpY2FsXCIpO1xyXG4gICAgICAgICAgQ29uc3RhbnRzLnNjYWxlQXJteSA9IDAuMztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZV9WZXJ0aWNhbElwYWRcIik7XHJcbiAgICAgICAgICBDb25zdGFudHMuc2NhbGVBcm15ID0gMC4zNTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHNwYXduQXJteShpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKGluZGV4KSB7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICAhQ29uc3RhbnRzLmlzU3RhcnRHYW1lICYmIHRoaXMuTG9hZEZvb2RDb250cm9sbGVyLmluY3JlYXNlRm9vZCgpO1xyXG4gICAgICAgICFDb25zdGFudHMuaXNTdGFydEdhbWUgJiYgdGhpcy5TcGF3bkNvbnRyb2xsZXIuU3Bhd25FbmVtaWVzKCk7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlzU3RhcnRHYW1lID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gc3Bhd24gYXJteSBsdjFcclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmZvb2QgPj0gMykge1xyXG4gICAgICAgICAgQ29uc3RhbnRzLmZvb2QgLT0gMztcclxuICAgICAgICAgIHRoaXMuU3Bhd25Db250cm9sbGVyLlNwYXduUGxheWVyQXJteShDb25zdGFudHMuQXJteVNraW4uQWxseSwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIC8vIHNwYXduIGFybXkgbHYyXHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5mb29kID49IDQgJiYgQ29uc3RhbnRzLmlzQ2FuQnV5QXJteUx2Mikge1xyXG4gICAgICAgICAgQ29uc3RhbnRzLmZvb2QgLT0gNDtcclxuICAgICAgICAgIHRoaXMuU3Bhd25Db250cm9sbGVyLlNwYXduUGxheWVyQXJteShDb25zdGFudHMuQXJteVNraW4uQWxseSwgMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIC8vIHNwYXduIGFybXkgbHYzXHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5mb29kID49IDUgJiYgQ29uc3RhbnRzLmlzQ2FuQnV5QXJteUx2Mykge1xyXG4gICAgICAgICAgQ29uc3RhbnRzLmZvb2QgLT0gNTtcclxuICAgICAgICAgIHRoaXMuU3Bhd25Db250cm9sbGVyLlNwYXduUGxheWVyQXJteShDb25zdGFudHMuQXJteVNraW4uQWxseSwgMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2FuIG5vdCBzcGF3blwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChDb25zdGFudHMuaXNDb2xsaWRlQmFzZSAmJiAhdGhpcy5pc0NvbGxpZGVCYXNlRmxhZykge1xyXG4gICAgICB0aGlzLmlzQ29sbGlkZUJhc2VGbGFnID0gdHJ1ZTtcclxuICAgICAgdGhpcy5Cb3NzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICB0aGlzLkNUQS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB9LCAxLjUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=