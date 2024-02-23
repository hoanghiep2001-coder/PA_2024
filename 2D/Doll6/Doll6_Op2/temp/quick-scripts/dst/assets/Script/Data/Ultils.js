
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