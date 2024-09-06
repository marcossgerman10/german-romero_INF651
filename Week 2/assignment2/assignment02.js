//Variables and Data Types

//A variable for a person's name
const myName = "Jhon";
//A variable for their age.
const age = 45;
//A variable for whether they are a student 
const isStudent = true;
//Log each variable's value and its data type
console.log("Name: " + myName + ", Data Type: " + typeof myName);
console.log("Age: " + age + ", Data Type: " + typeof age);
console.log("Is Student: " + isStudent + ", Data Type: " + typeof isStudent);  

//Basic Arithmetic Operations

//Declare two number variables
const int1 = 2;
const int2 = 4;
//Addition
const sum = int1 + int2;
//Substraction
const substraction = int2 - int1;
//Multiplication
const multiplication = int1 * int2;
//Division
const division = int2 / int1;

//Result of addition
console.log("Sum of " + int1 + " + " +  int2 + " = " + sum);
//Result of substraction
console.log( "Substraction: of " + int2 + " - " +  int1 + " = " + substraction);
//Result of multiplication
console.log("Multiplication of " + int1 + " * " +  int2 + " = " + multiplication);
//Result of division
console.log("Division of " + int2 + " / " +  int1 + " = " + division);


//Working with Strings

//String value with a sentence
const mySentence = "Hello world, my name is Marcos";
//Last character of the sentence
const lastCharacter = mySentence.charAt(mySentence.length - 1);
//First character of the sentence
const firstCharacter = mySentence.charAt(0);

//Length of sentence
console.log("The sentence is " + mySentence.length + " characters long.");
//Last character
console.log("The last character is " + lastCharacter);
//First character
console.log("The first character is " + firstCharacter);


// Math Object

//Negative number variable
const negNum = -5;
//Square root of negative number
const squareRoot = Math.sqrt(negNum);
console.log("The square root of " + negNum + " is " + squareRoot);
//Squared number of negative number
const numSquared = Math.pow(negNum, 2);
console.log("The number squared of " + negNum + " is " + numSquared);
//Absolute value of negative number
const absValue = Math.abs(negNum);
console.log("The absolute value of " + negNum + " is " + absValue);


//Boolean Logic and Comparison Operators

//Two number variables
const num1 = 7;
const num2 = 4;
//Compare numbers using comparison operators
if(num1 > num2){
    console.log(num1 + " is greater than " + num2);
} else if (num1 < num2){
    console.log(num1 + " is lower than " + num2);
} else if (num1 == num2){
    console.log(num1 + " is equal to " + num2);
} else {
    console.log("An unexpected error occurred or the input values are not valid.");
}


//Logical Operators

// Declare two boolean variables
const isSunny = true;
const isWeekend = false;

// Logical AND (&&) operation
console.log("isSunny AND isWeekend: ", isSunny && isWeekend); 

// Logical OR (||) operation
console.log("isSunny OR isWeekend: ", isSunny || isWeekend);

// Logical NOT (!) operation
console.log("NOT isSunny: ", !isSunny);
console.log("NOT isWeekend: ", !isWeekend);


//Using Template Literals

//Declare variables for first and last name
const firstName = "Jane";
const lastName = "Doe";
//Create a greeting message using template literals
const greetingMessage = `Hello, ${firstName} ${lastName}! Welcome to class.`;
//Log the greeting message
console.log(greetingMessage); 
