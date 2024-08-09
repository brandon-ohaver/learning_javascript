function deepEqual(x, y) {
	if (x === y) return true;
	else if(x === null || y === null) return false;
	else if(typeof x == "object" && typeof y == "object") {
		if (Object.keys(x).length !== Object.keys(y).length) return false;
		for (const key of Object.keys(x)) {
			if (!Object.keys(y).includes(key) || !deepEqual(x[key], y[key])) return false;
		}
		return true;
	}
}

let object1 = {here: {is: "an"}, object: 2};
let object2 = {value: 12};
let object3 = {value: 13};

console.log(deepEqual(object1, {here: {is: "an"}, object: 2}));

// book solution
// function deepEqual(a, b) {
// 	if (a === b) return true;
	
// 	if (a == null || typeof a != "object" ||
// 		b == null || typeof b != "object") return false;
  
// 	let keysA = Object.keys(a), keysB = Object.keys(b);
  
// 	if (keysA.length != keysB.length) return false;
  
// 	for (let key of keysA) {
// 	  if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
// 	}
  
// 	return true;
//   }
