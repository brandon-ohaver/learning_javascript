function every(array, func) {
	for (let element of array) {
		if (!func(element)) return false;
	}
	return true;
}

function every2(array, func) {
	return !array.some(element => !func(element));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

console.log(every2([1, 3, 5], n => n < 10));
// → true
console.log(every2([2, 4, 16], n => n < 10));
// → false
console.log(every2([], n => n < 10));
// → true


// book solution
// function every(array, predicate) {
// 	for (let element of array) {
// 	  if (!predicate(element)) return false;
// 	}
// 	return true;
//   }
  
//   function every2(array, predicate) {
// 	return !array.some(element => !predicate(element));
//   }
