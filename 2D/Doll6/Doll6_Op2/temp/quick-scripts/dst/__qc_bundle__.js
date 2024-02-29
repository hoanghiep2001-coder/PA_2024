
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
require('./assets/Script/Data/Ultils');
require('./assets/Script/Data/constants');
require('./assets/Script/MainGame/Cell');
require('./assets/Script/MainGame/CellEnums');
require('./assets/Script/MainGame/Circle');
require('./assets/Script/MainGame/CircleEnums');
require('./assets/Script/MainGame/ClassHelpers');
require('./assets/Script/MainGame/GameField');
require('./assets/Script/MainGame/GamesController');
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
                    var __filename = 'preview-scripts/assets/Script/MainGame/CellEnums.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fd2f4r+EbtJnamSH2HbcfIE', 'CellEnums');
// Script/MainGame/CellEnums.ts

var typeCell;
(function (typeCell) {
    typeCell[typeCell["normal"] = 0] = "normal";
    typeCell[typeCell["franzy"] = 1] = "franzy";
})(typeCell || (typeCell = {}));
var typeColor;
(function (typeColor) {
    typeColor[typeColor["gray"] = 0] = "gray";
    typeColor[typeColor["white"] = 1] = "white";
})(typeColor || (typeColor = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluR2FtZVxcQ2VsbEVudW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUssUUFHSjtBQUhELFdBQUssUUFBUTtJQUNULDJDQUFVLENBQUE7SUFDViwyQ0FBTSxDQUFBO0FBQ1YsQ0FBQyxFQUhJLFFBQVEsS0FBUixRQUFRLFFBR1o7QUFFRCxJQUFLLFNBR0o7QUFIRCxXQUFLLFNBQVM7SUFDVix5Q0FBUSxDQUFBO0lBQ1IsMkNBQUssQ0FBQTtBQUNULENBQUMsRUFISSxTQUFTLEtBQVQsU0FBUyxRQUdiIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZW51bSB0eXBlQ2VsbCB7XHJcbiAgICBub3JtYWwgPSAwLFxyXG4gICAgZnJhbnp5LFxyXG59XHJcblxyXG5lbnVtIHR5cGVDb2xvciB7XHJcbiAgICBncmF5ID0gMCxcclxuICAgIHdoaXRlLFxyXG59Il19
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
        _this.clickSound = null;
        _this.woaSound = null;
        _this.woaSound2 = null;
        _this.SwapSound = null;
        _this.GemSound = null;
        _this.rainbowSound = null;
        return _this;
    }
    AudioManager.prototype.playSound = function (soundName) {
        // ironsource
        // if (Constants.ironSource.SoundState && Constants.ironSource.isPlayBgSound) {
        //     switch (soundName) {
        //         case "bgSound":
        //             this.bgSound.play();
        //             break;
        //         case "woaAnimeSound":
        //             this.woaAnimeSound.play();
        //             break;
        //         case "openBookSound":
        //             this.openBookSound.play();
        //             break;
        //         case "showItemSound":
        //             this.showItemSound.play();
        //             break;
        //         case "pickItemSound":
        //             this.pickItemSound.play();
        //             break;   
        //             case "waoGameSound":
        //             this.waoGameSound.play();
        //             break;
        //             case "swtichItemSound":
        //                 this.swtichItemSound.play();
        //                 break;
        //         default:
        //             break;
        //     }
        // }
        // ----------------
        if (constants_1.Constants.ironSource.SoundState) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "clickSound":
                    this.clickSound.play();
                    break;
                case "woaSound":
                    this.woaSound.play();
                    break;
                case "woaSound2":
                    this.woaSound2.play();
                    break;
                case "SwapSound":
                    this.SwapSound.play();
                    break;
                case "GemSound":
                    this.GemSound.play();
                    break;
                case "rainbowSound":
                    this.rainbowSound.play();
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
            case "clickSound":
                this.clickSound.stop();
                break;
            case "woaSound":
                this.woaSound.stop();
                break;
            case "woaSound2":
                this.woaSound2.stop();
                break;
            case "SwapSound":
                this.SwapSound.stop();
                break;
            case "GemSound":
                this.GemSound.stop();
                break;
            case "rainbowSound":
                this.rainbowSound.stop();
                break;
            default:
                break;
        }
    };
    AudioManager.prototype.stopAllSoundExceptBgSound = function () {
        this.clickSound.stop();
        this.woaSound.stop();
        this.SwapSound.stop();
        this.GemSound.stop();
        this.rainbowSound.stop();
        this.woaSound2.stop();
    };
    AudioManager.prototype.stopAllSound = function () {
        this.bgSound.stop();
        this.clickSound.stop();
        this.woaSound.stop();
        this.SwapSound.stop();
        this.GemSound.stop();
        this.rainbowSound.stop();
        this.woaSound2.stop();
    };
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "bgSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "clickSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "woaSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "woaSound2", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "SwapSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "GemSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "rainbowSound", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXEF1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFJNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUE4SEM7UUE1SEcsU0FBUztRQUVULGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLGdCQUFVLEdBQW1CLElBQUksQ0FBQztRQUVsQyxjQUFRLEdBQW1CLElBQUksQ0FBQztRQUVoQyxlQUFTLEdBQW1CLElBQUksQ0FBQztRQUVqQyxlQUFTLEdBQW1CLElBQUksQ0FBQztRQUVqQyxjQUFRLEdBQW1CLElBQUksQ0FBQztRQUVoQyxrQkFBWSxHQUFtQixJQUFJLENBQUM7O0lBOEd4QyxDQUFDO0lBNUdVLGdDQUFTLEdBQWhCLFVBQWlCLFNBQWlCO1FBQzlCLGFBQWE7UUFDYiwrRUFBK0U7UUFDL0UsMkJBQTJCO1FBQzNCLDBCQUEwQjtRQUMxQixtQ0FBbUM7UUFDbkMscUJBQXFCO1FBQ3JCLGdDQUFnQztRQUNoQyx5Q0FBeUM7UUFDekMscUJBQXFCO1FBQ3JCLGdDQUFnQztRQUNoQyx5Q0FBeUM7UUFDekMscUJBQXFCO1FBQ3JCLGdDQUFnQztRQUNoQyx5Q0FBeUM7UUFDekMscUJBQXFCO1FBQ3JCLGdDQUFnQztRQUNoQyx5Q0FBeUM7UUFDekMsd0JBQXdCO1FBQ3hCLG1DQUFtQztRQUNuQyx3Q0FBd0M7UUFDeEMscUJBQXFCO1FBQ3JCLHNDQUFzQztRQUN0QywrQ0FBK0M7UUFDL0MseUJBQXlCO1FBQ3pCLG1CQUFtQjtRQUNuQixxQkFBcUI7UUFDckIsUUFBUTtRQUNSLElBQUk7UUFDSixtQkFBbUI7UUFFbkIsSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7WUFD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QUUsQ0FBQyxXQUFXLENBQUM7a0RBQ087SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzttREFDUTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO21EQUNRO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7a0RBQ087SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztzREFDVztJQWhCbkIsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQThIaEM7SUFBRCxtQkFBQztDQTlIRCxBQThIQyxDQTlIeUMsRUFBRSxDQUFDLFNBQVMsR0E4SHJEO2tCQTlIb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gc291bmQgXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBiZ1NvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBjbGlja1NvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICB3b2FTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgd29hU291bmQyOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBTd2FwU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIEdlbVNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICByYWluYm93U291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgcGxheVNvdW5kKHNvdW5kTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgLy8gaXJvbnNvdXJjZVxyXG4gICAgICAgIC8vIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlICYmIENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQpIHtcclxuICAgICAgICAvLyAgICAgc3dpdGNoIChzb3VuZE5hbWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIGNhc2UgXCJiZ1NvdW5kXCI6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5iZ1NvdW5kLnBsYXkoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgICAgIGNhc2UgXCJ3b2FBbmltZVNvdW5kXCI6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy53b2FBbmltZVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgICAgIGNhc2UgXCJvcGVuQm9va1NvdW5kXCI6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5vcGVuQm9va1NvdW5kLnBsYXkoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgICAgIGNhc2UgXCJzaG93SXRlbVNvdW5kXCI6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5zaG93SXRlbVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgICAgIGNhc2UgXCJwaWNrSXRlbVNvdW5kXCI6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5waWNrSXRlbVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBicmVhazsgICBcclxuICAgICAgICAvLyAgICAgICAgICAgICBjYXNlIFwid2FvR2FtZVNvdW5kXCI6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy53YW9HYW1lU291bmQucGxheSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNhc2UgXCJzd3RpY2hJdGVtU291bmRcIjpcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5zd3RpY2hJdGVtU291bmQucGxheSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHNvdW5kTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImJnU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJnU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImNsaWNrU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWNrU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIndvYVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53b2FTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIndvYVNvdW5kMlwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndvYVNvdW5kMi5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlN3YXBTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU3dhcFNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJHZW1Tb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuR2VtU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInJhaW5ib3dTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFpbmJvd1NvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0b3BTb3VuZChzb3VuZE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAoc291bmROYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJiZ1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJnU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbGlja1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWNrU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3b2FTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy53b2FTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ3b2FTb3VuZDJcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndvYVNvdW5kMi5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJTd2FwU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuU3dhcFNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiR2VtU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuR2VtU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyYWluYm93U291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMucmFpbmJvd1NvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RvcEFsbFNvdW5kRXhjZXB0QmdTb3VuZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNsaWNrU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMud29hU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuU3dhcFNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLkdlbVNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLnJhaW5ib3dTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy53b2FTb3VuZDIuc3RvcCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RvcEFsbFNvdW5kKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmdTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5jbGlja1NvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLndvYVNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLlN3YXBTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5HZW1Tb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5yYWluYm93U291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMud29hU291bmQyLnN0b3AoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
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
    calculatedY: 0,
    calculatedX: 0,
    currentDevice: "",
};
var SoundTrack;
(function (SoundTrack) {
    SoundTrack["bgSound"] = "bgSound";
    SoundTrack["clickSound"] = "clickSound";
    SoundTrack["woaSound"] = "woaSound";
    SoundTrack["woaSound2"] = "woaSound2";
    SoundTrack["SwapSound"] = "SwapSound";
    SoundTrack["GemSound"] = "GemSound";
    SoundTrack["rainbowSound"] = "rainbowSound";
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    Constants.isRotate = false;
    Constants.isCanTouch = true;
    Constants.countScore = 0;
    Constants.isClickFirstTime = false;
    Constants.Board = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxLQUtKO0FBTEQsV0FBSyxLQUFLO0lBQ04sa0NBQXlCLENBQUE7SUFDekIsZ0NBQXVCLENBQUE7SUFDdkIsOEJBQXFCLENBQUE7SUFDckIsb0NBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQUxJLEtBQUssS0FBTCxLQUFLLFFBS1Q7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLGNBQWM7SUFDZCxVQUFVLEVBQUUsSUFBSTtJQUNoQixLQUFLLEVBQUUsQ0FBQztJQUNSLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLGFBQWEsRUFBRSxLQUFLO0NBQ3ZCLENBQUE7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLFdBQVcsRUFBRSxDQUFDO0lBQ2QsV0FBVyxFQUFFLENBQUM7SUFDZCxhQUFhLEVBQUUsRUFBRTtDQUNwQixDQUFBO0FBR0QsSUFBSyxVQVFKO0FBUkQsV0FBSyxVQUFVO0lBQ1gsaUNBQW1CLENBQUE7SUFDbkIsdUNBQXlCLENBQUE7SUFDekIsbUNBQXFCLENBQUE7SUFDckIscUNBQXVCLENBQUE7SUFDdkIscUNBQXVCLENBQUE7SUFDdkIsbUNBQXFCLENBQUE7SUFDckIsMkNBQTZCLENBQUE7QUFDakMsQ0FBQyxFQVJJLFVBQVUsS0FBVixVQUFVLFFBUWQ7QUFHRDtJQUFBO0lBd0JBLENBQUM7SUF0QkcsWUFBWTtJQUNMLGtCQUFRLEdBQVksS0FBSyxDQUFDO0lBQzFCLG9CQUFVLEdBQVksSUFBSSxDQUFDO0lBQzNCLG9CQUFVLEdBQVcsQ0FBQyxDQUFDO0lBQ3ZCLDBCQUFnQixHQUFZLEtBQUssQ0FBQztJQUNsQyxlQUFLLEdBQVksSUFBSSxDQUFDO0lBRTdCLFFBQVE7SUFDRCxlQUFLLEdBQWlCLEtBQUssQ0FBQztJQUduQyxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBR2xELGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFHbEQsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUV0RCxnQkFBQztDQXhCRCxBQXdCQyxJQUFBO0FBeEJZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5lbnVtIEV2ZW50IHtcclxuICAgIHRvdWNoU3RhcnQgPSBcInRvdWNoc3RhcnRcIixcclxuICAgIHRvdWNoTW92ZSA9IFwidG91Y2htb3ZlXCIsXHJcbiAgICB0b3VjaEVuZCA9IFwidG91Y2hlbmRcIixcclxuICAgIHRvdWNoQ2FuY2VsID0gXCJ0b3VjaGNhbmNlbFwiXHJcbn1cclxuXHJcblxyXG5jb25zdCBJcm9uU291cmNlID0ge1xyXG4gICAgLy8gaXJvbnNvdXJjZSBcclxuICAgIFNvdW5kU3RhdGU6IHRydWUsXHJcbiAgICBTdGF0ZTogMSxcclxuICAgIGlzRW5kR2FtZTogZmFsc2UsXHJcbiAgICBpc1BsYXlCZ1NvdW5kOiBmYWxzZSxcclxufVxyXG5cclxuXHJcbmNvbnN0IFJlc3BvbnNpdmUgPSB7XHJcbiAgICBjYWxjdWxhdGVkWTogMCxcclxuICAgIGNhbGN1bGF0ZWRYOiAwLFxyXG4gICAgY3VycmVudERldmljZTogXCJcIixcclxufVxyXG5cclxuXHJcbmVudW0gU291bmRUcmFjayB7XHJcbiAgICBiZ1NvdW5kID0gXCJiZ1NvdW5kXCIsXHJcbiAgICBjbGlja1NvdW5kID0gXCJjbGlja1NvdW5kXCIsXHJcbiAgICB3b2FTb3VuZCA9IFwid29hU291bmRcIixcclxuICAgIHdvYVNvdW5kMiA9IFwid29hU291bmQyXCIsXHJcbiAgICBTd2FwU291bmQgPSBcIlN3YXBTb3VuZFwiLFxyXG4gICAgR2VtU291bmQgPSBcIkdlbVNvdW5kXCIsXHJcbiAgICByYWluYm93U291bmQgPSBcInJhaW5ib3dTb3VuZFwiLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XHJcblxyXG4gICAgLy8gc3RhdGUgICAgXHJcbiAgICBzdGF0aWMgaXNSb3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0NhblRvdWNoOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHN0YXRpYyBjb3VudFNjb3JlOiBudW1iZXIgPSAwO1xyXG4gICAgc3RhdGljIGlzQ2xpY2tGaXJzdFRpbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBCb2FyZDogYW55W11bXSA9IG51bGw7XHJcblxyXG4gICAgLy8gZXZlbnRcclxuICAgIHN0YXRpYyBFdmVudDogdHlwZW9mIEV2ZW50ID0gRXZlbnQ7XHJcblxyXG5cclxuICAgIC8vIFNvdW5kVHJhY2tcclxuICAgIHN0YXRpYyBTb3VuZFRyYWNrOiB0eXBlb2YgU291bmRUcmFjayA9IFNvdW5kVHJhY2s7XHJcblxyXG5cclxuICAgIC8vIGlyb25Tb3VyY2VcclxuICAgIHN0YXRpYyBpcm9uU291cmNlOiB0eXBlb2YgSXJvblNvdXJjZSA9IElyb25Tb3VyY2U7XHJcblxyXG5cclxuICAgIC8vIFJlc3BvbnNpdmVcclxuICAgIHN0YXRpYyBSZXNwb25zaXZlOiB0eXBlb2YgUmVzcG9uc2l2ZSA9IFJlc3BvbnNpdmU7XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MainGame/Circle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7dbc7eE2d1AgKeAG34Dn73t', 'Circle');
// Script/MainGame/Circle.ts

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
exports.Circle = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprite = [];
        _this.circlesTipe = [];
        _this.Blink = null;
        _this.CircleTypeColor = null;
        _this.CircleType = 0;
        _this.inMove = false;
        return _this;
    }
    Circle.prototype.onLoad = function () {
        this.setRandomColor(false);
    };
    Circle.prototype.setRandomColor = function (flag) {
        var sp = this.node.getComponent(cc.Sprite);
        this.randomNumber = Math.floor(Math.random() * Math.floor(this.sprite.length));
        // if(flag && this.randomNumber <= 0) {
        //   this.randomNumber = this.randomNumber + 1;
        // } else if (flag && this.randomNumber >= 6) {
        //   this.randomNumber = this.randomNumber - 1;
        // }
        sp.spriteFrame = this.sprite[this.randomNumber];
        this.setColorTipe(this.randomNumber);
    };
    Circle.prototype.setTipe = function (tipe) {
        this.CircleType = tipe;
        if (tipe > 0) {
            if (tipe == 4) {
                this.setTipeTMP(1);
                this.setTipeTMP(2);
            }
            else {
                this.setTipeTMP(tipe - 1);
            }
        }
    };
    Circle.prototype.setTipeTMP = function (tipe) {
        var newNode = cc.instantiate(this.circlesTipe[tipe]);
        newNode.setParent(this.node);
        newNode.setContentSize(this.node.getContentSize());
        newNode.setPosition(0, 0);
    };
    Circle.prototype.setColorTipe = function (tipe) {
        var sp = this.node.getComponent(cc.Sprite);
        this.CircleTypeColor = tipe;
        sp.spriteFrame = this.sprite[tipe];
    };
    __decorate([
        property(cc.SpriteFrame)
    ], Circle.prototype, "sprite", void 0);
    __decorate([
        property(cc.Prefab)
    ], Circle.prototype, "circlesTipe", void 0);
    __decorate([
        property(cc.Node)
    ], Circle.prototype, "Blink", void 0);
    Circle = __decorate([
        ccclass
    ], Circle);
    return Circle;
}(cc.Component));
exports.Circle = Circle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluR2FtZVxcQ2lyY2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QiwwQkFBWTtJQUF4QztRQUFBLHFFQTBEQztRQXhEQyxZQUFNLEdBQXFCLEVBQUUsQ0FBQztRQUU5QixpQkFBVyxHQUFnQixFQUFFLENBQUM7UUFJOUIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixxQkFBZSxHQUFvQixJQUFJLENBQUM7UUFDeEMsZ0JBQVUsR0FBZSxDQUFDLENBQUM7UUFFM0IsWUFBTSxHQUFZLEtBQUssQ0FBQzs7SUE2QzFCLENBQUM7SUEzQ0MsdUJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELCtCQUFjLEdBQWQsVUFBZSxJQUFhO1FBQzFCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRS9FLHVDQUF1QztRQUN2QywrQ0FBK0M7UUFDL0MsK0NBQStDO1FBQy9DLCtDQUErQztRQUMvQyxJQUFJO1FBRUosRUFBRSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsd0JBQU8sR0FBUCxVQUFRLElBQUk7UUFDVixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDWixJQUFJLElBQUksSUFBSSxDQUFDLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMzQjtTQUNGO0lBQ0gsQ0FBQztJQUVPLDJCQUFVLEdBQWxCLFVBQW1CLElBQUk7UUFDckIsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDbkQsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELDZCQUFZLEdBQVosVUFBYSxJQUFJO1FBQ2YsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBdEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MENBQ0s7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDVTtJQUk5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNJO0lBUlgsTUFBTTtRQURsQixPQUFPO09BQ0ssTUFBTSxDQTBEbEI7SUFBRCxhQUFDO0NBMURELEFBMERDLENBMUQyQixFQUFFLENBQUMsU0FBUyxHQTBEdkM7QUExRFksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgdHlwZUNvbG9yQ2lyY2xlIH0gZnJvbSBcIi4vQ2lyY2xlRW51bXNcIjtcclxuaW1wb3J0IHsgdGlwZUNpcmNsZSB9IGZyb20gXCIuL0NpcmNsZUVudW1zXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIENpcmNsZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gIHNwcml0ZTogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgY2lyY2xlc1RpcGU6IGNjLlByZWZhYltdID0gW107XHJcblxyXG4gIFxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIEJsaW5rOiBjYy5Ob2RlID0gbnVsbDtcclxuICBcclxuICBDaXJjbGVUeXBlQ29sb3I6IHR5cGVDb2xvckNpcmNsZSA9IG51bGw7XHJcbiAgQ2lyY2xlVHlwZTogdGlwZUNpcmNsZSA9IDA7XHJcbiAgcmFuZG9tTnVtYmVyOiBudW1iZXI7XHJcbiAgaW5Nb3ZlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIHRoaXMuc2V0UmFuZG9tQ29sb3IoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgc2V0UmFuZG9tQ29sb3IoZmxhZzogYm9vbGVhbil7XHJcbiAgICB2YXIgc3AgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICB0aGlzLnJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IodGhpcy5zcHJpdGUubGVuZ3RoKSk7XHJcblxyXG4gICAgLy8gaWYoZmxhZyAmJiB0aGlzLnJhbmRvbU51bWJlciA8PSAwKSB7XHJcbiAgICAvLyAgIHRoaXMucmFuZG9tTnVtYmVyID0gdGhpcy5yYW5kb21OdW1iZXIgKyAxO1xyXG4gICAgLy8gfSBlbHNlIGlmIChmbGFnICYmIHRoaXMucmFuZG9tTnVtYmVyID49IDYpIHtcclxuICAgIC8vICAgdGhpcy5yYW5kb21OdW1iZXIgPSB0aGlzLnJhbmRvbU51bWJlciAtIDE7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgc3Auc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZVt0aGlzLnJhbmRvbU51bWJlcl07XHJcbiAgICB0aGlzLnNldENvbG9yVGlwZSh0aGlzLnJhbmRvbU51bWJlcik7XHJcbiAgfVxyXG5cclxuICBzZXRUaXBlKHRpcGUpIHtcclxuICAgIHRoaXMuQ2lyY2xlVHlwZSA9IHRpcGU7XHJcbiAgICBpZiAodGlwZSA+IDApIHtcclxuICAgICAgaWYgKHRpcGUgPT0gNCkge1xyXG4gICAgICAgIHRoaXMuc2V0VGlwZVRNUCgxKTtcclxuICAgICAgICB0aGlzLnNldFRpcGVUTVAoMik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRUaXBlVE1QKHRpcGUgLSAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRUaXBlVE1QKHRpcGUpIHtcclxuICAgIHZhciBuZXdOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5jaXJjbGVzVGlwZVt0aXBlXSk7XHJcbiAgICBuZXdOb2RlLnNldFBhcmVudCh0aGlzLm5vZGUpO1xyXG4gICAgbmV3Tm9kZS5zZXRDb250ZW50U2l6ZSh0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKSk7XHJcbiAgICBuZXdOb2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29sb3JUaXBlKHRpcGUpIHtcclxuICAgIHZhciBzcCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgIHRoaXMuQ2lyY2xlVHlwZUNvbG9yID0gdGlwZTtcclxuICAgIHNwLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVbdGlwZV07XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MainGame/ClassHelpers.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '713b5j6l2pMO79Lgw9EqBJF', 'ClassHelpers');
// Script/MainGame/ClassHelpers.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckerBoolean = void 0;
var CheckerBoolean = /** @class */ (function () {
    function CheckerBoolean() {
    }
    CheckerBoolean.checkTwoBoolean = function (one, two) {
        return one && two;
    };
    CheckerBoolean.checkTrheeBoolean = function (one, two, trhee) {
        return one && two && trhee;
    };
    CheckerBoolean.EqualsTwoObj = function (one, two) {
        return one === two;
    };
    CheckerBoolean.EqualsTrheeObj = function (one, two, trhee) {
        if (one === two && two === trhee)
            return true;
        return false;
    };
    CheckerBoolean.isValidPlacement = function (board, row, col, circleType) {
        // Kiểm tra hàng
        if (col >= 2 && board[row][col - 1] === circleType && board[row][col - 2] === circleType) {
            return false;
        }
        // Kiểm tra cột
        if (row >= 2 && board[row - 1][col] === circleType && board[row - 2][col] === circleType) {
            return false;
        }
        return true;
    };
    return CheckerBoolean;
}());
exports.CheckerBoolean = CheckerBoolean;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluR2FtZVxcQ2xhc3NIZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFnQ0EsQ0FBQztJQTlCZSw4QkFBZSxHQUE3QixVQUE4QixHQUFHLEVBQUUsR0FBRztRQUNwQyxPQUFPLEdBQUcsSUFBSSxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUVhLGdDQUFpQixHQUEvQixVQUFnQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUs7UUFDN0MsT0FBTyxHQUFHLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRWEsMkJBQVksR0FBMUIsVUFBMkIsR0FBRyxFQUFFLEdBQUc7UUFDakMsT0FBTyxHQUFHLEtBQUssR0FBRyxDQUFDO0lBQ3JCLENBQUM7SUFFYSw2QkFBYyxHQUE1QixVQUE2QixHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUs7UUFDMUMsSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFJLEdBQUcsS0FBSyxLQUFLO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDOUMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRWEsK0JBQWdCLEdBQTlCLFVBQStCLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFVBQVU7UUFDeEQsZ0JBQWdCO1FBQ2hCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLFVBQVUsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLFVBQVUsRUFBRTtZQUN0RixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELGVBQWU7UUFDZixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxVQUFVLElBQUksS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDdEYsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCxxQkFBQztBQUFELENBaENBLEFBZ0NDLElBQUE7QUFoQ1ksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2hlY2tlckJvb2xlYW4ge1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGNoZWNrVHdvQm9vbGVhbihvbmUsIHR3bykge1xyXG4gICAgcmV0dXJuIG9uZSAmJiB0d287XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNoZWNrVHJoZWVCb29sZWFuKG9uZSwgdHdvLCB0cmhlZSkge1xyXG4gICAgcmV0dXJuIG9uZSAmJiB0d28gJiYgdHJoZWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIEVxdWFsc1R3b09iaihvbmUsIHR3bykge1xyXG4gICAgcmV0dXJuIG9uZSA9PT0gdHdvO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBFcXVhbHNUcmhlZU9iaihvbmUsIHR3bywgdHJoZWUpIHtcclxuICAgIGlmIChvbmUgPT09IHR3byAmJiB0d28gPT09IHRyaGVlKSByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaXNWYWxpZFBsYWNlbWVudChib2FyZCwgcm93LCBjb2wsIGNpcmNsZVR5cGUpOiBib29sZWFuIHtcclxuICAgIC8vIEtp4buDbSB0cmEgaMOgbmdcclxuICAgIGlmIChjb2wgPj0gMiAmJiBib2FyZFtyb3ddW2NvbCAtIDFdID09PSBjaXJjbGVUeXBlICYmIGJvYXJkW3Jvd11bY29sIC0gMl0gPT09IGNpcmNsZVR5cGUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gS2nhu4NtIHRyYSBj4buZdFxyXG4gICAgaWYgKHJvdyA+PSAyICYmIGJvYXJkW3JvdyAtIDFdW2NvbF0gPT09IGNpcmNsZVR5cGUgJiYgYm9hcmRbcm93IC0gMl1bY29sXSA9PT0gY2lyY2xlVHlwZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MainGame/CircleEnums.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3b838rchfZDZ7EUO6w1VHtd', 'CircleEnums');
// Script/MainGame/CircleEnums.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipeCircle = exports.typeColorCircle = void 0;
var typeColorCircle;
(function (typeColorCircle) {
    typeColorCircle[typeColorCircle["red"] = 0] = "red";
    typeColorCircle[typeColorCircle["yellow"] = 1] = "yellow";
    typeColorCircle[typeColorCircle["green"] = 2] = "green";
    typeColorCircle[typeColorCircle["purple"] = 3] = "purple";
    typeColorCircle[typeColorCircle["blue"] = 4] = "blue";
    typeColorCircle[typeColorCircle["orange"] = 5] = "orange";
})(typeColorCircle = exports.typeColorCircle || (exports.typeColorCircle = {}));
var tipeCircle;
(function (tipeCircle) {
    tipeCircle[tipeCircle["normal"] = 0] = "normal";
    tipeCircle[tipeCircle["lightningHorizont"] = 1] = "lightningHorizont";
    tipeCircle[tipeCircle["lightningVertical"] = 2] = "lightningVertical";
    tipeCircle[tipeCircle["rainbowBall"] = 3] = "rainbowBall";
})(tipeCircle = exports.tipeCircle || (exports.tipeCircle = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluR2FtZVxcQ2lyY2xlRW51bXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBWSxlQU9YO0FBUEQsV0FBWSxlQUFlO0lBQ3ZCLG1EQUFHLENBQUE7SUFDSCx5REFBTSxDQUFBO0lBQ04sdURBQUssQ0FBQTtJQUNMLHlEQUFNLENBQUE7SUFDTixxREFBSSxDQUFBO0lBQ0oseURBQU0sQ0FBQTtBQUNWLENBQUMsRUFQVyxlQUFlLEdBQWYsdUJBQWUsS0FBZix1QkFBZSxRQU8xQjtBQUVELElBQVksVUFLWDtBQUxELFdBQVksVUFBVTtJQUNsQiwrQ0FBTSxDQUFBO0lBQ04scUVBQWlCLENBQUE7SUFDakIscUVBQWlCLENBQUE7SUFDakIseURBQVcsQ0FBQTtBQUNmLENBQUMsRUFMVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUtyQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIHR5cGVDb2xvckNpcmNsZSB7XHJcbiAgICByZWQsXHJcbiAgICB5ZWxsb3csXHJcbiAgICBncmVlbixcclxuICAgIHB1cnBsZSxcclxuICAgIGJsdWUsXHJcbiAgICBvcmFuZ2UsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIHRpcGVDaXJjbGUge1xyXG4gICAgbm9ybWFsLFxyXG4gICAgbGlnaHRuaW5nSG9yaXpvbnQsXHJcbiAgICBsaWdodG5pbmdWZXJ0aWNhbCxcclxuICAgIHJhaW5ib3dCYWxsLFxyXG59Il19
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Responsive = /** @class */ (function (_super) {
    __extends(Responsive, _super);
    function Responsive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.UI_player = null;
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
        this.UI_player.getComponent(cc.Widget).top = 0;
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        this.UI_player.getComponent(cc.Widget).top = 0;
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
        this.UI_player.getComponent(cc.Widget).top = -110;
    };
    Responsive.prototype.setMobile = function () {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        this.device = this.VERTICAL_MOBILE;
        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width > 1.5) {
            if (cc.view.getFrameSize().width / cc.view.getFrameSize().height >= 0.6 && cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.62) {
                // mobile mode applovin
                this.UI_player.getComponent(cc.Widget).top = -30;
                return;
            }
            // Iphone 6 / 6 Plus / 7 / 7 Plus   
            this.UI_player.getComponent(cc.Widget).top = -45;
        }
        else {
            this.UI_player.getComponent(cc.Widget).top = 0;
        }
    };
    Responsive.prototype.update = function (dt) {
        this.handleRotate();
    };
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "UI_player", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFJlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUF3R0M7UUFyR0csZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixRQUFRO1FBQ1IsWUFBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLG9CQUFjLEdBQVcsZ0JBQWdCLENBQUM7UUFDMUMsdUJBQWlCLEdBQVcsbUJBQW1CLENBQUM7UUFDaEQsa0JBQVksR0FBVyxjQUFjLENBQUM7UUFDdEMscUJBQWUsR0FBVyxpQkFBaUIsQ0FBQzs7SUE0RmhELENBQUM7SUExRmEsMkJBQU0sR0FBaEI7SUFFQSxDQUFDO0lBRVMsMEJBQUssR0FBZjtJQUVBLENBQUM7SUFFTyxpQ0FBWSxHQUFwQjtRQUNJLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUU7WUFDOUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEI7SUFDTCxDQUFDO0lBRU8sa0NBQWEsR0FBckI7UUFDSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksRUFB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SUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFwR0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUTtJQUhULFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0F3RzlCO0lBQUQsaUJBQUM7Q0F4R0QsQUF3R0MsQ0F4R3VDLEVBQUUsQ0FBQyxTQUFTLEdBd0duRDtrQkF4R29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNwb25zaXZlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFVJX3BsYXllcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gc3RhdGVcclxuICAgIGRldmljZTogc3RyaW5nID0gXCJcIjtcclxuICAgIGlzUm90YXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgSE9SSVpPTlRBTF9JUFg6IHN0cmluZyA9IFwiaG9yaXpvbnRhbF9JUFhcIjtcclxuICAgIEhPUklaT05UQUxfVEFCTEVUOiBzdHJpbmcgPSBcImhvcml6b250YWxfVGFibGV0XCI7XHJcbiAgICBWRVJUSUNBTF9JUFg6IHN0cmluZyA9IFwidmVydGljYWxfSVBYXCI7XHJcbiAgICBWRVJUSUNBTF9NT0JJTEU6IHN0cmluZyA9IFwidmVydGljYWxfTW9iaWxlXCI7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVJvdGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCA+IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNSb3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzUm90YXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmVydGljYWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggPCAwLjY1KSB7XHJcbiAgICAgICAgICAgIC8vIElwaG9uZSA2IC8gNiBwbHVzIC8gNyAvIDcgUGx1cyAvIFhcclxuICAgICAgICAgICAgdGhpcy5zZXRIb3Jpem9udGFsRm9ySXBYKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRIb3Jpem9udGFsRm9yVGFibGV0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbEZvcklwWCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5IT1JJWk9OVEFMX0lQWCA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLkhPUklaT05UQUxfSVBYO1xyXG5cclxuICAgICAgICB0aGlzLlVJX3BsYXllci5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbEZvclRhYmxldCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5IT1JJWk9OVEFMX1RBQkxFVCA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLkhPUklaT05UQUxfVEFCTEVUO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuVUlfcGxheWVyLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRWZXJ0aWNhbCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0IDwgMC41KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SXBob25lWCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TW9iaWxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0SXBob25lWCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5WRVJUSUNBTF9JUFggPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gdGhpcy5WRVJUSUNBTF9JUFg7XHJcblxyXG4gICAgICAgIHRoaXMuVUlfcGxheWVyLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IC0xMTA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRNb2JpbGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuVkVSVElDQUxfTU9CSUxFID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gdGhpcy5WRVJUSUNBTF9NT0JJTEU7XHJcblxyXG4gICAgICAgIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggPiAxLjUpIHtcclxuICAgICAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA+PSAwLjYgJiYgY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0IDwgMC42Mikge1xyXG4gICAgICAgICAgICAgICAgLy8gbW9iaWxlIG1vZGUgYXBwbG92aW5cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLlVJX3BsYXllci5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAtMzA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElwaG9uZSA2IC8gNiBQbHVzIC8gNyAvIDcgUGx1cyAgIFxyXG4gICAgICAgICAgICB0aGlzLlVJX3BsYXllci5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAtNDU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5VSV9wbGF5ZXIuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUm90YXRlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
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
var checkRowForThree = function (candiesArr) {
    var _loop_1 = function (i) {
        var rowOfThree = [i, i + 1, i + 2]; // Xác định một hàng có 3 ô liên tiếp
        var isBlank = candiesArr[i].active;
        var decidedColor = candiesArr[i].name;
        // console.log(Constants.decidedColor);
        // console.log(i);
        // Loại trừ các ô cuối cùng của mỗi hàng để không bắt đầu kiểm tra từ chúng
        var notValid = [5, 6, 12, 13, 19, 20, 26, 27, 33, 34, 40, 41, 47, 48, 54, 55];
        if (notValid.includes(i))
            return "continue";
        if (rowOfThree.every(function (index) { return candiesArr[index].name === decidedColor; })) {
            // score += 3; // Tăng điểm cho người chơi
            // scoreDisplay.innerHTML = score; // Cập nhật điểm số trên giao diện
            console.log("Check");
            rowOfThree.forEach(function (index) {
                candiesArr[index].active = false; // Làm trống các ô đã kiểm tra
            });
        }
    };
    for (var i = 0; i < 56; i++) {
        _loop_1(i);
    }
};
var GamePlay = {
    checkRowForThree: checkRowForThree,
};
var Ultils = /** @class */ (function () {
    function Ultils() {
    }
    Ultils.GamePlay = GamePlay;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxVbHRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUMsSUFBTSxnQkFBZ0IsR0FBRyxVQUFDLFVBQXFCOzRCQUVsQyxDQUFDO1FBQ04sSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQ0FBcUM7UUFDckUsSUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFJLFlBQVksR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3RDLHVDQUF1QztRQUN2QyxrQkFBa0I7UUFFbEIsMkVBQTJFO1FBQzNFLElBQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDaEYsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs4QkFBVztRQUVuQyxJQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFLLFlBQVksRUFBdkMsQ0FBdUMsQ0FBQyxFQUFFO1lBQ25FLDBDQUEwQztZQUMxQyxxRUFBcUU7WUFDckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVyQixVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztnQkFDcEIsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyw4QkFBOEI7WUFDcEUsQ0FBQyxDQUFDLENBQUM7U0FDTjs7SUFuQkwsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQWxCLENBQUM7S0FvQlQ7QUFFTCxDQUFDLENBQUE7QUFHRCxJQUFNLFFBQVEsR0FBRztJQUNiLGdCQUFnQixFQUFFLGdCQUFnQjtDQUVyQyxDQUFBO0FBRUQ7SUFBQTtJQUlBLENBQUM7SUFGUyxlQUFRLEdBQW9CLFFBQVEsQ0FBQztJQUUvQyxhQUFDO0NBSkQsQUFJQyxJQUFBO0FBSlksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5cclxuY29uc3QgY2hlY2tSb3dGb3JUaHJlZSA9IChjYW5kaWVzQXJyOiBjYy5Ob2RlW10pID0+IHtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU2OyBpKyspIHsgLy8gRHV54buHdCBxdWEgbeG7l2kgw7QgdHJvbmcgbMaw4bubaSA4eDdcclxuICAgICAgICBsZXQgcm93T2ZUaHJlZSA9IFtpLCBpKzEsIGkrMl07IC8vIFjDoWMgxJHhu4tuaCBt4buZdCBow6BuZyBjw7MgMyDDtCBsacOqbiB0aeG6v3BcclxuICAgICAgICBjb25zdCBpc0JsYW5rID0gY2FuZGllc0FycltpXS5hY3RpdmU7XHJcbiAgICAgICAgbGV0IGRlY2lkZWRDb2xvciA9IGNhbmRpZXNBcnJbaV0ubmFtZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhDb25zdGFudHMuZGVjaWRlZENvbG9yKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhpKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBMb+G6oWkgdHLhu6sgY8OhYyDDtCBjdeG7kWkgY8O5bmcgY+G7p2EgbeG7l2kgaMOgbmcgxJHhu4Mga2jDtG5nIGLhuq90IMSR4bqndSBraeG7g20gdHJhIHThu6sgY2jDum5nXHJcbiAgICAgICAgY29uc3Qgbm90VmFsaWQgPSBbNSwgNiwgMTIsIDEzLCAxOSwgMjAsIDI2LCAyNywgMzMsIDM0LCA0MCwgNDEsIDQ3LCA0OCwgNTQsIDU1XTtcclxuICAgICAgICBpZiAobm90VmFsaWQuaW5jbHVkZXMoaSkpIGNvbnRpbnVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHJvd09mVGhyZWUuZXZlcnkoaW5kZXggPT4gY2FuZGllc0FycltpbmRleF0ubmFtZSA9PT0gZGVjaWRlZENvbG9yKSkge1xyXG4gICAgICAgICAgICAvLyBzY29yZSArPSAzOyAvLyBUxINuZyDEkWnhu4NtIGNobyBuZ8aw4budaSBjaMahaVxyXG4gICAgICAgICAgICAvLyBzY29yZURpc3BsYXkuaW5uZXJIVE1MID0gc2NvcmU7IC8vIEPhuq1wIG5o4bqtdCDEkWnhu4NtIHPhu5EgdHLDqm4gZ2lhbyBkaeG7h25cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGVja1wiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJvd09mVGhyZWUuZm9yRWFjaChpbmRleCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYW5kaWVzQXJyW2luZGV4XS5hY3RpdmUgPSBmYWxzZTsgLy8gTMOgbSB0cuG7kW5nIGPDoWMgw7QgxJHDoyBraeG7g20gdHJhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuY29uc3QgR2FtZVBsYXkgPSB7XHJcbiAgICBjaGVja1Jvd0ZvclRocmVlOiBjaGVja1Jvd0ZvclRocmVlLFxyXG4gICAgLy8gY2hlY2tDb2xsaWRlTWFnZ290OiBjaGVja0NvbGxpZGVNYWdnb3RcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVsdGlscyB7XHJcblxyXG4gICBzdGF0aWMgR2FtZVBsYXk6IHR5cGVvZiBHYW1lUGxheSA9IEdhbWVQbGF5O1xyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MainGame/GamesController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e906eWDGftIDL9q6NIO0kDr', 'GamesController');
// Script/MainGame/GamesController.ts

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
var GameField_1 = require("./GameField");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.countTypeAndMove = 12;
        _this.allpoints = 0;
        _this.taskpoints = 0;
        _this.movepoints = 0;
        _this.testGame = true;
        _this.gameField = null;
        _this.blockField = null;
        _this.AudioManager = null;
        return _this;
    }
    GameController.prototype.onLoad = function () {
        this.node.on('moveCircleEnd', this.gameField.createOneLineCircles, this.gameField);
        this.node.on('moveCircleEnd', function (event) {
            event.stopPropagation();
        });
        this.node.on('clickOnCellForDestroyCircle', this.gameField.clickDestroyCircleInCell, this.gameField);
        this.node.on('clickOnCellForDestroyCircle', function (event) {
            event.stopPropagation();
        });
        this.node.on('destroyCircles', this.gameField.allCirclesMove, this.gameField);
        this.node.on('destroyCircles', function (event) {
            event.stopPropagation();
        });
        this.node.on('needCheckField', this.gameField.checkLine, this.gameField);
        this.node.on('needCheckField', function (event) {
            event.stopPropagation();
        });
        this.node.on('setPoint', this.setPoint, this);
        this.node.on('setPoint', function (event) {
            event.stopPropagation();
        });
        this.node.on('getDestroyCirclesType', this.gameField.getTypeDestroyCircle, this.gameField);
        this.node.on('getDestroyCirclesType', function (event) {
            event.stopPropagation();
        });
        this.node.on('setDestroyCirclesType_', this.setTypeDestroyCircle, this);
        this.node.on('setDestroyCirclesType_', function (event) {
            event.stopPropagation();
        });
        this.node.on('countProgressStep', this.countProgressStep, this);
        this.node.on('countProgressStep', function (event) {
            event.stopPropagation();
        });
        this.node.on('countProgressDestrCirles', this.countProgressStep, this);
        this.node.on('countProgressDestrCirles', function (event) {
            event.stopPropagation();
        });
    };
    GameController.prototype.setPoint = function () {
        this.allpoints += 1;
    };
    GameController.prototype.countProgressStep = function () {
        this.movepoints--;
        cc.log(this.movepoints);
    };
    GameController.prototype.progressTargetDestoyCircle = function () {
    };
    GameController.prototype.gameOverNodeDeActivate = function () {
    };
    GameController.prototype.gameWonNodeDeActivate = function () {
    };
    GameController.prototype.CheckGameOverIfColorChallengeIsComplete = function () {
    };
    GameController.prototype.RestartGame = function () {
        this.gameField.node.active = false;
        this.gameField.node.active = true;
        this.allpoints = 1;
        this.movepoints = this.countTypeAndMove;
    };
    GameController.prototype.setTypeDestroyCircle = function () {
        this.progressTargetDestoyCircle();
    };
    GameController.prototype.start = function () {
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound)
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
                mraid.open("https://play.google.com/store/apps/details?id=com.an.fashiongame.dolldressup");
                return;
            }
            // if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
            //     mraid.open("https://itunes.apple.com/us/app/id6449269733?mt=8");
            //     return;
            // }
            mraid.open("https://play.google.com/store/apps/details?id=com.an.fashiongame.dolldressup");
            return;
        }
        // If ad network is mindwork. window alway avaiable so skip undefined check
        window.install && window.install();
    };
    __decorate([
        property
    ], GameController.prototype, "countTypeAndMove", void 0);
    __decorate([
        property
    ], GameController.prototype, "testGame", void 0);
    __decorate([
        property(GameField_1.GameField)
    ], GameController.prototype, "gameField", void 0);
    __decorate([
        property(cc.Node)
    ], GameController.prototype, "blockField", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluR2FtZVxcR2FtZXNDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBRWxELHlDQUF3QztBQUNsQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQyxrQ0FBWTtJQUFoRDtRQUFBLHFFQStKQztRQTVKRyxzQkFBZ0IsR0FBVyxFQUFFLENBQUM7UUFFdEIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUV0QixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUV2QixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUcvQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFHNUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUEyRjNCLGtCQUFZLEdBQWlCLElBQUksQ0FBQzs7SUFrRHRDLENBQUM7SUExSUcsK0JBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsVUFBVSxLQUFLO1lBQ3pDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLDZCQUE2QixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLDZCQUE2QixFQUFFLFVBQVUsS0FBSztZQUN2RCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsVUFBVSxLQUFLO1lBQzFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLEtBQUs7WUFDMUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQVUsS0FBSztZQUNwQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFHSCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxVQUFVLEtBQUs7WUFDakQsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLHdCQUF3QixFQUFFLFVBQVUsS0FBSztZQUNsRCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsVUFBVSxLQUFLO1lBQzdDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLDBCQUEwQixFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxVQUFVLEtBQUs7WUFDcEQsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUdPLGlDQUFRLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUdPLDBDQUFpQixHQUF6QjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUMzQixDQUFDO0lBRUQsbURBQTBCLEdBQTFCO0lBRUEsQ0FBQztJQUVELCtDQUFzQixHQUF0QjtJQUVBLENBQUM7SUFFRCw4Q0FBcUIsR0FBckI7SUFFQSxDQUFDO0lBRU8sZ0VBQXVDLEdBQS9DO0lBRUEsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDNUMsQ0FBQztJQUVELDZDQUFvQixHQUFwQjtRQUNJLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFNUyw4QkFBSyxHQUFmO1FBQ0ksNERBQTREO1FBQzVELE1BQU0sQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFTSxzQ0FBYSxHQUFwQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIscUJBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRW5DLHlCQUF5QjtRQUN6QixJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxXQUFXLEVBQUU7WUFDckMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNsQyxPQUFPO1NBQ1Y7UUFFRCw4QkFBOEI7UUFDOUIsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQ2pDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNmLE9BQU87U0FDVjtRQUVELCtCQUErQjtRQUMvQixJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFXLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLE9BQU87U0FDVjtRQUVELGtDQUFrQztRQUNsQyxJQUFJLE9BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxXQUFXLEVBQUU7WUFDOUIsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRTtnQkFDL0QsS0FBSyxDQUFDLElBQUksQ0FBQyw4RUFBOEUsQ0FBQyxDQUFDO2dCQUMzRixPQUFPO2FBQ1Y7WUFFRCw4RkFBOEY7WUFDOUYsdUVBQXVFO1lBQ3ZFLGNBQWM7WUFDZCxJQUFJO1lBRUosS0FBSyxDQUFDLElBQUksQ0FBQyw4RUFBOEUsQ0FBQyxDQUFDO1lBQzNGLE9BQU87U0FDVjtRQUNELDJFQUEyRTtRQUMzRSxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBMUpEO1FBREMsUUFBUTs0REFDcUI7SUFTOUI7UUFEQyxRQUFRO29EQUNnQjtJQUd6QjtRQURDLFFBQVEsQ0FBQyxxQkFBUyxDQUFDO3FEQUNRO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ1M7SUEyRjNCO1FBREMsUUFBUSxDQUFDLHNCQUFZLENBQUM7d0RBQ1c7SUE3R3pCLGNBQWM7UUFEMUIsT0FBTztPQUNLLGNBQWMsQ0ErSjFCO0lBQUQscUJBQUM7Q0EvSkQsQUErSkMsQ0EvSm1DLEVBQUUsQ0FBQyxTQUFTLEdBK0ovQztBQS9KWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IENpcmNsZSB9IGZyb20gXCIuL0NpcmNsZVwiO1xyXG5pbXBvcnQgeyBHYW1lRmllbGQgfSBmcm9tIFwiLi9HYW1lRmllbGRcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBHYW1lQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBjb3VudFR5cGVBbmRNb3ZlOiBudW1iZXIgPSAxMjtcclxuXHJcbiAgICBwcml2YXRlIGFsbHBvaW50czogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHRhc2twb2ludHM6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlcG9pbnRzOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGVzdEdhbWU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIEBwcm9wZXJ0eShHYW1lRmllbGQpXHJcbiAgICBnYW1lRmllbGQ6IEdhbWVGaWVsZCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBibG9ja0ZpZWxkOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBcclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCdtb3ZlQ2lyY2xlRW5kJywgdGhpcy5nYW1lRmllbGQuY3JlYXRlT25lTGluZUNpcmNsZXMsIHRoaXMuZ2FtZUZpZWxkKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oJ21vdmVDaXJjbGVFbmQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbignY2xpY2tPbkNlbGxGb3JEZXN0cm95Q2lyY2xlJywgdGhpcy5nYW1lRmllbGQuY2xpY2tEZXN0cm95Q2lyY2xlSW5DZWxsLCB0aGlzLmdhbWVGaWVsZCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCdjbGlja09uQ2VsbEZvckRlc3Ryb3lDaXJjbGUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbignZGVzdHJveUNpcmNsZXMnLCB0aGlzLmdhbWVGaWVsZC5hbGxDaXJjbGVzTW92ZSwgdGhpcy5nYW1lRmllbGQpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbignZGVzdHJveUNpcmNsZXMnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbignbmVlZENoZWNrRmllbGQnLCB0aGlzLmdhbWVGaWVsZC5jaGVja0xpbmUsIHRoaXMuZ2FtZUZpZWxkKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oJ25lZWRDaGVja0ZpZWxkJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oJ3NldFBvaW50JywgdGhpcy5zZXRQb2ludCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCdzZXRQb2ludCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbignZ2V0RGVzdHJveUNpcmNsZXNUeXBlJywgdGhpcy5nYW1lRmllbGQuZ2V0VHlwZURlc3Ryb3lDaXJjbGUsIHRoaXMuZ2FtZUZpZWxkKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oJ2dldERlc3Ryb3lDaXJjbGVzVHlwZScsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCdzZXREZXN0cm95Q2lyY2xlc1R5cGVfJywgdGhpcy5zZXRUeXBlRGVzdHJveUNpcmNsZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCdzZXREZXN0cm95Q2lyY2xlc1R5cGVfJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oJ2NvdW50UHJvZ3Jlc3NTdGVwJywgdGhpcy5jb3VudFByb2dyZXNzU3RlcCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCdjb3VudFByb2dyZXNzU3RlcCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm5vZGUub24oJ2NvdW50UHJvZ3Jlc3NEZXN0ckNpcmxlcycsIHRoaXMuY291bnRQcm9ncmVzc1N0ZXAsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbignY291bnRQcm9ncmVzc0Rlc3RyQ2lybGVzJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldFBvaW50KCkge1xyXG4gICAgICAgIHRoaXMuYWxscG9pbnRzICs9IDE7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY291bnRQcm9ncmVzc1N0ZXAoKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlcG9pbnRzLS07XHJcbiAgICAgICAgY2MubG9nKHRoaXMubW92ZXBvaW50cylcclxuICAgIH1cclxuXHJcbiAgICBwcm9ncmVzc1RhcmdldERlc3RveUNpcmNsZSgpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnYW1lT3Zlck5vZGVEZUFjdGl2YXRlKCl7XHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZVdvbk5vZGVEZUFjdGl2YXRlKCl7XHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBDaGVja0dhbWVPdmVySWZDb2xvckNoYWxsZW5nZUlzQ29tcGxldGUoKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgUmVzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lRmllbGQubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdhbWVGaWVsZC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hbGxwb2ludHMgPSAxO1xyXG4gICAgICAgIHRoaXMubW92ZXBvaW50cyA9IHRoaXMuY291bnRUeXBlQW5kTW92ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUeXBlRGVzdHJveUNpcmNsZSgpIHtcclxuICAgICAgICB0aGlzLnByb2dyZXNzVGFyZ2V0RGVzdG95Q2lyY2xlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgICBcclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZClcclxuICAgICAgICB3aW5kb3cuZ2FtZVJlYWR5ICYmIHdpbmRvdy5nYW1lUmVhZHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5zdGFsbEhhbmRsZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluc3RhbGxcIik7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNFbmRHYW1lID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5zdG9wQWxsU291bmQoKTtcclxuICAgICAgICB3aW5kb3cuZ2FtZUVuZCAmJiB3aW5kb3cuZ2FtZUVuZCgpO1xyXG5cclxuICAgICAgICAvL0lmIGFkIG5ldHdvcmsgaXMgdGlrdG9rXHJcbiAgICAgICAgaWYgKHR5cGVvZiAocGxheWFibGVTREspICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgd2luZG93LnBsYXlhYmxlU0RLLm9wZW5BcHBTdG9yZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBhZCBuZXR3b3JrIGlzIGdvb2dsZSBhZHNcclxuICAgICAgICBpZiAodHlwZW9mIChFeGl0QXBpKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIEV4aXRBcGkuZXhpdCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBhZCBuZXR3cm9rIGlzIGlyb25zb3VyY2VzXHJcbiAgICAgICAgaWYgKHR5cGVvZiAoZGFwaSkgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBkYXBpLm9wZW5TdG9yZVVybCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBhZCBuZXR3b3JrIHN1cHBvcnQgTVJBSUQgMi4wXHJcbiAgICAgICAgaWYgKHR5cGVvZihtcmFpZCkgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19BTkRST0lEIHx8IGNjLnN5cy5vcyA9PSBjYy5zeXMuQU5EUk9JRCkge1xyXG4gICAgICAgICAgICAgICAgbXJhaWQub3BlbihcImh0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20uYW4uZmFzaGlvbmdhbWUuZG9sbGRyZXNzdXBcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUyB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLklQSE9ORSB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLklQQUQpIHtcclxuICAgICAgICAgICAgLy8gICAgIG1yYWlkLm9wZW4oXCJodHRwczovL2l0dW5lcy5hcHBsZS5jb20vdXMvYXBwL2lkNjQ0OTI2OTczMz9tdD04XCIpO1xyXG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICBtcmFpZC5vcGVuKFwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5hbi5mYXNoaW9uZ2FtZS5kb2xsZHJlc3N1cFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBJZiBhZCBuZXR3b3JrIGlzIG1pbmR3b3JrLiB3aW5kb3cgYWx3YXkgYXZhaWFibGUgc28gc2tpcCB1bmRlZmluZWQgY2hlY2tcclxuICAgICAgICB3aW5kb3cuaW5zdGFsbCAmJiB3aW5kb3cuaW5zdGFsbCgpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MainGame/GameField.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bfa611mBN1Ato8bmVTiNiGw', 'GameField');
// Script/MainGame/GameField.ts

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
exports.GameField = void 0;
var Circle_1 = require("./Circle");
var Cell_1 = require("./Cell");
var ClassHelpers_1 = require("./ClassHelpers");
var CircleEnums_1 = require("./CircleEnums");
var CircleEnums_2 = require("./CircleEnums");
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var GamesController_1 = require("./GamesController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameField = /** @class */ (function (_super) {
    __extends(GameField, _super);
    function GameField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Circle = null;
        _this.Cell = null;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.Hint = null;
        _this.needRandomVoidCell = true;
        _this.ChangeForCreateAnActiveCell = 25;
        _this.iter = 0.1;
        _this.StartCellPosX = -150;
        _this.StartCellPosY = 250;
        _this.lenghtCell = 62;
        _this.widthCell = 62;
        _this.countCircle = 0;
        _this.countProgressStep = 0;
        _this.previousCountCircle = 0;
        _this.busterClick = false;
        _this.Cells = [
            [, , , , , , ,],
            [, , , , , , ,],
            [, , , , , , ,],
            [, , , , , , ,],
            [, , , , , , ,],
            [, , , , , , ,],
            [, , , , , , ,],
            [, , , , , , ,],
        ];
        _this.currentI_cell_click = 0;
        _this.currentJ_cell_click = 0;
        _this.timeForCheckFild = 0;
        _this.oneCheckField = true;
        _this.cellExist = false;
        _this.tmpCountCircle = 0;
        _this.horizont = false;
        _this.vertical = false;
        _this.goDestroyThreeInArow = false;
        _this.destroyExisted = false;
        _this.animationStart = true;
        return _this;
    }
    GameField.prototype.onLoad = function () {
        this.node.on('wasClickOnCell', this.workWithClickedCell, this);
        this.node.on('wasTwoClickOnCell', this.workWithTwoClickedCell, this);
        // this.timeForCheckFild = this.Cells.length * this.iter + 0.1;
        this.timeForCheckFild = this.Cells.length * this.iter + 0.1;
    };
    GameField.prototype.start = function () {
        this.createCells();
        // DHH
        // this.setTypeCellsOnIandJ(4, 0, this.Cells.length, 4, 1);
        this.CreateCircles();
    };
    GameField.prototype.onEnable = function () {
        this.createCells();
        // DHH
        // this.setTypeCellsOnIandJ(4, 0, this.Cells.length, 4, 1);
        this.CreateCircles();
        this.destroyTipeColors = new Array(Object.keys(CircleEnums_2.typeColorCircle).length);
        for (var i = 0; i < this.destroyTipeColors.length; i++)
            this.destroyTipeColors[i] = 0;
    };
    GameField.prototype.onDisable = function () {
        this.DestroyCircles();
    };
    GameField.prototype.workWithClickedCell = function () {
        if (constants_1.Constants.countScore >= 10) {
            this.GameController.installHandle();
        }
        this.currentCell = this.getClickCell();
        this.Hint.active = false;
        constants_1.Constants.isClickFirstTime = true;
        if (this.currentCell === this.prewCell)
            this.prewCell = null;
        if (this.currentCell != null) {
            if (!this.buster()) {
                this.setSelectPrewCell();
                if (this.prewCell != null) {
                    this.tmpPrewCell = this.prewCell;
                    this.checkNeighboringCell();
                }
                this.prewCell = this.currentCell;
            }
        }
    };
    GameField.prototype.workWithTwoClickedCell = function () {
        cc.log("clear cells");
        // this.prewCell= null;
        //this.currentCell=null;
    };
    GameField.prototype.checkNeighboringCell = function () {
        if (this.prewCell._circle.getComponent(Circle_1.Circle).CircleTypeColor !== this.currentCell._circle.getComponent(Circle_1.Circle).CircleTypeColor)
            if (this.prewCell !== this.currentCell
                && this.prewCell._circle != null
                && this.currentI_cell_click != null) {
                if (this.prewCell.irow + 1 == this.currentCell.irow
                    && this.prewCell.jcolumn == this.currentCell.jcolumn ||
                    this.prewCell.irow - 1 == this.currentCell.irow
                        && this.prewCell.jcolumn == this.currentCell.jcolumn ||
                    this.prewCell.irow == this.currentCell.irow
                        && this.prewCell.jcolumn + 1 == this.currentCell.jcolumn ||
                    this.prewCell.irow == this.currentCell.irow
                        && this.prewCell.jcolumn - 1 == this.currentCell.jcolumn) {
                    this.node.dispatchEvent(new cc.Event.EventCustom('setBlockTouch', true));
                    constants_1.Constants.isCanTouch = false;
                    this.swapCircles(this.prewCell, this.currentCell);
                    this.needCheckFieldAfterSwapCircle();
                }
            }
    };
    GameField.prototype.needCheckFieldAfterSwapCircle = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.node.dispatchEvent(new cc.Event.EventCustom('needCheckField', true));
            _this.setCellNoClick(_this.prewCell);
            _this.setCellNoClick(_this.currentCell);
            _this.oneCheckField = true;
        }, this.iter + this.iter + this.iter);
        this.scheduleOnce(function () {
            if (!_this.destroyExisted) {
                cc.log("comeBackCircle");
                _this.node.dispatchEvent(new cc.Event.EventCustom('setUnBlockTouch', true));
                _this.swapCircles(_this.currentCell, _this.tmpPrewCell);
                _this.setCellNoClick(_this.tmpPrewCell);
                _this.setCellNoClick(_this.currentCell);
                _this.prewCell = null;
                _this.currentCell = null;
                _this.tmpPrewCell = null;
            }
            else {
                cc.log("countProgressStep");
                _this.node.dispatchEvent(new cc.Event.EventCustom('setUnBlockTouch', true));
                _this.node.dispatchEvent(new cc.Event.EventCustom('countProgressStep', true));
                _this.prewCell = null;
                _this.currentCell = null;
                _this.tmpPrewCell = null;
            }
        }, this.timeForCheckFild);
    };
    GameField.prototype.swapCircles = function (cell1, cell2) {
        cc.log("swapCirle");
        this.animateMoveCircle(cell1, cell2);
        this.animateMoveCircle(cell2, cell1);
        var tmpCircle = cell2._circle;
        cell2._circle = cell1._circle;
        cell1._circle = tmpCircle;
        this.setCellNoClick(cell1);
        this.setCellNoClick(cell2);
    };
    GameField.prototype.setCellNoClick = function (cell) {
        cell.countClick = 0;
        cell.wasSelectCircle = false;
        cell.wasClick = false;
        cell.setNormalSize();
    };
    GameField.prototype.animateMoveCircle = function (Cell1, Cell2) {
        var _this = this;
        if (Cell1 == null || Cell2 == null)
            return;
        constants_1.Constants.isCanTouch = false;
        // console.log(`checking ${Cell1._circle}`);
        cc.tween(Cell1._circle)
            .parallel(cc.tween().to(this.iter, { scale: 1 }), cc.tween().to(this.iter, { position: Cell2.node.position }))
            .call(function () {
            _this.scheduleOnce(function () {
                constants_1.Constants.isCanTouch = true;
            }, 1);
            cc.log("finish move");
        }).start();
    };
    GameField.prototype.setBuster = function () {
        // cc.log("Buster Set");
        this.busterClick = true;
    };
    GameField.prototype.buster = function () {
        if (this.busterClick)
            if (this.currentCell != null) {
                // this.setSelectPrewCell(cell);
                this.startTypeDestroer(this.currentCell);
                this.animateDestroyCircle(this.currentCell);
                this.setCellNoClick(this.currentCell);
                this.busterClick = false;
                this.eventDestoyArow();
                this.currentCell = null;
                this.node.dispatchEvent(new cc.Event.EventCustom('countProgressStep', true));
                return true;
            }
        return false;
    };
    GameField.prototype.setSelectPrewCell = function () {
        if (this.prewCell != null)
            if (this.prewCell !== this.currentCell && this.prewCell.wasSelectCircle) {
                this.prewCell.selectCircle();
            }
    };
    GameField.prototype.setSelectCurrentCell = function () {
        if (this.currentCell != null)
            if (this.currentCell.wasSelectCircle) {
                this.currentCell.selectCircle();
            }
    };
    GameField.prototype.getClickCell = function () {
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.clickSound);
        for (var j = 0; j < this.Cells.length; j++)
            for (var i = 0; i < this.Cells[j].length; i++)
                if (this.Cells[j][i].wasClick) {
                    this.Cells[j][i].wasClick = false;
                    // cc.log("clicked")
                    return this.Cells[j][i];
                }
        return null;
    };
    GameField.prototype.clickDestroyCircleInCell = function () {
        this.countCircle--;
        this.node.dispatchEvent(new cc.Event.EventCustom('setPoint', true));
        this.allCirclesMove();
    };
    GameField.prototype.createOneLineCircles = function () {
        for (var i = 0; i < this.Cells[0].length; i++) {
            this.createCircle(this.Cells[0][i]);
        }
        this.allCirclesMove();
        if (this.oneCheckField) {
            this.oneCheckField = false;
            this.needCheckField();
        }
    };
    GameField.prototype.needCheckField = function () {
        this.scheduleOnce(function () {
            this.node.dispatchEvent(new cc.Event.EventCustom('needCheckField', true));
            this.oneCheckField = true;
        }, this.timeForCheckFild);
    };
    GameField.prototype.checkLine = function () {
        this.destroyExisted = false;
        this.InArow();
        this.node.dispatchEvent(new cc.Event.EventCustom('setUnBlockTouch', true));
    };
    GameField.prototype.createCells = function () {
        var xPos = 0;
        var yPos = 0;
        var _cell;
        for (var j = 0; j < this.Cells.length; j++) {
            for (var i = 0; i < this.Cells[j].length; i++) {
                _cell = cc.instantiate(this.Cell);
                _cell.setContentSize(this.lenghtCell, this.widthCell);
                _cell.setParent(this.node);
                _cell.setPosition(this.StartCellPosX + xPos, this.StartCellPosY + yPos);
                this.Cells[j][i] = _cell.getComponent(Cell_1.Cell);
                if (i % 2 != 0 && j % 2 == 0) {
                    this.Cells[j][i].setGrayColor();
                }
                if (i % 2 == 0 && j % 2 != 0) {
                    this.Cells[j][i].setGrayColor();
                }
                // if (this.needRandomVoidCell) this.createAnyTypeCell(this.Cells[j][i], 1);
                this.Cells[j][i].jcolumn = j;
                this.Cells[j][i].irow = i;
                xPos = xPos + this.lenghtCell;
            }
            xPos = 0;
            yPos = yPos - this.widthCell;
        }
        constants_1.Constants.Board = this.Cells;
    };
    GameField.prototype.createAnyTypeCell = function (Cell, type) {
        if (Math.floor((Math.random() * this.ChangeForCreateAnActiveCell) + 1) == 1) {
            Cell.typeCell = type;
            Cell.setColorInType();
        }
    };
    GameField.prototype.setTypeCellsOnIandJ = function (i_, j_, iLength, jLegth, type) {
        for (var j = j_; j < jLegth; j++) {
            for (var i = i_; i < iLength; i++) {
                this.Cells[j][i].typeCell = type;
                this.Cells[j][i].setColorInType();
            }
        }
    };
    GameField.prototype.CreateCircles = function () {
        for (var j = 0; j < this.Cells.length; j++)
            for (var i = 0; i < this.Cells[j].length; i++) {
                if (this.Cells[j][i].typeCell == 0) {
                    this.createCircle(this.Cells[j][i]);
                }
                ;
            }
        this.node.dispatchEvent(new cc.Event.EventCustom('needCheckField', true));
    };
    GameField.prototype.DestroyCircles = function () {
        for (var j = 0; j < this.Cells.length; j++)
            for (var i = 0; i < this.Cells[j].length; i++) {
                if (this.Cells[j][i].circleIsNotNull()) {
                    this.Cells[j][i]._circle.destroy();
                    this.Cells[j][i]._circle = null;
                }
            }
    };
    GameField.prototype.createCircle = function (Cell) {
        if (!Cell.circleIsNotNull()) {
            Cell._circle = cc.instantiate(this.Circle);
            // Thiết lập loại và màu sắc cho Circle dựa vào circleType
            // let circleType = Cell._circle.getComponent(Circle).CircleTypeColor;
            // do {      
            //   console.log("?");
            //   Cell._circle.getComponent(Circle).setRandomColor(true);
            //   Cell._circle.getComponent(Circle).setColorTipe();
            //   circleType = Cell._circle.getComponent(Circle).CircleTypeColor;
            //   // Thiết lập loại và màu sắc cho Circle dựa vào circleType
            // } while (!this.isValidPlacementForCircle(Cell.jcolumn, Cell.irow, circleType));
            Cell._circle.setParent(this.node);
            Cell._circle.setPosition(Cell.node.position);
            Cell._circle.setContentSize(this.lenghtCell - 15, this.widthCell - 15);
            this.countCircle++;
        }
    };
    GameField.prototype.isValidPlacementForCircle = function (j, i, circleType) {
        // Kiểm tra hàng
        if (i >= 2 && this.Cells[j][i - 1]._circle && this.Cells[j][i - 2]._circle &&
            this.Cells[j][i - 1]._circle.getComponent(Circle_1.Circle).CircleTypeColor === circleType &&
            this.Cells[j][i - 2]._circle.getComponent(Circle_1.Circle).CircleTypeColor === circleType) {
            return false;
        }
        // Kiểm tra cột
        if (j >= 2 && this.Cells[j - 1][i]._circle && this.Cells[j - 2][i]._circle &&
            this.Cells[j - 1][i]._circle.getComponent(Circle_1.Circle).CircleTypeColor === circleType &&
            this.Cells[j - 2][i]._circle.getComponent(Circle_1.Circle).CircleTypeColor === circleType) {
            return false;
        }
        return true;
    };
    GameField.prototype.allCirclesMove = function () {
        for (var j = 0; j < this.Cells.length; j++)
            for (var i = 0; i < this.Cells[j].length; i++) {
                if (this.Cells[j][i].CellIsNotNull())
                    if (!this.Cells[j][i].circleIsNotNull() && this.Cells[j][i].typeCell == 0) {
                        if (j == 0) {
                            this.scheduleOnce(function () {
                                this.node.dispatchEvent(new cc.Event.EventCustom('moveCircleEnd', true));
                            }, this.iter);
                        }
                        if (j >= 1) {
                            this.swapCircleInCell(i, j, i, j - 1);
                        }
                        if (!this.cellExist) {
                            if (j >= 1 && i < this.Cells[j].length - 1) {
                                if (Math.floor(Math.random() * Math.floor(2)) == 1) {
                                    this.swapCircleInCell(i, j, i - 1, j - 1);
                                    if (!this.cellExist)
                                        this.swapCircleInCell(i, j, i + 1, j - 1);
                                }
                                else
                                    this.swapCircleInCell(i, j, i + 1, j - 1);
                                if (!this.cellExist)
                                    this.swapCircleInCell(i, j, i - 1, j - 1);
                            }
                            if (i == 0 && j >= 1) {
                                this.swapCircleInCell(i, j, i + 1, j - 1);
                            }
                            if (i == this.Cells[j].length - 1 && j >= 1) {
                                this.swapCircleInCell(i, j, i - 1, j - 1);
                            }
                        }
                    }
            }
    };
    GameField.prototype.swapCircleInCell = function (i, j, newi, newj) {
        if (this.validateCircleMove(i, j, newi, newj)) {
            this.Cells[j][i]._circle = this.Cells[newj][newi]._circle;
            this.Cells[newj][newi]._circle = null;
            this.moveCircle(this.Cells[j][i]._circle, this.Cells[j][i].node.position);
            this.cellExist = true;
            return;
        }
        this.cellExist = false;
    };
    GameField.prototype.validateCircleMove = function (i, j, newi, newj) {
        if (ClassHelpers_1.CheckerBoolean.checkTwoBoolean(this.Cells[j][i].CellIsNotNull(), this.Cells[newj][newi] != null))
            if (ClassHelpers_1.CheckerBoolean.checkTwoBoolean(this.Cells[j][i].typeCell == 0, this.Cells[newj][newi].typeCell == 0))
                if (ClassHelpers_1.CheckerBoolean.checkTwoBoolean(this.Cells[j][i]._circle == null, this.Cells[newj][newi]._circle != null))
                    return true;
        return false;
    };
    GameField.prototype.moveCircle = function (circle, toMove) {
        var _this = this;
        var _circle = circle.getComponent(Circle_1.Circle);
        _circle.inMove = true;
        cc.tween(circle)
            .parallel(cc.tween().to(this.iter, { scale: 1 }), cc.tween().to(this.iter, { position: toMove }))
            .call(function () {
            _this.node.dispatchEvent(new cc.Event.EventCustom('moveCircleEnd', true));
            _circle.inMove = false;
        })
            .start();
    };
    //todo 
    GameField.prototype.fieldOnFilledWithCircles = function () {
        var allcirclenowinfield = 0;
        var allcirclenowinfieldandmove = 0;
        for (var j = 0; j < this.Cells[0].length; j++) {
            for (var i = 0; i < this.Cells[j].length; i++)
                if (ClassHelpers_1.CheckerBoolean.checkTwoBoolean(this.Cells[j][i].typeCell == 0, this.Cells[j][i].circleIsNotNull())) {
                    if (this.Cells[j][i]._circle.getComponent(Circle_1.Circle).inMove)
                        allcirclenowinfieldandmove++;
                }
        }
        cc.log(allcirclenowinfield);
        cc.log(allcirclenowinfieldandmove);
        if (allcirclenowinfieldandmove == allcirclenowinfield)
            return false;
        return false;
    };
    GameField.prototype.InArow = function () {
        for (var j = 0; j < this.Cells.length; j++) {
            for (var i = 0; i < this.Cells[j].length; i++) {
                this.goDestroyThreeInArow = true;
                if (j >= 2) {
                    this.vertical = false;
                    this.horizont = true;
                    this.InArowTmp(i, j, i, j - 1, i, j - 2);
                }
                if (i < this.Cells[j].length - 2) {
                    this.horizont = false;
                    this.vertical = true;
                    this.InArowTmp(i, j, i + 1, j, i + 2, j);
                }
            }
        }
    };
    GameField.prototype.InArowTmp = function (i, j, iOne, jOne, iTwo, jTwo) {
        if (this.Cells[j][i] != null && this.Cells[jOne][iOne] != null && this.Cells[jTwo][iTwo] != null) {
            var tmpBool1 = ClassHelpers_1.CheckerBoolean.checkTwoBoolean(this.Cells[j][i].typeCell == 0, this.Cells[jOne][iOne].typeCell == 0);
            var tmpBool2 = ClassHelpers_1.CheckerBoolean.checkTwoBoolean(tmpBool1, this.Cells[jTwo][iTwo].typeCell == 0);
            if (!tmpBool2)
                return;
            tmpBool1 = ClassHelpers_1.CheckerBoolean.checkTwoBoolean(this.Cells[j][i].circleIsNotNull(), this.Cells[jOne][iOne].circleIsNotNull());
            tmpBool2 = ClassHelpers_1.CheckerBoolean.checkTwoBoolean(tmpBool1, this.Cells[jTwo][iTwo].circleIsNotNull());
            if (!tmpBool2)
                return;
            var tmpBool3 = ClassHelpers_1.CheckerBoolean.EqualsTrheeObj(this.Cells[j][i]._circle.getComponent(Circle_1.Circle).CircleTypeColor, this.Cells[jOne][iOne]._circle.getComponent(Circle_1.Circle).CircleTypeColor, this.Cells[jTwo][iTwo]._circle.getComponent(Circle_1.Circle).CircleTypeColor);
            if (!tmpBool3)
                return;
            if (this.vertical) {
                if (i < this.Cells[j].length - 4) {
                    this.AudioManager.playSound(constants_1.Constants.SoundTrack.rainbowSound);
                    this.createRainbowBall(i, j, iOne, jOne, iTwo, jTwo, jTwo, iTwo + 1, jTwo, iTwo + 2, 3);
                }
                if (i < this.Cells[j].length - 3 && this.goDestroyThreeInArow) {
                    this.AudioManager.playSound(constants_1.Constants.SoundTrack.GemSound);
                    this.AudioManager.playSound(constants_1.Constants.SoundTrack.woaSound);
                    this.createLightning(i, j, iOne, jOne, iTwo, jTwo, jTwo, iTwo + 1, 2);
                }
            }
            if (this.horizont) {
                if (j >= 4) {
                    this.AudioManager.playSound(constants_1.Constants.SoundTrack.rainbowSound);
                    this.createRainbowBall(i, j, iOne, jOne, iTwo, jTwo, jTwo - 1, iTwo, jTwo - 2, iTwo, 3);
                }
                if (j >= 3 && this.goDestroyThreeInArow) {
                    this.AudioManager.playSound(constants_1.Constants.SoundTrack.GemSound);
                    this.createLightning(i, j, iOne, jOne, iTwo, jTwo, jTwo - 1, iTwo, 1);
                }
            }
            if (this.goDestroyThreeInArow) {
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.GemSound);
                this.check3Circle(this.Cells[j][i], this.Cells[jOne][iOne], this.Cells[jTwo][iTwo]);
                this.eventDestoyArow();
            }
        }
    };
    GameField.prototype.createRainbowBall = function (i, j, iOne, jOne, iTwo, jTwo, iThree, jThree, iFour, jFour, tipe) {
        if (this.Cells[iThree][jThree] == null || this.Cells[iFour][jFour] == null)
            return;
        var bool1 = ClassHelpers_1.CheckerBoolean.checkTwoBoolean(this.Cells[iThree][jThree].typeCell == 0, this.Cells[iThree][jThree].circleIsNotNull());
        var bool2 = ClassHelpers_1.CheckerBoolean.checkTwoBoolean(this.Cells[iFour][jFour].typeCell == 0, this.Cells[iFour][jFour].circleIsNotNull());
        if (ClassHelpers_1.CheckerBoolean.checkTwoBoolean(bool1, bool2)) {
            var bool3 = ClassHelpers_1.CheckerBoolean.EqualsTrheeObj(this.Cells[jTwo][iTwo]._circle.getComponent(Circle_1.Circle).CircleTypeColor, this.Cells[iThree][jThree]._circle.getComponent(Circle_1.Circle).CircleTypeColor, this.Cells[iFour][jFour]._circle.getComponent(Circle_1.Circle).CircleTypeColor);
            if (bool3) {
                cc.log("RainbowCreate");
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.woaSound2);
                this.Cells[j][i]._circle.getComponent(Circle_1.Circle).setTipe(tipe);
                cc.log(this.Cells[j][i]._circle.getComponent(Circle_1.Circle).CircleType);
                this.check3Circle(this.Cells[jOne][iOne], this.Cells[jTwo][iTwo], this.Cells[iThree][jThree]);
                this.startCheckCircleForDestroy(this.Cells[iFour][jFour]);
                this.goDestroyThreeInArow = false;
                this.eventDestoyArow();
            }
        }
    };
    GameField.prototype.createLightning = function (i, j, iOne, jOne, iTwo, jTwo, iThree, jThree, tipe) {
        if (this.Cells[iThree][jThree] == null)
            return;
        if (ClassHelpers_1.CheckerBoolean.checkTwoBoolean(this.Cells[iThree][jThree].typeCell == 0, this.Cells[iThree][jThree].circleIsNotNull()))
            if (ClassHelpers_1.CheckerBoolean.EqualsTwoObj(this.Cells[jTwo][iTwo]._circle.getComponent(Circle_1.Circle).CircleTypeColor, this.Cells[iThree][jThree]._circle.getComponent(Circle_1.Circle).CircleTypeColor)) {
                console.log("create lightning");
                var circle = this.Cells[j][i]._circle.getComponent(Circle_1.Circle);
                this.Cells[iThree][jThree].getComponent(cc.Sprite).enabled = false;
                this.Cells[iThree][jThree].node.opacity = 0;
                this.Cells[iThree][jThree]._circle.getComponent(Circle_1.Circle).getComponent(cc.Sprite).enabled = false;
                this.Cells[iThree][jThree]._circle.opacity = 0;
                circle.setTipe(tipe);
                this.check3Circle(this.Cells[jOne][iOne], this.Cells[jTwo][iTwo], this.Cells[iThree][jThree]);
                this.goDestroyThreeInArow = false;
                this.eventDestoyArow();
            }
    };
    GameField.prototype.destroyRainbowBall = function (Cell, circle) {
        for (var j = 0; j < this.Cells.length; j++) {
            for (var i = 0; i < this.Cells[j].length; i++) {
                if (this.Cells[j][i].circleIsNotNull())
                    var currentCircle = this.Cells[j][i]._circle.getComponent(Circle_1.Circle);
                else
                    return;
                if (Cell != this.Cells[j][i] &&
                    circle.CircleTypeColor === currentCircle.CircleTypeColor) {
                    if (circle.CircleType === currentCircle.CircleType)
                        this.animateDestroyCircle(this.Cells[j][i]);
                    else
                        this.startCheckCircleForDestroy(this.Cells[j][i]);
                }
            }
        }
    };
    GameField.prototype.destroyLightningVertical = function (Cell, circle) {
        console.log("boom lightning vertical");
        var j = Cell.jcolumn;
        for (var i = 0; i < this.Cells[j].length; i++) {
            if (Cell != this.Cells[j][i] || this.Cells[j][i].CellIsNotNull())
                return;
            if (this.Cells[j][i].circleIsNotNull())
                var currentCircle = this.Cells[j][i]._circle.getComponent(Circle_1.Circle);
            else
                return;
            if (circle.CircleType === currentCircle.CircleType)
                this.animateDestroyCircle(this.Cells[j][i]);
            else
                this.startCheckCircleForDestroy(this.Cells[j][i]);
        }
    };
    GameField.prototype.destroyLightningHorizont = function (Cell, circle) {
        console.log("boom lightning horizont");
        var i = Cell.irow;
        var thisCircle = circle.getComponent(Circle_1.Circle);
        for (var j = 0; j < this.Cells.length; j++) {
            if (Cell != this.Cells[j][i] || this.Cells[j][i] != null)
                return;
            if (this.Cells[j][i].circleIsNotNull())
                var currentCircle = this.Cells[j][i]._circle.getComponent(Circle_1.Circle);
            if (currentCircle == null)
                return;
            if (circle.CircleType === currentCircle.CircleType)
                this.animateDestroyCircle(this.Cells[j][i]);
            else
                this.startCheckCircleForDestroy(this.Cells[j][i]);
        }
    };
    GameField.prototype.destroylightningVerticalAndlightningHorizont = function (Cell, circle) {
        this.destroyLightningVertical(Cell, circle);
        this.destroyLightningHorizont(Cell, circle);
    };
    GameField.prototype.check3Circle = function (Cell1, Cell2, Cell3) {
        this.startCheckCircleForDestroy(Cell1);
        this.startCheckCircleForDestroy(Cell2);
        this.startCheckCircleForDestroy(Cell3);
    };
    GameField.prototype.startCheckCircleForDestroy = function (Cell) {
        this.startTypeDestroer(Cell);
        this.animateDestroyCircle(Cell);
    };
    GameField.prototype.startTypeDestroer = function (Cell) {
        if (Cell.circleIsNotNull()) {
            var circle = Cell._circle.getComponent(Circle_1.Circle);
            switch (circle.CircleType) {
                case CircleEnums_1.tipeCircle.rainbowBall: {
                    this.destroyRainbowBall(Cell, circle);
                    break;
                }
                case CircleEnums_1.tipeCircle.lightningVertical: {
                    this.destroyLightningVertical(Cell, circle);
                    break;
                }
                case CircleEnums_1.tipeCircle.lightningHorizont: {
                    this.destroyLightningHorizont(Cell, circle);
                    break;
                }
                case CircleEnums_1.tipeCircle.normal: {
                    this.animateDestroyCircle(Cell);
                    break;
                }
            }
        }
    };
    GameField.prototype.destroyEveryCircles = function () {
        for (var j = 0; j < this.Cells.length; j++) {
            for (var i = 0; i < this.Cells[j].length; i++) {
                this.animateDestroyCircle(this.Cells[j][i]);
            }
        }
        this.scheduleOnce(function () {
            this.node.dispatchEvent(new cc.Event.EventCustom('destroyCircles', true));
        }, this.iter + 0.1);
        this.scheduleOnce(function () {
            this.node.dispatchEvent(new cc.Event.EventCustom('needCheckField', true));
        }, (this.iter + 0.2) * 4);
    };
    GameField.prototype.eventDestoyArow = function () {
        this.scheduleOnce(function () {
            this.node.dispatchEvent(new cc.Event.EventCustom('setBlockTouch', true));
            this.node.dispatchEvent(new cc.Event.EventCustom('destroyCircles', true));
            this.destroyExisted = true;
        }, this.iter + this.iter);
    };
    GameField.prototype.animateDestroyCircle = function (Cell) {
        var _this = this;
        if (Cell == null)
            return;
        Cell.blink.getComponent(cc.Animation).play("Blink_Anim");
        if (constants_1.Constants.isClickFirstTime) {
            constants_1.Constants.countScore += 1;
        }
        cc.tween(Cell._circle)
            .parallel(cc.tween().to(this.iter, { scale: 0 }), cc.tween().to(this.iter, {}))
            .call(function () {
            if (Cell._circle == null)
                return;
            _this.countCircle--;
            _this.getTypeDestroyCircle(Cell._circle.getComponent(Circle_1.Circle));
            _this.node.dispatchEvent(new cc.Event.EventCustom('setPoint', true));
            Cell._circle.destroy();
            Cell._circle = null;
        }).start();
    };
    GameField.prototype.getTypeDestroyCircle = function (circle) {
        this.destroyTipeColors[circle.CircleTypeColor]++;
        // cc.log(this.destroyTipeColors[circle.CircleTypeColor]);
        this.node.dispatchEvent(new cc.Event.EventCustom('setDestroyCirclesType_', true));
    };
    __decorate([
        property(cc.Prefab)
    ], GameField.prototype, "Circle", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameField.prototype, "Cell", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], GameField.prototype, "AudioManager", void 0);
    __decorate([
        property(GamesController_1.GameController)
    ], GameField.prototype, "GameController", void 0);
    __decorate([
        property(cc.Node)
    ], GameField.prototype, "Hint", void 0);
    __decorate([
        property
    ], GameField.prototype, "needRandomVoidCell", void 0);
    __decorate([
        property
    ], GameField.prototype, "ChangeForCreateAnActiveCell", void 0);
    __decorate([
        property
    ], GameField.prototype, "iter", void 0);
    __decorate([
        property
    ], GameField.prototype, "StartCellPosX", void 0);
    __decorate([
        property
    ], GameField.prototype, "StartCellPosY", void 0);
    __decorate([
        property
    ], GameField.prototype, "lenghtCell", void 0);
    __decorate([
        property
    ], GameField.prototype, "widthCell", void 0);
    GameField = __decorate([
        ccclass
    ], GameField);
    return GameField;
}(cc.Component));
exports.GameField = GameField;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluR2FtZVxcR2FtZUZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBa0M7QUFDbEMsK0JBQThCO0FBQzlCLCtDQUFnRDtBQUNoRCw2Q0FBMkM7QUFDM0MsNkNBQWdEO0FBQ2hELCtDQUE4QztBQUM5Qyx1REFBa0Q7QUFDbEQscURBQW1EO0FBRTdDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQStCLDZCQUFZO0lBQTNDO1FBQUEscUVBc3RCQztRQW50QlMsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRS9CLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFHdEMsVUFBSSxHQUFZLElBQUksQ0FBQztRQUdiLHdCQUFrQixHQUFZLElBQUksQ0FBQztRQUVuQyxpQ0FBMkIsR0FBVyxFQUFFLENBQUM7UUFFekMsVUFBSSxHQUFXLEdBQUcsQ0FBQztRQUVuQixtQkFBYSxHQUFXLENBQUMsR0FBRyxDQUFDO1FBRTdCLG1CQUFhLEdBQVcsR0FBRyxDQUFDO1FBRzVCLGdCQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXhCLGVBQVMsR0FBVyxFQUFFLENBQUM7UUFFdkIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDaEMsdUJBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBRXRCLHlCQUFtQixHQUFXLENBQUMsQ0FBQztRQUV4QyxpQkFBVyxHQUFZLEtBQUssQ0FBQztRQUVyQixXQUFLLEdBQWE7WUFDeEIsQ0FBQyxFQUFDLEFBQUMsRUFBQyxBQUFDLEVBQUMsQUFBQyxFQUFDLEFBQUMsRUFBQyxBQUFDLEVBQUMsQUFBQyxFQUFFO1lBQ2YsQ0FBQyxFQUFDLEFBQUMsRUFBQyxBQUFDLEVBQUMs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LElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBanRCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNhO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MkNBQ1c7SUFFL0I7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQzttREFDVztJQUVsQztRQURDLFFBQVEsQ0FBQyxnQ0FBYyxDQUFDO3FEQUNhO0lBR3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0c7SUFHckI7UUFEQyxRQUFRO3lEQUNrQztJQUUzQztRQURDLFFBQVE7a0VBQ3dDO0lBRWpEO1FBREMsUUFBUTsyQ0FDa0I7SUFFM0I7UUFEQyxRQUFRO29EQUM0QjtJQUVyQztRQURDLFFBQVE7b0RBQzJCO0lBR3BDO1FBREMsUUFBUTtpREFDdUI7SUFFaEM7UUFEQyxRQUFRO2dEQUNzQjtJQTVCcEIsU0FBUztRQURyQixPQUFPO09BQ0ssU0FBUyxDQXN0QnJCO0lBQUQsZ0JBQUM7Q0F0dEJELEFBc3RCQyxDQXR0QjhCLEVBQUUsQ0FBQyxTQUFTLEdBc3RCMUM7QUF0dEJZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2lyY2xlIH0gZnJvbSBcIi4vQ2lyY2xlXCI7XHJcbmltcG9ydCB7IENlbGwgfSBmcm9tIFwiLi9DZWxsXCI7XHJcbmltcG9ydCB7IENoZWNrZXJCb29sZWFuIH0gZnJvbSBcIi4vQ2xhc3NIZWxwZXJzXCI7XHJcbmltcG9ydCB7IHRpcGVDaXJjbGUgfSBmcm9tIFwiLi9DaXJjbGVFbnVtc1wiO1xyXG5pbXBvcnQgeyB0eXBlQ29sb3JDaXJjbGUgfSBmcm9tIFwiLi9DaXJjbGVFbnVtc1wiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVzQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBHYW1lRmllbGQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gIHByaXZhdGUgQ2lyY2xlOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgcHJpdmF0ZSBDZWxsOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShHYW1lQ29udHJvbGxlcilcclxuICBHYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBIaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5XHJcbiAgcHJpdmF0ZSBuZWVkUmFuZG9tVm9pZENlbGw6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBwcm9wZXJ0eVxyXG4gIHByaXZhdGUgQ2hhbmdlRm9yQ3JlYXRlQW5BY3RpdmVDZWxsOiBudW1iZXIgPSAyNTtcclxuICBAcHJvcGVydHlcclxuICBwcml2YXRlIGl0ZXI6IG51bWJlciA9IDAuMTtcclxuICBAcHJvcGVydHlcclxuICBwcml2YXRlIFN0YXJ0Q2VsbFBvc1g6IG51bWJlciA9IC0xNTA7XHJcbiAgQHByb3BlcnR5XHJcbiAgcHJpdmF0ZSBTdGFydENlbGxQb3NZOiBudW1iZXIgPSAyNTA7XHJcblxyXG4gIEBwcm9wZXJ0eVxyXG4gIHByaXZhdGUgbGVuZ2h0Q2VsbDogbnVtYmVyID0gNjI7XHJcbiAgQHByb3BlcnR5XHJcbiAgcHJpdmF0ZSB3aWR0aENlbGw6IG51bWJlciA9IDYyO1xyXG5cclxuICBwcml2YXRlIGNvdW50Q2lyY2xlOiBudW1iZXIgPSAwO1xyXG4gIGNvdW50UHJvZ3Jlc3NTdGVwOiBudW1iZXIgPSAwO1xyXG5cclxuICBwcml2YXRlIHByZXZpb3VzQ291bnRDaXJjbGU6IG51bWJlciA9IDA7XHJcblxyXG4gIGJ1c3RlckNsaWNrOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgQ2VsbHM6IENlbGxbXVtdID0gW1xyXG4gICAgWywgLCAsICwgLCAsICxdLFxyXG4gICAgWywgLCAsICwgLCAsICxdLFxyXG4gICAgWywgLCAsICwgLCAsICxdLFxyXG4gICAgWywgLCAsICwgLCAsICxdLFxyXG4gICAgWywgLCAsICwgLCAsICxdLFxyXG4gICAgWywgLCAsICwgLCAsICxdLFxyXG4gICAgWywgLCAsICwgLCAsICxdLFxyXG4gICAgWywgLCAsICwgLCAsICxdLFxyXG4gIF07XHJcblxyXG4gIGRlc3Ryb3lUaXBlQ29sb3JzOiBudW1iZXJbXTtcclxuXHJcbiAgcHJpdmF0ZSBjdXJyZW50SV9jZWxsX2NsaWNrOiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgY3VycmVudEpfY2VsbF9jbGljazogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIHRpbWVGb3JDaGVja0ZpbGQ6IG51bWJlciA9IDA7XHJcblxyXG4gIHByaXZhdGUgcHJld0NlbGw6IENlbGw7XHJcbiAgcHJpdmF0ZSBjdXJyZW50Q2VsbDogQ2VsbDtcclxuICAvL3RvZG8gXHJcbiAgcHJpdmF0ZSB0bXBQcmV3Q2VsbDogQ2VsbDtcclxuICBwcml2YXRlIG9uZUNoZWNrRmllbGQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICB0aGlzLm5vZGUub24oJ3dhc0NsaWNrT25DZWxsJywgdGhpcy53b3JrV2l0aENsaWNrZWRDZWxsLCB0aGlzKTtcclxuICAgIHRoaXMubm9kZS5vbignd2FzVHdvQ2xpY2tPbkNlbGwnLCB0aGlzLndvcmtXaXRoVHdvQ2xpY2tlZENlbGwsIHRoaXMpO1xyXG4gICAgLy8gdGhpcy50aW1lRm9yQ2hlY2tGaWxkID0gdGhpcy5DZWxscy5sZW5ndGggKiB0aGlzLml0ZXIgKyAwLjE7XHJcbiAgICB0aGlzLnRpbWVGb3JDaGVja0ZpbGQgPSB0aGlzLkNlbGxzLmxlbmd0aCAqIHRoaXMuaXRlciArIDAuMTtcclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5jcmVhdGVDZWxscygpO1xyXG4gICAgLy8gREhIXHJcbiAgICAvLyB0aGlzLnNldFR5cGVDZWxsc09uSWFuZEooNCwgMCwgdGhpcy5DZWxscy5sZW5ndGgsIDQsIDEpO1xyXG4gICAgdGhpcy5DcmVhdGVDaXJjbGVzKCk7XHJcbiAgfVxyXG5cclxuICBvbkVuYWJsZSgpIHtcclxuICAgIHRoaXMuY3JlYXRlQ2VsbHMoKTtcclxuICAgIC8vIERISFxyXG4gICAgLy8gdGhpcy5zZXRUeXBlQ2VsbHNPbklhbmRKKDQsIDAsIHRoaXMuQ2VsbHMubGVuZ3RoLCA0LCAxKTtcclxuICAgIHRoaXMuQ3JlYXRlQ2lyY2xlcygpO1xyXG4gICAgdGhpcy5kZXN0cm95VGlwZUNvbG9ycyA9IG5ldyBBcnJheShPYmplY3Qua2V5cyh0eXBlQ29sb3JDaXJjbGUpLmxlbmd0aCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGVzdHJveVRpcGVDb2xvcnMubGVuZ3RoOyBpKyspIHRoaXMuZGVzdHJveVRpcGVDb2xvcnNbaV0gPSAwO1xyXG4gIH1cclxuXHJcbiAgb25EaXNhYmxlKCkge1xyXG4gICAgdGhpcy5EZXN0cm95Q2lyY2xlcygpO1xyXG4gIH1cclxuXHJcbiAgd29ya1dpdGhDbGlja2VkQ2VsbCgpIHtcclxuICAgIGlmIChDb25zdGFudHMuY291bnRTY29yZSA+PSAxMCkge1xyXG4gICAgICB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmN1cnJlbnRDZWxsID0gdGhpcy5nZXRDbGlja0NlbGwoKTtcclxuICAgIHRoaXMuSGludC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIENvbnN0YW50cy5pc0NsaWNrRmlyc3RUaW1lID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRDZWxsID09PSB0aGlzLnByZXdDZWxsKSB0aGlzLnByZXdDZWxsID0gbnVsbDtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRDZWxsICE9IG51bGwpIHtcclxuICAgICAgaWYgKCF0aGlzLmJ1c3RlcigpKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RQcmV3Q2VsbCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnByZXdDZWxsICE9IG51bGwpIHtcclxuICAgICAgICAgIHRoaXMudG1wUHJld0NlbGwgPSB0aGlzLnByZXdDZWxsO1xyXG4gICAgICAgICAgdGhpcy5jaGVja05laWdoYm9yaW5nQ2VsbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByZXdDZWxsID0gdGhpcy5jdXJyZW50Q2VsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHdvcmtXaXRoVHdvQ2xpY2tlZENlbGwoKSB7XHJcbiAgICBjYy5sb2coXCJjbGVhciBjZWxsc1wiKVxyXG4gICAgLy8gdGhpcy5wcmV3Q2VsbD0gbnVsbDtcclxuICAgIC8vdGhpcy5jdXJyZW50Q2VsbD1udWxsO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgY2hlY2tOZWlnaGJvcmluZ0NlbGwoKSB7XHJcbiAgICBpZiAodGhpcy5wcmV3Q2VsbC5fY2lyY2xlLmdldENvbXBvbmVudChDaXJjbGUpLkNpcmNsZVR5cGVDb2xvciAhPT0gdGhpcy5jdXJyZW50Q2VsbC5fY2lyY2xlLmdldENvbXBvbmVudChDaXJjbGUpLkNpcmNsZVR5cGVDb2xvcilcclxuICAgICAgaWYgKHRoaXMucHJld0NlbGwgIT09IHRoaXMuY3VycmVudENlbGxcclxuICAgICAgICAmJiB0aGlzLnByZXdDZWxsLl9jaXJjbGUgIT0gbnVsbFxyXG4gICAgICAgICYmIHRoaXMuY3VycmVudElfY2VsbF9jbGljayAhPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJld0NlbGwuaXJvdyArIDEgPT0gdGhpcy5jdXJyZW50Q2VsbC5pcm93XHJcbiAgICAgICAgICAmJiB0aGlzLnByZXdDZWxsLmpjb2x1bW4gPT0gdGhpcy5jdXJyZW50Q2VsbC5qY29sdW1uIHx8XHJcbiAgICAgICAgICB0aGlzLnByZXdDZWxsLmlyb3cgLSAxID09IHRoaXMuY3VycmVudENlbGwuaXJvd1xyXG4gICAgICAgICAgJiYgdGhpcy5wcmV3Q2VsbC5qY29sdW1uID09IHRoaXMuY3VycmVudENlbGwuamNvbHVtbiB8fFxyXG4gICAgICAgICAgdGhpcy5wcmV3Q2VsbC5pcm93ID09IHRoaXMuY3VycmVudENlbGwuaXJvd1xyXG4gICAgICAgICAgJiYgdGhpcy5wcmV3Q2VsbC5qY29sdW1uICsgMSA9PSB0aGlzLmN1cnJlbnRDZWxsLmpjb2x1bW4gfHxcclxuICAgICAgICAgIHRoaXMucHJld0NlbGwuaXJvdyA9PSB0aGlzLmN1cnJlbnRDZWxsLmlyb3dcclxuICAgICAgICAgICYmIHRoaXMucHJld0NlbGwuamNvbHVtbiAtIDEgPT0gdGhpcy5jdXJyZW50Q2VsbC5qY29sdW1uKSB7XHJcbiAgICAgICAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oJ3NldEJsb2NrVG91Y2gnLCB0cnVlKSk7XHJcbiAgICAgICAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5zd2FwQ2lyY2xlcyh0aGlzLnByZXdDZWxsLCB0aGlzLmN1cnJlbnRDZWxsKTtcclxuICAgICAgICAgIHRoaXMubmVlZENoZWNrRmllbGRBZnRlclN3YXBDaXJjbGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIG5lZWRDaGVja0ZpZWxkQWZ0ZXJTd2FwQ2lyY2xlKCkge1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oJ25lZWRDaGVja0ZpZWxkJywgdHJ1ZSkpO1xyXG4gICAgICB0aGlzLnNldENlbGxOb0NsaWNrKHRoaXMucHJld0NlbGwpO1xyXG4gICAgICB0aGlzLnNldENlbGxOb0NsaWNrKHRoaXMuY3VycmVudENlbGwpO1xyXG4gICAgICB0aGlzLm9uZUNoZWNrRmllbGQgPSB0cnVlO1xyXG4gICAgfSwgdGhpcy5pdGVyICsgdGhpcy5pdGVyICsgdGhpcy5pdGVyKTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5kZXN0cm95RXhpc3RlZCkge1xyXG4gICAgICAgIGNjLmxvZyhcImNvbWVCYWNrQ2lyY2xlXCIpXHJcbiAgICAgICAgdGhpcy5ub2RlLmRpc3BhdGNoRXZlbnQobmV3IGNjLkV2ZW50LkV2ZW50Q3VzdG9tKCdzZXRVbkJsb2NrVG91Y2gnLCB0cnVlKSk7XHJcbiAgICAgICAgdGhpcy5zd2FwQ2lyY2xlcyh0aGlzLmN1cnJlbnRDZWxsLCB0aGlzLnRtcFByZXdDZWxsKTtcclxuICAgICAgICB0aGlzLnNldENlbGxOb0NsaWNrKHRoaXMudG1wUHJld0NlbGwpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2VsbE5vQ2xpY2sodGhpcy5jdXJyZW50Q2VsbCk7XHJcbiAgICAgICAgdGhpcy5wcmV3Q2VsbCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Q2VsbCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy50bXBQcmV3Q2VsbCA9IG51bGw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2MubG9nKFwiY291bnRQcm9ncmVzc1N0ZXBcIilcclxuICAgICAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oJ3NldFVuQmxvY2tUb3VjaCcsIHRydWUpKTtcclxuICAgICAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oJ2NvdW50UHJvZ3Jlc3NTdGVwJywgdHJ1ZSkpO1xyXG4gICAgICAgIHRoaXMucHJld0NlbGwgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY3VycmVudENlbGwgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudG1wUHJld0NlbGwgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9LCB0aGlzLnRpbWVGb3JDaGVja0ZpbGQpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc3dhcENpcmNsZXMoY2VsbDEsIGNlbGwyKSB7XHJcbiAgICBjYy5sb2coXCJzd2FwQ2lybGVcIilcclxuICAgIHRoaXMuYW5pbWF0ZU1vdmVDaXJjbGUoY2VsbDEsIGNlbGwyKTtcclxuICAgIHRoaXMuYW5pbWF0ZU1vdmVDaXJjbGUoY2VsbDIsIGNlbGwxKTtcclxuICAgIHZhciB0bXBDaXJjbGUgPSBjZWxsMi5fY2lyY2xlO1xyXG4gICAgY2VsbDIuX2NpcmNsZSA9IGNlbGwxLl9jaXJjbGU7XHJcbiAgICBjZWxsMS5fY2lyY2xlID0gdG1wQ2lyY2xlO1xyXG4gICAgdGhpcy5zZXRDZWxsTm9DbGljayhjZWxsMSk7XHJcbiAgICB0aGlzLnNldENlbGxOb0NsaWNrKGNlbGwyKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHNldENlbGxOb0NsaWNrKGNlbGwpIHtcclxuICAgIGNlbGwuY291bnRDbGljayA9IDA7XHJcbiAgICBjZWxsLndhc1NlbGVjdENpcmNsZSA9IGZhbHNlO1xyXG4gICAgY2VsbC53YXNDbGljayA9IGZhbHNlO1xyXG4gICAgY2VsbC5zZXROb3JtYWxTaXplKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBhbmltYXRlTW92ZUNpcmNsZShDZWxsMSwgQ2VsbDIpIHtcclxuICAgIGlmIChDZWxsMSA9PSBudWxsIHx8IENlbGwyID09IG51bGwpIHJldHVybjtcclxuICAgIENvbnN0YW50cy5pc0NhblRvdWNoID0gZmFsc2U7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgY2hlY2tpbmcgJHtDZWxsMS5fY2lyY2xlfWApO1xyXG5cclxuICAgIGNjLnR3ZWVuKENlbGwxLl9jaXJjbGUpXHJcbiAgICAgIC5wYXJhbGxlbChcclxuICAgICAgICBjYy50d2VlbigpLnRvKHRoaXMuaXRlciwgeyBzY2FsZTogMSB9KSxcclxuICAgICAgICBjYy50d2VlbigpLnRvKHRoaXMuaXRlciwgeyBwb3NpdGlvbjogQ2VsbDIubm9kZS5wb3NpdGlvbiB9KVxyXG4gICAgICApXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IHRydWU7XHJcbiAgICAgICAgfSwgMSlcclxuICAgICAgICBjYy5sb2coXCJmaW5pc2ggbW92ZVwiKTtcclxuICAgICAgfSkuc3RhcnQoKVxyXG4gIH1cclxuXHJcblxyXG4gIHNldEJ1c3RlcigpIHtcclxuICAgIC8vIGNjLmxvZyhcIkJ1c3RlciBTZXRcIik7XHJcbiAgICB0aGlzLmJ1c3RlckNsaWNrID0gdHJ1ZTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGJ1c3RlcigpIHtcclxuICAgIGlmICh0aGlzLmJ1c3RlckNsaWNrKVxyXG4gICAgICBpZiAodGhpcy5jdXJyZW50Q2VsbCAhPSBudWxsKSB7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRTZWxlY3RQcmV3Q2VsbChjZWxsKTtcclxuICAgICAgICB0aGlzLnN0YXJ0VHlwZURlc3Ryb2VyKHRoaXMuY3VycmVudENlbGwpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0ZURlc3Ryb3lDaXJjbGUodGhpcy5jdXJyZW50Q2VsbCk7XHJcbiAgICAgICAgdGhpcy5zZXRDZWxsTm9DbGljayh0aGlzLmN1cnJlbnRDZWxsKTtcclxuICAgICAgICB0aGlzLmJ1c3RlckNsaWNrID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnREZXN0b3lBcm93KCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudENlbGwgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbSgnY291bnRQcm9ncmVzc1N0ZXAnLCB0cnVlKSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG5cclxuICBzZXRTZWxlY3RQcmV3Q2VsbCgpIHtcclxuICAgIGlmICh0aGlzLnByZXdDZWxsICE9IG51bGwpXHJcbiAgICAgIGlmICh0aGlzLnByZXdDZWxsICE9PSB0aGlzLmN1cnJlbnRDZWxsICYmIHRoaXMucHJld0NlbGwud2FzU2VsZWN0Q2lyY2xlKSB7XHJcbiAgICAgICAgdGhpcy5wcmV3Q2VsbC5zZWxlY3RDaXJjbGUoKTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHNldFNlbGVjdEN1cnJlbnRDZWxsKCkge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudENlbGwgIT0gbnVsbClcclxuICAgICAgaWYgKHRoaXMuY3VycmVudENlbGwud2FzU2VsZWN0Q2lyY2xlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Q2VsbC5zZWxlY3RDaXJjbGUoKTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgZ2V0Q2xpY2tDZWxsKCkge1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNsaWNrU291bmQpO1xyXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLkNlbGxzLmxlbmd0aDsgaisrKVxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuQ2VsbHNbal0ubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgaWYgKHRoaXMuQ2VsbHNbal1baV0ud2FzQ2xpY2spIHtcclxuICAgICAgICAgIHRoaXMuQ2VsbHNbal1baV0ud2FzQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICAgIC8vIGNjLmxvZyhcImNsaWNrZWRcIilcclxuICAgICAgICAgIHJldHVybiB0aGlzLkNlbGxzW2pdW2ldO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcblxyXG4gIGNsaWNrRGVzdHJveUNpcmNsZUluQ2VsbCgpIHtcclxuICAgIHRoaXMuY291bnRDaXJjbGUtLTtcclxuICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbSgnc2V0UG9pbnQnLCB0cnVlKSk7XHJcbiAgICB0aGlzLmFsbENpcmNsZXNNb3ZlKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVPbmVMaW5lQ2lyY2xlcygpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5DZWxsc1swXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLmNyZWF0ZUNpcmNsZSh0aGlzLkNlbGxzWzBdW2ldKTtcclxuICAgIH1cclxuICAgIHRoaXMuYWxsQ2lyY2xlc01vdmUoKTtcclxuICAgIGlmICh0aGlzLm9uZUNoZWNrRmllbGQpIHtcclxuICAgICAgdGhpcy5vbmVDaGVja0ZpZWxkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMubmVlZENoZWNrRmllbGQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbmVlZENoZWNrRmllbGQoKSB7XHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbSgnbmVlZENoZWNrRmllbGQnLCB0cnVlKSk7XHJcbiAgICAgIHRoaXMub25lQ2hlY2tGaWVsZCA9IHRydWU7XHJcbiAgICB9LCB0aGlzLnRpbWVGb3JDaGVja0ZpbGQpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tMaW5lKCkge1xyXG4gICAgdGhpcy5kZXN0cm95RXhpc3RlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5JbkFyb3coKTtcclxuICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbSgnc2V0VW5CbG9ja1RvdWNoJywgdHJ1ZSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVDZWxscygpIHtcclxuICAgIHZhciB4UG9zOiBudW1iZXIgPSAwO1xyXG4gICAgdmFyIHlQb3M6IG51bWJlciA9IDA7XHJcbiAgICB2YXIgX2NlbGw7XHJcblxyXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLkNlbGxzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5DZWxsc1tqXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIF9jZWxsID0gY2MuaW5zdGFudGlhdGUodGhpcy5DZWxsKTtcclxuICAgICAgICBfY2VsbC5zZXRDb250ZW50U2l6ZSh0aGlzLmxlbmdodENlbGwsIHRoaXMud2lkdGhDZWxsKTtcclxuICAgICAgICBfY2VsbC5zZXRQYXJlbnQodGhpcy5ub2RlKTtcclxuICAgICAgICBfY2VsbC5zZXRQb3NpdGlvbih0aGlzLlN0YXJ0Q2VsbFBvc1ggKyB4UG9zLCB0aGlzLlN0YXJ0Q2VsbFBvc1kgKyB5UG9zKTtcclxuICAgICAgICB0aGlzLkNlbGxzW2pdW2ldID0gX2NlbGwuZ2V0Q29tcG9uZW50KENlbGwpO1xyXG4gICAgICAgIGlmIChpICUgMiAhPSAwICYmIGogJSAyID09IDApIHsgdGhpcy5DZWxsc1tqXVtpXS5zZXRHcmF5Q29sb3IoKTsgfVxyXG4gICAgICAgIGlmIChpICUgMiA9PSAwICYmIGogJSAyICE9IDApIHsgdGhpcy5DZWxsc1tqXVtpXS5zZXRHcmF5Q29sb3IoKTsgfVxyXG4gICAgICAgIC8vIGlmICh0aGlzLm5lZWRSYW5kb21Wb2lkQ2VsbCkgdGhpcy5jcmVhdGVBbnlUeXBlQ2VsbCh0aGlzLkNlbGxzW2pdW2ldLCAxKTtcclxuICAgICAgICB0aGlzLkNlbGxzW2pdW2ldLmpjb2x1bW4gPSBqO1xyXG4gICAgICAgIHRoaXMuQ2VsbHNbal1baV0uaXJvdyA9IGk7XHJcbiAgICAgICAgeFBvcyA9IHhQb3MgKyB0aGlzLmxlbmdodENlbGw7XHJcbiAgICAgIH1cclxuICAgICAgeFBvcyA9IDA7XHJcbiAgICAgIHlQb3MgPSB5UG9zIC0gdGhpcy53aWR0aENlbGw7XHJcbiAgICB9XHJcblxyXG4gICAgQ29uc3RhbnRzLkJvYXJkID0gdGhpcy5DZWxscztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQW55VHlwZUNlbGwoQ2VsbCwgdHlwZSkge1xyXG4gICAgaWYgKE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiB0aGlzLkNoYW5nZUZvckNyZWF0ZUFuQWN0aXZlQ2VsbCkgKyAxKSA9PSAxKSB7XHJcbiAgICAgIENlbGwudHlwZUNlbGwgPSB0eXBlO1xyXG4gICAgICBDZWxsLnNldENvbG9ySW5UeXBlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFR5cGVDZWxsc09uSWFuZEooaV8sIGpfLCBpTGVuZ3RoLCBqTGVndGgsIHR5cGUpIHtcclxuICAgIGZvciAodmFyIGogPSBqXzsgaiA8IGpMZWd0aDsgaisrKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSBpXzsgaSA8IGlMZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMuQ2VsbHNbal1baV0udHlwZUNlbGwgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuQ2VsbHNbal1baV0uc2V0Q29sb3JJblR5cGUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBDcmVhdGVDaXJjbGVzKCkge1xyXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLkNlbGxzLmxlbmd0aDsgaisrKVxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuQ2VsbHNbal0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5DZWxsc1tqXVtpXS50eXBlQ2VsbCA9PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLmNyZWF0ZUNpcmNsZSh0aGlzLkNlbGxzW2pdW2ldKVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oJ25lZWRDaGVja0ZpZWxkJywgdHJ1ZSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBEZXN0cm95Q2lyY2xlcygpIHtcclxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5DZWxscy5sZW5ndGg7IGorKylcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkNlbGxzW2pdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuQ2VsbHNbal1baV0uY2lyY2xlSXNOb3ROdWxsKCkpIHtcclxuICAgICAgICAgIHRoaXMuQ2VsbHNbal1baV0uX2NpcmNsZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICB0aGlzLkNlbGxzW2pdW2ldLl9jaXJjbGUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVDaXJjbGUoQ2VsbCkge1xyXG4gICAgaWYgKCFDZWxsLmNpcmNsZUlzTm90TnVsbCgpKSB7XHJcbiAgICAgIENlbGwuX2NpcmNsZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQ2lyY2xlKTtcclxuICAgICAgLy8gVGhp4bq/dCBs4bqtcCBsb+G6oWkgdsOgIG3DoHUgc+G6r2MgY2hvIENpcmNsZSBk4buxYSB2w6BvIGNpcmNsZVR5cGVcclxuICAgICAgXHJcbiAgICAgIC8vIGxldCBjaXJjbGVUeXBlID0gQ2VsbC5fY2lyY2xlLmdldENvbXBvbmVudChDaXJjbGUpLkNpcmNsZVR5cGVDb2xvcjtcclxuICAgICAgLy8gZG8geyAgICAgIFxyXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKFwiP1wiKTtcclxuICAgICAgICAgIFxyXG4gICAgICAvLyAgIENlbGwuX2NpcmNsZS5nZXRDb21wb25lbnQoQ2lyY2xlKS5zZXRSYW5kb21Db2xvcih0cnVlKTtcclxuICAgICAgLy8gICBDZWxsLl9jaXJjbGUuZ2V0Q29tcG9uZW50KENpcmNsZSkuc2V0Q29sb3JUaXBlKCk7XHJcbiAgICAgIC8vICAgY2lyY2xlVHlwZSA9IENlbGwuX2NpcmNsZS5nZXRDb21wb25lbnQoQ2lyY2xlKS5DaXJjbGVUeXBlQ29sb3I7XHJcbiAgICAgIC8vICAgLy8gVGhp4bq/dCBs4bqtcCBsb+G6oWkgdsOgIG3DoHUgc+G6r2MgY2hvIENpcmNsZSBk4buxYSB2w6BvIGNpcmNsZVR5cGVcclxuICAgICAgLy8gfSB3aGlsZSAoIXRoaXMuaXNWYWxpZFBsYWNlbWVudEZvckNpcmNsZShDZWxsLmpjb2x1bW4sIENlbGwuaXJvdywgY2lyY2xlVHlwZSkpO1xyXG5cclxuICAgICAgQ2VsbC5fY2lyY2xlLnNldFBhcmVudCh0aGlzLm5vZGUpO1xyXG4gICAgICBDZWxsLl9jaXJjbGUuc2V0UG9zaXRpb24oQ2VsbC5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgQ2VsbC5fY2lyY2xlLnNldENvbnRlbnRTaXplKHRoaXMubGVuZ2h0Q2VsbCAtIDE1LCB0aGlzLndpZHRoQ2VsbCAtIDE1KTtcclxuICAgICAgdGhpcy5jb3VudENpcmNsZSsrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaXNWYWxpZFBsYWNlbWVudEZvckNpcmNsZShqOiBudW1iZXIsIGk6IG51bWJlciwgY2lyY2xlVHlwZTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAvLyBLaeG7g20gdHJhIGjDoG5nXHJcbiAgICBpZiAoaSA+PSAyICYmIHRoaXMuQ2VsbHNbal1baSAtIDFdLl9jaXJjbGUgJiYgdGhpcy5DZWxsc1tqXVtpIC0gMl0uX2NpcmNsZSAmJlxyXG4gICAgICAgIHRoaXMuQ2VsbHNbal1baSAtIDFdLl9jaXJjbGUuZ2V0Q29tcG9uZW50KENpcmNsZSkuQ2lyY2xlVHlwZUNvbG9yID09PSBjaXJjbGVUeXBlICYmXHJcbiAgICAgICAgdGhpcy5DZWxsc1tqXVtpIC0gMl0uX2NpcmNsZS5nZXRDb21wb25lbnQoQ2lyY2xlKS5DaXJjbGVUeXBlQ29sb3IgPT09IGNpcmNsZVR5cGUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy8gS2nhu4NtIHRyYSBj4buZdFxyXG4gICAgaWYgKGogPj0gMiAmJiB0aGlzLkNlbGxzW2ogLSAxXVtpXS5fY2lyY2xlICYmIHRoaXMuQ2VsbHNbaiAtIDJdW2ldLl9jaXJjbGUgJiZcclxuICAgICAgICB0aGlzLkNlbGxzW2ogLSAxXVtpXS5fY2lyY2xlLmdldENvbXBvbmVudChDaXJjbGUpLkNpcmNsZVR5cGVDb2xvciA9PT0gY2lyY2xlVHlwZSAmJlxyXG4gICAgICAgIHRoaXMuQ2VsbHNbaiAtIDJdW2ldLl9jaXJjbGUuZ2V0Q29tcG9uZW50KENpcmNsZSkuQ2lyY2xlVHlwZUNvbG9yID09PSBjaXJjbGVUeXBlKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcblxyXG4gIGNlbGxFeGlzdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBhbGxDaXJjbGVzTW92ZSgpIHtcclxuXHJcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuQ2VsbHMubGVuZ3RoOyBqKyspXHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5DZWxsc1tqXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLkNlbGxzW2pdW2ldLkNlbGxJc05vdE51bGwoKSlcclxuICAgICAgICAgIGlmICghdGhpcy5DZWxsc1tqXVtpXS5jaXJjbGVJc05vdE51bGwoKSAmJiB0aGlzLkNlbGxzW2pdW2ldLnR5cGVDZWxsID09IDApIHtcclxuICAgICAgICAgICAgaWYgKGogPT0gMCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbSgnbW92ZUNpcmNsZUVuZCcsIHRydWUpKTtcclxuICAgICAgICAgICAgICB9LCB0aGlzLml0ZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChqID49IDEpIHtcclxuICAgICAgICAgICAgICB0aGlzLnN3YXBDaXJjbGVJbkNlbGwoaSwgaiwgaSwgaiAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jZWxsRXhpc3QpIHtcclxuICAgICAgICAgICAgICBpZiAoaiA+PSAxICYmIGkgPCB0aGlzLkNlbGxzW2pdLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDIpKSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3dhcENpcmNsZUluQ2VsbChpLCBqLCBpIC0gMSwgaiAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2VsbEV4aXN0KSB0aGlzLnN3YXBDaXJjbGVJbkNlbGwoaSwgaiwgaSArIDEsIGogLSAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5zd2FwQ2lyY2xlSW5DZWxsKGksIGosIGkgKyAxLCBqIC0gMSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2VsbEV4aXN0KSB0aGlzLnN3YXBDaXJjbGVJbkNlbGwoaSwgaiwgaSAtIDEsIGogLSAxKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKGkgPT0gMCAmJiBqID49IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3dhcENpcmNsZUluQ2VsbChpLCBqLCBpICsgMSwgaiAtIDEpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAoaSA9PSB0aGlzLkNlbGxzW2pdLmxlbmd0aCAtIDEgJiYgaiA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN3YXBDaXJjbGVJbkNlbGwoaSwgaiwgaSAtIDEsIGogLSAxKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3dhcENpcmNsZUluQ2VsbChpLCBqLCBuZXdpLCBuZXdqKSB7XHJcbiAgICBpZiAodGhpcy52YWxpZGF0ZUNpcmNsZU1vdmUoaSwgaiwgbmV3aSwgbmV3aikpIHtcclxuICAgICAgdGhpcy5DZWxsc1tqXVtpXS5fY2lyY2xlID0gdGhpcy5DZWxsc1tuZXdqXVtuZXdpXS5fY2lyY2xlO1xyXG4gICAgICB0aGlzLkNlbGxzW25ld2pdW25ld2ldLl9jaXJjbGUgPSBudWxsO1xyXG4gICAgICB0aGlzLm1vdmVDaXJjbGUodGhpcy5DZWxsc1tqXVtpXS5fY2lyY2xlLCB0aGlzLkNlbGxzW2pdW2ldLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICB0aGlzLmNlbGxFeGlzdCA9IHRydWU7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuY2VsbEV4aXN0ID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZhbGlkYXRlQ2lyY2xlTW92ZShpLCBqLCBuZXdpLCBuZXdqKSB7XHJcbiAgICBpZiAoQ2hlY2tlckJvb2xlYW4uY2hlY2tUd29Cb29sZWFuKHRoaXMuQ2VsbHNbal1baV0uQ2VsbElzTm90TnVsbCgpLCB0aGlzLkNlbGxzW25ld2pdW25ld2ldICE9IG51bGwpKVxyXG4gICAgICBpZiAoQ2hlY2tlckJvb2xlYW4uY2hlY2tUd29Cb29sZWFuKHRoaXMuQ2VsbHNbal1baV0udHlwZUNlbGwgPT0gMCwgdGhpcy5DZWxsc1tuZXdqXVtuZXdpXS50eXBlQ2VsbCA9PSAwKSlcclxuICAgICAgICBpZiAoQ2hlY2tlckJvb2xlYW4uY2hlY2tUd29Cb29sZWFuKHRoaXMuQ2VsbHNbal1baV0uX2NpcmNsZSA9PSBudWxsLCB0aGlzLkNlbGxzW25ld2pdW25ld2ldLl9jaXJjbGUgIT0gbnVsbCkpIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgbW92ZUNpcmNsZShjaXJjbGUsIHRvTW92ZSkge1xyXG4gICAgdmFyIF9jaXJjbGUgPSBjaXJjbGUuZ2V0Q29tcG9uZW50KENpcmNsZSk7XHJcbiAgICBfY2lyY2xlLmluTW92ZSA9IHRydWU7XHJcbiAgICBjYy50d2VlbihjaXJjbGUpXHJcbiAgICAgIC5wYXJhbGxlbChcclxuICAgICAgICBjYy50d2VlbigpLnRvKHRoaXMuaXRlciwgeyBzY2FsZTogMSB9KSxcclxuICAgICAgICBjYy50d2VlbigpLnRvKHRoaXMuaXRlciwgeyBwb3NpdGlvbjogdG9Nb3ZlIH0pXHJcbiAgICAgIClcclxuICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbSgnbW92ZUNpcmNsZUVuZCcsIHRydWUpKTtcclxuICAgICAgICBfY2lyY2xlLmluTW92ZSA9IGZhbHNlO1xyXG4gICAgICB9KVxyXG4gICAgICAuc3RhcnQoKVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0bXBDb3VudENpcmNsZTogbnVtYmVyID0gMDtcclxuXHJcbiAgLy90b2RvIFxyXG4gIHByaXZhdGUgZmllbGRPbkZpbGxlZFdpdGhDaXJjbGVzKCkge1xyXG4gICAgdmFyIGFsbGNpcmNsZW5vd2luZmllbGQgPSAwO1xyXG4gICAgdmFyIGFsbGNpcmNsZW5vd2luZmllbGRhbmRtb3ZlID0gMDtcclxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5DZWxsc1swXS5sZW5ndGg7IGorKykge1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuQ2VsbHNbal0ubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgaWYgKENoZWNrZXJCb29sZWFuLmNoZWNrVHdvQm9vbGVhbih0aGlzLkNlbGxzW2pdW2ldLnR5cGVDZWxsID09IDAsIHRoaXMuQ2VsbHNbal1baV0uY2lyY2xlSXNOb3ROdWxsKCkpKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5DZWxsc1tqXVtpXS5fY2lyY2xlLmdldENvbXBvbmVudChDaXJjbGUpLmluTW92ZSkgYWxsY2lyY2xlbm93aW5maWVsZGFuZG1vdmUrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2MubG9nKGFsbGNpcmNsZW5vd2luZmllbGQpO1xyXG4gICAgY2MubG9nKGFsbGNpcmNsZW5vd2luZmllbGRhbmRtb3ZlKTtcclxuICAgIGlmIChhbGxjaXJjbGVub3dpbmZpZWxkYW5kbW92ZSA9PSBhbGxjaXJjbGVub3dpbmZpZWxkKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhvcml6b250OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSB2ZXJ0aWNhbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZ29EZXN0cm95VGhyZWVJbkFyb3c6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBJbkFyb3coKSB7XHJcblxyXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLkNlbGxzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5DZWxsc1tqXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMuZ29EZXN0cm95VGhyZWVJbkFyb3cgPSB0cnVlO1xyXG4gICAgICAgIGlmIChqID49IDIpIHtcclxuICAgICAgICAgIHRoaXMudmVydGljYWwgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuaG9yaXpvbnQgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5JbkFyb3dUbXAoaSwgaiwgaSwgaiAtIDEsIGksIGogLSAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGkgPCB0aGlzLkNlbGxzW2pdLmxlbmd0aCAtIDIpIHtcclxuICAgICAgICAgIHRoaXMuaG9yaXpvbnQgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMudmVydGljYWwgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5JbkFyb3dUbXAoaSwgaiwgaSArIDEsIGosIGkgKyAyLCBqKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIEluQXJvd1RtcChpLCBqLCBpT25lLCBqT25lLCBpVHdvLCBqVHdvKSB7XHJcblxyXG4gICAgaWYgKHRoaXMuQ2VsbHNbal1baV0gIT0gbnVsbCAmJiB0aGlzLkNlbGxzW2pPbmVdW2lPbmVdICE9IG51bGwgJiYgdGhpcy5DZWxsc1tqVHdvXVtpVHdvXSAhPSBudWxsKSB7XHJcbiAgICAgIHZhciB0bXBCb29sMSA9IENoZWNrZXJCb29sZWFuLmNoZWNrVHdvQm9vbGVhbih0aGlzLkNlbGxzW2pdW2ldLnR5cGVDZWxsID09IDAsIHRoaXMuQ2VsbHNbak9uZV1baU9uZV0udHlwZUNlbGwgPT0gMCk7XHJcbiAgICAgIHZhciB0bXBCb29sMiA9IENoZWNrZXJCb29sZWFuLmNoZWNrVHdvQm9vbGVhbih0bXBCb29sMSwgdGhpcy5DZWxsc1tqVHdvXVtpVHdvXS50eXBlQ2VsbCA9PSAwKTtcclxuICAgICAgaWYgKCF0bXBCb29sMikgcmV0dXJuO1xyXG4gICAgICB0bXBCb29sMSA9IENoZWNrZXJCb29sZWFuLmNoZWNrVHdvQm9vbGVhbih0aGlzLkNlbGxzW2pdW2ldLmNpcmNsZUlzTm90TnVsbCgpLCB0aGlzLkNlbGxzW2pPbmVdW2lPbmVdLmNpcmNsZUlzTm90TnVsbCgpKTtcclxuICAgICAgdG1wQm9vbDIgPSBDaGVja2VyQm9vbGVhbi5jaGVja1R3b0Jvb2xlYW4odG1wQm9vbDEsIHRoaXMuQ2VsbHNbalR3b11baVR3b10uY2lyY2xlSXNOb3ROdWxsKCkpXHJcbiAgICAgIGlmICghdG1wQm9vbDIpIHJldHVybjtcclxuICAgICAgdmFyIHRtcEJvb2wzID0gQ2hlY2tlckJvb2xlYW4uRXF1YWxzVHJoZWVPYmoodGhpcy5DZWxsc1tqXVtpXS5fY2lyY2xlLmdldENvbXBvbmVudChDaXJjbGUpLkNpcmNsZVR5cGVDb2xvcixcclxuICAgICAgICB0aGlzLkNlbGxzW2pPbmVdW2lPbmVdLl9jaXJjbGUuZ2V0Q29tcG9uZW50KENpcmNsZSkuQ2lyY2xlVHlwZUNvbG9yLFxyXG4gICAgICAgIHRoaXMuQ2VsbHNbalR3b11baVR3b10uX2NpcmNsZS5nZXRDb21wb25lbnQoQ2lyY2xlKS5DaXJjbGVUeXBlQ29sb3IpO1xyXG4gICAgICBpZiAoIXRtcEJvb2wzKSByZXR1cm47XHJcbiAgICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XHJcbiAgICAgICAgaWYgKGkgPCB0aGlzLkNlbGxzW2pdLmxlbmd0aCAtIDQpIHtcclxuICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5yYWluYm93U291bmQpO1xyXG4gICAgICAgICAgdGhpcy5jcmVhdGVSYWluYm93QmFsbChpLCBqLCBpT25lLCBqT25lLCBpVHdvLCBqVHdvLCBqVHdvLCBpVHdvICsgMSwgalR3bywgaVR3byArIDIsIDMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaSA8IHRoaXMuQ2VsbHNbal0ubGVuZ3RoIC0gMyAmJiB0aGlzLmdvRGVzdHJveVRocmVlSW5Bcm93KSB7XHJcbiAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suR2VtU291bmQpO1xyXG4gICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLndvYVNvdW5kKTtcclxuICAgICAgICAgIHRoaXMuY3JlYXRlTGlnaHRuaW5nKGksIGosIGlPbmUsIGpPbmUsIGlUd28sIGpUd28sIGpUd28sIGlUd28gKyAxLCAyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuaG9yaXpvbnQpIHtcclxuICAgICAgICBpZiAoaiA+PSA0KSB7XHJcbiAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2sucmFpbmJvd1NvdW5kKTtcclxuICAgICAgICAgIHRoaXMuY3JlYXRlUmFpbmJvd0JhbGwoaSwgaiwgaU9uZSwgak9uZSwgaVR3bywgalR3bywgalR3byAtIDEsIGlUd28sIGpUd28gLSAyLCBpVHdvLCAzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGogPj0gMyAmJiB0aGlzLmdvRGVzdHJveVRocmVlSW5Bcm93KSB7XHJcbiAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suR2VtU291bmQpO1xyXG4gICAgICAgICAgdGhpcy5jcmVhdGVMaWdodG5pbmcoaSwgaiwgaU9uZSwgak9uZSwgaVR3bywgalR3bywgalR3byAtIDEsIGlUd28sIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5nb0Rlc3Ryb3lUaHJlZUluQXJvdykge1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5HZW1Tb3VuZCk7XHJcbiAgICAgICAgdGhpcy5jaGVjazNDaXJjbGUodGhpcy5DZWxsc1tqXVtpXSwgdGhpcy5DZWxsc1tqT25lXVtpT25lXSwgdGhpcy5DZWxsc1tqVHdvXVtpVHdvXSk7XHJcbiAgICAgICAgdGhpcy5ldmVudERlc3RveUFyb3coKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVSYWluYm93QmFsbChpLCBqLCBpT25lLCBqT25lLCBpVHdvLCBqVHdvLCBpVGhyZWUsIGpUaHJlZSwgaUZvdXIsIGpGb3VyLCB0aXBlKSB7XHJcbiAgICBpZiAodGhpcy5DZWxsc1tpVGhyZWVdW2pUaHJlZV0gPT0gbnVsbCB8fCB0aGlzLkNlbGxzW2lGb3VyXVtqRm91cl0gPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgdmFyIGJvb2wxID0gQ2hlY2tlckJvb2xlYW4uY2hlY2tUd29Cb29sZWFuKHRoaXMuQ2VsbHNbaVRocmVlXVtqVGhyZWVdLnR5cGVDZWxsID09IDAsIHRoaXMuQ2VsbHNbaVRocmVlXVtqVGhyZWVdLmNpcmNsZUlzTm90TnVsbCgpKTtcclxuICAgIHZhciBib29sMiA9IENoZWNrZXJCb29sZWFuLmNoZWNrVHdvQm9vbGVhbih0aGlzLkNlbGxzW2lGb3VyXVtqRm91cl0udHlwZUNlbGwgPT0gMCwgdGhpcy5DZWxsc1tpRm91cl1bakZvdXJdLmNpcmNsZUlzTm90TnVsbCgpKTtcclxuICAgIGlmIChDaGVja2VyQm9vbGVhbi5jaGVja1R3b0Jvb2xlYW4oYm9vbDEsIGJvb2wyKSkge1xyXG4gICAgICB2YXIgYm9vbDMgPSBDaGVja2VyQm9vbGVhbi5FcXVhbHNUcmhlZU9iaih0aGlzLkNlbGxzW2pUd29dW2lUd29dLl9jaXJjbGUuZ2V0Q29tcG9uZW50KENpcmNsZSkuQ2lyY2xlVHlwZUNvbG9yLFxyXG4gICAgICAgIHRoaXMuQ2VsbHNbaVRocmVlXVtqVGhyZWVdLl9jaXJjbGUuZ2V0Q29tcG9uZW50KENpcmNsZSkuQ2lyY2xlVHlwZUNvbG9yLFxyXG4gICAgICAgIHRoaXMuQ2VsbHNbaUZvdXJdW2pGb3VyXS5fY2lyY2xlLmdldENvbXBvbmVudChDaXJjbGUpLkNpcmNsZVR5cGVDb2xvcik7XHJcbiAgICAgIGlmIChib29sMykge1xyXG4gICAgICAgIGNjLmxvZyhcIlJhaW5ib3dDcmVhdGVcIik7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLndvYVNvdW5kMilcclxuICAgICAgICB0aGlzLkNlbGxzW2pdW2ldLl9jaXJjbGUuZ2V0Q29tcG9uZW50KENpcmNsZSkuc2V0VGlwZSh0aXBlKTtcclxuICAgICAgICBjYy5sb2codGhpcy5DZWxsc1tqXVtpXS5fY2lyY2xlLmdldENvbXBvbmVudChDaXJjbGUpLkNpcmNsZVR5cGUpO1xyXG4gICAgICAgIHRoaXMuY2hlY2szQ2lyY2xlKHRoaXMuQ2VsbHNbak9uZV1baU9uZV0sIHRoaXMuQ2VsbHNbalR3b11baVR3b10sIHRoaXMuQ2VsbHNbaVRocmVlXVtqVGhyZWVdKTtcclxuICAgICAgICB0aGlzLnN0YXJ0Q2hlY2tDaXJjbGVGb3JEZXN0cm95KHRoaXMuQ2VsbHNbaUZvdXJdW2pGb3VyXSk7XHJcbiAgICAgICAgdGhpcy5nb0Rlc3Ryb3lUaHJlZUluQXJvdyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZXZlbnREZXN0b3lBcm93KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlTGlnaHRuaW5nKGksIGosIGlPbmUsIGpPbmUsIGlUd28sIGpUd28sIGlUaHJlZSwgalRocmVlLCB0aXBlKSB7XHJcbiAgICBpZiAodGhpcy5DZWxsc1tpVGhyZWVdW2pUaHJlZV0gPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgaWYgKENoZWNrZXJCb29sZWFuLmNoZWNrVHdvQm9vbGVhbih0aGlzLkNlbGxzW2lUaHJlZV1balRocmVlXS50eXBlQ2VsbCA9PSAwLCB0aGlzLkNlbGxzW2lUaHJlZV1balRocmVlXS5jaXJjbGVJc05vdE51bGwoKSkpXHJcbiAgICAgIGlmIChDaGVja2VyQm9vbGVhbi5FcXVhbHNUd29PYmoodGhpcy5DZWxsc1tqVHdvXVtpVHdvXS5fY2lyY2xlLmdldENvbXBvbmVudChDaXJjbGUpLkNpcmNsZVR5cGVDb2xvcixcclxuICAgICAgICB0aGlzLkNlbGxzW2lUaHJlZV1balRocmVlXS5fY2lyY2xlLmdldENvbXBvbmVudChDaXJjbGUpLkNpcmNsZVR5cGVDb2xvcikpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZSBsaWdodG5pbmdcIik7XHJcbiAgICAgICAgdmFyIGNpcmNsZSA9IHRoaXMuQ2VsbHNbal1baV0uX2NpcmNsZS5nZXRDb21wb25lbnQoQ2lyY2xlKTtcclxuXHJcbiAgICAgICAgdGhpcy5DZWxsc1tpVGhyZWVdW2pUaHJlZV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuQ2VsbHNbaVRocmVlXVtqVGhyZWVdLm5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5DZWxsc1tpVGhyZWVdW2pUaHJlZV0uX2NpcmNsZS5nZXRDb21wb25lbnQoQ2lyY2xlKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5DZWxsc1tpVGhyZWVdW2pUaHJlZV0uX2NpcmNsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICBjaXJjbGUuc2V0VGlwZSh0aXBlKTtcclxuICAgICAgICB0aGlzLmNoZWNrM0NpcmNsZSh0aGlzLkNlbGxzW2pPbmVdW2lPbmVdLCB0aGlzLkNlbGxzW2pUd29dW2lUd29dLCB0aGlzLkNlbGxzW2lUaHJlZV1balRocmVlXSk7XHJcbiAgICAgICAgdGhpcy5nb0Rlc3Ryb3lUaHJlZUluQXJvdyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZXZlbnREZXN0b3lBcm93KCk7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveVJhaW5ib3dCYWxsKENlbGwsIGNpcmNsZSkge1xyXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLkNlbGxzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5DZWxsc1tqXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLkNlbGxzW2pdW2ldLmNpcmNsZUlzTm90TnVsbCgpKSB2YXIgY3VycmVudENpcmNsZSA9IHRoaXMuQ2VsbHNbal1baV0uX2NpcmNsZS5nZXRDb21wb25lbnQoQ2lyY2xlKTtcclxuICAgICAgICBlbHNlIHJldHVybjtcclxuICAgICAgICBpZiAoQ2VsbCAhPSB0aGlzLkNlbGxzW2pdW2ldICYmXHJcbiAgICAgICAgICBjaXJjbGUuQ2lyY2xlVHlwZUNvbG9yID09PSBjdXJyZW50Q2lyY2xlLkNpcmNsZVR5cGVDb2xvcikge1xyXG4gICAgICAgICAgaWYgKGNpcmNsZS5DaXJjbGVUeXBlID09PSBjdXJyZW50Q2lyY2xlLkNpcmNsZVR5cGUpXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZURlc3Ryb3lDaXJjbGUodGhpcy5DZWxsc1tqXVtpXSk7XHJcbiAgICAgICAgICBlbHNlIHRoaXMuc3RhcnRDaGVja0NpcmNsZUZvckRlc3Ryb3kodGhpcy5DZWxsc1tqXVtpXSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveUxpZ2h0bmluZ1ZlcnRpY2FsKENlbGwsIGNpcmNsZSkge1xyXG4gICAgY29uc29sZS5sb2coXCJib29tIGxpZ2h0bmluZyB2ZXJ0aWNhbFwiKTtcclxuXHJcbiAgICB2YXIgaiA9IENlbGwuamNvbHVtbjtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5DZWxsc1tqXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoQ2VsbCAhPSB0aGlzLkNlbGxzW2pdW2ldIHx8IHRoaXMuQ2VsbHNbal1baV0uQ2VsbElzTm90TnVsbCgpKSByZXR1cm47XHJcbiAgICAgIGlmICh0aGlzLkNlbGxzW2pdW2ldLmNpcmNsZUlzTm90TnVsbCgpKSB2YXIgY3VycmVudENpcmNsZSA9IHRoaXMuQ2VsbHNbal1baV0uX2NpcmNsZS5nZXRDb21wb25lbnQoQ2lyY2xlKTtcclxuICAgICAgZWxzZSByZXR1cm47XHJcbiAgICAgIGlmIChjaXJjbGUuQ2lyY2xlVHlwZSA9PT0gY3VycmVudENpcmNsZS5DaXJjbGVUeXBlKSB0aGlzLmFuaW1hdGVEZXN0cm95Q2lyY2xlKHRoaXMuQ2VsbHNbal1baV0pO1xyXG4gICAgICBlbHNlIHRoaXMuc3RhcnRDaGVja0NpcmNsZUZvckRlc3Ryb3kodGhpcy5DZWxsc1tqXVtpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlc3Ryb3lMaWdodG5pbmdIb3Jpem9udChDZWxsLCBjaXJjbGUpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiYm9vbSBsaWdodG5pbmcgaG9yaXpvbnRcIik7XHJcblxyXG4gICAgdmFyIGkgPSBDZWxsLmlyb3c7XHJcbiAgICB2YXIgdGhpc0NpcmNsZSA9IGNpcmNsZS5nZXRDb21wb25lbnQoQ2lyY2xlKTtcclxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5DZWxscy5sZW5ndGg7IGorKykge1xyXG4gICAgICBpZiAoQ2VsbCAhPSB0aGlzLkNlbGxzW2pdW2ldIHx8IHRoaXMuQ2VsbHNbal1baV0gIT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICBpZiAodGhpcy5DZWxsc1tqXVtpXS5jaXJjbGVJc05vdE51bGwoKSkgdmFyIGN1cnJlbnRDaXJjbGUgPSB0aGlzLkNlbGxzW2pdW2ldLl9jaXJjbGUuZ2V0Q29tcG9uZW50KENpcmNsZSk7XHJcbiAgICAgIGlmIChjdXJyZW50Q2lyY2xlID09IG51bGwpIHJldHVybjtcclxuICAgICAgaWYgKGNpcmNsZS5DaXJjbGVUeXBlID09PSBjdXJyZW50Q2lyY2xlLkNpcmNsZVR5cGUpIHRoaXMuYW5pbWF0ZURlc3Ryb3lDaXJjbGUodGhpcy5DZWxsc1tqXVtpXSk7XHJcbiAgICAgIGVsc2UgdGhpcy5zdGFydENoZWNrQ2lyY2xlRm9yRGVzdHJveSh0aGlzLkNlbGxzW2pdW2ldKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveWxpZ2h0bmluZ1ZlcnRpY2FsQW5kbGlnaHRuaW5nSG9yaXpvbnQoQ2VsbCwgY2lyY2xlKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3lMaWdodG5pbmdWZXJ0aWNhbChDZWxsLCBjaXJjbGUpO1xyXG4gICAgdGhpcy5kZXN0cm95TGlnaHRuaW5nSG9yaXpvbnQoQ2VsbCwgY2lyY2xlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2szQ2lyY2xlKENlbGwxLCBDZWxsMiwgQ2VsbDMpIHtcclxuICAgIHRoaXMuc3RhcnRDaGVja0NpcmNsZUZvckRlc3Ryb3koQ2VsbDEpO1xyXG4gICAgdGhpcy5zdGFydENoZWNrQ2lyY2xlRm9yRGVzdHJveShDZWxsMik7XHJcbiAgICB0aGlzLnN0YXJ0Q2hlY2tDaXJjbGVGb3JEZXN0cm95KENlbGwzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhcnRDaGVja0NpcmNsZUZvckRlc3Ryb3koQ2VsbCkge1xyXG4gICAgdGhpcy5zdGFydFR5cGVEZXN0cm9lcihDZWxsKTtcclxuICAgIHRoaXMuYW5pbWF0ZURlc3Ryb3lDaXJjbGUoQ2VsbCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXJ0VHlwZURlc3Ryb2VyKENlbGwpIHtcclxuICAgIGlmIChDZWxsLmNpcmNsZUlzTm90TnVsbCgpKSB7XHJcbiAgICAgIHZhciBjaXJjbGUgPSBDZWxsLl9jaXJjbGUuZ2V0Q29tcG9uZW50KENpcmNsZSk7XHJcbiAgICAgIHN3aXRjaCAoY2lyY2xlLkNpcmNsZVR5cGUpIHtcclxuICAgICAgICBjYXNlIHRpcGVDaXJjbGUucmFpbmJvd0JhbGw6IHtcclxuICAgICAgICAgIHRoaXMuZGVzdHJveVJhaW5ib3dCYWxsKENlbGwsIGNpcmNsZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSB0aXBlQ2lyY2xlLmxpZ2h0bmluZ1ZlcnRpY2FsOiB7XHJcbiAgICAgICAgICB0aGlzLmRlc3Ryb3lMaWdodG5pbmdWZXJ0aWNhbChDZWxsLCBjaXJjbGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgdGlwZUNpcmNsZS5saWdodG5pbmdIb3Jpem9udDoge1xyXG4gICAgICAgICAgdGhpcy5kZXN0cm95TGlnaHRuaW5nSG9yaXpvbnQoQ2VsbCwgY2lyY2xlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIHRpcGVDaXJjbGUubm9ybWFsOiB7XHJcbiAgICAgICAgICB0aGlzLmFuaW1hdGVEZXN0cm95Q2lyY2xlKENlbGwpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlc3Ryb3lFdmVyeUNpcmNsZXMoKSB7XHJcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuQ2VsbHMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkNlbGxzW2pdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRlRGVzdHJveUNpcmNsZSh0aGlzLkNlbGxzW2pdW2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oJ2Rlc3Ryb3lDaXJjbGVzJywgdHJ1ZSkpO1xyXG4gICAgfSwgdGhpcy5pdGVyICsgMC4xKTtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5ub2RlLmRpc3BhdGNoRXZlbnQobmV3IGNjLkV2ZW50LkV2ZW50Q3VzdG9tKCduZWVkQ2hlY2tGaWVsZCcsIHRydWUpKTtcclxuICAgIH0sICh0aGlzLml0ZXIgKyAwLjIpICogNCk7XHJcblxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95RXhpc3RlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZXZlbnREZXN0b3lBcm93KCkge1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oJ3NldEJsb2NrVG91Y2gnLCB0cnVlKSk7XHJcbiAgICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbSgnZGVzdHJveUNpcmNsZXMnLCB0cnVlKSk7XHJcbiAgICAgIHRoaXMuZGVzdHJveUV4aXN0ZWQgPSB0cnVlO1xyXG4gICAgfSwgdGhpcy5pdGVyICsgdGhpcy5pdGVyKTtcclxuICB9XHJcblxyXG4gIGFuaW1hdGlvblN0YXJ0OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgcHJpdmF0ZSBhbmltYXRlRGVzdHJveUNpcmNsZShDZWxsKSB7XHJcbiAgICBpZiAoQ2VsbCA9PSBudWxsKSByZXR1cm47XHJcbiAgICBDZWxsLmJsaW5rLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJCbGlua19BbmltXCIpO1xyXG4gICAgaWYgKENvbnN0YW50cy5pc0NsaWNrRmlyc3RUaW1lKSB7XHJcbiAgICAgIENvbnN0YW50cy5jb3VudFNjb3JlICs9IDE7XHJcbiAgICB9XHJcbiAgICBjYy50d2VlbihDZWxsLl9jaXJjbGUpXHJcbiAgICAgIC5wYXJhbGxlbChcclxuICAgICAgICBjYy50d2VlbigpLnRvKHRoaXMuaXRlciwgeyBzY2FsZTogMCB9KSxcclxuICAgICAgICBjYy50d2VlbigpLnRvKHRoaXMuaXRlciwge30pXHJcbiAgICAgIClcclxuICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIGlmIChDZWxsLl9jaXJjbGUgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY291bnRDaXJjbGUtLTtcclxuICAgICAgICB0aGlzLmdldFR5cGVEZXN0cm95Q2lyY2xlKENlbGwuX2NpcmNsZS5nZXRDb21wb25lbnQoQ2lyY2xlKSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmRpc3BhdGNoRXZlbnQobmV3IGNjLkV2ZW50LkV2ZW50Q3VzdG9tKCdzZXRQb2ludCcsIHRydWUpKTtcclxuICAgICAgICBDZWxsLl9jaXJjbGUuZGVzdHJveSgpO1xyXG4gICAgICAgIENlbGwuX2NpcmNsZSA9IG51bGw7XHJcblxyXG4gICAgICB9KS5zdGFydCgpXHJcbiAgfVxyXG5cclxuICBnZXRUeXBlRGVzdHJveUNpcmNsZShjaXJjbGUpIHtcclxuICAgIHRoaXMuZGVzdHJveVRpcGVDb2xvcnNbY2lyY2xlLkNpcmNsZVR5cGVDb2xvcl0rKztcclxuICAgIC8vIGNjLmxvZyh0aGlzLmRlc3Ryb3lUaXBlQ29sb3JzW2NpcmNsZS5DaXJjbGVUeXBlQ29sb3JdKTtcclxuICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbSgnc2V0RGVzdHJveUNpcmNsZXNUeXBlXycsIHRydWUpKTtcclxuICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MainGame/Cell.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93f68rzHqxJY5it62LGw3mz', 'Cell');
// Script/MainGame/Cell.ts

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
exports.Cell = void 0;
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Cell = /** @class */ (function (_super) {
    __extends(Cell, _super);
    function Cell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.generator = false;
        _this.blink = null;
        _this.irow = 0;
        _this.jcolumn = 0;
        _this.TypeColor = 0;
        _this.typeCell = 0;
        _this._circle = null;
        _this.wasSelectCircle = false;
        _this.wasClick = false;
        _this.countClick = 0;
        return _this;
    }
    Cell.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.wasClickSet, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.moveCircle, this);
    };
    Cell.prototype.wasClickSet = function () {
        if (!constants_1.Constants.isCanTouch) {
            return;
        }
        if (this._circle != null) {
            this.wasClick = true;
            this.selectCircle();
        }
    };
    Cell.prototype.start = function () {
    };
    Cell.prototype.moveCircle = function () {
        cc.log("circle is move");
    };
    Cell.prototype.setGrayColor = function () {
        this.node.color = new cc.Color(71, 135, 153);
    };
    Cell.prototype.setWhiteColor = function () {
        this.node.color = new cc.Color(0, 0, 0);
    };
    Cell.prototype.setColorInType = function () {
        if (this.typeCell == 1)
            this.setWhiteColor();
    };
    Cell.prototype.selectCircle = function () {
        if (this._circle == null)
            return;
        this.countClick++;
        if (this.countClick % 2 == 0) {
            this.wasSelectCircle = false;
            this.wasClick = false;
            this.setNormalSize();
            this.node.dispatchEvent(new cc.Event.EventCustom('wasTwoClickOnCell', true));
            // console.log("2 click");
        }
        else {
            this.wasSelectCircle = true;
            this.node.dispatchEvent(new cc.Event.EventCustom('wasClickOnCell', true));
            this._circle.setContentSize(this.node.getContentSize());
            // console.log("1 click");
        }
    };
    Cell.prototype.setNormalSize = function () {
        if (this._circle == null)
            return;
        var oldSize = cc.size(this.node.getContentSize());
        this._circle.setContentSize(oldSize.height - 15, oldSize.width - 15);
    };
    Cell.prototype.mousedown = function () {
        this.wasClick = true;
        this.destroyCircle();
    };
    Cell.prototype.destroyCircle = function () {
        if (this._circle != null) {
            this._circle.destroy();
            this._circle = null;
            this.node.dispatchEvent(new cc.Event.EventCustom('clickOnCellForDestroyCircle', true));
        }
    };
    Cell.prototype.circleIsNotNull = function () {
        if (this._circle != null)
            return true;
        return false;
    };
    Cell.prototype.CellIsNotNull = function () {
        if (this != null)
            return true;
        return false;
    };
    __decorate([
        property
    ], Cell.prototype, "generator", void 0);
    __decorate([
        property(cc.Node)
    ], Cell.prototype, "blink", void 0);
    Cell = __decorate([
        ccclass
    ], Cell);
    return Cell;
}(cc.Component));
exports.Cell = Cell;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluR2FtZVxcQ2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBCLHdCQUFZO0lBQXRDO1FBQUEscUVBc0dDO1FBbkdHLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFFM0IsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGFBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsZUFBUyxHQUFjLENBQUMsQ0FBQztRQUV6QixjQUFRLEdBQWEsQ0FBQyxDQUFDO1FBQ3ZCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIscUJBQWUsR0FBWSxLQUFLLENBQUM7UUFDakMsY0FBUSxHQUFZLEtBQUssQ0FBQztRQXVDMUIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7O0lBZ0QzQixDQUFDO0lBcEZHLHFCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsMEJBQVcsR0FBWDtRQUNJLElBQUcsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsRUFBRTtZQUN0QixPQUFNO1NBQ1Q7UUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUUsSUFB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QUM7SUFHRCw0QkFBYSxHQUFiO1FBQ0ksSUFBSSxJQUFJLElBQUksSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQzlCLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFqR0Q7UUFEQyxRQUFROzJDQUNrQjtJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VDQUNJO0lBTGIsSUFBSTtRQURoQixPQUFPO09BQ0ssSUFBSSxDQXNHaEI7SUFBRCxXQUFDO0NBdEdELEFBc0dDLENBdEd5QixFQUFFLENBQUMsU0FBUyxHQXNHckM7QUF0R1ksb0JBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgQ2VsbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBnZW5lcmF0b3I6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmxpbms6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGlyb3c6IG51bWJlciA9IDA7XHJcbiAgICBqY29sdW1uOiBudW1iZXIgPSAwO1xyXG4gICAgVHlwZUNvbG9yOiB0eXBlQ29sb3IgPSAwO1xyXG4gICAgXHJcbiAgICB0eXBlQ2VsbDogdHlwZUNlbGwgPSAwO1xyXG4gICAgX2NpcmNsZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgd2FzU2VsZWN0Q2lyY2xlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICB3YXNDbGljazogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy53YXNDbGlja1NldCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMubW92ZUNpcmNsZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgd2FzQ2xpY2tTZXQoKSB7XHJcbiAgICAgICAgaWYoIUNvbnN0YW50cy5pc0NhblRvdWNoKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2NpcmNsZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2FzQ2xpY2sgPXRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Q2lyY2xlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3ZlQ2lyY2xlKCl7XHJcbiAgICAgICAgY2MubG9nKFwiY2lyY2xlIGlzIG1vdmVcIilcclxuICAgIH1cclxuXHJcbiAgICBzZXRHcmF5Q29sb3IoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gbmV3IGNjLkNvbG9yKDcxLCAxMzUsIDE1Myk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0V2hpdGVDb2xvcigpIHtcclxuICAgICAgICB0aGlzLm5vZGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29sb3JJblR5cGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudHlwZUNlbGwgPT0gMSkgdGhpcy5zZXRXaGl0ZUNvbG9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY291bnRDbGljazogbnVtYmVyID0gMDtcclxuXHJcbiAgICBzZWxlY3RDaXJjbGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NpcmNsZSA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jb3VudENsaWNrKys7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRDbGljayAlIDIgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLndhc1NlbGVjdENpcmNsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLndhc0NsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Tm9ybWFsU2l6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oJ3dhc1R3b0NsaWNrT25DZWxsJywgdHJ1ZSkpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIjIgY2xpY2tcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy53YXNTZWxlY3RDaXJjbGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oJ3dhc0NsaWNrT25DZWxsJywgdHJ1ZSkpO1xyXG4gICAgICAgICAgICB0aGlzLl9jaXJjbGUuc2V0Q29udGVudFNpemUodGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIjEgY2xpY2tcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldE5vcm1hbFNpemUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NpcmNsZSA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgdmFyIG9sZFNpemUgPSBjYy5zaXplKHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpKTtcclxuICAgICAgICB0aGlzLl9jaXJjbGUuc2V0Q29udGVudFNpemUob2xkU2l6ZS5oZWlnaHQgLSAxNSwgb2xkU2l6ZS53aWR0aCAtIDE1KTtcclxuICAgIH1cclxuICAgIG1vdXNlZG93bigpIHtcclxuICAgICAgICB0aGlzLndhc0NsaWNrID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRlc3Ryb3lDaXJjbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95Q2lyY2xlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9jaXJjbGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jaXJjbGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9jaXJjbGUgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oJ2NsaWNrT25DZWxsRm9yRGVzdHJveUNpcmNsZScsIHRydWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2lyY2xlSXNOb3ROdWxsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9jaXJjbGUgIT0gbnVsbCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBDZWxsSXNOb3ROdWxsKCkge1xyXG4gICAgICAgIGlmICh0aGlzICE9IG51bGwpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------
