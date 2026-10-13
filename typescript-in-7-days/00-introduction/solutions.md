# Solutions — 00: Introduction to TypeScript

Here are the complete, runnable solutions for the exercises in [00-introduction/README.md](./README.md).

---

## Exercise 1: Personal Welcome

**Task:** Create a program that declares a string variable for your name, a string variable for your favorite programming language, and logs a formatted welcome message.

```ts
// exercise-01.ts
const myName: string = "Sachintha";
const favoriteLanguage: string = "TypeScript";

console.log(
  `Hello, my name is ${myName} and I am learning TypeScript to build ${favoriteLanguage} projects!`
);
```

### Explanation:
- We declare two constants using `const` and annotate their types as `: string`.
- We use ES6 template literals with backticks (`` ` ``) and `${}` interpolation to print a clean sentence without manual string concatenation (`+`).

---

## Exercise 2: City & Weather

**Task:** Create a program with a string variable `cityName`, a number variable `temperatureCelsius`, and a boolean variable `isRaining`. Print a formatted weather summary.

```ts
// exercise-02.ts
const cityName: string = "Colombo";
const temperatureCelsius: number = 29.5;
const isRaining: boolean = false;

console.log("=== Daily Weather Report ===");
console.log(`City: ${cityName}`);
console.log(`Temperature: ${temperatureCelsius}°C`);
console.log(`Raining right now? ${isRaining ? "Yes, carry an umbrella!" : "No, clear skies."}`);
```

### Explanation:
- `cityName` has the type `: string`.
- `temperatureCelsius` has the type `: number` (TypeScript numbers handle integers and floats seamlessly).
- `isRaining` has the type `: boolean` (`true` or `false`).
- We can use a ternary operator (`condition ? ifTrue : ifFalse`) to display a reader-friendly message based on boolean state.

---

## Exercise 3: Compiler Error and Fix

**Task:** Deliberately trigger a compiler error, observe the message, and fix it.

### Step 1: Deliberate Error
```ts
// error-demo.ts
let currentYear: number = "2026"; // ❌ Type 'string' is not assignable to type 'number'.
```

### Compiler Output when running `npx tsc`:
```text
error-demo.ts:2:5 - error TS2322: Type 'string' is not assignable to type 'number'.

2 let currentYear: number = "2026";
      ~~~~~~~~~~~
```

### Step 2: The Fix
```ts
// fixed-demo.ts
let currentYear: number = 2026; // ✅ Correct numeric value
console.log(`Current Year: ${currentYear}`);
```

### Explanation:
- TypeScript caught the mistake before the program ever ran.
- In plain JavaScript, assigning `"2026"` would silently pass, which could later lead to bugs like `"2026" + 1 === "20261"` instead of `2027`.
