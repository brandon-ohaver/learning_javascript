// In the examples, we've been adding spaces in front of the statements that are part of some larger statement.
// These spaces are not required -- the computer will accept the program just fine without them. 
// In fact, even the line breaks in programs are optional. 
// You could write a program as a single line if you felt like it.

// The role of this indentation inside blocks is to make the structure of the code stand out.
// In code where new blocks are opened inside other blocks, it can become hard to see where one block ends and another begins.
// With proper indentation, the visual shape of a program corresponds to the shape of the blocks inside it.
// I like to use two spaces for every open block, but tastes differ -- some people use four spaces, and some people use tab characters.
// The important thing is that each new block adds the same amount of space
if (false != true) {
	console.log("That makes sense");
	if (1 < 2) {
		console.log("No suprise there");
	}
}

// Most code editor programs will help by automatically indenting new lines the proper amount.
