System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, screen, Widget, Constants, NodesController, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, Responsive;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Data/Constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodesController(extras) {
    _reporterNs.report("NodesController", "../Controller/NodesController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      screen = _cc.screen;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }, function (_unresolved_3) {
      NodesController = _unresolved_3.NodesController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "96cd1/50FZEdpbn/o5xig83", "Responsive", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Responsive", Responsive = (_dec = ccclass('Responsive'), _dec2 = property(_crd && NodesController === void 0 ? (_reportPossibleCrUseOfNodesController({
        error: Error()
      }), NodesController) : NodesController), _dec(_class = (_class2 = (_temp = class Responsive extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "NodesController", _descriptor, this);

          _defineProperty(this, "device", "");

          _defineProperty(this, "isRotate", false);

          _defineProperty(this, "HORIZONTAL_IPX", "horizontal_IPX");

          _defineProperty(this, "HORIZONTAL_TABLET", "horizontal_Tablet");

          _defineProperty(this, "VERTICAL_IPX", "vertical_IPX");

          _defineProperty(this, "VERTICAL_MOBILE", "vertical_Mobile");
        }

        onLoad() {}

        start() {}

        handleRotate() {
          if (screen.windowSize.width > screen.windowSize.height) {
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isRotate = true;
            this.setHorizontal();
          } else {
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isRotate = false;
            this.setVertical();
          }
        }

        setHorizontal() {
          if (screen.windowSize.height / screen.windowSize.width < 0.65) {
            // Iphone 6 / 6 plus / 7 / 7 Plus / X
            this.setHorizontalForIpX();
          } else {
            this.setHorizontalForTablet();
          }
        }

        setHorizontalForIpX() {
          if (this.HORIZONTAL_IPX === this.device) {
            return;
          }

          this.device = this.HORIZONTAL_IPX;
          this.NodesController.Camera.fov = 50; // if(cc.screen.windowSize.height / cc.screen.windowSize.width >= 0.6) {
          //     // Applovin horizontal
          //     return;
          // }    

          this.NodesController.Btn_AddDino.setPosition(0, -180, 0);
          this.NodesController.Btn_AddDino.setScale(0.22, 0.22, 0.22);
          this.NodesController.Label_Money.node.parent.setPosition(0, 200, 0);
          this.NodesController.Label_Money.node.parent.setScale(0.22, 0.22, 0.22);
          this.NodesController.Btn_Install.setScale(0.5, 0.5, 0.5);
          this.NodesController.Btn_Install.getComponent(Widget).isAlignHorizontalCenter = false;
          this.NodesController.Btn_Install.getComponent(Widget).isAlignRight = true;
          this.NodesController.Btn_Install.getComponent(Widget).isAbsoluteRight = true;

          if (screen.windowSize.height / screen.windowSize.width > 0.55) {
            // Ip 6 / 6Plus / 7 / 7 Plus
            this.NodesController.Btn_Install.getComponent(Widget).bottom = 0;
            this.NodesController.Btn_Install.getComponent(Widget).right = -270;

            if (screen.windowSize.height / screen.windowSize.width >= 0.6) {
              // applovin
              this.NodesController.Btn_Install.getComponent(Widget).bottom = 0;
              this.NodesController.Btn_Install.getComponent(Widget).right = -240;
            }

            console.log(1);
          } else {
            // IpX
            this.NodesController.Btn_Install.getComponent(Widget).bottom = 0;
            this.NodesController.Btn_Install.getComponent(Widget).right = -355;
            console.log(2);
          }
        }

        setHorizontalForTablet() {
          if (this.HORIZONTAL_TABLET === this.device) {
            return;
          }

          this.device = this.HORIZONTAL_TABLET;
          this.NodesController.Camera.fov = 60;
          this.NodesController.Btn_AddDino.setPosition(0, -180, 0);
          this.NodesController.Btn_AddDino.setScale(0.22, 0.22, 0.22);
          this.NodesController.Label_Money.node.parent.setPosition(0, 200, 0);
          this.NodesController.Label_Money.node.parent.setScale(0.22, 0.22, 0.22);
          this.NodesController.Btn_Install.setScale(0.5, 0.5, 0.5);
          this.NodesController.Btn_Install.getComponent(Widget).isAlignHorizontalCenter = false;
          this.NodesController.Btn_Install.getComponent(Widget).isAlignRight = true;
          this.NodesController.Btn_Install.getComponent(Widget).isAbsoluteRight = true;
          this.NodesController.Btn_Install.getComponent(Widget).right = -160;
          this.NodesController.Btn_Install.getComponent(Widget).bottom = 0;
          console.log(3); // horizontal google
          // if(cc.screen.windowSize.width / cc.screen.windowSize.height <= 1.2 && cc.screen.windowSize.width / cc.screen.windowSize.height >= 1.2) {
          //     return;
          // }
        }

        setVertical() {
          if (screen.windowSize.width / screen.windowSize.height < 0.5) {
            this.setIphoneX();
          } else {
            this.setMobile();
          }
        }

        setIphoneX() {
          if (this.VERTICAL_IPX === this.device) {
            return;
          }

          this.device = this.VERTICAL_IPX;
          this.NodesController.Camera.fov = 60;
          this.NodesController.Btn_AddDino.setPosition(0, -210, 0);
          this.NodesController.Btn_AddDino.setScale(0.22, 0.22, 0.22);
          this.NodesController.Label_Money.node.parent.setPosition(0, 250, 0);
          this.NodesController.Label_Money.node.parent.setScale(0.22, 0.22, 0.22);
          this.NodesController.Btn_Install.setScale(0.5, 0.5, 0.5);
          this.NodesController.Btn_Install.getComponent(Widget).isAlignHorizontalCenter = true;
          this.NodesController.Btn_Install.getComponent(Widget).isAlignRight = false;
          this.NodesController.Btn_Install.getComponent(Widget).bottom = -100;
          console.log(4);
        }

        setMobile() {
          if (this.VERTICAL_MOBILE === this.device) {
            return;
          }

          this.device = this.VERTICAL_MOBILE;
          this.NodesController.Camera.fov = 60;
          this.NodesController.Btn_Install.getComponent(Widget).isAlignHorizontalCenter = true;
          this.NodesController.Btn_Install.getComponent(Widget).isAlignRight = false;

          if (screen.windowSize.width / screen.windowSize.height < 0.7) {
            if (screen.windowSize.width / screen.windowSize.height >= 0.6 && screen.windowSize.width / screen.windowSize.height < 0.62) {
              // mobile mode applovin
              this.NodesController.Btn_AddDino.setPosition(0, -170, 0);
              this.NodesController.Btn_AddDino.setScale(0.2, 0.2, 0.2);
              this.NodesController.Label_Money.node.parent.setPosition(0, 220, 0);
              this.NodesController.Label_Money.node.parent.setScale(0.22, 0.22, 0.22);
              this.NodesController.Btn_Install.setScale(0.4, 0.4, 0.4);
              this.NodesController.Btn_Install.getComponent(Widget).bottom = -25;
              return;
            } // Iphone 6 / 6 plus / 7 / 7 Plus


            this.NodesController.Btn_AddDino.setPosition(0, -190, 0);
            this.NodesController.Btn_AddDino.setScale(0.2, 0.2, 0.2);
            this.NodesController.Label_Money.node.parent.setPosition(0, 220, 0);
            this.NodesController.Label_Money.node.parent.setScale(0.22, 0.22, 0.22);
            this.NodesController.Btn_Install.setScale(0.4, 0.4, 0.4);
            this.NodesController.Btn_Install.getComponent(Widget).isAbsoluteRight = false; // this.NodesController.Btn_Install.getComponent(Widget).right = -0;

            this.NodesController.Btn_Install.getComponent(Widget).bottom = -45;
            console.log(5);
          } else {
            // Ipad
            this.NodesController.Btn_AddDino.setPosition(0, -180, 0);
            this.NodesController.Btn_AddDino.setScale(0.2, 0.2, 0.2);
            this.NodesController.Label_Money.node.parent.setPosition(0, 200, 0);
            this.NodesController.Label_Money.node.parent.setScale(0.22, 0.22, 0.22);
            this.NodesController.Btn_Install.setScale(0.35, 0.35, 0.35);
            this.NodesController.Btn_Install.getComponent(Widget).right = -20;
            this.NodesController.Btn_Install.getComponent(Widget).bottom = 0;
            console.log(6);
          }
        }

        update(dt) {
          this.handleRotate();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "NodesController", [_dec2], {
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
//# sourceMappingURL=Responsive.js.map