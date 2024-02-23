
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluR2FtZVxcQ2xhc3NIZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFrQkEsQ0FBQztJQWhCZSw4QkFBZSxHQUE3QixVQUE4QixHQUFHLEVBQUUsR0FBRztRQUNwQyxPQUFPLEdBQUcsSUFBSSxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUVhLGdDQUFpQixHQUEvQixVQUFnQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUs7UUFDN0MsT0FBTyxHQUFHLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRWEsMkJBQVksR0FBMUIsVUFBMkIsR0FBRyxFQUFFLEdBQUc7UUFDakMsT0FBTyxHQUFHLEtBQUssR0FBRyxDQUFDO0lBQ3JCLENBQUM7SUFFYSw2QkFBYyxHQUE1QixVQUE2QixHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUs7UUFDMUMsSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFJLEdBQUcsS0FBSyxLQUFLO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDOUMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBO0FBbEJZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENoZWNrZXJCb29sZWFuIHtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBjaGVja1R3b0Jvb2xlYW4ob25lLCB0d28pIHtcclxuICAgIHJldHVybiBvbmUgJiYgdHdvO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjaGVja1RyaGVlQm9vbGVhbihvbmUsIHR3bywgdHJoZWUpIHtcclxuICAgIHJldHVybiBvbmUgJiYgdHdvICYmIHRyaGVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBFcXVhbHNUd29PYmoob25lLCB0d28pIHtcclxuICAgIHJldHVybiBvbmUgPT09IHR3bztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgRXF1YWxzVHJoZWVPYmoob25lLCB0d28sIHRyaGVlKSB7XHJcbiAgICBpZiAob25lID09PSB0d28gJiYgdHdvID09PSB0cmhlZSkgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59Il19