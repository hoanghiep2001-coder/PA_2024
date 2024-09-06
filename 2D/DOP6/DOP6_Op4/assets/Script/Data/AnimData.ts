
const { ccclass, property } = cc._decorator;

enum Girl {
    Level28_A = "Level/Level28_A",
    Level28_B = "Level/Level28_B",
    Level29_A = "Level/Level29_B",
    Level29_B = "Level/Level29_B",
    Level32_B = "Level/Level32_B",
}


enum Boy {
    Level28_A = "Level/Level28_A",
    Level28_C = "Level/Level28_C",
    Level29_A = "Level/Level29_B",
    Level32_A = "Level/Level32_A",
    Level32_B = "Level/Level32_B",
}


enum FatMan {
    Level28_A2 = "Level/Level28_A2",
    Level28_C = "Level/Level28_C",
}


enum Door {
    Level32_B = "Level/Level32_B",
}


export class AnimData {
    static Girl: typeof Girl = Girl;

    static Boy: typeof Boy = Boy;

    static FatMan: typeof FatMan = FatMan;

    static Door: typeof Door = Door;

}
