class Rabbit {
	constructor(type) {
		this.type = type;
	}
	speak(line) {
		console.log(`The ${this.type} rabbit says '${line}'`);
	}
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

/* 
	SECTION STARTS HERE
*/

// When you call the *String* function (which converts a value to a string) on an object, it will call the *toString* method on that object to try to try to create a meaningful string from it.
// I mentioned that some of the standard prototypes define their own version of *toString* so they can create a string that contains more useful information that "[object Object]".
// You can also do that yourself.

Rabbit.prototype.toString = function() {
	return `a ${this.type} rabbit`;
};

console.log(String(blackRabbit)); // a black rabbit

// This is a simple instance of a powerful idea.
// When a piece of code is written to work with objects that have a certain interface -- in this case, a *toString* method -- any kind of object that happens to support this interface can be plugged into the code, ad it will just work.

// This technique is called polymorphism.
// Polymorphic code can work with values of different shapes, as long as they support the interface it expects.

// Early, I noted that a *for/or* loop can loop over several kinds of data structures.
// This is another case of polymorphism -- such loops expect the data structures to expose a specific interface, which arrays and strings do.
// And we can also add this interface to your own objects!
// But before we can do that, we need to know what symbols are.
