import { Constants } from "../Data/constants";

const { ccclass, property } = cc._decorator;

@ccclass
export class Cell extends cc.Component {

    @property
    generator: boolean = false;
    @property(cc.Node)
    blink: cc.Node = null;

    irow: number = 0;
    jcolumn: number = 0;
    TypeColor: typeColor = 0;
    
    typeCell: typeCell = 0;
    _circle: cc.Node = null;

    wasSelectCircle: boolean = false;
    wasClick: boolean = false;

    
    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.wasClickSet, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.moveCircle, this);
    }

    wasClickSet() {
        if(!Constants.isCanTouch) {
            return
        }

        if (this._circle != null) {
            this.wasClick =true;
            this.selectCircle();
        }
    }

    start() {

    }

    moveCircle(){
        cc.log("circle is move")
    }

    setGrayColor() {
        this.node.color = new cc.Color(71, 135, 153);
    }

    setWhiteColor() {
        this.node.color = new cc.Color(0, 0, 0);
    }

    setColorInType() {
        if (this.typeCell == 1) this.setWhiteColor();
    }

    countClick: number = 0;

    selectCircle() {
        if (this._circle == null) return;
        this.countClick++;
        if (this.countClick % 2 == 0) {
            this.wasSelectCircle = false;
            this.wasClick = false;
            this.setNormalSize();
            this.node.dispatchEvent(new cc.Event.EventCustom('wasTwoClickOnCell', true));
            // console.log("2 click");
        } else {
            this.wasSelectCircle = true;
            this.node.dispatchEvent(new cc.Event.EventCustom('wasClickOnCell', true));
            this._circle.setContentSize(this.node.getContentSize());
            // console.log("1 click");
        }
    }

    setNormalSize() {
        if (this._circle == null) return;
        var oldSize = cc.size(this.node.getContentSize());
        this._circle.setContentSize(oldSize.height - 15, oldSize.width - 15);
    }
    mousedown() {
        this.wasClick = true;
        this.destroyCircle();
    }

    destroyCircle() {
        if (this._circle != null) {
            this._circle.destroy();
            this._circle = null;
            this.node.dispatchEvent(new cc.Event.EventCustom('clickOnCellForDestroyCircle', true));
        }
    }

    circleIsNotNull() {
        if (this._circle != null) return true;
        return false;
    }


    CellIsNotNull() {
        if (this != null) return true;
        return false;
    }

}
