System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Animation, Component, Vec3, tween, CharacterControl, GameController, AudioManager, Constants, NodesController, Utils, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, GamePlay;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCharacterControl(extras) {
    _reporterNs.report("CharacterControl", "./CharacterControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../Plugin/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Data/Constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodesController(extras) {
    _reporterNs.report("NodesController", "./NodesController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../Plugin/Utils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      CharacterControl = _unresolved_2.CharacterControl;
    }, function (_unresolved_3) {
      GameController = _unresolved_3.GameController;
    }, function (_unresolved_4) {
      AudioManager = _unresolved_4.AudioManager;
    }, function (_unresolved_5) {
      Constants = _unresolved_5.Constants;
    }, function (_unresolved_6) {
      NodesController = _unresolved_6.NodesController;
    }, function (_unresolved_7) {
      Utils = _unresolved_7.Utils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d6ba26BX9VFWrvN11awPr8L", "GamePlay", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GamePlay", GamePlay = (_dec = ccclass('GamePlay'), _dec2 = property(_crd && NodesController === void 0 ? (_reportPossibleCrUseOfNodesController({
        error: Error()
      }), NodesController) : NodesController), _dec3 = property(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
        error: Error()
      }), GameController) : GameController), _dec4 = property(_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
        error: Error()
      }), AudioManager) : AudioManager), _dec(_class = (_class2 = (_temp = class GamePlay extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "NodesController", _descriptor, this);

          _initializerDefineProperty(this, "GameController", _descriptor2, this);

          _initializerDefineProperty(this, "AudioManager", _descriptor3, this);

          _defineProperty(this, "isMergeStep1Flag", false);
        }

        onLoad() {}

        initGame() {}

        start() {
          this.handleGamePlay();
          this.registerEvent();
        }

        handleGamePlay() {}

        registerEvent() {}

        handleMergeStep1() {
          this.isMergeStep1Flag = true;
          this.NodesController.Camera.getComponent(Animation).play();
          this.NodesController.dinoLevels.forEach(level => level.active = false);
          this.scheduleOnce(() => {
            this.NodesController.FX_Merge.play();
          }, 1);
          this.scheduleOnce(() => {
            this.NodesController.dinosStep1.forEach(dino => (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).GamePlay.mergeDinoStep1(dino));
          }, 2);
          this.scheduleOnce(() => {
            this.NodesController.MainCharacter_1.active = true;
            this.NodesController.MainCharacter_1.getComponent(_crd && CharacterControl === void 0 ? (_reportPossibleCrUseOfCharacterControl({
              error: Error()
            }), CharacterControl) : CharacterControl).level.active = true;
            tween(this.NodesController.MainCharacter_1).to(0.5, {
              scale: new Vec3(0.004, 0.004, 0.004)
            }).start();
          }, 2.5);
          this.scheduleOnce(() => {
            this.NodesController.dinoLevels.forEach(level => level.active = true);
          }, 4);
        }

        update(dt) {
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isDoneMergeStep1 && !this.isMergeStep1Flag && this.handleMergeStep1();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "NodesController", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "GameController", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "AudioManager", [_dec4], {
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
//# sourceMappingURL=GamePlay.js.map