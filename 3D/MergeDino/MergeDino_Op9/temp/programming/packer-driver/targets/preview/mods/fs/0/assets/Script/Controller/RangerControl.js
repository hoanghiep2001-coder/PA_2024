System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, ERigidBodyType, BoxCollider, RigidBody, math, SkeletalAnimation, _dec, _class, _temp, _crd, ccclass, property, RangerControl;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ERigidBodyType = _cc.ERigidBodyType;
      BoxCollider = _cc.BoxCollider;
      RigidBody = _cc.RigidBody;
      math = _cc.math;
      SkeletalAnimation = _cc.SkeletalAnimation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "51538WFcw1P6baoyBNVdquG", "RangerControl", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RangerControl", RangerControl = (_dec = ccclass('RangerControl'), _dec(_class = (_temp = class RangerControl extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "isRun", false);

          _defineProperty(this, "rigidbody", void 0);

          _defineProperty(this, "collider", void 0);
        }

        start() {
          this.getComponent(SkeletalAnimation).play("Idle_1");
          this.rigidbody = this.node.getComponent(RigidBody);
          this.collider = this.node.getComponent(BoxCollider);
          this.collider.on("onCollisionEnter", e => {
            if (e.otherCollider.node.name === "Robot_melee02_base" && e.selfCollider.node.name !== "Robot_melee07_9") {
              this.rigidbody.type = ERigidBodyType.STATIC;
              this.isRun = false;
              this.node.getComponent(SkeletalAnimation).play("die");
              this.scheduleOnce(() => {
                this.node.active = false;
                this.node.getComponent(SkeletalAnimation).stop();
              }, 1);
            }

            if (e.selfCollider.node.name === "Robot_melee07_9") {
              this.rigidbody.type = ERigidBodyType.STATIC;
              this.isRun = false;
              this.node.getComponent(SkeletalAnimation).play("die");
              this.scheduleOnce(() => {
                this.node.active = false;
                this.node.getComponent(SkeletalAnimation).stop();
              }, 1);
            }
          });
        }

        Run() {
          this.rigidbody.type = ERigidBodyType.DYNAMIC;

          switch (this.node.name) {
            case "Robot_melee07_9":
              this.rigidbody.setLinearVelocity(new math.Vec3(-1, 0, -7));
              break;

            case "Robot_melee07_10":
              this.rigidbody.setLinearVelocity(new math.Vec3(-3, 0, -7));
              break;

            case "Robot_melee07_11":
              this.rigidbody.setLinearVelocity(new math.Vec3(-3, 0, -6));
              break;

            case "Robot_melee07_12":
              this.rigidbody.setLinearVelocity(new math.Vec3(-2, 0, -7));
              break;

            case "Robot_melee07_13":
              this.rigidbody.setLinearVelocity(new math.Vec3(-3, 0, -7));
              break;

            default:
              break;
          }
        }

        update(dt) {
          if (this.isRun) this.Run();
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=RangerControl.js.map