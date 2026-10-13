# Solutions — Day 2: Types and Variables

Complete solutions and explanations for the Day 2 exercises.

---

## Exercise 1: Product Information

```ts
const productName: string = "Ultra-Wide Gaming Monitor";
const productPrice: number = 329.99;
const isAvailable: boolean = true;

console.log(`Product: ${productName}`);
console.log(`Price: $${productPrice}`);
console.log(`Availability: ${isAvailable ? "In Stock" : "Out of Stock"}`);
```

### Explanation:
- `: string`, `: number`, and `: boolean` ensure each property holds the correct primitive type.
- Clean formatting gives users immediate clarity.

---

## Exercise 2: Typed Array of Programming Languages

```ts
const programmingLanguages: string[] = ["TypeScript", "JavaScript", "Python", "Rust"];

// Add a 5th language
programmingLanguages.push("Go");

console.log(`Total languages: ${programmingLanguages.length}`);
console.log(`Languages: ${programmingLanguages.join(", ")}`);
```

### Explanation:
- `string[]` represents an array containing only strings.
- Calling `.push(123)` would produce an error: `Argument of type 'number' is not assignable to parameter of type 'string'`.

---

## Exercise 3: Average of Five Numbers

```ts
const scores: number[] = [85, 92, 78, 96, 89];

// Sum the elements
let sum: number = 0;
for (const score of scores) {
  sum += score;
}

const average: number = sum / scores.length;
console.log(`Scores: ${scores.join(", ")}`);
console.log(`Average Score: ${average.toFixed(2)}`);
```

### Explanation:
- We iterate over `scores` using `for...of` or reduce/sum.
- `average.toFixed(2)` formats the number to two decimal places.

---

## Exercise 4: Fixing Incorrectly Typed Variables

### Buggy Code:
```ts
let city: string = 10020;         // ❌ 10020 is a number, not a string
let isOnline: boolean = 1;         // ❌ 1 is a number, not a boolean
let tags: string[] = ["laptop", 99, true]; // ❌ Mixed types in string[]
```

### Fixed Code:
```ts
let city: string = "10020"; // Or "New York"
let isOnline: boolean = true;
let tags: string[] = ["laptop", "electronics", "gadgets"];

console.log(`City: ${city}, Online: ${isOnline}, Tags: ${tags.join(", ")}`);
```

### Explanation:
- Numbers like postal codes should be wrapped in quotes if declared as `string`.
- Booleans in TypeScript can only be literal `true` or `false` (not truthy integers like `1` or `0`).
- Arrays with type `string[]` cannot contain numbers or booleans.

---

## Exercise 5: Difference Between `any` and `unknown`

```ts
// 1. DANGEROUS: Using 'any'
let valueAny: any = 42;
// TypeScript allows this compilation, but at runtime it will crash:
// TypeError: valueAny.trim is not a function
try {
  valueAny.trim();
} catch (error) {
  console.log("Runtime Crash caught from 'any':", (error as Error).message);
}

// 2. SAFE: Using 'unknown'
let valueUnknown: unknown = "   Hello TypeScript!   ";

// valueUnknown.trim(); // ❌ Compiler error TS2571: Object is of type 'unknown'.

// TypeScript forces us to narrow down the type first:
if (typeof valueUnknown === "string") {
  console.log("Safe result with 'unknown':", valueUnknown.trim()); // ✅ Valid
}
```

### Summary of Differences:
| Type | Type Checking | Can Call Methods Freely? | Safety Level |
| :--- | :--- | :--- | :--- |
| `any` | Disabled completely | Yes (risks runtime crashes) | Unsafe |
| `unknown` | Strictly enforced | No (requires prior type check) | Safe |
