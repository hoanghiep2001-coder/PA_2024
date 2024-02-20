
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
cc._RF.push(module, 'e4962SfSUFOcoqc2Otz+5iQ', 'GamePlay');
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
var NodesController_1 = require("./NodesController");
// import * as PF from "pathfinding";
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Script
        _this.NodesController = null;
        _this.AudioManager = null;
        _this.GameController = null;
        // Component
        // Node
        _this.graphic = null;
        _this.pathFinding_Grid = null;
        _this.pathFinding_Nodes = [];
        // State
        _this.curentPosition = null;
        _this.currentHint = null;
        _this.currentPencil = null;
        _this.curerntPoint = null;
        _this.isHit = false;
        _this.isHint = false;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
        var physics = cc.director.getPhysicsManager();
        physics.enabled = true;
        // physics.debugDrawFlags = cc.PhysicsManager.DrawBits.e_shapeBit
    };
    GamePlay.prototype.start = function () {
        this.NodesController.CTA.active = false;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        this.handleGamePlay();
        constants_1.Constants.isCanTouch = true;
        // Path Finding
        // this.drawGrid();
        // this.checkGridCollide();
        // -------------------
    };
    // private drawGrid(): void {
    //     this.pathFinding_Grid = new PF.Grid(400, 400);
    //     this.pathFinding_Nodes = this.pathFinding_Grid.nodes;
    //     this.graphic.node.y = -400 / 2;
    //     this.graphic.node.x = -400 / 2;
    //     console.log(this.pathFinding_Grid);
    //     // Đặt màu và độ dày của đường vẽ
    //     this.graphic.strokeColor = cc.Color.BLACK;
    //     this.graphic.lineWidth = 4;
    //     // Vẽ lưới
    //     for (let i = 0; i <= 400; i += 5) {
    //         // Vẽ dòng ngang
    //         this.graphic.moveTo(0, i);
    //         this.graphic.lineTo(400, i);
    //         // Vẽ dòng dọc
    //         this.graphic.moveTo(i, 0);
    //         this.graphic.lineTo(i, 400);
    //     }
    //     // Áp dụng các đường vẽ
    //     this.graphic.stroke();
    // }
    // private checkGridCollide(): void {
    //     let environmentColliders: cc.PhysicsPolygonCollider = this.NodesController.Environment.getComponent(cc.PhysicsPolygonCollider);
    //     let points = environmentColliders.points;
    //     this.pathFinding_Nodes.forEach(node => {
    //         if (this.isPointInPolygon(node, points)) {
    //             console.log('Node va chạm:', node);
    //         } else {
    //             console.log("0 va");
    //         }
    //     });
    // }
    // private isPointInPolygon(point, polygon): boolean {
    //     let x = point.x, y = point.y;
    //     let inside = false;
    //     for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    //         let xi = polygon[i].x, yi = polygon[i].y;
    //         let xj = polygon[j].x, yj = polygon[j].y;
    //         let intersect = ((yi > y) !== (yj > y))
    //             && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
    //         if (intersect) inside = !inside;
    //     }
    //     return inside;
    // }
    GamePlay.prototype.handleGamePlay = function () {
        constants_1.Constants.CharacterPos = this.NodesController.Spine_Character.node.getPosition();
        this.registerEvent();
    };
    GamePlay.prototype.registerEvent = function () {
    };
    GamePlay.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        if (constants_1.Constants.ironSource.SoundState) {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
        constants_1.Constants.ironSource.isPlayBgSound = true;
    };
    GamePlay.prototype.handleMuteSoundIronSource = function () {
        constants_1.Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10);
        if (constants_1.Constants.ironSource.State) {
            if (constants_1.Constants.ironSource.State === 1 && !constants_1.Constants.ironSource.SoundState && !constants_1.Constants.ironSource.isEndGame) {
                constants_1.Constants.ironSource.SoundState = true;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
            }
            if (constants_1.Constants.ironSource.State === 2 && constants_1.Constants.ironSource.SoundState) {
                constants_1.Constants.ironSource.SoundState = false;
                this.AudioManager.stopAllSound();
            }
        }
    };
    GamePlay.prototype.characterHit = function () {
        var _this = this;
        this.isHit = true;
        this.NodesController.Spine_Character.setAnimation(0, "being_hit", true);
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.crySound);
        this.scheduleOnce(function () {
            _this.NodesController.CTA.active = true;
            _this.NodesController.CTA.getComponent(cc.Animation).play("CTA_Anim");
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.loseSound);
            _this.NodesController.CTA_button.on(cc.Node.EventType.TOUCH_START, _this.GameController.installHandle, _this);
            _this.NodesController.CTA_Overlay.on(cc.Node.EventType.TOUCH_START, _this.GameController.installHandle, _this);
        }, 1);
    };
    GamePlay.prototype.unactiveHint = function () {
        this.isHint = true;
        // this.handleIronSourcePlaySound();
        this.NodesController.Hint.active = false;
    };
    GamePlay.prototype.update = function (dt) {
        // this.handleMuteSoundIronSource();
        constants_1.Constants.isHit && !this.isHit && this.characterHit();
        window.isStartDraw && !this.isHint && this.unactiveHint();
        // this.handleMuteSoundIronSource();
    };
    __decorate([
        property(NodesController_1.default)
    ], GamePlay.prototype, "NodesController", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(cc.Graphics)
    ], GamePlay.prototype, "graphic", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCxxREFBZ0Q7QUFDaEQscUNBQXFDO0FBRS9CLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcUxDO1FBbkxHLFNBQVM7UUFFVCxxQkFBZSxHQUFvQixJQUFJLENBQUM7UUFFeEMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUd0QyxZQUFZO1FBR1osT0FBTztRQUVQLGFBQU8sR0FBZ0IsSUFBSSxDQUFDO1FBQzVCLHNCQUFnQixHQUFRLElBQUksQ0FBQztRQUM3Qix1QkFBaUIsR0FBUSxFQUFFLENBQUM7UUFFNUIsUUFBUTtRQUNSLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBQy9CLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLG1CQUFhLEdBQWdCLElBQUksQ0FBQztRQUNsQyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixXQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLFlBQU0sR0FBWSxLQUFLLENBQUM7O0lBMko1QixDQUFDO0lBeEphLHlCQUFNLEdBQWhCO1FBQ0ksSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLGlFQUFpRTtJQUNyRSxDQUFDO0lBR1Msd0JBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFFeEMsSUFBSSxDQUFDLFlB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cUJBQVMsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0RCxNQUFNLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFMUQsb0NBQW9DO0lBQ3hDLENBQUM7SUFoTEQ7UUFEQyxRQUFRLENBQUMseUJBQWUsQ0FBQztxREFDYztJQUV4QztRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDO2tEQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLCtCQUFjLENBQUM7b0RBQ2E7SUFRdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs2Q0FDTTtJQWhCWCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBcUw1QjtJQUFELGVBQUM7Q0FyTEQsQUFxTEMsQ0FyTHFDLEVBQUUsQ0FBQyxTQUFTLEdBcUxqRDtrQkFyTG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBOb2Rlc0NvbnRyb2xsZXIgZnJvbSBcIi4vTm9kZXNDb250cm9sbGVyXCI7XHJcbi8vIGltcG9ydCAqIGFzIFBGIGZyb20gXCJwYXRoZmluZGluZ1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQbGF5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBTY3JpcHRcclxuICAgIEBwcm9wZXJ0eShOb2Rlc0NvbnRyb2xsZXIpXHJcbiAgICBOb2Rlc0NvbnRyb2xsZXI6IE5vZGVzQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gICAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gICAgR2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy8gQ29tcG9uZW50XHJcblxyXG5cclxuICAgIC8vIE5vZGVcclxuICAgIEBwcm9wZXJ0eShjYy5HcmFwaGljcylcclxuICAgIGdyYXBoaWM6IGNjLkdyYXBoaWNzID0gbnVsbDtcclxuICAgIHBhdGhGaW5kaW5nX0dyaWQ6IGFueSA9IG51bGw7XHJcbiAgICBwYXRoRmluZGluZ19Ob2RlczogYW55ID0gW107XHJcblxyXG4gICAgLy8gU3RhdGVcclxuICAgIGN1cmVudFBvc2l0aW9uOiBjYy5WZWMyID0gbnVsbDtcclxuICAgIGN1cnJlbnRIaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGN1cnJlbnRQZW5jaWw6IGNjLkdyYXBoaWNzID0gbnVsbDtcclxuICAgIGN1cmVybnRQb2ludDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBpc0hpdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNIaW50OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHBoeXNpY3MgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xyXG4gICAgICAgIHBoeXNpY3MuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgLy8gcGh5c2ljcy5kZWJ1Z0RyYXdGbGFncyA9IGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfc2hhcGVCaXRcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250cm9sbGVyLkNUQS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlR2FtZVBsYXkoKTtcclxuICAgICAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIFBhdGggRmluZGluZ1xyXG4gICAgICAgIC8vIHRoaXMuZHJhd0dyaWQoKTtcclxuICAgICAgICAvLyB0aGlzLmNoZWNrR3JpZENvbGxpZGUoKTtcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIHByaXZhdGUgZHJhd0dyaWQoKTogdm9pZCB7XHJcbiAgICAvLyAgICAgdGhpcy5wYXRoRmluZGluZ19HcmlkID0gbmV3IFBGLkdyaWQoNDAwLCA0MDApO1xyXG4gICAgLy8gICAgIHRoaXMucGF0aEZpbmRpbmdfTm9kZXMgPSB0aGlzLnBhdGhGaW5kaW5nX0dyaWQubm9kZXM7XHJcbiAgICAvLyAgICAgdGhpcy5ncmFwaGljLm5vZGUueSA9IC00MDAgLyAyO1xyXG4gICAgLy8gICAgIHRoaXMuZ3JhcGhpYy5ub2RlLnggPSAtNDAwIC8gMjtcclxuXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy5wYXRoRmluZGluZ19HcmlkKTtcclxuICAgICAgICBcclxuICAgIC8vICAgICAvLyDEkOG6t3QgbcOgdSB2w6AgxJHhu5kgZMOgeSBj4bunYSDEkcaw4budbmcgduG6vVxyXG4gICAgLy8gICAgIHRoaXMuZ3JhcGhpYy5zdHJva2VDb2xvciA9IGNjLkNvbG9yLkJMQUNLO1xyXG4gICAgLy8gICAgIHRoaXMuZ3JhcGhpYy5saW5lV2lkdGggPSA0O1xyXG5cclxuICAgIC8vICAgICAvLyBW4bq9IGzGsOG7m2lcclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA0MDA7IGkgKz0gNSkge1xyXG4gICAgLy8gICAgICAgICAvLyBW4bq9IGTDsm5nIG5nYW5nXHJcbiAgICAvLyAgICAgICAgIHRoaXMuZ3JhcGhpYy5tb3ZlVG8oMCwgaSk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuZ3JhcGhpYy5saW5lVG8oNDAwLCBpKTtcclxuXHJcbiAgICAvLyAgICAgICAgIC8vIFbhur0gZMOybmcgZOG7jWNcclxuICAgIC8vICAgICAgICAgdGhpcy5ncmFwaGljLm1vdmVUbyhpLCAwKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5ncmFwaGljLmxpbmVUbyhpLCA0MDApO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgLy8gw4FwIGThu6VuZyBjw6FjIMSRxrDhu51uZyB24bq9XHJcbiAgICAvLyAgICAgdGhpcy5ncmFwaGljLnN0cm9rZSgpO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICAvLyBwcml2YXRlIGNoZWNrR3JpZENvbGxpZGUoKTogdm9pZCB7XHJcbiAgICAvLyAgICAgbGV0IGVudmlyb25tZW50Q29sbGlkZXJzOiBjYy5QaHlzaWNzUG9seWdvbkNvbGxpZGVyID0gdGhpcy5Ob2Rlc0NvbnRyb2xsZXIuRW52aXJvbm1lbnQuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NQb2x5Z29uQ29sbGlkZXIpO1xyXG4gICAgLy8gICAgIGxldCBwb2ludHMgPSBlbnZpcm9ubWVudENvbGxpZGVycy5wb2ludHM7XHJcblxyXG4gICAgLy8gICAgIHRoaXMucGF0aEZpbmRpbmdfTm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuaXNQb2ludEluUG9seWdvbihub2RlLCBwb2ludHMpKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm9kZSB2YSBjaOG6oW06Jywgbm9kZSk7XHJcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjAgdmFcIik7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgLy8gcHJpdmF0ZSBpc1BvaW50SW5Qb2x5Z29uKHBvaW50LCBwb2x5Z29uKTogYm9vbGVhbiB7XHJcbiAgICAvLyAgICAgbGV0IHggPSBwb2ludC54LCB5ID0gcG9pbnQueTtcclxuICAgIFxyXG4gICAgLy8gICAgIGxldCBpbnNpZGUgPSBmYWxzZTtcclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMCwgaiA9IHBvbHlnb24ubGVuZ3RoIC0gMTsgaSA8IHBvbHlnb24ubGVuZ3RoOyBqID0gaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGxldCB4aSA9IHBvbHlnb25baV0ueCwgeWkgPSBwb2x5Z29uW2ldLnk7XHJcbiAgICAvLyAgICAgICAgIGxldCB4aiA9IHBvbHlnb25bal0ueCwgeWogPSBwb2x5Z29uW2pdLnk7XHJcbiAgICBcclxuICAgIC8vICAgICAgICAgbGV0IGludGVyc2VjdCA9ICgoeWkgPiB5KSAhPT0gKHlqID4geSkpXHJcbiAgICAvLyAgICAgICAgICAgICAmJiAoeCA8ICh4aiAtIHhpKSAqICh5IC0geWkpIC8gKHlqIC0geWkpICsgeGkpO1xyXG4gICAgLy8gICAgICAgICBpZiAoaW50ZXJzZWN0KSBpbnNpZGUgPSAhaW5zaWRlO1xyXG4gICAgLy8gICAgIH1cclxuICAgIFxyXG4gICAgLy8gICAgIHJldHVybiBpbnNpZGU7XHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlR2FtZVBsYXkoKTogdm9pZCB7XHJcbiAgICAgICAgQ29uc3RhbnRzLkNoYXJhY3RlclBvcyA9IHRoaXMuTm9kZXNDb250cm9sbGVyLlNwaW5lX0NoYXJhY3Rlci5ub2RlLmdldFBvc2l0aW9uKClcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSByZWdpc3RlckV2ZW50KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpOiB2b2lkIHtcclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29jb3NTb3VuZFN0YXRlXCIpLCAxMClcclxuXHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlKSB7XHJcbiAgICAgICAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9PT0gMSAmJiAhQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSAmJiAhQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNFbmRHYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID09PSAyICYmIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BBbGxTb3VuZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNoYXJhY3RlckhpdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzSGl0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udHJvbGxlci5TcGluZV9DaGFyYWN0ZXIuc2V0QW5pbWF0aW9uKDAsIFwiYmVpbmdfaGl0XCIsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5jcnlTb3VuZCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRyb2xsZXIuQ1RBLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250cm9sbGVyLkNUQS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiQ1RBX0FuaW1cIik7XHJcbiAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5sb3NlU291bmQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5Ob2Rlc0NvbnRyb2xsZXIuQ1RBX2J1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuTm9kZXNDb250cm9sbGVyLkNUQV9PdmVybGF5Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUsIHRoaXMpO1xyXG4gICAgICAgIH0sIDEpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgdW5hY3RpdmVIaW50KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXNIaW50ID0gdHJ1ZTtcclxuICAgICAgICAvLyB0aGlzLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udHJvbGxlci5IaW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzLmhhbmRsZU11dGVTb3VuZElyb25Tb3VyY2UoKTtcclxuICAgICAgICBDb25zdGFudHMuaXNIaXQgJiYgIXRoaXMuaXNIaXQgJiYgdGhpcy5jaGFyYWN0ZXJIaXQoKTtcclxuICAgICAgICB3aW5kb3cuaXNTdGFydERyYXcgJiYgIXRoaXMuaXNIaW50ICYmIHRoaXMudW5hY3RpdmVIaW50KCk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==