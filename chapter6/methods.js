// Methods are nothing more than properties that hold function values.
// This is a simple method

let rabbit = {};
rabbit.speak = function(line) {
	console.log(`The rabbit says '${line}'`);
};

rabbit.speak("I'm alive.");

// Usually a method needs to do something with the object it was called on.
// When a function is called as a method -- looked up as a property and immediately call, as in *object.method() -- the binding called *this* in its body automatically points at the object that it was called on.

function speak(line) {
	console.log(`The ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");

hungryRabbit.speak("I could use a carrot right now.");

// You can think of *this* as an extra parameter that is passed in a different way.
// If you want to pass it explicitly, you can us a function's *call* method, which takes the *this* value as its first argument and treats further arguments as normal parameters.

speak.call(hungryRabbit, "Burp!");

// Since each function has its own *this* binding, whose value depends on the way it is called, you cannot refert to the *this* of the wrapping scope in a regular function defined with the *function* keyword.
// Arrow functions are different -- they do not bind their own *this* but can see the *this* binding of the scope around them.
// Thus, you can do something like the following code, whcih references *this* from iside a local function:

function normalize() {
	console.log(this.coords.map(n => n / this.length)); // if you try implementing the *function* keyword, the values will be undefined
}
normalize.call({coords: [0, 2, 3], length: 5});

// If I had written the arguments to *map* using the *function* keyword, the code wouldn't work.
