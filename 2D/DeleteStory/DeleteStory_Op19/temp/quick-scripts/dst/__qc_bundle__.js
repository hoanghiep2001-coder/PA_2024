
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Controller/GameController');
require('./assets/Script/Controller/GamePlay');
require('./assets/Script/Controller/MaskGamePlay');
require('./assets/Script/Controller/Scratchable');
require('./assets/Script/Controller/TouchAreaController');
require('./assets/Script/Data/constants');
require('./assets/Script/Plugin/AudioManager');
require('./assets/Script/Plugin/Responsive');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/Scratchable.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '836a9YKgBxFXYKE5BcLsYH1', 'Scratchable');
// Script/Controller/Scratchable.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    isDone: 0,
    isWin: cc.Boolean,
    eraserRadius: {
      type: cc.Int,
      "default": 60
    }
  },
  start: function start() {
    this.percentToWin = 1;
    var mask = this.getComponentInChildren(cc.Mask);
    this.graphics = mask._graphics;
    this.graphics.fillColor = cc.color(255, 255, 255, 0);
    this.reset();
  },
  calculateProgress: function calculateProgress() {
    if (!this.isScratchable) {
      return;
    }

    var hitItemCount = 0;
    this.polygonPointsList.forEach(function (item) {
      if (!item.isHit) return;
      hitItemCount += 1;
    });
    this.progress = hitItemCount / this.polygonPointsList.length;

    if (this.progress >= this.percentToWin) {
      this.isWin = true;
      this.isDone = 1;
    }

    if (this.isWin) {
      this.fillInstantly();
      this.completed = true;
      this.isScratchable = false;
      this.node.dispatchEvent(new cc.Event.EventCustom("completed", this));
    }
  },
  reset: function reset() {
    this.callbackFlag = true;
    this.graphics.clear();
    this.tempDrawPoints = [];
    this.polygonPointsList = [];
    this.progress = 0;
    this.completed = false;
    this.isScratchable = true;
    this.initPolygonList();
  },
  initPolygonList: function initPolygonList() {
    for (var x = 0; x < this.node.width; x += this.eraserRadius) {
      for (var y = 0; y < this.node.height; y += this.eraserRadius) {
        this.polygonPointsList.push({
          rect: cc.rect(x - this.node.width / 2, y - this.node.height / 2, this.eraserRadius, this.eraserRadius),
          isHit: false
        });
      }
    }
  },
  scratchHole: function scratchHole(pos) {
    pos = this.node.convertToNodeSpaceAR(pos);
    var stencil = this.graphics;
    var len = this.tempDrawPoints.length;
    this.tempDrawPoints.push(pos);
    this.calculateProgress();

    if (len <= 1) {
      stencil.circle(pos.x, pos.y, this.eraserRadius / 2);
      stencil.fill();
      this.polygonPointsList.forEach(function (item) {
        if (item.isHit) return;
        var xFlag = pos.x > item.rect.x && pos.x < item.rect.x + item.rect.width;
        var yFlag = pos.y > item.rect.y && pos.y < item.rect.y + item.rect.height;
        if (xFlag && yFlag) item.isHit = true;
      });
    } else {
      var prevPos = this.tempDrawPoints[len - 2];
      var curPos = this.tempDrawPoints[len - 1];
      stencil.moveTo(prevPos.x, prevPos.y);
      stencil.lineTo(curPos.x, curPos.y);
      stencil.lineWidth = this.eraserRadius;
      stencil.lineCap = cc.Graphics.LineCap.ROUND;
      stencil.lineJoin = cc.Graphics.LineJoin.ROUND;
      stencil.strokeColor = cc.color(255, 255, 255, 255);
      stencil.stroke();
      this.polygonPointsList.forEach(function (item) {
        item.isHit = item.isHit || cc.Intersection.lineRect(prevPos, curPos, item.rect);
      });
    }
  },
  resetProgress: function resetProgress() {
    this.clearInstantly();
    this.polygonPointsList = [];
    this.tempDrawPoints = [];
    this.progress = 0;
    this.initPolygonList();
  },
  isInBound: function isInBound(point) {
    return true;
  },
  clearInstantly: function clearInstantly() {
    this.graphics.clear();
  },
  fillInstantly: function fillInstantly() {
    this.graphics.moveTo(0, 0);
    this.graphics.rect(0, 0, this.node.width, this.node.height);
    this.graphics.fill();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxTY3JhdGNoYWJsZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImlzRG9uZSIsImlzV2luIiwiQm9vbGVhbiIsImVyYXNlclJhZGl1cyIsInR5cGUiLCJJbnQiLCJzdGFydCIsInBlcmNlbnRUb1dpbiIsIm1hc2siLCJnZXRDb21wb25lbnRJbkNoaWxkcmVuIiwiTWFzayIsImdyYXBoaWNzIiwiX2dyYXBoaWNzIiwiZmlsbENvbG9yIiwiY29sb3IiLCJyZXNldCIsImNhbGN1bGF0ZVByb2dyZXNzIiwiaXNTY3JhdGNoYWJsZSIsImhpdEl0ZW1Db3VudCIsInBvbHlnb25Qb2ludHNMaXN0IiwiZm9yRWFjaCIsIml0ZW0iLCJpc0hpdCIsInByb2dyZXNzIiwibGVuZ3RoIiwiZmlsbEluc3RhbnRseSIsImNvbXBsZXRlZCIsIm5vZGUiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJFdmVudEN1c3RvbSIsImNhbGxiYWNrRmxhZyIsImNsZWFyIiwidGVtcERyYXdQb2ludHMiLCJpbml0UG9seWdvbkxpc3QiLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwicHVzaCIsInJlY3QiLCJzY3JhdGNoSG9sZSIsInBvcyIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwic3RlbmNpbCIsImxlbiIsImNpcmNsZSIsImZpbGwiLCJ4RmxhZyIsInlGbGFnIiwicHJldlBvcyIsImN1clBvcyIsIm1vdmVUbyIsImxpbmVUbyIsImxpbmVXaWR0aCIsImxpbmVDYXAiLCJHcmFwaGljcyIsIkxpbmVDYXAiLCJST1VORCIsImxpbmVKb2luIiwiTGluZUpvaW4iLCJzdHJva2VDb2xvciIsInN0cm9rZSIsIkludGVyc2VjdGlvbiIsImxpbmVSZWN0IiwicmVzZXRQcm9ncmVzcyIsImNsZWFySW5zdGFudGx5IiwiaXNJbkJvdW5kIiwicG9pbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7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QyxNQUFsQyxFQUEwQzlCLElBQUksQ0FBQ21CLElBQS9DLENBRGhCO0FBRUQsT0FIRDtBQUlEO0FBQ0YsR0E3R007QUErR1B5QixFQUFBQSxhQUFhLEVBQUUseUJBQVk7QUFDekIsU0FBS0MsY0FBTDtBQUNBLFNBQUsvQyxpQkFBTCxHQUF5QixFQUF6QjtBQUNBLFNBQUtjLGNBQUwsR0FBc0IsRUFBdEI7QUFDQSxTQUFLVixRQUFMLEdBQWdCLENBQWhCO0FBQ0EsU0FBS1csZUFBTDtBQUNELEdBckhNO0FBdUhQaUMsRUFBQUEsU0FBUyxFQUFFLG1CQUFVQyxLQUFWLEVBQWlCO0FBQzFCLFdBQU8sSUFBUDtBQUNELEdBekhNO0FBMkhQRixFQUFBQSxjQUFjLEVBQUUsMEJBQVk7QUFDMUIsU0FBS3ZELFFBQUwsQ0FBY3FCLEtBQWQ7QUFDRCxHQTdITTtBQStIUFAsRUFBQUEsYUFBYSxFQUFFLHlCQUFZO0FBQ3pCLFNBQUtkLFFBQUwsQ0FBY3lDLE1BQWQsQ0FBcUIsQ0FBckIsRUFBd0IsQ0FBeEI7QUFDQSxTQUFLekMsUUFBTCxDQUFjNkIsSUFBZCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixLQUFLYixJQUFMLENBQVVTLEtBQW5DLEVBQTBDLEtBQUtULElBQUwsQ0FBVVcsTUFBcEQ7QUFDQSxTQUFLM0IsUUFBTCxDQUFjb0MsSUFBZDtBQUNEO0FBbklNLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgcHJvcGVydGllczoge1xuICAgIGlzRG9uZTogMCxcbiAgICBpc1dpbjogY2MuQm9vbGVhbixcbiAgICBlcmFzZXJSYWRpdXM6IHtcbiAgICAgIHR5cGU6IGNjLkludCxcbiAgICAgIGRlZmF1bHQ6IDYwLFxuICAgIH0sXG4gIH0sXG5cbiAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnBlcmNlbnRUb1dpbiA9IDE7XG4gICAgbGV0IG1hc2sgPSB0aGlzLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTWFzayk7XG4gICAgdGhpcy5ncmFwaGljcyA9IG1hc2suX2dyYXBoaWNzO1xuICAgIHRoaXMuZ3JhcGhpY3MuZmlsbENvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMCk7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9LFxuXG4gIGNhbGN1bGF0ZVByb2dyZXNzKCkge1xuXG4gICAgaWYgKCF0aGlzLmlzU2NyYXRjaGFibGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGhpdEl0ZW1Db3VudCA9IDA7XG4gICAgdGhpcy5wb2x5Z29uUG9pbnRzTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoIWl0ZW0uaXNIaXQpIHJldHVybjtcbiAgICAgIGhpdEl0ZW1Db3VudCArPSAxO1xuICAgIH0pO1xuICAgIHRoaXMucHJvZ3Jlc3MgPSBoaXRJdGVtQ291bnQgLyB0aGlzLnBvbHlnb25Qb2ludHNMaXN0Lmxlbmd0aDtcblxuICAgIGlmICh0aGlzLnByb2dyZXNzID49IHRoaXMucGVyY2VudFRvV2luKSB7XG4gICAgICB0aGlzLmlzV2luID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXNEb25lID0gMTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1dpbikge1xuICAgICAgdGhpcy5maWxsSW5zdGFudGx5KCk7XG4gICAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICB0aGlzLmlzU2NyYXRjaGFibGUgPSBmYWxzZTtcbiAgICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbShcImNvbXBsZXRlZFwiLCB0aGlzKSk7XG4gICAgfVxuICB9LFxuXG4gIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jYWxsYmFja0ZsYWcgPSB0cnVlO1xuICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICB0aGlzLnRlbXBEcmF3UG9pbnRzID0gW107XG4gICAgdGhpcy5wb2x5Z29uUG9pbnRzTGlzdCA9IFtdO1xuICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgdGhpcy5pc1NjcmF0Y2hhYmxlID0gdHJ1ZTtcbiAgICB0aGlzLmluaXRQb2x5Z29uTGlzdCgpO1xuICB9LFxuXG4gIGluaXRQb2x5Z29uTGlzdDogZnVuY3Rpb24gKCkge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5ub2RlLndpZHRoOyB4ICs9IHRoaXMuZXJhc2VyUmFkaXVzKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMubm9kZS5oZWlnaHQ7IHkgKz0gdGhpcy5lcmFzZXJSYWRpdXMpIHtcbiAgICAgICAgdGhpcy5wb2x5Z29uUG9pbnRzTGlzdC5wdXNoKHtcbiAgICAgICAgICByZWN0OiBjYy5yZWN0KFxuICAgICAgICAgICAgeCAtIHRoaXMubm9kZS53aWR0aCAvIDIsXG4gICAgICAgICAgICB5IC0gdGhpcy5ub2RlLmhlaWdodCAvIDIsXG4gICAgICAgICAgICB0aGlzLmVyYXNlclJhZGl1cyxcbiAgICAgICAgICAgIHRoaXMuZXJhc2VyUmFkaXVzXG4gICAgICAgICAgKSxcbiAgICAgICAgICBpc0hpdDogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBzY3JhdGNoSG9sZTogZnVuY3Rpb24gKHBvcykge1xuICAgIHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xuICAgIGxldCBzdGVuY2lsID0gdGhpcy5ncmFwaGljcztcbiAgICBjb25zdCBsZW4gPSB0aGlzLnRlbXBEcmF3UG9pbnRzLmxlbmd0aDtcbiAgICB0aGlzLnRlbXBEcmF3UG9pbnRzLnB1c2gocG9zKTtcblxuICAgIHRoaXMuY2FsY3VsYXRlUHJvZ3Jlc3MoKTtcblxuICAgIGlmIChsZW4gPD0gMSkge1xuICAgICAgc3RlbmNpbC5jaXJjbGUocG9zLngsIHBvcy55LCB0aGlzLmVyYXNlclJhZGl1cyAvIDIpO1xuICAgICAgc3RlbmNpbC5maWxsKCk7XG5cbiAgICAgIHRoaXMucG9seWdvblBvaW50c0xpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5pc0hpdCkgcmV0dXJuO1xuICAgICAgICBjb25zdCB4RmxhZyA9XG4gICAgICAgICAgcG9zLnggPiBpdGVtLnJlY3QueCAmJiBwb3MueCA8IGl0ZW0ucmVjdC54ICsgaXRlbS5yZWN0LndpZHRoO1xuICAgICAgICBjb25zdCB5RmxhZyA9XG4gICAgICAgICAgcG9zLnkgPiBpdGVtLnJlY3QueSAmJiBwb3MueSA8IGl0ZW0ucmVjdC55ICsgaXRlbS5yZWN0LmhlaWdodDtcbiAgICAgICAgaWYgKHhGbGFnICYmIHlGbGFnKSBpdGVtLmlzSGl0ID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcHJldlBvcyA9IHRoaXMudGVtcERyYXdQb2ludHNbbGVuIC0gMl07XG4gICAgICBsZXQgY3VyUG9zID0gdGhpcy50ZW1wRHJhd1BvaW50c1tsZW4gLSAxXTtcblxuICAgICAgc3RlbmNpbC5tb3ZlVG8ocHJldlBvcy54LCBwcmV2UG9zLnkpO1xuICAgICAgc3RlbmNpbC5saW5lVG8oY3VyUG9zLngsIGN1clBvcy55KTtcbiAgICAgIHN0ZW5jaWwubGluZVdpZHRoID0gdGhpcy5lcmFzZXJSYWRpdXM7XG4gICAgICBzdGVuY2lsLmxpbmVDYXAgPSBjYy5HcmFwaGljcy5MaW5lQ2FwLlJPVU5EO1xuICAgICAgc3RlbmNpbC5saW5lSm9pbiA9IGNjLkdyYXBoaWNzLkxpbmVKb2luLlJPVU5EO1xuICAgICAgc3RlbmNpbC5zdHJva2VDb2xvciA9IGNjLmNvbG9yKDI1NSwgMjU1LCAyNTUsIDI1NSk7XG4gICAgICBzdGVuY2lsLnN0cm9rZSgpO1xuXG4gICAgICB0aGlzLnBvbHlnb25Qb2ludHNMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5pc0hpdCA9XG4gICAgICAgICAgaXRlbS5pc0hpdCB8fCBjYy5JbnRlcnNlY3Rpb24ubGluZVJlY3QocHJldlBvcywgY3VyUG9zLCBpdGVtLnJlY3QpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIHJlc2V0UHJvZ3Jlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNsZWFySW5zdGFudGx5KCk7XG4gICAgdGhpcy5wb2x5Z29uUG9pbnRzTGlzdCA9IFtdO1xuICAgIHRoaXMudGVtcERyYXdQb2ludHMgPSBbXTtcbiAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICB0aGlzLmluaXRQb2x5Z29uTGlzdCgpO1xuICB9LFxuXG4gIGlzSW5Cb3VuZDogZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG5cbiAgY2xlYXJJbnN0YW50bHk6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmdyYXBoaWNzLmNsZWFyKCk7XG4gIH0sXG5cbiAgZmlsbEluc3RhbnRseTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZ3JhcGhpY3MubW92ZVRvKDAsIDApO1xuICAgIHRoaXMuZ3JhcGhpY3MucmVjdCgwLCAwLCB0aGlzLm5vZGUud2lkdGgsIHRoaXMubm9kZS5oZWlnaHQpO1xuICAgIHRoaXMuZ3JhcGhpY3MuZmlsbCgpO1xuICB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/constants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd0b68xTANVBsaIBjAI8Yj1K', 'constants');
// Script/Data/constants.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Event;
(function (Event) {
    Event["touchStart"] = "touchstart";
    Event["touchMove"] = "touchmove";
    Event["touchEnd"] = "touchend";
    Event["touchCancel"] = "touchcancel";
})(Event || (Event = {}));
var IronSource = {
    // ironsource 
    SoundState: true,
    State: 1,
    isEndGame: false,
    isPlayBgSound: false,
};
var Responsive = {
    calculated: 0,
    currentDevice: "",
};
var SoundTrack;
(function (SoundTrack) {
    SoundTrack["bgSound"] = "bgSound";
    SoundTrack["drawSound"] = "drawSound";
    SoundTrack["successSound"] = "successSound";
    SoundTrack["moveSound"] = "moveSound";
    SoundTrack["fireworksSound"] = "fireworksSound";
    SoundTrack["clickSound"] = "clickSound";
    SoundTrack["SheepSound1"] = "SheepSound1";
    SoundTrack["SheepSound2"] = "SheepSound2";
    SoundTrack["LoseSound"] = "LoseSound";
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    Constants.currentLv = 1;
    Constants.isClickGameStart = false;
    Constants.isRotate = false;
    Constants.isCanTouch = false;
    Constants.isDoneEraser = false;
    Constants.isRestart = false;
    Constants.age = 54;
    Constants.ageIncrease = 58;
    Constants.life = 3;
    Constants.step = 1;
    Constants.touchPoints = [];
    // event
    Constants.Event = Event;
    // SoundTrack
    Constants.SoundTrack = SoundTrack;
    // ironSource
    Constants.ironSource = IronSource;
    // Responsive
    Constants.Responsive = Responsive;
    return Constants;
}());
exports.Constants = Constants;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxLQUtKO0FBTEQsV0FBSyxLQUFLO0lBQ04sa0NBQXlCLENBQUE7SUFDekIsZ0NBQXVCLENBQUE7SUFDdkIsOEJBQXFCLENBQUE7SUFDckIsb0NBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQUxJLEtBQUssS0FBTCxLQUFLLFFBS1Q7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLGNBQWM7SUFDZCxVQUFVLEVBQUUsSUFBSTtJQUNoQixLQUFLLEVBQUUsQ0FBQztJQUNSLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLGFBQWEsRUFBRSxLQUFLO0NBQ3ZCLENBQUE7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLFVBQVUsRUFBRSxDQUFDO0lBQ2IsYUFBYSxFQUFFLEVBQUU7Q0FDcEIsQ0FBQTtBQUdELElBQUssVUFVSjtBQVZELFdBQUssVUFBVTtJQUNYLGlDQUFtQixDQUFBO0lBQ25CLHFDQUF1QixDQUFBO0lBQ3ZCLDJDQUE2QixDQUFBO0lBQzdCLHFDQUF1QixDQUFBO0lBQ3ZCLCtDQUFpQyxDQUFBO0lBQ2pDLHVDQUF5QixDQUFBO0lBQ3pCLHlDQUEyQixDQUFBO0lBQzNCLHlDQUEyQixDQUFBO0lBQzNCLHFDQUF1QixDQUFBO0FBQzNCLENBQUMsRUFWSSxVQUFVLEtBQVYsVUFBVSxRQVVkO0FBR0Q7SUFBQTtJQWdDQSxDQUFDO0lBOUJHLFlBQVk7SUFDTCxtQkFBUyxHQUFXLENBQUMsQ0FBQztJQUN0QiwwQkFBZ0IsR0FBWSxLQUFLLENBQUM7SUFDbEMsa0JBQVEsR0FBWSxLQUFLLENBQUM7SUFDMUIsb0JBQVUsR0FBWSxLQUFLLENBQUM7SUFDNUIsc0JBQVksR0FBWSxLQUFLLENBQUM7SUFDOUIsbUJBQVMsR0FBWSxLQUFLLENBQUM7SUFFM0IsYUFBRyxHQUFXLEVBQUUsQ0FBQztJQUNqQixxQkFBVyxHQUFXLEVBQUUsQ0FBQztJQUN6QixjQUFJLEdBQVcsQ0FBQyxDQUFDO0lBQ2pCLGNBQUksR0FBVyxDQUFDLENBQUM7SUFDakIscUJBQVcsR0FBYyxFQUFFLENBQUM7SUFHbkMsUUFBUTtJQUNELGVBQUssR0FBaUIsS0FBSyxDQUFDO0lBR25DLGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFHbEQsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUdsRCxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBRXRELGdCQUFDO0NBaENELEFBZ0NDLElBQUE7QUFoQ1ksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmVudW0gRXZlbnQge1xyXG4gICAgdG91Y2hTdGFydCA9IFwidG91Y2hzdGFydFwiLFxyXG4gICAgdG91Y2hNb3ZlID0gXCJ0b3VjaG1vdmVcIixcclxuICAgIHRvdWNoRW5kID0gXCJ0b3VjaGVuZFwiLFxyXG4gICAgdG91Y2hDYW5jZWwgPSBcInRvdWNoY2FuY2VsXCJcclxufVxyXG5cclxuXHJcbmNvbnN0IElyb25Tb3VyY2UgPSB7XHJcbiAgICAvLyBpcm9uc291cmNlIFxyXG4gICAgU291bmRTdGF0ZTogdHJ1ZSxcclxuICAgIFN0YXRlOiAxLFxyXG4gICAgaXNFbmRHYW1lOiBmYWxzZSxcclxuICAgIGlzUGxheUJnU291bmQ6IGZhbHNlLFxyXG59XHJcblxyXG5cclxuY29uc3QgUmVzcG9uc2l2ZSA9IHtcclxuICAgIGNhbGN1bGF0ZWQ6IDAsXHJcbiAgICBjdXJyZW50RGV2aWNlOiBcIlwiLFxyXG59XHJcblxyXG5cclxuZW51bSBTb3VuZFRyYWNrIHtcclxuICAgIGJnU291bmQgPSBcImJnU291bmRcIixcclxuICAgIGRyYXdTb3VuZCA9IFwiZHJhd1NvdW5kXCIsXHJcbiAgICBzdWNjZXNzU291bmQgPSBcInN1Y2Nlc3NTb3VuZFwiLFxyXG4gICAgbW92ZVNvdW5kID0gXCJtb3ZlU291bmRcIixcclxuICAgIGZpcmV3b3Jrc1NvdW5kID0gXCJmaXJld29ya3NTb3VuZFwiLFxyXG4gICAgY2xpY2tTb3VuZCA9IFwiY2xpY2tTb3VuZFwiLFxyXG4gICAgU2hlZXBTb3VuZDEgPSBcIlNoZWVwU291bmQxXCIsXHJcbiAgICBTaGVlcFNvdW5kMiA9IFwiU2hlZXBTb3VuZDJcIixcclxuICAgIExvc2VTb3VuZCA9IFwiTG9zZVNvdW5kXCJcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25zdGFudHMge1xyXG5cclxuICAgIC8vIHN0YXRlICAgIFxyXG4gICAgc3RhdGljIGN1cnJlbnRMdjogbnVtYmVyID0gMTtcclxuICAgIHN0YXRpYyBpc0NsaWNrR2FtZVN0YXJ0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNSb3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0NhblRvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNEb25lRXJhc2VyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNSZXN0YXJ0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBcclxuICAgIHN0YXRpYyBhZ2U6IG51bWJlciA9IDU0O1xyXG4gICAgc3RhdGljIGFnZUluY3JlYXNlOiBudW1iZXIgPSA1ODtcclxuICAgIHN0YXRpYyBsaWZlOiBudW1iZXIgPSAzO1xyXG4gICAgc3RhdGljIHN0ZXA6IG51bWJlciA9IDE7XHJcbiAgICBzdGF0aWMgdG91Y2hQb2ludHM6IGNjLlZlYzJbXSA9IFtdO1xyXG5cclxuXHJcbiAgICAvLyBldmVudFxyXG4gICAgc3RhdGljIEV2ZW50OiB0eXBlb2YgRXZlbnQgPSBFdmVudDtcclxuXHJcblxyXG4gICAgLy8gU291bmRUcmFja1xyXG4gICAgc3RhdGljIFNvdW5kVHJhY2s6IHR5cGVvZiBTb3VuZFRyYWNrID0gU291bmRUcmFjaztcclxuXHJcblxyXG4gICAgLy8gaXJvblNvdXJjZVxyXG4gICAgc3RhdGljIGlyb25Tb3VyY2U6IHR5cGVvZiBJcm9uU291cmNlID0gSXJvblNvdXJjZTtcclxuXHJcblxyXG4gICAgLy8gUmVzcG9uc2l2ZVxyXG4gICAgc3RhdGljIFJlc3BvbnNpdmU6IHR5cGVvZiBSZXNwb25zaXZlID0gUmVzcG9uc2l2ZTtcclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Plugin/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '16092J/6+9HR5x8fJSUKKad', 'AudioManager');
// Script/Plugin/AudioManager.ts

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
var AudioManager = /** @class */ (function (_super) {
    __extends(AudioManager, _super);
    function AudioManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // sound 
        _this.bgSound = null;
        _this.drawSound = null;
        _this.successSound = null;
        _this.moveSound = null;
        _this.fireworksSound = null;
        _this.clickSound = null;
        _this.SheepSound1 = null;
        _this.SheepSound2 = null;
        _this.LoseSound = null;
        return _this;
    }
    AudioManager.prototype.playSound = function (soundName) {
        if (constants_1.Constants.ironSource.SoundState && !constants_1.Constants.ironSource.isEndGame) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "drawSound":
                    this.drawSound.play();
                    break;
                case "LoseSound":
                    this.LoseSound.play();
                    break;
                case "SheepSound1":
                    this.SheepSound1.play();
                    break;
                case "SheepSound2":
                    this.SheepSound2.play();
                    break;
                case "clickSound":
                    this.clickSound.play();
                    break;
                case "successSound":
                    this.successSound.play();
                    break;
                case "moveSound":
                    this.moveSound.play();
                    break;
                case "fireworksSound":
                    this.fireworksSound.play();
                    break;
                default:
                    break;
            }
        }
    };
    AudioManager.prototype.stopSound = function (soundName) {
        switch (soundName) {
            case "bgSound":
                this.bgSound.stop();
                break;
            case "drawSound":
                this.drawSound.stop();
                break;
            case "LoseSound":
                this.LoseSound.stop();
                break;
            case "SheepSound1":
                this.SheepSound1.stop();
                break;
            case "SheepSound2":
                this.SheepSound2.stop();
                break;
            case "clickSound":
                this.clickSound.stop();
                break;
            case "successSound":
                this.successSound.stop();
                break;
            case "moveSound":
                this.moveSound.stop();
                break;
            case "fireworksSound":
                this.fireworksSound.stop();
                break;
            default:
                break;
        }
    };
    AudioManager.prototype.stopAllSound = function () {
        this.bgSound.stop();
        this.drawSound.stop();
        this.successSound.stop();
        this.moveSound.stop();
        this.fireworksSound.stop();
        this.clickSound.stop();
        this.SheepSound1.stop();
        this.SheepSound2.stop();
        this.LoseSound.stop();
    };
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "bgSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "drawSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "successSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "moveSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "fireworksSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "clickSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "SheepSound1", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "SheepSound2", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "LoseSound", void 0);
    AudioManager = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
}(cc.Component));
exports.default = AudioManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXEF1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUF1R0M7UUFyR0csU0FBUztRQUVULGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLGVBQVMsR0FBbUIsSUFBSSxDQUFDO1FBRWpDLGtCQUFZLEdBQW1CLElBQUksQ0FBQztRQUVwQyxlQUFTLEdBQW1CLElBQUksQ0FBQztRQUVqQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsZ0JBQVUsR0FBbUIsSUFBSSxDQUFDO1FBRWxDLGlCQUFXLEdBQW1CLElBQUksQ0FBQztRQUVuQyxpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFFbkMsZUFBUyxHQUFtQixJQUFJLENBQUM7O0lBbUZyQyxDQUFDO0lBakZVLGdDQUFTLEdBQWhCLFVBQWlCLFNBQWlCO1FBQzlCLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxJQUFJLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFO1lBQ3BFLFFBQVEsU0FBUyxFQUFFO2dCQUNmLEtBQUssU0FBUztvQkFDVixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNwQixNQUFNO2dCQUNWLEtBQUssV0FBVztvQkFDWixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN0QixNQUFNO2dCQUNOLEtBQUssV0FBVztvQkFDWixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN0QixNQUFNO2dCQUNkLEtBQUssYUFBYTtvQkFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFB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QUFFLENBQUMsV0FBVyxDQUFDO3FEQUNVO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7cURBQ1U7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzttREFDUTtJQXBCaEIsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQXVHaEM7SUFBRCxtQkFBQztDQXZHRCxBQXVHQyxDQXZHeUMsRUFBRSxDQUFDLFNBQVMsR0F1R3JEO2tCQXZHb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gc291bmQgXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBiZ1NvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBkcmF3U291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIHN1Y2Nlc3NTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgbW92ZVNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBmaXJld29ya3NTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgY2xpY2tTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgU2hlZXBTb3VuZDE6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIFNoZWVwU291bmQyOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBMb3NlU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgcGxheVNvdW5kKHNvdW5kTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgJiYgIUNvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHNvdW5kTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImJnU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJnU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImRyYXdTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1NvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiTG9zZVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTG9zZVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiU2hlZXBTb3VuZDFcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlNoZWVwU291bmQxLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJTaGVlcFNvdW5kMlwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU2hlZXBTb3VuZDIucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImNsaWNrU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWNrU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInN1Y2Nlc3NTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VjY2Vzc1NvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJtb3ZlU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZmlyZXdvcmtzU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcmV3b3Jrc1NvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0b3BTb3VuZChzb3VuZE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAoc291bmROYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJiZ1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJnU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkcmF3U291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd1NvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkxvc2VTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTG9zZVNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlNoZWVwU291bmQxXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLlNoZWVwU291bmQxLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiU2hlZXBTb3VuZDJcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuU2hlZXBTb3VuZDIuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbGlja1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWNrU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzdWNjZXNzU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3VjY2Vzc1NvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibW92ZVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImZpcmV3b3Jrc1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpcmV3b3Jrc1NvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wQWxsU291bmQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmRyYXdTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5zdWNjZXNzU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMubW92ZVNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmZpcmV3b3Jrc1NvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmNsaWNrU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuU2hlZXBTb3VuZDEuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuU2hlZXBTb3VuZDIuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuTG9zZVNvdW5kLnN0b3AoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dfec3bBGHdHY4ShHxSUTm+E', 'GameController');
// Script/Controller/GameController.ts

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
exports.GameController = void 0;
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        return _this;
    }
    GameController.prototype.onLoad = function () {
    };
    GameController.prototype.start = function () {
        window.gameReady && window.gameReady();
    };
    GameController.prototype.installHandle = function () {
        console.log("install");
        this.AudioManager.stopAllSound();
        constants_1.Constants.ironSource.isEndGame = true;
        window.gameEnd && window.gameEnd();
        //If ad network is tiktok
        if (typeof (playableSDK) != "undefined") {
            window.playableSDK.openAppStore();
            return;
        }
        // If ad network is google ads
        if (typeof (ExitApi) != "undefined") {
            ExitApi.exit();
            return;
        }
        // If ad netwrok is ironsources
        if (typeof (dapi) != "undefined") {
            dapi.openStoreUrl();
            return;
        }
        // If ad network support MRAID 2.0
        if (typeof (mraid) != "undefined") {
            if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.ANDROID) {
                mraid.open("https://play.google.com/store/apps/details?id=com.tvc.deletestory");
                return;
            }
            if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
                mraid.open("https://itunes.apple.com/us/app/id1577759626?mt=8");
                return;
            }
            mraid.open("https://play.google.com/store/apps/details?id=com.tvc.deletestory");
            return;
        }
        // If ad network is mindwork. window alway avaiable so skip undefined check
        window.install && window.install();
    };
    __decorate([
        property(AudioManager_1.default)
    ], GameController.prototype, "AudioManager", void 0);
    GameController = __decorate([
        ccclass
    ], GameController);
    return GameController;
}(cc.Component));
exports.GameController = GameController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUc1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQyxrQ0FBWTtJQUFoRDtRQUFBLHFFQXdEQztRQXRERyxrQkFBWSxHQUFpQixJQUFJLENBQUM7O0lBc0R0QyxDQUFDO0lBcERhLCtCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUVTLDhCQUFLLEdBQWY7UUFDSSxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBR00sc0NBQWEsR0FBcEI7UUFFSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDakMscUJBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVuQyx5QkFBeUI7UUFDekIsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQ3JDLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbEMsT0FBTztTQUNWO1FBRUQsOEJBQThCO1FBQzlCLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLFdBQVcsRUFBRTtZQUNqQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZixPQUFPO1NBQ1Y7UUFFRCwrQkFBK0I7UUFDL0IsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixPQUFPO1NBQ1Y7UUFFRCxrQ0FBa0M7UUFDbEMsSUFBSSxPQUFNLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQy9ELEtBQUssQ0FBQyxJQUFJLENBQUMsbUVBQW1FLENBQUMsQ0FBQztnQkFDaEYsT0FBTzthQUNWO1lBRUQsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtnQkFDdEYsS0FBSyxDQUFDLElBQUksQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO2dCQUNoRSxPQUFPO2FBQ1Y7WUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLG1FQUFtRSxDQUFDLENBQUM7WUFDaEYsT0FBTztTQUNWO1FBQ0QsMkVBQTJFO1FBQzNFLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFyREQ7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQzt3REFDVztJQUZ6QixjQUFjO1FBRDFCLE9BQU87T0FDSyxjQUFjLENBd0QxQjtJQUFELHFCQUFDO0NBeERELEFBd0RDLENBeERtQyxFQUFFLENBQUMsU0FBUyxHQXdEL0M7QUF4RFksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbiBcclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIEdhbWVDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgaW5zdGFsbEhhbmRsZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbnN0YWxsXCIpO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BBbGxTb3VuZCgpO1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSA9IHRydWU7XHJcbiAgICAgICAgd2luZG93LmdhbWVFbmQgJiYgd2luZG93LmdhbWVFbmQoKTtcclxuXHJcbiAgICAgICAgLy9JZiBhZCBuZXR3b3JrIGlzIHRpa3Rva1xyXG4gICAgICAgIGlmICh0eXBlb2YgKHBsYXlhYmxlU0RLKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5wbGF5YWJsZVNESy5vcGVuQXBwU3RvcmUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d29yayBpcyBnb29nbGUgYWRzXHJcbiAgICAgICAgaWYgKHR5cGVvZiAoRXhpdEFwaSkgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBFeGl0QXBpLmV4aXQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d3JvayBpcyBpcm9uc291cmNlc1xyXG4gICAgICAgIGlmICh0eXBlb2YgKGRhcGkpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgZGFwaS5vcGVuU3RvcmVVcmwoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d29yayBzdXBwb3J0IE1SQUlEIDIuMFxyXG4gICAgICAgIGlmICh0eXBlb2YobXJhaWQpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLkFORFJPSUQpIHtcclxuICAgICAgICAgICAgICAgIG1yYWlkLm9wZW4oXCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLnR2Yy5kZWxldGVzdG9yeVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TIHx8IGNjLnN5cy5vcyA9PSBjYy5zeXMuSVBIT05FIHx8IGNjLnN5cy5vcyA9PSBjYy5zeXMuSVBBRCkge1xyXG4gICAgICAgICAgICAgICAgbXJhaWQub3BlbihcImh0dHBzOi8vaXR1bmVzLmFwcGxlLmNvbS91cy9hcHAvaWQxNTc3NzU5NjI2P210PThcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1yYWlkLm9wZW4oXCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLnR2Yy5kZWxldGVzdG9yeVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBJZiBhZCBuZXR3b3JrIGlzIG1pbmR3b3JrLiB3aW5kb3cgYWx3YXkgYXZhaWFibGUgc28gc2tpcCB1bmRlZmluZWQgY2hlY2tcclxuICAgICAgICB3aW5kb3cuaW5zdGFsbCAmJiB3aW5kb3cuaW5zdGFsbCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
        _this.scratchable = null;
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
        this.scratchable.x = -35;
        this.scratchable.y = -71;
        this.scratchable.scale = 0.62;
        this.BG.x = 0;
        this.BG.y = -50;
        this.BG.scale = 0.62;
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
        this.scratchable.x = -35;
        this.scratchable.y = -71;
        this.scratchable.scale = 0.48;
        this.BG.x = 0;
        this.BG.y = -50;
        this.BG.scale = 0.5;
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
        this.scratchable.x = -35;
        this.scratchable.y = -71;
        this.scratchable.scale = 0.62;
        this.BG.x = 0;
        this.BG.y = -50;
        this.BG.scale = 0.62;
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
        property(cc.Node)
    ], Responsive.prototype, "scratchable", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFJlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsK0NBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBMlFDO1FBelFHLFlBQVk7UUFFWixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsUUFBRSxHQUFZLElBQUksQ0FBQztRQUduQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsUUFBUTtRQUNSLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixvQkFBYyxHQUFXLGdCQUFnQixDQUFDO1FBQzFDLHVCQUFpQixHQUFXLG1CQUFtQixDQUFDO1FBQ2hELGtCQUFZLEdBQVcsY0FBYyxDQUFDO1FBQ3RDLHFCQUFlLEdBQVcsaUJBQWlCLENBQUM7O0lBZ1BoRCxDQUFDO0lBOU9hLDJCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUVTLDBCQUFLLEdBQWY7SUFFQSxDQUFDO0lBR08saUNBQVksR0FBcEI7UUFDSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxFQUFFO1lBQzlELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4QjthQUFNO1lBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQztJQUdPLGtDQUFhLEdBQXJCO1FBQ0ksSUFBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUU7WUFDcEUscUNBQXFDO1lBQ3JDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzlCO2FBQU07WUFDSCxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUNqQztJQUNMLENBQUM7SUFHTyx3Q0FBbUIsR0FBM0I7UUFDSSxJQUFHLElBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNwQyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDbEMscUJBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLGdCQUFnQixDQUFDO1FBRXRELElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBRTdCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFFekIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRTlCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUdyQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQzdCLENBQUM7SUFHTywyQ0FBc0IsR0FBOUI7UUFDSSxJQUFHLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3ZDLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ3JDLHFCQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQztRQUV0RCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUU3QixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBRXpCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRXBCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUVyQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQzdCLENBQUM7SUFHTyxnQ0FBVyxHQUFuQjtRQUNJLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ3BFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNyQjthQUFNO1lBQ0gsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQztJQUVPLCtCQUFVLEdBQWxCO1FBQ0ksSUFBRyxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDbEMsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBRWhDLHFCQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxpQkFBaUIsQ0FBQztRQUV2RCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUU3QixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBRXpCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBRXRCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUU5QixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFFcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUM3QixDQUFDO0lBRU8sOEJBQVMsR0FBakI7UUFDSSxJQUFHLElBQUksQ0FBQyxlQUFlLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNyQyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFFbkMscUJBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLGlCQUFpQixDQUFDO1FBRXZELElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRTlCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRTlCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUVyQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBRXpCLDJFQUEyRTtRQUMzRSx3Q0FBd0M7UUFFeEMsMEJBQTBCO1FBQzFCLHNCQUFzQjtRQUV0QixxQ0FBcUM7UUFDckMsaUNBQWlDO1FBRWpDLGdDQUFnQztRQUNoQyw0QkFBNEI7UUFFNUIsMkJBQTJCO1FBQzNCLHVCQUF1QjtRQUV2Qiw0QkFBNEI7UUFDNUIsd0JBQXdCO1FBQ3hCLHdCQUF3QjtRQUV4Qiw2QkFBNkI7UUFDN0IseUJBQXlCO1FBRXpCLDZCQUE2QjtRQUM3Qix3QkFBd0I7UUFFeEIsOEJBQThCO1FBQzlCLHlCQUF5QjtRQUV6QixtQ0FBbUM7UUFFbkMsZUFBZTtRQUNmLGNBQWM7UUFDZCwwQkFBMEI7UUFDMUIsc0JBQXNCO1FBRXRCLHFDQUFxQztRQUNyQyxpQ0FBaUM7UUFFakMsZ0NBQWdDO1FBQ2hDLDRCQUE0QjtRQUU1QiwyQkFBMkI7UUFDM0IsdUJBQXVCO1FBRXZCLDRCQUE0QjtRQUM1Qix3QkFBd0I7UUFDeEIsd0JBQXdCO1FBRXhCLDZCQUE2QjtRQUM3Qix5QkFBeUI7UUFFekIsNkJBQTZCO1FBQzdCLHdCQUF3QjtRQUV4Qiw4QkFBOEI7UUFDOUIseUJBQXlCO1FBRXpCLG1DQUFtQztRQUNuQyxJQUFJO0lBRVIsQ0FBQztJQUdPLGlDQUFZLEdBQXBCO0lBRUEsQ0FBQztJQUdTLDJCQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDdkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFyUUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDQztJQUduQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDTztJQWxCUixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBMlE5QjtJQUFELGlCQUFDO0NBM1FELEFBMlFDLENBM1F1QyxFQUFFLENBQUMsU0FBUyxHQTJRbkQ7a0JBM1FvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBHYW1lUGxheSBmcm9tIFwiLi4vQ29udHJvbGxlci9HYW1lUGxheVwiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNwb25zaXZlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBDb21wb25lbnRcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGV4dE9wZW5pbmc6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBPcHRpb25zOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGV4dDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEJHOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNjcmF0Y2hhYmxlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIENUQV9CdG46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDVEFfbG9nbzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gc3RhdGVcclxuICAgIGRldmljZTogc3RyaW5nID0gXCJcIjtcclxuICAgIGlzUm90YXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgSE9SSVpPTlRBTF9JUFg6IHN0cmluZyA9IFwiaG9yaXpvbnRhbF9JUFhcIjtcclxuICAgIEhPUklaT05UQUxfVEFCTEVUOiBzdHJpbmcgPSBcImhvcml6b250YWxfVGFibGV0XCI7XHJcbiAgICBWRVJUSUNBTF9JUFg6IHN0cmluZyA9IFwidmVydGljYWxfSVBYXCI7XHJcbiAgICBWRVJUSUNBTF9NT0JJTEU6IHN0cmluZyA9IFwidmVydGljYWxfTW9iaWxlXCI7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVSb3RhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggPiBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzUm90YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRIb3Jpem9udGFsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc1JvdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFZlcnRpY2FsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldEhvcml6b250YWwoKTogdm9pZCB7XHJcbiAgICAgICAgaWYoY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoIDwgMC42NSkge1xyXG4gICAgICAgICAgICAvLyBJcGhvbmUgNiAvIDYgcGx1cyAvIDcgLyA3IFBsdXMgLyBYXHJcbiAgICAgICAgICAgIHRoaXMuc2V0SG9yaXpvbnRhbEZvcklwWCgpOyBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWxGb3JUYWJsZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbEZvcklwWCgpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLkhPUklaT05UQUxfSVBYID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuSE9SSVpPTlRBTF9JUFg7XHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY3VycmVudERldmljZSA9IFwiaG9yaXpvbl9UYWJsZXRcIjtcclxuXHJcbiAgICAgICAgdGhpcy50ZXh0T3BlbmluZy54ID0gMDtcclxuICAgICAgICB0aGlzLnRleHRPcGVuaW5nLnkgPSA2MDtcclxuICAgICAgICB0aGlzLnRleHRPcGVuaW5nLnNjYWxlID0gMC42O1xyXG5cclxuICAgICAgICB0aGlzLk9wdGlvbnMueCA9IDA7XHJcbiAgICAgICAgdGhpcy5PcHRpb25zLnkgPSAtNTA7XHJcbiAgICAgICAgdGhpcy5PcHRpb25zLnNjYWxlID0gMS4zO1xyXG5cclxuICAgICAgICB0aGlzLnRleHQueCA9IDA7XHJcbiAgICAgICAgdGhpcy50ZXh0LnkgPSAxOTA7XHJcbiAgICAgICAgdGhpcy50ZXh0LnNjYWxlID0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5zY3JhdGNoYWJsZS54ID0gLTM1O1xyXG4gICAgICAgIHRoaXMuc2NyYXRjaGFibGUueSA9IC03MTtcclxuICAgICAgICB0aGlzLnNjcmF0Y2hhYmxlLnNjYWxlID0gMC42MjtcclxuXHJcbiAgICAgICAgdGhpcy5CRy54ID0gMDtcclxuICAgICAgICB0aGlzLkJHLnkgPSAtNTA7XHJcbiAgICAgICAgdGhpcy5CRy5zY2FsZSA9IDAuNjI7XHJcblxyXG5cclxuICAgICAgICB0aGlzLkNUQV9sb2dvLnNjYWxlID0gMC43O1xyXG4gICAgICAgIHRoaXMuQ1RBX0J0bi5zY2FsZSA9IDAuNTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsRm9yVGFibGV0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMuSE9SSVpPTlRBTF9UQUJMRVQgPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gdGhpcy5IT1JJWk9OVEFMX1RBQkxFVDtcclxuICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5jdXJyZW50RGV2aWNlID0gXCJob3Jpem9uX1RhYmxldFwiO1xyXG5cclxuICAgICAgICB0aGlzLnRleHRPcGVuaW5nLnggPSAwO1xyXG4gICAgICAgIHRoaXMudGV4dE9wZW5pbmcueSA9IDYwO1xyXG4gICAgICAgIHRoaXMudGV4dE9wZW5pbmcuc2NhbGUgPSAwLjY7XHJcblxyXG4gICAgICAgIHRoaXMuT3B0aW9ucy54ID0gMDtcclxuICAgICAgICB0aGlzLk9wdGlvbnMueSA9IC01MDtcclxuICAgICAgICB0aGlzLk9wdGlvbnMuc2NhbGUgPSAxLjM7XHJcblxyXG4gICAgICAgIHRoaXMudGV4dC54ID0gMDtcclxuICAgICAgICB0aGlzLnRleHQueSA9IDE5MDtcclxuICAgICAgICB0aGlzLnRleHQuc2NhbGUgPSAxO1xyXG5cclxuICAgICAgICB0aGlzLkJHLnggPSAwO1xyXG4gICAgICAgIHRoaXMuQkcueSA9IC01MDtcclxuICAgICAgICB0aGlzLkJHLnNjYWxlID0gMC42MjtcclxuXHJcbiAgICAgICAgdGhpcy5DVEFfbG9nby5zY2FsZSA9IDAuNjtcclxuICAgICAgICB0aGlzLkNUQV9CdG4uc2NhbGUgPSAwLjU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0VmVydGljYWwoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA8IDAuNSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldElwaG9uZVgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldE1vYmlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldElwaG9uZVgoKTogdm9pZCB7XHJcbiAgICAgICAgaWYodGhpcy5WRVJUSUNBTF9JUFggPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gdGhpcy5WRVJUSUNBTF9JUFg7XHJcblxyXG4gICAgICAgIENvbnN0YW50cy5SZXNwb25zaXZlLmN1cnJlbnREZXZpY2UgPSBcInZlcnRpY2FsX21vYmlsZVwiO1xyXG5cclxuICAgICAgICB0aGlzLnRleHRPcGVuaW5nLnggPSAwO1xyXG4gICAgICAgIHRoaXMudGV4dE9wZW5pbmcueSA9IDUwO1xyXG4gICAgICAgIHRoaXMudGV4dE9wZW5pbmcuc2NhbGUgPSAwLjQ7XHJcblxyXG4gICAgICAgIHRoaXMuT3B0aW9ucy54ID0gMDtcclxuICAgICAgICB0aGlzLk9wdGlvbnMueSA9IC01MDtcclxuICAgICAgICB0aGlzLk9wdGlvbnMuc2NhbGUgPSAwLjk7XHJcblxyXG4gICAgICAgIHRoaXMudGV4dC54ID0gMDtcclxuICAgICAgICB0aGlzLnRleHQueSA9IDE3MDtcclxuICAgICAgICB0aGlzLnRleHQuc2NhbGUgPSAwLjg7XHJcblxyXG4gICAgICAgIHRoaXMuc2NyYXRjaGFibGUueCA9IC0zNTtcclxuICAgICAgICB0aGlzLnNjcmF0Y2hhYmxlLnkgPSAtNzE7XHJcbiAgICAgICAgdGhpcy5zY3JhdGNoYWJsZS5zY2FsZSA9IDAuNDg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5CRy54ID0gMDtcclxuICAgICAgICB0aGlzLkJHLnkgPSAtNTA7XHJcbiAgICAgICAgdGhpcy5CRy5zY2FsZSA9IDAuNTtcclxuXHJcbiAgICAgICAgdGhpcy5DVEFfbG9nby5zY2FsZSA9IDAuNDg7XHJcbiAgICAgICAgdGhpcy5DVEFfQnRuLnNjYWxlID0gMC40O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0TW9iaWxlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMuVkVSVElDQUxfTU9CSUxFID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSAgIFxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuVkVSVElDQUxfTU9CSUxFO1xyXG5cclxuICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5jdXJyZW50RGV2aWNlID0gXCJ2ZXJ0aWNhbF9tb2JpbGVcIjtcclxuXHJcbiAgICAgICAgdGhpcy50ZXh0T3BlbmluZy54ID0gMDtcclxuICAgICAgICB0aGlzLnRleHRPcGVuaW5nLnkgPSA1MDtcclxuICAgICAgICB0aGlzLnRleHRPcGVuaW5nLnNjYWxlID0gMC40NTtcclxuXHJcbiAgICAgICAgdGhpcy5PcHRpb25zLnggPSAwO1xyXG4gICAgICAgIHRoaXMuT3B0aW9ucy55ID0gLTUwO1xyXG4gICAgICAgIHRoaXMuT3B0aW9ucy5zY2FsZSA9IDE7XHJcblxyXG4gICAgICAgIHRoaXMudGV4dC54ID0gMDtcclxuICAgICAgICB0aGlzLnRleHQueSA9IDE5MDtcclxuICAgICAgICB0aGlzLnRleHQuc2NhbGUgPSAxO1xyXG5cclxuICAgICAgICB0aGlzLnNjcmF0Y2hhYmxlLnggPSAtMzU7XHJcbiAgICAgICAgdGhpcy5zY3JhdGNoYWJsZS55ID0gLTcxO1xyXG4gICAgICAgIHRoaXMuc2NyYXRjaGFibGUuc2NhbGUgPSAwLjYyO1xyXG5cclxuICAgICAgICB0aGlzLkJHLnggPSAwO1xyXG4gICAgICAgIHRoaXMuQkcueSA9IC01MDtcclxuICAgICAgICB0aGlzLkJHLnNjYWxlID0gMC42MjtcclxuXHJcbiAgICAgICAgdGhpcy5DVEFfbG9nby5zY2FsZSA9IDAuNTQ7XHJcbiAgICAgICAgdGhpcy5DVEFfQnRuLnNjYWxlID0gMC40O1xyXG5cclxuICAgICAgICAvLyBpZihjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoIC8gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgPCAwLjcpIHtcclxuICAgICAgICAvLyAgICAgLy8gSXBob25lIDYgLyA2IHBsdXMgLyA3IC8gNyBQbHVzXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICB0aGlzLmJveS5zY2FsZSA9IDE7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYm95LnkgPSAwO1xyXG4gICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2NyYXRjaGFibGUuc2NhbGUgPSAwLjQ1O1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNjcmF0Y2hhYmxlLnkgPSAxMi4zO1xyXG4gICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMuYmdEb29yLnNjYWxlID0gMC40NTtcclxuICAgICAgICAvLyAgICAgdGhpcy5iZ0Rvb3IueSA9IDEyLjM7XHJcbiAgICBcclxuICAgICAgICAvLyAgICAgdGhpcy5naXJsLnNjYWxlID0gMTtcclxuICAgICAgICAvLyAgICAgdGhpcy5naXJsLnkgPSAwO1xyXG4gICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMuY2FyLnNjYWxlID0gMC40O1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNhci54ID0gMTI4O1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNhci55ID0gLTMyO1xyXG4gICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMubGFtcC5zY2FsZSA9IDAuNDtcclxuICAgICAgICAvLyAgICAgdGhpcy5sYW1wLnggPSAtNzM7XHJcbiAgICBcclxuICAgICAgICAvLyAgICAgdGhpcy50b29sLnNjYWxlID0gMC40O1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRvb2wueCA9IDYwO1xyXG4gICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMudGV4dC5zY2FsZSA9IDAuMzg7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudGV4dC55ID0gMTgyO1xyXG4gICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMuY2FuY2VsQnRuLnNjYWxlID0gMC40NTtcclxuXHJcbiAgICAgICAgLy8gfSBlbHNlIHsgICAgXHJcbiAgICAgICAgLy8gICAgIC8vIElwYWRcclxuICAgICAgICAvLyAgICAgdGhpcy5ib3kuc2NhbGUgPSAxO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmJveS55ID0gMDtcclxuICAgIFxyXG4gICAgICAgIC8vICAgICB0aGlzLnNjcmF0Y2hhYmxlLnNjYWxlID0gMC40NTtcclxuICAgICAgICAvLyAgICAgdGhpcy5zY3JhdGNoYWJsZS55ID0gMTIuMztcclxuICAgIFxyXG4gICAgICAgIC8vICAgICB0aGlzLmJnRG9vci5zY2FsZSA9IDAuNDU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYmdEb29yLnkgPSAxMi4zO1xyXG4gICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMuZ2lybC5zY2FsZSA9IDE7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZ2lybC55ID0gMDtcclxuICAgIFxyXG4gICAgICAgIC8vICAgICB0aGlzLmNhci5zY2FsZSA9IDAuNDtcclxuICAgICAgICAvLyAgICAgdGhpcy5jYXIueCA9IDEyODtcclxuICAgICAgICAvLyAgICAgdGhpcy5jYXIueSA9IC0zMjtcclxuICAgIFxyXG4gICAgICAgIC8vICAgICB0aGlzLmxhbXAuc2NhbGUgPSAwLjQ7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubGFtcC54ID0gLTczO1xyXG4gICAgXHJcbiAgICAgICAgLy8gICAgIHRoaXMudG9vbC5zY2FsZSA9IDAuNDtcclxuICAgICAgICAvLyAgICAgdGhpcy50b29sLnggPSA2MDtcclxuICAgIFxyXG4gICAgICAgIC8vICAgICB0aGlzLnRleHQuc2NhbGUgPSAwLjM4O1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRleHQueSA9IDE4MjtcclxuICAgIFxyXG4gICAgICAgIC8vICAgICB0aGlzLmNhbmNlbEJ0bi5zY2FsZSA9IDAuNDU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHVuQWN0aXZlTG9nbygpOiB2b2lkIHtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhhbmRsZVJvdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/TouchAreaController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cb238j6V3ZEJ5t9cUnXoMCl', 'TouchAreaController');
// Script/Controller/TouchAreaController.ts

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
var GamePlay_1 = require("./GamePlay");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GamePlay = null;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.btn_Yes = null;
        _this.btn_No = null;
        _this.hideMask = null;
        _this.hand = null;
        _this.Point = null;
        _this.CTA_Btn = null;
        // state
        _this.isTouch = false;
        _this.isActiveCTA = false;
        return _this;
    }
    TouchAreaController.prototype.start = function () {
        this.btn_Yes.on(cc.Node.EventType.TOUCH_START, this.btnYesTouch, this);
        this.btn_No.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        if (!this.GamePlay.Opening.active) {
            this.registerEvent();
        }
    };
    TouchAreaController.prototype.registerEvent = function () {
        this.hideMask.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.hideMask.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.hideMask.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.hideMask.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    };
    TouchAreaController.prototype.btnYesTouch = function () {
        this.btn_Yes.getChildByName("icon").active = true;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.clickSound);
        this.GamePlay.Opening.active = false;
        this.GamePlay.MainContent.active = true;
        this.GamePlay.handleIronSourcePlaySound();
        this.registerEvent();
    };
    TouchAreaController.prototype.touchStart = function (e) {
        constants_1.Constants.life <= 0 && this.GameController.installHandle();
        if (constants_1.Constants.ironSource.isEndGame)
            return;
        this.GamePlay.handleIronSourcePlaySound();
        this.isTouch = true;
        this.hand.active = false;
        this.Point.getComponent(cc.Animation).stop();
        !constants_1.Constants.isDoneEraser && this.AudioManager.playSound(constants_1.Constants.SoundTrack.drawSound);
        var pos = e.getLocation();
        var convertedPos = this.node.convertToNodeSpaceAR(pos);
        this.Point.setPosition(convertedPos);
        constants_1.Constants.touchPoints.push(convertedPos);
        // mtg && aplovin
        // this.isActiveCTA && this.GameController.installHandle();
    };
    TouchAreaController.prototype.touchMove = function (e) {
        var pos = e.getLocation();
        var convertedPos = this.node.convertToNodeSpaceAR(pos);
        this.Point.setPosition(convertedPos);
        constants_1.Constants.touchPoints.push(convertedPos);
    };
    TouchAreaController.prototype.checkStraightLine = function (touchPoints) {
        if (touchPoints.length < 3) {
            return false;
        }
        var A = touchPoints[touchPoints.length - 3];
        var B = touchPoints[touchPoints.length - 2];
        var C = touchPoints[touchPoints.length - 1];
        return (B.x - A.x) * (C.y - A.y) === (B.y - A.y) * (C.x - A.x);
    };
    TouchAreaController.prototype.touchEnd = function () {
        var _this = this;
        this.isTouch = false;
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.drawSound);
        this.unActivePoint();
        // win
        if (this.GamePlay.isDeleteOverHalf() && this.checkStraightLine(constants_1.Constants.touchPoints)) {
            this.isActiveCTA = true;
            constants_1.Constants.isDoneEraser = true;
            this.GamePlay.winGame();
            this.GamePlay.ageLabel.node.color = cc.Color.GREEN;
            this.GamePlay.increaseAge(constants_1.Constants.age, 18);
            this.CTA_Btn.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        }
        // lose
        if (!constants_1.Constants.isDoneEraser) {
            constants_1.Constants.isRestart = true;
            constants_1.Constants.life -= 1;
            constants_1.Constants.ageIncrease += 3;
            this.GamePlay.ageLabel.node.color = cc.Color.RED;
            this.GamePlay.increaseAge(constants_1.Constants.age, constants_1.Constants.ageIncrease);
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.LoseSound);
            this.scheduleOnce(function () {
                _this.GamePlay.RestartGame();
            }, 1.5);
        }
    };
    TouchAreaController.prototype.unActivePoint = function () {
        this.Point.active = false;
    };
    TouchAreaController.prototype.update = function (dt) {
        this.GamePlay.handleMuteSoundIronSource();
    };
    __decorate([
        property(GamePlay_1.default)
    ], TouchAreaController.prototype, "GamePlay", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], TouchAreaController.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], TouchAreaController.prototype, "GameController", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "btn_Yes", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "btn_No", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "hideMask", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "hand", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "Point", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "CTA_Btn", void 0);
    TouchAreaController = __decorate([
        ccclass
    ], TouchAreaController);
    return TouchAreaController;
}(cc.Component));
exports.default = TouchAreaController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE4QztBQUM5Qyx1REFBa0Q7QUFDbEQsbURBQWtEO0FBQ2xELHVDQUFrQztBQUU1QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFpRCx1Q0FBWTtJQUE3RDtRQUFBLHFFQTRJQztRQTFJRyxjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFHdEMsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsUUFBUTtRQUNSLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsaUJBQVcsR0FBWSxLQUFLLENBQUM7O0lBa0hqQyxDQUFDO0lBL0dhLG1DQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFdkYsSUFBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFD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QUFDO0lBQzlCLENBQUM7SUFFUyxvQ0FBTSxHQUFoQixVQUFpQixFQUFVO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMseUJBQXlCLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBeklEO1FBREMsUUFBUSxDQUFDLGtCQUFRLENBQUM7eURBQ087SUFFMUI7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQzs2REFDVztJQUVsQztRQURDLFFBQVEsQ0FBQywrQkFBYyxDQUFDOytEQUNhO0lBR3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNNO0lBdEJQLG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBNEl2QztJQUFELDBCQUFDO0NBNUlELEFBNElDLENBNUlnRCxFQUFFLENBQUMsU0FBUyxHQTRJNUQ7a0JBNUlvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBHYW1lUGxheSBmcm9tIFwiLi9HYW1lUGxheVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvdWNoQXJlYUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KEdhbWVQbGF5KVxyXG4gICAgR2FtZVBsYXk6IEdhbWVQbGF5ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoR2FtZUNvbnRyb2xsZXIpXHJcbiAgICBHYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuX1llczogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bl9ObzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoaWRlTWFzazogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgUG9pbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ1RBX0J0bjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gc3RhdGVcclxuICAgIGlzVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzQWN0aXZlQ1RBOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJ0bl9ZZXMub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuYnRuWWVzVG91Y2gsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYnRuX05vLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUsIHRoaXMpO1xyXG5cclxuICAgICAgICBpZighdGhpcy5HYW1lUGxheS5PcGVuaW5nLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgcmVnaXN0ZXJFdmVudCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhpZGVNYXNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGlkZU1hc2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGlkZU1hc2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmhpZGVNYXNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgYnRuWWVzVG91Y2goKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5idG5fWWVzLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5jbGlja1NvdW5kKTtcclxuICAgICAgICB0aGlzLkdhbWVQbGF5Lk9wZW5pbmcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5HYW1lUGxheS5NYWluQ29udGVudC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLkdhbWVQbGF5LmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSB0b3VjaFN0YXJ0KGU6IGNjLlRvdWNoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIENvbnN0YW50cy5saWZlIDw9IDAgJiYgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlKCk7XHJcblxyXG4gICAgICAgIGlmKENvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLkdhbWVQbGF5LmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmlzVG91Y2ggPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaGFuZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLlBvaW50LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnN0b3AoKTtcclxuICAgICAgICAhQ29uc3RhbnRzLmlzRG9uZUVyYXNlciAmJiB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suZHJhd1NvdW5kKTtcclxuXHJcbiAgICAgICAgbGV0IHBvcyA9IGUuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBsZXQgY29udmVydGVkUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XHJcbiAgICAgICAgdGhpcy5Qb2ludC5zZXRQb3NpdGlvbihjb252ZXJ0ZWRQb3MpO1xyXG4gICAgICAgIENvbnN0YW50cy50b3VjaFBvaW50cy5wdXNoKGNvbnZlcnRlZFBvcyk7XHJcblxyXG4gICAgICAgIC8vIG10ZyAmJiBhcGxvdmluXHJcbiAgICAgICAgLy8gdGhpcy5pc0FjdGl2ZUNUQSAmJiB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSB0b3VjaE1vdmUoZTogY2MuVG91Y2gpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcG9zID0gZS5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIGxldCBjb252ZXJ0ZWRQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuICAgICAgICB0aGlzLlBvaW50LnNldFBvc2l0aW9uKGNvbnZlcnRlZFBvcyk7XHJcblxyXG4gICAgICAgIENvbnN0YW50cy50b3VjaFBvaW50cy5wdXNoKGNvbnZlcnRlZFBvcyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tTdHJhaWdodExpbmUodG91Y2hQb2ludHM6IGNjLlZlYzJbXSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0b3VjaFBvaW50cy5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBBID0gdG91Y2hQb2ludHNbdG91Y2hQb2ludHMubGVuZ3RoIC0gM107XHJcbiAgICAgICAgbGV0IEIgPSB0b3VjaFBvaW50c1t0b3VjaFBvaW50cy5sZW5ndGggLSAyXTtcclxuICAgICAgICBsZXQgQyA9IHRvdWNoUG9pbnRzW3RvdWNoUG9pbnRzLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgICAgICByZXR1cm4gKEIueCAtIEEueCkgKiAoQy55IC0gQS55KSA9PT0gKEIueSAtIEEueSkgKiAoQy54IC0gQS54KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSB0b3VjaEVuZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzVG91Y2ggPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5zdG9wU291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suZHJhd1NvdW5kKTtcclxuICAgICAgICB0aGlzLnVuQWN0aXZlUG9pbnQoKTtcclxuXHJcbiAgICAgICAgLy8gd2luXHJcbiAgICAgICAgaWYgKHRoaXMuR2FtZVBsYXkuaXNEZWxldGVPdmVySGFsZigpICYmIHRoaXMuY2hlY2tTdHJhaWdodExpbmUoQ29uc3RhbnRzLnRvdWNoUG9pbnRzKSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlQ1RBID0gdHJ1ZTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzRG9uZUVyYXNlciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuR2FtZVBsYXkud2luR2FtZSgpO1xyXG4gICAgICAgICAgICB0aGlzLkdhbWVQbGF5LmFnZUxhYmVsLm5vZGUuY29sb3IgPSBjYy5Db2xvci5HUkVFTjtcclxuICAgICAgICAgICAgdGhpcy5HYW1lUGxheS5pbmNyZWFzZUFnZShDb25zdGFudHMuYWdlLCAxOCk7XHJcbiAgICAgICAgICAgIHRoaXMuQ1RBX0J0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlLCB0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGxvc2VcclxuICAgICAgICBpZiAoIUNvbnN0YW50cy5pc0RvbmVFcmFzZXIpIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzUmVzdGFydCA9IHRydWU7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5saWZlIC09IDE7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5hZ2VJbmNyZWFzZSArPSAzO1xyXG4gICAgICAgICAgICB0aGlzLkdhbWVQbGF5LmFnZUxhYmVsLm5vZGUuY29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICAgICAgICAgIHRoaXMuR2FtZVBsYXkuaW5jcmVhc2VBZ2UoQ29uc3RhbnRzLmFnZSwgQ29uc3RhbnRzLmFnZUluY3JlYXNlKTtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkxvc2VTb3VuZCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZVBsYXkuUmVzdGFydEdhbWUoKTtcclxuICAgICAgICAgICAgfSwgMS41KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSB1bkFjdGl2ZVBvaW50KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuUG9pbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5HYW1lUGxheS5oYW5kbGVNdXRlU291bmRJcm9uU291cmNlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
cc._RF.push(module, 'af3b25w7AVJa7LI1CskCfDP', 'MaskGamePlay');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxNYXNrR2FtZVBsYXkuanMiXSwibmFtZXMiOlsiU2NyYXRjaGFibGUiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwb2ludENsZWFyIiwiTm9kZSIsInRvdWNoQXJlYSIsIm9uTG9hZCIsInNjcmF0Y2hhYmxlcyIsImdldENvbXBvbmVudHNJbkNoaWxkcmVuIiwidXBkYXRlIiwiZHQiLCJpc1RvdWNoIiwiZ2V0Q29tcG9uZW50IiwiYWN0aXZlIiwicG9pbnQiLCJ2MiIsIngiLCJ3aW5TaXplIiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwiZm9yRWFjaCIsInNjcmF0Y2hhYmxlIiwiaXNTY3JhdGNoYWJsZSIsImlzSW5Cb3VuZCIsInNjcmF0Y2hIb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFdBQVcsR0FBR0MsT0FBTyxDQUFDLGFBQUQsQ0FBM0I7O0FBRUFDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBR1BDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxVQUFVLEVBQUVKLEVBQUUsQ0FBQ0ssSUFETDtBQUVWQyxJQUFBQSxTQUFTLEVBQUVOLEVBQUUsQ0FBQ0s7QUFGSixHQUhMO0FBUVBFLEVBQUFBLE1BUk8sb0JBUUU7QUFDUCxTQUFLQyxZQUFMLEdBQW9CLEtBQUtDLHVCQUFMLENBQTZCWCxXQUE3QixDQUFwQjtBQUNELEdBVk07QUFZUFksRUFBQUEsTUFaTyxrQkFZQUMsRUFaQSxFQVlJO0FBQ1QsU0FBS0MsT0FBTCxHQUFlLEtBQUtOLFNBQUwsQ0FBZU8sWUFBZixDQUE0QixxQkFBNUIsRUFBbURELE9BQWxFOztBQUNBLFFBQUksS0FBS1IsVUFBTCxDQUFnQlUsTUFBaEIsSUFBMEIsS0FBS0YsT0FBbkMsRUFBNEM7QUFDMUMsVUFBSUcsS0FBSyxHQUFHZixFQUFFLENBQUNnQixFQUFILENBQ1YsS0FBS1osVUFBTCxDQUFnQmEsQ0FBaEIsR0FBb0JqQixFQUFFLENBQUNrQixPQUFILENBQVdDLEtBQVgsR0FBbUIsQ0FEN0IsRUFFVixLQUFLZixVQUFMLENBQWdCZ0IsQ0FBaEIsR0FBb0JwQixFQUFFLENBQUNrQixPQUFILENBQVdHLE1BQVgsR0FBb0IsQ0FGOUIsQ0FBWjtBQUlBLFdBQUtiLFlBQUwsQ0FBa0JjLE9BQWxCLENBQTBCLFVBQUNDLFdBQUQsRUFBaUI7QUFDekMsWUFBSUEsV0FBVyxDQUFDQyxhQUFaLElBQTZCRCxXQUFXLENBQUNFLFNBQVosQ0FBc0JWLEtBQXRCLENBQWpDLEVBQStEO0FBQzdEUSxVQUFBQSxXQUFXLENBQUNHLFdBQVosQ0FBd0JYLEtBQXhCO0FBQ0Q7QUFDRixPQUpEO0FBS0Q7QUFDRjtBQXpCTSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTY3JhdGNoYWJsZSA9IHJlcXVpcmUoXCJTY3JhdGNoYWJsZVwiKTtcblxuY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgcHJvcGVydGllczoge1xuICAgIHBvaW50Q2xlYXI6IGNjLk5vZGUsXG4gICAgdG91Y2hBcmVhOiBjYy5Ob2RlLFxuICB9LFxuXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLnNjcmF0Y2hhYmxlcyA9IHRoaXMuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oU2NyYXRjaGFibGUpO1xuICB9LFxuXG4gIHVwZGF0ZShkdCkge1xuICAgIHRoaXMuaXNUb3VjaCA9IHRoaXMudG91Y2hBcmVhLmdldENvbXBvbmVudChcIlRvdWNoQXJlYUNvbnRyb2xsZXJcIikuaXNUb3VjaDtcbiAgICBpZiAodGhpcy5wb2ludENsZWFyLmFjdGl2ZSAmJiB0aGlzLmlzVG91Y2gpIHtcbiAgICAgIHZhciBwb2ludCA9IGNjLnYyKFxuICAgICAgICB0aGlzLnBvaW50Q2xlYXIueCArIGNjLndpblNpemUud2lkdGggLyAyLFxuICAgICAgICB0aGlzLnBvaW50Q2xlYXIueSArIGNjLndpblNpemUuaGVpZ2h0IC8gMlxuICAgICAgKTtcbiAgICAgIHRoaXMuc2NyYXRjaGFibGVzLmZvckVhY2goKHNjcmF0Y2hhYmxlKSA9PiB7XG4gICAgICAgIGlmIChzY3JhdGNoYWJsZS5pc1NjcmF0Y2hhYmxlICYmIHNjcmF0Y2hhYmxlLmlzSW5Cb3VuZChwb2ludCkpIHtcbiAgICAgICAgICBzY3JhdGNoYWJsZS5zY3JhdGNoSG9sZShwb2ludCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Script
        _this.AudioManager = null;
        _this.GameController = null;
        // Component
        _this.Scratchable = null;
        // Node
        _this.Opening = null;
        _this.MainContent = null;
        _this.ageLabel = null;
        _this.age54 = null;
        _this.age18 = null;
        _this.iloveyou = null;
        _this.boy1 = null;
        _this.boy2 = null;
        _this.girl1 = null;
        _this.girl2 = null;
        _this.particle = null;
        _this.CTA = null;
        // state
        _this.isDoneEraser = false;
        _this.soundTrack = null;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
    };
    GamePlay.prototype.start = function () {
        // !Constants.ironSource.isEndGame && this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        // use this if build ironsource
        constants_1.Constants.isRestart && !constants_1.Constants.ironSource.isEndGame && this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        this.CTA.active = false;
        this.soundTrack = this.AudioManager.SheepSound1;
        this.ageLabel.string = String(constants_1.Constants.age);
        cc.director.preloadScene("restartGame");
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
    GamePlay.prototype.isDeleteOverHalf = function () {
        var result;
        console.log(this.Scratchable.getComponent("Scratchable").progress);
        this.Scratchable.getComponent("Scratchable").progress >= 0.4 &&
            this.Scratchable.getComponent("Scratchable").progress <= 0.6
            ? result = true
            : result = false;
        return result;
    };
    GamePlay.prototype.RestartGame = function () {
        cc.director.loadScene("restartGame");
    };
    GamePlay.prototype.increaseAge = function (fromValue, toValue) {
        var _this = this;
        constants_1.Constants.age = fromValue;
        cc.tween(constants_1.Constants)
            .to(1, { age: toValue }, {
            progress: function (start, end, current, t) {
                var newValue = Math.floor(cc.misc.lerp(start, end, t));
                _this.ageLabel.string = newValue.toString();
                return newValue;
            }
        })
            .start();
    };
    GamePlay.prototype.winGame = function () {
        var _this = this;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.successSound);
        this.Scratchable.getChildByName("Mask").active = false;
        this.iloveyou.active = true;
        this.boy1.active = false;
        this.boy2.active = true;
        this.girl1.active = false;
        this.girl2.active = true;
        this.isDoneEraser = true;
        // this.age18.active = true;
        // this.age54.active = false;
        this.particle.resetSystem();
        this.scheduleOnce(function () {
            _this.CTA.active = true;
            _this.CTA.getComponent(cc.Animation).play("CTA_Anim");
        }, 2);
    };
    GamePlay.prototype.checkDoneEraser = function () {
        if (this.Scratchable.getComponent("Scratchable").isWin) {
            console.log("lose");
        }
    };
    GamePlay.prototype.update = function (dt) {
        // !this.isDoneEraser && this.checkDoneEraser();
        // this.handleMuteSoundIronSource();
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "Scratchable", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "Opening", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "MainContent", void 0);
    __decorate([
        property(cc.Label)
    ], GamePlay.prototype, "ageLabel", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "age54", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "age18", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "iloveyou", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "boy1", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "boy2", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "girl1", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "girl2", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], GamePlay.prototype, "particle", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "CTA", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUU1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXNLQztRQXBLRyxTQUFTO1FBRVQsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUd0QyxZQUFZO1FBRVosaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsT0FBTztRQUVQLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFJdEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBSXRCLGNBQVEsR0FBc0IsSUFBSSxDQUFDO1FBR25DLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFHcEIsUUFBUTtRQUNSLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGdCQUFVLEdBQW1CLElBQUksQ0FBQzs7SUFzSHRDLENBQUM7SUFuSGEseUJBQU0sR0FBaEI7SUFFQSxDQUFDO0lBR1Msd0JBQUssR0FBZjtRQUNJLGdHQUFnRztRQUVoRywrQkFBK0I7UUFDL0IscUJBQVMsQ0FBQyxTQUFTLElBQUksQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFcEgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLHFCQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUdNLDRDQUF5QixHQUFoQztRQUNJLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO1lBQ3BDLE9BQU87U0FDVjtRQUVELElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzdEO1FBRUQscUJBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztJQUM5QyxDQUFDO0lBR00sNENBQXlCLEdBQWhDO1FBQ0kscUJBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFFbEYsSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUU7WUFDNUIsSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxJQUFJLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFO2dCQUN6RyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM3RDtZQUVELElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7Z0JBQ3JFLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDcEM7U0FDSjtJQUNMLENBQUM7SUFHTSxtQ0FBZ0IsR0FBdkI7UUFDSSxJQUFJLE1BQWUsQ0FBQztRQUVwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRW5FLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsSUFBSSxHQUFHO1lBQ3hELElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsSUFBSSxHQUFHO1lBQzVELENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSTtZQUNmLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXJCLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFHTSw4QkFBVyxHQUFsQjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFHRCw4QkFBVyxHQUFYLFVBQVksU0FBUyxFQUFFLE9BQU87UUFBOUIsaUJBV0M7UUFWRyxxQkFBUyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7UUFDMUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBUyxDQUFDO2FBQ2QsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRTtZQUNyQixRQUFRLEVBQUUsVUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDO2dCQUM3QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUMzQyxPQUFPLFFBQVEsQ0FBQztZQUNwQixDQUFDO1NBQ0osQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFHTSwwQkFBTyxHQUFkO1FBQUEsaUJBbUJDO1FBbEJHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFFdkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUV6QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6Qiw0QkFBNEI7UUFDNUIsNkJBQTZCO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFNUIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUN2QixLQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pELENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNULENBQUM7SUFHTyxrQ0FBZSxHQUF2QjtRQUVJLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdkI7SUFDTCxDQUFDO0lBR1MseUJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixnREFBZ0Q7UUFDaEQsb0NBQW9DO0lBQ3hDLENBQUM7SUFqS0Q7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQztrREFDVztJQUVsQztRQURDLFFBQVEsQ0FBQywrQkFBYyxDQUFDO29EQUNhO0lBS3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1U7SUFJNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ087SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBSXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQUl0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDOzhDQUNPO0lBR25DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0U7SUEzQ0gsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXNLNUI7SUFBRCxlQUFDO0NBdEtELEFBc0tDLENBdEtxQyxFQUFFLENBQUMsU0FBUyxHQXNLakQ7a0JBdEtvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQbGF5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBTY3JpcHRcclxuICAgIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoR2FtZUNvbnRyb2xsZXIpXHJcbiAgICBHYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBDb21wb25lbnRcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgU2NyYXRjaGFibGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIE5vZGVcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgT3BlbmluZzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIE1haW5Db250ZW50OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBhZ2VMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBhZ2U1NDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGFnZTE4OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBpbG92ZXlvdTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJveTE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBib3kyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2lybDE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBnaXJsMjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QYXJ0aWNsZVN5c3RlbSlcclxuICAgIHBhcnRpY2xlOiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDVEE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBzdGF0ZVxyXG4gICAgaXNEb25lRXJhc2VyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzb3VuZFRyYWNrOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gIUNvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSAmJiB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcblxyXG4gICAgICAgIC8vIHVzZSB0aGlzIGlmIGJ1aWxkIGlyb25zb3VyY2VcclxuICAgICAgICBDb25zdGFudHMuaXNSZXN0YXJ0ICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUgJiYgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG5cclxuICAgICAgICB0aGlzLkNUQS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNvdW5kVHJhY2sgPSB0aGlzLkF1ZGlvTWFuYWdlci5TaGVlcFNvdW5kMTtcclxuICAgICAgICB0aGlzLmFnZUxhYmVsLnN0cmluZyA9IFN0cmluZyhDb25zdGFudHMuYWdlKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCJyZXN0YXJ0R2FtZVwiKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBoYW5kbGVNdXRlU291bmRJcm9uU291cmNlKCk6IHZvaWQge1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2Nvc1NvdW5kU3RhdGVcIiksIDEwKVxyXG5cclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUpIHtcclxuICAgICAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID09PSAxICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUpIHtcclxuICAgICAgICAgICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPT09IDIgJiYgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIuc3RvcEFsbFNvdW5kKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBpc0RlbGV0ZU92ZXJIYWxmKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCByZXN1bHQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuU2NyYXRjaGFibGUuZ2V0Q29tcG9uZW50KFwiU2NyYXRjaGFibGVcIikucHJvZ3Jlc3MpO1xyXG5cclxuICAgICAgICB0aGlzLlNjcmF0Y2hhYmxlLmdldENvbXBvbmVudChcIlNjcmF0Y2hhYmxlXCIpLnByb2dyZXNzID49IDAuNCAmJlxyXG4gICAgICAgICAgICB0aGlzLlNjcmF0Y2hhYmxlLmdldENvbXBvbmVudChcIlNjcmF0Y2hhYmxlXCIpLnByb2dyZXNzIDw9IDAuNlxyXG4gICAgICAgICAgICA/IHJlc3VsdCA9IHRydWVcclxuICAgICAgICAgICAgOiByZXN1bHQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIFJlc3RhcnRHYW1lKCk6IHZvaWQge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInJlc3RhcnRHYW1lXCIpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGluY3JlYXNlQWdlKGZyb21WYWx1ZSwgdG9WYWx1ZSkge1xyXG4gICAgICAgIENvbnN0YW50cy5hZ2UgPSBmcm9tVmFsdWU7XHJcbiAgICAgICAgY2MudHdlZW4oQ29uc3RhbnRzKVxyXG4gICAgICAgICAgICAudG8oMSwgeyBhZ2U6IHRvVmFsdWUgfSwge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IChzdGFydCwgZW5kLCBjdXJyZW50LCB0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0gTWF0aC5mbG9vcihjYy5taXNjLmxlcnAoc3RhcnQsIGVuZCwgdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWdlTGFiZWwuc3RyaW5nID0gbmV3VmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgd2luR2FtZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suc3VjY2Vzc1NvdW5kKTtcclxuICAgICAgICB0aGlzLlNjcmF0Y2hhYmxlLmdldENoaWxkQnlOYW1lKFwiTWFza1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5pbG92ZXlvdS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYm95MS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJveTIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdpcmwxLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ2lybDIuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5pc0RvbmVFcmFzZXIgPSB0cnVlO1xyXG4gICAgICAgIC8vIHRoaXMuYWdlMTguYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyB0aGlzLmFnZTU0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGFydGljbGUucmVzZXRTeXN0ZW0oKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLkNUQS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLkNUQS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiQ1RBX0FuaW1cIik7XHJcbiAgICAgICAgfSwgMilcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0RvbmVFcmFzZXIoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLlNjcmF0Y2hhYmxlLmdldENvbXBvbmVudChcIlNjcmF0Y2hhYmxlXCIpLmlzV2luKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9zZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIC8vICF0aGlzLmlzRG9uZUVyYXNlciAmJiB0aGlzLmNoZWNrRG9uZUVyYXNlcigpO1xyXG4gICAgICAgIC8vIHRoaXMuaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
