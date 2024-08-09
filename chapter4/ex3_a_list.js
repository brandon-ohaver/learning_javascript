function arrayToList(values) {
	let list = null;
	for (let x = values.length - 1; x >= 0; x--) {
		list = { value: values[x], rest: list};
	}
	return list;
}

function listToArray(list) {
	let array = [];
	for (let node = list; node; node = node.rest) {
	  array.push(node.value);
	}
	return array;
}

function prepend(value, list) {
	return { value, rest: list }
} 

function nth(list, position) {
	if (!list) return undefined;
	else if (position == 0) return list.value;
	else return nth(list.rest, position - 1);
}

let values = [1, 2, 3];
let lists = arrayToList(values);
console.log(lists);

console.log(listToArray(lists));
console.log(listToArray(prepend(10, lists)));
console.log(lists);
console.log(nth(lists, 4));
