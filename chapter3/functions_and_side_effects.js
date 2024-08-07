// Functions can be roughly divided into those that are called for their side effects and those that are called for their return value.
// (Though it is definitely also possible to both have side effects and return a value.)

// The first helper function in the farm example, *printZeroPaddedWithLabel*, is called for its side effect: it prints a line.
// The second version, *zeroPad* is called for its return value.
// It is no coincidence that the second is useful in more situations than the first.
// Functions that create values are easier to combine in new ways than functions that directly perform side effects.

// A pure function is a specific kind of value-producing function that not only has no side effects, but also doesn't rely on side effects from ohter code -- for example, it doesn't read global bindings whose value might change.
// A pure function has the pleasant property that, when called with the same arguemnts, it always produces the same value (and doesn't do anything else).
// A call to such a function can be substituted by its return vale without changing the meaning of the code.
// When you are not sure that a pure function is working correctly, you can test it by simpoly calling it and know that if it works in that context, it will work in any context.
// Nonpure functions tend to require more scaffolding to test.

// Still, there's no need to feel bad when writing functions that are not pure or to wage a holy war to purge them from your code.
// Side effects are often useful. 
// There'd be no way to write a pure version of *console.log*, for example, and *console.log* is good to have.
// Some operations are also easier to express in an efficient way when we use side effects, so computing speed can be a reason to avoid purity.
