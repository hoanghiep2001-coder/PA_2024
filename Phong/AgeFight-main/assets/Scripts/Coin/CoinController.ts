// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global, { eventDispatcher } from "../Utility/Global";
import PoolManager from "../Utility/Pool/PoolManager";
import Utility from "../Utility/Utility";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CoinController extends cc.Component {

    @property(cc.Node)
    coin: cc.Node = null;


    boolMoveToCoinHolder: boolean = false;
    coinHolderPos: cc.Vec2 = cc.Vec2.ZERO;
    speedMove: number = 1500;

    constantY: number = 0;
    constantX: number = 0;
    ratioHeight: number = 0;
    ratio: number = 0.5;

    protected start(): void {
    }
    GetCoinHolderPos() {
        var convert1 = Utility.ConvertPosToHigherParentByNode(Global.CoinHolder.parent.parent, Global.CoinHolder.parent, Global.CoinHolder);
        var convert2 = Utility.ConvertPosToParentByVector(Global.CoinHolder.parent.parent.parent, Global.CoinHolder.parent.parent, convert1);
        var convert3 = Utility.ConvertPosToParentByVector(Global.CoinHolder.parent.parent.parent.parent, Global.CoinHolder.parent.parent.parent, convert2);
        this.coinHolderPos = convert3;
    }
    InstantiateCoin() {
        var random = Utility.RandomRangeInteger(0, 10);
        if (random % 2 == 0) {
            this.DropCoinUp();
        } else {
            this.DropCoinDown();

        }
    }

    DropCoinUp() {
        this.constantY = 1;
        this.constantX = -1;
        this.ratioHeight = 0.3;
        //  y 250 to 200
        this.Jump1(0.4, this.constantX * this.ratio * Utility.RandomRangeInteger(100, 125), this.constantY * this.ratio * Utility.RandomRangeInteger(600, 700));

    }

    DropCoinDown() {
        this.constantY = 1;
        this.constantX = -1;
        this.ratioHeight = -0.3;
        // y -250 to -200
        this.Jump1(0.4, this.constantX * this.ratio * Utility.RandomRangeInteger(100, 125), this.constantY * this.ratio * Utility.RandomRangeInteger(600, 700));

    }

    Jump1(jumpDuration: number, jumpWidth: number, jumpHeight: number) {
        const controlPoint = new cc.Vec2(this.node.position.x + jumpWidth, this.node.position.y + jumpHeight);

        // Tạo hành động di chuyển theo đường cong Bézier
        const bezierTo = cc.bezierTo(jumpDuration, [this.node.getPosition(), controlPoint, new cc.Vec2(this.node.position.x + jumpWidth * 2, this.node.position.y + this.ratioHeight * jumpHeight)]);

        const sequence = cc.sequence(bezierTo, cc.callFunc(
            () => {
                this.Jump2(0.2, this.constantX * this.ratio * Utility.RandomRangeInteger(40, 60), this.constantY * this.ratio * Utility.RandomRangeInteger(300, 400));
            }
            , this));
        // Chạy hành động trên node
        this.node.runAction(sequence);
    }

    Jump2(jumpDuration: number, jumpWidth: number, jumpHeight: number) {
        const controlPoint = new cc.Vec2(this.node.position.x + jumpWidth, this.node.position.y + jumpHeight);

        const bezierTo = cc.bezierTo(jumpDuration, [this.node.getPosition(), controlPoint, new cc.Vec2(this.node.position.x + jumpWidth * 2, this.node.position.y + this.ratioHeight * jumpHeight)]);

        const sequence = cc.sequence(bezierTo, cc.callFunc(
            () => {
                this.Jump3(0.1, this.constantX * this.ratio * Utility.RandomRangeInteger(20, 25), this.constantY * this.ratio * Utility.RandomRangeInteger(80, 120));
            }
            , this));
        this.node.runAction(sequence);
    }
    Jump3(jumpDuration: number, jumpWidth: number, jumpHeight: number) {
        const controlPoint = new cc.Vec2(this.node.position.x + jumpWidth, this.node.position.y + jumpHeight);

        const bezierTo = cc.bezierTo(jumpDuration, [this.node.getPosition(), controlPoint, new cc.Vec2(this.node.position.x + jumpWidth * 2, this.node.position.y)]);

        const sequence = cc.sequence(bezierTo, cc.callFunc(
            () => {
                this.scheduleOnce(() => {
                    this.boolMoveToCoinHolder = true;
                }, 0.5)
            }
            , this));
        this.node.runAction(sequence);
    }
    // onLoad () {}


    update(dt) {
        if (!this.boolMoveToCoinHolder) return;
        this.GetCoinHolderPos();
        let direction: cc.Vec2 = this.coinHolderPos.sub(this.node.getPosition()).normalize();
        // Tính toán khoảng cách cần di chuyển trong frame này
        // Nếu khoảng cách cần di chuyển nhỏ hơn khoảng cách thực tế đến điểm đích
        let newPos: cc.Vec2 = this.node.getPosition().add(direction.multiplyScalar(this.speedMove * dt));
        this.node.x = newPos.x;
        this.node.y = newPos.y;
        if (Utility.Distance(this.node.getPosition(), this.coinHolderPos) < 5) {
            // Di chuyển đến vị trí mới sử dụng linear interpolation
            this.node.setPosition(this.coinHolderPos);
            this.EndMove();
        }
    }
    EndMove() {
        Utility.PlaySound(Global.Coin, false);
        this.boolMoveToCoinHolder = false;
        eventDispatcher.emit(Global.UpdateCoin, 10);
        PoolManager.Instance(PoolManager).RecycleCoin(this.node);
    }
    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if (other.node.group == "GoldHolder") {
            this.EndMove();
        }

    }

}
