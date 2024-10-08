// Consider a program that outputs all even numbers from 0 to 12. One way to write this is as follows:
console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);

// That works, but the idea of writing a program to make something less work, not more. 
// If we needed all even numbers less than 1,000, this approach would be unworkable.
// What we need is a way to run a piece of code multiple times. 
// This form of control flow is called a loop

// Looping control flow allows us to go back to some point in the program where we were before and repeat it with our current program state.
// If we combine this with a binding that counts, we can do somthing like this:
let number = 0;
while (number <= 12) {
	console.log(number);
	number = number + 2;
}

// A statement starting wiht the keyword *while* creates a loop.
// The word *while* is followed by an expression in parentheses and then a statement, much like *if*.
// The loop keeps entering that statement as long as the expression produces a value that gives *true* when converted to Boolean.

// The *number* binding demonstrates the way a binding can track the progress of a program. 
// Every time the loop repeats, *number* gets a value that is 2 more than its previous value.
// At the beginning of every repetition, it is compared with the number 12 to decide whether the program's work is finished.

// As an example that actually does something useful, we can now write a program taht calculates and show the value of 2^10.
// We use two bindings: one to keep track of our result and one to count how often we have multiplied this result by 2.
// The loop tests whether the second binding has reached 10 yet and, if not, updates both bindings.
let result = 1;
let counter = 0;
while (counter < 10) {
	result = result * 2;
	counter = counter + 1;
}
console.log(result);

// The counter could also have started at 1 and checked for <= 10, but for reasons that will become apparent later, it is a good idea to get used to counting from 0.

// A *do* loop is a control structure similar to a *while* loop.
// It differs only on one point: a *do* loop always executes its body at least once, and it starts testing whether it should stop only after that first execution.
// To reflect this, the test appears after the body of the loop.
let yourName;
do {
	yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);

// This program will force you to enter a name.
// It wil ask again and again until it gets something that is not an empty string.
// Applying the *!* operator will convert a value to Boolean type before negating it, and all strings except "" convert to true.
// This means the loop continues going round until you provide a non-empty name.
