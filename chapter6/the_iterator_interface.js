// The object given to a *for/of* loop is expected to be iterable.
// This means it has a method named with the *Symbol.iterator* symbol (a symbol value defined by the language, stored as a property of the *Symbol* function).

// When called, that method should return an object that provides a second interface, *iterator*. 
// This is the actual thing that iterates.
// It has a *next* method that returns the next result.
// That result should be an object with a *value* property that provides the next value, if there is one, and a *done* property, whcih should be true when there are no more results and *false* otherwise.

// Note that the *next*, *value*, and *done* property names are plain strings, not symbols.
// Only *Symbol.interator*, which is likely to be added to a lot of different objects, is an actual symbol.

// We can directly use this interface ourselves

let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next()); // --> {value: "0", done: false}

console.log(okIterator.next()); // --> {value: "K", done: false}

console.log(okIterator.next()); // --> {value: undefined, done: true}

// Let's implement an interable data structure.
// We'll build a matrix class, acting as a two-dimensional array.

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

// The class stores its content in a single array of *width X height* elements.
// The elements are stored row by row, so, for example, the third element in the fifth row is (using zero-based indexing) stored at position 4 X width + 2.

// The constructor function takes a width, a height, and an optional content function that will be used to fill in the initial values.
// There are *get* and *set* methods to retrieve and update elements in the matrix.

// When looping over a matrix, you are usually interested in the position of the elements as well as the elements themselves, so we'll have our iterator produce objects with x, y, and value properties.

class MatrixIterator {
	constructor(matrix) {
		this.x = 0;
		this.y = 0;
		this.matrix = matrix;
	}

	next() {
		if (this.y == this.matrix.height) return {done: true};

		let value = {x: this.x, y: this.y, value: this.matrix.get(this.x, this.y)};

		this.x++;

		if (this.x == this.matrix.width) {
			this.x = 0;
			this.y++
		}
		return {value, done: false};
	}
}

// The class tracks the progress of iterating over a matrix in its x and y properties.
// The next method starts by checking whether the bottom of the matrix has been reached. 
// If it hasn't, it first creates the object holding the current value and then updates its position, moving to the next row if necessary.

// Let's set up the Matrix class to be iterable.
// Throughout this book, I'll occasionally use after-the-fact prototype manipulation to add methods to classes so that the individual pieces of code remail small and self-contained.
// In a regular program, where there is no need to split the code into small pieces, you'd declare these methods directly in the class instead.

Matrix.prototype[Symbol.iterator] = function() {
	return new MatrixIterator(this);
};

// We can now loop over a matrix with *for/of*.

let matrix = new Matrix(2, 2, (x, y) => `value ${x}, ${y}`);
for (let {x, y, value} of matrix) {
	console.log(x, y, value);
}
