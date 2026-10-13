# Day 1: TypeScript Basics

Welcome to Day 1! Today we explore the core building blocks of TypeScript: syntax rules, variable declarations with `let` and `const`, explicit type annotations, type inference, comments, and console output.

---

## 1. Learning Objectives

By the end of Day 1, you will:
- Understand basic TypeScript syntax and code layout.
- Confidently use `let` for mutable variables and `const` for immutable variables.
- Write explicit type annotations for basic types.
- Understand how TypeScript automatically infers types.
- Use single-line and multi-line comments effectively.
- Format console output cleanly using `console.log()` and template strings.
- Recognize and resolve frequent beginner syntax and type errors.

---

## 2. Topics to Learn

- [ ] TypeScript basic syntax rules
- [ ] Variables with `let` vs. `const`
- [ ] Explicit type annotations (`: string`, `: number`, `: boolean`)
- [ ] Type inference in action
- [ ] Comments in TypeScript (`//` and `/* */`)
- [ ] Terminal output with `console.log()`
- [ ] Common beginner syntax & typing errors

---

## 3. Simple Explanations

### TypeScript Syntax
TypeScript shares the same foundation as modern JavaScript. Statements usually end with a semicolon (`;`), code blocks are enclosed in curly braces (`{}`), and values are assigned using the equals sign (`=`).

### `let` vs. `const`
- **`const`**: Use when the value should **never change** after declaration. Default to `const` whenever possible.
- **`let`**: Use when you expect the value to be **reassigned** later (such as a counter in a loop or an accumulating total).
- Avoid `var` in modern TypeScript because it has outdated scoping rules.

### Basic Type Annotations
A type annotation is placed after the variable name with a colon (`:`):
```ts
let studentName: string = "Alice";
let score: number = 95;
let hasPassed: boolean = true;
```
If you later attempt `studentName = 100;`, the TypeScript compiler flags an error before you run the code.

### Type Inference
If you declare a variable and give it an initial value on the same line, you do not always need to type `: string` or `: number`. TypeScript inspects the assigned value and automatically infers its type:
```ts
let score = 95; // TypeScript automatically knows score is a number!
// score = "A+"; // ❌ Type 'string' is not assignable to type 'number'.
```
*Rule of thumb:* Let TypeScript infer simple variables, but use explicit annotations for function parameters or when declaring a variable before assigning its value.

### Comments
Comments document your thought process and are ignored by the compiler:
- `// This is a single-line comment`
- `/* This is a multi-line comment */`

### Printing Output with `console.log()`
`console.log()` prints data to the terminal. You can pass multiple values or use template literals:
```ts
console.log("Name:", studentName, "Score:", score);
console.log(`Student ${studentName} scored ${score} points.`);
```

---

## 4. Code Examples

See runnable code in [examples/basics.ts](./examples/basics.ts):

```ts
// 01-day-1-typescript-basics/examples/basics.ts

// 1. Using const for constants with explicit annotations
const schoolName: string = "TypeScript Academy";
const maxScore: number = 100;

// 2. Using let for variables that can change
let currentStudent: string = "Emma Watson";
let studentScore: number = 88;
let isEnrolled: boolean = true;

// 3. Type inference
let city = "London"; // Inferred as string

// 4. Updating a let variable
studentScore = 92; // Valid: new number

// 5. Output
console.log("=== Student Record ===");
console.log(`School: ${schoolName}`);
console.log(`Student: ${currentStudent} from ${city}`);
console.log(`Score: ${studentScore} / ${maxScore}`);
console.log(`Enrolled Status: ${isEnrolled}`);
```

---

## 5. Code Explanation

- `const schoolName: string = ...`: Declares an immutable string constant.
- `let studentScore: number = 88`: Declares a mutable numeric variable initialized to 88.
- `studentScore = 92`: Reassigns `studentScore`. Allowed because `let` permits reassignment and `92` is a valid number.
- `let city = "London"`: Demonstrates type inference; hovering over `city` in your editor displays `let city: string`.
- Template literals with backticks allow embedding variables directly using `${}`.

---

## 6. Common Mistakes

### Mistake 1: Reassigning a `const`
```ts
const course = "TypeScript";
course = "JavaScript"; // ❌ Cannot assign to 'course' because it is a constant.
```
**Fix:** If the value must change, use `let`:
```ts
let course = "TypeScript";
course = "JavaScript"; // ✅ Allowed
```

### Mistake 2: Type Mismatch During Reassignment
```ts
let age: number = 20;
age = "twenty-one"; // ❌ Type 'string' is not assignable to type 'number'.
```
**Fix:** Keep the reassigned value consistent with the variable's declared type:
```ts
let age: number = 20;
age = 21; // ✅ Valid number
```

### Mistake 3: Missing colon or using equals in type annotation
```ts
let userName = string = "John"; // ❌ Syntax error!
```
**Fix:** Use colon for the type, equals for the value:
```ts
let userName: string = "John"; // ✅ Correct
```

---

## 7. Exercises

Implement these exercises in your own code or in [examples/exercises.ts](./examples/exercises.ts):

1. **Exercise 1 (Personal Info):** Declare constants for your name (`string`), age (`number`), and country (`string`). Print them in a single readable sentence.
2. **Exercise 2 (Student Details):** Create variables for a student's ID (`number`), name (`string`), and whether they are active (`boolean`). Update the status from `true` to `false` and print both states.
3. **Exercise 3 (Calculate Sum):** Declare two numbers `num1` and `num2`, calculate their sum into a variable `sum`, and print `"The sum of X and Y is Z"`.
4. **Exercise 4 (Let vs Const):** Create a program demonstrating an account balance. Use `const` for `accountHolder` and `accountNumber`, and `let` for `balance`. Add a deposit to the balance and print the updated total.
5. **Exercise 5 (Debugging Practice):** Identify and fix the 3 errors in this snippet:
   ```ts
   const totalMarks: number = 500;
   totalMarks = 550;

   let candidate: string = 101;

   let isPassed: boolean = "yes";
   ```

---

## 8. Hints

- **Hint for Ex 1:** Use `const` since your name, age, and country will not change during this single program run.
- **Hint for Ex 2:** Use `let` for the active status because it needs to be updated.
- **Hint for Ex 3:** Basic arithmetic operators (`+`, `-`, `*`, `/`) work just like in JavaScript.
- **Hint for Ex 4:** ``balance = balance + depositAmount`` or ``balance += depositAmount``.
- **Hint for Ex 5:** Look at what `const` forbids, and check what types `101` and `"yes"` actually are.

---

## 9. Solutions

Full solutions with step-by-step commentary are in [solutions.md](./solutions.md).

---

## 10. Completion Checklist

- [ ] Read all Day 1 explanations.
- [ ] Understand when to choose `const` vs. `let`.
- [ ] Understand how type annotations and type inference work.
- [ ] Run `examples/basics.ts`.
- [ ] Completed Exercises 1 through 5.
- [ ] Verified your answers against [solutions.md](./solutions.md).
