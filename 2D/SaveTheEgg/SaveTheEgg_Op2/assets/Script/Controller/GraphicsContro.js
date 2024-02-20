import { StateForJs } from "../Data/StateForJS";
cc.Class({
    extends: cc.Component,

    properties: {
        graphics: null,
        line_point: [cc.Vec2],
    },

    onLoad() {
        this.node.width = 5000;
        this.node.height = 5000;
        this.graphics = this.getComponent(cc.Graphics);
    },

    start() {

        window.PointPos = cc.v2(-50,100);
        this.onTouch();
    },
    onTouch() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touch_start, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touch_move, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touch_end, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touch_end, this);
    },
    offTouch() {
        this.node.off(cc.Node.EventType.TOUCH_START);
        this.node.off(cc.Node.EventType.TOUCH_MOVE);
        this.node.off(cc.Node.EventType.TOUCH_END);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL);
    },
    touch_start: function (event) {
        if (!StateForJs.isCanDraw) {
            return;
        }

        let pos = this.node.convertToNodeSpaceAR(event.getLocation());
        window.isStartDraw = true;
        window.PointPos = pos;
        this.graphics.moveTo(pos.x, pos.y);
        this.line_point.push(cc.v2(pos.x, pos.y));
    },
    touch_move: function (event) {
        if (!StateForJs.isCanDraw) {
            return;
        }

        let pos = this.node.convertToNodeSpaceAR(event.getLocation());
        window.PointPos = pos;
        this.graphics.lineTo(pos.x, pos.y);
        this.line_point.push(cc.v2(pos.x, pos.y));

        if(window.isTouchWall) {
            this.graphics.strokeColor = cc.Color.RED
        } else {
            this.graphics.strokeColor = cc.Color.BLACK
        }

        this.graphics.stroke();
    },
    touch_end: function (event) {
        if(window.isTouchWall) {
            StateForJs.isCanDraw = true;
            window.isTouchWall = false;
            this.line_point = [];
            this.graphics.clear();
            return;
        }

        if (!StateForJs.isCanDraw) {
            return;
        }

        
        StateForJs.isCanDraw = false;
        window.isDraw = true;
        window.isTouchWall = false
        this.createRigibody();
        this.offTouch();
    },
    createRigibody: function () {
        this.rigibodyLogic = this.addComponent(cc.RigidBody);
        this.rigibodyLogic.gravityScale = 2;

        this.physicsLine = this.addComponent("MyPhysicsCollider");
        this.physicsLine.lineWidth = 7;
        this.physicsLine.points = this.line_point;
        this.physicsLine.friction = 0;
        this.physicsLine.density = 100;
        this.physicsLine.tag = 4;
        this.physicsLine.apply();
    },

    checkIsCanDraw: function (lastPoint, nowPoint) {
        return lastPoint.sub(nowPoint).mag() >= 20;
    },

});
