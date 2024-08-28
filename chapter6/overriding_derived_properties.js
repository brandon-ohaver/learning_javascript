// used for this section
class Rabbit {
	constructor(type) {
		this.type = type;
	}
	speak(line) {
		console.log(`The ${this.type} rabbit says '${line}'`);
	}
}

/*
	SECTION STARTS HERE
*/ 

// When you add a property to an object, whether it is present in the prototype or not, the prototype is added to the object itself.
// If there was already a property with the same name in the prototype, this property will no longer affect the object, as it is now hidden behind the object's own property.

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

Rabbit.prototype.teeth = "small"
console.log(killerRabbit.teeth); // --> small

killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth); // --> long, sharp, and bloody

console.log(blackRabbit.teeth); // --> small

console.log(Rabbit.prototype.teeth); // --> small

// Overriding properties that exist in a prototype can be a useful thing to do.
// As the rabbit teeth example shows, overriding can be used to rexpress exceptional properties in instances of a more generic class  of objects, while letting the nonexceptional objects take a standard value from their prototypes.

// Overriding is also used to give the standard function and array prototypes a different *toString* method thant the basic object prototype.

console.log(Array.prototype.toString == Object.prototype.toString); // --> false

console.log([1, 2].toString()); // 1, 2

// Calling *toString* on an array gives a result similar to calling *.join(",")* on it -- it puts commas between the values in the array.
// Directly calling *Object.prototype.toString* with ana rray produces a different string. 
// THat function doesn't know about arrays, so it simply puts the word *object* and the name of the type between square brackets.

console.log(Object.prototype.toString.call([1,2])); // --> [object Array]
