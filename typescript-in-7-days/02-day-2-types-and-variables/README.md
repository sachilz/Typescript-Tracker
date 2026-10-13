# 🚀 Day 2: Types and Variables

> **Day 2 of 7: Mastering Data Types & Avoiding Pitfalls**  
> Welcome to Day 2! Today we explore TypeScript's primitive data types, handle missing values with `null` and `undefined`, create strictly-typed arrays, and explore two special types: `any` (the danger zone) and `unknown` (the type-safe fortress).

---

### 📌 Quick Overview

| ⏱️ Estimated Time | 🎯 Level | 🛠️ Concepts | 📚 Prerequisites |
| :--- | :--- | :--- | :--- |
| **35–45 minutes** | Beginner | Primitives, Arrays, `null`/`undefined`, `any` vs `unknown` | Day 1 (Basics) |

---

## 1. Learning Objectives

By the end of Day 2, you will be able to:
- Confidently use primitive types: `string`, `number`, and `boolean`.
- Understand the exact distinction between `null` and `undefined`.
- Create and manipulate strictly typed arrays (`T[]` syntax).
- Know when to rely on type inference versus explicit annotations.
- Understand why the `any` type is dangerous and turns off safety.
- Use `unknown` with type narrowing as a safe alternative to `any`.

---

## 2. Topics to Learn

- [ ] Primitives: `string`, `number`, and `boolean`
- [ ] Handling empty states: `null` vs. `undefined`
- [ ] Typed arrays (`string[]`, `number[]`)
- [ ] Array operations with compile-time safety
- [ ] Type inference vs. explicit types
- [ ] Why `any` is dangerous (The "escape hatch" trap)
- [ ] Why `unknown` is safe (The type-safe shield)
- [ ] 5 hands-on practice exercises
- [ ] 📢 Share your Day 2 milestone on LinkedIn

---

## 3. Simple Explanations

### Primitive Data Types

```text
┌──────────┬─────────────────────────────┬──────────────────────────────┐
│ Type     │ Allowed Values              │ Examples                     │
├──────────┼─────────────────────────────┼──────────────────────────────┤
│ string   │ Textual characters          │ "Hello", 'TypeScript', `ID`  │
│ number   │ Integers, floats, negative  │ 42, 3.14159, -10             │
│ boolean  │ Strictly true or false      │ true, false                  │
└──────────┴─────────────────────────────┴──────────────────────────────┘
```

> [!NOTE]
> Unlike languages like Java or C#, TypeScript does not have separate types for `int`, `float`, or `double`. All numbers are simply typed as `number`.

---

### `null` vs. `undefined`

- **`undefined`:** A variable has been declared, but has not yet been assigned a value.
- **`null`:** An intentional representation of "empty" or "no value".

```ts
let userAddress: string | undefined = undefined; // Not provided yet
let activePromoCode: string | null = null;        // Intentionally empty
```

---

### Typed Arrays
In standard JavaScript, arrays can hold any messy mixture of numbers, strings, and booleans. In TypeScript, you enforce uniform elements by appending `[]` to the type:

```ts
const names: string[] = ["Alice", "Bob", "Charlie"];
const scores: number[] = [95, 88, 72];

// scores.push("100"); ❌ Argument of type 'string' is not assignable to parameter of type 'number'.
```

```text
  JavaScript Array:   [ "Alice", 42, true, null ]  (Unpredictable)
  TypeScript Array:   [ "Alice", "Bob", "Charlie" ] (string[] - Guaranteed!)
```

---

### `any` vs. `unknown`: The Most Important Lesson

#### ⚠️ The Danger of `any`
`any` completely turns off TypeScript's compiler for that variable. It essentially tells TypeScript: *"Trust me, turn off all safety checks."*

```ts
let data: any = 42;
data.toUpperCase(); // 💥 Compiles fine, but crashes your app at runtime!
```

#### 🛡️ The Safety of `unknown`
`unknown` means: *"We don't know what this data is yet (e.g. from an API), so TypeScript will BLOCK all actions until you check what it is."*

```ts
let input: unknown = "TypeScript";

// input.toUpperCase(); ❌ Object is of type 'unknown'.

// You MUST narrow the type first:
if (typeof input === "string") {
  console.log(input.toUpperCase()); // ✅ Safe and allowed!
}
```

```text
┌─────────────────┬────────────────────────────────────────────────────────┐
│ any             │ Disables all safety checks. High risk of crashes.      │
│ unknown         │ Forces you to verify type before use. 100% type-safe.  │
└─────────────────┴────────────────────────────────────────────────────────┘
```

---

## 4. Code Examples

Run this example from [examples/primitive-types.ts](./examples/primitive-types.ts):

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

### How to Run This Example:
```bash
npm run start:day2
```

**Expected Terminal Output:**
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

- `const ratings: number[] = [...]`: Declares an array containing only numbers.
- `let discountCode: string | null = null`: Uses a union type (`|`) to allow either a string or `null`.
- `if (typeof safeInput === "string")`: Uses JavaScript's built-in `typeof` operator as a **type guard**, allowing safe method access on `unknown`.

---

## 6. Common Mistakes & Quick Fixes

### ❌ Mistake 1: Mixed data types in a typed array
```ts
let tags: string[] = ["laptop", 99, true]; // ❌ Type errors for 99 and true!
```
> [!TIP]
> **Fix:** Keep all elements matching the declared element type:
> ```ts
> let tags: string[] = ["laptop", "electronics", "sale"]; // ✅ All strings
> ```

---

### ❌ Mistake 2: Accessing properties directly on `unknown`
```ts
let rawData: unknown = "hello";
console.log(rawData.length); // ❌ 'rawData' is of type 'unknown'.
```
> [!TIP]
> **Fix:** Check the type using `typeof` first:
> ```ts
> if (typeof rawData === "string") {
>   console.log(rawData.length); // ✅ Allowed!
> }
> ```

---

## 7. Exercises

Practise in [examples/exercises.ts](./examples/exercises.ts) or your own file:

1. **Exercise 1 (Product Variables):** Declare typed variables for a product's `name` (`string`), `price` (`number`), and `isAvailable` (`boolean`). Print a formatted summary.
2. **Exercise 2 (Languages Array):** Create a typed array of 4 programming languages (`string[]`). Add a 5th language using `.push()` and log the total count and list.
3. **Exercise 3 (Average Calculation):** Create a typed array of five test scores (`number[]`). Calculate and print their average to two decimal places.
4. **Exercise 4 (Fixing Types):** Correct the type mismatches in this snippet:
   ```ts
   let city: string = 10020;
   let isOnline: boolean = 1;
   let tags: string[] = ["laptop", 99, true];
   ```
5. **Exercise 5 (`any` vs `unknown`):** Write a small code example showing why calling `.trim()` on an `any` variable holding a number crashes at runtime, while `unknown` protects you at compile time.

---

## 8. Hints

- **Hint for Ex 1:** Use descriptive names like `productName: string = "Headphones";`.
- **Hint for Ex 2:** Remember `.push("Go")` adds an element to the end of the array.
- **Hint for Ex 3:** Sum up array items using a loop or indexing, then divide by `scores.length`.
- **Hint for Ex 4:** Ensure strings are quoted, booleans are `true`/`false`, and arrays are uniform.
- **Hint for Ex 5:** Use `if (typeof value === "string")` with `unknown`.

---

## 9. Solutions

Complete solutions and explanations are available in [solutions.md](./solutions.md).

---

## 10. Completion Checklist

- [ ] Mastered primitives: `string`, `number`, `boolean`.
- [ ] Understand `null` vs. `undefined`.
- [ ] Create and mutate typed arrays (`T[]`).
- [ ] Understand why `any` is dangerous and why `unknown` is safer.
- [ ] Run `npm run start:day2`.
- [ ] Completed Exercises 1 through 5.
- [ ] Checked answers against [solutions.md](./solutions.md).

---

## 📢 Share Your Day 2 Milestone on LinkedIn!

```text
🚀 Day 2 of the 7-Day TypeScript Challenge completed!

Today I tackled TypeScript's type system at the variable level:
✅ Primitives, null, and undefined handling
✅ Strictly typed arrays (T[]) and preventing mixed-type pollution
✅ The real difference between 'any' and 'unknown'
✅ Using type guards (typeof) for safe data narrowing

Saying goodbye to unexpected runtime crashes! 🛡️

#TypeScript #JavaScript #WebDevelopment #Programming #100DaysOfCode #LearnInPublic #SoftwareEngineering
```

---

| [⬅️ Day 1: TypeScript Basics](../01-day-1-typescript-basics/README.md) | [Day 3: Functions ➡️](../03-day-3-functions/README.md) |
| :--- | :--- |
