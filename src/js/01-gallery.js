import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryMenuEl = document.querySelector(".gallery");

const imagesEl = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");

galleryMenuEl.insertAdjacentHTML("beforeend", imagesEl);
let instance = null;

const onImageClick = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}">`,
    {
      onShow: () => {
        document.addEventListener("keydown", onCloseImg);
      },
      onClose: () => {
        document.removeEventListener("keydown", onCloseImg);
      },
    }
  );
  instance.show(event.target);
};

function onCloseImg(event) {
  if (event.code === "Escape") {
    instance.close();
  }
}

galleryMenuEl.addEventListener("click", onImageClick);
