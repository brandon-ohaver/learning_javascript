// inorder to make a function accept ass many arguments as needed, add three dots before the function's last parameter
function max(...numbers) {
	let result = -Infinity;
	for (let number of numbers) {
		if (number > result) result = number;
	}
	return result;
}

console.log(max(4, 1, 9, -2)); // --> 9

let numbers = [5, 1, 7];

// when passing an array, using the (...) operator "spreads" the array out (I like to think that it breaks the values free of the array)
console.log(max(...numbers));
console.log(...numbers);
