/*
<div class="select-dropdown select-dropdown--123">
  <button class="select-dropdown__button select-dropdown__button--123">
    <span class="select-dropdown select-dropdown--123">Выберите элемент</span>
  </button>
  <ul class="select-dropdown__list select-dropdown__list--123">
    <li class="select-dropdown__list-item" data-value="1">
      JavaScript
    </li>
    <li class="select-dropdown__list-item" data-value="2">
      NodeJS
    </li>
    <li class="select-dropdown__list-item" data-value="3">
      ReactJS
    </li>
    <li class="select-dropdown__list-item" data-value="4">
      HTML
    </li>
    <li class="select-dropdown__list-item" data-value="5">
      CSS
    </li>
  </ul>
</div>;
*/

class CustomSelect {
  static #defaultText = {
    selectItems: "Выберите Элемент",
  };

  #id;
  #options;
  #selectButton;
  #selectUList;
  #selectedOption;

  constructor(id, options = []) {
    this.#id = id;
    this.#options = options;
    this.#selectedOption = null;

    this.#selectButton = document.createElement("button");
    this.#selectUList = document.createElement("ul");
  }

  get selectedValue() {
    return this.#selectedOption;
  }

  #prepareUList(container) {
    const containerId = `select-dropdown__list--${this.#id}`;
    this.#selectUList.className = `select-dropdown__list ${containerId}`;

    this.#options.forEach((option) => {
      const liItem = document.createElement("li");
      liItem.className = "select-dropdown__list-item";
      liItem.dataset.value = option.value;
      liItem.textContent = option.text;
      this.#selectUList.append(liItem);
    });

    this.#selectUList.addEventListener(
      "click",
      this.#handlerListItemSelect.bind(this)
    );

    if (container) {
      container.append(this.#selectUList);
    }
  }

  #prepareSelectButton(container) {
    this.#selectButton.className = `select-dropdown__button select-dropdown__button--${
      this.#id
    }`;
    const buttonTextItem = document.createElement("span");
    buttonTextItem.className = `select-dropdown select-dropdown--${this.#id}`;
    buttonTextItem.textContent = CustomSelect.#defaultText.selectItems;
    this.#selectButton.append(buttonTextItem);
    container.append(this.#selectButton);

    this.#selectButton.addEventListener(
      "click",
      this.#handlerListActiveToggle.bind(this)
    );
  }

  #handlerListActiveToggle() {
    this.#selectUList.classList.toggle("active");
  }

  #handlerListItemSelect(event) {
    const { target } = event;
    if (target === this.#selectUList){
      return;
    }
    
    const dataValue = target.getAttribute("data-value");
    
    const selectedOption = this.#options.find(
      (option) => option.value === Number(dataValue)
    );

    const buttonText = this.#selectButton.querySelector(".select-dropdown");

    if (buttonText && dataValue && selectedOption) {
      this.#selectedOption = selectedOption;
      
      this.#selectUList.querySelectorAll(".select-dropdown__list-item").forEach((liItem) => {
        liItem.classList.remove("selected");
      });
      
      target.classList.add("selected");

      buttonText.textContent = selectedOption.text;
      
      this.#selectUList.classList.remove("active");
    }
  }

  render(container) {
    const selectContainer = document.createElement("div");
    selectContainer.className = `select-dropdown select-dropdown--${this.#id}`;
    
    if (container) {
      this.#prepareSelectButton(selectContainer);
      this.#prepareUList(selectContainer);
      container.append(selectContainer);
    }
  }
}

const options = [
  { value: 1, text: "JavaScript" },
  { value: 2, text: "NodeJS" },
  { value: 3, text: "ReactJS" },
  { value: 4, text: "HTML" },
  { value: 5, text: "CSS" },
];

const customSelect = new CustomSelect(Date.now().toString(), options);
const mainContainer = document.querySelector("#container");
customSelect.render(mainContainer);
