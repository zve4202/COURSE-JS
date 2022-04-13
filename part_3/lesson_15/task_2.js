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

const getUsersByIds = (userIds = []) => {
    toggleLoader();
    
    const promises = userIds.map((id) => {
      return fetch(`${USERS_URL}/${id}`);
    });
    
    Promise.all(promises)
      .then((responses) => {
        return Promise.all(
          responses
            .filter((response) => response.ok)
            .map((response) => response.json())
        );
      })
      .then((users) => {
        (users || []).forEach((user) => {
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

getUsersByIds([5, 6, 2, 1]);