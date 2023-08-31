import { galleryItems } from "./gallery-items.js";


const gallery = document.querySelector(".gallery");

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

const markup = liArray.join("");

gallery.insertAdjacentHTML("afterbegin", markup);

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.classList.contains("gallery__image")) {
    const originalImageUrl = event.target.dataset.source;
    const imageDescription = event.target.alt;

    
    const instance = basicLightbox.create(`
      <div class="modal">
        <img src="${originalImageUrl}" alt="${imageDescription}" />
      </div>
    `);

    instance.show();

    
    const modalWindow = document.querySelector(".modal");
    



    modalWindow.addEventListener("click", () => {
      instance.close();
      
    });
  }
    



});
