/**
 * =====================================================================
 * Day 1: TypeScript Basics, Primitives, and Special Types
 * =====================================================================
 */

console.log("--- Day 1: TypeScript Basics ---");

// 1. Primitive Type Annotations
const studentName: string = "Sachintha";
const studyHoursPerDay: number = 3;
const isEnrolled: boolean = true;
const graduationYear: number | null = null;

console.log(`Student: ${studentName}, Hours: ${studyHoursPerDay}, Active: ${isEnrolled}`);

// 2. Type Inference (TypeScript automatically determines the type)
let inferredScore = 95; // inferred as number
// inferredScore = "95"; // ❌ Error: Type 'string' is not assignable to type 'number'

// 3. Special Types: unknown vs any
let rawApiData: unknown = "User authentication successful";
// rawApiData.toUpperCase(); // ❌ Error: Object is of type 'unknown'

if (typeof rawApiData === "string") {
  // TypeScript narrows the type inside this block
  console.log("Safe API message:", rawApiData.toUpperCase());
}

// 4. Void & Never
function logActivity(activity: string): void {
  console.log(`[Log]: ${activity}`);
}

function throwAppError(errorMessage: string): never {
  throw new Error(`Critical Error: ${errorMessage}`);
}

logActivity("Completed Day 1 setup!");

// =====================================================================
// 📝 TODO / EXERCISES FOR YOU:
// =====================================================================
// Exercise 1: Declare a variable for your goal repository stars (number)
// Exercise 2: Declare an 'unknown' variable, inspect its type using typeof, and log it safely.
// Exercise 3: Try triggering a TypeScript compiler error by assigning an incompatible type.
