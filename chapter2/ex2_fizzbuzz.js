for(counter = 1; counter < 101; counter++) {
	if (counter % 3 == 0 && counter % 5 == 0) {
		console.log("FizzBuzz");
	} else if (counter % 3 == 0) {
		console.log("Fizz");
	} else if (counter % 5 == 0) {
		console.log("Buzz");
	} else {
		console.log(counter);
	}
}

// book solution
// for (let n = 1; n <= 100; n++) {
// 	let output = "";
// 	if (n % 3 == 0) output += "Fizz";
// 	if (n % 5 == 0) output += "Buzz";
// 	console.log(output || n);
//   }
