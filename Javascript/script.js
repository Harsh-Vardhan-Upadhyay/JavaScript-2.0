

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


//<----------------------- Practice Questions ------------------------->
// Get input from uesr and check if the number is multiple of 5 

let Number = prompt("Enter your Number")
if(Number % 5 == 0){
    console.log(`The number ${Number} is multiple of 5`)
}
else{
    console.log(`The number ${Number} is not multiple of 5`)
}

// Qs2. Write a code which can give grades to students according to their scores:

let Grade = prompt("Enter your grade");
Grade = Number(Grade);

if (Grade < 0 || Grade > 100) {
    alert("Invalid entry");
} else if (Grade >= 90 && Grade <= 100) {
    console.log("You have scored A Grade");
} else if (Grade >= 80 && Grade <= 89) {
    console.log("You have scored B Grade");
} else if (Grade >= 70 && Grade <= 79) {
    console.log("You have scored C Grade");
} else if (Grade >= 60 && Grade <= 69) {
    console.log("You have scored D Grade");
} else if (Grade >= 50 && Grade <= 59) {
    console.log("You have scored E Grade");
} else {
    console.log("You have scored F Grade");
}


//<----------------------- Loops ------------------------->

//Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.


let Numberis = 25;

let inputNumber = prompt("Guess the number")
inputNumber = Number(inputNumber);

while(Numberis != inputNumber){
    inputNumber = prompt("Guess the number again")
}
alert("you have guessed the correct number")



//<----------------------- Strings ------------------------->

// Creating a String
let str = "sample"; 

// String Length
console.log("Length of the string:", str.length); 

// String Indices (Accessing individual characters)
console.log("First character:", str[0]); // Output: s
console.log("Second character:", str[1]); // Output: a
console.log("Third character:", str[2]); // Output: m

// Template Literals
let name1 = "Alice";
let greeting = `Hello, ${name1}!`; 
console.log(greeting); // Output: Hello, Alice!

// String Interpolation (Similar to Template Literals)
let num1 = 5;
let num2 = 3;
let result = `The sum of ${num1} and ${num2} is ${num1 + num2}`;
console.log(result); // Output: The sum of 5 and 3 is 8

// String Methods

// 1. To Uppercase
console.log(str.toUpperCase()); // Output: SAMPLE

// 2. To Lowercase
console.log(str.toLowerCase()); // Output: sample

// 3. Trim (Remove leading/trailing whitespace)
let strWithSpaces = "   Hello World   ";
console.log(strWithSpaces.trim()); // Output: "Hello World"

// 4. Concat (Join strings)
let str1 = "Hello";
let str2 = " World";
console.log(str1.concat(str2)); // Output: "Hello World"

// 5. Replace (Replace a substring)
let newStr = str.replace("College", "University"); 
console.log(newStr); // Output: "Apna University"

// 6. charAt (Get character at a specific index)
let charAtIndex = str.charAt(5); 
console.log(charAtIndex); // Output: "C"



// Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length.

let userName = prompt("Enter your name")
userName = String(userName)

let size = userName.length
alert(`Your user name is: @${userName}${size} `)