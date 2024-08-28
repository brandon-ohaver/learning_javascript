class Matrix {
	constructor(width, height, element = (x, y) => undefined) {
		this.width = width;
		this.height = height;
		this.content = [];

		for (let y = 0; y < height; y++) {
			for (let x = 0; x < width; x++) {
				this.content[y * width + x] = element(x, y);
			}
		}
	}

	get(x, y) {
		return this.content[y * this.width + x];
	}

	set(x, y, value) {
		this.content[y * this.width + x] = value;
	}
}

/*
	SECTION STARTS HERE
*/

// Some matrices are known to be symmetric. 
// If you mirror a symmetric matrix around its top-left-to-bottom-right diagonal, it stays the same.
// In other words, the value stored at x,y is always the same as that at y,x.

// Imagine we need a data structure like *Matrix* but one that enforces the fact that the matrix is and remains symmetrical.
// We could write it from scratch, but that would involve repeating some code very similar to what we already wrote.

// JavaScript's prototype system makes it possible to create a *new* class, much like the old class, but with new definitions for some of its properties.
// The prototype for the new class derives from the old prototype but adds a new definition for, say, the set method.

// In object-oriented programming terms, this is called inheritance.
// The new class inherits properties and behavior from the old class

class SymmetricMatrix extends Matrix {
	constructor(size, element = (x, y) => undefined) {
		super(size, size, (x, y) => {
			if (x < y) return element(y, x);
			else return element(x, y);
		});
	}

	set(x, y, value) {
		super.set(x, y, value);
		if (x != y) {
			super.set(y, x, value);
		}
	}
}

let matrix = new SymmetricMatrix(5, (x, y) => `${x}, ${y}`);
console.log(matrix.get(2,3));

// The use of the word *extends* indicates that this class shouldn't be directly based on the default *Object* prototype but on some other class.
// This is called the *superclass*. The derived class is the *subclass*.

// To initialize a *SymmetricMatrix* instance, the constructor calls its superclass's constructor through the *super* keyword.
// This is necessary because if this new object is to behave (roughly) like a *Matrix*, it is going to need the instance properties that matrices have.
// To ensure the matrix is symmetrical, the constructor wraps the *content* method to swap the coordinates for values below the diagonal line.

// The *set* method again uses *super* but this time not to call the constructor but to call a specific method from the superclass's set of methods.
// We are redefining set but do want to use the original behavior.
// Because this.set referes to the new set method, calling that wouldn't work.
// Inside class methods, super provides a way to call methods as they were defined in the superclass.

// Inheritance allows us to build slightly different data types from existing data types with relatively little work.
// It is a fundamental part of the object-oriented tradition, alongside encapsulation and polymorphism.
// But while the latter two are now generally regarded as wonderful ideas, inheritance is more controversial.

// Whereas encapsulation and polymorphism can be used to separate pieces of code from each other, reducing the tangledness of the overall program, inheritance fundamentally ties classes together, creating more tangle.
// When inheriting from a class, you usually have to know more about how it works than when simply using it.
// Inheritance can be a useful tool, and I use ti now and then in my own programs, but it shouldn't be the first tool you reach for, and you probably shouldn't actively go looking for opportunities to construct class hierarchies (family trees of classes).
