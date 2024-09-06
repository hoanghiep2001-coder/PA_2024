
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
require('./assets/Script/Controller/IronSource');
require('./assets/Script/Controller/MaskGamePlay');
require('./assets/Script/Controller/NodeContanier');
require('./assets/Script/Controller/Scratchable');
require('./assets/Script/Controller/TouchAreaController');
require('./assets/Script/Data/Anims');
require('./assets/Script/Data/Ultils');
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
                    var __filename = 'preview-scripts/assets/Script/Data/Anims.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7e978dmCj1F/oDQ09VgYDVK', 'Anims');
// Script/Data/Anims.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpineAnims = void 0;
var Intro_SpiderAnim;
(function (Intro_SpiderAnim) {
    Intro_SpiderAnim["Action"] = "action01";
    Intro_SpiderAnim["Idle"] = "idle01";
})(Intro_SpiderAnim || (Intro_SpiderAnim = {}));
var Intro_DollAnim;
(function (Intro_DollAnim) {
    Intro_DollAnim["Walk"] = "action01";
    Intro_DollAnim["Scare"] = "action02";
    Intro_DollAnim["Idle"] = "idle0";
})(Intro_DollAnim || (Intro_DollAnim = {}));
var LipsAnim;
(function (LipsAnim) {
    LipsAnim["Dry"] = "action04";
    LipsAnim["DirtySmell"] = "action03";
    LipsAnim["Idle"] = "idle02";
})(LipsAnim || (LipsAnim = {}));
var bubbleAnim;
(function (bubbleAnim) {
    bubbleAnim["Clean"] = "action04_bubble_clean";
    bubbleAnim["Show"] = "action03_only_bubble";
})(bubbleAnim || (bubbleAnim = {}));
var waterToothAnim;
(function (waterToothAnim) {
    waterToothAnim["Idle"] = "Idle1";
    waterToothAnim["Action"] = "action01";
})(waterToothAnim || (waterToothAnim = {}));
var SpineAnims = /** @class */ (function () {
    function SpineAnims() {
    }
    SpineAnims.LipsAnim = LipsAnim;
    SpineAnims.Intro_DollAnim = Intro_DollAnim;
    SpineAnims.Intro_SpiderAnim = Intro_SpiderAnim;
    SpineAnims.bubbleAnim = bubbleAnim;
    SpineAnims.waterToothAnim = waterToothAnim;
    return SpineAnims;
}());
exports.SpineAnims = SpineAnims;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxBbmltcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFLLGdCQUdKO0FBSEQsV0FBSyxnQkFBZ0I7SUFDakIsdUNBQW1CLENBQUE7SUFDbkIsbUNBQWUsQ0FBQTtBQUNuQixDQUFDLEVBSEksZ0JBQWdCLEtBQWhCLGdCQUFnQixRQUdwQjtBQUdELElBQUssY0FJSjtBQUpELFdBQUssY0FBYztJQUNmLG1DQUFpQixDQUFBO0lBQ2pCLG9DQUFrQixDQUFBO0lBQ2xCLGdDQUFjLENBQUE7QUFDbEIsQ0FBQyxFQUpJLGNBQWMsS0FBZCxjQUFjLFFBSWxCO0FBR0QsSUFBSyxRQUlKO0FBSkQsV0FBSyxRQUFRO0lBQ1QsNEJBQWdCLENBQUE7SUFDaEIsbUNBQXVCLENBQUE7SUFDdkIsMkJBQWUsQ0FBQTtBQUNuQixDQUFDLEVBSkksUUFBUSxLQUFSLFFBQVEsUUFJWjtBQUdELElBQUssVUFHSjtBQUhELFdBQUssVUFBVTtJQUNYLDZDQUErQixDQUFBO0lBQy9CLDJDQUE2QixDQUFBO0FBQ2pDLENBQUMsRUFISSxVQUFVLEtBQVYsVUFBVSxRQUdkO0FBR0QsSUFBSyxjQUdKO0FBSEQsV0FBSyxjQUFjO0lBQ2YsZ0NBQWMsQ0FBQTtJQUNkLHFDQUFtQixDQUFBO0FBQ3ZCLENBQUMsRUFISSxjQUFjLEtBQWQsY0FBYyxRQUdsQjtBQUdEO0lBQUE7SUFNQSxDQUFDO0lBTFUsbUJBQVEsR0FBb0IsUUFBUSxDQUFDO0lBQ3JDLHlCQUFjLEdBQTBCLGNBQWMsQ0FBQztJQUN2RCwyQkFBZ0IsR0FBNEIsZ0JBQWdCLENBQUM7SUFDN0QscUJBQVUsR0FBc0IsVUFBVSxDQUFDO0lBQzNDLHlCQUFjLEdBQTBCLGNBQWMsQ0FBQztJQUNsRSxpQkFBQztDQU5ELEFBTUMsSUFBQTtBQU5ZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZW51bSBJbnRyb19TcGlkZXJBbmltIHtcclxuICAgIEFjdGlvbiA9IFwiYWN0aW9uMDFcIixcclxuICAgIElkbGUgPSBcImlkbGUwMVwiLFxyXG59XHJcblxyXG5cclxuZW51bSBJbnRyb19Eb2xsQW5pbSB7XHJcbiAgICBXYWxrID0gXCJhY3Rpb24wMVwiLFxyXG4gICAgU2NhcmUgPSBcImFjdGlvbjAyXCIsXHJcbiAgICBJZGxlID0gXCJpZGxlMFwiLFxyXG59XHJcblxyXG5cclxuZW51bSBMaXBzQW5pbSB7XHJcbiAgICBEcnkgPSBcImFjdGlvbjA0XCIsXHJcbiAgICBEaXJ0eVNtZWxsID0gXCJhY3Rpb24wM1wiLFxyXG4gICAgSWRsZSA9IFwiaWRsZTAyXCIsXHJcbn1cclxuXHJcblxyXG5lbnVtIGJ1YmJsZUFuaW0ge1xyXG4gICAgQ2xlYW4gPSBcImFjdGlvbjA0X2J1YmJsZV9jbGVhblwiLFxyXG4gICAgU2hvdyA9IFwiYWN0aW9uMDNfb25seV9idWJibGVcIixcclxufVxyXG5cclxuXHJcbmVudW0gd2F0ZXJUb290aEFuaW0ge1xyXG4gICAgSWRsZSA9IFwiSWRsZTFcIixcclxuICAgIEFjdGlvbiA9IFwiYWN0aW9uMDFcIixcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTcGluZUFuaW1zIHtcclxuICAgIHN0YXRpYyBMaXBzQW5pbTogdHlwZW9mIExpcHNBbmltID0gTGlwc0FuaW07XHJcbiAgICBzdGF0aWMgSW50cm9fRG9sbEFuaW06IHR5cGVvZiBJbnRyb19Eb2xsQW5pbSA9IEludHJvX0RvbGxBbmltO1xyXG4gICAgc3RhdGljIEludHJvX1NwaWRlckFuaW06IHR5cGVvZiBJbnRyb19TcGlkZXJBbmltID0gSW50cm9fU3BpZGVyQW5pbTtcclxuICAgIHN0YXRpYyBidWJibGVBbmltOiB0eXBlb2YgYnViYmxlQW5pbSA9IGJ1YmJsZUFuaW07XHJcbiAgICBzdGF0aWMgd2F0ZXJUb290aEFuaW06IHR5cGVvZiB3YXRlclRvb3RoQW5pbSA9IHdhdGVyVG9vdGhBbmltO1xyXG59Il19
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
cc._RF.push(module, '4c7cf9rDSJL36cJtz1lUze/', 'AudioManager');
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
        _this.spiderSound = null;
        _this.hmmSound = null;
        _this.walkSound = null;
        _this.scareSound = null;
        _this.IntroDelightSound = null;
        _this.whooseSound = null;
        _this.moveItemSound = null;
        _this.drySound = null;
        _this.shampooSound = null;
        _this.toothPaste1Sound = null;
        _this.toothPaste2Sound = null;
        _this.DoneStepSound = null;
        _this.ShakeBrush = null;
        return _this;
    }
    AudioManager.prototype.playSound = function (soundName) {
        // ironsource
        // this.ironSourceNetwork(soundName);
        this.normalNetwork(soundName);
    };
    AudioManager.prototype.ironSourceNetwork = function (soundName) {
        if (constants_1.Constants.ironSource.SoundState && constants_1.Constants.ironSource.isPlayBgSound) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                default:
                    break;
            }
        }
    };
    AudioManager.prototype.normalNetwork = function (soundName) {
        if (constants_1.Constants.ironSource.SoundState && !constants_1.Constants.ironSource.isEndGame) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "ShakeBrush":
                    this.ShakeBrush.play();
                    break;
                case "DoneStepSound":
                    this.DoneStepSound.play();
                    break;
                case "moveItemSound":
                    this.moveItemSound.play();
                    break;
                case "drySound":
                    this.drySound.play();
                    break;
                case "shampooSound":
                    this.shampooSound.play();
                    break;
                case "toothPaste1Sound":
                    this.toothPaste1Sound.play();
                    break;
                case "toothPaste2Sound":
                    this.toothPaste2Sound.play();
                    break;
                case "whooseSound":
                    this.whooseSound.play();
                    break;
                case "hmmSound":
                    this.hmmSound.play();
                    break;
                case "walkSound":
                    this.walkSound.play();
                    break;
                case "spiderSound":
                    this.spiderSound.play();
                    break;
                case "scareSound":
                    this.scareSound.play();
                    break;
                case "IntroDelightSound":
                    this.IntroDelightSound.play();
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
            case "ShakeBrush":
                this.ShakeBrush.stop();
                break;
            case "DoneStepSound":
                this.DoneStepSound.stop();
                break;
            case "moveItemSound":
                this.moveItemSound.stop();
                break;
            case "drySound":
                this.drySound.stop();
                break;
            case "shampooSound":
                this.shampooSound.stop();
                break;
            case "toothPaste1Sound":
                this.toothPaste1Sound.stop();
                break;
            case "toothPaste2Sound":
                this.toothPaste2Sound.stop();
                break;
            case "whooseSound":
                this.whooseSound.stop();
                break;
            case "spiderSound":
                this.spiderSound.stop();
                break;
            case "walkSound":
                this.walkSound.stop();
                break;
            case "hmmSound":
                this.hmmSound.stop();
                break;
            case "scareSound":
                this.scareSound.stop();
                break;
            case "IntroDelightSound":
                this.IntroDelightSound.stop();
                break;
            default:
                break;
        }
    };
    AudioManager.prototype.stopAllSound = function () {
        this.ShakeBrush.stop();
        this.DoneStepSound.stop();
        this.whooseSound.stop();
        this.moveItemSound.stop();
        this.bgSound.stop();
        this.walkSound.stop();
        this.spiderSound.stop();
        this.scareSound.stop();
        this.IntroDelightSound.stop();
        this.hmmSound.stop();
        this.drySound.stop();
        this.shampooSound.stop();
        this.toothPaste1Sound.stop();
        this.toothPaste2Sound.stop();
    };
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "bgSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "spiderSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "hmmSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "walkSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "scareSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "IntroDelightSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "whooseSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "moveItemSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "drySound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "shampooSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "toothPaste1Sound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "toothPaste2Sound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "DoneStepSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "ShakeBrush", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXEF1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFpTEM7UUEvS0csU0FBUztRQUVULGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLGlCQUFXLEdBQW1CLElBQUksQ0FBQztRQUVuQyxjQUFRLEdBQW1CLElBQUksQ0FBQztRQUVoQyxlQUFTLEdBQW1CLElBQUksQ0FBQztRQUVqQyxnQkFBVSxHQUFtQixJQUFJLENBQUM7UUFFbEMsdUJBQWlCLEdBQW1CLElBQUksQ0FBQztRQUV6QyxpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFFbkMsbUJBQWEsR0FBbUIsSUFBSSxDQUFDO1FBRXJDLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLGtCQUFZLEdBQW1CLElBQUksQ0FBQztRQUVwQyxzQkFBZ0IsR0FBbUIsSUFBSSxDQUFDO1FBRXhDLHNCQUFnQixHQUFtQixJQUFJLENBQUM7UUFFeEMsbUJBQWEsR0FBbUIsSUFBSSxDQUFDO1FBRXJDLGdCQUFVLEdBQW1CLElBQUksQ0FBQzs7SUFtSnRDLENBQUM7SUFqSlUsZ0NBQVMsR0FBaEIsVUFBaUIsU0FBaUI7UUFDOUIsYUFBYTtRQUNiLHFDQUFxQztRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFHTyx3Q0FBaUIsR0FBekIsVUFBMEIsU0FBUztRQUMvQixJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDdkUsUUFBUSxTQUFTLEVBQUU7Z0JBQ2YsS0FBSyxTQUFT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QkFBQztDQWpMRCxBQWlMQyxDQWpMeUMsRUFBRSxDQUFDLFNBQVMsR0FpTHJEO2tCQWpMb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gc291bmQgXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBiZ1NvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBzcGlkZXJTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgaG1tU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIHdhbGtTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgc2NhcmVTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgSW50cm9EZWxpZ2h0U291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIHdob29zZVNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBtb3ZlSXRlbVNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBkcnlTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgc2hhbXBvb1NvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICB0b290aFBhc3RlMVNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICB0b290aFBhc3RlMlNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBEb25lU3RlcFNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBTaGFrZUJydXNoOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHBsYXlTb3VuZChzb3VuZE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIC8vIGlyb25zb3VyY2VcclxuICAgICAgICAvLyB0aGlzLmlyb25Tb3VyY2VOZXR3b3JrKHNvdW5kTmFtZSk7XHJcbiAgICAgICAgdGhpcy5ub3JtYWxOZXR3b3JrKHNvdW5kTmFtZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaXJvblNvdXJjZU5ldHdvcmsoc291bmROYW1lKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgJiYgQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHNvdW5kTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImJnU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJnU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBub3JtYWxOZXR3b3JrKHNvdW5kTmFtZSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChzb3VuZE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJiZ1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZ1NvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiU2hha2VCcnVzaFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlNoYWtlQnJ1c2gucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiRG9uZVN0ZXBTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkRvbmVTdGVwU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJtb3ZlSXRlbVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlSXRlbVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJkcnlTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJ5U291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzaGFtcG9vU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoYW1wb29Tb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBcInRvb3RoUGFzdGUxU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvb3RoUGFzdGUxU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ0b290aFBhc3RlMlNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b290aFBhc3RlMlNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwid2hvb3NlU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndob29zZVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJobW1Tb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG1tU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIndhbGtTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2Fsa1NvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzcGlkZXJTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BpZGVyU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInNjYXJlU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjYXJlU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkludHJvRGVsaWdodFNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5JbnRyb0RlbGlnaHRTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RvcFNvdW5kKHNvdW5kTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoIChzb3VuZE5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImJnU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYmdTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJTaGFrZUJydXNoXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TaGFrZUJydXNoLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJEb25lU3RlcFNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Eb25lU3RlcFNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm1vdmVJdGVtU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUl0ZW1Tb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRyeVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyeVNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcInNoYW1wb29Tb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFtcG9vU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwidG9vdGhQYXN0ZTFTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50b290aFBhc3RlMVNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcInRvb3RoUGFzdGUyU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMudG9vdGhQYXN0ZTJTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIndob29zZVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLndob29zZVNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic3BpZGVyU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BpZGVyU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3YWxrU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMud2Fsa1NvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiaG1tU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuaG1tU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzY2FyZVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjYXJlU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJJbnRyb0RlbGlnaHRTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5JbnRyb0RlbGlnaHRTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0b3BBbGxTb3VuZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLlNoYWtlQnJ1c2guc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuRG9uZVN0ZXBTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy53aG9vc2VTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlSXRlbVNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmJnU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMud2Fsa1NvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLnNwaWRlclNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLnNjYXJlU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuSW50cm9EZWxpZ2h0U291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuaG1tU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuZHJ5U291bmQuc3RvcCgpXHJcbiAgICAgICAgdGhpcy5zaGFtcG9vU291bmQuc3RvcCgpXHJcbiAgICAgICAgdGhpcy50b290aFBhc3RlMVNvdW5kLnN0b3AoKVxyXG4gICAgICAgIHRoaXMudG9vdGhQYXN0ZTJTb3VuZC5zdG9wKClcclxuICAgIH1cclxufVxyXG4iXX0=
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
cc._RF.push(module, '0e71dUgp89ACJhqvD+hiH+q', 'Scratchable');
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
    this.percentToWin = 0.5;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxTY3JhdGNoYWJsZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImlzRG9uZSIsImlzV2luIiwiQm9vbGVhbiIsImVyYXNlclJhZGl1cyIsInR5cGUiLCJJbnQiLCJzdGFydCIsInBlcmNlbnRUb1dpbiIsIm1hc2siLCJnZXRDb21wb25lbnRJbkNoaWxkcmVuIiwiTWFzayIsImdyYXBoaWNzIiwiX2dyYXBoaWNzIiwiZmlsbENvbG9yIiwiY29sb3IiLCJyZXNldCIsImNhbGN1bGF0ZVByb2dyZXNzIiwiaXNTY3JhdGNoYWJsZSIsImhpdEl0ZW1Db3VudCIsInBvbHlnb25Qb2ludHNMaXN0IiwiZm9yRWFjaCIsIml0ZW0iLCJpc0hpdCIsInByb2dyZXNzIiwibGVuZ3RoIiwiZmlsbEluc3RhbnRseSIsImNvbXBsZXRlZCIsIm5vZGUiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJFdmVudEN1c3RvbSIsImNhbGxiYWNrRmxhZyIsImNsZWFyIiwidGVtcERyYXdQb2ludHMiLCJpbml0UG9seWdvbkxpc3QiLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwicHVzaCIsInJlY3QiLCJzY3JhdGNoSG9sZSIsInBvcyIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwic3RlbmNpbCIsImxlbiIsImNpcmNsZSIsImZpbGwiLCJ4RmxhZyIsInlGbGFnIiwicHJldlBvcyIsImN1clBvcyIsIm1vdmVUbyIsImxpbmVUbyIsImxpbmVXaWR0aCIsImxpbmVDYXAiLCJHcmFwaGljcyIsIkxpbmVDYXAiLCJST1VORCIsImxpbmVKb2luIiwiTGluZUpvaW4iLCJzdHJva2VDb2xvciIsInN0cm9rZSIsIkludGVyc2VjdGlvbiIsImxpbmVSZWN0IiwicmVzZXRQcm9ncmVzcyIsImNsZWFySW5zdGFudGx5IiwiaXNJbkJvdW5kIiwicG9pbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7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QyxNQUFsQyxFQUEwQzlCLElBQUksQ0FBQ21CLElBQS9DLENBRGhCO0FBRUQsT0FIRDtBQUlEO0FBQ0YsR0E3R007QUErR1B5QixFQUFBQSxhQUFhLEVBQUUseUJBQVk7QUFDekIsU0FBS0MsY0FBTDtBQUNBLFNBQUsvQyxpQkFBTCxHQUF5QixFQUF6QjtBQUNBLFNBQUtjLGNBQUwsR0FBc0IsRUFBdEI7QUFDQSxTQUFLVixRQUFMLEdBQWdCLENBQWhCO0FBQ0EsU0FBS1csZUFBTDtBQUNELEdBckhNO0FBdUhQaUMsRUFBQUEsU0FBUyxFQUFFLG1CQUFVQyxLQUFWLEVBQWlCO0FBQzFCLFdBQU8sSUFBUDtBQUNELEdBekhNO0FBMkhQRixFQUFBQSxjQUFjLEVBQUUsMEJBQVk7QUFDMUIsU0FBS3ZELFFBQUwsQ0FBY3FCLEtBQWQ7QUFDRCxHQTdITTtBQStIUFAsRUFBQUEsYUFBYSxFQUFFLHlCQUFZO0FBQ3pCLFNBQUtkLFFBQUwsQ0FBY3lDLE1BQWQsQ0FBcUIsQ0FBckIsRUFBd0IsQ0FBeEI7QUFDQSxTQUFLekMsUUFBTCxDQUFjNkIsSUFBZCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixLQUFLYixJQUFMLENBQVVTLEtBQW5DLEVBQTBDLEtBQUtULElBQUwsQ0FBVVcsTUFBcEQ7QUFDQSxTQUFLM0IsUUFBTCxDQUFjb0MsSUFBZDtBQUNEO0FBbklNLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgcHJvcGVydGllczoge1xuICAgIGlzRG9uZTogMCxcbiAgICBpc1dpbjogY2MuQm9vbGVhbixcbiAgICBlcmFzZXJSYWRpdXM6IHtcbiAgICAgIHR5cGU6IGNjLkludCxcbiAgICAgIGRlZmF1bHQ6IDYwLFxuICAgIH0sXG4gIH0sXG5cbiAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnBlcmNlbnRUb1dpbiA9IDAuNTtcbiAgICBsZXQgbWFzayA9IHRoaXMuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5NYXNrKTtcbiAgICB0aGlzLmdyYXBoaWNzID0gbWFzay5fZ3JhcGhpY3M7XG4gICAgdGhpcy5ncmFwaGljcy5maWxsQ29sb3IgPSBjYy5jb2xvcigyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH0sXG5cbiAgY2FsY3VsYXRlUHJvZ3Jlc3MoKSB7XG5cbiAgICBpZiAoIXRoaXMuaXNTY3JhdGNoYWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgaGl0SXRlbUNvdW50ID0gMDtcbiAgICB0aGlzLnBvbHlnb25Qb2ludHNMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmICghaXRlbS5pc0hpdCkgcmV0dXJuO1xuICAgICAgaGl0SXRlbUNvdW50ICs9IDE7XG4gICAgfSk7XG4gICAgdGhpcy5wcm9ncmVzcyA9IGhpdEl0ZW1Db3VudCAvIHRoaXMucG9seWdvblBvaW50c0xpc3QubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMucHJvZ3Jlc3MgPj0gdGhpcy5wZXJjZW50VG9XaW4pIHtcbiAgICAgIHRoaXMuaXNXaW4gPSB0cnVlO1xuICAgICAgdGhpcy5pc0RvbmUgPSAxO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzV2luKSB7XG4gICAgICB0aGlzLmZpbGxJbnN0YW50bHkoKTtcbiAgICAgIHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXNTY3JhdGNoYWJsZSA9IGZhbHNlO1xuICAgICAgdGhpcy5ub2RlLmRpc3BhdGNoRXZlbnQobmV3IGNjLkV2ZW50LkV2ZW50Q3VzdG9tKFwiY29tcGxldGVkXCIsIHRoaXMpKTtcbiAgICB9XG4gIH0sXG5cbiAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNhbGxiYWNrRmxhZyA9IHRydWU7XG4gICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xuICAgIHRoaXMudGVtcERyYXdQb2ludHMgPSBbXTtcbiAgICB0aGlzLnBvbHlnb25Qb2ludHNMaXN0ID0gW107XG4gICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlzU2NyYXRjaGFibGUgPSB0cnVlO1xuICAgIHRoaXMuaW5pdFBvbHlnb25MaXN0KCk7XG4gIH0sXG5cbiAgaW5pdFBvbHlnb25MaXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLm5vZGUud2lkdGg7IHggKz0gdGhpcy5lcmFzZXJSYWRpdXMpIHtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5ub2RlLmhlaWdodDsgeSArPSB0aGlzLmVyYXNlclJhZGl1cykge1xuICAgICAgICB0aGlzLnBvbHlnb25Qb2ludHNMaXN0LnB1c2goe1xuICAgICAgICAgIHJlY3Q6IGNjLnJlY3QoXG4gICAgICAgICAgICB4IC0gdGhpcy5ub2RlLndpZHRoIC8gMixcbiAgICAgICAgICAgIHkgLSB0aGlzLm5vZGUuaGVpZ2h0IC8gMixcbiAgICAgICAgICAgIHRoaXMuZXJhc2VyUmFkaXVzLFxuICAgICAgICAgICAgdGhpcy5lcmFzZXJSYWRpdXNcbiAgICAgICAgICApLFxuICAgICAgICAgIGlzSGl0OiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHNjcmF0Y2hIb2xlOiBmdW5jdGlvbiAocG9zKSB7XG4gICAgcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XG4gICAgbGV0IHN0ZW5jaWwgPSB0aGlzLmdyYXBoaWNzO1xuICAgIGNvbnN0IGxlbiA9IHRoaXMudGVtcERyYXdQb2ludHMubGVuZ3RoO1xuICAgIHRoaXMudGVtcERyYXdQb2ludHMucHVzaChwb3MpO1xuXG4gICAgdGhpcy5jYWxjdWxhdGVQcm9ncmVzcygpO1xuXG4gICAgaWYgKGxlbiA8PSAxKSB7XG4gICAgICBzdGVuY2lsLmNpcmNsZShwb3MueCwgcG9zLnksIHRoaXMuZXJhc2VyUmFkaXVzIC8gMik7XG4gICAgICBzdGVuY2lsLmZpbGwoKTtcblxuICAgICAgdGhpcy5wb2x5Z29uUG9pbnRzTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmlzSGl0KSByZXR1cm47XG4gICAgICAgIGNvbnN0IHhGbGFnID1cbiAgICAgICAgICBwb3MueCA+IGl0ZW0ucmVjdC54ICYmIHBvcy54IDwgaXRlbS5yZWN0LnggKyBpdGVtLnJlY3Qud2lkdGg7XG4gICAgICAgIGNvbnN0IHlGbGFnID1cbiAgICAgICAgICBwb3MueSA+IGl0ZW0ucmVjdC55ICYmIHBvcy55IDwgaXRlbS5yZWN0LnkgKyBpdGVtLnJlY3QuaGVpZ2h0O1xuICAgICAgICBpZiAoeEZsYWcgJiYgeUZsYWcpIGl0ZW0uaXNIaXQgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBwcmV2UG9zID0gdGhpcy50ZW1wRHJhd1BvaW50c1tsZW4gLSAyXTtcbiAgICAgIGxldCBjdXJQb3MgPSB0aGlzLnRlbXBEcmF3UG9pbnRzW2xlbiAtIDFdO1xuXG4gICAgICBzdGVuY2lsLm1vdmVUbyhwcmV2UG9zLngsIHByZXZQb3MueSk7XG4gICAgICBzdGVuY2lsLmxpbmVUbyhjdXJQb3MueCwgY3VyUG9zLnkpO1xuICAgICAgc3RlbmNpbC5saW5lV2lkdGggPSB0aGlzLmVyYXNlclJhZGl1cztcbiAgICAgIHN0ZW5jaWwubGluZUNhcCA9IGNjLkdyYXBoaWNzLkxpbmVDYXAuUk9VTkQ7XG4gICAgICBzdGVuY2lsLmxpbmVKb2luID0gY2MuR3JhcGhpY3MuTGluZUpvaW4uUk9VTkQ7XG4gICAgICBzdGVuY2lsLnN0cm9rZUNvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcbiAgICAgIHN0ZW5jaWwuc3Ryb2tlKCk7XG5cbiAgICAgIHRoaXMucG9seWdvblBvaW50c0xpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLmlzSGl0ID1cbiAgICAgICAgICBpdGVtLmlzSGl0IHx8IGNjLkludGVyc2VjdGlvbi5saW5lUmVjdChwcmV2UG9zLCBjdXJQb3MsIGl0ZW0ucmVjdCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgcmVzZXRQcm9ncmVzczogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2xlYXJJbnN0YW50bHkoKTtcbiAgICB0aGlzLnBvbHlnb25Qb2ludHNMaXN0ID0gW107XG4gICAgdGhpcy50ZW1wRHJhd1BvaW50cyA9IFtdO1xuICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgIHRoaXMuaW5pdFBvbHlnb25MaXN0KCk7XG4gIH0sXG5cbiAgaXNJbkJvdW5kOiBmdW5jdGlvbiAocG9pbnQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcblxuICBjbGVhckluc3RhbnRseTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgfSxcblxuICBmaWxsSW5zdGFudGx5OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5ncmFwaGljcy5tb3ZlVG8oMCwgMCk7XG4gICAgdGhpcy5ncmFwaGljcy5yZWN0KDAsIDAsIHRoaXMubm9kZS53aWR0aCwgdGhpcy5ub2RlLmhlaWdodCk7XG4gICAgdGhpcy5ncmFwaGljcy5maWxsKCk7XG4gIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/NodeContanier.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '69c3bsb3chPmrdB+4j36B25', 'NodeContanier');
// Script/Controller/NodeContanier.ts

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
var NodeContainer = /** @class */ (function (_super) {
    __extends(NodeContainer, _super);
    function NodeContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GamePlay = null;
        _this.UI = null;
        _this.Scratchable = null;
        // Bg
        _this.Bg_2 = null;
        _this.HideMask = null;
        // UI
        _this.intro = null;
        _this.MainGame = null;
        // Tools
        _this.dryer = null;
        _this.toothPaste = null;
        _this.waterTooth = null;
        _this.bubblePoints = [];
        _this.spine_Bubbles = [];
        _this.spine_WaterBubbles = [];
        _this.Water_bubblePoints = [];
        return _this;
    }
    NodeContainer.prototype.onLoad = function () {
        constants_1.Constants.toothPaste_Points = this.bubblePoints;
        constants_1.Constants.Water_Points = this.Water_bubblePoints;
        constants_1.Constants.spine_Bubbles = this.spine_Bubbles;
        constants_1.Constants.spine_WaterBubbles = this.spine_WaterBubbles;
    };
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "GamePlay", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "UI", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Scratchable", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Bg_2", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "HideMask", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "intro", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "MainGame", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "dryer", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "toothPaste", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "waterTooth", void 0);
    __decorate([
        property([cc.Node])
    ], NodeContainer.prototype, "bubblePoints", void 0);
    __decorate([
        property([sp.Skeleton])
    ], NodeContainer.prototype, "spine_Bubbles", void 0);
    __decorate([
        property([sp.Skeleton])
    ], NodeContainer.prototype, "spine_WaterBubbles", void 0);
    __decorate([
        property([cc.Node])
    ], NodeContainer.prototype, "Water_bubblePoints", void 0);
    NodeContainer = __decorate([
        ccclass
    ], NodeContainer);
    return NodeContainer;
}(cc.Component));
exports.default = NodeContainer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxOb2RlQ29udGFuaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQWtEQztRQS9DRyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFFBQUUsR0FBWSxJQUFJLENBQUM7UUFFbkIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsS0FBSztRQUVMLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixLQUFLO1FBRUwsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLFFBQVE7UUFFUixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBSTNCLGtCQUFZLEdBQWMsRUFBRSxDQUFDO1FBRTdCLG1CQUFhLEdBQWtCLEVBQUUsQ0FBQztRQUVsQyx3QkFBa0IsR0FBa0IsRUFBRSxDQUFDO1FBRXZDLHdCQUFrQixHQUFjLEVBQUUsQ0FBQzs7SUFVdkMsQ0FBQztJQVBhLDhCQUFNLEdBQWhCO1FBQ0kscUJBQVMsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ2hELHFCQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUNqRCxxQkFBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzdDLHFCQUFTLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBRTNELENBQUM7SUE5Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNDO0lBRW5CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ1U7SUFLNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNPO0lBS3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDTztJQUt6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDUztJQUkzQjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzt1REFDUztJQUU3QjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3REFDVTtJQUVsQztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs2REFDZTtJQUV2QztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs2REFDZTtJQXhDbEIsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQWtEakM7SUFBRCxvQkFBQztDQWxERCxBQWtEQyxDQWxEMEMsRUFBRSxDQUFDLFNBQVMsR0FrRHREO2tCQWxEb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGVDb250YWluZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgR2FtZVBsYXk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBVSTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFNjcmF0Y2hhYmxlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy8gQmdcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQmdfMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEhpZGVNYXNrOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIFxyXG5cclxuICAgIC8vIFVJXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGludHJvOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgTWFpbkdhbWU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBUb29sc1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkcnllcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRvb3RoUGFzdGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB3YXRlclRvb3RoOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIGJ1YmJsZVBvaW50czogY2MuTm9kZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoW3NwLlNrZWxldG9uXSlcclxuICAgIHNwaW5lX0J1YmJsZXM6IHNwLlNrZWxldG9uW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShbc3AuU2tlbGV0b25dKVxyXG4gICAgc3BpbmVfV2F0ZXJCdWJibGVzOiBzcC5Ta2VsZXRvbltdID0gW107XHJcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gICAgV2F0ZXJfYnViYmxlUG9pbnRzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBDb25zdGFudHMudG9vdGhQYXN0ZV9Qb2ludHMgPSB0aGlzLmJ1YmJsZVBvaW50cztcclxuICAgICAgICBDb25zdGFudHMuV2F0ZXJfUG9pbnRzID0gdGhpcy5XYXRlcl9idWJibGVQb2ludHM7XHJcbiAgICAgICAgQ29uc3RhbnRzLnNwaW5lX0J1YmJsZXMgPSB0aGlzLnNwaW5lX0J1YmJsZXM7XHJcbiAgICAgICAgQ29uc3RhbnRzLnNwaW5lX1dhdGVyQnViYmxlcyA9IHRoaXMuc3BpbmVfV2F0ZXJCdWJibGVzO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==
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
cc._RF.push(module, '459a6fkmHFH5Z+5+z1O55SB', 'GameController');
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
        constants_1.Constants.ironSource.isEndGame = true;
        this.AudioManager.stopAllSound();
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
                mraid.open("https://play.google.com/store/apps/details?id=com.an.beauty.makeoverasmr");
                return;
            }
            if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
                mraid.open("https://itunes.apple.com/us/app/id6449269733?mt=8");
                return;
            }
            mraid.open("https://play.google.com/store/apps/details?id=com.an.beauty.makeoverasmr");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUc1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQyxrQ0FBWTtJQUFoRDtRQUFBLHFFQXNEQztRQXBERyxrQkFBWSxHQUFpQixJQUFJLENBQUM7O0lBb0R0QyxDQUFDO0lBbERhLCtCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUVTLDhCQUFLLEdBQWY7UUFDSSxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRU0sc0NBQWEsR0FBcEI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLHFCQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqQyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVuQyx5QkFBeUI7UUFDekIsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQ3JDLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbEMsT0FBTztTQUNWO1FBRUQsOEJBQThCO1FBQzlCLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLFdBQVcsRUFBRTtZQUNqQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZixPQUFPO1NBQ1Y7UUFFRCwrQkFBK0I7UUFDL0IsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixPQUFPO1NBQ1Y7UUFFRCxrQ0FBa0M7UUFDbEMsSUFBSSxPQUFNLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQy9ELEtBQUssQ0FBQyxJQUFJLENBQUMsMEVBQTBFLENBQUMsQ0FBQztnQkFDdkYsT0FBTzthQUNWO1lBRUQsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtnQkFDdEYsS0FBSyxDQUFDLElBQUksQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO2dCQUNoRSxPQUFPO2FBQ1Y7WUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLDBFQUEwRSxDQUFDLENBQUM7WUFDdkYsT0FBTztTQUNWO1FBQ0QsMkVBQTJFO1FBQzNFLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFuREQ7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQzt3REFDVztJQUZ6QixjQUFjO1FBRDFCLE9BQU87T0FDSyxjQUFjLENBc0QxQjtJQUFELHFCQUFDO0NBdERELEFBc0RDLENBdERtQyxFQUFFLENBQUMsU0FBUyxHQXNEL0M7QUF0RFksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbiBcclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIEdhbWVDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnN0YWxsSGFuZGxlKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5zdGFsbFwiKTtcclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BBbGxTb3VuZCgpO1xyXG4gICAgICAgIHdpbmRvdy5nYW1lRW5kICYmIHdpbmRvdy5nYW1lRW5kKCk7XHJcblxyXG4gICAgICAgIC8vSWYgYWQgbmV0d29yayBpcyB0aWt0b2tcclxuICAgICAgICBpZiAodHlwZW9mIChwbGF5YWJsZVNESykgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB3aW5kb3cucGxheWFibGVTREsub3BlbkFwcFN0b3JlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdvcmsgaXMgZ29vZ2xlIGFkc1xyXG4gICAgICAgIGlmICh0eXBlb2YgKEV4aXRBcGkpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgRXhpdEFwaS5leGl0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdyb2sgaXMgaXJvbnNvdXJjZXNcclxuICAgICAgICBpZiAodHlwZW9mIChkYXBpKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGRhcGkub3BlblN0b3JlVXJsKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdvcmsgc3VwcG9ydCBNUkFJRCAyLjBcclxuICAgICAgICBpZiAodHlwZW9mKG1yYWlkKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQgfHwgY2Muc3lzLm9zID09IGNjLnN5cy5BTkRST0lEKSB7XHJcbiAgICAgICAgICAgICAgICBtcmFpZC5vcGVuKFwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5hbi5iZWF1dHkubWFrZW92ZXJhc21yXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MgfHwgY2Muc3lzLm9zID09IGNjLnN5cy5JUEhPTkUgfHwgY2Muc3lzLm9zID09IGNjLnN5cy5JUEFEKSB7XHJcbiAgICAgICAgICAgICAgICBtcmFpZC5vcGVuKFwiaHR0cHM6Ly9pdHVuZXMuYXBwbGUuY29tL3VzL2FwcC9pZDY0NDkyNjk3MzM/bXQ9OFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbXJhaWQub3BlbihcImh0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20uYW4uYmVhdXR5Lm1ha2VvdmVyYXNtclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBJZiBhZCBuZXR3b3JrIGlzIG1pbmR3b3JrLiB3aW5kb3cgYWx3YXkgYXZhaWFibGUgc28gc2tpcCB1bmRlZmluZWQgY2hlY2tcclxuICAgICAgICB3aW5kb3cuaW5zdGFsbCAmJiB3aW5kb3cuaW5zdGFsbCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=
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
cc._RF.push(module, '85711X2lIBGPIPjaJXFSYaE', 'TouchAreaController');
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
exports.TouchAreaController = void 0;
var Anims_1 = require("../Data/Anims");
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var GamePlay_1 = require("./GamePlay");
var IronSource_1 = require("./IronSource");
var NodeContanier_1 = require("./NodeContanier");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.IronSource = null;
        _this.NodeContainer = null;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.GamePlay = null;
        _this.Btn_1 = null;
        _this.Btn_2 = null;
        // state
        _this.isTouch = false;
        _this.DryerPoint = null;
        _this.DryerSpine = null;
        _this.DryerToMouthArea = null;
        _this.toothPastePoint = null;
        _this.toothPasteSpine = null;
        _this.toothPasteHeadPoint = null;
        _this.WaterBubblePoint = null;
        _this.WaterBubbleSpine = null;
        _this.WaterBubbleHeadPoint = null;
        return _this;
        // private setCurrentPosCleanser(pos): void {
        //   let posConverted = this.node.convertToNodeSpaceAR(pos);
        //   this.NodeContainer.Point_Cleanser.setPosition(posConverted)
        // }
        // private setCurrentPosTweezers(pos): void {
        //   this.NodeContainer.Point_Tweezers.x = (pos.x - cc.winSize.width / 2) - Constants.Responsive.calculatedX;
        //   this.NodeContainer.Point_Tweezers.y = (pos.y - cc.winSize.height / 2) - Constants.Responsive.calculatedY;
        // }
    }
    TouchAreaController.prototype.onLoad = function () {
    };
    TouchAreaController.prototype.initVarialbes = function () {
        this.DryerPoint = this.NodeContainer.dryer.getChildByName("Point_Dryer");
        this.DryerSpine = this.NodeContainer.dryer.getChildByName("sp_dryer").getComponent(sp.Skeleton);
        this.DryerToMouthArea = this.NodeContainer.dryer.getChildByName("Point_Mouth");
        this.toothPastePoint = this.NodeContainer.toothPaste.getChildByName("Point_Tooth");
        this.toothPasteSpine = this.NodeContainer.toothPaste.getChildByName("sp_Tooth").getComponent(sp.Skeleton);
        this.toothPasteHeadPoint = this.NodeContainer.toothPaste.getChildByName("HeadPoint_Tooth");
        this.WaterBubblePoint = this.NodeContainer.waterTooth.getChildByName("Point_WaterTooth");
        this.WaterBubbleSpine = this.NodeContainer.waterTooth.getChildByName("sp_WaterTooth").getComponent(sp.Skeleton);
        this.WaterBubbleHeadPoint = this.NodeContainer.waterTooth.getChildByName("HeadPoint_WaterTooth");
    };
    TouchAreaController.prototype.start = function () {
        this.initVarialbes();
        this.registerEvent();
    };
    TouchAreaController.prototype.registerEvent = function () {
        this.DryerPoint.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.DryerPoint.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.DryerPoint.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.DryerPoint.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.toothPastePoint.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.toothPastePoint.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.toothPastePoint.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.toothPastePoint.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.WaterBubblePoint.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.WaterBubblePoint.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.WaterBubblePoint.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.WaterBubblePoint.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.Btn_1.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        this.Btn_2.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        // this.NodeContainer.HideMask.on(cc.Node.EventType.TOUCH_START, this.hideMaskTouchStart, this);
    };
    TouchAreaController.prototype.hideMaskTouchStart = function (e) {
        // mtg & applovin
        // Constants.maggotRemoved >= 1 && this.GameController.installHandle();
        // ironsource
        // this.IronSource.handleIronSourcePlaySound();
        // mtg & applovin
        // Constants.isToStore && this.GameController.installHandle();
    };
    TouchAreaController.prototype.enableTouch = function () {
        constants_1.Constants.isCanTouch = false;
    };
    TouchAreaController.prototype.touchStart = function (e) {
        constants_1.Constants.isToStore && this.GameController.installHandle();
        if (!constants_1.Constants.isCanTouch)
            return;
        this.WaterBubbleSpine.setAnimation(0, Anims_1.SpineAnims.waterToothAnim.Action, true);
        constants_1.Constants.isDoneToothPaste && this.AudioManager.playSound(constants_1.Constants.SoundTrack.toothPaste2Sound);
        this.GamePlay.hand.getComponent(cc.Animation).stop();
        this.GamePlay.hand.opacity = 0;
    };
    TouchAreaController.prototype.touchMove = function (e) {
        if (!constants_1.Constants.isCanTouch || constants_1.Constants.ironSource.isEndGame)
            return;
        var pos = e.getLocation();
        var posConverted = this.node.convertToNodeSpaceAR(pos);
        var debug = false;
        this.debug(debug, 3, posConverted, pos);
    };
    TouchAreaController.prototype.debug = function (isDebug, toolToDebug, posConverted, pos) {
        if (isDebug) {
            switch (toolToDebug) {
                case 1:
                    this.moveDryer(posConverted, pos);
                    break;
                case 2:
                    this.moveToothPaste(posConverted, pos);
                    break;
                case 3:
                    this.moveWaterBrush(posConverted, pos);
                    break;
                default:
                    break;
            }
            return;
        }
        else {
            !constants_1.Constants.isDoneDryer && this.moveDryer(posConverted, pos);
            constants_1.Constants.isDoneDryer && !constants_1.Constants.isDoneToothPaste && this.moveToothPaste(posConverted, pos);
            constants_1.Constants.isDoneToothPaste && !constants_1.Constants.isDoneWaterBrush && this.moveWaterBrush(posConverted, pos);
        }
    };
    TouchAreaController.prototype.touchEnd = function (e) {
        this.isTouch = false;
        var pos = e.getLocation();
        this.WaterBubbleSpine.setAnimation(0, Anims_1.SpineAnims.waterToothAnim.Idle, true);
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.toothPaste2Sound);
    };
    TouchAreaController.prototype.moveDryer = function (posConverted, pos) {
        this.DryerPoint.setPosition(posConverted.x, posConverted.y);
        this.DryerSpine.node.setPosition(posConverted.x, posConverted.y);
    };
    TouchAreaController.prototype.moveToothPaste = function (posConverted, pos) {
        this.toothPastePoint.setPosition(posConverted.x, posConverted.y);
        this.toothPasteHeadPoint.setPosition(posConverted.x - 80, posConverted.y);
        this.toothPasteSpine.node.x = (pos.x - cc.winSize.width / 2) - 100;
        this.toothPasteSpine.node.y = (pos.y - cc.winSize.height / 2) - 15;
        var bdx = this.toothPasteHeadPoint.getBoundingBox();
        this.GamePlay.checkCollideBubblePoints(bdx);
    };
    TouchAreaController.prototype.moveWaterBrush = function (posConverted, pos) {
        console.log("check");
        this.WaterBubblePoint.setPosition(posConverted.x, posConverted.y);
        this.WaterBubbleHeadPoint.setPosition(posConverted.x - 105, posConverted.y + 110);
        this.WaterBubbleSpine.node.x = (pos.x - cc.winSize.width / 2) - 90;
        this.WaterBubbleSpine.node.y = (pos.y - cc.winSize.height / 2) + 100;
        var bdx = this.WaterBubbleHeadPoint.getBoundingBox();
        this.GamePlay.checkBrushTeeth(bdx);
    };
    __decorate([
        property(IronSource_1.default)
    ], TouchAreaController.prototype, "IronSource", void 0);
    __decorate([
        property(NodeContanier_1.default)
    ], TouchAreaController.prototype, "NodeContainer", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], TouchAreaController.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], TouchAreaController.prototype, "GameController", void 0);
    __decorate([
        property(GamePlay_1.default)
    ], TouchAreaController.prototype, "GamePlay", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "Btn_1", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "Btn_2", void 0);
    TouchAreaController = __decorate([
        ccclass
    ], TouchAreaController);
    return TouchAreaController;
}(cc.Component));
exports.TouchAreaController = TouchAreaController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBMkM7QUFDM0MsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUNsRCxtREFBa0Q7QUFDbEQsdUNBQWtDO0FBQ2xDLDJDQUFzQztBQUN0QyxpREFBNEM7QUFFdEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsdUNBQVk7SUFBckQ7UUFBQSxxRUFpTUM7UUFoTUMsWUFBWTtRQUVaLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQWtCLElBQUksQ0FBQztRQUVwQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFHMUIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFFBQVE7UUFDUixhQUFPLEdBQVksS0FBSyxDQUFDO1FBRXpCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGdCQUFVLEdBQWdCLElBQUksQ0FBQztRQUMvQixzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFFakMscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFDaEMscUJBQWUsR0FBZ0IsSUFBSSxDQUFDO1FBQ3BDLHlCQUFtQixHQUFZLElBQUksQ0FBQztRQUVwQyxzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFDakMsc0JBQWdCLEdBQWdCLElBQUksQ0FBQztRQUNyQywwQkFBb0IsR0FBWSxJQUFJLENBQUM7O1FBeUpyQyw2Q0FBNkM7UUFDN0MsNERBQTREO1FBQzVELGdFQUFnRTtRQUNoRSxJQUFJO1FBRUosNkNBQTZDO1FBQzdDLDZHQUE2RztRQUM3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RUFBRSxDQUFDLElBQUksQ0FBQztzREFDSTtJQWhCWCxtQkFBbUI7UUFEL0IsT0FBTztPQUNLLG1CQUFtQixDQWlNL0I7SUFBRCwwQkFBQztDQWpNRCxBQWlNQyxDQWpNd0MsRUFBRSxDQUFDLFNBQVMsR0FpTXBEO0FBak1ZLGtEQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNwaW5lQW5pbXMgfSBmcm9tIFwiLi4vRGF0YS9Bbmltc1wiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBHYW1lUGxheSBmcm9tIFwiLi9HYW1lUGxheVwiO1xyXG5pbXBvcnQgSXJvblNvdXJjZSBmcm9tIFwiLi9Jcm9uU291cmNlXCI7XHJcbmltcG9ydCBOb2RlQ29udGFpbmVyIGZyb20gXCIuL05vZGVDb250YW5pZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgVG91Y2hBcmVhQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgLy8gQ29tcG9uZW50XHJcbiAgQHByb3BlcnR5KElyb25Tb3VyY2UpXHJcbiAgSXJvblNvdXJjZTogSXJvblNvdXJjZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KE5vZGVDb250YWluZXIpXHJcbiAgTm9kZUNvbnRhaW5lcjogTm9kZUNvbnRhaW5lciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVQbGF5KVxyXG4gIEdhbWVQbGF5OiBHYW1lUGxheSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIEJ0bl8xOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBCdG5fMjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIC8vIHN0YXRlXHJcbiAgaXNUb3VjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBEcnllclBvaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuICBEcnllclNwaW5lOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgRHJ5ZXJUb01vdXRoQXJlYTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIHRvb3RoUGFzdGVQb2ludDogY2MuTm9kZSA9IG51bGw7XHJcbiAgdG9vdGhQYXN0ZVNwaW5lOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgdG9vdGhQYXN0ZUhlYWRQb2ludDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIFdhdGVyQnViYmxlUG9pbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gIFdhdGVyQnViYmxlU3BpbmU6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICBXYXRlckJ1YmJsZUhlYWRQb2ludDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xyXG5cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGluaXRWYXJpYWxiZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLkRyeWVyUG9pbnQgPSB0aGlzLk5vZGVDb250YWluZXIuZHJ5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJQb2ludF9EcnllclwiKTtcclxuICAgIHRoaXMuRHJ5ZXJTcGluZSA9IHRoaXMuTm9kZUNvbnRhaW5lci5kcnllci5nZXRDaGlsZEJ5TmFtZShcInNwX2RyeWVyXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICB0aGlzLkRyeWVyVG9Nb3V0aEFyZWEgPSB0aGlzLk5vZGVDb250YWluZXIuZHJ5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJQb2ludF9Nb3V0aFwiKTtcclxuXHJcbiAgICB0aGlzLnRvb3RoUGFzdGVQb2ludCA9IHRoaXMuTm9kZUNvbnRhaW5lci50b290aFBhc3RlLmdldENoaWxkQnlOYW1lKFwiUG9pbnRfVG9vdGhcIik7XHJcbiAgICB0aGlzLnRvb3RoUGFzdGVTcGluZSA9IHRoaXMuTm9kZUNvbnRhaW5lci50b290aFBhc3RlLmdldENoaWxkQnlOYW1lKFwic3BfVG9vdGhcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgIHRoaXMudG9vdGhQYXN0ZUhlYWRQb2ludCA9IHRoaXMuTm9kZUNvbnRhaW5lci50b290aFBhc3RlLmdldENoaWxkQnlOYW1lKFwiSGVhZFBvaW50X1Rvb3RoXCIpO1xyXG5cclxuICAgIHRoaXMuV2F0ZXJCdWJibGVQb2ludCA9IHRoaXMuTm9kZUNvbnRhaW5lci53YXRlclRvb3RoLmdldENoaWxkQnlOYW1lKFwiUG9pbnRfV2F0ZXJUb290aFwiKTtcclxuICAgIHRoaXMuV2F0ZXJCdWJibGVTcGluZSA9IHRoaXMuTm9kZUNvbnRhaW5lci53YXRlclRvb3RoLmdldENoaWxkQnlOYW1lKFwic3BfV2F0ZXJUb290aFwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgdGhpcy5XYXRlckJ1YmJsZUhlYWRQb2ludCA9IHRoaXMuTm9kZUNvbnRhaW5lci53YXRlclRvb3RoLmdldENoaWxkQnlOYW1lKFwiSGVhZFBvaW50X1dhdGVyVG9vdGhcIik7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5pbml0VmFyaWFsYmVzKCk7XHJcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVyRXZlbnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLkRyeWVyUG9pbnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICB0aGlzLkRyeWVyUG9pbnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgdGhpcy5EcnllclBvaW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XHJcbiAgICB0aGlzLkRyeWVyUG9pbnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLnRvb3RoUGFzdGVQb2ludC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgIHRoaXMudG9vdGhQYXN0ZVBvaW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgIHRoaXMudG9vdGhQYXN0ZVBvaW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XHJcbiAgICB0aGlzLnRvb3RoUGFzdGVQb2ludC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMuV2F0ZXJCdWJibGVQb2ludC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgIHRoaXMuV2F0ZXJCdWJibGVQb2ludC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICB0aGlzLldhdGVyQnViYmxlUG9pbnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuICAgIHRoaXMuV2F0ZXJCdWJibGVQb2ludC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xyXG5cclxuXHJcbiAgICB0aGlzLkJ0bl8xLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUsIHRoaXMpO1xyXG4gICAgdGhpcy5CdG5fMi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlLCB0aGlzKTtcclxuICAgIC8vIHRoaXMuTm9kZUNvbnRhaW5lci5IaWRlTWFzay5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5oaWRlTWFza1RvdWNoU3RhcnQsIHRoaXMpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaGlkZU1hc2tUb3VjaFN0YXJ0KGU6IGFueSk6IHZvaWQge1xyXG4gICAgLy8gbXRnICYgYXBwbG92aW5cclxuICAgIC8vIENvbnN0YW50cy5tYWdnb3RSZW1vdmVkID49IDEgJiYgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlKCk7XHJcblxyXG4gICAgLy8gaXJvbnNvdXJjZVxyXG4gICAgLy8gdGhpcy5Jcm9uU291cmNlLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTtcclxuXHJcbiAgICAvLyBtdGcgJiBhcHBsb3ZpblxyXG4gICAgLy8gQ29uc3RhbnRzLmlzVG9TdG9yZSAmJiB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGVuYWJsZVRvdWNoKCk6IHZvaWQge1xyXG4gICAgQ29uc3RhbnRzLmlzQ2FuVG91Y2ggPSBmYWxzZTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHRvdWNoU3RhcnQoZTogYW55KTogdm9pZCB7XHJcbiAgICBDb25zdGFudHMuaXNUb1N0b3JlICYmIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG4gICAgaWYgKCFDb25zdGFudHMuaXNDYW5Ub3VjaCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuV2F0ZXJCdWJibGVTcGluZS5zZXRBbmltYXRpb24oMCwgU3BpbmVBbmltcy53YXRlclRvb3RoQW5pbS5BY3Rpb24sIHRydWUpO1xyXG5cclxuICAgIENvbnN0YW50cy5pc0RvbmVUb290aFBhc3RlICYmIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay50b290aFBhc3RlMlNvdW5kKTtcclxuICAgIHRoaXMuR2FtZVBsYXkuaGFuZC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5zdG9wKCk7XHJcbiAgICB0aGlzLkdhbWVQbGF5LmhhbmQub3BhY2l0eSA9IDA7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSB0b3VjaE1vdmUoZTogY2MuVG91Y2gpOiB2b2lkIHtcclxuICAgIGlmICghQ29uc3RhbnRzLmlzQ2FuVG91Y2ggfHwgQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNFbmRHYW1lKSByZXR1cm47XHJcbiAgICBsZXQgcG9zID0gZS5nZXRMb2NhdGlvbigpO1xyXG4gICAgbGV0IHBvc0NvbnZlcnRlZCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG5cclxuICAgIGxldCBkZWJ1ZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5kZWJ1ZyhkZWJ1ZywgMywgcG9zQ29udmVydGVkLCBwb3MpXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBkZWJ1Zyhpc0RlYnVnOiBib29sZWFuLCB0b29sVG9EZWJ1ZzogbnVtYmVyLCBwb3NDb252ZXJ0ZWQ6IGNjLlZlYzIsIHBvczogY2MuVmVjMik6IHZvaWQge1xyXG4gICAgaWYgKGlzRGVidWcpIHtcclxuICAgICAgc3dpdGNoICh0b29sVG9EZWJ1Zykge1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgIHRoaXMubW92ZURyeWVyKHBvc0NvbnZlcnRlZCwgcG9zKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgIHRoaXMubW92ZVRvb3RoUGFzdGUocG9zQ29udmVydGVkLCBwb3MpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgdGhpcy5tb3ZlV2F0ZXJCcnVzaChwb3NDb252ZXJ0ZWQsIHBvcyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgIUNvbnN0YW50cy5pc0RvbmVEcnllciAmJiB0aGlzLm1vdmVEcnllcihwb3NDb252ZXJ0ZWQsIHBvcyk7XHJcbiAgICAgIENvbnN0YW50cy5pc0RvbmVEcnllciAmJiAhQ29uc3RhbnRzLmlzRG9uZVRvb3RoUGFzdGUgJiYgdGhpcy5tb3ZlVG9vdGhQYXN0ZShwb3NDb252ZXJ0ZWQsIHBvcyk7XHJcbiAgICAgIENvbnN0YW50cy5pc0RvbmVUb290aFBhc3RlICYmICFDb25zdGFudHMuaXNEb25lV2F0ZXJCcnVzaCAmJiB0aGlzLm1vdmVXYXRlckJydXNoKHBvc0NvbnZlcnRlZCwgcG9zKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHRvdWNoRW5kKGU6IGNjLlRvdWNoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzVG91Y2ggPSBmYWxzZTtcclxuICAgIGxldCBwb3MgPSBlLmdldExvY2F0aW9uKCk7XHJcbiAgICB0aGlzLldhdGVyQnViYmxlU3BpbmUuc2V0QW5pbWF0aW9uKDAsIFNwaW5lQW5pbXMud2F0ZXJUb290aEFuaW0uSWRsZSwgdHJ1ZSk7XHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5zdG9wU291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2sudG9vdGhQYXN0ZTJTb3VuZCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBtb3ZlRHJ5ZXIocG9zQ29udmVydGVkOiBjYy5WZWMyLCBwb3M6IGNjLlZlYzIpOiB2b2lkIHtcclxuICAgIHRoaXMuRHJ5ZXJQb2ludC5zZXRQb3NpdGlvbihwb3NDb252ZXJ0ZWQueCwgcG9zQ29udmVydGVkLnkpO1xyXG4gICAgdGhpcy5EcnllclNwaW5lLm5vZGUuc2V0UG9zaXRpb24ocG9zQ29udmVydGVkLngsIHBvc0NvbnZlcnRlZC55KTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIG1vdmVUb290aFBhc3RlKHBvc0NvbnZlcnRlZDogY2MuVmVjMiwgcG9zOiBjYy5WZWMyKTogdm9pZCB7XHJcbiAgICB0aGlzLnRvb3RoUGFzdGVQb2ludC5zZXRQb3NpdGlvbihwb3NDb252ZXJ0ZWQueCwgcG9zQ29udmVydGVkLnkpO1xyXG4gICAgdGhpcy50b290aFBhc3RlSGVhZFBvaW50LnNldFBvc2l0aW9uKHBvc0NvbnZlcnRlZC54IC0gODAsIHBvc0NvbnZlcnRlZC55KTtcclxuICAgIHRoaXMudG9vdGhQYXN0ZVNwaW5lLm5vZGUueCA9IChwb3MueCAtIGNjLndpblNpemUud2lkdGggLyAyKSAtIDEwMDtcclxuICAgIHRoaXMudG9vdGhQYXN0ZVNwaW5lLm5vZGUueSA9IChwb3MueSAtIGNjLndpblNpemUuaGVpZ2h0IC8gMikgLSAxNTtcclxuXHJcbiAgICBsZXQgYmR4ID0gdGhpcy50b290aFBhc3RlSGVhZFBvaW50LmdldEJvdW5kaW5nQm94KCk7XHJcbiAgICB0aGlzLkdhbWVQbGF5LmNoZWNrQ29sbGlkZUJ1YmJsZVBvaW50cyhiZHgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgbW92ZVdhdGVyQnJ1c2gocG9zQ29udmVydGVkOiBjYy5WZWMyLCBwb3M6IGNjLlZlYzIpIDogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNoZWNrXCIpO1xyXG4gICAgXHJcbiAgICB0aGlzLldhdGVyQnViYmxlUG9pbnQuc2V0UG9zaXRpb24ocG9zQ29udmVydGVkLngsIHBvc0NvbnZlcnRlZC55KTtcclxuICAgIHRoaXMuV2F0ZXJCdWJibGVIZWFkUG9pbnQuc2V0UG9zaXRpb24ocG9zQ29udmVydGVkLnggLSAxMDUsIHBvc0NvbnZlcnRlZC55ICsgMTEwKTtcclxuICAgIHRoaXMuV2F0ZXJCdWJibGVTcGluZS5ub2RlLnggPSAocG9zLnggLSBjYy53aW5TaXplLndpZHRoIC8gMikgLSA5MDtcclxuICAgIHRoaXMuV2F0ZXJCdWJibGVTcGluZS5ub2RlLnkgPSAocG9zLnkgLSBjYy53aW5TaXplLmhlaWdodCAvIDIpICsgMTAwO1xyXG5cclxuICAgIGxldCBiZHggPSB0aGlzLldhdGVyQnViYmxlSGVhZFBvaW50LmdldEJvdW5kaW5nQm94KCk7XHJcbiAgICB0aGlzLkdhbWVQbGF5LmNoZWNrQnJ1c2hUZWV0aChiZHgpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIHByaXZhdGUgc2V0Q3VycmVudFBvc0NsZWFuc2VyKHBvcyk6IHZvaWQge1xyXG4gIC8vICAgbGV0IHBvc0NvbnZlcnRlZCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG4gIC8vICAgdGhpcy5Ob2RlQ29udGFpbmVyLlBvaW50X0NsZWFuc2VyLnNldFBvc2l0aW9uKHBvc0NvbnZlcnRlZClcclxuICAvLyB9XHJcblxyXG4gIC8vIHByaXZhdGUgc2V0Q3VycmVudFBvc1R3ZWV6ZXJzKHBvcyk6IHZvaWQge1xyXG4gIC8vICAgdGhpcy5Ob2RlQ29udGFpbmVyLlBvaW50X1R3ZWV6ZXJzLnggPSAocG9zLnggLSBjYy53aW5TaXplLndpZHRoIC8gMikgLSBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkWDtcclxuICAvLyAgIHRoaXMuTm9kZUNvbnRhaW5lci5Qb2ludF9Ud2VlemVycy55ID0gKHBvcy55IC0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyKSAtIENvbnN0YW50cy5SZXNwb25zaXZlLmNhbGN1bGF0ZWRZO1xyXG4gIC8vIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/Ultils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '03f2ceupvBEfa9putmH215T', 'Ultils');
// Script/Data/Ultils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ultils = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchArea = {};
var Ultils = /** @class */ (function () {
    function Ultils() {
    }
    Ultils.TouchArea = TouchArea;
    return Ultils;
}());
exports.Ultils = Ultils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxVbHRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUMsSUFBTSxTQUFTLEdBQUcsRUFFakIsQ0FBQTtBQUVEO0lBQUE7SUFJQSxDQUFDO0lBRlMsZ0JBQVMsR0FBcUIsU0FBUyxDQUFDO0lBRWxELGFBQUM7Q0FKRCxBQUlDLElBQUE7QUFKWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG5jb25zdCBUb3VjaEFyZWEgPSB7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVWx0aWxzIHtcclxuXHJcbiAgIHN0YXRpYyBUb3VjaEFyZWE6IHR5cGVvZiBUb3VjaEFyZWEgPSBUb3VjaEFyZWE7XHJcblxyXG59Il19
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
cc._RF.push(module, 'd3abaWwEQhAi5Yf4wF9VZxN', 'Responsive');
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
var NodeContanier_1 = require("../Controller/NodeContanier");
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Responsive = /** @class */ (function (_super) {
    __extends(Responsive, _super);
    function Responsive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.NodeContainer = null;
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
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        if (width > height) {
            constants_1.Constants.isRotate = true;
            this.setHorizontal();
        }
        else {
            constants_1.Constants.isRotate = false;
            this.setVertical();
        }
    };
    Responsive.prototype.setHorizontal = function () {
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        if (height / width < 0.65) {
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
        this.NodeContainer.UI.y = 0;
        constants_1.Constants.Responsive.calculatedY = -0;
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        this.NodeContainer.UI.y = 0;
        constants_1.Constants.Responsive.calculatedY = -0;
    };
    Responsive.prototype.setVertical = function () {
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        if (width / height < 0.5) {
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
        this.NodeContainer.UI.y = -30;
        constants_1.Constants.Responsive.calculatedY = -30;
    };
    Responsive.prototype.setMobile = function () {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        this.device = this.VERTICAL_MOBILE;
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        if (height / width > 1.5) {
            if (width / height >= 0.6 && width / height < 0.62) {
                // mobile mode applovin
                return;
            }
            // Iphone 6 / 6 Plus / 7 / 7 Plus   
            this.NodeContainer.UI.y = -0;
            constants_1.Constants.Responsive.calculatedY = -0;
        }
        else {
            this.NodeContainer.UI.y = -0;
            constants_1.Constants.Responsive.calculatedY = -0;
        }
    };
    Responsive.prototype.update = function (dt) {
        this.handleRotate();
    };
    __decorate([
        property(NodeContanier_1.default)
    ], Responsive.prototype, "NodeContainer", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFJlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQXdEO0FBQ3hELCtDQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQTJIQztRQXhIRyxtQkFBYSxHQUFrQixJQUFJLENBQUM7UUFHcEMsUUFBUTtRQUNSLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixvQkFBYyxHQUFXLGdCQUFnQixDQUFDO1FBQzFDLHVCQUFpQixHQUFXLG1CQUFtQixDQUFDO1FBQ2hELGtCQUFZLEdBQVcsY0FBYyxDQUFDO1FBQ3RDLHFCQUFlLEdBQVcsaUJBQWlCLENBQUM7O0lBOEdoRCxDQUFDO0lBM0dhLDJCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUdTLDBCQUFLLEdBQWY7SUFFQSxDQUFDO0lBR08saUNBQVksR0FBcEI7UUFDSSxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssQ0FBQztRQUN6QyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUMzQyxJQUFJLEtBQUssR0FBRyxNQUFNLEVBQUU7WUFDaEIscUJBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4QjthQUFNO1lBQ0gscUJBQVMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFHTyxrQ0FBYSxHQUFyQjtRQUNJLElBQUksS0FBSyxH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QUcsQ0FBQyxDQUFDLENBQUM7U0FDekM7YUFBTTtZQUNILElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBSSxDQUFDLENBQUMsQ0FBQztZQUM5QixxQkFBUyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDekM7SUFDTCxDQUFDO0lBR1MsMkJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQXZIRDtRQURDLFFBQVEsQ0FBQyx1QkFBYSxDQUFDO3FEQUNZO0lBSG5CLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0EySDlCO0lBQUQsaUJBQUM7Q0EzSEQsQUEySEMsQ0EzSHVDLEVBQUUsQ0FBQyxTQUFTLEdBMkhuRDtrQkEzSG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZUNvbnRhaW5lciBmcm9tIFwiLi4vQ29udHJvbGxlci9Ob2RlQ29udGFuaWVyXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNpdmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShOb2RlQ29udGFpbmVyKVxyXG4gICAgTm9kZUNvbnRhaW5lcjogTm9kZUNvbnRhaW5lciA9IG51bGw7XHJcblxyXG5cclxuICAgIC8vIHN0YXRlXHJcbiAgICBkZXZpY2U6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBpc1JvdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEhPUklaT05UQUxfSVBYOiBzdHJpbmcgPSBcImhvcml6b250YWxfSVBYXCI7XHJcbiAgICBIT1JJWk9OVEFMX1RBQkxFVDogc3RyaW5nID0gXCJob3Jpem9udGFsX1RhYmxldFwiO1xyXG4gICAgVkVSVElDQUxfSVBYOiBzdHJpbmcgPSBcInZlcnRpY2FsX0lQWFwiO1xyXG4gICAgVkVSVElDQUxfTU9CSUxFOiBzdHJpbmcgPSBcInZlcnRpY2FsX01vYmlsZVwiO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVSb3RhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aDtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQ7XHJcbiAgICAgICAgaWYgKHdpZHRoID4gaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5pc1JvdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SG9yaXpvbnRhbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5pc1JvdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFZlcnRpY2FsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldEhvcml6b250YWwoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aDtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQ7XHJcbiAgICAgICAgaWYgKGhlaWdodCAvIHdpZHRoIDwgMC42NSkge1xyXG4gICAgICAgICAgICAvLyBJcGhvbmUgNiAvIDYgcGx1cyAvIDcgLyA3IFBsdXMgLyBYXHJcbiAgICAgICAgICAgIHRoaXMuc2V0SG9yaXpvbnRhbEZvcklwWCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SG9yaXpvbnRhbEZvclRhYmxldCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsRm9ySXBYKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLkhPUklaT05UQUxfSVBYID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuSE9SSVpPTlRBTF9JUFg7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5VSS55ID0gMDtcclxuICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkWSA9IC0wO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsRm9yVGFibGV0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLkhPUklaT05UQUxfVEFCTEVUID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuSE9SSVpPTlRBTF9UQUJMRVQ7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5VSS55ID0gMDtcclxuICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkWSA9IC0wO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0VmVydGljYWwoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aDtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQ7XHJcbiAgICAgICAgaWYgKHdpZHRoIC8gaGVpZ2h0IDwgMC41KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SXBob25lWCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TW9iaWxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0SXBob25lWCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5WRVJUSUNBTF9JUFggPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gdGhpcy5WRVJUSUNBTF9JUFg7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5VSS55ID0gIC0zMDtcclxuICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkWSA9IC0zMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldE1vYmlsZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5WRVJUSUNBTF9NT0JJTEUgPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gdGhpcy5WRVJUSUNBTF9NT0JJTEU7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aDtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmIChoZWlnaHQgLyB3aWR0aCA+IDEuNSkge1xyXG4gICAgICAgICAgICBpZiAod2lkdGggLyBoZWlnaHQgPj0gMC42ICYmIHdpZHRoIC8gaGVpZ2h0IDwgMC42Mikge1xyXG4gICAgICAgICAgICAgICAgLy8gbW9iaWxlIG1vZGUgYXBwbG92aW5cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSXBob25lIDYgLyA2IFBsdXMgLyA3IC8gNyBQbHVzICAgXHJcbiAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5VSS55ID0gIC0wO1xyXG4gICAgICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkWSA9IC0wO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5VSS55ID0gIC0wO1xyXG4gICAgICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5jYWxjdWxhdGVkWSA9IC0wO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSb3RhdGUoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
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
cc._RF.push(module, 'eaccb/69FZDu6rC4YmR+uAW', 'constants');
// Script/Data/constants.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var IronSource = {
    // ironsource 
    SoundState: true,
    State: 1,
    isEndGame: false,
    isPlayBgSound: false,
};
var Responsive = {
    calculatedY: 0,
    calculatedX: 0,
    currentDevice: "",
};
var SoundTrack;
(function (SoundTrack) {
    SoundTrack["bgSound"] = "bgSound";
    SoundTrack["spiderSound"] = "spiderSound";
    SoundTrack["walkSound"] = "walkSound";
    SoundTrack["scareSound"] = "scareSound";
    SoundTrack["IntroDelightSound"] = "IntroDelightSound";
    SoundTrack["hmmSound"] = "hmmSound";
    SoundTrack["whooseSound"] = "whooseSound";
    SoundTrack["moveItemSound"] = "moveItemSound";
    SoundTrack["drySound"] = "drySound";
    SoundTrack["shampooSound"] = "shampooSound";
    SoundTrack["toothPaste1Sound"] = "toothPaste1Sound";
    SoundTrack["toothPaste2Sound"] = "toothPaste2Sound";
    SoundTrack["DoneStepSound"] = "DoneStepSound";
    SoundTrack["ShakeBrush"] = "ShakeBrush";
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    Constants.currentPosition = new cc.Vec2(0, 0);
    Constants.isRotate = false;
    Constants.isDoneDryer = false;
    Constants.isDoneWaterBrush = false;
    Constants.isTouch = false;
    Constants.isCanTouch = true;
    Constants.isToStore = false;
    Constants.isTouchToothPaste = false;
    Constants.isDoneToothPaste = false;
    Constants.toothPaste_PointsStatus = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
    Constants.water_PointsStatus = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
    Constants.toothPaste_Points = [];
    Constants.Water_Points = [];
    Constants.spine_Bubbles = [];
    Constants.spine_WaterBubbles = [];
    Constants.maggotRemoved = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUMsSUFBTSxVQUFVLEdBQUc7SUFDZixjQUFjO0lBQ2QsVUFBVSxFQUFFLElBQUk7SUFDaEIsS0FBSyxFQUFFLENBQUM7SUFDUixTQUFTLEVBQUUsS0FBSztJQUNoQixhQUFhLEVBQUUsS0FBSztDQUN2QixDQUFBO0FBR0QsSUFBTSxVQUFVLEdBQUc7SUFDZixXQUFXLEVBQUUsQ0FBQztJQUNkLFdBQVcsRUFBRSxDQUFDO0lBQ2QsYUFBYSxFQUFFLEVBQUU7Q0FDcEIsQ0FBQTtBQUdELElBQUssVUFlSjtBQWZELFdBQUssVUFBVTtJQUNYLGlDQUFtQixDQUFBO0lBQ25CLHlDQUEyQixDQUFBO0lBQzNCLHFDQUF1QixDQUFBO0lBQ3ZCLHVDQUF5QixDQUFBO0lBQ3pCLHFEQUF1QyxDQUFBO0lBQ3ZDLG1DQUFxQixDQUFBO0lBQ3JCLHlDQUEyQixDQUFBO0lBQzNCLDZDQUErQixDQUFBO0lBQy9CLG1DQUFxQixDQUFBO0lBQ3JCLDJDQUE2QixDQUFBO0lBQzdCLG1EQUFxQyxDQUFBO0lBQ3JDLG1EQUFxQyxDQUFBO0lBQ3JDLDZDQUErQixDQUFBO0lBQy9CLHVDQUF5QixDQUFBO0FBQzdCLENBQUMsRUFmSSxVQUFVLEtBQVYsVUFBVSxRQWVkO0FBR0Q7SUFBQTtJQXNDQSxDQUFDO0lBcENHLFlBQVk7SUFDTCx5QkFBZSxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFN0Msa0JBQVEsR0FBWSxLQUFLLENBQUM7SUFDMUIscUJBQVcsR0FBWSxLQUFLLENBQUM7SUFDN0IsMEJBQWdCLEdBQVksS0FBSyxDQUFDO0lBQ2xDLGlCQUFPLEdBQVksS0FBSyxDQUFDO0lBQ3pCLG9CQUFVLEdBQVksSUFBSSxDQUFDO0lBQzNCLG1CQUFTLEdBQVksS0FBSyxDQUFDO0lBQzNCLDJCQUFpQixHQUFZLEtBQUssQ0FBQztJQUNuQywwQkFBZ0IsR0FBWSxLQUFLLENBQUM7SUFFbEMsaUNBQXVCLEdBQWMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9JLDRCQUFrQixHQUFjLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxSSwyQkFBaUIsR0FBYyxFQUFFLENBQUM7SUFDbEMsc0JBQVksR0FBYyxFQUFFLENBQUM7SUFDN0IsdUJBQWEsR0FBa0IsRUFBRSxDQUFDO0lBQ2xDLDRCQUFrQixHQUFrQixFQUFFLENBQUM7SUFFdkMsdUJBQWEsR0FBVyxDQUFDLENBQUM7SUFFakMsUUFBUTtJQUNELGVBQUssR0FBaUIsS0FBSyxDQUFDO0lBR25DLGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFHbEQsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUdsRCxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBRXRELGdCQUFDO0NBdENELEFBc0NDLElBQUE7QUF0Q1ksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuXHJcbmNvbnN0IElyb25Tb3VyY2UgPSB7XHJcbiAgICAvLyBpcm9uc291cmNlIFxyXG4gICAgU291bmRTdGF0ZTogdHJ1ZSxcclxuICAgIFN0YXRlOiAxLFxyXG4gICAgaXNFbmRHYW1lOiBmYWxzZSxcclxuICAgIGlzUGxheUJnU291bmQ6IGZhbHNlLFxyXG59XHJcblxyXG5cclxuY29uc3QgUmVzcG9uc2l2ZSA9IHtcclxuICAgIGNhbGN1bGF0ZWRZOiAwLFxyXG4gICAgY2FsY3VsYXRlZFg6IDAsXHJcbiAgICBjdXJyZW50RGV2aWNlOiBcIlwiLFxyXG59XHJcblxyXG5cclxuZW51bSBTb3VuZFRyYWNrIHtcclxuICAgIGJnU291bmQgPSBcImJnU291bmRcIixcclxuICAgIHNwaWRlclNvdW5kID0gXCJzcGlkZXJTb3VuZFwiLFxyXG4gICAgd2Fsa1NvdW5kID0gXCJ3YWxrU291bmRcIixcclxuICAgIHNjYXJlU291bmQgPSBcInNjYXJlU291bmRcIixcclxuICAgIEludHJvRGVsaWdodFNvdW5kID0gXCJJbnRyb0RlbGlnaHRTb3VuZFwiLFxyXG4gICAgaG1tU291bmQgPSBcImhtbVNvdW5kXCIsXHJcbiAgICB3aG9vc2VTb3VuZCA9IFwid2hvb3NlU291bmRcIixcclxuICAgIG1vdmVJdGVtU291bmQgPSBcIm1vdmVJdGVtU291bmRcIixcclxuICAgIGRyeVNvdW5kID0gXCJkcnlTb3VuZFwiLFxyXG4gICAgc2hhbXBvb1NvdW5kID0gXCJzaGFtcG9vU291bmRcIixcclxuICAgIHRvb3RoUGFzdGUxU291bmQgPSBcInRvb3RoUGFzdGUxU291bmRcIixcclxuICAgIHRvb3RoUGFzdGUyU291bmQgPSBcInRvb3RoUGFzdGUyU291bmRcIixcclxuICAgIERvbmVTdGVwU291bmQgPSBcIkRvbmVTdGVwU291bmRcIixcclxuICAgIFNoYWtlQnJ1c2ggPSBcIlNoYWtlQnJ1c2hcIlxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XHJcblxyXG4gICAgLy8gc3RhdGUgICAgXHJcbiAgICBzdGF0aWMgY3VycmVudFBvc2l0aW9uOiBjYy5WZWMyID0gbmV3IGNjLlZlYzIoMCwgMCk7XHJcblxyXG4gICAgc3RhdGljIGlzUm90YXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNEb25lRHJ5ZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0RvbmVXYXRlckJydXNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNUb3VjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzQ2FuVG91Y2g6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgc3RhdGljIGlzVG9TdG9yZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzVG91Y2hUb290aFBhc3RlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNEb25lVG9vdGhQYXN0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHN0YXRpYyB0b290aFBhc3RlX1BvaW50c1N0YXR1czogYm9vbGVhbltdID0gW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdO1xyXG4gICAgc3RhdGljIHdhdGVyX1BvaW50c1N0YXR1czogYm9vbGVhbltdID0gW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdO1xyXG4gICAgc3RhdGljIHRvb3RoUGFzdGVfUG9pbnRzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIHN0YXRpYyBXYXRlcl9Qb2ludHM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgc3RhdGljIHNwaW5lX0J1YmJsZXM6IHNwLlNrZWxldG9uW10gPSBbXTtcclxuICAgIHN0YXRpYyBzcGluZV9XYXRlckJ1YmJsZXM6IHNwLlNrZWxldG9uW10gPSBbXTtcclxuXHJcbiAgICBzdGF0aWMgbWFnZ290UmVtb3ZlZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvLyBldmVudFxyXG4gICAgc3RhdGljIEV2ZW50OiB0eXBlb2YgRXZlbnQgPSBFdmVudDtcclxuXHJcblxyXG4gICAgLy8gU291bmRUcmFja1xyXG4gICAgc3RhdGljIFNvdW5kVHJhY2s6IHR5cGVvZiBTb3VuZFRyYWNrID0gU291bmRUcmFjaztcclxuXHJcblxyXG4gICAgLy8gaXJvblNvdXJjZVxyXG4gICAgc3RhdGljIGlyb25Tb3VyY2U6IHR5cGVvZiBJcm9uU291cmNlID0gSXJvblNvdXJjZTtcclxuXHJcblxyXG4gICAgLy8gUmVzcG9uc2l2ZVxyXG4gICAgc3RhdGljIFJlc3BvbnNpdmU6IHR5cGVvZiBSZXNwb25zaXZlID0gUmVzcG9uc2l2ZTtcclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/IronSource.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49c0ang8TBDWqCvjXG1XKDi', 'IronSource');
// Script/Controller/IronSource.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var IronSource = /** @class */ (function (_super) {
    __extends(IronSource, _super);
    function IronSource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        return _this;
        // protected update(dt: number): void {
        //     this.handleMuteSoundIronSource();
        // }
    }
    IronSource.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        constants_1.Constants.ironSource.isPlayBgSound = true;
        if (constants_1.Constants.ironSource.SoundState) {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
    };
    IronSource.prototype.handleMuteSoundIronSource = function () {
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
    __decorate([
        property(AudioManager_1.default)
    ], IronSource.prototype, "AudioManager", void 0);
    IronSource = __decorate([
        ccclass
    ], IronSource);
    return IronSource;
}(cc.Component));
exports.default = IronSource;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxJcm9uU291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLCtDQUE4QztBQUM5Qyx1REFBa0Q7QUFFNUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFvQ0M7UUFqQ0csa0JBQVksR0FBaUIsSUFBSSxDQUFDOztRQThCaEMsdUNBQXVDO1FBQ3ZDLHdDQUF3QztRQUN4QyxJQUFJO0lBQ1YsQ0FBQztJQS9CVSw4Q0FBeUIsR0FBaEM7UUFDSSxJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUN0QyxPQUFPO1NBQ1I7UUFFRCxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFDLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO1lBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNEO0lBQ0gsQ0FBQztJQUdPLDhDQUF5QixHQUFqQztRQUNFLHFCQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBRWxGLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFO1lBQzlCLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsSUFBSSxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRTtnQkFDM0cscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDM0Q7WUFFRCxJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO2dCQUN2RSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ2xDO1NBQ0Y7SUFDSCxDQUFDO0lBNUJIO1FBREMsUUFBUSxDQUFDLHNCQUFZLENBQUM7b0RBQ1c7SUFIakIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQW9DOUI7SUFBRCxpQkFBQztDQXBDRCxBQW9DQyxDQXBDdUMsRUFBRSxDQUFDLFNBQVMsR0FvQ25EO2tCQXBDb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElyb25Tb3VyY2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIGhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kID0gdHJ1ZTtcclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgICAgcHJpdmF0ZSBoYW5kbGVNdXRlU291bmRJcm9uU291cmNlKCk6IHZvaWQge1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2Nvc1NvdW5kU3RhdGVcIiksIDEwKVxyXG4gICAgXHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlKSB7XHJcbiAgICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPT09IDEgJiYgIUNvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgJiYgIUNvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSkge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPT09IDIgJiYgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BBbGxTb3VuZCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgIC8vICAgICB0aGlzLmhhbmRsZU11dGVTb3VuZElyb25Tb3VyY2UoKTtcclxuICAgICAgLy8gfVxyXG59XHJcbiJdfQ==
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
var Anims_1 = require("../Data/Anims");
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var NodeContanier_1 = require("./NodeContanier");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.NodeContainer = null;
        _this.star = null;
        _this.star1 = null;
        _this.star2 = null;
        _this.sp_mouth = null;
        // Tools
        _this.sp_dryer = null;
        _this.Teeth_scum = null;
        _this.Options = null;
        _this.hand = null;
        // state
        _this.tweezersStartPos = null;
        _this.tweezersPointStartPos = null;
        _this.isInitVars = false;
        _this.isRunFlow1 = false;
        _this.checkDryerFlag = false;
        _this.checkshowTweezersFlag = false;
        _this.isRemovingMaggot = false;
        _this.checkToothPasteFlag = false;
        _this.checkBrushTeethFlag = false;
        _this.isDoneToothPasteFlag = false;
        _this.DryerPoint = null;
        _this.DryerToMouthArea = null;
        _this.DryerSpine = null;
        _this.toothPastePoint = null;
        _this.toothPasteSpine = null;
        _this.toothPasteHeadPoint = null;
        _this.WaterBubblePoint = null;
        _this.WaterBubbleSpine = null;
        _this.WaterBubbleHeadPoint = null;
        _this.initPos = [];
        _this.checkCollideBubblePoints = function (bdx) {
            for (var i = 0; i < constants_1.Constants.toothPaste_Points.length; i++) {
                var currentNode = constants_1.Constants.toothPaste_Points[i];
                if (currentNode.getBoundingBox().intersects(bdx)) {
                    constants_1.Constants.isTouchToothPaste = true;
                    for (var j = 0; j < constants_1.Constants.toothPaste_PointsStatus.length; j++) {
                        if (!constants_1.Constants.toothPaste_PointsStatus[j]) {
                            constants_1.Constants.toothPaste_PointsStatus[j] = true;
                            constants_1.Constants.toothPaste_Points.splice(i, 1);
                            !_this.AudioManager.toothPaste1Sound.isPlaying && _this.AudioManager.playSound(constants_1.Constants.SoundTrack.toothPaste1Sound);
                            constants_1.Constants.spine_Bubbles[i].setAnimation(0, Anims_1.SpineAnims.bubbleAnim.Show, false);
                            constants_1.Constants.spine_Bubbles.splice(i, 1);
                            if (constants_1.Constants.toothPaste_PointsStatus.every(function (status) { return status === true; })) {
                                constants_1.Constants.isCanTouch = false;
                                constants_1.Constants.isDoneToothPaste = true;
                                _this.NodeContainer.toothPaste.active = false;
                                console.log("Done Tooth Paste ");
                            }
                            break;
                        }
                    }
                    break;
                }
            }
        };
        _this.checkBrushTeeth = function (bdx) {
            for (var i = 0; i < constants_1.Constants.Water_Points.length; i++) {
                var currentNode = constants_1.Constants.Water_Points[i];
                if (currentNode.getBoundingBox().intersects(bdx)) {
                    constants_1.Constants.isTouchToothPaste = true;
                    for (var j = 0; j < constants_1.Constants.water_PointsStatus.length; j++) {
                        if (!constants_1.Constants.water_PointsStatus[j]) {
                            constants_1.Constants.water_PointsStatus[j] = true;
                            constants_1.Constants.Water_Points.splice(i, 1);
                            constants_1.Constants.spine_WaterBubbles[i].setAnimation(0, Anims_1.SpineAnims.bubbleAnim.Clean, false);
                            constants_1.Constants.spine_WaterBubbles.splice(i, 1);
                            if (constants_1.Constants.water_PointsStatus.every(function (status) { return status === true; })) {
                                constants_1.Constants.isCanTouch = false;
                                constants_1.Constants.isDoneWaterBrush = true;
                                _this.NodeContainer.waterTooth.active = false;
                                _this.AudioManager.stopSound(constants_1.Constants.SoundTrack.toothPaste2Sound);
                                console.log("Done Water Bubble ");
                            }
                            break;
                        }
                    }
                    break;
                }
            }
        };
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
        this.Options.active = false;
    };
    GamePlay.prototype.initVariables = function () {
        this.isInitVars = true;
        this.DryerPoint = this.NodeContainer.dryer.getChildByName("Point_Dryer");
        this.DryerSpine = this.NodeContainer.dryer.getChildByName("sp_dryer").getComponent(sp.Skeleton);
        this.DryerToMouthArea = this.NodeContainer.dryer.getChildByName("Point_Mouth");
        this.toothPastePoint = this.NodeContainer.toothPaste.getChildByName("Point_Tooth");
        this.toothPasteSpine = this.NodeContainer.toothPaste.getChildByName("sp_Tooth").getComponent(sp.Skeleton);
        this.toothPasteHeadPoint = this.NodeContainer.toothPaste.getChildByName("HeadPoint_Tooth");
        this.WaterBubblePoint = this.NodeContainer.waterTooth.getChildByName("Point_WaterTooth");
        this.WaterBubbleSpine = this.NodeContainer.waterTooth.getChildByName("sp_WaterTooth").getComponent(sp.Skeleton);
        this.WaterBubbleHeadPoint = this.NodeContainer.waterTooth.getChildByName("HeadPoint_WaterTooth");
        this.initPos[0] = this.WaterBubblePoint.getPosition();
        this.initPos[1] = this.WaterBubbleSpine.node.getPosition();
        this.initPos[2] = this.WaterBubbleHeadPoint.getPosition();
    };
    GamePlay.prototype.start = function () {
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        // to store if user click in intro 
        this.NodeContainer.HideMask.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        this.initVariables();
        this.showIntro();
        // debug
        // this.showTools(this.NodeContainer.dryer, true);
    };
    GamePlay.prototype.showIntro = function () {
        var _this = this;
        // active sound intro
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.walkSound);
        // declare vars
        var Delight_Intro = this.NodeContainer.intro.getChildByName("Delight");
        var spine_Delight = Delight_Intro.getChildByName("Spine_Delight").getComponent(sp.Skeleton);
        var Spider_Intro = this.NodeContainer.intro.getChildByName("Spider");
        var Overlay_Intro = this.NodeContainer.UI.getChildByName("Overlay");
        // scale intro
        cc.tween(Delight_Intro)
            .to(4, { scale: 1.15 })
            .start();
        // caculated time to active/unactive Intro steps & sounds
        this.scheduleOnce(function () {
            Spider_Intro.active = true;
            _this.AudioManager.stopSound(constants_1.Constants.SoundTrack.walkSound);
        }, 1.5);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.spiderSound); }, 2.5);
        this.scheduleOnce(function () {
            Spider_Intro.active = false;
            spine_Delight.setAnimation(0, Anims_1.SpineAnims.Intro_DollAnim.Scare, false);
        }, 3.2);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.hmmSound); }, 5);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.scareSound); }, 6.5);
        this.scheduleOnce(function () {
            cc.tween(Overlay_Intro)
                .to(1, { opacity: 255 })
                .to(1, { opacity: 0 })
                .start();
        }, 7);
        this.scheduleOnce(function () {
            _this.NodeContainer.MainGame.active = true;
            cc.tween(_this.NodeContainer.MainGame)
                .to(1, { scale: 1.1 })
                .to(1, { scale: 1 })
                .start();
        }, 8);
        this.scheduleOnce(function () {
            // off click to store if user watch full intro
            // To store
            // this.NodeContainer.HideMask.off(cc.Node.EventType.TOUCH_START);
            _this.showTools(_this.NodeContainer.dryer, true);
        }, 10);
    };
    GamePlay.prototype.showHint = function () {
        var _this = this;
        this.hand.active = true;
        cc.tween(this.hand)
            .to(0.5, { opacity: 255 })
            .call(function () {
            _this.hand.getComponent(cc.Animation).play("Hand_HintAnim");
        })
            .start();
    };
    GamePlay.prototype.hideAnim = function (node) {
        cc.tween(node)
            .to(0.5, { opacity: 0 })
            .start();
    };
    GamePlay.prototype.showTools = function (tool, isActive) {
        if (!isActive)
            tool.active = true;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.moveItemSound);
        var position = tool.getPosition();
        tool.setPosition(position.x - 30, position.y);
        cc.tween(tool)
            .to(0.5, { x: position.x, opacity: 255 })
            .start();
        this.showHint();
    };
    GamePlay.prototype.handleDoneDryer = function () {
        var _this = this;
        var pointBdx = this.DryerPoint.getBoundingBox();
        var areaBdx = this.DryerToMouthArea.getBoundingBox();
        if (pointBdx.intersects(areaBdx)) {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.drySound);
            this.checkDryerFlag = true;
            this.sp_dryer.node.active = true;
            this.Teeth_scum.getComponent(cc.Animation).play();
            this.sp_mouth.setAnimation(0, Anims_1.SpineAnims.LipsAnim.Dry, true);
            this.scheduleOnce(function () {
                cc.tween(_this.sp_dryer.node)
                    .to(1.5, { opacity: 0 })
                    .call(function () {
                    constants_1.Constants.isDoneDryer = true;
                    _this.sp_mouth.setAnimation(0, Anims_1.SpineAnims.LipsAnim.Idle, false);
                    _this.star.getComponent(cc.Animation).play("StarAnim");
                    _this.AudioManager.playSound(constants_1.Constants.SoundTrack.DoneStepSound);
                    _this.sp_mouth.setAnimation(0, Anims_1.SpineAnims.LipsAnim.DirtySmell, true);
                })
                    .start();
            }, 2);
            this.DryerPoint.active = false;
            this.DryerToMouthArea.active = false;
            this.DryerSpine.node.active = false;
        }
    };
    GamePlay.prototype.showToothPaste = function () {
        var _this = this;
        this.checkToothPasteFlag = true;
        this.scheduleOnce(function () {
            _this.showTools(_this.NodeContainer.toothPaste, false);
        }, 1.5);
        this.scheduleOnce(function () { _this.AudioManager.playSound(constants_1.Constants.SoundTrack.ShakeBrush); }, 1.8);
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.shampooSound);
            constants_1.Constants.isCanTouch = true;
        }, 3.5);
    };
    GamePlay.prototype.showOptions = function () {
        var _this = this;
        this.checkBrushTeethFlag = true;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.DoneStepSound);
        this.star2.getComponent(cc.Animation).play("StarAnim");
        this.scheduleOnce(function () {
            _this.Options.active = true;
            _this.Options.getComponent(cc.Animation).play("ShowOptions");
            // mtg & applovin
            // this.NodeContainer.HideMask.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        }, 1.5);
    };
    GamePlay.prototype.showToothBrush = function () {
        var _this = this;
        this.isDoneToothPasteFlag = true;
        this.sp_mouth.setAnimation(0, Anims_1.SpineAnims.LipsAnim.Idle, true);
        this.scheduleOnce(function () {
            constants_1.Constants.isCanTouch = true;
            _this.showTools(_this.NodeContainer.waterTooth, false);
            _this.WaterBubblePoint.setPosition(_this.initPos[0]);
            _this.WaterBubbleSpine.node.setPosition(_this.initPos[1]);
            _this.WaterBubbleHeadPoint.setPosition(_this.initPos[2]);
        }, 1.5);
    };
    GamePlay.prototype.update = function (dt) {
        !this.checkDryerFlag && this.isInitVars && this.handleDoneDryer();
        constants_1.Constants.isDoneDryer && !this.checkToothPasteFlag && this.showToothPaste();
        constants_1.Constants.isDoneToothPaste && !this.isDoneToothPasteFlag && this.showToothBrush();
        constants_1.Constants.isDoneWaterBrush && !this.checkBrushTeethFlag && this.showOptions();
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(NodeContanier_1.default)
    ], GamePlay.prototype, "NodeContainer", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "star", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "star1", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "star2", void 0);
    __decorate([
        property(sp.Skeleton)
    ], GamePlay.prototype, "sp_mouth", void 0);
    __decorate([
        property(sp.Skeleton)
    ], GamePlay.prototype, "sp_dryer", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "Teeth_scum", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "Options", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "hand", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBMkM7QUFDM0MsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUNsRCxtREFBa0Q7QUFDbEQsaURBQTRDO0FBRXRDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBZ1VDO1FBOVRDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsbUJBQWEsR0FBa0IsSUFBSSxDQUFDO1FBR3BDLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBRzdCLFFBQVE7UUFFUixjQUFRLEdBQWdCLElBQUksQ0FBQztRQUU3QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsUUFBUTtRQUNSLHNCQUFnQixHQUFZLElBQUksQ0FBQztRQUNqQywyQkFBcUIsR0FBWSxJQUFJLENBQUM7UUFFdEMsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsb0JBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsMkJBQXFCLEdBQVksS0FBSyxDQUFDO1FBQ3ZDLHNCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyx5QkFBbUIsR0FBWSxLQUFLLENBQUM7UUFDckMseUJBQW1CLEdBQVksS0FBSyxDQUFDO1FBQ3JDLDBCQUFvQixHQUFZLEtBQUssQ0FBQztRQUd0QyxnQkFBVSxH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T0FBTztPQUNhLFFBQVEsQ0FnVTVCO0lBQUQsZUFBQztDQWhVRCxBQWdVQyxDQWhVcUMsRUFBRSxDQUFDLFNBQVMsR0FnVWpEO2tCQWhVb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNwaW5lQW5pbXMgfSBmcm9tIFwiLi4vRGF0YS9Bbmltc1wiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBOb2RlQ29udGFpbmVyIGZyb20gXCIuL05vZGVDb250YW5pZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KE5vZGVDb250YWluZXIpXHJcbiAgTm9kZUNvbnRhaW5lcjogTm9kZUNvbnRhaW5lciA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHN0YXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHN0YXIxOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBzdGFyMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gIHNwX21vdXRoOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcblxyXG5cclxuICAvLyBUb29sc1xyXG4gIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICBzcF9kcnllcjogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIFRlZXRoX3NjdW06IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIE9wdGlvbnM6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAvLyBzdGF0ZVxyXG4gIHR3ZWV6ZXJzU3RhcnRQb3M6IGNjLlZlYzIgPSBudWxsO1xyXG4gIHR3ZWV6ZXJzUG9pbnRTdGFydFBvczogY2MuVmVjMiA9IG51bGw7XHJcblxyXG4gIGlzSW5pdFZhcnM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBpc1J1bkZsb3cxOiBib29sZWFuID0gZmFsc2U7XHJcbiAgY2hlY2tEcnllckZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBjaGVja3Nob3dUd2VlemVyc0ZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBpc1JlbW92aW5nTWFnZ290OiBib29sZWFuID0gZmFsc2U7XHJcbiAgY2hlY2tUb290aFBhc3RlRmxhZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGNoZWNrQnJ1c2hUZWV0aEZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBpc0RvbmVUb290aFBhc3RlRmxhZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgRHJ5ZXJQb2ludDogY2MuTm9kZSA9IG51bGw7XHJcbiAgRHJ5ZXJUb01vdXRoQXJlYTogY2MuTm9kZSA9IG51bGw7XHJcbiAgRHJ5ZXJTcGluZTogc3AuU2tlbGV0b24gPSBudWxsO1xyXG5cclxuICB0b290aFBhc3RlUG9pbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gIHRvb3RoUGFzdGVTcGluZTogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gIHRvb3RoUGFzdGVIZWFkUG9pbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBXYXRlckJ1YmJsZVBvaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuICBXYXRlckJ1YmJsZVNwaW5lOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgV2F0ZXJCdWJibGVIZWFkUG9pbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBpbml0UG9zOiBjYy5WZWMyW10gPSBbXTtcclxuXHJcblxyXG4gIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLk9wdGlvbnMuYWN0aXZlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBpbml0VmFyaWFibGVzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0luaXRWYXJzID0gdHJ1ZTtcclxuICAgIHRoaXMuRHJ5ZXJQb2ludCA9IHRoaXMuTm9kZUNvbnRhaW5lci5kcnllci5nZXRDaGlsZEJ5TmFtZShcIlBvaW50X0RyeWVyXCIpO1xyXG4gICAgdGhpcy5EcnllclNwaW5lID0gdGhpcy5Ob2RlQ29udGFpbmVyLmRyeWVyLmdldENoaWxkQnlOYW1lKFwic3BfZHJ5ZXJcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgIHRoaXMuRHJ5ZXJUb01vdXRoQXJlYSA9IHRoaXMuTm9kZUNvbnRhaW5lci5kcnllci5nZXRDaGlsZEJ5TmFtZShcIlBvaW50X01vdXRoXCIpO1xyXG5cclxuICAgIHRoaXMudG9vdGhQYXN0ZVBvaW50ID0gdGhpcy5Ob2RlQ29udGFpbmVyLnRvb3RoUGFzdGUuZ2V0Q2hpbGRCeU5hbWUoXCJQb2ludF9Ub290aFwiKTtcclxuICAgIHRoaXMudG9vdGhQYXN0ZVNwaW5lID0gdGhpcy5Ob2RlQ29udGFpbmVyLnRvb3RoUGFzdGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcF9Ub290aFwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgdGhpcy50b290aFBhc3RlSGVhZFBvaW50ID0gdGhpcy5Ob2RlQ29udGFpbmVyLnRvb3RoUGFzdGUuZ2V0Q2hpbGRCeU5hbWUoXCJIZWFkUG9pbnRfVG9vdGhcIik7XHJcblxyXG4gICAgdGhpcy5XYXRlckJ1YmJsZVBvaW50ID0gdGhpcy5Ob2RlQ29udGFpbmVyLndhdGVyVG9vdGguZ2V0Q2hpbGRCeU5hbWUoXCJQb2ludF9XYXRlclRvb3RoXCIpO1xyXG4gICAgdGhpcy5XYXRlckJ1YmJsZVNwaW5lID0gdGhpcy5Ob2RlQ29udGFpbmVyLndhdGVyVG9vdGguZ2V0Q2hpbGRCeU5hbWUoXCJzcF9XYXRlclRvb3RoXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICB0aGlzLldhdGVyQnViYmxlSGVhZFBvaW50ID0gdGhpcy5Ob2RlQ29udGFpbmVyLndhdGVyVG9vdGguZ2V0Q2hpbGRCeU5hbWUoXCJIZWFkUG9pbnRfV2F0ZXJUb290aFwiKTtcclxuXHJcbiAgICB0aGlzLmluaXRQb3NbMF0gPSB0aGlzLldhdGVyQnViYmxlUG9pbnQuZ2V0UG9zaXRpb24oKTtcclxuICAgIHRoaXMuaW5pdFBvc1sxXSA9IHRoaXMuV2F0ZXJCdWJibGVTcGluZS5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICB0aGlzLmluaXRQb3NbMl0gPSB0aGlzLldhdGVyQnViYmxlSGVhZFBvaW50LmdldFBvc2l0aW9uKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG5cclxuICAgIC8vIHRvIHN0b3JlIGlmIHVzZXIgY2xpY2sgaW4gaW50cm8gXHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuSGlkZU1hc2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5pbml0VmFyaWFibGVzKCk7XHJcbiAgICB0aGlzLnNob3dJbnRybygpO1xyXG5cclxuICAgIC8vIGRlYnVnXHJcbiAgICAvLyB0aGlzLnNob3dUb29scyh0aGlzLk5vZGVDb250YWluZXIuZHJ5ZXIsIHRydWUpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc2hvd0ludHJvKCk6IHZvaWQge1xyXG4gICAgLy8gYWN0aXZlIHNvdW5kIGludHJvXHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2sud2Fsa1NvdW5kKTtcclxuXHJcbiAgICAvLyBkZWNsYXJlIHZhcnNcclxuICAgIGxldCBEZWxpZ2h0X0ludHJvID0gdGhpcy5Ob2RlQ29udGFpbmVyLmludHJvLmdldENoaWxkQnlOYW1lKFwiRGVsaWdodFwiKTtcclxuICAgIGxldCBzcGluZV9EZWxpZ2h0OiBzcC5Ta2VsZXRvbiA9IERlbGlnaHRfSW50cm8uZ2V0Q2hpbGRCeU5hbWUoXCJTcGluZV9EZWxpZ2h0XCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICBsZXQgU3BpZGVyX0ludHJvID0gdGhpcy5Ob2RlQ29udGFpbmVyLmludHJvLmdldENoaWxkQnlOYW1lKFwiU3BpZGVyXCIpO1xyXG4gICAgbGV0IE92ZXJsYXlfSW50cm8gPSB0aGlzLk5vZGVDb250YWluZXIuVUkuZ2V0Q2hpbGRCeU5hbWUoXCJPdmVybGF5XCIpO1xyXG5cclxuICAgIC8vIHNjYWxlIGludHJvXHJcbiAgICBjYy50d2VlbihEZWxpZ2h0X0ludHJvKVxyXG4gICAgICAudG8oNCwgeyBzY2FsZTogMS4xNSB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAvLyBjYWN1bGF0ZWQgdGltZSB0byBhY3RpdmUvdW5hY3RpdmUgSW50cm8gc3RlcHMgJiBzb3VuZHNcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgU3BpZGVyX0ludHJvLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BTb3VuZChDb25zdGFudHMuU291bmRUcmFjay53YWxrU291bmQpO1xyXG4gICAgfSwgMS41KTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLnNwaWRlclNvdW5kKSB9LCAyLjUpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBTcGlkZXJfSW50cm8uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIHNwaW5lX0RlbGlnaHQuc2V0QW5pbWF0aW9uKDAsIFNwaW5lQW5pbXMuSW50cm9fRG9sbEFuaW0uU2NhcmUsIGZhbHNlKTtcclxuICAgIH0sIDMuMik7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5obW1Tb3VuZCkgfSwgNSk7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5zY2FyZVNvdW5kKSB9LCA2LjUpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBjYy50d2VlbihPdmVybGF5X0ludHJvKVxyXG4gICAgICAgIC50bygxLCB7IG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAgIC50bygxLCB7IG9wYWNpdHk6IDAgfSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH0sIDcpO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLk5vZGVDb250YWluZXIuTWFpbkdhbWUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgIGNjLnR3ZWVuKHRoaXMuTm9kZUNvbnRhaW5lci5NYWluR2FtZSlcclxuICAgICAgICAudG8oMSwgeyBzY2FsZTogMS4xIH0pXHJcbiAgICAgICAgLnRvKDEsIHsgc2NhbGU6IDEgfSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH0sIDgpO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgLy8gb2ZmIGNsaWNrIHRvIHN0b3JlIGlmIHVzZXIgd2F0Y2ggZnVsbCBpbnRyb1xyXG4gICAgICAvLyBUbyBzdG9yZVxyXG4gICAgICAvLyB0aGlzLk5vZGVDb250YWluZXIuSGlkZU1hc2sub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJUKTtcclxuXHJcbiAgICAgIHRoaXMuc2hvd1Rvb2xzKHRoaXMuTm9kZUNvbnRhaW5lci5kcnllciwgdHJ1ZSk7XHJcbiAgICB9LCAxMCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBzaG93SGludCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaGFuZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgY2MudHdlZW4odGhpcy5oYW5kKVxyXG4gICAgLnRvKDAuNSwge29wYWNpdHk6IDI1NX0pXHJcbiAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuaGFuZC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiSGFuZF9IaW50QW5pbVwiKTtcclxuICAgIH0pXHJcbiAgICAuc3RhcnQoKVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaGlkZUFuaW0obm9kZTogY2MuTm9kZSkge1xyXG4gICAgY2MudHdlZW4obm9kZSlcclxuICAgICAgLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc2hvd1Rvb2xzKHRvb2w6IGNjLk5vZGUsIGlzQWN0aXZlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZighaXNBY3RpdmUpIHRvb2wuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5tb3ZlSXRlbVNvdW5kKTtcclxuICAgIGxldCBwb3NpdGlvbiA9IHRvb2wuZ2V0UG9zaXRpb24oKTtcclxuICAgIHRvb2wuc2V0UG9zaXRpb24ocG9zaXRpb24ueCAtIDMwLCBwb3NpdGlvbi55KTtcclxuICAgIGNjLnR3ZWVuKHRvb2wpXHJcbiAgICAgIC50bygwLjUsIHsgeDogcG9zaXRpb24ueCwgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgIHRoaXMuc2hvd0hpbnQoKTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgaGFuZGxlRG9uZURyeWVyKCk6IHZvaWQge1xyXG4gICAgbGV0IHBvaW50QmR4ID0gdGhpcy5EcnllclBvaW50LmdldEJvdW5kaW5nQm94KCk7XHJcbiAgICBsZXQgYXJlYUJkeCA9IHRoaXMuRHJ5ZXJUb01vdXRoQXJlYS5nZXRCb3VuZGluZ0JveCgpO1xyXG4gICAgaWYgKHBvaW50QmR4LmludGVyc2VjdHMoYXJlYUJkeCkpIHtcclxuICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmRyeVNvdW5kKTtcclxuXHJcbiAgICAgIHRoaXMuY2hlY2tEcnllckZsYWcgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNwX2RyeWVyLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5UZWV0aF9zY3VtLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgdGhpcy5zcF9tb3V0aC5zZXRBbmltYXRpb24oMCwgU3BpbmVBbmltcy5MaXBzQW5pbS5EcnksIHRydWUpO1xyXG5cclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuc3BfZHJ5ZXIubm9kZSlcclxuICAgICAgICAudG8oMS41LCB7IG9wYWNpdHk6IDAgfSlcclxuICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICBDb25zdGFudHMuaXNEb25lRHJ5ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5zcF9tb3V0aC5zZXRBbmltYXRpb24oMCwgU3BpbmVBbmltcy5MaXBzQW5pbS5JZGxlLCBmYWxzZSk7XHJcbiAgICAgICAgICB0aGlzLnN0YXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlN0YXJBbmltXCIpO1xyXG4gICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkRvbmVTdGVwU291bmQpO1xyXG4gICAgICAgICAgdGhpcy5zcF9tb3V0aC5zZXRBbmltYXRpb24oMCwgU3BpbmVBbmltcy5MaXBzQW5pbS5EaXJ0eVNtZWxsLCB0cnVlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG4gICAgICB9LCAyKTtcclxuXHJcbiAgICAgIHRoaXMuRHJ5ZXJQb2ludC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5EcnllclRvTW91dGhBcmVhLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLkRyeWVyU3BpbmUubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgY2hlY2tDb2xsaWRlQnViYmxlUG9pbnRzID0gKGJkeDogY2MuUmVjdCk6IHZvaWQgPT4ge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDb25zdGFudHMudG9vdGhQYXN0ZV9Qb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IGN1cnJlbnROb2RlID0gQ29uc3RhbnRzLnRvb3RoUGFzdGVfUG9pbnRzW2ldO1xyXG4gICAgICBpZiAoY3VycmVudE5vZGUuZ2V0Qm91bmRpbmdCb3goKS5pbnRlcnNlY3RzKGJkeCkpIHtcclxuICAgICAgICBDb25zdGFudHMuaXNUb3VjaFRvb3RoUGFzdGUgPSB0cnVlO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQ29uc3RhbnRzLnRvb3RoUGFzdGVfUG9pbnRzU3RhdHVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBpZiAoIUNvbnN0YW50cy50b290aFBhc3RlX1BvaW50c1N0YXR1c1tqXSkge1xyXG4gICAgICAgICAgICBDb25zdGFudHMudG9vdGhQYXN0ZV9Qb2ludHNTdGF0dXNbal0gPSB0cnVlO1xyXG4gICAgICAgICAgICBDb25zdGFudHMudG9vdGhQYXN0ZV9Qb2ludHMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAhdGhpcy5BdWRpb01hbmFnZXIudG9vdGhQYXN0ZTFTb3VuZC5pc1BsYXlpbmcgJiYgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLnRvb3RoUGFzdGUxU291bmQpO1xyXG4gICAgICAgICAgICBDb25zdGFudHMuc3BpbmVfQnViYmxlc1tpXS5zZXRBbmltYXRpb24oMCwgU3BpbmVBbmltcy5idWJibGVBbmltLlNob3csIGZhbHNlKTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLnNwaW5lX0J1YmJsZXMuc3BsaWNlKGksIDEpO1xyXG5cclxuICAgICAgICAgICAgaWYgKENvbnN0YW50cy50b290aFBhc3RlX1BvaW50c1N0YXR1cy5ldmVyeShzdGF0dXMgPT4gc3RhdHVzID09PSB0cnVlKSkge1xyXG4gICAgICAgICAgICAgIENvbnN0YW50cy5pc0NhblRvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgQ29uc3RhbnRzLmlzRG9uZVRvb3RoUGFzdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci50b290aFBhc3RlLmFjdGl2ZSA9IGZhbHNlOyAgICAgIFxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRG9uZSBUb290aCBQYXN0ZSBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGNoZWNrQnJ1c2hUZWV0aCA9IChiZHg6IGNjLlJlY3QpOiB2b2lkID0+IHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ29uc3RhbnRzLldhdGVyX1BvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgY3VycmVudE5vZGUgPSBDb25zdGFudHMuV2F0ZXJfUG9pbnRzW2ldO1xyXG4gICAgICBpZiAoY3VycmVudE5vZGUuZ2V0Qm91bmRpbmdCb3goKS5pbnRlcnNlY3RzKGJkeCkpIHtcclxuICAgICAgICBDb25zdGFudHMuaXNUb3VjaFRvb3RoUGFzdGUgPSB0cnVlO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQ29uc3RhbnRzLndhdGVyX1BvaW50c1N0YXR1cy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgaWYgKCFDb25zdGFudHMud2F0ZXJfUG9pbnRzU3RhdHVzW2pdKSB7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy53YXRlcl9Qb2ludHNTdGF0dXNbal0gPSB0cnVlO1xyXG4gICAgICAgICAgICBDb25zdGFudHMuV2F0ZXJfUG9pbnRzLnNwbGljZShpLCAxKTtcclxuICAgIFxyXG4gICAgICAgICAgICBDb25zdGFudHMuc3BpbmVfV2F0ZXJCdWJibGVzW2ldLnNldEFuaW1hdGlvbigwLCBTcGluZUFuaW1zLmJ1YmJsZUFuaW0uQ2xlYW4sIGZhbHNlKTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLnNwaW5lX1dhdGVyQnViYmxlcy5zcGxpY2UoaSwgMSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoQ29uc3RhbnRzLndhdGVyX1BvaW50c1N0YXR1cy5ldmVyeShzdGF0dXMgPT4gc3RhdHVzID09PSB0cnVlKSkge1xyXG4gICAgICAgICAgICAgIENvbnN0YW50cy5pc0NhblRvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgQ29uc3RhbnRzLmlzRG9uZVdhdGVyQnJ1c2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci53YXRlclRvb3RoLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BTb3VuZChDb25zdGFudHMuU291bmRUcmFjay50b290aFBhc3RlMlNvdW5kKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRvbmUgV2F0ZXIgQnViYmxlIFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcbiAgcHJpdmF0ZSBzaG93VG9vdGhQYXN0ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hlY2tUb290aFBhc3RlRmxhZyA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNob3dUb29scyh0aGlzLk5vZGVDb250YWluZXIudG9vdGhQYXN0ZSwgZmFsc2UpO1xyXG4gICAgfSwgMS41KTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7dGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLlNoYWtlQnJ1c2gpfSwgMS44KTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHt0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoXHJcbiAgICAgIENvbnN0YW50cy5Tb3VuZFRyYWNrLnNoYW1wb29Tb3VuZClcclxuICAgICAgQ29uc3RhbnRzLmlzQ2FuVG91Y2ggPSB0cnVlO1xyXG4gICAgfSwgMy41KTtcclxuICB9IFxyXG5cclxuXHJcbiAgcHJpdmF0ZSBzaG93T3B0aW9ucygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hlY2tCcnVzaFRlZXRoRmxhZyA9IHRydWU7XHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suRG9uZVN0ZXBTb3VuZCk7XHJcbiAgICB0aGlzLnN0YXIyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJTdGFyQW5pbVwiKTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuT3B0aW9ucy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB0aGlzLk9wdGlvbnMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlNob3dPcHRpb25zXCIpO1xyXG5cclxuICAgICAgLy8gbXRnICYgYXBwbG92aW5cclxuICAgICAgLy8gdGhpcy5Ob2RlQ29udGFpbmVyLkhpZGVNYXNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUsIHRoaXMpO1xyXG4gICAgfSwgMS41KVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc2hvd1Rvb3RoQnJ1c2goKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRG9uZVRvb3RoUGFzdGVGbGFnID0gdHJ1ZTtcclxuICAgIHRoaXMuc3BfbW91dGguc2V0QW5pbWF0aW9uKDAsIFNwaW5lQW5pbXMuTGlwc0FuaW0uSWRsZSwgdHJ1ZSk7XHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2hvd1Rvb2xzKHRoaXMuTm9kZUNvbnRhaW5lci53YXRlclRvb3RoLCBmYWxzZSk7XHJcblxyXG4gICAgICB0aGlzLldhdGVyQnViYmxlUG9pbnQuc2V0UG9zaXRpb24odGhpcy5pbml0UG9zWzBdKVxyXG4gICAgICB0aGlzLldhdGVyQnViYmxlU3BpbmUubm9kZS5zZXRQb3NpdGlvbih0aGlzLmluaXRQb3NbMV0pXHJcbiAgICAgIHRoaXMuV2F0ZXJCdWJibGVIZWFkUG9pbnQuc2V0UG9zaXRpb24odGhpcy5pbml0UG9zWzJdKVxyXG4gICAgfSwgMS41KTtcclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICF0aGlzLmNoZWNrRHJ5ZXJGbGFnICYmIHRoaXMuaXNJbml0VmFycyAmJiB0aGlzLmhhbmRsZURvbmVEcnllcigpO1xyXG4gICAgQ29uc3RhbnRzLmlzRG9uZURyeWVyICYmICF0aGlzLmNoZWNrVG9vdGhQYXN0ZUZsYWcgJiYgdGhpcy5zaG93VG9vdGhQYXN0ZSgpO1xyXG4gICAgQ29uc3RhbnRzLmlzRG9uZVRvb3RoUGFzdGUgJiYgIXRoaXMuaXNEb25lVG9vdGhQYXN0ZUZsYWcgJiYgdGhpcy5zaG93VG9vdGhCcnVzaCgpO1xyXG4gICAgQ29uc3RhbnRzLmlzRG9uZVdhdGVyQnJ1c2ggJiYgIXRoaXMuY2hlY2tCcnVzaFRlZXRoRmxhZyAmJiB0aGlzLnNob3dPcHRpb25zKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------
