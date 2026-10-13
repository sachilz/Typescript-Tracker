# 01: Day 1 — TypeScript Basics

Welcome to Day 1. Today focuses on writing basic TypeScript: syntax rules, declaring variables with `let` and `const`, using type annotations, letting the compiler infer types, and printing output.

---

## 1. Learning Objectives

By the end of this day, you will be able to:

- Understand basic TypeScript syntax conventions.
- Know when to use `const` versus `let`.
- Write type annotations on variables.
- Understand how type inference works when annotations are omitted.
- Use single-line and multi-line comments.
- Print formatted output using `console.log()` and template literals.
- Identify and fix common beginner syntax errors.

---

## 2. Topics to Learn

- [ ] Basic syntax rules
- [ ] `const` vs `let`
- [ ] Explicit type annotations
- [ ] Automatic type inference
- [ ] Comments in TypeScript
- [ ] Output with `console.log()`
- [ ] Common syntax and type mistakes
- [ ] 5 practice exercises

---

## 3. Explanations

### Basic Syntax Rules

TypeScript uses the same syntax foundations as modern JavaScript:
- Statements typically end with a semicolon (`;`).
- Code blocks are enclosed in curly braces (`{ }`).
- Strings can be defined using single quotes (`'`), double quotes (`"`), or backticks (`` ` ``).

### `const` vs `let`

- **`const`**: Declares a variable whose reference cannot be reassigned. Use this by default for any value that will not change.
- **`let`**: Declares a variable that can be reassigned later. Use this for accumulators, loop counters, and values that update.
- **`var`**: Avoid using `var`. It has function scoping and hoisting behaviors that make code harder to reason about.

```ts
const maxRetries = 3;
// maxRetries = 4; // Error: Cannot assign to 'maxRetries' because it is a constant.

let attempts = 0;
attempts = 1; // Allowed
```

### Type Annotations

A type annotation describes what type of data a variable can hold. It is written with a colon `:` after the variable name:

```ts
const username: string = "alex";
let score: number = 85;
let isActive: boolean = true;
```

If you try to assign a value of an incompatible type, the compiler warns you:

```ts
score = "ninety"; // Error: Type 'string' is not assignable to type 'number'.
```

### Type Inference

You do not need to annotate every variable. If you assign an initial value when declaring a variable, TypeScript infers its type automatically:

```ts
let city = "London"; // Inferred as string
// city = 100; // Error: Type 'number' is not assignable to type 'string'.
```

Use explicit annotations when:
- Declaring a variable without an immediate value.
- Writing function parameters and return types.
- You want to be explicit about intent.

### Comments

Comments are notes left in the code. The compiler ignores them:

```ts
// This is a single-line comment

/*
 * This is a multi-line comment.
 * It can span across multiple lines.
 */
```

### Console Output

Use `console.log()` to output values to the terminal. Modern JavaScript and TypeScript prefer template strings with backticks for embedding variables:

```ts
const user = "Sam";
const points = 50;

console.log(`User ${user} has ${points} points.`);
```

---

## 4. Code Example

Here is the runnable example for Day 1 ([examples/basics.ts](./examples/basics.ts)):

```ts
// 01-day-1-typescript-basics/examples/basics.ts

// 1. Immutable values with const
const schoolName: string = "TypeScript Academy";
const maxScore: number = 100;

// 2. Mutable values with let
let currentStudent: string = "Emma Watson";
let studentScore: number = 88;
let isEnrolled: boolean = true;

// 3. Type inference
let city = "London"; // Inferred as string

// 4. Reassignment
studentScore = 92;

// 5. Console output
console.log("=== Day 1: TypeScript Basics ===");
console.log(`School:   ${schoolName}`);
console.log(`Student:  ${currentStudent} (City: ${city})`);
console.log(`Score:    ${studentScore} / ${maxScore}`);
console.log(`Enrolled: ${isEnrolled}`);
console.log("================================");
```

### Running the Example

```bash
npm run start:day1
```

**Output:**
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

- `const schoolName: string = ...`: Declares a constant that cannot be reassigned.
- `let studentScore: number = 88`: Declares a number variable that can be updated.
- `studentScore = 92`: Valid reassignment because `92` is also a number.
- `let city = "London"`: TypeScript detects that `"London"` is a string and gives `city` the type `string`.
- Template literals (`${...}`) inject variable values directly into the output string.

---

## 6. Common Mistakes

### Mistake 1: Reassigning a `const`
```ts
const course = "TypeScript";
course = "JavaScript"; // Error: Cannot assign to 'course' because it is a constant.
```
**Fix:** Use `let` if the value needs to change:
```ts
let course = "TypeScript";
course = "JavaScript";
```

### Mistake 2: Changing the type during reassignment
```ts
let age = 25;
age = "twenty-six"; // Error: Type 'string' is not assignable to type 'number'.
```
**Fix:** Keep the value consistent with the initial type:
```ts
let age = 25;
age = 26;
```

### Mistake 3: Misplacing the colon in type annotations
```ts
let name = string = "Sarah"; // Syntax error
```
**Fix:** Use a colon for the type, and an equals sign for the value:
```ts
let name: string = "Sarah";
```

---

## 7. Exercises

Practise in [examples/exercises.ts](./examples/exercises.ts) or in a separate file:

1. **Exercise 1 (Personal Info):** Declare constants for your name (`string`), age (`number`), and country (`string`). Print them in a single readable sentence.
   - *Expected output format:* `My name is [Name], I am [Age] years old, from [Country].`
2. **Exercise 2 (Student Details):** Create variables for a student's ID (`number`), name (`string`), and whether they are active (`boolean`). Update their active status from `true` to `false` and log both states.
3. **Exercise 3 (Calculate Sum):** Declare two numbers `num1` and `num2`, calculate their sum into a variable `sum`, and print `"The sum of X and Y is Z"`.
4. **Exercise 4 (Let and Const in Practice):** Create a simple bank balance example. Use `const` for `accountNumber` and `accountHolder`, and `let` for `balance`. Add a deposit of $500 and print the updated balance.
5. **Exercise 5 (Debugging Challenge):** Identify and fix the three errors in this snippet:
   ```ts
   // Intentional errors to fix:
   const totalMarks: number = 500;
   totalMarks = 550;

   let candidate: string = 101;

   let isPassed: boolean = "yes";
   ```

---

## 8. Hints

- **Hint for Ex 1:** Use `const` because your name, age, and country do not need to change during this run.
- **Hint for Ex 2:** Use `let` for the boolean variable so you can reassign it.
- **Hint for Ex 3:** Basic math operators (`+`, `-`, `*`, `/`) work the same in TypeScript as in JavaScript.
- **Hint for Ex 4:** Update the balance using `balance += depositAmount;`.
- **Hint for Ex 5:** Check what `const` allows, and remember that `"yes"` is a string, not a boolean.

---

## 9. Solutions

Complete solutions and explanations are in [solutions.md](./solutions.md).

---

## 10. Completion Checklist

- [ ] Know the difference between `const` and `let`.
- [ ] Understand when to write explicit type annotations.
- [ ] Understand how TypeScript infers types.
- [ ] Ran `npm run start:day1`.
- [ ] Attempted Exercises 1 through 5.
- [ ] Checked your answers in [solutions.md](./solutions.md).

---

[⬅️ Day 0: Introduction](../00-introduction/README.md) | [Next: Day 2 — Types and Variables ➔](../02-day-2-types-and-variables/README.md)
