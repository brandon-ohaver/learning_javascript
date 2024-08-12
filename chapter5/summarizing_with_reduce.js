const SCRIPTS = require('./scripts.js');

// Another common thing to do with arrays is to compute a single value from them.
// Our recurring example, summing a collection of numbers, is an instance of this.
// Another example is finding the script with the most characters.

// The higher-order operation that represents this pattern is called *reduce* (sometimes also called *fold*).
// It builds a value by repeatedly taking a single element from the array and combining it with the current value.
// When summing numbers, you'd start witht he number zero and, for each element, add that to the sum.

// The paramters to *reduce* are, apart from the array, a combining function and a start value.
// This function is a little less straightforward than *filter* and *map*, so take a close look at it:

function reduce(array, combine, start) {
	let current = start;
	for (let element of array) {
		current = combine(current, element);
	}
	return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));

// The standard array method *reduce*, which of course corresponds to this function, has an added convenience.
// I fyour array contains at least one element, you are allowed to leave off the start argument.
// The method will take the first element of the array as its start value and start reducing at the second element.

console.log([1, 2, 3, 4].reduce((a, b) => a + b));

// To use *reduce* (twice) to find the script with the most character, we can write something like this:

function characterCount(script) {
	return script.ranges.reduce((count, [from, to]) => {
		return count + (to - from);
	}, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
	return characterCount(a) < characterCount(b) ? b : a;
}));


// The *characterCount* function reduces the ranges assigned to a script by summing their sizes.
// Note the use of destructuring in the parameter list of the reducer function.
// The second call to *reduce* then uses this to find the largest script by repeatedly comparing two scripts and returning the larger one.


// The Han script has more than 89,000 characters assigned to it in the Unicode standard, making it by far the biggest writing system in the data set.
// Han is a script (someimtes) used for Chinese, Japanese, and Korean text.
// Those languages share a lot of characters, though they tend to write them differently.
// The (US-based) Unicdoe Consortium decided to treat them as a single writing system to save character codes.
// This is called Han Unification and still makes some people very angry

console.log(characterCount(SCRIPTS[0]));
