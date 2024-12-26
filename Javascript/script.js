

//<----------------------- Logging Messages ----------------------->
console.log("namaste duniya"); // Prints "namaste duniya" to the console
console.log("namaste duniya"); // Prints "namaste duniya" again
console.log("namaste duniya"); // Prints "namaste duniya" once more

//<----------------------- Variables ------------------------------>
// let keyword allows variable re-assignment
let fullName = "Harsh Vardhan"; // Declare and initialize a variable
console.log(fullName);          // Print initial value

// Update fullName variable
fullName = "Harsh Vardhan Upadhyay"; // Reassign a new value
console.log(fullName);               // Print updated value

//<----------------------- Constants ------------------------------>
// const keyword prevents reassignment of variables
const number = 29;            // Declare and initialize a constant
console.log(number);          // Print constant value

//<----------------------- Data Types ----------------------------->
// Demonstration of various data types in JavaScript
let name = "harsh";           // String
let number1 = 31;             // Integer (Number)
let sach = true;              // Boolean

console.log(typeof number1);  // Print the type of 'number1'

//<----------------------- Objects ------------------------------->
// Define an object to group related data
const student = {
    fullName1: "Harsh",       // String property
    age1: 20,                 // Number property
    cgpa1: 8.3                // Number property
};
console.log(student.fullName1); // Access and print a property

// Update object property
student["fullName1"] = "Harsh Vardhan Upadhyay"; // Update property value

//<----------------------- Conditional Statements ---------------->
// Define the mode variable to demonstrate if-else statements
let mode = "dark";
let color; // Declare variable to hold color value

if (mode == "dark") {         // Check if mode is "dark"
    color = "black";          // Assign color based on condition
}

// Define the age variable to demonstrate multiple conditions
let age = 25;

if (age < 18) {               // Check if age is less than 18
    console.log("junior");
} else if (age > 60) {        // Check if age is greater than 60
    console.log("senior");
} else {                      // Default case for ages between 18 and 60
    console.log("middle");
}

//<----------------------- Ternary Operator Example ----------------------->

//<----------------------- Define Variables ------------------------------->
let age1 = 25; // Example variable to hold age value

//<----------------------- Using Ternary Operator ------------------------->
// Check if the person is an adult or minor using a ternary operator
let category = age1 >= 18 ? "adult" : "minor";

// Print the result
console.log(`The result is ${category}`);


