// The idea of abstraction is to turn something low level and abstract it out into something high level that can be easily discussed
// For example, say we want to perform a loop to log a range of numbers to the screen like so:
for (let i = 0; i < 10; i++) {
	console.log(i);
}

// Now lets say we want to "do something N times". We can abstract this into something specific like so:
function repeatLog(n) {
	for (let i = 0; i < n; i++) {
		console.log(i);
	}
}

repeatLog(10);

// This is almost what we want, but the this will "log numbers to the screen N times"
// We want something that can do any action, so lets abstract this even further and correctly with the following:

function repeat(n, action) {
	for (let i = 0; i < n; i++) {
		action(i);
	}
}

repeat(3, console.log);

// All three of these examples do the same thing, but the final example is abstracted to the point where it is easy to explain what it does.
// The third example also also allows us to pass any function to it, not just predefined functions.
// This allows us to do things like this now:

let labels = [];
repeat(5, i => {
	labels.push(`Unit ${i + 1}`);
});

console.log(labels);

// Notice that the action we passed was a small function!
