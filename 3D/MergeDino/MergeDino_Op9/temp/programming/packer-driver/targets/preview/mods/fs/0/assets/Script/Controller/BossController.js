System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, SkeletalAnimation, _dec, _class, _crd, ccclass, property, BossController;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      SkeletalAnimation = _cc.SkeletalAnimation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c38f329EN1D9YpLdfC+d21z", "BossController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BossController", BossController = (_dec = ccclass('BossController'), _dec(_class = class BossController extends Component {
        start() {
          this.getComponent(SkeletalAnimation).play("Idle_2");
        }

        update(dt) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BossController.js.map