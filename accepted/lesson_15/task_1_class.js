const USERS_URL = "https://jsonplaceholder.typicode.com/users";

class UsersLoader {
  #url;
  #listContainer;
  constructor(url) {
    this.#url = url;
    this.#listContainer = document.querySelector("#data-container");
  }

  #toggleLoader() {
    const loaderElement = this.#listContainer.querySelector("#loader");
    const hiddenExists = loaderElement.getAttribute("hidden") !== null;
    if (hiddenExists) {
      loaderElement.removeAttribute("hidden");
    } else {
      loaderElement.setAttribute("hidden", "");
    }
  }

  #createUserElement = (userName) => {
/*
<li><a href="#">Имя пользователя</a></li>
*/
    const anchorElement = document.createElement("a");
    anchorElement.href = "#";
    anchorElement.innerText = userName;
    const liElement = document.createElement("li");
    liElement.append(anchorElement);
    return liElement;
  };

  loadUsers() {
    this.#toggleLoader();
    fetch(USERS_URL /*, { method: "GET", }*/) // по умолчанию GET
        .then((response) => {
        return response.json();
        })
        .then((users) => {
            (users || []).forEach((user) => {
                const liElement = this.#createUserElement(user.name);
                this.#listContainer.append(liElement);
            });
        })
        .catch((error) => {
            console.log("error", error);
        })
        .finally(() => {
            this.#toggleLoader();
        });

  }
}

const usersLoader = new UsersLoader(USERS_URL);
usersLoader.loadUsers();
