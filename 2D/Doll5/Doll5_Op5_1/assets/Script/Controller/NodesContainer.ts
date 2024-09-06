const { ccclass, property } = cc._decorator;

@ccclass
export default class NodesContainer extends cc.Component {
    @property(cc.Node)
    BG: cc.Node = null;
    @property(cc.Node)
    hideMask: cc.Node = null;
    @property(cc.Node)
    UI: cc.Node = null;

    @property([cc.Node])
    skins: cc.Node[] = [];

    // UI
    @property(cc.Node)
    Logo: cc.Node = null;
    @property(cc.Node)
    Icon: cc.Node = null;
    @property(cc.Node)
    BtnDownload: cc.Node = null;
}
