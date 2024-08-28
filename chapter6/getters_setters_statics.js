// Interfaces often consist mostly of methods, but it is also okay to include properties that hold non-function values.
// For example, *Map* objects have a *size* property that tells you have many keys are stored in thme.

// It is not even necesary for such an object to compute and store such a property directly in the instance.
// Even properties that are accessed directly may hide a method call.
// Such methods are called *getters*, and they are defined by writing *get* in front of the method name in an object expression or class declaration.

let varyingSize = {
	get size() {
		return Math.floor(Math.random() * 100);
	}
};

console.log(varyingSize.size);
console.log(varyingSize.size);

// Whenever someone reads from this object's *size* property, the associated method is called.
// You can do a similar thing when a property is written to, using a *setter*.

class Temperature {
	constructor(celsius) {
		this.celsius = celsius;
	}

	get fahrenheit() {
		return this.celsius * 1.8 + 32;
	}

	set fahrenheit(value) {
		this.celsius = (value -32) / 1.8;
	}

	static fromFahrenheit(value) {
		return new Temperature((value - 32) / 1.8);
	}
}

let temp = new Temperature(22);
console.log(temp.fahrenheit); // --> 71.6
temp.fahrenheit = 86;
console.log(temp.celsius) // --> 30

// The *Temperature* class allows you to read and write the temperature in either degrees Celsius or degree Fahrenheit, but internally it stores only Celsius and automatically converts to and from Celsius in the *fahrenheit* getter and setter.

// Seomtimes you want to attach some properties directly to your constructor fucntion, rather than tot he prototype.
// Such methods won't have access to a class instance but can, for example, be used to provide additional ways to create instances.

// Inside a class declaration, methdos that have *static* written before their name are stored on the constructor. So the *Temperature* calss allows you to write *Temperature.fromFahrenheit(100)* to create a temperature using degrees Fahrenheit.
