
const {ccclass, property} = cc._decorator;

@ccclass
export default class BossController extends cc.Component {

    @property(cc.Node)
    player: cc.Node;
    @property(cc.Node)
    GameController: cc.Node;

    isCanAtk: boolean = false;
    playerDie: boolean = false;
    isPlayAtkSound: boolean = false;

    protected start(): void {
        
    }


    private caculateTimeToAttack(): void {
        this.scheduleOnce(() => {
            this.isCanAtk = true;
        }, 3.5)
    }


    private playAtkSound(): void {
        this.isPlayAtkSound = true;
        this.GameController.getComponent("GameController").playAudio("sharkSound");
    }


    protected update(dt: number): void {
        if(this.player.getComponent("PlayerController").isLevel3) {
            !this.isCanAtk && this.caculateTimeToAttack();

            if(this.isCanAtk) {
                const lerpRatio = 0.012;            
                const playerPos = this.player.getPosition();            
                const currentCameraPos = this.node.position;
                const newPosition = currentCameraPos.lerp(playerPos, lerpRatio, currentCameraPos);
                
                !this.isPlayAtkSound && this.playAtkSound();
                this.node.setPosition(newPosition);
            }
        }

        if(this.node.getBoundingBox().intersects(this.player.getBoundingBox()) && !this.playerDie) {
            this.playerDie = true;
            this.player.getComponent("PlayerController").isLive = false;
            this.player.getComponent("PlayerController").handleDie();
        }
    }
}
