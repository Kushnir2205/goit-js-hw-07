import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);

const galleryMenu = document.querySelector('.gallery');

const galleryMarkUP = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`).join('')
console.log(galleryMarkUP);

galleryMenu.insertAdjacentHTML("beforeend", galleryMarkUP);

new SimpleLightbox('.gallery a', {
captionsData: 'alt',
captionPosition: 'bottom',
captionDelay: 250, });

