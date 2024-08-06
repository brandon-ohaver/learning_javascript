// Having the looping condition *false* is not the only way a loop can finish.
// There is a special statement called *break* that has the effect of immediately jumping out of the enclosing loop.

// This program illustrates the break statement.
// It finds the first number that is both greater than or equal to 20 and divisible by 7.
for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
        console.log(current); // --> 21
        break;
    }
}

// Using the remainder (%) operator is an easy way to test whether a number is divisible by another number.
// If it is, the remainder of their division is zero.

// The *for* construct in the example does not have a part that checks for the end of the loop. 
// This means that the loop will never stop unless the *break* statement inside is executed.

// If you were to remove that *break* statement or you accidentally write an end condition that always produces *true*...
// your program would get stuck in an *infinite loop*. A program stuck in an infinite loop will never finish running,...
// which is usually a bad thing

// The *continue* keyword is similar to *break*, in that it influences the progress of a loop.
// When *continue* is encountered in a loop body, control jumps out of the body and continues with the loop's next iteration.