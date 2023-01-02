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

// dynamically adding contents to the cart
const button = document.getElementById("button");
const notification = document.querySelector(".notification");
const message = document.querySelectorAll(".message");
const item = document.querySelector(".addtocart > :nth-child(2)");

button.addEventListener("click", () => {
  if (item.textContent > 0) {
    notification.style.visibility = "visible";

    // message displayed on successfully adding items to cart
    message[0].classList.add("render");
    setTimeout(() => {
      message[0].classList.remove("render");
    }, 3000);

    cart.innerHTML = `<div class="name">Cart</div>
        <div class="addedCartContainer">
          <figcaption class="thumb">
            <img src="./images/image-product-1.jpg" alt="image product 1" />
          </figcaption>

          <div class="cartDetail">
            <p class="detailName">Fall Limited Edition sneakers</p>
            <p class="detailPrice">$125.00 x <span>3</span> <b>$375.00</b></p>
          </div>

          <figcaption class="trash">
            <img src="./images/icon-delete.svg" alt="icon delete" />
          </figcaption>
        </div>

        <button id="checkout">Checkout</button>`;

    const spanEl = document.querySelector("span");
    const total = document.querySelector("b");

    spanEl.textContent = item.textContent;
    let result = 125.0 * Number(spanEl.textContent);
    total.textContent = `$${result}.00`;

    trashCan();
    checkOutFunc();
  } else {
    // error message to be displayed if there's no item number specified to be added
    message[1].classList.add("renderMsg");
    setTimeout(() => {
      message[1].classList.remove("renderMsg");
    }, 3000);
  }
});

const trashCan = function () {
  const trash = document.querySelector(".trash");

  trash.addEventListener("click", () => {
    cart.innerHTML = `<div class="name">Cart</div>`;
    notification.style.visibility = "hidden";

    // message displayed on successfully deleting items from the cart
    message[2].classList.add("show");
    setTimeout(() => {
      message[2].classList.remove("show");
    }, 3000);

    cart.classList.add("hide");
  });
};

const checkOutFunc = function () {
  const checkout = document.getElementById("checkout");

  checkout.addEventListener("click", () => {
    console.log("I'm being clicked");
    cart.innerHTML = `
                  <div class="name">Cart</div>
                  <figcaption class="verified">
                          <img src="./design/verified.gif" alt="an image">
                      </figcaption>`;

    notification.style.visibility = "hidden";

    setTimeout(() => {
      cart.innerHTML = `<div class="name">Cart</div>`;
      cart.classList.add("hide");
    }, 2000);
  });
};
