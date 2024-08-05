// booleans are useful when only two possibilities are needed
console.log(3 > 2) // --> true
console.log(3 < 2) // --> false

// strings can also be compared in the same way
console.log("Aardvark" < "Zoroaster") // --> true

// uppercase is always "less than" lowercase and nonalphabetic characters
console.log("Z" < "a") // --> true

// There is one value in JS that is not equal to itself, NaN
console.log(NaN == NaN) // --> false

// There are three logical operators used to "reason" through boolean vales: && (and), || (or), ! (not)
// &&: true only if both sides are true
console.log(true && false) // --> false
console.log(true && true) // --> true

// ||: true if at least one side is true
console.log(false || true) // --> true
console.log(false || false) // --> false

// !: flips the value given to it; !true is false
console.log(!true && true) // --> false
console.log(!false || false) // --> true

// The ternary operator (?) operates on three values

// Also knonw as the conditional operator, the value on the left of the question mark "picks"
// which of the other two values will come out. When true, it chooses the middle value, and when
// false, it chooses the value on the right.
console.log(true ? 1 : 2); // --> 1
console.log(false ? 1 : 2); // --> 2


