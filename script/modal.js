"use strict";

rendered_image.addEventListener("click", () => {
  document.querySelector("main").style.background =
    "linear-gradient(45deg, black, transparent)";
  document.querySelector("main").style.opacity = "20%";

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
  document.querySelector("main").style.background = "#fff";
  document.querySelector("main").style.opacity = "100%";

  document.querySelector(".modal").classList.add("hide");
});

const modalarrow = document.querySelectorAll(".modalarrow");

let modalIndex = 0;
modalarrow[0].addEventListener("click", () => {
  console.log("I'm being clicked");
  modalIndex++;

  rendered_image_modal.src = images[modalIndex];
  rendered_image_modal.alt = alt[modalIndex];

  if (modalIndex > images.length - 1) modalIndex = 0;

  rendered_image_modal.src = images[modalIndex];
  rendered_image_modal.alt = alt[modalIndex];
});

modalarrow[1].addEventListener("click", () => {
  console.log("I'm being clicked");
  modalIndex--;

  rendered_image_modal.src = images[modalIndex];
  rendered_image_modal.alt = alt[modalIndex];

  if (modalIndex < 0) modalIndex = images.length - 1;

  rendered_image_modal.src = images[modalIndex];
  rendered_image_modal.alt = alt[modalIndex];
});
