// JavaScript's prototype system can be intepreted as a somewhat informal take on an object-oriented concept called *classes*.
// A class defines the shape of a type of object -- what methods and properties it has.
// Such an object is called an *instance* of the class.

// Prototypes are useful for defining properties for which all instances of a class share the same values, such as methods.
// Properties that differ per instance, such as our rabbits' type property, need to be stored directly in the objects themselves.

// So to create an instance of a given class, you have to make an object that derives from the proper prototype, but you also have to make sure it, itself, has the properties that instances of this class are supposed to have. 
// This is what a constructor function does.

function makeRabbit(type) {
	let rabbit = Object.create(protoRabbit);
	rabbit.type = type;
	return rabbit;
}

// JavaScript provides a way to make defining this type of function easier.
// If you put the keyword *new* in front of a function call, the function is treated as a constructor.
// This means that an object with the right prototype is automatically created, bound to *this* in the function, and returned at the end of the function.

// The prototype object used when constructing objects is found by taking the *prototype* property of the constructor function.

function Rabbit(type) {
	this.type = type;
}
Rabbit.prototype.speak = function(line) {
	console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("weird");

/*
The above binding creates the following object

weirdRabbit = {
	type: "weird",
	speak(line) {
		console.log(`The ${this.type} rabbit says '${line}'`);
	}
}
*/

// Constructors (all functions, in fact) automatically get a property named *prototype*, which by default holds a plain, empty object that derives from *Object.prototype*.
// You can overwrite it with a new object if you want.
// Or you can add properties to the existing object, as the example does.

// By convention, the names of constructors are capitalized between the way a prototype is associated with a constructor (through its prototype property) and the way objects have a prototype (which can be found with Object.getPrototypeOf).
// The actual prototype of a constructor is *Function.prototype* since constructors are functions.
// Its prototype *property* holds the prototype used for instances created through it.

console.log(Object.getPrototypeOf(Rabbit) == Function.prototype); // --> true

console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype)
