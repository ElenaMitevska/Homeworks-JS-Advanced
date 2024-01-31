// There is a JSON file with students. Make a call to the file and get the following data from it:

// * All students with an average grade higher than 3
// * All female student names with an average grade of 5
// * All male student full names who live in Skopje and are over 18 years old
// * The average grades of all female students over the age of 24
// * All male students with a name starting with B and average grade over 2
// * Student emails of all female students with age between 20 and 30 years, ordered ascending
// * Students full names of students above 40, ordered descending
// * Count of students using google mail
// * The average age of female students living in Skopje

// Use higher order functions to find the answers
// **Link:** https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json

// fetch(
//   "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
// )
//   .then(function (response) {
//     console.log(response);
//     return response.json();
//   })
//   .then(function (response) {
//     console.log(response);
//     let avgGradeHihgerThan3 = response.filter((s) => s.averageGrade > 3);
//     console.log(avgGradeHihgerThan3);
//     // * All female student names with an average grade of 5
//     let femaleNamesWith5 = response
//       .filter(
//         (response) =>
//           response.gender === "Female" && response.averageGrade === 5
//       )
//       .map((response) => response.firstName);
//     console.log(femaleNamesWith5);
//     // * All male student full names who live in Skopje and are over 18 years old

//     let maleStudents = response
//       .filter(
//         (response) =>
//           response.city.toLowerCase() === "skopje" &&
//           response.gender.toLowerCase() === "male" &&
//           response.age > 18
//       )
//       .map((response) => response.firstName + " " + response.lastName);
//     console.log(maleStudents); // * The average grades of all female students over the age of 24

//     let averageGradeOfFemale = response
//       .filter(
//         (response) =>
//           response.age > 24 && response.gender.toLowerCase() === "female"
//       )
//       .map((response) => response.averageGrade);
//     console.log(averageGradeOfFemale); // * All male students with a name starting with B and average grade over 2
//     let maleStudentsNameB = response
//       .filter(
//         (response) =>
//           response.firstName.startsWith("B") &&
//           response.gender.toLowerCase() === "male" &&
//           response.averageGrade > 2
//       )
//       .map((response) => `${response.firstName} ${response.lastName}`);
//     console.log(maleStudentsNameB); // * Student emails of all female students with age between 20 and 30 years, ordered ascending
//     let femaleStudentsEmail = response
//       .filter(
//         (response) =>
//           response.gender.toLowerCase() === "female" &&
//           response.age >= 20 &&
//           response.age <= 30
//       )
//       .map((response) => response.email)
//       .sort();
//     console.log(femaleStudentsEmail); // * Students full names of students above 40, ordered descending
//     let studentsOver40 = response
//       .filter((response) => response.age > 40)
//       .map((response) => `${response.firstName} ${response.lastName}`)
//       .sort((a, b) => b.firstName - a.firstName); /// ne saka
//     console.log(studentsOver40); // * Count of students using google mail
//     let studentsUsingMail = response.filter((response) =>
//       response.email.includes("@google")
//     );

//     console.log(studentsUsingMail.length);
//     let femaleInSkopje = response
//       .filter(
//         (response) =>
//           response.gender.toLowerCase() === "female" &&
//           response.city.toLowerCase() === "skopje"
//       )
//       .map((response) => response.age);
//     let femaleInSkopjeAvg =
//       femaleInSkopje.reduce((acc, curr) => acc + curr, 0) /
//       femaleInSkopje.length;
//     console.log(femaleInSkopjeAvg);
//   })

//   .catch(function (response) {
//     console.log("The request failed" + response.status);
//   });
// ****2.  There is a JSON with products. Make a call and get the following data from it:

// All laptops, ordered by price descending
// The first grocery item
// Index of the first "Samsung" smartphone
// Check if there is any item from the brand "Sony"
// The name of the highest rated skincare product
// The average discount percentage of products with a rating above 4.5
// Find the product with the highest price
// Average price of all IPhone smartphones
// The product with the lowest price
// Link: https://dummyjson.com/products

// fetch("https://dummyjson.com/products")
//   .then(function (response) {
//     console.log(response);
//     return response.json();
//   })
//   .then(function (response) {
//     console.log(response);
//     console.log(response.products);
//     let allLaptops = response.products
//       .filter((response) => response.category.toLowerCase() === "laptops")
//       .map((response) => response.price)
//       .sort((a, b) => b.price - a.price);
//     console.log(allLaptops);
//     let firstGoceryItem = response.products.filter(
//       (response) => response.category.toLowerCase() === "groceries"
//     )[0];
//     console.log(firstGoceryItem);
//     let firstSamsung = response.products
//       .filter((response) => response.category.toLowerCase() === "smartphones")
//       .findIndex((response) => response.brand === "Samsung");
//     console.log(firstSamsung);

//     let findSony = response.products.find(
//       (response) => response.brand.toLowerCase() === "sony"
//     );
//     console.log(findSony);
//     let highestRatedSkincare = response.products
//       .filter((response) => response.category.toLowerCase() === "skincare")
//       .map((response) => response.rating)
//       .sort((a, b) => b - a)[0];
//     console.log(highestRatedSkincare);

//     let discountPercentage = response.products
//       .filter((response) => response.rating > 4.5)
//       .map((response) => response.discountPercentage);
//     console.log(discountPercentage);
//     let discountPercentageAvg =
//       discountPercentage.reduce((acc, curr) => acc + curr, 0) /
//       discountPercentage.length;
//     console.log(discountPercentageAvg);
//     let highestPrice = response.products
//       .map((response) => response.price)
//       .sort((a, b) => b - a)[0];
//     console.log(highestPrice);
//     let priceOfIphone = response.products
//       .filter((response) => response.title.includes("iPhone"))
//       .map((response) => response.price);
//     console.log(priceOfIphone);
//     let avgPriceOfIphone =
//       priceOfIphone.reduce((acc, curr) => acc + curr, 0) / priceOfIphone.length;
//     console.log(avgPriceOfIphone);
//     let lowestPriceProduct = response.products
//       .map((response) => response.price)
//       .sort((a, b) => a - b)[0];
//     console.log(lowestPriceProduct);
//   })
//   .catch(function (response) {
//     console.log("The request has failed" + response.status);
//   });
//  3.*****
//  There is a JSON with recipes. Make a call and get the following data from it:

// * All Desserts 🤤
// * Get the names of recipes with more than 30 reviews
// * All recipes that use Cinnamon as an ingredient
// * Recipes that are served as both Lunch and Dinner
// * The ingredients needed for "Mango Salsa Chicken" dish
// * Calculate the average number of calories for all American cusine recipes
// * The average cooking time of all pasta recipes
// * Find the recipe with the lowest number of reviews

// **Link:** https://dummyjson.com/recipes

// fetch("https://dummyjson.com/recipes")
// .then(function(response){
//     console.log(response)
//     return response.json();
// })
// .then(function(response){
//     console.log(response);

//     let namesOfRecepies = response.recipes.filter((response)=> response.reviewCount > 30).map((response)=> response.name);
//     console.log(namesOfRecepies);

//     let recepiesWithCinnamon = response.recipes.filter((response)=> response.ingredients.includes("Cinnamon"));
//     console.log(recepiesWithCinnamon);

//     let lunchAndDinnerRecepies = response.recipes.filter((response)=> response.mealType.includes("Dinner") && response.mealType.includes("Lunch"));
//     console.log(lunchAndDinnerRecepies);

//     let ingredientsForMangoSalsa = response.recipes.filter((response)=> response.id === 5).map((response)=> response.ingredients);
//     console.log(ingredientsForMangoSalsa);

//     let numberOfcalories = response.recipes.filter((response)=> response.cuisine === "American").map((response)=> response.caloriesPerServing);
//     console.log(numberOfcalories)

//     let cookingTimePasta = response.recipes.filter((response)=> response.tags.includes("Pasta")).map((response)=> response.cookTimeMinutes);
//     let cookingTimePastaAvg = cookingTimePasta.reduce((acc, curr)=> acc + curr) / cookingTimePasta.length;
//     console.log(cookingTimePastaAvg);

//     let lowestNumberOfReviews = response.recipes.map((response)=> response.reviewCount).sort
//     ((a,b)=> a - b)[0];
//     console.log(lowestNumberOfReviews);

// })
// .catch(function(response){
//     console.log("The request has failed:" + response.status);
// })
