const { ccclass, property } = cc._decorator;

@ccclass
export default class NodesContainer extends cc.Component {
    @property(cc.Node)
    hideMask: cc.Node = null;
    @property(cc.Node)
    UI: cc.Node = null;
    @property(cc.Prefab)
    BlockPrefab: cc.Prefab = null;

    Hand: cc.Node = null;
    Text: cc.Node = null;
    Table: cc.Node = null;
    Blocks: cc.Node[] = [];

    protected start(): void {
        this.Text = this.UI.getChildByName("Text");
        
        this.Blocks = this.UI.getChildByName("Table").children;

        for (let index = 0; index < this.Blocks.length; index++) {
            const block = this.Blocks[index];
            const label = block.getChildByName("Label").getComponent(cc.Label);

            label.string = String(this.extractOrderNumber(block.name) - 1);
            label.node.y = 65;
        }

        this.Hand = this.UI.getChildByName("hand");


        // --- scene 2
        // this.Table = this.UI.getChildByName("Table");

    }


    public initBlockNumber(): void {
        for (let index = 0; index < this.Blocks.length; index++) {
            const block = this.Blocks[index];
            const label = block.getChildByName("Label").getComponent(cc.Label);

            label.string = String(index);
            label.node.y = 65;
        }
    }


    private extractOrderNumber(name: string): number | null {
        const match = name.match(/_(\d+)$/);
        return match ? parseInt(match[1], 10) : null;
    }
}
