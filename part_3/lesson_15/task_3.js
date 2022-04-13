const PHOTOS_URL = "https://jsonplaceholder.typicode.com/photos";
const photosContainer = document.querySelector("#data-container");

const toggleLoader = () => {
  const loaderElement = photosContainer.querySelector("#loader");
  const hiddenExists = loaderElement.getAttribute("hidden") !== null;
  if (hiddenExists) {
    loaderElement.removeAttribute("hidden");
  } else {
    loaderElement.setAttribute("hidden", "");
  }
};

const createPhotoItem = (url, title) => {
  const photoImage = document.createElement("img");
  photoImage.src = url;
  photoImage.className = "photo-item__image";

  const photoTitle = document.createElement("h3");
  photoTitle.className = "photo-item__title";
  photoTitle.innerText = title;

  const photoItem = document.createElement("li");
  photoItem.className = "photo-item";
  photoItem.append(photoImage, photoTitle);

  return photoItem;
};

const getFirstPhoto = (photosIds) => {
  toggleLoader();
  const promises = photosIds.map((id) => {
    return fetch(`${PHOTOS_URL}/${id}`);
  });

  Promise.race(promises)
    .then((response) => response.json())
    .then((photo) => {
      const photoItem = createPhotoItem(photo.url, photo.title);
      photosContainer.append(photoItem);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      toggleLoader();
    });
};

getFirstPhoto([60, 12, 55]);