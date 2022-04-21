import { Settings } from "../core/settings";
import * as Utils from "../core/utils";

export class DonateList {
  #donates;
  #donateItemsHTML;

  static DefaultTexts = {
    DonatesList: "Список донатов",
  };

  constructor(donates) {
    this.#donates = donates;
  }

  #renderDonates() {
    this.#donateItemsHTML.innerHTML = "";
    this.#donates.forEach((donate) => {
      const donateItemHTML = document.createElement("div");
      donateItemHTML.className = "donate-item";
      const creationTime = Utils.getFormattedDate(donate.date);
      donateItemHTML.innerHTML = `${creationTime} - <b>${donate.amount}${Settings.currencySimbol}</b>`;
      this.#donateItemsHTML.append(donateItemHTML);
    });
  }

  updateDonates(updatedDonates) {
    this.#donates = updatedDonates;
    this.#renderDonates();
  }

/*
    <div class="donates-container"> 
        <h2 class="donates-container__title">Список донатов</h2> 
        <div class="donates-container__donates"> 
           <div class="donate-item">July 6th 2021, 10:28:49 am - <b>4$</b></div>
           <div class="donate-item">July 6th 2021, 10:28:49 am - <b>20$</b></div>
           <div class="donate-item">July 6th 2021, 10:28:49 am - <b>3$</b></div>
           <div class="donate-item">July 6th 2021, 10:28:49 am - <b>1$</b></div> 
        </div>
     </div>
*/

  render() {
    const donatesContainer = document.createElement("div");
    donatesContainer.className = "donates-container";
    const donatesText = document.createElement("h2");
    donatesText.className = "donates-container__title";
    donatesText.textContent = DonateList.DefaultTexts.DonatesList;
    this.#donateItemsHTML = document.createElement("div");
    this.#donateItemsHTML.className = "donates-container__donates";

    donatesContainer.append(donatesText, this.#donateItemsHTML);
    this.#renderDonates();

    return donatesContainer;
  }
}
