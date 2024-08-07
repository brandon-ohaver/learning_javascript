// Each binding as a *scope*, which is the aprt of the program in which the binding is visible.
// For bindings defined outside of any function or block, the scope is the whole program -- you can refer to such bindings wherever you want.
// These are called *global*.

// But bindings create for function parameters are declared inside a function can be referenced only in that function, so they are known as *local* bindings.
// Every time the function is called, new instances of these bindings are created.
// This provides some isolation between functions -- each function call acts in its own little world (its local environment) and can often be understood without knowing a lot about what's going on in the global environment.

// Bindings declared with *let* and *const* are in fact local to the *block* that they are declared in, so if you create one of those inside of a loop, the code before and after the loop cannot "see" it.
// In pre-2015 JavaScript, only functions created new scopes, so old-style bindings, created with *var* keyword, are visible throughout the whole function that they appear in -- or throughout the global scope, if they are not in a function.

let x = 10;
if (true) {
	let y = 20;
	var z = 30;
	console.log( x + y + z); // --> 60
}
// y is not visible here
console.log(x + z); // --> 40

// Each scope can "look out" into the scope around it, so x is visible inside the block in the example.
// The exception is when multiple bindings have the same name -- in that case, code can see only the innermost one. 
// For example, when the code inside the *halve* function refers to *n*, it is seeing its *own* *n*, not the global *n*.

const halve = function(n) {
	return n / 2;
};

let n = 10;
console.log(halve(100)); // --> 50
console.log(n);

// Nested Scope

// JavaScript distinguishes not just *global* and *local* bindings.
// Blocks and functions can be created inside other blocks and functions, producing multiple degrees of locality.

// For example, this function -- which outputs the ingredients needed to make a batch of hummus -- has another function inside it:

const hummus = function(factor) {
	const ingredient = function(amount, unit, name) {
		let ingredientAmount = amount * factor;
		if (ingredientAmount > 1) {
			unit += "s";
		}
		console.log(`${ingredientAmount} ${unit} ${name}`);
	};
	ingredient(1, "can", "chickpeas");
	ingredient(0.25, "cup", "tahini");
	ingredient(0.25, "cup", "lemon juice");
	ingredient(1, "clove", "garlic");
	ingredient(2, "tablespoon", "olive oil");
	ingredient(0.5, "teaspoon", "cumin");
};

// The code inside the *ingredient* function can see the *factor* binding from the outer function.
// But its local bindings, such as *unit* or *ingredientAmount*, are not visible in the outer function.

// The set of bindings visible inside a block is determined by the place of that block in the program text.
// Each local scope can also see all the local scopes that contain it, and all scopes can see the global scope.
// This approach to binding visibility is called *lexical scoping*.

