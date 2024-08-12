const SCRIPTS = require('./scripts.js');

// We have a *characterScript* function and a way to correctly loop over characters.
// The next stop is to count the characters that belong to each script.
// The following counting abstraction will be useful there:

function countBy(items, groupName) {
	let counts = [];
	for (let item of items) {
		let name = groupName(item);
		let known = counts.findIndex(c => c.name == name);
		if (known == -1) {
			counts.push({name, count: 1});
		} else {
			counts[known].count++;
		}
	}
	return counts;
}

console.log(countBy([1, 2, 3, 4, 5], n => n > 2));

// The *countBy* function expects a collection (anything that we can loop over with *for/of*) and a function that computes a group name for a given element.
// It returns an array of objects, each of which names a group and tells you the number of elements that were found in that group.

// It uses another array method -- *findIndex*.
// This method is somewhat like *indexOf*, but instead of looking for a specific value, it finds the first value for which the given function returns true.
// Like *indexOf*, it returns -1 when no such element is found.

// Using *countBy*, we can write the function that tells us which scripts are used in a piece of text

function textScripts(text) {
	let scripts = countBy(text, char => {
		let script = characterScript(char.codePointAt(0));
		return script ? script.name : "none";
	}).filter(({name}) => name != "none");

	let total = scripts.reduce((n, {count}) => n + count, 0);
	if (total == 0) return "No scripts found";

	return scripts.map(({name, count}) => {
		return `${Math.round(count * 100 / total)}% ${name}`;
	}).join(", ");
}


console.log(textScripts('国的狗英国的狗 "woof", 俄斯的狗"тяв'));

// The function first counts the character by name, using *charactersScript* to assign them a name and falling back to the string "none" for characters that aren't part of any script.
// The *filter* call drops the entry for "none" from the resulting array since we aren't interested in those characters.

// To be able to compute percentages, we first need the total number of characters that belong to a script, which we can compute with *reduce*.
// If no such characters are found, the function returns a specific string.
// Otherwise, it transforms the counting entries into readable string with *map* and then combines them with *join*.







// pulled from previous section
function characterScript(code) {
	for (let script of SCRIPTS) {
		if (script.ranges.some(([from, to]) => {
			return code >= from && code < to;
		})) {
			return script;
		}
	}
	return null;
}
