console.log("This is Day 8");

// Lexical Environment
// so main lexical can have 3 lexical env , so it forms a tree ? with branches?
// Exactly. You're thinking correctly — lexical environments in JavaScript form a tree-like structure, with branches representing nested scopes.
// Imagine it like a Lexical Environment Tree:
// The Global Lexical Environment is the root.
// Every function you define becomes a child node, linked to its parent lexical environment.

// Lexical Env means that the inner function has access to the variables of the outer function
function outerFunction() {
    const outerVariable = "I am from the outer function";
    
    function innerFunction() {
        const innerVariable = "I am from the inner function";
        console.log(outerVariable); // Accessing outer variable  
        // This is possible because of lexical scoping
        // The inner function has access to the variables of the outer function
        console.log(innerVariable); // Accessing inner variable
    }
    console.log(innerVariable); // This will throw an error because innerVariable is not defined in this scope
    // innerVariable is not accessible here because it is defined in the inner function's scope
    
    innerFunction(); // Calling the inner function
}

// Context Execution
// The context execution refers to the environment in which a function is executed, including the variables and functions that are accessible at that time.
// In JavaScript, functions create their own execution context, which includes the scope chain, the value of `this`, and the variables defined within that function.
function contextFunction() {
    
    const contextVariable = "I am in the context function";
    
    function nestedFunction() {
        console.log(contextVariable); // Accessing context variable
    }    
    nestedFunction(); // Calling the nested function
}


// Global Execution Context
// The global execution context is the default context in which JavaScript code runs. It is created when the script is loaded and contains global variables and functions.
// In a browser, the global execution context is the `window` object, while in Node.js, it is the `global` object.
// Global variables and functions are accessible from anywhere in the code, but they can lead to naming conflicts and should be used cautiously.
// this keyword is used to refer to the current object in which the function is executing.
// In the global execution context, `this` refers to the global object (e.g., `window` in browsers or `global` in Node.js).


// Function Execution Context
// When a function is called, a new execution context is created for that function. This context includes:
// 1. The scope chain: It contains the variables and functions that are accessible within the function.
// 2. The value of `this`: It refers to the object that the function is called on.
// 3. The arguments object: It contains the arguments passed to the function.
// 4. The return value: It contains the value returned by the function.
