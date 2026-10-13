# 🚀 Day 3: Functions

> **Day 3 of 7: Building Type-Safe Logic**  
> Welcome to Day 3! Functions are the heart of JavaScript applications. Today we learn how TypeScript supercharges functions by typing arguments and return values, handling optional parameters, setting default values, writing arrow functions, and understanding the `void` return type.

---

### 📌 Quick Overview

| ⏱️ Estimated Time | 🎯 Level | 🛠️ Concepts | 📚 Prerequisites |
| :--- | :--- | :--- | :--- |
| **35–45 minutes** | Beginner | Parameter types, Return types, Optional (`?`), Defaults, Arrow, `void` | Day 2 (Types) |

---

## 1. Learning Objectives

By the end of Day 3, you will be able to:
- Annotate function parameter types and explicit return types.
- Understand how TypeScript checks return values on all execution paths.
- Handle optional parameters using the question mark (`?`) operator.
- Set default parameter values (`param = defaultValue`).
- Write type-safe arrow functions.
- Understand what the `void` return type means and when to use it.
- Prevent parameter mismatches and unintentional `undefined` returns.

---

## 2. Topics to Learn

- [ ] Function parameter and return type annotations
- [ ] Return type inference vs. explicit return types
- [ ] The `void` return type for non-returning functions
- [ ] Optional parameters (`param?: type`)
- [ ] Default parameters (`param: type = defaultValue`)
- [ ] Modern arrow functions with type safety
- [ ] Function type checking & error prevention
- [ ] 5 hands-on practice exercises
- [ ] 📢 Share your Day 3 milestone on LinkedIn

---

## 3. Simple Explanations

### Parameter & Return Types
In TypeScript, you annotate parameters inside parentheses, and the return type immediately after the parentheses:

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

```text
               Parameter Types           Return Type
             ┌─────────────────┐       ┌───────┐
  function add(a: number, b: number) :  number   { ... }
```

> [!NOTE]
> If a caller passes strings `add("10", "20")`, TypeScript stops them at compile time.

---

### The `void` Return Type
If a function performs an action but **does not return a value** (like logging to the terminal or writing to disk), its return type is `void`:

```ts
function logUserAction(action: string): void {
  console.log(`Action recorded: ${action}`);
}
```

---

### Optional Parameters (`?`)
Sometimes an argument isn't mandatory. Append a `?` to mark it optional:

```ts
function greet(name: string, title?: string): string {
  if (title) {
    return `Hello, ${title} ${name}!`;
  }
  return `Hello, ${name}!`;
}

greet("Watson");         // ✅ "Hello, Watson!"
greet("Watson", "Dr.");  // ✅ "Hello, Dr. Watson!"
```

> [!IMPORTANT]
> **Positional Rule:** Optional parameters must always come **after** required parameters. You cannot place an optional parameter first.

---

### Default Parameters (`=`)
Default parameters make an argument optional while providing a fallback value if omitted:

```ts
function applyDiscount(price: number, discountPercent: number = 10): number {
  return price - (price * discountPercent) / 100;
}

applyDiscount(100);     // Uses default: 10% off -> 90
applyDiscount(100, 25); // Uses custom: 25% off -> 75
```

---

### Type-Safe Arrow Functions
Arrow functions follow the exact same rules:

```ts
// Full block arrow function:
const multiply = (x: number, y: number): number => {
  return x * y;
};

// Concise single-line expression:
const double = (n: number): number => n * 2;
```

---

## 4. Code Examples

Run this example from [examples/functions-demo.ts](./examples/functions-demo.ts):

```ts
// 03-day-3-functions/examples/functions-demo.ts

// 1. Basic function with parameter and return types
function calculateTotal(subtotal: number, taxRate: number): number {
  return subtotal + subtotal * taxRate;
}

// 2. Void return type
function printReceipt(item: string, total: number): void {
  console.log(`Receipt: ${item} | Final Total: $${total.toFixed(2)}`);
}

// 3. Optional parameter
function formatUser(name: string, nickname?: string): string {
  if (nickname) {
    return `${name} ("${nickname}")`;
  }
  return name;
}

// 4. Default parameter
function sendNotification(message: string, priority: string = "Normal"): void {
  console.log(`[${priority.toUpperCase()}] ${message}`);
}

// 5. Arrow function
const divide = (dividend: number, divisor: number): number => {
  if (divisor === 0) {
    throw new Error("Cannot divide by zero.");
  }
  return dividend / divisor;
};

// Running invocations
console.log("=== Day 3: Functions Demo ===");
const total = calculateTotal(100, 0.08);
printReceipt("Headphones", total);
console.log(formatUser("Alexander", "Alex"));
console.log(formatUser("Sarah"));
sendNotification("Server restart scheduled.");
sendNotification("Database disk full!", "Urgent");
console.log(`100 / 4 = ${divide(100, 4)}`);
```

### How to Run This Example:
```bash
npm run start:day3
```

**Expected Terminal Output:**
```text
=== Day 3: Functions Demo ===
Receipt: Headphones | Final Total: $108.00
Alexander ("Alex")
Sarah
[NORMAL] Server restart scheduled.
[URGENT] Database disk full!
100 / 4 = 25
```

---

## 5. Code Explanation

- `calculateTotal(...): number`: Guarantees both inputs are numbers and the output is a number.
- `printReceipt(...): void`: Communicates clearly that this function is called for side effects only.
- `nickname?: string`: TypeScript types `nickname` inside the function as `string | undefined`.
- `sendNotification(..., priority: string = "Normal")`: If no second argument is supplied, `"Normal"` is used automatically.

---

## 6. Common Mistakes & Quick Fixes

### ❌ Mistake 1: Placing optional parameters before required ones
```ts
function register(role?: string, name: string) {} 
// ❌ A required parameter cannot follow an optional parameter.
```
> [!TIP]
> **Fix:** Always put required parameters first:
> ```ts
> function register(name: string, role?: string) {} // ✅ Correct
> ```

---

### ❌ Mistake 2: Missing return statements across code branches
```ts
function getGrade(score: number): string {
  if (score >= 90) {
    return "A";
  }
  // ❌ Not all code paths return a value!
}
```
> [!TIP]
> **Fix:** Ensure every branch returns a value matching the declared type:
> ```ts
> function getGrade(score: number): string {
>   if (score >= 90) return "A";
>   return "Pass"; // ✅ All paths return a string
> }
> ```

---

## 7. Exercises

Practise in [examples/exercises.ts](./examples/exercises.ts) or your own file:

1. **Exercise 1 (Addition):** Create a function `addNumbers(a: number, b: number): number` that returns their sum.
2. **Exercise 2 (Rectangle Area):** Create a function `getRectangleArea(width: number, height: number): number`.
3. **Exercise 3 (Default Greeting):** Create a function `greetUser(name: string, greeting: string = "Hello"): string`.
4. **Exercise 4 (Full Name):** Create a function `formatFullName(firstName: string, lastName: string, middleName?: string): string`. If middle name is provided, return `"First Middle Last"`; otherwise `"First Last"`.
5. **Exercise 5 (Arrow Temperature Converter):** Write an arrow function `celsiusToFahrenheit` that converts Celsius into Fahrenheit (`(celsius * 9/5) + 32`).

---

## 8. Hints

- **Hint for Ex 1:** Don't forget parameter and return type annotations.
- **Hint for Ex 2:** Formula: `width * height`.
- **Hint for Ex 3:** Use default parameter syntax `greeting: string = "Hello"`.
- **Hint for Ex 4:** Check `if (middleName)` to handle the optional value safely.
- **Hint for Ex 5:** `const cToF = (c: number): number => (c * 9) / 5 + 32;`.

---

## 9. Solutions

Complete solutions and explanations are available in [solutions.md](./solutions.md).

---

## 10. Completion Checklist

- [ ] Write functions with typed parameters and return values.
- [ ] Understand when to use the `void` return type.
- [ ] Use optional parameters (`?`) and default parameters (`=`).
- [ ] Write type-safe arrow functions.
- [ ] Run `npm run start:day3`.
- [ ] Completed Exercises 1 through 5.
- [ ] Checked answers against [solutions.md](./solutions.md).

---

## 📢 Share Your Day 3 Milestone on LinkedIn!

```text
🚀 Day 3 of the 7-Day TypeScript Challenge complete!

Today was all about building type-safe functions:
✅ Explicit parameter and return type annotations
✅ Avoiding runtime bugs with strict return path checking
✅ Optional parameters (?) vs Default parameters (=)
✅ Type-safe arrow functions & void side-effect functions

Writing clean, predictable, and self-documenting logic! 🎯

#TypeScript #JavaScript #WebDevelopment #Programming #100DaysOfCode #LearnInPublic #SoftwareEngineering
```

---

| [⬅️ Day 2: Types & Variables](../02-day-2-types-and-variables/README.md) | [Day 4: Arrays & Objects ➡️](../04-day-4-arrays-and-objects/README.md) |
| :--- | :--- |
