/**
 * =====================================================================
 * Day 4: Unions, Literals, and Type Narrowing
 * =====================================================================
 */

console.log("--- Day 4: Unions & Narrowing ---");

// 1. Literal Types & Unions
type LoadingState = "idle" | "loading" | "success" | "error";

let currentState: LoadingState = "idle";
currentState = "loading";

// 2. Discriminated Union (Tagged Union)
interface SuccessState {
  status: "success";
  data: string[];
}

interface ErrorState {
  status: "error";
  error: string;
}

interface IdleState {
  status: "idle";
}

type ApiResponse = SuccessState | ErrorState | IdleState;

function handleResponse(response: ApiResponse): string {
  switch (response.status) {
    case "idle":
      return "Waiting for request...";
    case "success":
      return `Loaded ${response.data.length} records successfully!`;
    case "error":
      return `Failed to fetch data: ${response.error}`;
    default: {
      // Exhaustive checking: ensures every state is handled
      const _exhaustiveCheck: never = response;
      return _exhaustiveCheck;
    }
  }
}

console.log(handleResponse({ status: "success", data: ["TS Book", "Cheat Sheet"] }));

// 3. Custom Type Guard
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function processValue(val: unknown) {
  if (isString(val)) {
    console.log("Length of string:", val.length);
  } else {
    console.log("Not a string");
  }
}

processValue("Mastering TypeScript");

// =====================================================================
// 📝 TODO / EXERCISES FOR YOU:
// =====================================================================
// Exercise 1: Create a discriminated union `Shape` (Circle, Rectangle, Square) and write an `area()` calculator.
// Exercise 2: Write a type guard `isDateObject(value: unknown): value is Date`.
// Exercise 3: Create a type `PaymentMethod` with "credit_card" | "paypal" | "crypto" and implement a handler.
