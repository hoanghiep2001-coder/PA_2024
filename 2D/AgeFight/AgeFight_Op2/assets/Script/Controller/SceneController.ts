
const {ccclass, property} = cc._decorator;

@ccclass
export default class SceneController extends cc.Component {
    @property(cc.Node)
    Horizontal: cc.Node = null;
    @property(cc.Node)
    Vertical: cc.Node = null;


    protected start(): void {
        if(cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
            this.Horizontal.active = true;
            console.log("ngang");
            
            this.Vertical.active = false;
        } else {
            console.log("doc");
            this.Horizontal.active = false;
            this.Vertical.active = true;
        }
    }
}
