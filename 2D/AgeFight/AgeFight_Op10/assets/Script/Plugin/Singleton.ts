// BaseSingleton.ts
const { ccclass } = cc._decorator;

@ccclass
export default class Singleton<T> extends cc.Component {
    public static _instance = null;

    // Phương thức để lấy instance duy nhất
    public static getInstance<T>(c: { new (): T }): T {
        

        if (this._instance === null) {
            this._instance = new c();
        }

        console.log(this._instance);
        

        return this._instance;
    }
}
