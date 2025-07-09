console.log("Day 5:");

// Loops

// 1. For loop
// Best when we know the number of iterations in advance.
// Example: Looping through a fixed number of times.
for (let i = 0; i < 5; i++) {
    console.log(i);
}


// length of string 
const str = "Hello, World!";
// loop through each character in the string
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

// storing str.length in a variable before the loop is a micro-optimization.
// It avoids repeated lookups and improves performance slightly—especially in longer or nested loops.
length = str.length;
for (let i = 0; i < length; i++) {
    console.log(str[i]);//better performance
    console.log("Character at ", str.charAt(i)); // legacy compatibility
}

// 2. While loop
// Best when the number of iterations is not known beforehand.
// Example: Looping until a condition is met.
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// 3. Do-while loop
// Similar to while loop, but guarantees at least one iteration.
// Example: Looping until a condition is met, but executing the loop body at least once
// checks the condition after executing the loop body.
i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);


// BREAK AND CONTINUE

// break - breaks out of the loop
// continue - skips the current iteration and moves to the next iteration

// Example: Using break to exit a loop when a condition is met.
for (let i = 0; i < 10; i++) {  
    if (i === 5) {
        console.log("Breaking at i =", i);
        break; // Exits the loop when i is 5
    }
    console.log(i);
}
// Example: Using continue to skip the current iteration when a condition is met.
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log("Skipping even number:", i);
        continue; // Skips the rest of the loop body for even numbers
    }
    console.log(i);
}




// SELF LEARNING FOR NOW
// 4. For...of loop
// Best for iterating over iterable objects like arrays, strings, etc.
// Example: Looping through an array.
const arr = [1, 2, 3, 4, 5];
for (const value of arr) {
    console.log(value);
}

// 5. For...in loop
// Best for iterating over the properties of an object.
// Example: Looping through the keys of an object.
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

// 6. ForEach loop
// Best for executing a function on each element of an array.
// Example: Looping through an array and executing a function for each element.
arr.forEach((value, index) => {
    console.log(`Index: ${index}, Value: ${value}`);
});

// 7. Map loop
// Best for iterating over key-value pairs in a Map.
// Example: Looping through a Map and logging each key-value pair.
const map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);
map.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

// 8. Set loop
// Best for iterating over unique values in a Set.
// Example: Looping through a Set and logging each value.
const set = new Set([1, 2, 3, 4, 5]);
set.forEach(value => {
    console.log(value);
});