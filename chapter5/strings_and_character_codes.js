const SCRIPTS = require("./scripts");

// One use of the data set would be figuring out what script a piece of text is using.
// Let's go through a program that does this.

// Remember that each script has an array of character code ranges associated with it.
// So given a character code, we could use a function like this to find the corresponding script (if any):

function characterScript(code) {
	for (let script of SCRIPTS) {
		if (script.ranges.some(([from, to]) => {
			return code >= from && code < to;
		})) {
			return script;
		}
	}
	return null;
}

console.log(characterScript(121));

// The *some* method is another higher-order function.
// It takes a test function and tells you whether that function returns true for any of the elements in the array.

// But how do we get the character codes in a string?

// In Chapter 1, we mentioned that JavaScript strings are encoded as a sequence of 16-bit numbers.
// These are called *code units*.
// A Unicode character code was initially supposed to fit within such a unit (which gives you a little over 65,000 characters).
// When it became clear that wasn't going to be enough, many people balked at the need to use more memory per character.
// To address these concerns, UTF-16, the format used by JavaScript strings, was invented.
// It describes most common characters using a single 16-bit code unit but uses a pair of two such units for others.

// UTF-16 is generally considered a bad idea today.
// It seems almost intentionally designed to invited mistakes. It's easy to write programs that pretend code units and characters are the same thing.
// And if your langauge doesn't use two-unit characters, that will appear to work just fine.
// But as soon as someone tries to use such a program with some less common Chinese characters, it breaks.
// Fortunately, with the advent of emoji, everyboyd has started using two-unit characters, and the burden of dealing with such problems is more fairly distributed.

// Unfortunately, obvious operations on JavaScript strings, such as getting their length through the *length* property and accessing their content using square brackets, deal only with code units.

// Example:

// Two emoji characters, horse and shoe
let horseShoe = "🐴👟";
console.log(horseShoe.length); // --> 4

console.log(horseShoe[0]); // --> (Invalid half-character)

console.log(horseShoe.charCodeAt(0)); // --> 55357 (Code of the half-character)

console.log(horseShoe.codePointAt(0)); // --> 128052 (Actual code for horse emoji)

// JavaScript's *charCodeAt* method gives you a code unit, not a full character code.
// The *codePointAt* method, added later, does give a full Unicdoe character.
// So we could use that to get characters from a string. 
// But the argument passed to *codePointAt* is still an index into the sequence of code units.
// So to run over all characters takes up one or two code units.

// Earlier, we mentioned that a *for/of* loop can also be used on strings.
// Like *codePointAt*, this type of loop was introduced at a time where people were acutely aware of the problems with UTF-16.
// When you use it to loop over a string, it gives you real characters, not code units.

let roseDragon = "🌹🐉";
for (let char of roseDragon) {
	console.log(char);
}

// If you have a character (which will be a string of one or two code units), you can use *codeAtPoint(0)* to get its code.


