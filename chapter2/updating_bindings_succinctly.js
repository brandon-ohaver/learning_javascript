// Especially when looping, a program often needs to "update" a binding to hold a value based on that binding's previous value.
let counter = counter + 1;

// JavaScript provides a shortcut for this.

counter += 1;

// Similar short cuts work for many other operators, such as `result *= 2` to double result or `counter -= 1` to count downward.
// This allows us to shorten our counting example a little more.

for (let number = 0; number <= 12; number += 2) {
    console.log(number);
}

// For counter += 1 and counter -= 1, there are even shorter equivalents: counter ++ and counter --.