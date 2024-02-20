
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
        _this.woaAnimeSound = null;
        _this.openBookSound = null;
        _this.showItemSound = null;
        _this.pickItemSound = null;
        _this.waoGameSound = null;
        _this.swtichItemSound = null;
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
                case "woaAnimeSound":
                    this.woaAnimeSound.play();
                    break;
                case "openBookSound":
                    this.openBookSound.play();
                    break;
                case "showItemSound":
                    this.showItemSound.play();
                    break;
                case "pickItemSound":
                    this.pickItemSound.play();
                    break;
                case "waoGameSound":
                    this.waoGameSound.play();
                    break;
                case "swtichItemSound":
                    this.swtichItemSound.play();
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
            case "woaAnimeSound":
                this.woaAnimeSound.stop();
                break;
            case "openBookSound":
                this.openBookSound.stop();
                break;
            case "showItemSound":
                this.showItemSound.stop();
                break;
            case "pickItemSound":
                this.pickItemSound.stop();
                break;
            case "waoGameSound":
                this.waoGameSound.stop();
                break;
            case "swtichItemSound":
                this.swtichItemSound.stop();
                break;
            default:
                break;
        }
    };
    AudioManager.prototype.stopAllSoundExceptBgSound = function () {
        this.showItemSound.stop();
        this.woaAnimeSound.stop();
        this.openBookSound.stop();
        this.pickItemSound.stop();
        this.waoGameSound.stop();
        this.swtichItemSound.stop();
    };
    AudioManager.prototype.stopAllSound = function () {
        this.bgSound.stop();
        this.showItemSound.stop();
        this.woaAnimeSound.stop();
        this.openBookSound.stop();
        this.pickItemSound.stop();
        this.waoGameSound.stop();
        this.swtichItemSound.stop();
    };
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "bgSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "woaAnimeSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "openBookSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "showItemSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "pickItemSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "waoGameSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "swtichItemSound", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXEF1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFJNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUF3SEM7UUF0SEcsU0FBUztRQUVULGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLG1CQUFhLEdBQW1CLElBQUksQ0FBQztRQUVyQyxtQkFBYSxHQUFtQixJQUFJLENBQUM7UUFFckMsbUJBQWEsR0FBbUIsSUFBSSxDQUFDO1FBRXJDLG1CQUFhLEdBQW1CLElBQUksQ0FBQztRQUVyQyxrQkFBWSxHQUFtQixJQUFJLENBQUM7UUFFcEMscUJBQWUsR0FBbUIsSUFBSSxDQUFDOztJQXdHM0MsQ0FBQztJQXRHVSxnQ0FBUyxHQUFoQixVQUFpQixTQUFpQjtRQUM5QixhQUFhO1FBQ2IsK0VBQStFO1FBQy9FLDJCQUEyQjtRQUMzQiwwQkFBMEI7UUFDMUIsbUNBQW1DO1FBQ25DLHFCQUFxQjtRQUNyQixnQ0FBZ0M7UUFDaEMseUNBQXlDO1FBQ3pDLHFCQUFxQjtRQUNyQixnQ0FBZ0M7UUFDaEMseUNBQXlDO1FBQ3pDLHFCQUFxQjtRQUNyQixnQ0FBZ0M7UUFDaEMseUNBQXlDO1FBQ3pDLHFCQUFxQjtRQUNyQixnQ0FBZ0M7UUFDaEMseUNBQXlDO1FBQ3pDLHdCQUF3QjtRQUN4QixtQ0FBbUM7UUFDbkMsd0NBQXdDO1FBQ3hDLHFCQUFxQjtRQUNyQixzQ0FBc0M7UUFDdEMsK0NBQStDO1FBQy9DLHlCQUF5QjtRQUN6QixtQkFBbUI7UUFDbkIscUJBQXFCO1FBQ3JCLFFBQVE7UUFDUixJQUFJO1FBQ0osbUJBQW1CO1FBRW5CLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFF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QyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt1REFDWTtJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3VEQUNZO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7dURBQ1k7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztzREFDVztJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3lEQUNjO0lBaEJ0QixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBd0hoQztJQUFELG1CQUFDO0NBeEhELEFBd0hDLENBeEh5QyxFQUFFLENBQUMsU0FBUyxHQXdIckQ7a0JBeEhvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9NYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBzb3VuZCBcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIGJnU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIHdvYUFuaW1lU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIG9wZW5Cb29rU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIHNob3dJdGVtU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIHBpY2tJdGVtU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIHdhb0dhbWVTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgc3d0aWNoSXRlbVNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHBsYXlTb3VuZChzb3VuZE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIC8vIGlyb25zb3VyY2VcclxuICAgICAgICAvLyBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSAmJiBDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kKSB7XHJcbiAgICAgICAgLy8gICAgIHN3aXRjaCAoc291bmROYW1lKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBjYXNlIFwiYmdTb3VuZFwiOlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuYmdTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgICAgICBjYXNlIFwid29hQW5pbWVTb3VuZFwiOlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMud29hQW5pbWVTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgICAgICBjYXNlIFwib3BlbkJvb2tTb3VuZFwiOlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMub3BlbkJvb2tTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgICAgICBjYXNlIFwic2hvd0l0ZW1Tb3VuZFwiOlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuc2hvd0l0ZW1Tb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgICAgICBjYXNlIFwicGlja0l0ZW1Tb3VuZFwiOlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMucGlja0l0ZW1Tb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7ICAgXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY2FzZSBcIndhb0dhbWVTb3VuZFwiOlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMud2FvR2FtZVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgICAgICAgICBjYXNlIFwic3d0aWNoSXRlbVNvdW5kXCI6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuc3d0aWNoSXRlbVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHNvdW5kTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImJnU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJnU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIndvYUFuaW1lU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndvYUFuaW1lU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm9wZW5Cb29rU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5Cb29rU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInNob3dJdGVtU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dJdGVtU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInBpY2tJdGVtU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBpY2tJdGVtU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ3YW9HYW1lU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndhb0dhbWVTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN3dGljaEl0ZW1Tb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN3dGljaEl0ZW1Tb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RvcFNvdW5kKHNvdW5kTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoIChzb3VuZE5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImJnU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYmdTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIndvYUFuaW1lU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMud29hQW5pbWVTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm9wZW5Cb29rU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlbkJvb2tTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNob3dJdGVtU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0l0ZW1Tb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInBpY2tJdGVtU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMucGlja0l0ZW1Tb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ3YW9HYW1lU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndhb0dhbWVTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN3dGljaEl0ZW1Tb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN3dGljaEl0ZW1Tb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RvcEFsbFNvdW5kRXhjZXB0QmdTb3VuZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNob3dJdGVtU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMud29hQW5pbWVTb3VuZC5zdG9wKCk7IHRoaXMub3BlbkJvb2tTb3VuZC5zdG9wKCk7IHRoaXMucGlja0l0ZW1Tb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy53YW9HYW1lU291bmQuc3RvcCgpOyB0aGlzLnN3dGljaEl0ZW1Tb3VuZC5zdG9wKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdG9wQWxsU291bmQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLnNob3dJdGVtU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMud29hQW5pbWVTb3VuZC5zdG9wKCk7IHRoaXMub3BlbkJvb2tTb3VuZC5zdG9wKCk7IHRoaXMucGlja0l0ZW1Tb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy53YW9HYW1lU291bmQuc3RvcCgpOyB0aGlzLnN3dGljaEl0ZW1Tb3VuZC5zdG9wKCk7XHJcbiAgICB9XHJcbn1cclxuIl19