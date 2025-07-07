console.log("Day 3: JS Basics");

// Arithmetic Operations

let a = 10;
let b = 20;

console.log("Additon : ", a + b);
console.log("Subtraction : ", a - b);
console.log("Multiplication : ", a * b);
console.log("Division : ", a / b);
console.log("Modulus : ", a % b);
console.log("Exponentiation : ", a ** 2);

let count = 5;
console.log("Count before increment: ", count);
console.log("Count after increment: ", count++); // Post-increment - log before incrementing (5)
console.log("Count after increment: ", ++count); // Pre-increment - log and then increment (7)

// Assinment Operators
let x = 10;
// Short-hand assignment operators
// These operators combine assignment with arithmetic operations
x += 5; // x = x + 5
x -= 3; // x = x - 3
x *= 2; // x = x * 2
x /= 4; // x = x / 4
x %= 3; // x = x % 3

// Comparsion Operators
// Always Return a boolean value (true or false)

// 2 Equal operators
// 2.1 Strict Equality (===) - checks both value and type
// 2.2 Loose Equality (==) - checks only value, not type
// 2.2.1 Loose Equality allows type coercion, meaning it converts one type to another if necessary
// Some Cases to know ;
console.log(0 == false); // true
console.log(0 === false); // false - type mismatch (number vs boolean)
console.log("5" == 5); // true - value is same
console.log("5" === 5); // false - type mismatch (string vs number)

console.log(NaN == NaN); // false - NaN is not equal to anything, even itself
// NaN is a special value in JavaScript that represents "Not-a-Number"
// if NaN is involved in a comparison, it will always return false
console.log(null == undefined); // true - both are considered equal in loose equality
console.log(null === undefined); // false - different types (null vs undefined)

console.log(null === null); // true - both are null
console.log(undefined === undefined); // true - both are undefined

// Object Comparison

let obj1 = { name: "Alice" };
let obj2 = { name: "Alice" };
// In JavaScript, objects are compared by reference, not by value
console.log(obj1 == obj2); // false - different references
// This check if both objects point to the same memory location
// Even if they have the same properties and values, they are still different objects in memory

let obj11 = { name: "Alice" };
let obj22 = obj11; // Now obj2 points to the SAME object
console.log(obj11 == obj22); // true

// 3.Inequality Operators
// 3.1 Strict Inequality (!==) - checks both value and type
// 3.2 Loose Inequality (!=) - checks only value, not type

// 3.3 Greater than (>) - checks if left operand is greater than right operand
console.log(10 > 5); // true
// 3.4 Less than (<) - checks if left operand is less than right operand
console.log(10 < 5); // false
// 3.5 Greater than or equal to (>=) - checks if left operand is greater than or equal to right operand
console.log(10 >= 10); // true
// 3.6 Less than or equal to (<=) - checks if left operand is less than or equal to right operand
console.log(10 <= 5); // false

// Logical Operators
// What is short-circuiting?
// Short-circuiting means JavaScript stops evaluating an expression as soon as the final result is known.

//  List of falsy values in JavaScript (memorize this):
// false
// 0
// "" (empty string)
// null
// undefined
// NaN
// Everything else—including:
// Non-empty strings like "cow"
// Non-zero numbers
// Objects
// Arrays …is truthy.

// 4.1 Logical AND (&&) - returns true if both operands are true
// The && operator does NOT simply return true or false.
// Instead, it evaluates both operands left to right, and:
// If the first value is falsy, it immediately returns that value.
// If the first value is truthy, it returns the second value.
console.log("Cat" && "Dog"); // "Dog" - both are truthy, returns the last truthy value
console.log("Cat" && 0); // 0 - second operand is falsy,

// 4.2 Logical OR (||) - returns true if at least one operand is true
console.log("Cat" || "Dog"); // "Cat" - first operand is truthy, returns it
// Step 1: "Cat" is truthy.
// Step 2: || immediately returns "Cat" without evaluating "Dog".
// ✅ Output: "Cat"
// Layman analogy:
// “If the first thing is good, take it—don’t even look at the second.”
// 4.3 Logical NOT (!) - negates the value of the operand
console.log(!true); // false
// Toggles the truthiness of the value

// 4.4 Nullish Coalescing (??) - returns the right operand if the left operand is null or undefined
console.log(null ?? "Default Value"); // "Default Value" - left operand is null
console.log(undefined ?? "Default Value"); // "Default Value" - left operand is undefined
console.log("Hello" ?? "Default Value"); // "Hello" - left operand is neither

// Conditional (Ternary) Operator
// 5.1 Syntax: condition ? expressionIfTrue : expressionIfFalse
// 5.2 Example: age >= 18 ? "You can vote" : "You can't vote"
console.log(age >= 18 ? "You can vote" : "You can't vote");


// Bitwise Operators


// 10 in decimal is 1010 in binary

// 6.1 Bitwise AND (&) - compares each bit of two numbers and returns
// a new number with bits set to 1 where both bits are 1
// 6.2 Bitwise OR (|) - compares each bit of two numbers and returns
// a new number with bits set to 1 where either bit is 1
// 6.3 Bitwise XOR (^) - compares each bit of two numbers and returns a new number with bits set to 1 where the bits are different
// 6.4 Bitwise NOT (~) - flips the bits of a number and returns the result
// 6.5 Bitwise Left Shift (<<) - shifts the bits of a number to the left by a specified number of positions
// 6.6 Bitwise Right Shift (>>) - shifts the bits of a number to the right by a specified number of positions


// Relational Operators
//  In operator - checks if a property exists in an object
// Don't use this operator to check if a variable is defined or not



// Grouping
// 7.1 Parentheses () - used to group expressions and control the order of evaluation
console.log((a + b) * 2); // Parentheses change the order of operations
// This will first add a and b, then multiply the result by 2
// 7.2 Braces {} - used to define blocks of code, such as in functions, loops, and conditionals
// 7.3 Brackets [] - used to define arrays and access array elements


// typeOf operator
// 8.1 typeof - returns the type of a variable or expression
console.log(typeof a); // "number"
console.log(typeof "Hello"); // "string"

// Array is a special type of object in JavaScript
console.log(typeof []); // "object" - arrays are objects in JavaScript
// To detect arrays, always use Array.isArray().
console.log(Array.isArray([1, 2, 3])); // true

// typeof null
console.log(typeof null); // "object" - this is a historical bug in JavaScript

// instanceof operator
// 9.1 instanceof - checks if an object is an instance of a specific class or constructor function
    
