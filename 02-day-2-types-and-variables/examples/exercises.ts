// 02-day-2-types-and-variables/examples/exercises.ts

// Exercise 1: Product variables
const prodName: string = "Noise-Cancelling Headphones";
const prodPrice: number = 149.99;
const isAvailable: boolean = true;
console.log(`Ex 1: Product: ${prodName}, Price: $${prodPrice}, In Stock: ${isAvailable}`);

// Exercise 2: Typed array of languages
const programmingLanguages: string[] = ["TypeScript", "JavaScript", "Python", "Rust"];
programmingLanguages.push("Go");
console.log(`Ex 2: Languages count: ${programmingLanguages.length}, List: ${programmingLanguages.join(", ")}`);

// Exercise 3: Average of five numbers
const testScores: number[] = [88, 92, 79, 95, 84];
const totalScore = testScores[0] + testScores[1] + testScores[2] + testScores[3] + testScores[4];
const averageScore = totalScore / testScores.length;
console.log(`Ex 3: Average score: ${averageScore.toFixed(2)}`);

// Exercise 4: Fix incorrectly typed variables
const validCity: string = "New York"; // corrected from 10020
const isOnlineNow: boolean = true;    // corrected from 1
const validTags: string[] = ["laptop", "electronics", "sale"]; // all strings
console.log(`Ex 4: City: ${validCity}, Online: ${isOnlineNow}, Tags: ${validTags.join(", ")}`);

// Exercise 5: any vs unknown
let sampleAny: any = 100;
// sampleAny.trim(); // Compiles fine, but crashes at runtime!

let sampleUnknown: unknown = "   Learn TypeScript   ";
// sampleUnknown.trim(); // Compiler error TS2571: Object is of type 'unknown'
if (typeof sampleUnknown === "string") {
  console.log(`Ex 5: Trimmed unknown value: "${sampleUnknown.trim()}"`);
}
