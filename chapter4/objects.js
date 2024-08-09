// values of the type *object* are arbitrary collections of properties
let day1 = {
	squirrel: false,
	events: ["work", "touched tree", "pizza", "running"]
};

console.log(day1.squirrel); // --> false
console.log(day1.wolf); // --> undefined

day1.wolf = false;
console.log(day1.wolf); // --> false

// array of objects
let journal = [
	{events : ["work", "touched tree", "pizza", "running", "television"],
		squirrel: false
	},
	{events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"],
		squirrel: false
	},
	{events: ["weekend", "cycling", "break", "peanuts", "beer"],
		squirrel: true,
		/* and so on... */
	}
]
