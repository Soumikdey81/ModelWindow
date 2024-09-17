"use strict";

const model = document.querySelector(".model");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close");
const buttons = document.querySelectorAll(".button");

function openModel() {
  model.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModel() {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", openModel);
}

close.addEventListener("click", closeModel);

overlay.addEventListener("click", closeModel);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !model.classList.contains("hidden")) {
    closeModel();
  }
});
