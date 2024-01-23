// ## Exercise 1

// Make 3 functions:

// 1. Function that takes a number through a parameter and returns how many digits that number has
// 2. Function that takes a number through a parameter and returns if its even or odd
// 3. Function that takes a number through a parameter and returns if its positive or negative

// Create a function that takes a number through a parameter and calls all three functions for the number that was passed.
// It should show the results in the console.

// #### Ex:

// **Code:** getNumberStats(-25);
// **Console:** 2 Digits, Odd, Negative

// function numberOfDigits(num) {
//   if (typeof parseInt(num) === "number") {
//     return num.toString().length;
//   }
// }

// function evenOrOdd(num) {
//   if (num % 2 === 0) {
//     return `The number is even`;
//   } else if (num % 2 === 1) {
//     return `The number is odd`;
//   }
// }

// function positiveOrNegative(num) {
//   if (num >= 0) {
//     return `The number is positive`;
//   } else {
//     return `The number is negative`;
//   }
// }

// function getNumberStats(num) {
//   return `${numberOfDigits(num)} Digits, ${evenOrOdd(
//     num
//   )}, ${positiveOrNegative(num)}`;
// }

// ## Exercise 2

// Create 2 variables with arrow functions.

// 1. First arrow function will accept two parameters, one for element and one for color. The function should change the
//    given element text color with the color given from the second color parameter. If no parameter is passed for color,
//    the default value is **black**.
// 2. Second arrow function will accept two parameters, one for element and one for textSize. The function should change
//    the given element text size to the number given from the second textSize parameter. If no parameter is passed for
//    textSize, the default value is 24.

// Create an HTML document with two inputs, a button and an h1 header with some text. The first input should be for text
// size and the second for color. When the button is clicked the h1 header should change according to the input values (
// change size as the first input value and color as the second input value ). Use the functions that we declared earlier
// and use arrow function for the event listener of the button.

// #### Ex:

// **Input1: ** Person enters 28
// **Input2: ** Person enters red
// **Result: ** The h1 text should change to size 28 and color red

// let firstVar = (element, color = "black") => {
//   return (element.style.color = color);
// };
// let h1 = document.getElementById("one");
// let button = document.getElementById("btn");

// let secondVar = (element, textSize = "24px") => {
//   return (element.style.fontSize = textSize);
// };

// button.addEventListener("click", (textSize, color) => {
//   let input1 = document.getElementById("text").value;
//   let input2 = document.getElementById("color").value;
//   return `${firstVar(h1, input2)} , ${secondVar(h1, input1)}`;
// });

// ## Exercise 3

// Write an anonymous function that takes an array as a parameter and returns the square of each element.

// *Hint: square = number * number or number on power 2.

// let anonymous = function (numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i] * numbers[i]);
//   }
// };
// let test = anonymous([2, 4, 6]);

// ## Exercise 4

// Write a self-invoked function that calculates the factorial of a given number and logs it to the console.
// BONUS: Provide the input from the HTML, and print the result in the HTML.

// *Hint: refer the examples from the class code.

// (function (num) {
//   let result = 1;
//   if (num === 0) {
//     return 1;
//   } else {
//     for (let i = num; i > 1; i--) {
//       result = result * i;
//     }
//     console.log(result);
//   }
// })(5);

// ## Exercise 5

// Write an arrow function that takes a string and returns a new string with each word reversed.
// Example: 'hello from qinshift academy' ==> 'olleh morf tfihdniq ymedaca'
// *You don't have to handle uppercase and lowercase, make the example all lowercase
// BONUS: Provide the input from the HTML, and print the result in the HTML.
// let arrowFunc = (strings) => {
//   let reversed = "";
//   for (let c of strings) {
//     reversed = c + reversed;
//   }
//   return reversed;
// };
// let buttonTwo = document.getElementById("btnTwo");
// buttonTwo.addEventListener("click", function () {
//   let inputString = document.getElementById("textTwo").value.toLowerCase();
//   let myFunc = arrowFunc(inputString);
//   let h2 = document.getElementById("strings");
//   h2.innerText = `${myFunc}`;
// });

// ## Exercise 6

// Create an anonymous function that takes a given array and returns the product of all positive numbers.
// Test array: let array = [-10, 5, 7894, NaN, 'Hello world', Infinity, false, [Object, Object], 25, name => `Hello ${name}`, -Infinity, ['hi', 28, -93, true], {
//   name: 'Bob',
//   age: 23,
// }, undefined, 14, null, 159, 0, -11];

// *Hints:
// 1. Iterate over each element of the array
// 2. Find a way to check if each element is number
// 3. Check if the number is a positive number and if true, store it in a filtered array with all positive numbers
// 4. Multiply all positive numbers

// let positiveNum = function (array) {
//   let filteredArray = [];
//   for (let el of array) {
//     if (typeof el === "number" && el >= 0) {
//       filteredArray.push(el);
//     }
//   }
//   console.log(filteredArray);
//   return filteredArray;
// };

// let test = positiveNum([
//   -10,
//   5,
//   7894,
//   NaN,
//   "Hello world",
//   Infinity,
//   false,
//   [Object, Object],
//   25,
//   (name) => `Hello ${name}`,
//   -Infinity,
//   ["hi", 28, -93, true],
//   {
//     name: "Bob",
//     age: 23,
//   },
//   undefined,
//   14,
//   null,
//   159,
//   0,
//   -11,
// ]);

// ## Exercise 7

// Create an arrow function that takes a string and returns the number (count) of vowels contained within it. (Use anonymous functions/Arrow functions for the implementation)
// BONUS: Provide the input from the HTML, and print the result in the HTML.

// let myString = (string) => {
//   let total = 0;
//   let vowelArray = ["a", "e", "o", "u", "i"];
//   let splitString = string.toLowerCase().split("");
//   console.log(splitString);

//   for (let c of splitString) {
//     if (vowelArray.includes(c)) {
//       total++;
//     }
//   }
//   return total;
// };
// let buttonThree = document.getElementById("three");
// buttonThree.addEventListener("click", function () {
//   let inputString2 = document.getElementById("vowels").value;
//   let h3 = document.getElementById("h3");
//   let myFunc2 = myString(inputString2);
//   console.log(myFunc2);
//   h3.innerHTML = `${inputString2}`;
// });
// * Hint: vowels: a, e, i, o, u

// ## Additional notes

// MOST IMPORTANT: DO NOT try to solve this exercise (or any other more complicated problem) within single function. Rather split the logic into multiple parts and solve them step by step. Once each of that parts is solved, combine the solutions into one final solution.
// Don't ask CHAT GPT to solve the exercises, and don't use any other shortcuts to get quicker the solution. Everything from the exercises can be solved with the material we have learned so far :)

// Good luck!
