// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import NeutrinoEffectHeart from "../../neutrinoparticles/components/NeutrinoEffect_Heart";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Colorizer extends cc.Component {

    protected start(): void {
        const effect = this.node.getComponent(NeutrinoEffectHeart);
        
		if (effect) {
			effect.setPropertyInAllEmitters(
                'Color',                // Name of the property
                new cc.Vec3(0.92, 0, 0.92)    // cc.Vec3(R, G, B) - red color
            );
		}

    }
}
