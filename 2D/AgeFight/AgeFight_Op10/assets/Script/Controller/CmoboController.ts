

import { Constants } from "../Data/constants";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ComboController extends cc.Component {


    @property(sp.Skeleton)
    spine_combo: sp.Skeleton = null;


    start () {

    }


    public handleShowCombo(): void {

        cc.log("Cmobo Count: " + Constants.comboCount)

        switch (Constants.comboCount) {
            case 2:
                this.spine_combo.node.active = true;
                this.spine_combo.setSkin("Combo 2");
                this.spine_combo.setAnimation(0, "action", false);
                break;
            case 3:
                this.spine_combo.setSkin("Combo 3");
                this.spine_combo.setAnimation(0, "action", false);
                break;
            case 4:
                this.spine_combo.setSkin("Combo 4");
                this.spine_combo.setAnimation(0, "action", false);
                break;
            case 5:
                this.spine_combo.setSkin("Combo 5");
                this.spine_combo.setAnimation(0, "action", false);
                break;
            case 6:
                this.spine_combo.setSkin("Combo 6");
                this.spine_combo.setAnimation(0, "action", false);
                break;
            default:
                break;
        }
    }
}
