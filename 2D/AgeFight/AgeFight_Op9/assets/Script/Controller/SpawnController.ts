import { Constants } from "../Data/constants";
import Army from "../Other/Army";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SpawnController extends cc.Component {
    @property(cc.Node)
    Base: cc.Node  = null;

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

    enemySpawnTime: number = 1;


    protected start(): void {
        // if(Constants.enemyArmies[0]) Constants.enemyArmies.splice(0, 1);

        this.spawnTroopsCatchKing();

        // this.SpawnEnemyArmy(Constants.ArmySkin.Enemy);
    }  


    private spawnTroopsCatchKing(): void {
        this.scheduleOnce(() => {
            this.SpawnEnemyArmy(Constants.ArmySkin.Enemy, 2);
            this.SpawnEnemyArmy(Constants.ArmySkin.Enemy, 2);
            // this.SpawnEnemyArmy(Constants.ArmySkin.Enemy, 2);
            // this.SpawnEnemyArmy(Constants.ArmySkin.Enemy, 2);
            // this.SpawnEnemyArmy(Constants.ArmySkin.Enemy, 2);
        }, 0.5);
    }


    public SpawnEnemies(): void {
        this.schedule(() => {
            let random = cc.math.randomRangeInt(1, 3);

            if (Constants.isPauseGame) return;
            this.SpawnEnemyArmy(Constants.ArmySkin.Enemy, random);
        }, this.enemySpawnTime, cc.macro.REPEAT_FOREVER, 0.2);
    }


    public SpawnEnemyArmy(skin: string, level: number): void {

        if((Constants.isCanBuyArmyLv3 || Constants.isUpgrade) && this.enemySpawnTime === 0.3) {
            console.log("up spawn time");
            
            this.enemySpawnTime = 1.5;
        }

        
        let random = cc.math.randomRangeInt(0, 5)

        // create Army
        let newArmy: cc.Node = null;

            switch (level) {
                case 1:
                    newArmy = cc.instantiate(this.Army_Lv1);
                    break;
                case 2:
                    newArmy = cc.instantiate(this.Army_Lv2);
                    break;
                default:
                    break;
            }

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
        let random = cc.math.randomRangeInt(0, 5)
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
