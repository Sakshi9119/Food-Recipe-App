const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search-result");
const container = document.querySelector(".container");
let searchQuery = "";
const APP_ID = "9a7c2936";
const APP_key = "05d047bf2841023a20c4b39bcca990a7";
// console.log(container)
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value;
  fetchAPI();
});

async function fetchAPI() {
  const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20`;
  const response = await fetch(baseURL);
  const data = await response.json();
  generateHTML(data.hits);
  console.log(data);
}

function generateHTML(results) {
  container.classList.remove("initial");
  let generatedHTML = "";
  results.map((result) => {
    generatedHTML += `
      <div class="item">
        <img src="${result.recipe.image}" alt="img">
        <div class="flex-container">
          <h1 class="title">${result.recipe.label}</h1>
          <a class="view-button" target="_blank" href="${
            result.recipe.url
          }">View</a>
        </div>
        <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
        <p class="item-data">Diet label: ${
          result.recipe.dietLabels.length > 0
            ? result.recipe.dietLabels
            : "No Data Found"
        }</p>
        <p class="item-data">Health labels: ${result.recipe.healthLabels}</p>
      </div>
    `;
  });
  searchResultDiv.innerHTML = generatedHTML;
}

// *********************
// This Code is for only the floating card in right bottom corner
// **********************

const WebCifarIcon = document.querySelector("#webCifar-icon");
const WebCifarEl = document.querySelector("#webCifar");
const close = WebCifarEl.querySelector(".close");
const youtubeLink = document.querySelector(".youtubeLink");

WebCifarIcon.addEventListener("click", () => {
  WebCifarEl.classList.add("active");
});
close.addEventListener("click", () => {
  WebCifarEl.classList.remove("active");
});

youtubeLink.setAttribute("href", "https://youtu.be/x8EY0BlhPGk");
