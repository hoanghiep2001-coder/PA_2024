System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, UITransform, Vec3, tween, Constants, Utils, _crd, checkMergeFirstStep, mergeDinoStep1, TouchArea, GamePlay;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Data/Constant", _context.meta, extras);
  }

  _export("Utils", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3b82aot4D1GfItUeLUV/DVb", "Utils", undefined);

      checkMergeFirstStep = () => {
        for (let i = 0; i < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
          error: Error()
        }), Constants) : Constants).points_1.length; i++) {
          let currentNode = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).points_1[i];
          let nodeBdx = currentNode.getComponent(UITransform).getBoundingBox();
          let pointBdx = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).point.getComponent(UITransform).getBoundingBox();

          if (nodeBdx.intersects(pointBdx)) {
            if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isMergeStep1States[i]) {
              break;
            }

            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isMergeStep1States[i] = true;
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).dino_lines[i].active = true;

            if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isMergeStep1States.every(state => state === true)) {
              (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).isDoneMergeStep1 = true;
            }

            break;
          }
        }
      };

      mergeDinoStep1 = dino => {
        tween(dino).to(0.35, {
          position: new Vec3(-1.1, -15.535, 9.208),
          scale: new Vec3(0, 0, 0)
        }).call(() => {
          dino.active = false;
        }).start();
      };

      TouchArea = {
        checkMergeFirstStep: checkMergeFirstStep
      };
      GamePlay = {
        mergeDinoStep1: mergeDinoStep1
      };

      _export("Utils", Utils = class Utils {});

      _defineProperty(Utils, "TouchArea", TouchArea);

      _defineProperty(Utils, "GamePlay", GamePlay);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Utils.js.map