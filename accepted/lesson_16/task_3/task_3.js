const ALBUMS_URL = "https://jsonplaceholder.typicode.com/albums";
const listAlbums = document.querySelector(".data-container");

const createAlbumItem = (text) => {
  const albumItem = document.createElement("li");
  albumItem.innerText = text;
  return albumItem;
};

const toggleLoader = () => {
  const loaderElement = document.querySelector("#loader");
  const hiddenExists = loaderElement.getAttribute("hidden") !== null;
  if (hiddenExists) {
    loaderElement.removeAttribute("hidden");
  } else {
    loaderElement.setAttribute("hidden", "");
  }
};

const renderAlbums = async () => {
  toggleLoader();
  try {
    const response = await fetch(ALBUMS_URL);
    const albums = await response.json();
    albums.forEach((album) => {
      const albumItem = createAlbumItem(album.title);
      listAlbums.append(albumItem);
    });
  } catch {
    listAlbums.innerText =
      "Произошла ошибка в получении данных об альбомах...";
  } finally {
    toggleLoader();
  }
};

renderAlbums();
