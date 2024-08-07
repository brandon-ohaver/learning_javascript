function countChar(string, char) {
	let count = 0;
	for(let position = 0; position < string.length; position++) {
		if (string[position] === char) count++
	}
	return count;
}

function countsBs(string) {
	return countChar(string, "B");
}

let test = "BbBbbbBbbbB";

console.log(countsBs(test));
console.log(countChar("CatCrack", "C"));
