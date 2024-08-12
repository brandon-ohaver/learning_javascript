const SCRIPTS = require('./scripts.js');

// To find the scripts in the data set that are still in use, the following functiong might be helpful.
// It filters out the elements in an array that don't pass a test

function filter(array, test) {
	let passed = [];
	for (let element of array) {
		if (test(element)) {
			passed.push(element);
		}
	}
	return passed;
}

// console.log(filter(SCRIPTS, script => script.living));

// There is a .filter() method that is a standard array method we should use from now on.

console.log(SCRIPTS.filter(script => script.direction == "ttb"));
