const SCRIPT = require('./scripts.js');

// GOAL: take in a string of varying characters and determines the dominant writing direction
function dominantDirection(text) {
	let scripts = countBy(text, char => {
		let script = characterScript(char.codePointAt(0));
		return script ? script.direction : "none";
	}).filter(({name}) => name != "none");

	let total = scripts.reduce((n, {count}) => n + count, 0);
	if (total == 0) return "No scripts found";

	return scripts.reduce((a,b) => a.count > b.count ? a : b).name;
}

// takes in a code to determine what script the code comes from
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

// 
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

console.log(dominantDirection("Hey, مساء الخير"));

// uses countBy to catergorize each direction and how many of each happens in scripts.js
// console.log(countBy(SCRIPTS, n => {
// 	if (n.direction == "ltr") return n.direction;
// 	else if(n.direction == "rtl") return n.direction;
// 	else if (n.direction == "ttb") return n.direction;
// }))

// book solution
// function dominantDirection(text) {
// 	let counted = countBy(text, char => {
// 	  let script = characterScript(char.codePointAt(0));
// 	  return script ? script.direction : "none";
// 	}).filter(({name}) => name != "none");
  
// 	if (counted.length == 0) return "ltr";
  
// 	return counted.reduce((a, b) => a.count > b.count ? a : b).name;
//   }
