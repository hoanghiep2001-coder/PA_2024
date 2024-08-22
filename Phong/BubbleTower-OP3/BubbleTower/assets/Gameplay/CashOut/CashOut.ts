// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Global from "../../Utility2d/Global";
import Utility from "../../Utility2d/Utility";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CashOut extends cc.Component {

    @property(cc.Label)
    dateText: cc.Label = null;

    @property(cc.Label)
    cashText: cc.Label = null;

    protected onEnable(): void {
        const currentDate = new Date();
        const formattedDate = this.formatDate(currentDate);
        this.dateText.string = formattedDate;


        const formattedNumber = Utility.formatNumber(Global.totalCash);
        this.cashText.string = "$" + formattedNumber;

    }


    formatDate(date: Date): string {
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const dayOfWeek = daysOfWeek[date.getDay()];
        const day = String(date.getDate()).padStart(2, '0');
        const month = months[date.getMonth()];
        const year = date.getFullYear();

        return `${dayOfWeek} ${month} ${day} ${year}`;
    }

    

}
