# Day 3: Functions

Welcome to Day 3! Functions are the primary way we organize logic and reuse code. Today we will learn how TypeScript gives functions superpowers by adding types to parameters and return values, handling optional and default arguments, using arrow functions, and understanding `void`.

---

## 1. Learning Objectives

By the end of Day 3, you will:
- Understand how to annotate function parameters and return types.
- Work with optional parameters using the question mark (`?`) operator.
- Set default parameter values.
- Write type-safe arrow functions.
- Understand what `void` means and when to use it.
- Prevent common function type errors.

---

## 2. Topics to Learn

- [ ] Function declarations with parameter and return types
- [ ] Return type inference vs. explicit return types
- [ ] The `void` return type
- [ ] Optional parameters (`param?: type`)
- [ ] Default parameters (`param: type = defaultValue`)
- [ ] Type-safe arrow functions
- [ ] Function type checking

---

## 3. Simple Explanations

### Parameter and Return Types
In TypeScript, you specify the type for each parameter inside the parentheses, and the return type after the parentheses:
```ts
function add(a: number, b: number): number {
  return a + b;
}
```
If you pass a string to `add("5", 10)` or try to return a string from `add`, TypeScript will stop you immediately.

### The `void` Return Type
If a function performs an action but **does not return any value** (for example, it only logs a message to the console), its return type is `void`:
```ts
function logMessage(message: string): void {
  console.log(message);
}
```

### Optional Parameters (`?`)
Sometimes an argument is not required. You mark it as optional by adding a `?` after the parameter name:
```ts
function greet(name: string, title?: string): string {
  if (title) {
    return `Hello, ${title} ${name}!`;
  }
  return `Hello, ${name}!`;
}
```
*Important rule:* Optional parameters must always come **after** required parameters.

### Default Parameters
You can provide a default value for a parameter using `=`. When a default value is supplied, callers can omit that argument:
```ts
function applyDiscount(price: number, discountPercent: number = 10): number {
  return price - (price * discountPercent) / 100;
}
```

### Arrow Functions
Arrow functions follow the exact same typing rules:
```ts
const multiply = (x: number, y: number): number => x * y;
```

---

## 4. Code Examples

See runnable code in [examples/functions-demo.ts](./examples/functions-demo.ts):

```ts
// 03-day-3-functions/examples/functions-demo.ts

// 1. Basic function with parameter and return types
function calculateTotal(subtotal: number, taxRate: number): number {
  return subtotal + subtotal * taxRate;
}

// 2. Function with a void return type
function printReceipt(item: string, total: number): void {
  console.log(`Receipt: ${item} | Final Total: $${total.toFixed(2)}`);
}

// 3. Function with an optional parameter
function formatUser(name: string, nickname?: string): string {
  if (nickname) {
    return `${name} ("${nickname}")`;
  }
  return name;
}

// 4. Function with a default parameter
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

// Running the functions
const total = calculateTotal(100, 0.08);
printReceipt("Headphones", total);
console.log(formatUser("Alexander", "Alex"));
console.log(formatUser("Sarah"));
sendNotification("Server restart scheduled.");
sendNotification("Database disk full!", "Urgent");
console.log(`100 / 4 = ${divide(100, 4)}`);
```

---

## 5. Code Explanation

- `function calculateTotal(subtotal: number, taxRate: number): number`: Tells the compiler that both inputs must be numbers, and the result must be a number.
- `printReceipt(...): void`: Explicitly tells callers not to expect a return value.
- `nickname?: string`: Indicates `nickname` can be either a `string` or `undefined`.
- `priority: string = "Normal"`: If the second argument is omitted, `"Normal"` is used automatically.

---

## 6. Common Mistakes

### Mistake 1: Placing optional parameters before required parameters
```ts
function createUser(role?: string, name: string) {} // ❌ A required parameter cannot follow an optional parameter.
```
**Fix:** Put required parameters first:
```ts
function createUser(name: string, role?: string) {} // ✅ Correct
```

### Mistake 2: Missing a return statement when return type is specified
```ts
function getScore(points: number): number {
  if (points > 50) {
    return points;
  }
  // ❌ Function lacks ending return statement and return type does not include 'undefined'.
}
```
**Fix:** Ensure every branch returns a value:
```ts
function getScore(points: number): number {
  if (points > 50) {
    return points;
  }
  return 0; // ✅ All paths return a number
}
```

---

## 7. Exercises

Practise in your own file or [examples/exercises.ts](./examples/exercises.ts):

1. **Exercise 1 (Add Two Numbers):** Create a function `addNumbers` that accepts two numbers and returns their sum.
2. **Exercise 2 (Rectangle Area):** Create a function `getRectangleArea` that takes `width: number` and `height: number` and returns the area.
3. **Exercise 3 (Personal Greeting):** Create a function `greetUser` that takes `name: string` and an optional `greeting?: string` (defaults to `"Hello"` if not provided) and returns the greeting string.
4. **Exercise 4 (Optional Middle Name):** Create a function `formatFullName` that takes `firstName: string`, `lastName: string`, and optional `middleName?: string`. Return `"First Middle Last"` if middle name is provided, or `"First Last"` if omitted.
5. **Exercise 5 (Temperature Converter):** Write an arrow function `celsiusToFahrenheit` that takes `celsius: number` and returns the Fahrenheit equivalent (`(celsius * 9/5) + 32`).

---

## 8. Hints

- **Hint for Ex 1:** Don't forget the return type annotation: `(a: number, b: number): number`.
- **Hint for Ex 2:** Formula: `width * height`.
- **Hint for Ex 3:** You can use a default parameter: `greeting: string = "Hello"`.
- **Hint for Ex 4:** Check if `middleName` is defined with `if (middleName)`.
- **Hint for Ex 5:** Arrow syntax: `const name = (param: type): returnType => expression;`.

---

## 9. Solutions

Complete solutions and explanations are available in [solutions.md](./solutions.md).

---

## 10. Completion Checklist

- [ ] Read through all function explanations.
- [ ] Understand parameter types and return types.
- [ ] Understand optional (`?`) and default (`=`) parameters.
- [ ] Understand arrow functions and `void`.
- [ ] Run `examples/functions-demo.ts`.
- [ ] Complete Exercises 1 through 5.
- [ ] Check answers against [solutions.md](./solutions.md).
