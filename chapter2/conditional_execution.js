// Not all programs are straight roads.
// We may, for example, want to create a branching road, where the program takes the proper branch...
// based on the situation at hand. This is called *conditional execution*

// Conditional execution is created with the *if* keyword in JS.
// In the sample case, we want some code to be executed if, and only if, a certain condition holds.
// We might, for example, want to show the square of the input only if the input is actually a number.
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
	console.log("Your number is the square root of " + theNumber * theNumber);
}

// With this modification, if you enter "parrot", no output is shown.
// The *if* keyword executes or skips a statement depending on the value of the Boolean expression.
// The deciding expression is written after the keyword, between parentheses, followed by the statement to execute.

// The *Number.isNaN* function is a standard JavaScript function that returns *true* only if the argument it is given is NaN. The *Number* function happens to return NaN when you give it a string that doesn't represent a valid number.
// Thus, the condition translates to "unless *theNumber* is not-a-number, do this."

// The statement after the *if* is wrapped in braces ({ and }) in this example. 
// The braces can be used to group any number of statement into a single statement, called a *block*.
// You could also have omitted them in this case, since they hold only a single statement, but to avoid having to think about whether they are needed, most JavaScript programmers use them in every wrapped statement like this.
if (1 + 1 == 2) console.log("It's true"); // It's true

// You often won't just have code that executes when a condition holds true, but also code that handles the other case.
// This alternate path is represented by the second arrow in the diagram. You can use the *else* keyword, together with *if*, to create two separate, alternative execution paths.
theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
	console.log("Your number is the square root of " + theNumber * theNumber);
} else {
	console.log("Hey. Why didn't you give me a number?");
}

// If you have more than two paths to choose from, you can "chain" multiple *if/else* pairs together.
// Here's an example:
let num = Number(prompt("Pick a number"));

if (num < 10) {
	console.log("Small");
} else if (num < 100) {
	console.log("Medium");
} else {
	console.log("Large");
}

// The program will first check whether *num* is less than 10.
// If it is, it chooses that branch, shows "Small", and is done.
// If it isn't, it takes the *else* branch which itself contains a second *if*.
// If the second condition holds, that means the number is between 10 and 100, and "Medium" is shown.
// If it doesn't, the second and last *else* branch is chosen.
