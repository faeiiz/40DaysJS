console.log("This is Day 6");

// Creating a function that prints something
function printThis() {
    console.log("This is printing something");
}


// Calling or invoking the function
printThis();

// function as an expression
const printThisExpression = function() {
    console.log("This is printing something");
} 

// Calling or invoking the function
printThisExpression();


// Parameter and arguments

// Creating a function that prints something with a parameter
function printThisWithParameter(name) { // name is a parameter
    // Inside the function, name is a variable that holds the value passed as an argument
    console.log("This is printing something with parameter: " + name);
}
// Calling or invoking the function with an argument
printThisWithParameter("John");// "John" is an argument passed to the function


//Returning a value from a function
function addNumbers(a, b) {
    return a + b; // This function returns the sum of a and b
}

// Calling the function and storing the returned value in a variable
const sum = addNumbers(5, 10); // 5 and 10 are arguments passed to the function
console.log("The sum is: " + sum); 


// multiple return values?
function getUserInfo() {
    const name = "Alice";
    const age = 30;
    return { name, age }; // Returning an object with multiple values
}

const userInfo = getUserInfo();
console.log("Name: " + userInfo.name);
console.log("Age: " + userInfo.age);


// Default parameters
function greet(name = "Guest") { // Default parameter value is "Guest"
    console.log("Hello, " + name + "!");
}
greet(); // Calling the function without an argument will use the default value


// Rest parameters
function sumAll(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}


// Nested functions
function outerFunction() {
    function innerFunction() {
        console.log("This is the inner function");
    }
    innerFunction(); // Calling the inner function from within the outer function
}
// innerFunction(); // This will throw an error because innerFunction is not defined in this scope


// Callback functions

function foo(func) {
    func(); // Calling the callback function passed as an argument
    console.log("This is foo function");
    func(); // Calling the callback function passed as an argument
}

foo(function() {
    console.log("This is a callback function");
});

// Pure functions
// important for component based architecture
// Try making your functions pure and avoid side effects. It makes testing and debugging easier. Functions Predictable.
function add(a, b) {
    return a + b; // This function is pure because it always returns the same output for the same input
}

// impure function
let counter = 0; // This variable is outside the function's scope
function incrementCounter() {
    // what if i just print counter?
    console.log("Counter value: " + counter);
    // This still makes the function impure because:
    // You're accessing a global variable.
    // You're causing a side effect by printing to the console.
    counter++; // This function modifies the external variable, making it impure
    return counter;
}


// Higher-order functions  ( functions that take other functions as arguments or return functions as results )
// if done both, most powerfull version of higher-order functions

function higherOrderFunction(callback) {    
    console.log("This is a higher-order function");
    return callback; // Calling the callback function passed as an argument
}   
let callbackFunction = higherOrderFunction(function() {
    console.log("This is a callback function passed to the higher-order function");
});

callbackFunction(); // This will call the callback function returned by the higher-order function


// Arrow functions
const arrowFunction = () => {
    console.log("This is an arrow function");
};

// Calling the arrow function
arrowFunction();


// Arrow functions with parameters
const addArrow = (a, b) => a + b; // This is an arrow
// function that returns the sum of a and b
const result = addArrow(5, 10); // Calling the arrow function with arguments
console.log("The sum is: " + result);


// IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("This is an IIFE");
})();
// This is an IIFE that runs immediately after it's defined
// IIFE with parameters
(function(name) {
    console.log("Hello, " + name + "!");
})("John"); // Passing "John" as an argument to the IIFE

// CallStack 
function firstFunction() {
    console.log("This is the first function");
    secondFunction();
}
function secondFunction() {
    console.log("This is the second function");
    thirdFunction();
}
function thirdFunction() {
    console.log("This is the third function");
}
// Calling the first function will create a call stack
firstFunction(); // This will call the first function, which calls the second function, which calls the third function
// Call stack will look like this:
// firstFunction -> secondFunction -> thirdFunction
// When the third function returns, the call stack will unwind in reverse order:
// thirdFunction -> secondFunction -> firstFunction

// Call stack is a data structure that keeps track of function calls in JavaScript
// It follows the Last In, First Out (LIFO) principle



// Example of call stack with errors
function a() {
    console.log("Function a");
    b(); // Calling function b
}
function b() {
    console.log("Function b");
    c(); // Calling function c
}
function c() {
    console.log("Function c");
    throw new Error("An error occurred in function c"); // Throwing an error
}
try {
    a(); // Calling function a, which will call b and c
}   catch (error) {
    console.error("Error caught: " + error.message); // Catching the error and logging it
}

// Recursion 
// A function that calls itself
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));
