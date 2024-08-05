// JavaScript goes out of its way to accept almost any program given, even programs that do odd things.
// Examples:

console.log(8 * null) // --> 0
console.log("5" - 1) // --> 4
console.log("5" + 1) // --> 51
console.log("five" * 2) // --> NaN
console.log(false == 0) // --> true

// When an operator is applied to the "wrong" type of value, JS will quietly...
// convert that value to the value that it needs, using a set of rules that often..
// aren't what is wanted or expected. 

// This is called type coercion. 
// The null in the first expression becomes 0, and the "5" in the second expression becomes..
// 5 (from string to number). Yet in the third expression, + tries string concatenation...
// before numeric addition, so the 1 is converted to "1" (from number to string).


