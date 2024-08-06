size = 3;

first_row = " #";
second_row = "# ";

for(counter = 1; counter < Math.ceil(size/2); counter++) {
	first_row += " #";
	second_row += "# ";
}


for(counter = 0; counter < Math.ceil(size/2); counter++) {
	console.log(first_row);
	console.log(second_row);
}

// book solution
// let size = 8;

// let board = "";

// for (let y = 0; y < size; y++) {
//   for (let x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0) {
//       board += " ";
//     } else {
//       board += "#";
//     }
//   }
//   board += "\n";
// }

// console.log(board);
