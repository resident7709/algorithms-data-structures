// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// * Built-in Function + Chaining Methods
// function reverse(str) {
//   return str.split("").reverse("").join("");
// }

// * for (...of) Loop
// function reverse(str) {
//   let reversed = "";

//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }

// * Recursion + Ternary Operator
function reverse(str) {
  return str === "" ? "" : reverse(str.substr(1)) + str.charAt(0);
}

// * Solution#4

reverse("apple");

module.exports = reverse;
