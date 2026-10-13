// 01-day-1-typescript-basics/examples/basics.ts

// 1. Immutable constants with explicit types
const schoolName: string = "TypeScript Academy";
const maxScore: number = 100;

// 2. Mutable variables with let
let currentStudent: string = "Emma Watson";
let studentScore: number = 88;
let isEnrolled: boolean = true;

// 3. Type inference (TypeScript knows this is a string)
let city = "London";

// 4. Reassigning a let variable
studentScore = 92;

// 5. Console outputs
console.log("=== Day 1: TypeScript Basics ===");
console.log(`School: ${schoolName}`);
console.log(`Student: ${currentStudent} (City: ${city})`);
console.log(`Score: ${studentScore} / ${maxScore}`);
console.log(`Enrolled: ${isEnrolled}`);
console.log("================================");
