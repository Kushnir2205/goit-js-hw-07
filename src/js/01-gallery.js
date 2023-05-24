import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryMenuEl = document.querySelector('.gallery');

const imagesEl = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('')
console.log(imagesEl);

galleryMenuEl.insertAdjacentHTML("beforeend", imagesEl);
let instance = null;

const onImageClick = (event) => {
    event.preventDefault();  
    if (event.target.nodeName !== "IMG") {
    return;
    }
    instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">`)
    instance.show(event.target)
}

function onCloseImg (event){
if(event.code === 'Escape'){
  instance.close()
}
}

galleryMenuEl.addEventListener('click', onImageClick)
document.addEventListener('keydown', onCloseImg)