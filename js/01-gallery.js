import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector('.gallery');


const liArray = galleryItems.map(({ preview, original, description }) => {
    return `
  <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>

  `;

  
});


const markup = liArray.join('');

gallery.insertAdjacentHTML("afterbegin", markup);






gallery.addEventListener("click", (event) => {
    
   event.preventDefault();

    if (!event.target.classList.contains("gallery__item")) {
        return;
        
    }



    
    
   
});
    





 






