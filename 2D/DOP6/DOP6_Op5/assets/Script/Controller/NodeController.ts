const {ccclass, property} = cc._decorator;

@ccclass
export default class NodeController extends cc.Component {

    // ScratchAbles
    


    // UI
    @property(cc.Node)
    content: cc.Node = null;

    @property(cc.Node)
    hideMask: cc.Node = null;

    shape_wrong: cc.Node = null;
    FX_confetti: cc.ParticleSystem = null;
    Scenes: cc.Node[] = [];
    objects: cc.Node[] = [];


    protected start(): void {
        this.content.children.forEach((node) => node.name.includes("Scene") && this.Scenes.push(node));
        
        this.Scenes.find(scene => {
            scene.children.forEach(child => child.name.includes("object") && this.objects.push(child))
        });

        this.shape_wrong = this.content.getChildByName("shape");
        
        this.FX_confetti = this.content.getChildByName("ConfettiBase").getComponentInChildren(cc.ParticleSystem);        

    }

}
