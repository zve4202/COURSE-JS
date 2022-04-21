import { Settings } from "../core/settings";

export class DonateForm {
  #donateForm;
  #totalAmountHTML;
  #maxDonate;
  #minDonate;
  #totalAmount;
  #createNewDonate;

  static TextObject = {
    DonateButtonText: "Задонатить",
    InputLabel: `Введите сумму в ${Settings.currencySimbol}`,
  };

  static DefaultDonateValues = {
    min: 0,
    max: 100,
  };

  constructor(totalAmount, createNewDonate, minDonate, maxDonate) {
    this.#totalAmount = totalAmount;
    this.#createNewDonate = createNewDonate;
    this.#maxDonate = maxDonate || DonateForm.DefaultDonateValues.max;
    this.#minDonate = minDonate || DonateForm.DefaultDonateValues.min;
  }

  #renderDonateButton() {
    const donateButton = document.createElement("button");
    donateButton.classList = "donate-form__submit-button";
    donateButton.type = "submit";
    donateButton.innerText = DonateForm.TextObject.DonateButtonText;

    return donateButton;
  }

  #renderAmountInput() {
    const amountInput = document.createElement("input");
    const amountInputLabel = document.createElement("label");
    amountInputLabel.textContent = DonateForm.TextObject.InputLabel;
    amountInputLabel.className = "donate-form__input-label";

    amountInput.classList = "donate-form__number-input";
    amountInput.name = "amount";
    amountInput.type = "number";
    amountInput.className = "donate-form__donate-input";
    amountInput.max = this.#maxDonate;
    amountInput.min = this.#minDonate;
    amountInput.required = "required";

    amountInputLabel.append(amountInput);

    return amountInputLabel;
  }

  updateTotalAmount(newAmount) {
    this.#totalAmountHTML.textContent = `${newAmount}${Settings.currencySimbol}`;
  }

  #onCreateNewDonateSubmit(event) {
    event.preventDefault();
    const newDonateValue = Number(event.target.amount.value);
    if (newDonateValue && this.#createNewDonate) {
      const newDonate = {
        date: new Date(),
        amount: newDonateValue,
      };
      this.#createNewDonate(newDonate);
      event.target.amount.value = "";
    }
  }
/*
    <form class="donate-form">
        <h1 id="total-amount">28$</h1>
        <label class="donate-form__input-label"> 
              Введите сумму в $
              <input class="donate-form__donate-input" name="amount" type="number" max="100" min="1" required="">
        </label>
        <button class="donate-form__submit-button" type="submit"> 
            Задонатить 
        </button> 
    </form>

*/
  render() {
    this.#donateForm = document.createElement("form");
    this.#donateForm.className = "donate-form";
    this.#donateForm.addEventListener(
      "submit",
      this.#onCreateNewDonateSubmit.bind(this)
    );

    this.#totalAmountHTML = document.createElement("h1");
    this.#totalAmountHTML.id = "total-amount";
    this.updateTotalAmount(this.#totalAmount);

    const donateButton = this.#renderDonateButton();
    const amountInput = this.#renderAmountInput();
    this.#donateForm.append(this.#totalAmountHTML, amountInput, donateButton);

    return this.#donateForm;
  }
}