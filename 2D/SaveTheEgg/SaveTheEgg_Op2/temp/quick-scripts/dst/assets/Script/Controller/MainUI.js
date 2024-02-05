
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/MainUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd9305oVF5hPCLfUSaAOK4yn', 'MainUI');
// Script/Controller/MainUI.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    graphics: cc.Prefab
  },
  onLoad: function onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_END, this.touch_end, this);
  },
  start: function start() {
    this.createGraphics();
  },
  touch_start: function touch_start(event) {},
  touch_move: function touch_move(event) {},
  touch_end: function touch_end(event) {
    this.createGraphics();
  },
  createGraphics: function createGraphics() {
    var graphics_node = cc.instantiate(this.graphics);
    graphics_node.x = 0;
    this.node.addChild(graphics_node);
  },
  update: function update(dt) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxNYWluVUkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJncmFwaGljcyIsIlByZWZhYiIsIm9uTG9hZCIsIm5vZGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9FTkQiLCJ0b3VjaF9lbmQiLCJzdGFydCIsImNyZWF0ZUdyYXBoaWNzIiwidG91Y2hfc3RhcnQiLCJldmVudCIsInRvdWNoX21vdmUiLCJncmFwaGljc19ub2RlIiwiaW5zdGFudGlhdGUiLCJ4IiwiYWRkQ2hpbGQiLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFJTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFFBQVEsRUFBRUosRUFBRSxDQUFDSztBQURMLEdBSlA7QUFTTEMsRUFBQUEsTUFUSyxvQkFTSTtBQUNMLFNBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhUixFQUFFLENBQUNTLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsU0FBL0IsRUFBMEMsS0FBS0MsU0FBL0MsRUFBMEQsSUFBMUQ7QUFDSCxHQVhJO0FBY0xDLEVBQUFBLEtBZEssbUJBY0c7QUFDSixTQUFLQyxjQUFMO0FBQ0gsR0FoQkk7QUFpQkxDLEVBQUFBLFdBQVcsRUFBRSxxQkFBVUMsS0FBVixFQUFpQixDQUM3QixDQWxCSTtBQW1CTEMsRUFBQUEsVUFBVSxFQUFFLG9CQUFVRCxLQUFWLEVBQWlCLENBQzVCLENBcEJJO0FBcUJMSixFQUFBQSxTQUFTLEVBQUUsbUJBQVVJLEtBQVYsRUFBaUI7QUFHeEIsU0FBS0YsY0FBTDtBQUNILEdBekJJO0FBMEJMQSxFQUFBQSxjQTFCSyw0QkEwQlk7QUFDYixRQUFJSSxhQUFhLEdBQUdsQixFQUFFLENBQUNtQixXQUFILENBQWUsS0FBS2YsUUFBcEIsQ0FBcEI7QUFDQWMsSUFBQUEsYUFBYSxDQUFDRSxDQUFkLEdBQWtCLENBQWxCO0FBQ0EsU0FBS2IsSUFBTCxDQUFVYyxRQUFWLENBQW1CSCxhQUFuQjtBQUNILEdBOUJJO0FBK0JMSSxFQUFBQSxNQS9CSyxrQkErQkVDLEVBL0JGLEVBK0JNLENBQUc7QUEvQlQsQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGdyYXBoaWNzOiBjYy5QcmVmYWIsXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaF9lbmQsIHRoaXMpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVHcmFwaGljcygpO1xyXG4gICAgfSxcclxuICAgIHRvdWNoX3N0YXJ0OiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIH0sXHJcbiAgICB0b3VjaF9tb3ZlOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIH0sXHJcbiAgICB0b3VjaF9lbmQ6IGZ1bmN0aW9uIChldmVudCkge1xyXG5cclxuICAgICAgIFxyXG4gICAgICAgIHRoaXMuY3JlYXRlR3JhcGhpY3MoKTtcclxuICAgIH0sXHJcbiAgICBjcmVhdGVHcmFwaGljcygpIHtcclxuICAgICAgICB2YXIgZ3JhcGhpY3Nfbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ3JhcGhpY3MpO1xyXG4gICAgICAgIGdyYXBoaWNzX25vZGUueCA9IDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGdyYXBoaWNzX25vZGUpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZShkdCkgeyB9LFxyXG59KTtcclxuIl19