System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, BoxCollider, Component, ERigidBodyType, math, Node, RigidBody, SkeletalAnimation, Vec3, Constants, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, CharacterControl;

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
      BoxCollider = _cc.BoxCollider;
      Component = _cc.Component;
      ERigidBodyType = _cc.ERigidBodyType;
      math = _cc.math;
      Node = _cc.Node;
      RigidBody = _cc.RigidBody;
      SkeletalAnimation = _cc.SkeletalAnimation;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7c0ab6OlgNN8Ju8uLqdS5KA", "CharacterControl", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CharacterControl", CharacterControl = (_dec = ccclass('CharacterControl'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = class CharacterControl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "level", _descriptor, this);

          _defineProperty(this, "isRun", false);

          _defineProperty(this, "isFight", false);

          _defineProperty(this, "isFight_2", false);

          _defineProperty(this, "rigidbody", void 0);

          _defineProperty(this, "collider", void 0);

          _defineProperty(this, "isCollide", false);
        }

        onLoad() {
          this.level.active = false;
          this.node.active = false;
        }

        start() {
          this.getComponent(SkeletalAnimation).play("Idle_2");
          this.node.setScale(new Vec3(0, 0, 0));
          this.rigidbody = this.node.getComponent(RigidBody);
          this.collider = this.node.getComponent(BoxCollider);
          this.collider.on("onCollisionEnter", e => {
            if (e.otherCollider.node.name === "Rex") {
              if (this.isCollide) {
                return;
              }

              this.isCollide = true;
              this.getComponent(SkeletalAnimation).play("Atk_1");
              (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).isCharacterCollideBoos = true;
              this.node.name === "Rap" ? this.isFight = true : this.isFight_2 = true;
              this.scheduleOnce(() => {
                (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).isFailStep1 = true;
                this.die();
              }, 2);
            }
          });
        }

        die() {
          this.getComponent(SkeletalAnimation).play("Die");
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isDoneStep1 = true;
        }

        Run() {
          this.rigidbody.type = ERigidBodyType.DYNAMIC;
          this.rigidbody.setLinearVelocity(new math.Vec3(2, 0, -8));

          if (!this.isRun) {
            this.isRun = true;
            this.getComponent(SkeletalAnimation).play("Run");
          }
        }

        runStep2() {
          this.rigidbody.type = ERigidBodyType.DYNAMIC;
          this.rigidbody.setLinearVelocity(new math.Vec3(-3, 0, -8));

          if (!this.isRun) {
            this.isRun = true;
            this.getComponent(SkeletalAnimation).play("Run");
          }
        }

        update(dt) {
          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isFightStep1 && !this.isFight && this.node.name === "Rap") {
            this.Run();
          }

          if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isFightStep2 && !this.isFight_2) {
            this.runStep2();
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "level", [_dec2], {
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
//# sourceMappingURL=CharacterControl.js.map