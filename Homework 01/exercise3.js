// StarWars Person Stats

// Create a button
// When the button is clicked, call the StarWars api for the first person. \
// Print the person name in an **h1** tag. \
// Print the person stats in a **table**:

// * Height
// * Weight
// * Eye color
// * Hair color

// **URL:** https://swapi.dev/api/people/1 \

// function printPerson(resultElement, response) {
//   let resultList = document.getElementById("table").children;
//   resultList.innerHTML = "";
//   resultList.innerHTML = `<tr><th> Height</th> <th> Weight </th> <th> Eye Color </th> <th> Hair color </th> <tr> <td> ${response.height} </td> <td> ${response.mass} </td> <td> ${response.eye_color} </td> <td>${response.hair_color} </td> </tr>`;
// }

let button = document.getElementById("btn");
let result = document.getElementById("table");

button.addEventListener("click", function () {
  fetch("https://swapi.dev/api/people/1")
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      let result = document.getElementById("two");
      result.innerHTML = "";
      result.innerHTML = `<td> ${response.height} </td> <td> ${response.mass} </td> <td> ${response.eye_color} </td> <td>${response.hair_color} </td>`;
      let h1 = document.getElementById("h1");
      h1.innerText = `${response.name}`;
    })
    .catch(function (error) {
      console.log(error);
    });
});
