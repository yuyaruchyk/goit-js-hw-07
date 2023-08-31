import { galleryItems } from './gallery-items.js';


const gallery = document.querySelector(".gallery");

const liArray = galleryItems.map(({ preview, original, description }) => {
  return `
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      

      
    />
  </a>
</li>

  `;
});

const markup = liArray.join("");

gallery.insertAdjacentHTML("afterbegin", markup);






gallery.addEventListener("click", (event) => {
  event.preventDefault();
  
  if (event.target.classList.contains("gallery__image")) {
      const originalImageUrl = event.target.getAttribute('href');
      const imgDescription = event.target.getAttribute('url');

      const lightbox = new SimpleLightbox('.gallery a', {
  
    captions: true,
    captionsData: imgDescription,
    captionPosition: 'bottom',
  captionDelay: 250 
});
    
    lightbox.open(originalImageUrl);
  }
});