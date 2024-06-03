System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, AudioSource, Component, Constants, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, AudioManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Data/constants", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      AudioSource = _cc.AudioSource;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8852crIf49LULXJpY9pXiqJ", "AudioManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AudioManager", AudioManager = (_dec = ccclass('AudioManager'), _dec2 = property(AudioSource), _dec3 = property(AudioSource), _dec4 = property(AudioSource), _dec5 = property(AudioSource), _dec6 = property(AudioSource), _dec(_class = (_class2 = (_temp = class AudioManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bgSound", _descriptor, this);

          _initializerDefineProperty(this, "clickSound", _descriptor2, this);

          _initializerDefineProperty(this, "matchSound", _descriptor3, this);

          _initializerDefineProperty(this, "NextStepSound", _descriptor4, this);

          _initializerDefineProperty(this, "WrongSound", _descriptor5, this);
        }

        playSound(soundName) {
          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).ironSource.SoundState) {
            switch (soundName) {
              case "bgSound":
                this.bgSound.play();
                break;

              case "clickSound":
                this.clickSound.play();
                break;

              case "matchSound":
                this.matchSound.play();
                break;

              case "NextStepSound":
                this.NextStepSound.play();
                break;

              case "WrongSound":
                this.WrongSound.play();
                break;

              default:
                break;
            }
          }
        }

        switchVolume(soundName, volume) {
          switch (soundName) {
            case "bgSound":
              this.bgSound.volume = volume;
              break;

            case "clickSound":
              this.clickSound.volume = volume;
              break;

            case "matchSound":
              this.matchSound.volume = volume;
              break;

            case "NextStepSound":
              this.NextStepSound.volume = volume;
              break;

            case "WrongSound":
              this.WrongSound.volume = volume;
              break;

            default:
              break;
          }
        }

        pauseSound(soundName) {
          switch (soundName) {
            case "bgSound":
              this.bgSound.pause();
              break;

            case "clickSound":
              this.clickSound.pause();
              break;

            case "matchSound":
              this.matchSound.pause();
              break;

            case "NextStepSound":
              this.NextStepSound.pause();
              break;

            case "WrongSound":
              this.WrongSound.pause();
              break;

            default:
              break;
          }
        }

        stopSound(soundName) {
          switch (soundName) {
            case "bgSound":
              this.bgSound.stop();
              break;

            case "clickSound":
              this.clickSound.stop();
              break;

            case "matchSound":
              this.matchSound.stop();
              break;

            case "NextStepSound":
              this.NextStepSound.stop();
              break;

            case "WrongSound":
              this.WrongSound.stop();
              break;

            default:
              break;
          }
        }

        stopAllSound() {
          this.bgSound.stop();
          this.clickSound.stop();
          this.matchSound.stop();
          this.NextStepSound.stop();
          this.WrongSound.stop();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgSound", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "clickSound", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "matchSound", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "NextStepSound", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "WrongSound", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=AudioManager.js.map