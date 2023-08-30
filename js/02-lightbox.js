import { galleryItems } from './gallery-items.js';
// Change code below this line

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
    const imageDescription = event.target.getAttribute('alt');

        const lightbox = new SimpleLightbox('.gallery a', {
      animationSpeed: 250,
            captions: true, 
            
           
            captionsData: imageDescription,
            captionPosition: 'bottom',
           
            

        });
        
        lightbox.open(originalImageUrl);
  }
});
