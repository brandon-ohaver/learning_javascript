const SCRIPTS = require("./scripts");

// Lets say we have an array of objects representing scripts, produced by filtering the SCRIPTS array somehow.
// But we want an array of names, which is easier to inspect.

// The *map* method transforms an array by applying a function to all of its elements and building a new array from the returned values.
// The new array will have the same length as the input array, but its contents will have been *mapped* to a new form by the function.

function map(array, transform) {
	let mapped = [];
	for (let element of array) {
		mapped.push(transform(element));
	}
	return mapped;
}

let rtlScripts = SCRIPTS.filter(script => script.direction == "rtl");
console.log(map(rtlScripts, script => script.name));

// Like *forEach* and *filter*, *map* is a standard array method.
