// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameManager from "../Utility/GameManager";
import Global, { eventDispatcher } from "../Utility/Global";
import { Character } from "./Character";
import { House, TypeWarior } from "./House";

const { ccclass, property } = cc._decorator;

@ccclass
export default class HouseEnemyController extends House {

    override  SortByPosition() {
        this.wariorList.sort((a, b) => {
            // Get the x positions of nodes a and b
            const xA = a.node.position.x;
            const xB = b.node.position.x;

            // Compare x positions
            // If you want the node with the bigger x to have the highest index, return xB - xA
            // If you want the node with the smaller x to have the highest index, return xA - xB
            return xA - xB;
        });
    }
    override  UpdateToGlobal() {
        Global.enemyList = this.wariorList;
    }
    override  OnBreakHouse(): void {
        this.SpawnCoin();

        super.OnBreakHouse();
        
        this.scheduleOnce(() => {
            GameManager.Instance(GameManager).ShowEndcardWin();
        }, 1)
        // show endcard win
    }
    override RemoveFromList(warior: Character): void {
        Global.enemyList.filter(item => item !== warior);
        this.wariorList.filter(item => item !== warior);
    }

    override start(): void {
        super.start();
        eventDispatcher.on(Global.StartGame, this.AutoSpawn, this);
        eventDispatcher.on(Global.StopGame, this.StopSpawn, this);
    }

    protected onEnable(): void {
        this.SpawnWave1();
    }
    StopSpawn() {
        this.unscheduleAllCallbacks();
    }
    override OnHit(damage: number) {
        super.OnHit(damage);
        this.SpawnCoin();
    }
    boolActiveWave2: boolean = false;
    boolActiveWave3: boolean = false;
    override update(dt: any): void {
        if (Global.endGame) return;
        if (!this.boolStartSpawn) return;
        if (Global.countEnemyDie >= 3 && !this.boolActiveWave2) {
            this.boolActiveWave2 = true;
            this.SpawnWave2();
        }
        if (Global.countEnemyDie >= 7 && !this.boolActiveWave3) {
            this.boolActiveWave3 = true;
            this.SpawnWave3();
        }
        super.update(dt);
    }
    boolStartSpawn: boolean = true;
    AutoSpawn() {
        this.boolStartSpawn = true;
        // this.SpawnWarior(TypeWarior.E3);

        this.SpawnWave1();

    }

    SpawnWave1() {

        this.scheduleOnce(() => {
            this.SpawnWarior(TypeWarior.E1);
            this.scheduleOnce(() => {

                this.SpawnWarior(TypeWarior.E1);
                this.scheduleOnce(() => {

                    //   this.SpawnWarior(TypeWarior.E1);
                    this.scheduleOnce(() => {
                        //    this.SpawnWarior(TypeWarior.E2);

                    }, 1.3)

                }, 1.3)

            }, 1.3)
        }, 0)
    }
    SpawnWave2() {
        this.scheduleOnce(() => {
            this.SpawnWarior(TypeWarior.E1);
            this.scheduleOnce(() => {

                this.SpawnWarior(TypeWarior.E1);
                this.scheduleOnce(() => {

                    this.SpawnWarior(TypeWarior.E1);
                    this.scheduleOnce(() => {
                        this.SpawnWarior(TypeWarior.E1);

                    }, 1.3)

                }, 1.3)

            }, 1.3)
        }, 0)
    }
    SpawnWave3() {
        this.scheduleOnce(() => {
            this.SpawnWarior(TypeWarior.E2);
            this.SpawnWarior(TypeWarior.E1);
            this.SpawnWarior(TypeWarior.E1);

            this.scheduleOnce(() => {

                this.SpawnWarior(TypeWarior.E2);
                this.SpawnWarior(TypeWarior.E1);
                this.SpawnWarior(TypeWarior.E1);
                this.scheduleOnce(() => {

                    this.scheduleOnce(() => {
                        this.SpawnWarior(TypeWarior.E3);
                        this.SpawnWarior(TypeWarior.E1);
                        this.SpawnWarior(TypeWarior.E1);

                    }, 1.3)

                }, 1.3)

            }, 1.3)
        }, 0)
    }

    override  CanHitTheHouse() {
        if (this.CheckDieAll) return true;
        this.wariorList.forEach(element => {
            if (!element.isDie && element.node.x < this.node.x)
                return true;
        });
        return false;
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}




}
