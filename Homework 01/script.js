// ## Movies renting App

// * Create a movie renting app
// * There should be an array of movie names
// * There should be an input and a search button
// * When the person enters a name of a movie it should search the array
// * If the name exists it should show an H1 element that says: "The movie can be rented" in green text
// * If the name does not exist it should show an H1 element that says: "The movie can't be rented" in red text
// * The input should not be case sensitive ( it should find the movie regardless of capital or small letters )

let input = document.getElementById("text");
let search = document.getElementById("search");
let h1 = document.getElementById("result");

search.addEventListener("click", function () {
  let movies = ["Wonka", "Napoleon", "Barbie"];
  let inputValue = input.value;
  for (let i = 0; i < movies.length; i++) {
    if (inputValue.toLowerCase() === movies[i].toLowerCase()) {
      h1.innerText = `The movie can be rented`;
      return;
    } else if (inputValue.toLowerCase() !== movies[i].toLowerCase()) {
      h1.innerText = `The movie can't be rented`;
    }
  }
});
