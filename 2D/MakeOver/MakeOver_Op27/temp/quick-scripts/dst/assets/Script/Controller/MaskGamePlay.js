
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/MaskGamePlay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1e413qp47tDJaKLlYhUb7NL', 'MaskGamePlay');
// Script/Controller/MaskGamePlay.js

"use strict";

var Scratchable = require("Scratchable");

cc.Class({
  "extends": cc.Component,
  properties: {
    pointClear: cc.Node,
    touchArea: cc.Node
  },
  onLoad: function onLoad() {
    this.scratchables = this.getComponentsInChildren(Scratchable);
  },
  update: function update(dt) {
    this.isTouch = this.touchArea.getComponent("TouchAreaController").isTouch;

    if (this.pointClear.active && this.isTouch) {
      console.log("Check");
      var point = cc.v2(this.pointClear.x + cc.winSize.width / 2, this.pointClear.y + cc.winSize.height / 2);
      this.scratchables.forEach(function (scratchable) {
        if (scratchable.isScratchable && scratchable.isInBound(point)) {
          scratchable.scratchHole(point);
        }
      });
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxNYXNrR2FtZVBsYXkuanMiXSwibmFtZXMiOlsiU2NyYXRjaGFibGUiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwb2ludENsZWFyIiwiTm9kZSIsInRvdWNoQXJlYSIsIm9uTG9hZCIsInNjcmF0Y2hhYmxlcyIsImdldENvbXBvbmVudHNJbkNoaWxkcmVuIiwidXBkYXRlIiwiZHQiLCJpc1RvdWNoIiwiZ2V0Q29tcG9uZW50IiwiYWN0aXZlIiwiY29uc29sZSIsImxvZyIsInBvaW50IiwidjIiLCJ4Iiwid2luU2l6ZSIsIndpZHRoIiwieSIsImhlaWdodCIsImZvckVhY2giLCJzY3JhdGNoYWJsZSIsImlzU2NyYXRjaGFibGUiLCJpc0luQm91bmQiLCJzY3JhdGNoSG9sZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxXQUFXLEdBQUdDLE9BQU8sQ0FBQyxhQUFELENBQTNCOztBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUdQQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsVUFBVSxFQUFFSixFQUFFLENBQUNLLElBREw7QUFFVkMsSUFBQUEsU0FBUyxFQUFFTixFQUFFLENBQUNLO0FBRkosR0FITDtBQVFQRSxFQUFBQSxNQVJPLG9CQVFFO0FBQ1AsU0FBS0MsWUFBTCxHQUFvQixLQUFLQyx1QkFBTCxDQUE2QlgsV0FBN0IsQ0FBcEI7QUFDRCxHQVZNO0FBWVBZLEVBQUFBLE1BWk8sa0JBWUFDLEVBWkEsRUFZSTtBQUNULFNBQUtDLE9BQUwsR0FBZSxLQUFLTixTQUFMLENBQWVPLFlBQWYsQ0FBNEIscUJBQTVCLEVBQW1ERCxPQUFsRTs7QUFDQSxRQUFJLEtBQUtSLFVBQUwsQ0FBZ0JVLE1BQWhCLElBQTBCLEtBQUtGLE9BQW5DLEVBQTRDO0FBQzFDRyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0EsVUFBSUMsS0FBSyxHQUFHakIsRUFBRSxDQUFDa0IsRUFBSCxDQUNWLEtBQUtkLFVBQUwsQ0FBZ0JlLENBQWhCLEdBQW9CbkIsRUFBRSxDQUFDb0IsT0FBSCxDQUFXQyxLQUFYLEdBQW1CLENBRDdCLEVBRVYsS0FBS2pCLFVBQUwsQ0FBZ0JrQixDQUFoQixHQUFvQnRCLEVBQUUsQ0FBQ29CLE9BQUgsQ0FBV0csTUFBWCxHQUFvQixDQUY5QixDQUFaO0FBSUEsV0FBS2YsWUFBTCxDQUFrQmdCLE9BQWxCLENBQTBCLFVBQUNDLFdBQUQsRUFBaUI7QUFDekMsWUFBSUEsV0FBVyxDQUFDQyxhQUFaLElBQTZCRCxXQUFXLENBQUNFLFNBQVosQ0FBc0JWLEtBQXRCLENBQWpDLEVBQStEO0FBQzdEUSxVQUFBQSxXQUFXLENBQUNHLFdBQVosQ0FBd0JYLEtBQXhCO0FBQ0Q7QUFDRixPQUpEO0FBS0Q7QUFDRjtBQTFCTSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTY3JhdGNoYWJsZSA9IHJlcXVpcmUoXCJTY3JhdGNoYWJsZVwiKTtcblxuY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgcHJvcGVydGllczoge1xuICAgIHBvaW50Q2xlYXI6IGNjLk5vZGUsXG4gICAgdG91Y2hBcmVhOiBjYy5Ob2RlLFxuICB9LFxuXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLnNjcmF0Y2hhYmxlcyA9IHRoaXMuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oU2NyYXRjaGFibGUpO1xuICB9LFxuXG4gIHVwZGF0ZShkdCkge1xuICAgIHRoaXMuaXNUb3VjaCA9IHRoaXMudG91Y2hBcmVhLmdldENvbXBvbmVudChcIlRvdWNoQXJlYUNvbnRyb2xsZXJcIikuaXNUb3VjaDtcbiAgICBpZiAodGhpcy5wb2ludENsZWFyLmFjdGl2ZSAmJiB0aGlzLmlzVG91Y2gpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2hlY2tcIik7XG4gICAgICB2YXIgcG9pbnQgPSBjYy52MihcbiAgICAgICAgdGhpcy5wb2ludENsZWFyLnggKyBjYy53aW5TaXplLndpZHRoIC8gMixcbiAgICAgICAgdGhpcy5wb2ludENsZWFyLnkgKyBjYy53aW5TaXplLmhlaWdodCAvIDJcbiAgICAgICk7XG4gICAgICB0aGlzLnNjcmF0Y2hhYmxlcy5mb3JFYWNoKChzY3JhdGNoYWJsZSkgPT4ge1xuICAgICAgICBpZiAoc2NyYXRjaGFibGUuaXNTY3JhdGNoYWJsZSAmJiBzY3JhdGNoYWJsZS5pc0luQm91bmQocG9pbnQpKSB7XG4gICAgICAgICAgc2NyYXRjaGFibGUuc2NyYXRjaEhvbGUocG9pbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG59KTtcbiJdfQ==