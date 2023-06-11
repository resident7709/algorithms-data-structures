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

// * Array.prototype.reduce()
// function reverse(str) {
//   return str.split("").reduce((rev, char) => char + rev, "");
// }

// * Recursion + Ternary Operator
// function reverse(str) {
//   return str === "" ? "" : reverse(str.substr(1)) + str.charAt(0);
// }

// * for (...of) Loop
function reverse(str) {
  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

module.exports = reverse;
