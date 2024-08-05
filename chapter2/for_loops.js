// Many loops follow the pattern shown in the *while* examples. 
// First a "counter" binding is created to track the progress of the loop.
// Then comes a *while* loop, usually with a test expression that checks whether the counter has reached its end value.
// At the end of the loop body, the counter is updated to track progress.

// Because this pattern is so common, JavaScript and similar languages provide a slightly shorter and more comprehensive from, the *for* loop.
for (let number = 0; number <= 12; number = number + 2) {
	console.log(number);
}

// This program is exactly equivalent to the earlier even-number-printing example.
// The only change is that all the statements that are related to the "state" of the loop are grouped after *for*.

// The parentheses after a *for* keyword must contain two semicolons.
// The part before the first semicolon *initializes* the loop, usually by defining a binding.
// The second part is the expression that *checks* whether the loop must continue.
// The final part *updates* the state of the loop after every iteration.

// In most cases, this is shorter and clearer than a *while* construct.
// This is the code that computers 2^10 using *for* instead of *while*:
let result = 1;
for (let counter = 0; counter < 10; counter = counter +1) {
	result = result * 2;
}
console.log(result); // 1024
