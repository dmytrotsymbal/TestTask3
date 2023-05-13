let images = document.querySelectorAll(".images");
let title = document.querySelector(".title");
title.innerHTML = images.length + " elemets";

let now = new Date();
let date = now.toLocaleDateString();
let time = now.toLocaleTimeString();
let timeSubTitle = document.querySelector(".timeSubTitle");
timeSubTitle.innerHTML = date + " " + time;

images.forEach((image) => {
  image.addEventListener("click", () => {
    const popupContainer = document.querySelector(".popupContainer");
    let popupMenu = document.querySelector(".popupMenu");
    const popupImg = document.querySelector(".popupImg");
    let closeBtn = document.querySelector(".closeBtn");
    popupImg.src = image.src;
    popupContainer.classList.add("show");
    closeBtn.addEventListener("click", function () {
      popupContainer.classList.remove("show");
    });
  });
});
