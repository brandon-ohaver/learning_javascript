let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((a, b) => a.concat(b), []));

// book solution
// console.log(arrays.reduce((flat, current) => flat.concat(current), []));
