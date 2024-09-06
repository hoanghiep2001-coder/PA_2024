
const { ccclass, property } = cc._decorator;


export const RandomRangeInt = (from: number, to: number): number => {
   let random = cc.math.randomRangeInt(from, to);

   return random;
}
