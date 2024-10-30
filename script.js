const apiUrl = "https://api.waifu.im/search";
const params = {
  included_tags: ["waifu"],
};

function addWaifu() {
  fetch(buildRequestUrl())
    .then((response) => response.json())
    .then((data) => {
      const imageContainer = document.createElement("div");
      imageContainer.className = "image";

      const image = document.createElement("img");
      image.src = data.images[0].url;

      imageContainer.appendChild(image);

      document.getElementById("gallery").appendChild(imageContainer);
    })
    .catch((error) => {
      console.error("An error occurred:", error.message);
    });
}

function buildRequestUrl() {
  const queryParams = new URLSearchParams();
  for (const key in params) {
    if (Array.isArray(params[key])) {
      params[key].forEach((value) => {
        queryParams.append(key, value);
      });
    } else {
      queryParams.set(key, params[key]);
    }
  }
  return `${apiUrl}?${queryParams.toString()}`;
}

const gallery = document.getElementById("gallery");
function removeAll() {
  if (confirm("Apakah anda yakin ingin menghapus semua gambar?") == true) {
    while (gallery.firstChild) {
      gallery.removeChild(gallery.firstChild);
    }
  } else {
  }
}
