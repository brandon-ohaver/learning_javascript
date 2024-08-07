// There are two more or less natural ways for functions to be introduced into programs.

// The first is that you find yourself writing similar code multiple times.
// You'd prefer not do do that.
// Having more code means more space for mistakes to hide and more material to read for people trying to understand the program.
// So you take the repeated functionality, find a good name for it, and put it into a function.

// The second way is that you find you need some functionality that you haven't written yet and that sounds like it deserves its own function.
// You'll start by naming the funciton, and then you'll write its body. 
// You might even start writing code that uses the function before you actually define the function itslef.

// How difficult it is to find a good name for a funciton is a good indication of how clear a concept it is that you're trying to wrap. 
// Let's go through an example.

// We want to write a program that prints two numbers: the numbers of cows and chickens on a farm, with the words *Cows* and *Chickens* after them and zeroes padded before both numbers so they are always three digits long.

// 007 Cows
// 011 Chickens

// This aks for a function of two arguments -- the number of cows and the number of chickens.
// Let's get coding.

function printFarmInventory(cows, chickens) {
	let cowString = String(cows);
	while (cowString.length < 3) {
		cowString = "0" + cowString;
	}

	console.log(`${cowString} Cows`);

	let chickenString = String(chickens);
	while (chickenString.length < 3) {
		chickenString = "0" + chickenString;
	}

	console.log(`${chickenString} Chickens`);
}

printFarmInventory(7, 11);

// Writing *.length* after a string expresson will give us the length of that string.
// Thus, the while loops keep adding zeros in front of the number strings until they are at least three characters long.

// Mission accomplished! 
// But just as we are about to send the farmer the code (along with a hefty invoice), she calls and tells us she's also started keeping pigs, and couldn't we please extend the software to also print pigs?

// We sure can. 
// But as we're in the process of copying and pasting those four lines one more time, we stop and reconsider.
// There has to be a better way.
// Here's a first attempt:

function printZeroPaddedWithLabel(number, label) {
	let numberString = String(number);
	while(numberString.length < 3) {
		numberString = "0" + numberString;
	}
	console.log(`${numberString} ${label}`);
}

function printFarmInventory(cows, chickens, pigs) {
	printZeroPaddedWithLabel(cows, "Cows");
	printZeroPaddedWithLabel(chickens, "Chickens");
	printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory(7, 11, 3);

// It works!
// But that name, *printZerroPaddedWithLabel*, is a little awkward.
// It conflates three things -- printing, zero-padding, and adding a label -- into a single function.

// Instead of lifting out the repeated part of our program wholesale, let's try to pick out a single concept.

function zeroPad(number, width) {
	let string = String(number);
	while (string.length < width) {
		string = "0" + string;
	}
	return string
}

function printFarmInventory(cows, chickens, pigs) {
	console.log(`${zeroPad(cows, 3)} Cows`);
	console.log(`${zeroPad(chickens, 3)} Chickens`);
	console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 3);

// A function with a nice, obvious name like *zeroPad* makes it easier for someone who reads the code to figure out what it does.
// And such a function is useful n more situations than just this specific program.
// FOr example, you could use it to help print nicely aligned tables of numbers.

// How smart and versatile should our function be? 
// We could write anything, from a terribly simple function that can only pad a number to be three characters wide to a complicated generalized number-formatting system that handles fractional numbers, negatives numbers, alignment of decimal dots, padding with different characters, and so on.

// A useful principle is to not add cleverness unless you are absolutely sure you're going to need it. 
// It can be tempting to write general "frameworks" for every bit of functionality you come across.
// Resist that urge.
// You won't get any real work done -- you'll just be writing code that you never use.
