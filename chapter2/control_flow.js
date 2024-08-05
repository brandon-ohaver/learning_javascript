// When a program contains more than one statement, the statements are executed as if they are a story, from top to bottom.
// This example program has two statements. 
// The first one asks the user for a number, and the second, which is executed after the first, shows the square of that number.
let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " + theNumber * theNumber);

// The function *Number* converst a value to a number.
// We need that conversion because the result of *prompt* is a string value, and we want a number.
// There are similar functions called String and Boolean that convert values to those types.

