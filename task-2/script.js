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
    let popupContainer = document.querySelector(".popupContainer");
    let popupMenu = document.querySelector(".popupMenu");
    let popupImg = document.querySelector(".popupImg");
    let closeBtn = document.querySelector(".closeBtn");
    popupImg.src = image.src;
    popupContainer.classList.add("show");
    closeBtn.addEventListener("click", function () {
      popupContainer.classList.remove("show");
    });
  });
});

let col = document.querySelectorAll(".col-md-3");

col.forEach((item) => {
  let crossBtn = document.createElement("button");
  crossBtn.classList.add("crossBtn");
  crossBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg>`;
  item.appendChild(crossBtn);

  crossBtn.addEventListener("click", function () {
    item.classList.add("hide");
  });
  let reshow = document.querySelector(".reshow");
  reshow.addEventListener("click", function () {
    item.classList.remove("hide");
  });
});
