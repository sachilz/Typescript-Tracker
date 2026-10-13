# Day 2: Types and Variables

Welcome to Day 2! Today we explore TypeScript's type system at the variable level: primitive types, `null` and `undefined`, typed arrays, and two special types you will encounter often: `any` and `unknown`.

---

## 1. Learning Objectives

By the end of Day 2, you will:
- Master the primitive types: `string`, `number`, and `boolean`.
- Understand the difference between `null` and `undefined`.
- Create and manipulate typed arrays (`type[]` syntax).
- Know when to rely on type inference versus explicit typing.
- Understand why the `any` type disables safety and how `unknown` provides a safer alternative.

---

## 2. Topics to Learn

- [ ] Primitive types: `string`, `number`, `boolean`
- [ ] `null` and `undefined`
- [ ] Arrays and basic array typing (`string[]`, `number[]`)
- [ ] Type inference vs. explicit types
- [ ] Type checking in TypeScript
- [ ] The danger of `any`
- [ ] The safety of `unknown`

---

## 3. Simple Explanations

### Primitive Types
TypeScript has three primary primitives used in everyday code:
1. **`string`**: Textual data enclosed in single quotes `'`, double quotes `"`, or backticks `` ` ``.
2. **`number`**: Numeric values, including whole integers (`42`), floating-point decimals (`3.14`), and negative values (`-10`).
3. **`boolean`**: Binary true or false values (`true` or `false`).

### `null` and `undefined`
- **`undefined`**: A variable has been declared, but has not yet been assigned any value.
- **`null`**: An intentional representation of "no value" or "empty".

### Typed Arrays
In JavaScript, arrays can hold an arbitrary mix of items. In TypeScript, you specify the type of elements inside the array using square brackets (`type[]`):
```ts
let colors: string[] = ["red", "green", "blue"];
let scores: number[] = [85, 90, 78];
```
If you attempt to push a number into `colors`, TypeScript stops you:
```ts
// colors.push(10); // ❌ Argument of type 'number' is not assignable to parameter of type 'string'.
```

### Type Inference vs. Explicit Types
- **Explicit Types**: You write the type explicitly (`let price: number = 29.99;`). Great for function arguments, public APIs, or uninitialized variables.
- **Inferred Types**: TypeScript figures it out automatically (`let price = 29.99;`). Cleaner code with zero loss of type safety.

### The `any` Type (Avoid This!)
`any` completely turns off TypeScript's type checking for that variable:
```ts
let mystery: any = "Hello";
mystery = 42;          // Allowed!
mystery.toUpperCase(); // Runtime crash when it's a number, but TypeScript won't warn you!
```
Using `any` defeats the purpose of using TypeScript. Avoid it whenever possible.

### The `unknown` Type (The Safe Alternative)
`unknown` means "we don't know the type yet (e.g. from an API), but TypeScript will force us to check what it is before using it":
```ts
let input: unknown = "Hello";
// input.toUpperCase(); // ❌ TypeScript error: 'input' is of type 'unknown'.

// You MUST verify the type first (Type Narrowing):
if (typeof input === "string") {
  console.log(input.toUpperCase()); // ✅ Safe and allowed!
}
```

---

## 4. Code Examples

See runnable code in [examples/primitive-types.ts](./examples/primitive-types.ts):

```ts
// 02-day-2-types-and-variables/examples/primitive-types.ts

// 1. Primitive types
const productName: string = "Wireless Mouse";
const unitPrice: number = 25.5;
const inStock: boolean = true;

// 2. null and undefined
let discountCode: string | null = null; // Can hold a string or null
let shippingAddress: string | undefined = undefined;

// 3. Typed Arrays
const ratings: number[] = [4.5, 5.0, 4.2, 4.8];
const tags: string[] = ["electronics", "accessories", "wireless"];

// 4. any vs unknown demo
let dangerousVar: any = "I can do anything";
dangerousVar = 100; // No error

let safeVar: unknown = "TypeScript is safe";
// safeVar.toUpperCase(); // Error: 'safeVar' is of type 'unknown'
if (typeof safeVar === "string") {
  console.log(safeVar.toUpperCase()); // Allowed after type check
}

console.log(`Product: ${productName} ($${unitPrice}), In Stock: ${inStock}`);
console.log(`Ratings count: ${ratings.length}`);
```

---

## 5. Code Explanation

- `const ratings: number[] = [...]`: Denotes an array that holds numbers only.
- `let discountCode: string | null = null`: Uses a union type to allow either a string or `null`.
- `typeof safeVar === "string"`: JavaScript's `typeof` operator checks the runtime type; TypeScript uses this check to narrow `unknown` down to `string`.

---

## 6. Common Mistakes

### Mistake 1: Mixed types in a typed array
```ts
let names: string[] = ["Alice", "Bob", 42]; // ❌ Type 'number' is not assignable to type 'string'.
```
**Fix:** Keep array elements consistent with the declared element type:
```ts
let names: string[] = ["Alice", "Bob", "Charlie"];
```

### Mistake 2: Calling methods directly on `unknown`
```ts
let data: unknown = "hello world";
console.log(data.length); // ❌ 'data' is of type 'unknown'.
```
**Fix:** Check with `typeof` before accessing properties:
```ts
if (typeof data === "string") {
  console.log(data.length); // ✅ Allowed!
}
```

---

## 7. Exercises

Work in your own file or [examples/exercises.ts](./examples/exercises.ts):

1. **Exercise 1 (Product Info):** Declare variables for a product's `name` (`string`), `price` (`number`), and `isAvailable` (`boolean`). Print a description of the product.
2. **Exercise 2 (Languages Array):** Create a typed array of at least 4 programming languages (`string[]`). Add a new language to the array using `.push()` and log the total count.
3. **Exercise 3 (Average Calculation):** Create a typed array of five test scores (`number[]`). Compute and print their average.
4. **Exercise 4 (Type Fixing):** Fix the type errors in this snippet:
   ```ts
   let city: string = 10020;
   let isOnline: boolean = 1;
   let tags: string[] = ["laptop", 99, true];
   ```
5. **Exercise 5 (`any` vs `unknown`):** Write a small code example showing why calling `.trim()` on an `any` variable containing a number causes a runtime error, and show how `unknown` prevents that bug at compile-time.

---

## 8. Hints

- **Hint for Ex 1:** Use descriptive names like `productName`, `productPrice`, `isAvailable`.
- **Hint for Ex 2:** `.push("Go")` adds an element to the end of an array.
- **Hint for Ex 3:** Sum up the 5 numbers using a loop or by accessing elements by index (`scores[0] + ...`), then divide by `scores.length`.
- **Hint for Ex 4:** Ensure types match their values: wrap strings in quotes, use `true`/`false` for boolean, and keep arrays uniform.
- **Hint for Ex 5:** Use `if (typeof value === "string")` with `unknown`.

---

## 9. Solutions

Full solutions are available in [solutions.md](./solutions.md).

---

## 10. Completion Checklist

- [ ] Read all Day 2 explanations.
- [ ] Understand primitives, `null`, and `undefined`.
- [ ] Learn typed array syntax (`string[]`, `number[]`).
- [ ] Understand why `any` is dangerous and why `unknown` is safer.
- [ ] Run `examples/primitive-types.ts`.
- [ ] Complete Exercises 1 through 5.
- [ ] Check answers against [solutions.md](./solutions.md).
