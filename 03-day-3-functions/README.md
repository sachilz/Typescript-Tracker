# 03: Day 3 — Functions

Welcome to Day 3. Today covers functions: declaring parameter and return types, working with optional and default parameters, writing type-safe arrow functions, and understanding `void`.

---

## 1. Learning Objectives

By the end of this day, you will be able to:

- Annotate function parameters and return types.
- Understand how TypeScript checks return values on all execution branches.
- Use optional parameters with the question mark (`?`) operator.
- Set default parameter values.
- Write type-safe arrow functions.
- Understand what the `void` return type means and when to use it.
- Prevent common parameter and return type errors.

---

## 2. Topics to Learn

- [ ] Declaring parameter and return types
- [ ] Return type inference vs explicit types
- [ ] The `void` return type
- [ ] Optional parameters (`param?: type`)
- [ ] Default parameters (`param: type = defaultValue`)
- [ ] Type-safe arrow functions
- [ ] Function type checking
- [ ] 5 practice exercises

---

## 3. Explanations

### Parameter and Return Types

In TypeScript, you annotate parameters inside parentheses, and the return type after the parentheses:

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

If a caller passes an invalid argument, such as `add("10", 20)`, TypeScript produces a compile error immediately.

### Return Type Inference

If you omit the return type, TypeScript infers it from what the function returns:

```ts
function multiply(a: number, b: number) {
  return a * b; // Inferred as returning number
}
```

Even though inference works well, writing explicit return types on important functions makes code easier to read and prevents accidentally returning the wrong value.

### The `void` Return Type

When a function performs an action but **does not return a value** (such as logging to the terminal), its return type is `void`:

```ts
function logMessage(message: string): void {
  console.log(`[LOG]: ${message}`);
}
```

At runtime in JavaScript, a function with no return statement returns `undefined`. In TypeScript, `void` signals to callers that the return value is not meant to be used.

### Optional Parameters (`?`)

When an argument is not required for a function to work, mark it with a `?`:

```ts
function greet(name: string, title?: string): string {
  if (title) {
    return `Hello, ${title} ${name}!`;
  }
  return `Hello, ${name}!`;
}

greet("Watson");         // "Hello, Watson!"
greet("Watson", "Dr.");  // "Hello, Dr. Watson!"
```

**Rule:** Optional parameters must always come **after** required parameters. JavaScript function arguments are positional, so placing an optional parameter before a required parameter would shift arguments out of place.

### Default Parameters

You can assign a fallback value using `=`. If a caller does not provide an argument, the default value is used:

```ts
function applyDiscount(price: number, discountPercent: number = 10): number {
  return price - (price * discountPercent) / 100;
}

applyDiscount(100);     // Uses 10% -> 90
applyDiscount(100, 25); // Uses 25% -> 75
```

### Arrow Functions

Arrow functions follow the same typing rules:

```ts
// Full function body:
const divide = (dividend: number, divisor: number): number => {
  return dividend / divisor;
};

// Concise single-line expression:
const double = (n: number): number => n * 2;
```

---

## 4. Code Example

Here is the runnable example for Day 3 ([examples/functions-demo.ts](./examples/functions-demo.ts)):

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

### Running the Example

```bash
npm run start:day3
```

**Output:**
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
- `printReceipt(...): void`: Explicitly tells callers not to expect a return value.
- `nickname?: string`: Means `nickname` is typed as `string | undefined` inside the function.
- `sendNotification(..., priority: string = "Normal")`: Makes `priority` optional for the caller, defaulting to `"Normal"`.

---

## 6. Common Mistakes

### Mistake 1: Placing optional parameters before required ones
```ts
function register(role?: string, name: string) {} 
// Error: A required parameter cannot follow an optional parameter.
```
**Fix:** Put required parameters first:
```ts
function register(name: string, role?: string) {}
```

### Mistake 2: Missing a return statement in some branches
```ts
function getScoreStatus(score: number): string {
  if (score >= 50) {
    return "Pass";
  }
  // Error: Function lacks ending return statement.
}
```
**Fix:** Ensure every branch returns a value matching the declared return type:
```ts
function getScoreStatus(score: number): string {
  if (score >= 50) {
    return "Pass";
  }
  return "Fail";
}
```

---

## 7. Exercises

Practise in [examples/exercises.ts](./examples/exercises.ts) or in a separate file:

1. **Exercise 1 (Add Numbers):** Create a function `addNumbers(a: number, b: number): number` that returns their sum.
2. **Exercise 2 (Rectangle Area):** Create a function `getRectangleArea(width: number, height: number): number` that calculates the area of a rectangle.
3. **Exercise 3 (Greet User):** Create a function `greetUser(name: string, greeting: string = "Hello"): string` that returns a greeting string.
4. **Exercise 4 (Optional Middle Name):** Create a function `formatFullName(firstName: string, lastName: string, middleName?: string): string`. If middle name is provided, return `"First Middle Last"`; otherwise return `"First Last"`.
5. **Exercise 5 (Arrow Temperature Converter):** Write an arrow function `celsiusToFahrenheit` that takes `celsius: number` and returns the Fahrenheit equivalent (`(celsius * 9/5) + 32`).

---

## 8. Hints

- **Hint for Ex 1:** Remember to annotate both parameters and the return type.
- **Hint for Ex 2:** Formula: `width * height`.
- **Hint for Ex 3:** Use default parameter syntax `greeting: string = "Hello"`.
- **Hint for Ex 4:** Check `if (middleName)` to handle the optional argument safely.
- **Hint for Ex 5:** `const cToF = (c: number): number => (c * 9) / 5 + 32;`.

---

## 9. Solutions

Complete solutions and explanations are in [solutions.md](./solutions.md).

---

## 10. Completion Checklist

- [ ] Write functions with typed parameters and return values.
- [ ] Understand when to use the `void` return type.
- [ ] Use optional parameters (`?`) and default parameters (`=`).
- [ ] Write type-safe arrow functions.
- [ ] Ran `npm run start:day3`.
- [ ] Attempted Exercises 1 through 5.
- [ ] Checked your answers in [solutions.md](./solutions.md).

---

[⬅️ Day 2: Types and Variables](../02-day-2-types-and-variables/README.md) | [Next: Day 4 — Arrays and Objects ➔](../04-day-4-arrays-and-objects/README.md)
