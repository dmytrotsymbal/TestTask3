let input = document.querySelector("#input");
let reset = document.querySelector(".reset");
console.log(reset);

input.addEventListener("input", (e) => {
  countryName = e.target.value;

  fetch(`http://universities.hipolabs.com/search?country=${countryName}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((element, index) => {
        let table = document.querySelector(".table");
        let oneUnivEl = document.createElement("div");
        oneUnivEl.classList.add("oneUniv");
        table.appendChild(oneUnivEl);

        //ID--------------------------------------------------
        let univId = document.createElement("h4");
        univId.innerHTML = index + 1;
        oneUnivEl.appendChild(univId);

        //NAME--------------------------------------------------
        let univName = document.createElement("p");
        univName.innerHTML = JSON.stringify(element.name);
        oneUnivEl.appendChild(univName);

        //COUNTRY--------------------------------------------------
        let univCountry = document.createElement("p");
        univCountry.innerHTML = JSON.stringify(element.country);
        oneUnivEl.appendChild(univCountry);

        //LINK--------------------------------------------------
        let univLink = document.createElement("a");
        univLink.href = element.web_pages[0];
        univLink.innerHTML = JSON.stringify(element.web_pages[0]);
        oneUnivEl.appendChild(univLink);

        //DOMAINS--------------------------------------------------
        let univDomains = document.createElement("p");
        univDomains.innerHTML = JSON.stringify(element.domains[0]);
        oneUnivEl.appendChild(univDomains);

        //CHECKBOX--------------------------------------------------
        let checkbox = document.createElement("button");
        checkbox.innerHTML = "Save to favorites";
        checkbox.classList.add("addToFavBtn");
        oneUnivEl.appendChild(checkbox);
        let counter = document.querySelector(".counter");

        checkbox.addEventListener("click", function () {
          if (checkbox.classList.contains("checked")) {
            counter.innerHTML = parseInt(counter.innerHTML) - 1;
            checkbox.classList.remove("checked");
            checkbox.innerHTML = "Save to favorites";
          } else {
            counter.innerHTML = parseInt(counter.innerHTML) + 1;
            checkbox.classList.add("checked");
            checkbox.innerHTML = "Saved";
          }
        });
      });
    });
});

reset.addEventListener("click", function () {
  location.reload();
});
