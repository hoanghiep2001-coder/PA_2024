
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Plugin/MyPhysicsCollider.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '16fa2jbwqRENLjduRsp+GPv', 'MyPhysicsCollider');
// Script/Plugin/MyPhysicsCollider.js

"use strict";

/**
 *zongyuan.yang 重新封装PhysicsCollider类
 */
var MyPhysicsCollider = cc.Class({
  "extends": cc.PhysicsCollider,
  editor: {
    menu: CC_EDITOR && 'i18n:MAIN_MENU.component.physics/Collider/Polygon',
    requireComponent: cc.RigidBody
  },
  properties: {
    lineWidth: 10,
    points: [cc.Vec2]
  },
  _createShape: function _createShape(scale) {
    var shapes = [];
    var polys = this.points;
    var offset = this.offset; // console.log(polys);

    var polyIdx = 0;

    for (var i = 0; i < polys.length - 1; i++) {
      var posBegin = polys[i];
      var posEnd = polys[i + 1];
      var linelen = posBegin.sub(posEnd).mag();
      var angle = Math.atan2(posEnd.y - posBegin.y, posEnd.x - posBegin.x) - Math.PI / 2;
      var midPos = posBegin.add(posEnd).mul(0.5);
      var shape = new b2.PolygonShape();

      if (shape) {
        shape.SetAsBox(this.lineWidth / 2 / 32, linelen / 2 / 32, new b2.Vec2(midPos.x / 32, midPos.y / 32), angle);
        shapes.push(shape);
      }
    }

    return shapes;
  }
});
module.exports = MyPhysicsCollider;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXE15UGh5c2ljc0NvbGxpZGVyLmpzIl0sIm5hbWVzIjpbIk15UGh5c2ljc0NvbGxpZGVyIiwiY2MiLCJDbGFzcyIsIlBoeXNpY3NDb2xsaWRlciIsImVkaXRvciIsIm1lbnUiLCJDQ19FRElUT1IiLCJyZXF1aXJlQ29tcG9uZW50IiwiUmlnaWRCb2R5IiwicHJvcGVydGllcyIsImxpbmVXaWR0aCIsInBvaW50cyIsIlZlYzIiLCJfY3JlYXRlU2hhcGUiLCJzY2FsZSIsInNoYXBlcyIsInBvbHlzIiwib2Zmc2V0IiwicG9seUlkeCIsImkiLCJsZW5ndGgiLCJwb3NCZWdpbiIsInBvc0VuZCIsImxpbmVsZW4iLCJzdWIiLCJtYWciLCJhbmdsZSIsIk1hdGgiLCJhdGFuMiIsInkiLCJ4IiwiUEkiLCJtaWRQb3MiLCJhZGQiLCJtdWwiLCJzaGFwZSIsImIyIiwiUG9seWdvblNoYXBlIiwiU2V0QXNCb3giLCJwdXNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxpQkFBaUIsR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDN0IsYUFBU0QsRUFBRSxDQUFDRSxlQURpQjtBQUU3QkMsRUFBQUEsTUFBTSxFQUFFO0FBQ0pDLElBQUFBLElBQUksRUFBRUMsU0FBUyxJQUFJLG1EQURmO0FBRUpDLElBQUFBLGdCQUFnQixFQUFFTixFQUFFLENBQUNPO0FBRmpCLEdBRnFCO0FBTTdCQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsU0FBUyxFQUFFLEVBREg7QUFFUkMsSUFBQUEsTUFBTSxFQUFFLENBQUNWLEVBQUUsQ0FBQ1csSUFBSjtBQUZBLEdBTmlCO0FBVTdCQyxFQUFBQSxZQUFZLEVBQUUsc0JBQVVDLEtBQVYsRUFBaUI7QUFDM0IsUUFBSUMsTUFBTSxHQUFHLEVBQWI7QUFFQSxRQUFJQyxLQUFLLEdBQUcsS0FBS0wsTUFBakI7QUFDQSxRQUFJTSxNQUFNLEdBQUcsS0FBS0EsTUFBbEIsQ0FKMkIsQ0FLM0I7O0FBQ0EsUUFBSUMsT0FBTyxHQUFHLENBQWQ7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxLQUFLLENBQUNJLE1BQU4sR0FBZSxDQUFuQyxFQUFzQ0QsQ0FBQyxFQUF2QyxFQUEyQztBQUN2QyxVQUFJRSxRQUFRLEdBQUdMLEtBQUssQ0FBQ0csQ0FBRCxDQUFwQjtBQUNBLFVBQUlHLE1BQU0sR0FBR04sS0FBSyxDQUFDRyxDQUFDLEdBQUcsQ0FBTCxDQUFsQjtBQUNBLFVBQUlJLE9BQU8sR0FBR0YsUUFBUSxDQUFDRyxHQUFULENBQWFGLE1BQWIsRUFBcUJHLEdBQXJCLEVBQWQ7QUFFQSxVQUFJQyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTixNQUFNLENBQUNPLENBQVAsR0FBV1IsUUFBUSxDQUFDUSxDQUEvQixFQUFrQ1AsTUFBTSxDQUFDUSxDQUFQLEdBQVdULFFBQVEsQ0FBQ1MsQ0FBdEQsSUFBMkRILElBQUksQ0FBQ0ksRUFBTCxHQUFVLENBQWpGO0FBRUEsVUFBSUMsTUFBTSxHQUFHWCxRQUFRLENBQUNZLEdBQVQsQ0FBYVgsTUFBYixFQUFxQlksR0FBckIsQ0FBeUIsR0FBekIsQ0FBYjtBQUVBLFVBQUlDLEtBQUssR0FBRyxJQUFJQyxFQUFFLENBQUNDLFlBQVAsRUFBWjs7QUFFQSxVQUFJRixLQUFKLEVBQVc7QUFDUEEsUUFBQUEsS0FBSyxDQUFDRyxRQUFOLENBQWUsS0FBSzVCLFNBQUwsR0FBaUIsQ0FBakIsR0FBcUIsRUFBcEMsRUFBd0NhLE9BQU8sR0FBRyxDQUFWLEdBQWMsRUFBdEQsRUFBMEQsSUFBSWEsRUFBRSxDQUFDeEIsSUFBUCxDQUFZb0IsTUFBTSxDQUFDRixDQUFQLEdBQVcsRUFBdkIsRUFBMkJFLE1BQU0sQ0FBQ0gsQ0FBUCxHQUFXLEVBQXRDLENBQTFELEVBQXFHSCxLQUFyRztBQUVBWCxRQUFBQSxNQUFNLENBQUN3QixJQUFQLENBQVlKLEtBQVo7QUFDSDtBQUNKOztBQUVELFdBQU9wQixNQUFQO0FBQ0g7QUFwQzRCLENBQVQsQ0FBeEI7QUF1Q0F5QixNQUFNLENBQUNDLE9BQVAsR0FBaUJ6QyxpQkFBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKnpvbmd5dWFuLnlhbmcg6YeN5paw5bCB6KOFUGh5c2ljc0NvbGxpZGVy57G7XHJcbiAqL1xyXG52YXIgTXlQaHlzaWNzQ29sbGlkZXIgPSBjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5QaHlzaWNzQ29sbGlkZXIsXHJcbiAgICBlZGl0b3I6IHtcclxuICAgICAgICBtZW51OiBDQ19FRElUT1IgJiYgJ2kxOG46TUFJTl9NRU5VLmNvbXBvbmVudC5waHlzaWNzL0NvbGxpZGVyL1BvbHlnb24nLFxyXG4gICAgICAgIHJlcXVpcmVDb21wb25lbnQ6IGNjLlJpZ2lkQm9keVxyXG4gICAgfSxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsaW5lV2lkdGg6IDEwLFxyXG4gICAgICAgIHBvaW50czogW2NjLlZlYzJdXHJcbiAgICB9LFxyXG4gICAgX2NyZWF0ZVNoYXBlOiBmdW5jdGlvbiAoc2NhbGUpIHtcclxuICAgICAgICB2YXIgc2hhcGVzID0gW107XHJcblxyXG4gICAgICAgIHZhciBwb2x5cyA9IHRoaXMucG9pbnRzO1xyXG4gICAgICAgIHZhciBvZmZzZXQgPSB0aGlzLm9mZnNldDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwb2x5cyk7XHJcbiAgICAgICAgdmFyIHBvbHlJZHggPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9seXMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3NCZWdpbiA9IHBvbHlzW2ldO1xyXG4gICAgICAgICAgICB2YXIgcG9zRW5kID0gcG9seXNbaSArIDFdO1xyXG4gICAgICAgICAgICB2YXIgbGluZWxlbiA9IHBvc0JlZ2luLnN1Yihwb3NFbmQpLm1hZygpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGFuZ2xlID0gTWF0aC5hdGFuMihwb3NFbmQueSAtIHBvc0JlZ2luLnksIHBvc0VuZC54IC0gcG9zQmVnaW4ueCkgLSBNYXRoLlBJIC8gMjtcclxuXHJcbiAgICAgICAgICAgIHZhciBtaWRQb3MgPSBwb3NCZWdpbi5hZGQocG9zRW5kKS5tdWwoMC41KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzaGFwZSA9IG5ldyBiMi5Qb2x5Z29uU2hhcGUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzaGFwZSkge1xyXG4gICAgICAgICAgICAgICAgc2hhcGUuU2V0QXNCb3godGhpcy5saW5lV2lkdGggLyAyIC8gMzIsIGxpbmVsZW4gLyAyIC8gMzIsIG5ldyBiMi5WZWMyKG1pZFBvcy54IC8gMzIsIG1pZFBvcy55IC8gMzIpLCBhbmdsZSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIHNoYXBlcy5wdXNoKHNoYXBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHNoYXBlcztcclxuICAgIH1cclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE15UGh5c2ljc0NvbGxpZGVyOyJdfQ==