// Functions that operate on other functions, either by taking them as arguments or by returning them, are known as higher-order functions.
// Higher-order functions allow us to abstract over *actions*, not just values.
// They come in several forms.
// For example, the following function creates new functions

function greaterThan(n) {
	return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11)); // --> true

// We can also have functions that change other functions.

function noisy(f) {
	return(...args) => {
		console.log("calling with", args);
		let result = f(...args);
		console.log("called with", args, ", returned", result);
	};
}

noisy(Math.min)(3, 2, 1); // --> calling with [3, 2, 1]
						  // --> calling with [3, 2, 1] , returned 1


// We can even write functions that provide new types of control flow.

function unless(test, then) {
	if (!test) then();
}

repeat(3, n => {
	unless(n % 2 == 1, () => {
		console.log(n, "is even"); // --> 0 is even
	});							   // --> 2 is even
});

// There is a built-in array method, *forEach*, that provides something like a for/of loop as a higher-order function.

["A", "B"].forEach(l => console.log(l)); // --> A
										 // --> B






// bringing this function back from previous file...
function repeat(n, action) {
	for (let i = 0; i < n; i++) {
		action(i);
	}
}
