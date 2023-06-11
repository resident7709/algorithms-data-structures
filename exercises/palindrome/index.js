// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// * Built-in Function + Chaining Methods + RegExp
// function palindrome(str) {
//   const re = /[\W_]/g; // * /[^A-Za-z0-9]/g;

//   const lowRegStr = str.toLowerCase().replace(re, "");
//   const reversedStr = lowRegStr.split("").reverse().join("");

//   return reversedStr === lowRegStr;
// }

// * !RegExp
// function palindrome(str) {
//   const reversed = str.split("").reverse().join("");

//   return str === reversed; // * true or false
// }

// * Array.prototype.every()
// function palindrome(str) {
//   return str.split("").every((char, i) => {
//     return char === str[str.length - i - 1];
//   });
// }

// * for() Loop
function palindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

module.exports = palindrome;
