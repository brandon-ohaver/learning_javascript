// in order to navigate an array, loops are used
let array_of_values = [1, 20, 400, 7, 10];

for (let index = 0; index < array_of_values.length; index++) {
	console.log(`The value is ${array_of_values[index]}`);
}

// there is a simple way of looping through an arrays elements
for (let entry of array_of_values) {
	console.log(`${entry} is the value`);
}
