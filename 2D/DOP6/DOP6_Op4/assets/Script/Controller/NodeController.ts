const {ccclass, property} = cc._decorator;

@ccclass
export default class NodeController extends cc.Component {

    // ScratchAbles
    Scene1_ScratchAble: cc.Component[] = [];
    Scene2_ScratchAble: cc.Component[] = [];
    Scene3_ScratchAble: cc.Component[] = [];

    // UI
    @property(cc.Node)
    content: cc.Node = null;

    @property(cc.Node)
    Point: cc.Node = null;
    @property(cc.Node)
    hideMask: cc.Node = null;

    shape_wrong: cc.Node = null;
    FX_confetti: cc.ParticleSystem = null;
    Scenes: cc.Node[] = [];


    protected start(): void {
        this.content.children.forEach((node) => node.name.includes("Scene") && this.Scenes.push(node));
        
        this.Scene1_ScratchAble = this.Scenes[0].getComponentsInChildren("Scratchable");

        this.Scene2_ScratchAble = this.Scenes[1].getComponentsInChildren("Scratchable");

        this.Scene3_ScratchAble = this.Scenes[2].getComponentsInChildren("Scratchable");
        
        this.shape_wrong = this.content.getChildByName("shape");
        
        this.FX_confetti = this.content.getChildByName("ConfettiBase").getComponentInChildren(cc.ParticleSystem);

    }

}
