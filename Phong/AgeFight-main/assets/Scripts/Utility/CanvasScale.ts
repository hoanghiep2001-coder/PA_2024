// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class CanvasScale extends cc.Component {

    Resize() {
        // Get the screen size
        const screenSize = cc.view.getVisibleSize();

        // Set the design resolution size of the canvas to match the screen size
        cc.view.setDesignResolutionSize(screenSize.width, screenSize.height, cc.ResolutionPolicy.EXACT_FIT);

    }


    update(dt) {
        this.Resize();
    }
}
