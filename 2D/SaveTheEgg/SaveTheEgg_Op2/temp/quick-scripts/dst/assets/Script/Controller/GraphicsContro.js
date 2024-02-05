
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/GraphicsContro.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93044ZctVJBYpcfVaP3IJVr', 'GraphicsContro');
// Script/Controller/GraphicsContro.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    graphics: null,
    line_point: [cc.Vec2]
  },
  onLoad: function onLoad() {
    this.node.width = cc.winSize.width;
    this.node.height = cc.winSize.height;
    this.graphics = this.getComponent(cc.Graphics);
  },
  start: function start() {
    this.onTouch();
  },
  onTouch: function onTouch() {
    this.node.on(cc.Node.EventType.TOUCH_START, this.touch_start, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touch_move, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.touch_end, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touch_end, this);
  },
  offTouch: function offTouch() {
    this.node.off(cc.Node.EventType.TOUCH_START, this.touch_start, this);
    this.node.off(cc.Node.EventType.TOUCH_MOVE, this.touch_move, this);
    this.node.off(cc.Node.EventType.TOUCH_END, this.touch_end, this);
    this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.touch_end, this);
  },
  touch_start: function touch_start(event) {
    var pos = this.node.convertToNodeSpaceAR(event.getLocation());
    this.graphics.moveTo(pos.x, pos.y);
    this.line_point.push(cc.v2(pos.x, pos.y));
  },
  touch_move: function touch_move(event) {
    var pos = this.node.convertToNodeSpaceAR(event.getLocation());
    this.graphics.lineTo(pos.x, pos.y);
    this.line_point.push(cc.v2(pos.x, pos.y));
    this.graphics.stroke();
  },
  touch_end: function touch_end(event) {
    this.createRigibody();
    this.offTouch();
  },
  // /**
  //  * @param {number} dt
  //  */
  createRigibody: function createRigibody() {
    // console.log(this.line_point);
    this.rigibodyLogic = this.addComponent(cc.RigidBody);
    this.rigibodyLogic.gravityScale = 2;
    this.physicsLine = this.addComponent("MyPhysicsCollider");
    this.physicsLine.lineWidth = 10; //this.graphics.lineWidth;

    this.physicsLine.points = this.line_point;
    this.physicsLine.friction = 0.2;
    this.physicsLine.density = 1;
    this.physicsLine.apply();
  },
  checkIsCanDraw: function checkIsCanDraw(lastPoint, nowPoint) {
    return lastPoint.sub(nowPoint).mag() >= 20;
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHcmFwaGljc0NvbnRyby5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImdyYXBoaWNzIiwibGluZV9wb2ludCIsIlZlYzIiLCJvbkxvYWQiLCJub2RlIiwid2lkdGgiLCJ3aW5TaXplIiwiaGVpZ2h0IiwiZ2V0Q29tcG9uZW50IiwiR3JhcGhpY3MiLCJzdGFydCIsIm9uVG91Y2giLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsInRvdWNoX3N0YXJ0IiwiVE9VQ0hfTU9WRSIsInRvdWNoX21vdmUiLCJUT1VDSF9FTkQiLCJ0b3VjaF9lbmQiLCJUT1VDSF9DQU5DRUwiLCJvZmZUb3VjaCIsIm9mZiIsImV2ZW50IiwicG9zIiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJnZXRMb2NhdGlvbiIsIm1vdmVUbyIsIngiLCJ5IiwicHVzaCIsInYyIiwibGluZVRvIiwic3Ryb2tlIiwiY3JlYXRlUmlnaWJvZHkiLCJyaWdpYm9keUxvZ2ljIiwiYWRkQ29tcG9uZW50IiwiUmlnaWRCb2R5IiwiZ3Jhdml0eVNjYWxlIiwicGh5c2ljc0xpbmUiLCJsaW5lV2lkdGgiLCJwb2ludHMiLCJmcmljdGlvbiIsImRlbnNpdHkiLCJhcHBseSIsImNoZWNrSXNDYW5EcmF3IiwibGFzdFBvaW50Iiwibm93UG9pbnQiLCJzdWIiLCJtYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQUUsSUFERjtBQUVSQyxJQUFBQSxVQUFVLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxJQUFKO0FBRkosR0FIUDtBQVFMQyxFQUFBQSxNQVJLLG9CQVFJO0FBQ0wsU0FBS0MsSUFBTCxDQUFVQyxLQUFWLEdB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STtBQTBDTGQsRUFBQUEsU0FBUyxFQUFFLG1CQUFVSSxLQUFWLEVBQWlCO0FBQ3hCLFNBQUtXLGNBQUw7QUFDQSxTQUFLYixRQUFMO0FBQ0gsR0E3Q0k7QUE4Q0w7QUFDQTtBQUNBO0FBQ0FhLEVBQUFBLGNBQWMsRUFBRSwwQkFBWTtBQUN4QjtBQUNBLFNBQUtDLGFBQUwsR0FBcUIsS0FBS0MsWUFBTCxDQUFrQnpDLEVBQUUsQ0FBQzBDLFNBQXJCLENBQXJCO0FBQ0EsU0FBS0YsYUFBTCxDQUFtQkcsWUFBbkIsR0FBa0MsQ0FBbEM7QUFFQSxTQUFLQyxXQUFMLEdBQW1CLEtBQUtILFlBQUwsQ0FBa0IsbUJBQWxCLENBQW5CO0FBQ0EsU0FBS0csV0FBTCxDQUFpQkMsU0FBakIsR0FBNkIsRUFBN0IsQ0FOd0IsQ0FNUTs7QUFDaEMsU0FBS0QsV0FBTCxDQUFpQkUsTUFBakIsR0FBMEIsS0FBS3pDLFVBQS9CO0FBQ0EsU0FBS3VDLFdBQUwsQ0FBaUJHLFFBQWpCLEdBQTRCLEdBQTVCO0FBQ0EsU0FBS0gsV0FBTCxDQUFpQkksT0FBakIsR0FBMkIsQ0FBM0I7QUFDQSxTQUFLSixXQUFMLENBQWlCSyxLQUFqQjtBQUNILEdBNURJO0FBNkRMQyxFQUFBQSxjQUFjLEVBQUUsd0JBQVVDLFNBQVYsRUFBcUJDLFFBQXJCLEVBQStCO0FBQzNDLFdBQU9ELFNBQVMsQ0FBQ0UsR0FBVixDQUFjRCxRQUFkLEVBQXdCRSxHQUF4QixNQUFpQyxFQUF4QztBQUNIO0FBL0RJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZ3JhcGhpY3M6IG51bGwsXHJcbiAgICAgICAgbGluZV9wb2ludDogW2NjLlZlYzJdLFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLndpZHRoID0gY2Mud2luU2l6ZS53aWR0aDtcclxuICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gY2Mud2luU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5vblRvdWNoKCk7XHJcbiAgICB9LFxyXG4gICAgb25Ub3VjaCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoX3N0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaF9tb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoX2VuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaF9lbmQsIHRoaXMpO1xyXG4gICAgfSxcclxuICAgIG9mZlRvdWNoKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoX3N0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hfbW92ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hfZW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaF9lbmQsIHRoaXMpO1xyXG4gICAgfSxcclxuICAgIHRvdWNoX3N0YXJ0OiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubW92ZVRvKHBvcy54LCBwb3MueSk7XHJcbiAgICAgICAgdGhpcy5saW5lX3BvaW50LnB1c2goY2MudjIocG9zLngsIHBvcy55KSk7XHJcbiAgICB9LFxyXG4gICAgdG91Y2hfbW92ZTogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVUbyhwb3MueCwgcG9zLnkpO1xyXG4gICAgICAgIHRoaXMubGluZV9wb2ludC5wdXNoKGNjLnYyKHBvcy54LCBwb3MueSkpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3Muc3Ryb2tlKCk7XHJcbiAgICB9LFxyXG4gICAgdG91Y2hfZW5kOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZVJpZ2lib2R5KCk7XHJcbiAgICAgICAgdGhpcy5vZmZUb3VjaCgpO1xyXG4gICAgfSxcclxuICAgIC8vIC8qKlxyXG4gICAgLy8gICogQHBhcmFtIHtudW1iZXJ9IGR0XHJcbiAgICAvLyAgKi9cclxuICAgIGNyZWF0ZVJpZ2lib2R5OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5saW5lX3BvaW50KTtcclxuICAgICAgICB0aGlzLnJpZ2lib2R5TG9naWMgPSB0aGlzLmFkZENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIHRoaXMucmlnaWJvZHlMb2dpYy5ncmF2aXR5U2NhbGUgPSAyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucGh5c2ljc0xpbmUgPSB0aGlzLmFkZENvbXBvbmVudChcIk15UGh5c2ljc0NvbGxpZGVyXCIpO1xyXG4gICAgICAgIHRoaXMucGh5c2ljc0xpbmUubGluZVdpZHRoID0gMTA7Ly90aGlzLmdyYXBoaWNzLmxpbmVXaWR0aDtcclxuICAgICAgICB0aGlzLnBoeXNpY3NMaW5lLnBvaW50cyA9IHRoaXMubGluZV9wb2ludDtcclxuICAgICAgICB0aGlzLnBoeXNpY3NMaW5lLmZyaWN0aW9uID0gMC4yO1xyXG4gICAgICAgIHRoaXMucGh5c2ljc0xpbmUuZGVuc2l0eSA9IDE7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzTGluZS5hcHBseSgpO1xyXG4gICAgfSxcclxuICAgIGNoZWNrSXNDYW5EcmF3OiBmdW5jdGlvbiAobGFzdFBvaW50LCBub3dQb2ludCkge1xyXG4gICAgICAgIHJldHVybiBsYXN0UG9pbnQuc3ViKG5vd1BvaW50KS5tYWcoKSA+PSAyMDtcclxuICAgIH0sXHJcblxyXG59KTtcclxuIl19