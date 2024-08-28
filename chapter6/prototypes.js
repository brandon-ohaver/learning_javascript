// Watch closely.

let empty = {};
console.log(empty.toString);

console.log(empty.toString());

// I pulled a property out of an empty object. Magic!

// Well, no really.
// I have simply been withholding information about the way JavaScript objects work.
// In addition to their set of properties, most objects have a prototype.
// A prototype is another object that is used as a fallback source of properties.
// When an object gets a request for a property that it does not have, its protoype will be searched for the property, then the prototype's prototype, and so on.

// So who is the prototype of that empty object?
// It is the great ancestral prototype, the entity behind almost all objects, Object.prototype.

console.log(Object.getPrototypeOf({}) == Object.prototype); // --> true

console.log(Object.getPrototypeOf(Object.prototype)); // --> null

// As you guess, *Object.getPrototypeOf* returns the prototype of an object.
// The prototype relations of JavaScript objects form a tree-shaped structure, and at the root of this structure sits *Object.prototype*.
// It provides a few methods that show up in all objects, such as *toString*, which converst an object to a string representation.

// Many objects don't directly have *Object.prototype* as their prototype but instead have another object that provides a different set of default properties.
// Functions derive from *Function.prototype*, and arrays derive from *Array.prototype*.

console.log(Object.getPrototypeOf(Math.max) == Function.prototype); // --> true

console.log(Object.getPrototypeOf([]) == Array.prototype) // --> true

// Such a prototype object will itself have a prototype, often *Object.prototype*, so taht it still indirectly provides methods like *toString*.
// You can use *Object.create* to create an object with a specific prototype.

let protoRabbit = {
	speak(line) {
		console.log(`The ${this.type} rabbit says '${line}'`);
	}
};

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");

// A property like *speak(line)* in an object expression is a shorthand way of defining a method.
// It creates a property called *speak* and gives it a function as its value.

// The "proto" rabbit acts as a container for the properties that are shared by all rabbits.
// An individual rabbit object, like the killer rabbit, contains properties that apply only to itself -- in this case its type -- and derives shared properties from its prototype.
