// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const divRef = document.querySelector('.gallery');

function createGalleryMarkap(items) {
  return items
    .map(
      item => `<div class="gallery__item"> 
    <a class"gallery__link" href="${item.original}">
    <img class="gallery__image" src="${item.preview}"
    data-sourse="${item.original}"
    alt="${item.description}"/></a></div>`
    )
    .join('');
}

const addGalleryMarkup = createGalleryMarkap(galleryItems);
divRef.innerHTML = addGalleryMarkup;

let gallery = new SimpleLightbox('.gallery__item a', {
  captionsData: 'alt',
  captionDelay: 250,
});
gallery.on('show.simplelightbox', function () {});
