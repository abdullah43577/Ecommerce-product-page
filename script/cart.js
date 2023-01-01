"use strict";

const cartDecrement = document.querySelector(".addtocart > :first-child");
const itemNo = document.querySelector(".addtocart > :nth-child(2)");
const cartIncremeter = document.querySelector(".addtocart > :last-child");

let indexNo = 0;

cartIncremeter.addEventListener("click", () => {
  itemNo.textContent = indexNo++;
  if (indexNo > 10) indexNo = 10;
  itemNo.textContent = indexNo;
  itemNo.style.color = "#000";
});

cartDecrement.addEventListener("click", () => {
  itemNo.textContent = indexNo--;
  if (indexNo < 0) indexNo = 0;
  itemNo.textContent = indexNo;
});

const cartIcon = document.querySelector(".cartBB");
const cart = document.querySelector(".cart");

cartIcon.addEventListener("click", () => {
  cart.classList.toggle("hide");
});
