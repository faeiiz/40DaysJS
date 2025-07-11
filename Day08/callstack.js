// Global Execution Context
// The global execution context is created when the script is loaded, and it contains global variables and functions.
// It is the default context in which JavaScript code runs. In a browser, the global execution context is the `window` object, while in Node.js, it is the `global` object.
// The global execution context is created when the script is loaded, and it contains global variables and functions.

var a = 5;
function testMe() {
    // Function Execution Context
    // When a function is called, a new execution context is created for that function.
    // 1. The scope chain: It contains the variables and functions that are accessible within the function.
    // 2. The value of `this`: It refers to the object that the function is called on.
    // 3. The arguments object: It contains the arguments passed to the function.
    // 4. The return value: It contains the value returned by the function. 
    var b = 10;
    var user = {
        name: "tapas",
        country: "India"
    }
    function testAgain() {
        console.log("Inside testAgain Execution Context");
        console.log("Exiting testAgain Execution Context");
    }
    testAgain();

}
testMe();

// Callstack - How this functions are executed
// first the global execution context is created, then the testMe function is called, which creates a new execution context for testMe.
// Inside testMe, the testAgain function is called, which creates another execution context for testAgain.
// When testAgain finishes executing, its execution context is removed from the call stack, and control returns to testMe.
// Finally, when testMe finishes executing, its execution context is removed from the call stack,       
// and control returns to the global execution context.