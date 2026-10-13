// 01-day-1-typescript-basics/examples/exercises.ts

// Exercise 1: Print your name, age, and country
const myName: string = "Sachintha";
const myAge: number = 24;
const myCountry: string = "Sri Lanka";
console.log(`Exercise 1: Hi, I'm ${myName}, ${myAge} years old, from ${myCountry}.`);

// Exercise 2: Student details and status update
const studentId: number = 101;
const studentFullName: string = "John Doe";
let isActiveStudent: boolean = true;
console.log(`Exercise 2: Student ${studentFullName} (ID: ${studentId}) active status: ${isActiveStudent}`);
isActiveStudent = false;
console.log(`Exercise 2: Student status updated to: ${isActiveStudent}`);

// Exercise 3: Sum of two numbers
const num1: number = 25;
const num2: number = 75;
const sum: number = num1 + num2;
console.log(`Exercise 3: The sum of ${num1} and ${num2} is ${sum}`);

// Exercise 4: Bank account with const and let
const accountHolder: string = "Alice Smith";
const accountNumber: string = "ACC-998822";
let balance: number = 1500;
const depositAmount: number = 500;
balance += depositAmount;
console.log(`Exercise 4: Account ${accountNumber} (${accountHolder}) new balance: $${balance}`);

// Exercise 5: Corrected snippet
let totalMarks: number = 500; // was const, changed to let to allow update
totalMarks = 550;

let candidate: string = "101"; // was number literal 101 assigned to string
let isPassed: boolean = true;  // was string "yes" assigned to boolean

console.log(`Exercise 5: Candidate ${candidate} scored ${totalMarks}, passed: ${isPassed}`);
