const SCRIPTS = require('./scripts.js');

// Consider how we would have written the previous example (finding the biggest script) without higher-order functions.
// The code is not that much worse.

function characterCount(script) {
	return script.ranges.reduce((count, [from, to]) => {
		return count + (to - from);
	}, 0);
}

let biggest = null;
for (let script of SCRIPTS) {
	if (biggest == null ||
		characterCount(biggest) < characterCount(script)) {
			biggest = script;
		}
}

console.log(biggest);

// There are a few more bindings, and the program is four lines longer.
// But it is still very readable.

// Higher-order functions start to shine why you need to compose operations.
// As an example, let's write code that finds teh average year of origin for living and dead scripts in the data set

function average(array) {
	return array.reduce((a, b) => a + b) / array.length;
}
console.log(Math.round(average(
	SCRIPTS.filter(s => s.living).map(s => s.year))));
// → 1165
console.log(Math.round(average(
	SCRIPTS.filter(s => !s.living).map(s => s.year))));
// → 204

// So the dead scripts in Unicode are, on average, older than the living ones.
// This is not a terribly meaningful or surprising statistic.
// But I hope you'll aggree that the code used to compute it isn't hard to read.
// You can see it as a pipeline: we start with all scripts, filter out the living (or dead) ones, take the years from thsoe, average them, and round the result.

// You could definitely write this computation as one big loop.

let total = 0, count = 0;
for (let script of SCRIPTS) {
	if (script.living) {
		total += script.year;
		count += 1;
	}
}

console.log(Math.round(total / count)) // --> 1165

// But it is harder to see what was being computed and how.
// And because intermediate results aren't represented as coherent values, it'd be a lot more work to extract something like overage into a separate function.

// In terms of what the computer is actually doing, these two approaches are also quite different.
// The first will build up new arrays when running *filter* and *map*, whereas the second computes only some numbers, doing less work.
// You can usually afford the readable approach, but if you're processing huge arrays, and doing so many times, the less abstract style might be worht the extra speed.
