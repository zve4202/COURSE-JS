import { DonateForm } from "./donate_form";
import { DonateList } from "./donate_list";
import * as Utils from "../core/utils";

/*
           <div class="donate-item">July 6th 2021, 10:28:49 am - <b>4$</b></div>
           <div class="donate-item">July 6th 2021, 10:28:49 am - <b>20$</b></div>
           <div class="donate-item">July 6th 2021, 10:28:49 am - <b>3$</b></div>
           <div class="donate-item">July 6th 2021, 10:28:49 am - <b>1$</b></div> 
*/
const donatesArray = [
  { date: new Date(), amount: 4 },
  { date: new Date(), amount: 20 },
  { date: new Date(), amount: 3 },
  { date: new Date(), amount: 1 },
];

export default class App {
  #donateForm;
  #donateList;
  #donatesStore;

  constructor() {
    this.#donatesStore = {
      donates: donatesArray,
      totalAmount: 0,
    };
    
    this.#donatesStore.totalAmount = Utils.calcSumOfDonates(
      this.#donatesStore.donates.map((donate) => donate.amount)
    );
    
    this.#donateForm = new DonateForm(
      this.#donatesStore.totalAmount,
      this.#createNewDonate.bind(this),
    );
    
    this.#donateList = new DonateList(this.#donatesStore.donates);
  }

  #createNewDonate(newDonate) {
    this.#donatesStore.donates.push(newDonate);
    this.#donatesStore.totalAmount += newDonate.amount;
    this.#donateForm.updateTotalAmount(this.#donatesStore.totalAmount);
    this.#donateList.updateDonates(this.#donatesStore.donates);
  }

  run() {
    document.body.append(this.#donateForm.render(), this.#donateList.render());
  }
}
