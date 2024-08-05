// A lot of values provided in the default environment have the type *function*.
// A function is a piece of program wrapped in a value. Such values can be applied in order to run the wrapped program.
// For example, in a browser environment, the binding *prompt* holds a function that shows a little dialog box asking for user input.
// It is used like this:
prompt("Enter passcode");

// Executing a function is called invoking, calling, or applying it.
// You can call a function by putting parentheses after an expression that produces a function value.
// Usually you'll directly use the name of the binding that holds the function.
// In the example, the *prompt* function uses the string that we give it as the text to show in the dialog box.
// Values given to functions are called *arguments*. 
// Different functions might need a different number or differetn types of arguments.

// The *prompt* function isn't used much in modern programming, mostly because you have no control over the way the resulting dialog looks...
// but it can be helpful in toy programs and experiments

