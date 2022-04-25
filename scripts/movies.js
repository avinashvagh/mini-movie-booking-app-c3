// // Implement debouncing for network request
// // On clicking book now store the selected movie in localstorage as key "movie"
// // so that you can retrive it on checkout.html page
// const movieSearchBox = document.querySelector("#movie_search-box");
// const searchList = document.querySelector("#search-list");
// const resultGrid = document.querySelector("#result-grid");

// //load movies from api

// async function loadMovies(searchTerm) {
//   const url =
//     "http://www.omdbapi.com/?i=${searchTerm}tt3896198&apikey=eb175134";

//   const res = await fetch(`{url}`);
//   const data = await res.json();
//   console.log(data);

//   if(data.Response === "True")displayMoviesList(data.Search);

// }

// function findMovies() {
//     let searchTerm = (movieSearchbox,value.trim()
//     if(searchTerm.length > 0){

//         loadMovies(searchTerm);

//     }   else {
//         alert("Please enter a movie name");
//     }
//     )

//     movieSearchBox.addEventListener("keyup",findMovies);
// }

// var values = JSON.parse(localStorage.getItem("amount") || "[]");
// var arr = JSON.parse(localStorage.getItem("data") || "[]");

// document.getElementById("wallet").append(values);

// function submit() {
//   let movie = document.getElementById("search").value;

//   let url = "http://www.omdbapi.com/?i=tt3896198&apikey=eb175134";
//   fetch(url)
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (res) {
//       getdata(res.Search);
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
//   function getdata(data) {
//     if (data === undefined) {
//       return false;
//     }
//     data.map(function (elem) {
//       let div = document.createElement("div");
//       let title = document.createElement("h3");
//       title.innerText = elem.Title;
//       let image = document.createElement("img");
//       image.setAttribute("src", elem.Poster);
//       image.setAttribute("class", "images");
//       var buy = document.createElement("button");
//       buy.innerText = "Buy";
//       buy.setAttribute("class", "book_now");
//       buy.addEventListener("click", function () {
//         arr.push(elem);
//         localStorage.setItem("data", JSON.stringify(arr));
//         window.location.href = "checkout.html";
//       });
//       div.append(image, title, buy);
//       document.querySelector("#movies").append(div);
//     });
//   }
// }
