const container = document.querySelector(".container");
const movieTitle = document.querySelector(".userInputTitle");
const moviePosterUrl = document.querySelector(".userInputPosterUrl");
const movieYear = document.querySelector(".userMovieYear");
const btn = document.querySelector(".button");
const movieTitleToDisplay = document.querySelector(".favoritemovieTitel");

let titleInStorage = localStorage.getItem("title");
let imageUrlInStorage = localStorage.getItem("imageUrl");
let yearInStorage = localStorage.getItem("year");

if(titleInStorage && imageUrlInStorage && yearInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(hsla(240, 51%, 38%, 0.5), rgba(138, 110, 110, 0.726)),url("${imageUrlInStorage}")`;
}


btn.addEventListener("click", () => {
let movieTitleInput = movieTitle.value;
let posterUrlInput = moviePosterUrl.value;
let movieYearInput = movieYear.value; 
localStorage.setItem("title",movieTitleInput);
localStorage.setItem("imageUrl", posterUrlInput);
localStorage.setItem("year", movieYearInput);
movieTitleToDisplay.textContent = movieTitleInput; 
container.style.backgroundImage = `linear-gradient(hsla(240, 51%, 38%, 0.5), rgba(138, 110, 110, 0.726)),
url("${posterUrlInput}")`;
movieTitle.value = "";
moviePosterUrl.value = "";
movieYear.value = ""; 


});


