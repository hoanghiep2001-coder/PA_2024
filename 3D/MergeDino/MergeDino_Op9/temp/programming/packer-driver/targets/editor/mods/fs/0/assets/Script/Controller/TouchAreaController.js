System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Vec3, Constants, Utils, NodesController, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, TouchAreaController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Data/Constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../Plugin/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodesController(extras) {
    _reporterNs.report("NodesController", "./NodesController", _context.meta, extras);
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
    }, function (_unresolved_3) {
      Utils = _unresolved_3.Utils;
    }, function (_unresolved_4) {
      NodesController = _unresolved_4.NodesController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6c960lg0NRGuppywOJ0wWQL", "TouchAreaController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TouchAreaController", TouchAreaController = (_dec = ccclass("TouchAreaController"), _dec2 = property(_crd && NodesController === void 0 ? (_reportPossibleCrUseOfNodesController({
        error: Error()
      }), NodesController) : NodesController), _dec(_class = (_class2 = (_temp = class TouchAreaController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "NodesController", _descriptor, this);

          _defineProperty(this, "pos", null);
        }

        start() {
          this.registerEvent();
        }

        registerEvent() {
          this.NodesController.hideMask.on(Node.EventType.TOUCH_START, this.touchStart, this);
          this.NodesController.hideMask.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
          this.NodesController.hideMask.on(Node.EventType.TOUCH_END, this.touchEnd, this);
          this.NodesController.hideMask.on(Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        }

        touchStart() {
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isTouching = true;
          this.NodesController.hint_1.active = false;
        }

        touchMove(event, stick) {
          const screenPos = event.getUILocation();
          this.pos = this.convertToLocalLocation(screenPos);
          this.NodesController.point.setPosition(this.pos);
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).TouchArea.checkMergeFirstStep();
        }

        touchEnd() {
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isTouching = false;

          if (!(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isDoneMergeStep1) {
            this.NodesController.init();
          }
        }

        convertToLocalLocation(value) {
          const localX = value.x - 160 - this.node.getPosition().x;
          const localY = value.y - 240 - this.node.getPosition().y;
          const result = new Vec3(localX, localY, 0);
          return result;
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
//# sourceMappingURL=TouchAreaController.js.map