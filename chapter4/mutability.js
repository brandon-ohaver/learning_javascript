let journal = []; // creating array

// this function adds entries in the form of an object into the array
function addEntry(events, squirrel) {
	journal.push({events, squirrel});
}

// these are all the different object entries into the array
addEntry(["work", "touched tree", "pizza", "running", "television"], false);

addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);

addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);
