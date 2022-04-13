/*
<li><a href="#">Имя пользователя</a></li>
*/

const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const usersList = document.querySelector("#data-container");


const toggleLoader = () => {
  const loaderElement = usersList.querySelector("#loader");
  const hiddenExists = loaderElement.getAttribute("hidden") !== null;
  if (hiddenExists) {
    loaderElement.removeAttribute("hidden");
  } else {
    loaderElement.setAttribute("hidden", "");
  }
};

const createUserElement = (userName) => {
    const anchorElement = document.createElement("a");
    anchorElement.href = "#";
    anchorElement.innerText = userName;
    const liElement = document.createElement("li");
    liElement.append(anchorElement);    
    return liElement;
}

const loadUsers = () => {
    toggleLoader();
    fetch(USERS_URL /*, { method: "GET", }*/) // по умолчанию GET
      .then((response) => {
        return response.json();
      })
      .then((users) => {
         //users = users || []; 
        (users || []).forEach((user) => {
            // const anchorElement = document.createElement("a");
            // anchorElement.href = "#";
            // anchorElement.innerText = user.name;          
            // const liElement = document.createElement("li");
            // liElement.append(anchorElement);
            const liElement = createUserElement(user.name);
            usersList.append(liElement);
        });
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        toggleLoader();
      });

}

loadUsers();