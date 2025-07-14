console.log("Day 9: Hositing and temporary dead zone");


// var hoisting
console.log("Hoisting example:");
console.log("Helloo",myVar); // undefined

var myVar = "Hello, World!";
console.log("Helloo",myVar); // Hello, World!

// let and const hoisting
console.log("Let and Const example:");
console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = "Hello, Let!";
console.log(myLet); // Hello, Let!


// const hoisting
console.log("Const example:");
console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
const myConst = "Hello, Const!";
console.log(myConst); // Hello, Const!


// Temporal Dead Zone (TDZ)
// The TDZ is the time between the start of the block and the declaration of the variable.
// Accessing the variable before its declaration will throw a ReferenceError.
// This is applicable to both let and const variables.
//  Example of TDZ:

{ 
    // TDZ Starts here: for the variable myVar
    //
    //
    //
    console.log(myVar); // ReferenceError: myVar is not defined
    // 
    // 
    // 
    let myVar = "Hello, TDZ!"; // TDZ ends here for the variable myVar
    // 
    // 
    // 
    let var2 = "This is another variable in the block"; //TDZ ends here for the variable var2
    console.log(var2); // This is another variable in the block
    console.log(myVar); // Hello, TDZ!
}


// Function hoisting

chase();


function chase() {
    console.log("Chasing the hoisted function!");
    caught();
}

function caught() {
    console.log("Caught the hoisted function!");
}


myFunction(); // This will throw an error because myFunction is not hoisted
// Function expressions are not hoisted, so they must be defined before they are called.
// Why? Because function expressions are treated like variables, and variables declared with `let` or `const` are not hoisted in the same way as function declarations.

var myFunction = function () {
    console.log("This is a function expression, not hoisted!");
}