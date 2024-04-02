System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Quat, tween, Vec3, _dec, _class, _crd, ccclass, property, BallController;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Quat = _cc.Quat;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "49dd02z2uFJSbOSCR1uMX+l", "BallController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BallController", BallController = (_dec = ccclass('BallController'), _dec(_class = class BallController extends Component {
        start() {
          tween(this.node).by(3.5, {
            position: new Vec3(6, 0, 0)
          }).to(0, {
            rotation: Quat.fromEuler(new Quat(), 0, -90, 0)
          }).by(3.5, {
            position: new Vec3(-6, 0, 0)
          }).to(0, {
            rotation: Quat.fromEuler(new Quat(), 0, 90, 0)
          }).union().repeatForever().start();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BallController.js.map