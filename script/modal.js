"use strict";

const main = document.querySelector("main");

rendered_image.addEventListener("click", () => {
  main.style.background = "linear-gradient(45deg, black, transparent)";
  main.style.opacity = "20%";
  main.style.filter = "blur(5px)";

  document.querySelector(".modal").classList.remove("hide");
});

const rendered_image_modal = document.querySelector(".modalRendered img");
const modal_thumbnails = document.querySelectorAll(".modal_thumbnails img");

modal_thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    (function () {
      modal_thumbnails.forEach((thumb) => {
        if (thumb.classList.contains("active"))
          thumb.classList.remove("active");
      });
    })();

    rendered_image_modal.src = thumbnail.src;
    thumbnail.classList.add("active");
  });
});

const closeModal = document.querySelector('img[src="./images/icon-close.svg"]');

closeModal.addEventListener("click", () => {
  main.style.background = "#fff";
  main.style.opacity = "100%";
  main.style.filter = "blur(0px)";

  document.querySelector(".modal").classList.add("hide");
});

const modalarrow = document.querySelectorAll(".modalarrow");

let modalIndex = 0;

modalarrow[1].addEventListener("click", () => {
  modalIndex++;

  if (modalIndex > images.length - 1) modalIndex = 0;

  rendered_image_modal.src = images[modalIndex];
  rendered_image_modal.alt = alt[modalIndex];
  iterator();
});

modalarrow[0].addEventListener("click", () => {
  modalIndex--;

  if (modalIndex < 0) modalIndex = images.length - 1;

  rendered_image_modal.src = images[modalIndex];
  rendered_image_modal.alt = alt[modalIndex];
  iterator();
});

const iterator = function () {
  (function () {
    modal_thumbnails.forEach((thumb) => {
      if (thumb.classList.contains("active")) thumb.classList.remove("active");
    });
  })();
  console.log(modalIndex);

  modal_thumbnails.forEach((thumb) => {
    modal_thumbnails[modalIndex].classList.add("active");
  });
};
