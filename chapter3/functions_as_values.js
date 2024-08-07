// A function binding usually just acts as a name for a specific piece of the program.
// Such a binding is defined once and never changed.
// This makes it easy to confuse the function and its name.

// But the two are different.
// A function value can do all the things that other values can do -- you can use it in arbitrary expressons, not just call it.
// It is possible to store a function vlaue in a new binding, pass it as an argument to a function, and so on.
// Similarly, a binding that holds a function is still just a regular binding and can, if not constant, be assigned a new value, like so:

let launchMissiles = function() {
	missileSystem.launch("now");
};

if (safeMode) {
	launchMissiles = function() {/* do nothing */}
}

// It is disussed in Chapter 5 on the interesting things that can be done by passing around function values to other functions.
