# 02: Day 2 — Types and Variables

Welcome to Day 2. Today covers TypeScript's primitive data types, how missing values work with `null` and `undefined`, how to type arrays, and the important difference between `any` and `unknown`.

---

## 1. Learning Objectives

By the end of this day, you will be able to:

- Use primitive types: `string`, `number`, and `boolean`.
- Understand the difference between `null` and `undefined`.
- Create typed arrays using `type[]`.
- Understand why type checking catches bugs before runtime.
- Understand why `any` disables type checking and when to avoid it.
- Use `unknown` with a type check as a safe alternative to `any`.

---

## 2. Topics to Learn

- [ ] Primitive types: `string`, `number`, `boolean`
- [ ] `null` and `undefined`
- [ ] Typed arrays (`string[]`, `number[]`)
- [ ] Type inference vs explicit annotations
- [ ] Type checking behavior
- [ ] Why `any` should be avoided
- [ ] Basic use of `unknown`
- [ ] 5 practice exercises

---

## 3. Explanations

### Primitive Types

TypeScript has three main primitive types used in everyday code:

- **`string`**: Textual data (`"hello"`, `'world'`, `` `template` ``).
- **`number`**: Numeric values, including integers, decimals, and negative numbers (`42`, `3.14`, `-5`). TypeScript does not have separate `int` or `float` types.
- **`boolean`**: Either `true` or `false`.

```ts
const productName: string = "Mechanical Keyboard";
const price: number = 79.99;
const inStock: boolean = true;
```

### `null` and `undefined`

- **`undefined`**: A variable has been declared but has not yet been assigned a value.
- **`null`**: An intentional representation of an empty or missing value.

```ts
let discountCode: string | null = null; // No discount code applied right now
let deliveryNotes: string | undefined = undefined; // User has not entered notes yet
```

### Typed Arrays

In JavaScript, arrays can hold any combination of items. In TypeScript, you usually want array elements to share a consistent type. You declare this by adding `[]` after the type:

```ts
const names: string[] = ["Alice", "Bob", "Charlie"];
const scores: number[] = [85, 92, 78];

// names.push(42); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
```

You can also write `Array<string>`, but `string[]` is the more common syntax in the community.

### Type Inference vs Explicit Types

When you assign a value immediately, TypeScript infers the type:

```ts
let quantity = 5; // Inferred as number
```

Explicit types are helpful when:
- Declaring a variable before assigning its value.
- Creating an empty array: `const items: string[] = [];` (without `: string[]`, TypeScript infers `any[]`).
- Writing function parameters and return types.

### The `any` Type and Why to Avoid It

The `any` type tells TypeScript to disable type checking for that value completely:

```ts
let input: any = "Hello";
input = 42; // Allowed
input.toUpperCase(); // Compiles, but crashes at runtime because 42 has no toUpperCase method!
```

Using `any` defeats the purpose of using TypeScript. It removes safety and prevents your editor from offering accurate autocomplete. Avoid it whenever possible.

### The `unknown` Type

`unknown` is a safer alternative to `any`. It says: "We do not know the type yet (such as data from an external input), but TypeScript will not let you do anything with it until you check its type."

```ts
let value: unknown = "Hello";

// value.toUpperCase(); // Error: 'value' is of type 'unknown'.

// Check the type first (Type Narrowing):
if (typeof value === "string") {
  console.log(value.toUpperCase()); // Allowed! TypeScript knows value is a string here.
}
```

---

## 4. Code Example

Here is the runnable example for Day 2 ([examples/primitive-types.ts](./examples/primitive-types.ts)):

```ts
// 02-day-2-types-and-variables/examples/primitive-types.ts

// 1. Primitive types
const productName: string = "Mechanical Keyboard";
const unitPrice: number = 79.99;
const inStock: boolean = true;

// 2. null and undefined
let discountCode: string | null = null;
let deliveryNote: string | undefined = undefined;

// 3. Typed Arrays
const ratings: number[] = [4.8, 4.9, 4.2, 5.0];
const features: string[] = ["RGB Backlight", "Hot-swappable", "Wireless"];

// 4. any vs unknown demo
let unsafeInput: any = 42;
console.log(`Unsafe input value: ${unsafeInput}`);

let safeInput: unknown = "TypeScript";
if (typeof safeInput === "string") {
  console.log(`Safe input uppercase: ${safeInput.toUpperCase()}`);
}

console.log("=== Product Info ===");
console.log(`Item: ${productName} - $${unitPrice}`);
console.log(`In Stock: ${inStock}`);
console.log(`Features count: ${features.length}`);
console.log(`First feature: ${features[0]}`);
```

### Running the Example

```bash
npm run start:day2
```

**Output:**
```text
Unsafe input value: 42
Safe input uppercase: TYPESCRIPT
=== Product Info ===
Item: Mechanical Keyboard - $79.99
In Stock: true
Features count: 3
First feature: RGB Backlight
```

---

## 5. Code Explanation

- `const ratings: number[] = [...]`: Only numbers can be stored in this array.
- `discountCode: string | null`: Uses a union type (`|`) to allow either a string or `null`.
- `typeof safeInput === "string"`: Checks the runtime type. Inside the `if` block, TypeScript treats `safeInput` as a string.

---

## 6. Common Mistakes

### Mistake 1: Mixed data types in a typed array
```ts
let tags: string[] = ["laptop", 99, true]; // Error: 99 and true cannot go into string[]
```
**Fix:** Keep array items matching the declared type:
```ts
let tags: string[] = ["laptop", "electronics", "sale"];
```

### Mistake 2: Accessing properties directly on `unknown`
```ts
let data: unknown = "hello";
console.log(data.length); // Error: 'data' is of type 'unknown'.
```
**Fix:** Verify the type using `typeof` before calling methods or properties:
```ts
if (typeof data === "string") {
  console.log(data.length);
}
```

---

## 7. Exercises

Practise in [examples/exercises.ts](./examples/exercises.ts) or in a separate file:

1. **Exercise 1 (Product Variables):** Declare typed variables for a product's `name` (`string`), `price` (`number`), and `isAvailable` (`boolean`). Print a description of the product.
2. **Exercise 2 (Languages Array):** Create a typed array of four programming languages (`string[]`). Add a fifth language using `.push()` and print the total count and list.
3. **Exercise 3 (Calculate Average):** Create a typed array of five test scores (`number[]`). Calculate and print their average.
4. **Exercise 4 (Fixing Types):** Fix the type errors in this snippet:
   ```ts
   // Intentional errors to fix:
   let city: string = 10020;
   let isOnline: boolean = 1;
   let tags: string[] = ["laptop", 99, true];
   ```
5. **Exercise 5 (`any` vs `unknown`):** Write a short code example showing why calling `.trim()` on an `any` variable containing a number causes a runtime error, and show how `unknown` prevents that error at compile time.

---

## 8. Hints

- **Hint for Ex 1:** Use `const` and descriptive names such as `productName`, `productPrice`, `isAvailable`.
- **Hint for Ex 2:** The `.push()` method adds a new element to the end of the array.
- **Hint for Ex 3:** Sum the array elements with a loop or indexing, then divide by `scores.length`.
- **Hint for Ex 4:** Ensure strings are quoted, booleans are `true` or `false`, and array elements share the same type.
- **Hint for Ex 5:** Use `if (typeof value === "string")` before calling `.trim()`.

---

## 9. Solutions

Complete solutions and explanations are in [solutions.md](./solutions.md).

---

## 10. Completion Checklist

- [ ] Understand primitive types (`string`, `number`, `boolean`).
- [ ] Understand `null` vs `undefined`.
- [ ] Know how to declare and use typed arrays.
- [ ] Understand why `any` should generally be avoided.
- [ ] Understand how `unknown` enforces type checking.
- [ ] Ran `npm run start:day2`.
- [ ] Attempted Exercises 1 through 5.
- [ ] Checked your answers in [solutions.md](./solutions.md).

---

[⬅️ Day 1: TypeScript Basics](../01-day-1-typescript-basics/README.md) | [Next: Day 3 — Functions ➔](../03-day-3-functions/README.md)
