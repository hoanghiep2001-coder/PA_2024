import { Constants } from "../Data/constants";
import Army from "../Other/Army";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SpawnController extends cc.Component {

    @property([cc.Node])
    AllyPoints: cc.Node[] = [];
    @property([cc.Node])
    EnemyPoints: cc.Node[] = [];

    @property(cc.Prefab)
    Army_Lv1: cc.Prefab = null;
    @property(cc.Prefab)
    Army_Lv2: cc.Prefab = null;
    @property(cc.Prefab)
    Army_Lv3: cc.Prefab = null;


    protected start(): void {
        if (Constants.enemyArmies[0]) Constants.enemyArmies.splice(0, 1);
        this.SpawnEnemyArmy(Constants.ArmySkin.Enemy, 2);
    }


    public SpawnEnemies(): void {
        this.schedule(function () {
            if (Constants.isPauseGame) return;
            this.SpawnEnemyArmy(Constants.ArmySkin.Enemy, 1);
        }, 4, cc.macro.REPEAT_FOREVER, 0.2);
    }


    public SpawnEnemyArmy(skin: string, level: number): void {
        let random = cc.math.randomRangeInt(0, 3)
        let newArmy: cc.Node;

        // create Army
        switch (level) {
            case 1:
                newArmy = cc.instantiate(this.Army_Lv1);
                break;
            case 2:
                newArmy = cc.instantiate(this.Army_Lv2);
            default:
                break;
        }
        Constants.enemyArmies.push(newArmy);

        // caculate Scale
        newArmy.scaleX = -Constants.scaleArmy;
        newArmy.scaleY = Constants.scaleArmy;

        // set Pos
        let point = this.EnemyPoints[random];
        point.parent.addChild(newArmy);
        newArmy.setSiblingIndex(0);
        newArmy.setPosition(point.getPosition());

        // set skin & group
        newArmy.getComponent(Army).skin = skin;
        newArmy.group = "Enemy";
        let spine = newArmy.getChildByName("Spine").getComponent(sp.Skeleton);
        spine.setSkin(skin)
    }


    public SpawnPlayerArmy(skin: string, level: number): void {
        let random = cc.math.randomRangeInt(0, 3)
        let newArmy: cc.Node;


        // create Army
        switch (level) {
            case 1:
                newArmy = cc.instantiate(this.Army_Lv1);
                break;
            case 2:
                newArmy = cc.instantiate(this.Army_Lv2);
                break;
            case 3:
                newArmy = cc.instantiate(this.Army_Lv3);
                break;
            default:
                break;
        }

        Constants.allyArmies.push(newArmy);
        console.log("Allies:" + Constants.allyArmies.length);

        // caculate Scale
        newArmy.scale = Constants.scaleArmy;

        // set Pos
        let point = this.AllyPoints[random];
        point.parent.addChild(newArmy);
        newArmy.setSiblingIndex(0);
        newArmy.setPosition(point.getPosition());

        // set skin & group
        newArmy.getComponent(Army).skin = skin;
        newArmy.group = "Ally";
        let spine = newArmy.getChildByName("Spine").getComponent(sp.Skeleton);
        spine.setSkin(skin);
        spine.timeScale = 0.9
    }


}
