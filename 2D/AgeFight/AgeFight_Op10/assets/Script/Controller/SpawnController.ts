import { Constants } from "../Data/constants";
import Army from "../Other/Army";

import { RandomRangeInt } from "../Data/Ultils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SpawnController extends cc.Component {
    @property(cc.Node)
    BasePlayer: cc.Node  = null;

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

    enemySpawnTime: number = 1;

    isReduce: boolean = false


    protected start(): void {
        // if(Constants.enemyArmies[0]) Constants.enemyArmies.splice(0, 1);
        // this.SpawnEnemyArmy(Constants.ArmySkin.Enemy);

        Constants.isUpgrade = true;

        this.spawnTank();
    }  
    

    private spawnTank(): void {
        this.scheduleOnce(() => {
            let random = 2;
            let newArmy: cc.Node;
            newArmy = cc.instantiate(this.Army_Lv3);
            
            Constants.allyArmies.push(newArmy);
            
            // caculate Scale
            newArmy.scale = Constants.scaleArmy;
            
            // set Pos
            let point = this.AllyPoints[random];
            point.parent.addChild(newArmy);
            newArmy.setSiblingIndex(0);
            newArmy.setPosition(point.getPosition());
            
            // set skin & group
            newArmy.group = "Ally";
            let spine = newArmy.getChildByName("Spine").getComponent(sp.Skeleton);
            spine.timeScale = 0.9;
            Constants.isSpawnTank = true;
            
            cc.log("Spawned Tank!");
        }, 0.5);
    }


    public SpawnEnemies(): void {
        this.schedule(() => {
            let random = RandomRangeInt(1, 3);
            if (Constants.isPauseGame || Constants.shootCount >= 2) return;
            this.SpawnEnemyArmy(Constants.ArmySkin.Enemy, random);
        }, this.enemySpawnTime, cc.macro.REPEAT_FOREVER, 0.2);
    }


    public SpawnEnemyArmy(skin: string, level: number): void {

        // if((Constants.isCanBuyArmyLv3 || Constants.isUpgrade) && this.enemySpawnTime === 0.3) {
        //     console.log("up spawn time");
            
        //     this.enemySpawnTime = 1.5;
        // }

        
        let random = RandomRangeInt(0, 5)

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
        
        console.log("Enemy - Group: " + newArmy.group);
    }


    public SpawnPlayerArmy(skin: string, level: number): void {
        let random = RandomRangeInt(0, 5)
        let newArmy: cc.Node;

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
        // create Army
       
        Constants.allyArmies.push(newArmy);
        console.log("Allies:" + Constants.allyArmies.length);

        // caculate Scale
        newArmy.scale = Constants.scaleArmy;

        // set Pos
        let point = this.AllyPoints[random];
        let armyComponent = newArmy.getComponent(Army);
        point.parent.addChild(newArmy);
        // newArmy.setSiblingIndex(0);
        newArmy.setPosition(point.getPosition());
        

        // set skin & group
        armyComponent.skin = skin;
        newArmy.group = "Ally";
        let spine = newArmy.getChildByName("Spine").getComponent(sp.Skeleton);
        spine.setSkin(skin);
        spine.timeScale = 0.9;
    }
}
