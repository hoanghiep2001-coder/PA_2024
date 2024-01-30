System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Vec3, Constants, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, TouchAreaController;

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
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6c960lg0NRGuppywOJ0wWQL", "TouchAreaController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TouchAreaController", TouchAreaController = (_dec = ccclass("TouchAreaController"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property([Node]), _dec(_class = (_class2 = (_temp = class TouchAreaController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "point", _descriptor, this);

          _initializerDefineProperty(this, "hideMask", _descriptor2, this);

          _initializerDefineProperty(this, "points_1", _descriptor3, this);

          _defineProperty(this, "pos", null);
        }

        start() {
          this.registerEvent();
        }

        registerEvent() {
          this.hideMask.on(Node.EventType.TOUCH_START, this.touchMove, this);
          this.hideMask.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
          this.hideMask.on(Node.EventType.TOUCH_END, this.touchEnd, this);
          this.hideMask.on(Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        }

        touchMove(event, stick) {
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isTouching = true;
          var screenPos = event.getUILocation();
          this.pos = this.convertToLocalLocation(screenPos);
          this.point.setPosition(this.pos);
        }

        touchEnd() {
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isTouching = false;
        }

        convertToLocalLocation(value) {
          var localX = value.x - 160 - this.node.getPosition().x;
          var localY = value.y - 240 - this.node.getPosition().y;
          var result = new Vec3(localX, localY, 0);
          return result;
        }

        update(dt) {}

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "point", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "hideMask", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "points_1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TouchAreaController.js.map