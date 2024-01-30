System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Camera, Component, Node, ParticleSystem, Constants, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _temp, _crd, ccclass, property, NodesController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Data/Constant", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Camera = _cc.Camera;
      Component = _cc.Component;
      Node = _cc.Node;
      ParticleSystem = _cc.ParticleSystem;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d10beQtB81Cg6A6SV/C935H", "NodesController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NodesController", NodesController = (_dec = ccclass('NodesController'), _dec2 = property(Camera), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(ParticleSystem), _dec7 = property([Node]), _dec8 = property([Node]), _dec9 = property([Node]), _dec10 = property([Node]), _dec11 = property(Node), _dec12 = property(Node), _dec(_class = (_class2 = (_temp = class NodesController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "Camera", _descriptor, this);

          _initializerDefineProperty(this, "hint_1", _descriptor2, this);

          _initializerDefineProperty(this, "point", _descriptor3, this);

          _initializerDefineProperty(this, "hideMask", _descriptor4, this);

          _initializerDefineProperty(this, "FX_Merge", _descriptor5, this);

          _initializerDefineProperty(this, "dinoLines", _descriptor6, this);

          _initializerDefineProperty(this, "points_1", _descriptor7, this);

          _initializerDefineProperty(this, "dinosStep1", _descriptor8, this);

          _initializerDefineProperty(this, "dinoLevels", _descriptor9, this);

          _initializerDefineProperty(this, "Boss", _descriptor10, this);

          _initializerDefineProperty(this, "MainCharacter_1", _descriptor11, this);
        }

        start() {
          this.init();
        }

        init() {
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isMergeStep1States = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isMergeStep1States.map(() => false);
          let pointsCopy = [...this.points_1];
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).points_1 = pointsCopy;
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).point = this.point;
          this.dinoLines.forEach(line => line.active = false);
          let copyDinoLines = [...this.dinoLines];
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).dino_lines = copyDinoLines;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Camera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "hint_1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "point", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "hideMask", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "FX_Merge", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "dinoLines", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "points_1", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "dinosStep1", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "dinoLevels", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Boss", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "MainCharacter_1", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=NodesController.js.map