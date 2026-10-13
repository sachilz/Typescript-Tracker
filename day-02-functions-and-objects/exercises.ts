/**
 * =====================================================================
 * Day 2: Functions, Objects, Arrays, and Tuples
 * =====================================================================
 */

console.log("--- Day 2: Functions, Objects & Arrays ---");

// 1. Function Typing
function calculateTotal(price: number, taxRate: number = 0.1, discount?: number): number {
  const discountAmount = discount ?? 0;
  const subtotal = price - discountAmount;
  return subtotal + subtotal * taxRate;
}

console.log("Total price (no discount):", calculateTotal(100));
console.log("Total price (with discount):", calculateTotal(100, 0.1, 20));

// 2. Object Shapes with Readonly & Optional properties
type SimpleUser = {
  readonly id: number;
  username: string;
  email: string;
  avatarUrl?: string; // Optional
};

const user1: SimpleUser = {
  id: 101,
  username: "sachintha_dev",
  email: "dev@example.com"
};

// user1.id = 102; // ❌ Error: Cannot assign to 'id' because it is a read-only property

console.log("User profile:", user1);

// 3. Arrays and Tuples
const skills: string[] = ["JavaScript", "TypeScript", "Node.js"];
skills.push("Docker");

// Tuple: [HTTP_STATUS_CODE, STATUS_MESSAGE]
const httpResponse: [number, string] = [200, "OK"];
const [statusCode, statusText] = httpResponse;

console.log(`Status: ${statusCode} - ${statusText}`);

// =====================================================================
// 📝 TODO / EXERCISES FOR YOU:
// =====================================================================
// Exercise 1: Create a function `formatAddress` that accepts an object with street, city, and optional zipCode.
// Exercise 2: Create a Tuple representing coordinates: [latitude, longitude, altitude?].
// Exercise 3: Create a function that calculates average score from an array of numbers (`scores: number[]`).
