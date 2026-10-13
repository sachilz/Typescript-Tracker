"use strict";
/**
 * =====================================================================
 * Day 4: Unions, Literals, and Type Narrowing
 * =====================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
console.log("--- Day 4: Unions & Narrowing ---");
let currentState = "idle";
currentState = "loading";
function handleResponse(response) {
    switch (response.status) {
        case "idle":
            return "Waiting for request...";
        case "success":
            return `Loaded ${response.data.length} records successfully!`;
        case "error":
            return `Failed to fetch data: ${response.error}`;
        default: {
            // Exhaustive checking: ensures every state is handled
            const _exhaustiveCheck = response;
            return _exhaustiveCheck;
        }
    }
}
console.log(handleResponse({ status: "success", data: ["TS Book", "Cheat Sheet"] }));
// 3. Custom Type Guard
function isString(value) {
    return typeof value === "string";
}
function processValue(val) {
    if (isString(val)) {
        console.log("Length of string:", val.length);
    }
    else {
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
