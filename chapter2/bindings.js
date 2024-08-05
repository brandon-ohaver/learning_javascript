// To catch and hold values, JS provides bindings, or variables
let caught = 5 * 5;

// Bindings/Variables are a second kind of statement.
// The special keyword *let* indicates that this sentence is going to define a binding.
// It is followed by the name of the binding and, if we want to immediately give it a value, by an = operator and an expression
// The previous statement creates a binding named caught and uses it to grab hold of the number that is produced...
// by multiplying 5 by 5.

// After a binding has been defined, its name can be used as an expression.
// The value of such an expression is the value the binding currently holds.

let ten = 10;
console.log(ten * ten); // --> 100

// Using the = operator on an existing binding disconnects them from their current value and has them point to a new one.
let mood = "light";
console.log(mood); // --> light

mood = "dark";
console.log(mood); // --> dark

// Another example:
let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt); // --> 105

// You can use a *let* to define two bindings
let one = 1, two = 2;
console.log(one + two); // --> 3

// The keywords *var* and *const* can also be used to create bindings, in a way similar to *let*
var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name); // --> Hello Ayda

// The first, *var*, is the way bindings were declared in pre-2015 JS.
// The word *const* stands for constant. It defines a constant binding, which points at the same value for as long as it lives.
