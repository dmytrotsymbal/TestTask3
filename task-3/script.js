let input = document.querySelector("#input");

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
      });
    });
});
