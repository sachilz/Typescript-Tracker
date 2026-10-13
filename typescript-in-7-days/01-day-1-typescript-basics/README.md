# 🚀 Day 1: TypeScript Basics

> **Day 1 of 7: Building Strong Foundations**  
> Welcome to your first official day of writing TypeScript! Today you will learn how TypeScript syntax works, how to choose between `let` and `const`, how type annotations protect your variables, and how TypeScript's smart compiler infers types automatically.

---

### 📌 Quick Overview

| ⏱️ Estimated Time | 🎯 Level | 🛠️ Concepts | 📚 Prerequisites |
| :--- | :--- | :--- | :--- |
| **30–40 minutes** | Beginner | Syntax, `let`/`const`, Annotations, Inference | Day 0 (Setup) |

---

## 1. Learning Objectives

By the end of Day 1, you will be able to:
- Write valid TypeScript syntax with correct formatting and punctuation.
- Confidently choose between `const` (immutable) and `let` (mutable).
- Add explicit type annotations (`: string`, `: number`, `: boolean`) to variables.
- Understand how TypeScript's **type inference engine** automatically detects types.
- Write single-line (`//`) and multi-line (`/* */`) documentation comments.
- Format terminal output cleanly using `console.log()` and template literals.
- Identify, understand, and fix the 3 most common beginner syntax errors.

---

## 2. Topics to Learn

- [ ] Basic TypeScript syntax rules
- [ ] Variables: `let` vs. `const` (and why to avoid `var`)
- [ ] Explicit type annotations syntax
- [ ] Type inference in practice
- [ ] Single-line and multi-line comments
- [ ] Formatted console output with `console.log()`
- [ ] Common beginner syntax & type errors
- [ ] 5 hands-on practice exercises
- [ ] 📢 Share your Day 1 milestone on LinkedIn

---

## 3. Simple Explanations

### TypeScript Syntax Rules
TypeScript inherits JavaScript's C-family syntax:
- Every statement normally ends with a semicolon (`;`).
- Code blocks are grouped inside curly braces `{ ... }`.
- Strings are enclosed in single quotes `'...'`, double quotes `"..."`, or backticks `` `...` ``.

### `const` vs. `let` (Modern Variable Declarations)

```text
┌───────────┬────────────────────────────────────────┬───────────────────────┐
│ Keyword   │ Reassignment Allowed?                  │ When to Use           │
├───────────┼────────────────────────────────────────┼───────────────────────┤
│ const     │ ❌ Never (Value is locked after creation)│ Default choice for 90%│
│ let       │ ✅ Yes (Can update value anytime)      │ Counters, loops, state│
│ var       │ ⚠️ Avoid (Outdated scoping rules)      │ Never in modern TS    │
└───────────┴────────────────────────────────────────┴───────────────────────┘
```

> [!TIP]
> **Golden Rule:** Always declare variables with `const` first. Only change to `let` when you know the variable needs to be reassigned later.

---

### Explicit Type Annotations
A **type annotation** explicitly tells TypeScript what kind of data a variable is allowed to hold. You write a colon `:` followed by the type name after the variable identifier:

```ts
const studentName: string = "Emma";
let score: number = 95;
let isEnrolled: boolean = true;
```

If you try to reassign `score = "ninety-five"`, the TypeScript compiler flags an error before you run the code.

---

### Type Inference: The Smart Assistant
You do not have to annotate every single variable. If you assign an initial value when declaring a variable, TypeScript **infers** (guesses accurately) the type for you:

```ts
let city = "London"; // TypeScript infers: let city: string
// city = 42; ❌ Error: Type 'number' is not assignable to type 'string'.
```

```text
  You write:               TypeScript sees:
┌──────────────────────┐  ┌──────────────────────────────┐
│ let city = "London"; │  │ let city: string = "London"; │
└──────────────────────┘  └──────────────────────────────┘
```

---

### Comments
Comments explain *why* code exists and are completely stripped during compilation:

```ts
// This is a single-line comment (great for quick notes)

/* 
 * This is a multi-line comment.
 * Useful for longer explanations or documentation.
 */
```

---

### Formatted Output with `console.log()`
Modern TypeScript code uses template literals with backticks (`` ` ``) to embed variables cleanly:

```ts
const user = "Alex";
const points = 150;

// Old JS way:
console.log("User: " + user + " scored " + points + " points.");

// Modern TypeScript way:
console.log(`User: ${user} scored ${points} points.`);
```

---

## 4. Code Examples

Run this example directly from [examples/basics.ts](./examples/basics.ts):

```ts
// 01-day-1-typescript-basics/examples/basics.ts

// 1. Immutable constants with explicit types
const schoolName: string = "TypeScript Academy";
const maxScore: number = 100;

// 2. Mutable variables with let
let currentStudent: string = "Emma Watson";
let studentScore: number = 88;
let isEnrolled: boolean = true;

// 3. Type inference (TypeScript knows this is a string)
let city = "London";

// 4. Reassigning a let variable
studentScore = 92; // ✅ Allowed: 92 is a number

// 5. Formatted console output
console.log("=== Day 1: TypeScript Basics ===");
console.log(`School:   ${schoolName}`);
console.log(`Student:  ${currentStudent} (City: ${city})`);
console.log(`Score:    ${studentScore} / ${maxScore}`);
console.log(`Enrolled: ${isEnrolled}`);
console.log("================================");
```

### How to Run This Example:
```bash
npm run start:day1
```

**Expected Terminal Output:**
```text
=== Day 1: TypeScript Basics ===
School:   TypeScript Academy
Student:  Emma Watson (City: London)
Score:    92 / 100
Enrolled: true
================================
```

---

## 5. Code Explanation

- `const schoolName: string = "TypeScript Academy"`: Immutable constant. Cannot be reassigned.
- `let studentScore: number = 88`: Mutable variable. Declared with `let` to permit updating later.
- `studentScore = 92`: Valid reassignment because `92` matches the `number` type.
- `let city = "London"`: TypeScript's inference engine automatically types `city` as `string`.
- `${currentStudent}`: Interpolates the string variable directly into the template literal.

---

## 6. Common Mistakes & Quick Fixes

### ❌ Mistake 1: Reassigning a `const` variable
```ts
const course = "TypeScript";
course = "JavaScript"; // ❌ Cannot assign to 'course' because it is a constant.
```
> [!TIP]
> **Fix:** If the value must change, declare it with `let`:
> ```ts
> let course = "TypeScript";
> course = "JavaScript"; // ✅ Allowed
> ```

---

### ❌ Mistake 2: Changing the type of a variable during reassignment
```ts
let userAge = 25;
userAge = "26"; // ❌ Type 'string' is not assignable to type 'number'.
```
> [!TIP]
> **Fix:** Keep reassigned values consistent with the original type:
> ```ts
> let userAge = 25;
> userAge = 26; // ✅ Allowed
> ```

---

### ❌ Mistake 3: Confusing colon `:` with equals `=` in annotations
```ts
let studentName = string = "Alice"; // ❌ Syntax error!
```
> [!TIP]
> **Fix:** Use colon `:` for the type, and equals `=` for the value:
> ```ts
> let studentName: string = "Alice"; // ✅ Correct
> ```

---

## 7. Exercises

Try these 5 exercises in [examples/exercises.ts](./examples/exercises.ts) or your own file:

1. **Exercise 1 (Personal Bio):** Create constants for your name (`string`), age (`number`), and country (`string`). Print them in a single readable sentence using template literals.
2. **Exercise 2 (Student Status):** Create variables for a student's ID (`number`), name (`string`), and enrollment status (`boolean`). Update their status from `true` to `false` and print both states.
3. **Exercise 3 (Math Sum):** Declare two numbers `num1` and `num2`. Compute their sum into a variable `sum: number` and print `"The sum of X and Y is Z"`.
4. **Exercise 4 (Bank Account):** Create an account record using `const` for `accountNumber` and `accountHolder`, and `let` for `balance`. Add a deposit amount of $500 and print the updated balance.
5. **Exercise 5 (Debugging Challenge):** Identify and fix the 3 errors in this snippet:
   ```ts
   const totalMarks: number = 500;
   totalMarks = 550;

   let candidate: string = 101;

   let isPassed: boolean = "yes";
   ```

---

## 8. Hints

- **Hint for Ex 1:** Use `const` since your name and country won't change during the script.
- **Hint for Ex 2:** Use `let` for the boolean variable since you will reassign it.
- **Hint for Ex 3:** Basic math operations (`+`, `-`, `*`, `/`) work just like in standard JavaScript.
- **Hint for Ex 4:** Update the balance using `balance += depositAmount;`.
- **Hint for Ex 5:** `const` cannot be reassigned; `101` is a number (use quotes `"101"` or change type); `"yes"` is not a boolean.

---

## 9. Solutions

Complete solutions and explanations are available in [solutions.md](./solutions.md).

---

## 10. Completion Checklist

- [ ] Understand TypeScript syntax and punctuation rules.
- [ ] Know when to use `const` vs. `let`.
- [ ] Understand type annotations and type inference.
- [ ] Run `npm run start:day1`.
- [ ] Completed Exercises 1 through 5.
- [ ] Checked answers against [solutions.md](./solutions.md).

---

## 📢 Share Your Day 1 Milestone on LinkedIn!

```text
🚀 Day 1 of the 7-Day TypeScript Challenge complete!

Today I covered the core building blocks of TypeScript:
✅ Static syntax rules and clean code conventions
✅ const vs let and preventing accidental reassignment
✅ Explicit type annotations vs automatic type inference
✅ Identifying and resolving beginner compiler errors

Building strong foundations one day at a time! 💻

#TypeScript #JavaScript #WebDevelopment #Programming #100DaysOfCode #LearnInPublic #TechCareers
```

---

| [⬅️ Day 0: Introduction](../00-introduction/README.md) | [Day 2: Types & Variables ➡️](../02-day-2-types-and-variables/README.md) |
| :--- | :--- |
