# 💡 Solutions — Day 0: Introduction to TypeScript

> Here are the complete, runnable solutions and detailed explanations for the Day 0 exercises in [00-introduction/README.md](./README.md).

---

## Exercise 1: Personal Introduction

**Objective:** Declare typed variables for your name, favorite programming language, and learning goal, then log a formatted introductory message.

```ts
// exercise-01.ts
const myName: string = "Sachintha";
const favoriteLanguage: string = "TypeScript";
const learningGoal: string = "build scalable, type-safe full-stack applications";

console.log(
  `Hello! My name is ${myName}. I am learning ${favoriteLanguage} to ${learningGoal}!`
);
```

### 🔍 Breakdown & Why It Matters:
- We use `const` because these values do not need to be reassigned during the script's run.
- Type annotations (`: string`) guarantee that if someone accidentally passes a number or object later, TypeScript flags it before runtime.
- ES6 template literals (`` ` ``) allow clean string interpolation using `${}` without messy `+` concatenation.

---

## Exercise 2: City & Weather Report

**Objective:** Create a program with a string variable `cityName`, a number variable `temperatureCelsius`, and a boolean variable `isSunny`. Print a formatted daily weather report.

```ts
// exercise-02.ts
const cityName: string = "Colombo";
const temperatureCelsius: number = 29.5;
const isSunny: boolean = true;

console.log("=== 🌤️ Daily Weather Report ===");
console.log(`📍 City: ${cityName}`);
console.log(`🌡️ Temperature: ${temperatureCelsius}°C`);
console.log(`☀️ Weather Condition: ${isSunny ? "Sunny skies" : "Overcast / Rain"}`);
console.log("================================");
```

### 🔍 Breakdown & Why It Matters:
- `temperatureCelsius: number` demonstrates that TypeScript's `number` type seamlessly represents both integers and floating-point decimal numbers.
- `isSunny: boolean` can strictly only be `true` or `false`.
- The ternary operator (`condition ? ifTrue : ifFalse`) allows concise conditional display without bulky `if/else` blocks.

---

## Exercise 3: Compiler Error and Fix Experiment

**Objective:** Deliberately trigger a compiler error, inspect the compiler's diagnostic output, and fix it.

### Step 1: Deliberate Error
```ts
// error-demo.ts
let currentYear: number = "2026"; // ❌ TS2322: Type 'string' is not assignable to type 'number'.
```

### Terminal Output from `npx tsc`:
```text
error-demo.ts:2:5 - error TS2322: Type 'string' is not assignable to type 'number'.

2 let currentYear: number = "2026";
      ~~~~~~~~~~~
```

### Step 2: The Solution
```ts
// fixed-demo.ts
let currentYear: number = 2026; // ✅ Correct numeric literal
console.log(`Current Year: ${currentYear}`);
```

### 🔍 Why This Matters:
- In vanilla JavaScript, assigning `"2026"` to a variable intended to hold a year does not trigger any warning. Later, if you do `currentYear + 1`, JavaScript evaluates it as `"20261"` rather than `2027`—a classic silent bug.
- TypeScript catches this mistake in your editor before you ever hit save or run the program.
