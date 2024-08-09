// json or JavaScript Object Notation is a popular serialization format to send data between different computers
// Rules: Must have key: value pairs where the key is always double quoted
// and the json cannot include any form of actually computation like funtion calls or bindings. Comments are also prohibited

// An example of json
// {
// 	"squirrel": false,
// 	"events": ["work", "touched tree", "pizza", "running"],
// }

// JavaScript includes functions like JSON.stringify and JSON.parse to convert data to and from this format.
// JSON.stringify takes a JS value and returns a JSON-encoded string.
// JSON.parse takes such a string and converts it to the value it encodes

// using JSON.stringify to turn object into JSON
let string = JSON.stringify({squirrel: false, events: ["weekend"]});
console.log(string); // --> {"squirrel": false, "events": ["weekend"]}

// using JSON.parse to parse JSON into a JS object
console.log(JSON.parse(string).events) // --> ["weekend"]

let object = {
	test: 1,
	stuff: ["hello"]
}

