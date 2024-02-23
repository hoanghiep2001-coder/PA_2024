
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
// const checkCollideBubblePoints = (bdx: cc.Rect): void => {
//     for (let i = 0; i < Constants.cleanHair_Points.length; i++) {
//         let currentNode = Constants.cleanHair_Points[i];
//         if (currentNode.getBoundingBox().intersects(bdx)) {
//             Constants.isTouchCleanHair = true;
//             for (let j = 0; j < Constants.cleanHair_PointsStatus.length; j++) {
//                 if (!Constants.cleanHair_PointsStatus[j]) {
//                     Constants.cleanHair_PointsStatus[j] = true;
//                     Constants.cleanHair_Points.splice(i, 1);
//                     Constants.spine_Bubbles[i].setAnimation(0, "action03_only_bubble", false);
//                     Constants.spine_Bubbles.splice(i, 1);
//                     if (Constants.cleanHair_PointsStatus.every(status => status === true)) {
//                         Constants.isDoneCleanHair = true;
//                     }
//                     break;
//                 }
//             }
//             break;
//         }
//     }
// }
// const checkCollideMaggot = (bdx: cc.Rect, maggot: cc.Rect): void => {
//     if(bdx.intersects(maggot)) {
//         Constants.isTouchMaggot = true;
//     }
// }
var TouchArea = {
// checkCollideBubblePoints: checkCollideBubblePoints,
// checkCollideMaggot: checkCollideMaggot
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxVbHRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUMsNkRBQTZEO0FBQzdELG9FQUFvRTtBQUNwRSwyREFBMkQ7QUFDM0QsOERBQThEO0FBQzlELGlEQUFpRDtBQUNqRCxrRkFBa0Y7QUFDbEYsOERBQThEO0FBQzlELGtFQUFrRTtBQUNsRSwrREFBK0Q7QUFFL0QsaUdBQWlHO0FBQ2pHLDREQUE0RDtBQUU1RCwrRkFBK0Y7QUFDL0YsNERBQTREO0FBQzVELHdCQUF3QjtBQUN4Qiw2QkFBNkI7QUFDN0Isb0JBQW9CO0FBQ3BCLGdCQUFnQjtBQUNoQixxQkFBcUI7QUFDckIsWUFBWTtBQUNaLFFBQVE7QUFDUixJQUFJO0FBRUosd0VBQXdFO0FBQ3hFLG1DQUFtQztBQUNuQywwQ0FBMEM7QUFDMUMsUUFBUTtBQUNSLElBQUk7QUFFSixJQUFNLFNBQVMsR0FBRztBQUNkLHNEQUFzRDtBQUN0RCx5Q0FBeUM7Q0FDNUMsQ0FBQTtBQUVEO0lBQUE7SUFJQSxDQUFDO0lBRlMsZ0JBQVMsR0FBcUIsU0FBUyxDQUFDO0lBRWxELGFBQUM7Q0FKRCxBQUlDLElBQUE7QUFKWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG4vLyBjb25zdCBjaGVja0NvbGxpZGVCdWJibGVQb2ludHMgPSAoYmR4OiBjYy5SZWN0KTogdm9pZCA9PiB7XHJcbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENvbnN0YW50cy5jbGVhbkhhaXJfUG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gQ29uc3RhbnRzLmNsZWFuSGFpcl9Qb2ludHNbaV07XHJcbi8vICAgICAgICAgaWYgKGN1cnJlbnROb2RlLmdldEJvdW5kaW5nQm94KCkuaW50ZXJzZWN0cyhiZHgpKSB7XHJcbi8vICAgICAgICAgICAgIENvbnN0YW50cy5pc1RvdWNoQ2xlYW5IYWlyID0gdHJ1ZTtcclxuLy8gICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBDb25zdGFudHMuY2xlYW5IYWlyX1BvaW50c1N0YXR1cy5sZW5ndGg7IGorKykge1xyXG4vLyAgICAgICAgICAgICAgICAgaWYgKCFDb25zdGFudHMuY2xlYW5IYWlyX1BvaW50c1N0YXR1c1tqXSkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIENvbnN0YW50cy5jbGVhbkhhaXJfUG9pbnRzU3RhdHVzW2pdID0gdHJ1ZTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBDb25zdGFudHMuY2xlYW5IYWlyX1BvaW50cy5zcGxpY2UoaSwgMSk7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgIENvbnN0YW50cy5zcGluZV9CdWJibGVzW2ldLnNldEFuaW1hdGlvbigwLCBcImFjdGlvbjAzX29ubHlfYnViYmxlXCIsIGZhbHNlKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBDb25zdGFudHMuc3BpbmVfQnViYmxlcy5zcGxpY2UoaSwgMSk7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGlmIChDb25zdGFudHMuY2xlYW5IYWlyX1BvaW50c1N0YXR1cy5ldmVyeShzdGF0dXMgPT4gc3RhdHVzID09PSB0cnVlKSkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBDb25zdGFudHMuaXNEb25lQ2xlYW5IYWlyID0gdHJ1ZTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBjaGVja0NvbGxpZGVNYWdnb3QgPSAoYmR4OiBjYy5SZWN0LCBtYWdnb3Q6IGNjLlJlY3QpOiB2b2lkID0+IHtcclxuLy8gICAgIGlmKGJkeC5pbnRlcnNlY3RzKG1hZ2dvdCkpIHtcclxuLy8gICAgICAgICBDb25zdGFudHMuaXNUb3VjaE1hZ2dvdCA9IHRydWU7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbmNvbnN0IFRvdWNoQXJlYSA9IHtcclxuICAgIC8vIGNoZWNrQ29sbGlkZUJ1YmJsZVBvaW50czogY2hlY2tDb2xsaWRlQnViYmxlUG9pbnRzLFxyXG4gICAgLy8gY2hlY2tDb2xsaWRlTWFnZ290OiBjaGVja0NvbGxpZGVNYWdnb3RcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVsdGlscyB7XHJcblxyXG4gICBzdGF0aWMgVG91Y2hBcmVhOiB0eXBlb2YgVG91Y2hBcmVhID0gVG91Y2hBcmVhO1xyXG5cclxufSJdfQ==