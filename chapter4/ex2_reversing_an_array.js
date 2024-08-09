function reverseArray(array) {
	newArray = [];
	for (let index = array.length -1; index >= 0; index--) newArray.push(array[index]);
	return newArray;
}

function reverseArrayInPlace(array) {
	let index = 0;
	for (let x = array.length - 1; x > index; x--) {
		let temp = array[index];
		array[index] = array[x];
		array[x] = temp;
		index++;
	} 
	return array;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let reversedArray = reverseArray(array);

console.log(reversedArray);
console.log(reverseArrayInPlace(array));

// book solution
// function reverseArray(array) {
// 	let output = [];
// 	for (let i = array.length - 1; i >= 0; i--) {
// 	  output.push(array[i]);
// 	}
// 	return output;
//   }
  
//   function reverseArrayInPlace(array) {
// 	for (let i = 0; i < Math.floor(array.length / 2); i++) {
// 	  let old = array[i];
// 	  array[i] = array[array.length - 1 - i];
// 	  array[array.length - 1 - i] = old;
// 	}
// 	return array;
//   }
