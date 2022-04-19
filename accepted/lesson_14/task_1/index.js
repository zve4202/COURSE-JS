/*
<form class="create-user-form">
    <label>
        Имя
        <input type="text" name="userName" placeholder="Введите ваше имя">
    </label>
    <label>
        Пароль
        <input type="password" name="password" placeholder="Придумайте Пароль">
    </label>
    <button type="submit">
        Подтвердить
    </button>
</form>
*/

// способ 1
/*
document.body.innerHTML = `
<form class="create-user-form">
    <label>
        Имя
        <input type="text" name="userName" placeholder="Введите ваше имя">
    </label>
    <label>
        Пароль
        <input type="password" name="password" placeholder="Придумайте Пароль">
    </label>
    <button type="submit">
        Подтвердить
    </button>
</form>
`;
*/

// способ 2

function createLabeledInput(labelText, inputType, inputName, inputPlaceholder ){
    const label = document.createElement("label");
    label.textContent = labelText;
    const input = document.createElement("input");
    input.type = inputType;
    input.name = inputName;
    input.placeholder = inputPlaceholder;
    label.append(input);
    return label;
}

const form = document.createElement('form'); 
form.className = "create-user-form";
const inputName = createLabeledInput(
  "Имя",
  "text",
  "uaserName",
  "Введите ваше имя"
);
console.log(inputName);  
//form.append(inputName);

const inputPassword = createLabeledInput(
  "Пароль",
  "password",
  "password",
  "Придумайте Пароль"
);
console.log(inputPassword);
//form.append(inputPassword);

const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.innerText = "Подтвердить";
console.log(submitButton);
//form.append(submitButton);
form.append(inputName, inputPassword, submitButton);

document.body.prepend(form);
console.log("body", document.body);