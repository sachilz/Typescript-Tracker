# 00: Introduction to TypeScript

Welcome to Day 0. This guide explains what TypeScript is, how it fits into the JavaScript ecosystem, how code gets compiled, and how to set up your environment to write and run your first TypeScript file.

---

## 1. Learning Objectives

By the end of this section, you will:

- Understand what TypeScript is and why it exists.
- Know the main differences between JavaScript and TypeScript.
- Understand how TypeScript code gets checked and turned into JavaScript.
- Understand what static typing and type inference mean.
- Have a working development setup with Node.js and the TypeScript compiler.
- Be able to compile and run your first TypeScript file.

---

## 2. Topics to Learn

- [ ] What is TypeScript?
- [ ] Why was TypeScript created?
- [ ] JavaScript vs TypeScript comparison
- [ ] Why developers choose TypeScript
- [ ] Where TypeScript is used
- [ ] Static typing and type inference
- [ ] The TypeScript compiler (`tsc`)
- [ ] Browser execution and compilation flow
- [ ] Installation and setup commands
- [ ] Writing and running your first program
- [ ] Recommended study strategy

---

## 3. Explanations

### What is TypeScript?

TypeScript is an open-source language developed by Microsoft. It is a **typed superset of JavaScript**.

- **Superset:** All valid JavaScript is valid TypeScript. You do not have to discard existing JavaScript knowledge; TypeScript adds features on top of it.
- **Typed:** TypeScript adds an optional type system. You can describe the shape of your data, the arguments a function accepts, and the value it returns.

```text
+------------------------------------------------+
| TypeScript                                     |
| (Type checking, interfaces, modern tooling)    |
|                                                |
|   +----------------------------------------+   |
|   | JavaScript                             |   |
|   | (Variables, functions, loops, objects) |   |
|   +----------------------------------------+   |
+------------------------------------------------+
```

### Why Was TypeScript Created?

JavaScript was designed in 1995 for small, interactive scripts on web pages. Today, JavaScript powers entire full-stack applications with hundreds of thousands of lines of code.

As JavaScript codebases grew, developers ran into common issues:

- Typos in property names (`user.firtsName`) evaluate to `undefined` without an error.
- Accidental type coercion (such as `"20" + 5` becoming `"205"` instead of `25`).
- Finding errors only when a user triggers the specific code path in production.

TypeScript was built to catch these problems while writing code, before anything reaches a user.

### JavaScript vs TypeScript Comparison

| Feature | JavaScript | TypeScript |
| :--- | :--- | :--- |
| **Type Checking** | Dynamic (checked at runtime) | Static (checked at compile time) |
| **Error Detection** | When the code actually runs | In your editor while typing |
| **Execution** | Runs directly in browsers and Node.js | Must be compiled into JavaScript first |
| **Tooling** | Basic text suggestions | Context-aware autocomplete and refactoring |
| **Type Annotations**| Not supported natively | Supported optionally or strictly |

### Why Developers Use TypeScript

1. **Catch mistakes early:** Type errors and typos are caught in your editor or during compilation.
2. **Editor autocomplete (IntelliSense):** Your editor knows what properties exist on an object and suggests them automatically.
3. **Clear code contracts:** Types document what a function expects and returns without needing to read the entire function body.
4. **Safer refactoring:** Renaming a property or changing a function signature highlights every file that needs to be updated.

### Where TypeScript is Commonly Used

- **Frontend:** React, Angular, Vue, and Svelte applications.
- **Backend:** Node.js, Express, Fastify, and NestJS servers.
- **Full-stack frameworks:** Next.js, Remix, and Nuxt.
- **Tooling:** Popular libraries and tools, including VS Code itself, are written in TypeScript.

### Static Typing and Type Inference

#### Static Typing
In JavaScript, a variable can hold a number and later be assigned a string:

```js
let count = 10;
count = "ten"; // JavaScript allows this
```

In TypeScript, you can specify the type explicitly:

```ts
let count: number = 10;
// count = "ten"; // Error: Type 'string' is not assignable to type 'number'.
```

#### Type Inference
You do not have to write a type for every variable. TypeScript automatically infers the type based on the initial value:

```ts
let message = "Hello"; // TypeScript infers that message is of type string
```

### The TypeScript Compiler (`tsc`)

Browsers and Node.js do not execute TypeScript directly. The TypeScript compiler (`tsc`) does two things:

1. **Type checking:** It checks your code for errors based on your configuration rules.
2. **Transpilation:** It removes all types, interfaces, and annotations, outputting standard JavaScript that any browser or Node.js runtime can execute.

### Compilation Flow

```text
TypeScript Code (.ts)
        │
        ▼
TypeScript Compiler (`tsc`) ───> Checks types & strips annotations
        │
        ▼
JavaScript Code (.js)
        │
        ▼
JavaScript Runtime (Node.js or Browser)
```

### Initializing Your Setup from Scratch

When you clone this repository, you configure your own setup step-by-step:

1. **Initialize `package.json`:**
   ```bash
   npm init -y
   ```
2. **Install TypeScript and Node types:**
   ```bash
   npm install -D typescript @types/node
   ```
3. **Create `tsconfig.json`:**
   Create a `tsconfig.json` file in the root directory (see the configuration in the root [README.md](../README.md)).
4. **Compile all files:**
   ```bash
   npx tsc
   ```
5. **Run the compiled program:**
   ```bash
   node dist/00-introduction/examples/first-program.js
   ```

---

## 4. Code Example

Here is our first program ([examples/first-program.ts](./examples/first-program.ts)):

```ts
// 00-introduction/examples/first-program.ts

const greeting: string = "Welcome to TypeScript in 7 Days!";
const daysTotal: number = 7;
const isReadyToLearn: boolean = true;

console.log("=== First TypeScript Program ===");
console.log(greeting);
console.log(`Duration: ${daysTotal} days`);
console.log(`Ready to start? ${isReadyToLearn}`);
console.log("================================");
```

### Running the Example

Compile with `npx tsc` and run the output file with Node:

```bash
npx tsc
node dist/00-introduction/examples/first-program.js
```

**Output:**
```text
=== First TypeScript Program ===
Welcome to TypeScript in 7 Days!
Duration: 7 days
Ready to start? true
================================
```

---

## 5. Code Explanation

- `const greeting: string`: `: string` is a type annotation. It tells the compiler that `greeting` must always be text.
- `const daysTotal: number`: Marks `daysTotal` as a numeric value. TypeScript uses `number` for both integers and decimals.
- `const isReadyToLearn: boolean`: Accepts only `true` or `false`.
- `console.log(...)`: Standard JavaScript function. Because TypeScript is a superset of JavaScript, standard library methods work identically.

---

## 6. Common Mistakes

### Mistake 1: Trying to run a `.ts` file directly with standard `node`
```bash
node first-program.ts # May fail depending on your Node.js version
```
**Fix:** Compile with `tsc` first, then run the compiled `.js` file from `dist/`:
```bash
npx tsc
node dist/00-introduction/examples/first-program.js
```

### Mistake 2: Assigning the wrong type
```ts
let studentId: number = "101"; // Error: Type 'string' is not assignable to type 'number'.
```
**Fix:** Match the value to the declared type:
```ts
let studentId: number = 101;
```

---

## 7. Exercises

Create a test file or write your code in a scratchpad:

1. **Exercise 1 (Personal Welcome):** Declare a string variable for your name and another for your primary programming goal. Log a sentence combining both.
   - *Expected output:* `Hello, my name is Alex and my goal is to write type-safe web applications.`
2. **Exercise 2 (Weather Summary):** Create typed variables for `cityName` (`string`), `temperature` (`number`), and `isRaining` (`boolean`). Print a formatted summary.
   - *Expected output:* `City: Seattle | Temperature: 18°C | Raining: true`
3. **Exercise 3 (Compiler Experiment):** Declare a variable with type `number`, assign a string to it, and run `npx tsc`. Read the compiler error message, then fix the assignment.

---

## 8. Hints

- **Hint for Ex 1:** Use template strings with backticks: `` `Hello, my name is ${name}...` ``.
- **Hint for Ex 2:** Remember the type names are lowercase: `: string`, `: number`, `: boolean`.
- **Hint for Ex 3:** Look at the terminal output when `tsc` fails. It tells you the file name, line number, and error code.

---

## 9. Solutions

Complete solutions and explanations are in [solutions.md](./solutions.md).

---

## 10. Completion Checklist

- [ ] Read the introduction and understand what a superset is.
- [ ] Understand the role of `tsc` and how code gets compiled to JavaScript.
- [ ] Ran `npm install` and verified `npx tsc -v`.
- [ ] Ran `npm run start:intro` successfully.
- [ ] Attempted Exercises 1, 2, and 3.
- [ ] Checked your work in [solutions.md](./solutions.md).

---

[Next: Day 1 — TypeScript Basics ➔](../01-day-1-typescript-basics/README.md)
