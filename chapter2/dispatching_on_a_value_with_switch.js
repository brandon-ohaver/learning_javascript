// It is not uncommon for code to look like this:
if (x == "value1") action1();
else if (x == "value2") action2();
else if (x == "value3") action3();
else defaultAction();

// There is a construct called *switch* that is intended to express such a "dispatch" in a more direct way.
// Unfortunately, the syntax JavaScript uses for this (which is inherited from the C/Java line of programming languages) is somewhat awkward
// A chain of *if* statements may look better.
// Here is an example:
switch (prompt("What is the weather like?")) {
    case "rainy":
        console.log("Remember to bring an umbrella.");
        break;
    case "sunny":
        console.log("Dress lightly.");
    case "cloudy":
        console.log("Go outside.");
        break;
    default:
        console.log("Unknown weather type!");
        break
}

// You may put any number of case labels inside the block opened by *switch*. 
// The program will start executing at the label that corresponds to the value that *switch* was given,...
// or at *default* if no matching value is found.
// It will continue executing, even across other labels, until it reaches a *break* statement.
// In some cases, such as the "sunny" case in the example, this can be sued to share some code between cases (it recommends going outside for both sunny and cloudy weather).
// But be careful -- it is easy to forget such a *break*, which will cause the program to execute code you do not want executed.

