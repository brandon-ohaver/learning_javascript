// We saw the word *map* used previously for an operation that transforms a data structure by applying a function to its elements. 
// Confusing as it is, in programming the same word is also used for a related but rather different thing.

// A *map* is a data structure that associates values (the keys) with other values.
// For example, you might want to map names to ages.
// It is possible to use objects for this.

/*
let ages = {
	Boris: 39,
	Liang: 22,
	Julia: 62,
};

console.log(`Julia is ${ages["Julia"]}`); // --> Julia is 62

console.log("Is Jack's age known?", "Jack" in ages); // --> Is Jack's age known? false

console.log("Is toString's age known?", "toString" in ages) // --> Is toString's age known? true
*/

// Here, the object's property names are the people's names, and the property values are their ages.
// But we certainly didn't list anybody named toString in our map.
// Yet, because plain objects derive from *Object.prototype*, it looks like the property is there.

// As such, using plain objects as maps is dangerous. 
// There are several possible wasy to avoid this problem. 
// First, it is possible to create objects with no prototype.
// If you pass *null* to *Object.create*, the resulting object will not derive from *Object.prototype* and can safely be used as a map

console.log("toString" in Object.create(null)); // --> false

// Object property names must be strings.
// If you need a map whose keys can't easily be converted to strings -- such as objects -- you cannot use an object as your map.

// Fortunately, JavaScript comes with a class called *Map* that is written for this exact purpose.
// It stores a mapping and allows any type of keys.

let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Julia", 62);

console.log(`Julia is ${ages.get("Julia")}`); // --> Julia is 62

console.log("Is Jack's age known?", ages.has("Jack")); // --> Is Jack's age known? false

console.log(ages.has("toString")); // --> false


// The methods *set*, *get*, and *has* are part of the interface of the *Map* object.
// Writing a data structure that can quickly update and search a large set of values isn't easy, but we don't have to worry about that.
// SOmeone else did it for us, and we can go through this simple interface to use their work.

// If you do have a plain object that you need to treat as a map for some reason, it is useful to know that *Object.keys* returns only an object's own keys, not those in the prototype.
// As an alternative to the *in* operator, you can use the *hasOwnProperty* method, which ignores the object's prototype.

console.log({x:1}.hasOwnProperty("x")); // true

console.log({x:1}.hasOwnProperty("toString")); // false
