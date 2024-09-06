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


    @property(cc.Prefab)
    Army2_Lv1: cc.Prefab = null;
    @property(cc.Prefab)
    Army2_Lv2: cc.Prefab = null;
    @property(cc.Prefab)
    Army2_Lv3: cc.Prefab = null;


    enemySpawnTime: number = 4;


    protected start(): void {
        // if(Constants.enemyArmies[0]) Constants.enemyArmies.splice(0, 1);
        // this.SpawnEnemyArmy(Constants.ArmySkin.Enemy);
    }


    public SpawnEnemies(): void {
        this.schedule(function () {
            if (Constants.isPauseGame) return;
            this.SpawnEnemyArmy(Constants.ArmySkin.Enemy);
        }, this.enemySpawnTime, cc.macro.REPEAT_FOREVER, 0.2);
    }


    public SpawnEnemyArmy(skin: string): void {

        if((Constants.isCanBuyArmyLv3 || Constants.isUpgrade) && this.enemySpawnTime === 0.3) {
            console.log("up spawn time");
            
            this.enemySpawnTime = 1.5;
        }

        let random = cc.math.randomRangeInt(0, 3)

        // create Army
        let newArmy = cc.instantiate(this.Army_Lv1);
        Constants.enemyArmies.push(newArmy);

        // caculate Scale
        newArmy.scaleX = -Constants.scaleArmy;
        newArmy.scaleY = Constants.scaleArmy;

        // set Pos
        let point = this.EnemyPoints[random];
        let armyComponent = newArmy.getComponent(Army);
        point.parent.addChild(newArmy);
        newArmy.setSiblingIndex(0);
        newArmy.setPosition(point.getPosition());

        // set skin & group
        armyComponent.skin = skin;
        newArmy.group = "Enemy";
        let spine = newArmy.getChildByName("Spine").getComponent(sp.Skeleton);
        spine.setSkin(skin);
        
        // console.log("Enemy - Group: " + newArmy.group);
    }


    public SpawnPlayerArmy(skin: string, level: number): void {
        let random = cc.math.randomRangeInt(0, 3)
        let newArmy: cc.Node;

        if(!Constants.isUpgrade) {
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
        } else {
            switch (level) {
                case 1:
                    newArmy = cc.instantiate(this.Army2_Lv1);
                    break;
                case 2:
                    newArmy = cc.instantiate(this.Army2_Lv2);
                    break;
                case 3:
                    newArmy = cc.instantiate(this.Army2_Lv3);
                    break;
                default:
                    break;
            }
        }
        // create Army
       

        Constants.allyArmies.push(newArmy);
        console.log("Allies:" + Constants.allyArmies.length);

        // caculate Scale
        newArmy.scale = Constants.scaleArmy;

        // set Pos
        let point = this.AllyPoints[random];
        let armyComponent = newArmy.getComponent(Army);
        point.parent.addChild(newArmy);
        newArmy.setSiblingIndex(0);
        newArmy.setPosition(point.getPosition());

        // set skin & group
        armyComponent.skin = skin;
        // armyComponent.tag = 1;
        newArmy.group = "Ally";
        let spine = newArmy.getChildByName("Spine").getComponent(sp.Skeleton);
        spine.setSkin(skin);
        spine.timeScale = 0.9;
    }


}
