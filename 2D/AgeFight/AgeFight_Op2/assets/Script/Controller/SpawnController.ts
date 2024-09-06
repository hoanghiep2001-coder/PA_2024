import { Constants } from "../Data/constants";
import Army from "../Other/Army";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SpawnController extends cc.Component {

    @property([cc.Node])
    CreatedAllies: cc.Node[] = [];
    @property([cc.Node])
    CreatedEnemies: cc.Node[] = [];

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

    @property(cc.Prefab)
    Enemy_Lv1: cc.Prefab = null;
    @property(cc.Prefab)
    Enemy_Lv2: cc.Prefab = null;
    @property(cc.Prefab)
    Enemy_Lv3: cc.Prefab = null;


    protected start(): void {
        Constants.allyArmies.push(...this.CreatedAllies);
        for (let index = 0; index < Constants.allyArmies.length; index++) {
            const army = Constants.allyArmies[index];
            army.getComponent(Army).skin = Constants.ArmySkin.Ally;
        }

        Constants.enemyArmies.push(...this.CreatedEnemies);
        for (let index = 0; index < Constants.enemyArmies.length; index++) {
            const army = Constants.enemyArmies[index];
            army.getComponent(Army).skin = Constants.ArmySkin.Enemy;
        }
    }


    public SpawnEnemies(): void {
        this.schedule(function () {
            if (Constants.isPauseGame) return;
            this.SpawnEnemyArmy(Constants.ArmySkin.Enemy);
        }, 3, cc.macro.REPEAT_FOREVER, 0.2);
    }


    public SpawnAllies(): void {
        this.schedule(function () {
            if (Constants.isPauseGame) return;
            let random = cc.math.randomRangeInt(2, 4);
            this.SpawnPlayerArmy(Constants.ArmySkin.Ally, random);
        }, 1.2, cc.macro.REPEAT_FOREVER, 0.2);
    }


    public SpawnEnemyArmy(skin: string): void {
        let random = cc.math.randomRangeInt(0, 3)

        // create Army
        let newArmy = cc.instantiate(this.Army_Lv2);
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
        spine.timeScale = 0.95
    }


}
