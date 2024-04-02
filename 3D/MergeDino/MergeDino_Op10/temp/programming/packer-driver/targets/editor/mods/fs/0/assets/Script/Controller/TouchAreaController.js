System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Vec3, Animation, Constants, NodesController, GameController, AudioManager, IronSource, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, TouchAreaController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Data/Constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodesController(extras) {
    _reporterNs.report("NodesController", "./NodesController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../Plugin/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIronSource(extras) {
    _reporterNs.report("IronSource", "../Plugin/IronSource", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }, function (_unresolved_3) {
      NodesController = _unresolved_3.NodesController;
    }, function (_unresolved_4) {
      GameController = _unresolved_4.GameController;
    }, function (_unresolved_5) {
      AudioManager = _unresolved_5.AudioManager;
    }, function (_unresolved_6) {
      IronSource = _unresolved_6.IronSource;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6c960lg0NRGuppywOJ0wWQL", "TouchAreaController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TouchAreaController", TouchAreaController = (_dec = ccclass("TouchAreaController"), _dec2 = property(_crd && IronSource === void 0 ? (_reportPossibleCrUseOfIronSource({
        error: Error()
      }), IronSource) : IronSource), _dec3 = property(_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
        error: Error()
      }), AudioManager) : AudioManager), _dec4 = property(_crd && NodesController === void 0 ? (_reportPossibleCrUseOfNodesController({
        error: Error()
      }), NodesController) : NodesController), _dec5 = property(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
        error: Error()
      }), GameController) : GameController), _dec(_class = (_class2 = (_temp = class TouchAreaController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "IronSource", _descriptor, this);

          _initializerDefineProperty(this, "AudioManager", _descriptor2, this);

          _initializerDefineProperty(this, "NodesController", _descriptor3, this);

          _initializerDefineProperty(this, "GameController", _descriptor4, this);

          _defineProperty(this, "pos", null);

          _defineProperty(this, "isDoneMergeStep1", false);

          _defineProperty(this, "isDoneMergeStep2", false);
        }

        start() {
          this.registerEvent();
        }

        registerEvent() {
          this.NodesController.hideMask.on(Node.EventType.TOUCH_START, this.touchStart, this);
          this.NodesController.hideMask.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
          this.NodesController.hideMask.on(Node.EventType.TOUCH_END, this.touchEnd, this);
          this.NodesController.hideMask.on(Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
          this.NodesController.BtnClaim.on(Node.EventType.TOUCH_START, this.touchStart, this);
        }

        touchStart() {
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isClickStart && this.GameController.installHandle();

          if (!(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isCanTouch || (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).ironSource.isEndGame) {
            return;
          }

          this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SoundTrack.Dino_ChooseSound);
          this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).SoundTrack.Dino_MergeSound); // this.NodesController.hideMask.active = false;

          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isTouching = true;
          this.NodesController.Text_Tap.active = false;
          !(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isClickStart && this.NodesController.RewardContainer.getComponent(Animation).play("Reward_Anim");
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isClickStart = true; // this.IronSource.handleIronSourcePlaySound();
        }

        touchMove(event, stick) {
          if (!(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isCanTouch) {
            return;
          }
        }

        touchEnd() {}

        convertToLocalLocation(value) {
          const localX = value.x - 160 - this.node.getPosition().x;
          const localY = value.y - 240 - this.node.getPosition().y;
          const result = new Vec3(localX, localY, 0);
          return result;
        } // protected update(dt: number): void {
        //       this.IronSource.handleMuteSoundIronSource();
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "IronSource", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "AudioManager", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "NodesController", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "GameController", [_dec5], {
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
//# sourceMappingURL=TouchAreaController.js.map