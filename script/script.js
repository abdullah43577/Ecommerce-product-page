"use strict";

const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".menu_items");
const linkedLists = document.querySelectorAll(".menu_items li");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  burger.classList.toggle("active");

  // Animation
  linkedLists.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinksFade 0.5s ease forwards ${
        index / linkedLists.length
      }s`;
    }
  });
});

const rendered_image = document.querySelector(".rendered_img img");
const thumbnails = document.querySelectorAll(".thumbnails img");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    (function () {
      thumbnails.forEach((thumb) => {
        if (thumb.classList.contains("active"))
          thumb.classList.remove("active");
      });
    })();

    rendered_image.src = thumbnail.src;
    thumbnail.classList.add("active");
  });
});

const arrow = document.querySelectorAll(".arrow");

// Image slide implementation
let images = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];

let alt = [
  "image product 1",
  "image product 2",
  "image product 3",
  "image product 4",
];

let index = 0;

arrow[1].addEventListener("click", () => {
  index++;

  rendered_image.src = images[index];
  rendered_image.alt = alt[index];

  if (index > images.length - 1) index = 0;

  rendered_image.src = images[index];
  rendered_image.alt = alt[index];
});

arrow[0].addEventListener("click", () => {
  index--;

  rendered_image.src = images[index];
  rendered_image.alt = alt[index];

  if (index < 0) index = images.length - 1;

  rendered_image.src = images[index];
  rendered_image.alt = alt[index];
});
