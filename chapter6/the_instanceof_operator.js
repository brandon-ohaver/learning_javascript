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

/*
	SECTION STARTS HERE
*/

// It is occasionally useful to know whether an object was derived from a specific class.
// For this, JavaScript provides a binary operator called *instanceOf*.

console.log(
	new SymmetricMatrix(2) instanceof SymmetricMatrix); // --> true

console.log(new SymmetricMatrix(2) instanceof Matrix); // --> true

console.log(new Matrix(2, 2) instanceof SymmetricMatrix); // --> false

console.log([1] instanceof Array); // --> true

// The operator will see through inherited types, so a *SymmetricMatrix* is an instance of *Matrix*.
// The operator can also be applied to standard constructors like *Array*.
// Almost every object is an instance of *Object*.
