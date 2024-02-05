
cc.Class({
    extends: cc.Component,


    properties: {
        graphics: cc.Prefab,
    },


    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.touch_end, this);
    },


    start() {
        this.createGraphics();
    },
    touch_start: function (event) {
    },
    touch_move: function (event) {
    },
    touch_end: function (event) {

       
        this.createGraphics();
    },
    createGraphics() {
        var graphics_node = cc.instantiate(this.graphics);
        graphics_node.x = 0;
        this.node.addChild(graphics_node);
    },
    update(dt) { },
});
