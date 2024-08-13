function loop(start, test_function, update_function, body_function) {
	for(let value = start; test_function(value); value = update_function(value)) {
		body_function(value);
	}
}

loop(1,(x => x < 10), (x => x + 1), (console.log));

// book solution
// function loop(start, test, update, body) {
// 	for (let value = start; test(value); value = update(value)) {
// 	  body(value);
// 	}
//   }
