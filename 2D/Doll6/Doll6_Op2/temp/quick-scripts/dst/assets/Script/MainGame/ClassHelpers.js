
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