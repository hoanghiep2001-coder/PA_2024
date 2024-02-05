"use strict";
cc._RF.push(module, 'd9305oVF5hPCLfUSaAOK4yn', 'MainUI');
// Script/Controller/MainUI.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    graphics: cc.Prefab
  },
  onLoad: function onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_END, this.touch_end, this);
  },
  start: function start() {
    this.createGraphics();
  },
  touch_start: function touch_start(event) {},
  touch_move: function touch_move(event) {},
  touch_end: function touch_end(event) {
    this.createGraphics();
  },
  createGraphics: function createGraphics() {
    var graphics_node = cc.instantiate(this.graphics);
    graphics_node.x = 0;
    this.node.addChild(graphics_node);
  },
  update: function update(dt) {}
});

cc._RF.pop();