let todoList = ["jog", "clean room", "wash car", "sweep garage", "vacuum house"];

// pushes a task to the back of the queue
function remember(task) {
	todoList.push(task);
}

// grabs task from front of the queue
function getTask() {
	return todoList.shift();
}

// pushes a task to the front of the queue
function rememberUrgently(task) {
	todoList.unshift(task);
}

remember("feed cats");
console.log(`${getTask()}`);
rememberUrgently("pay bills");
console.log(`${getTask()}`)

// grabs the index of the value, but only shows the index of the first instance of the value from the front of the queue
console.log(todoList.indexOf("wash car"));

// grabs the index of the value, but only shows the index of the first instance of the value from the back of the queue
console.log(todoList.lastIndexOf("sweep garage"));

// using .slice() returns an array that has only the elements between them
let list = [1, 2, 3, 4, 5];
console.log(list.slice(2, 4));
console.log(list.slice(2));
// NOTE: The first arguement is inclusive so the index of 2 will be included in the returned array
// while the last argument is exclusive so the index of that argument wont be in the returned array

// using .concat() will glue arrays together to create an new array
let first_list = [1, 2, 3];
let second_list = [7, 8, 9];

// this creates a new array with second_list being added to the end of first_list
console.log(first_list.concat(second_list));

// the following function uses .slice() and .concat() to remove a specific element from an array using a given index
function remove(array, index) {
	return array.slice(0, index).concat(array.slice(index+1));
}

console.log(remove(["a", "b", "c", "d", "e"], 2)); // --> ["a", "b", "d", "e"]
