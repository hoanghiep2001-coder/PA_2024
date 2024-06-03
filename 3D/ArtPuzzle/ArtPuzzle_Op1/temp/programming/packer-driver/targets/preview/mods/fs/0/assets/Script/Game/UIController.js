System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Camera, Component, Material, Node, ScrollView, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, _crd, ccclass, property, UIController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Camera = _cc.Camera;
      Component = _cc.Component;
      Material = _cc.Material;
      Node = _cc.Node;
      ScrollView = _cc.ScrollView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bbbeewRqIxDUJyFgFUdCrAU", "UIController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIController", UIController = (_dec = ccclass('UIController'), _dec2 = property(Camera), _dec3 = property(Camera), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property([Material]), _dec9 = property([Material]), _dec(_class = (_class2 = (_temp = class UIController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Camera3D", _descriptor, this);

          _initializerDefineProperty(this, "Camera2D", _descriptor2, this);

          _initializerDefineProperty(this, "Canvas", _descriptor3, this);

          _initializerDefineProperty(this, "Container3D", _descriptor4, this);

          _initializerDefineProperty(this, "HideMask", _descriptor5, this);

          _initializerDefineProperty(this, "UI", _descriptor6, this);

          _defineProperty(this, "Warpper", null);

          _defineProperty(this, "Tutorial", null);

          _defineProperty(this, "Base_Wrapper", null);

          _defineProperty(this, "Progress", null);

          _defineProperty(this, "ScrollView", null);

          _defineProperty(this, "ImpactArea", null);

          _defineProperty(this, "Items", []);

          _defineProperty(this, "Hints", []);

          _initializerDefineProperty(this, "Materials", _descriptor7, this);

          _initializerDefineProperty(this, "HintMaterials", _descriptor8, this);
        }

        start() {
          this.Tutorial = this.UI.getChildByName("Tutorial");
          this.Warpper = this.UI.getChildByName("Wrapper");
          this.Base_Wrapper = this.UI.getChildByName("Base_Wrapper");
          this.Progress = this.Warpper.getChildByName("Progress").getChildByName("img_progress");
          this.ScrollView = this.UI.getChildByName("ScrollView").getComponent(ScrollView);
          this.Hints = this.Warpper.getChildByName("Hint").children;
          this.Items = this.ScrollView.node.getChildByName("View").getChildByName("content").children;
          this.ImpactArea = this.UI.getChildByName("ImpactArea");
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Camera3D", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Camera2D", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Canvas", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Container3D", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "HideMask", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "UI", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Materials", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "HintMaterials", [_dec9], {
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
//# sourceMappingURL=UIController.js.map