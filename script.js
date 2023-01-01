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
