console.log("Day 4: Control flow");

// 1. If-else statement
let age = 20;
if (age >= 18) {    
    console.log("You are an adult.");
}
else {
    console.log("You are a minor.");
}
// 2. Switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
// Switch case is better for multiple conditions than if-else statements. Because it is more readable and easier to maintain when dealing with multiple discrete values.
// it uses jump table internally, which can be more efficient than multiple if-else checks.
// Layman analogy of Jump Table
// Imagine you have a list of 10 rooms, each with a label. If you use if-else, you walk down the hallway checking each door one by one until you find the right room.
// With a jump table (switch), you have a directory that tells you instantly which room number to go to. You skip all the other doors.
// 3. Ternary operator
let isAdult = (age >= 18) ? "You are an adult." : "You are a minor.";
console.log(isAdult);


const city = "Ahmedabad";
switch (city) {
    case "Bangalore":
    case "Kolkata":
    case "Agra":
    case "Jaipur":
        console.log("All these are in India");
        break;
    case "New York":
    default:
        console.log("Not in India");
}