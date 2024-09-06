const { ccclass, property } = cc._decorator;

@ccclass
export default class NodesContainer extends cc.Component {
    @property(cc.Node)
    hideMask: cc.Node = null;
    @property(cc.Node)
    BG: cc.Node = null;
    @property(cc.Node)
    UI: cc.Node = null;
    
    @property(cc.Node)
    Hand: cc.Node = null;

    Decor: cc.Node = null;
    boy: cc.Node = null;
    boy_answerCorrect: cc.Node = null;
    boy_answerWrong: cc.Node = null;
    CharactersContainer: cc.Node = null;
    Overlay: cc.Node = null;
    Dolls : cc.Node[] = [];

    Lv1_Hint: cc.Node = null;
    Lv2_Hint: cc.Node = null;
    FX_Blink: cc.ParticleSystem = null;


    protected start(): void {
        this.Decor = this.UI.getChildByName("Decor");

        this.boy = this.Decor.getChildByName("Boy");
        this.boy_answerCorrect = this.boy.getChildByName("Correct");
        this.boy_answerWrong = this.boy.getChildByName("Wrong");

        this.CharactersContainer = this.UI.getChildByName("Characters");
        this.Overlay = this.UI.getChildByName("Overlay");

        this.Dolls = this.CharactersContainer.children;

        // board ----------
        let board = this.Decor.getChildByName("board");
        this.Lv1_Hint = board.getChildByName("Hint1");
        this.Lv2_Hint = board.getChildByName("Hint2");
        this.FX_Blink = board.getChildByName("PS_Base").getChildByName("Blink").getComponent(cc.ParticleSystem);
    }
}
