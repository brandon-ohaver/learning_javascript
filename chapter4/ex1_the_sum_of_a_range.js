function range(start, end, step = start < end ? 1 : -1) {
	let number_range = [];
	if (!(step < 0)) {
		for (number = start; number <= end; number += step) number_range.push(number);	
	} else {
		for (number = start; number >= end; number += step ) number_range.push(number);
	}
	return number_range;
}

function sum(array) {
	let summation = 0;
	for (let number of array) summation += number
	return summation;
}

array = range(5, 2);
console.log(sum(range(5, 2)));

// book solution
// function range(start, end, step = start < end ? 1 : -1) {
// 	let array = [];
  
// 	if (step > 0) {
// 	  for (let i = start; i <= end; i += step) array.push(i);
// 	} else {
// 	  for (let i = start; i >= end; i += step) array.push(i);
// 	}
// 	return array;
//   }
  
//   function sum(array) {
// 	let total = 0;
// 	for (let value of array) {
// 	  total += value;
// 	}
// 	return total;
//   }
