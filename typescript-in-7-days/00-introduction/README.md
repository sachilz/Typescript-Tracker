# 00 — Introduction to TypeScript

Welcome to your TypeScript journey! This introductory guide will help you understand what TypeScript is, why millions of developers love it, how it transforms into JavaScript, and how to write and run your very first TypeScript program.

---

## 1. Learning Objectives

By the end of this section, you will:
- Understand what TypeScript is and why it was created.
- Know the key differences between JavaScript and TypeScript.
- Understand the compilation pipeline from TypeScript source code to running JavaScript.
- Know the definitions of static typing and type inference.
- Have a fully working development environment (Node.js, TypeScript compiler, VS Code).
- Successfully compile and run your first TypeScript program.
- Have a clear study strategy for the 7-day roadmap.

---

## 2. Topics to Learn

- [ ] What is TypeScript?
- [ ] Why was TypeScript created?
- [ ] JavaScript vs. TypeScript (with comparison table)
- [ ] Why developers use TypeScript & its main benefits
- [ ] Where TypeScript is used in modern software
- [ ] How TypeScript works (Static typing & Type inference)
- [ ] The TypeScript compiler (`tsc`)
- [ ] Does TypeScript run directly in the browser?
- [ ] The Compilation Flow diagram
- [ ] Installation commands and setup
- [ ] Writing and running your first TypeScript program
- [ ] Recommended 7-day study strategy

---

## 3. Simple Explanations

### What is TypeScript?
TypeScript is an open-source programming language developed by Microsoft. It is a **typed superset of JavaScript**. 
- "Superset" means all valid JavaScript code is also valid TypeScript code.
- "Typed" means you can add descriptions (types) to your variables, functions, and objects to tell the compiler what kind of data is expected.

### Why Was TypeScript Created?
JavaScript was originally created in 1995 for small, simple scripts in web browsers. As web applications grew massive and complex (like Gmail, Spotify, or Notion), managing large JavaScript codebases became difficult. Small typos or passing the wrong data type would only crash at runtime when users used the app. TypeScript was created to catch these mistakes early during development.

### JavaScript vs. TypeScript Comparison

| Feature | JavaScript (JS) | TypeScript (TS) |
| :--- | :--- | :--- |
| **Type System** | Dynamic (types checked while running) | Static (types checked before running) |
| **Error Detection** | At runtime in the browser / server | At compile time in your editor |
| **Execution** | Runs natively in browsers and Node.js | Must be compiled into JavaScript first |
| **Tooling** | Basic autocomplete | Rich autocomplete, refactoring, and instant tooltips |
| **Learning Curve** | Gentle and easy to start | Requires understanding types and compiler setup |

### Why Do Developers Use TypeScript?
Developers use TypeScript because it acts like an automated proofreader for code:
1. **Fewer Bugs:** Catches silly typos and logic mismatches before code ever ships to production.
2. **Supercharged Autocomplete:** Your code editor knows exactly what properties exist on any object.
3. **Self-Documenting Code:** When you inspect a function, types clearly show what inputs it takes and what it returns.
4. **Confident Refactoring:** Renaming a variable or changing a function signature highlights every spot in your project that needs updating.

### Where is TypeScript Commonly Used?
- **Web Frontend:** Used with React, Angular, Vue, and Svelte.
- **Backend / Servers:** Used with Node.js, Express, Fastify, and NestJS.
- **Fullstack Frameworks:** Next.js, Remix, Astro, and Nuxt.
- **Mobile & Desktop:** React Native and Electron apps.

### How TypeScript Works

#### Static Typing
In standard JavaScript, a variable can hold a number first, then be reassigned to a string later without warning. In TypeScript, you declare what type a variable holds (or let TypeScript infer it). If you try to assign something incompatible, TypeScript flags an error immediately.

#### Type Inference
You do not have to write types for every single line. TypeScript is smart enough to guess (infer) the type from the initial value:
```ts
let message = "Hello"; // TypeScript automatically knows message is a string!
```

#### What is the TypeScript Compiler (`tsc`)?
`tsc` is the official compiler. It reads your `.ts` files, verifies all types, checks for errors, and converts (transpiles) the code into clean, standard `.js` files.

#### Does TypeScript Run Directly in the Browser?
**No.** Browsers (Chrome, Firefox, Safari) and standard JavaScript engines (V8) only understand JavaScript. TypeScript must always be compiled into plain JavaScript before running.

### Compilation Pipeline Diagram

```text
+-----------------------+
|  TypeScript Code      |   (e.g., first-program.ts)
|  let age: number = 25 |
+-----------+-----------+
            |
            | Compiling & Type Checking (`tsc`)
            v
+-----------------------+
|  JavaScript Code      |   (e.g., first-program.js)
|  let age = 25;        |   (Type annotations are stripped out)
+-----------+-----------+
            |
            | Executing
            v
+-----------------------+
|  JavaScript Runtime   |   (Browser or Node.js)
|  Output: 25           |
+-----------------------+
```

### Installation and Execution Commands

Here are the commands you use and what each one does:

1. **`node -v` and `npm -v`**  
   Checks whether Node.js and its package manager (npm) are installed on your computer.
2. **`npm install`**  
   Installs project dependencies (including the TypeScript compiler) listed in `package.json`.
3. **`npx tsc`**  
   Runs the TypeScript compiler. It reads `tsconfig.json`, checks every file for type errors, and outputs compiled JavaScript files into the `dist/` directory.
4. **`node dist/00-introduction/examples/first-program.js`**  
   Uses Node.js to execute the compiled JavaScript file in your terminal.

### Recommended 7-Day Learning Strategy

1. **Dedicate 60–90 minutes daily.** Consistency beats marathon weekend sessions.
2. **Type the code yourself.** Do not simply copy-paste. Muscle memory matters.
3. **Trigger compiler errors deliberately.** Change a number to a string and observe the error message. Learning to read errors is the secret to mastering TypeScript.
4. **Complete every exercise.** Try doing the exercises on your own before checking `solutions.md`.

---

## 4. Code Examples

Here is our first TypeScript program ([examples/first-program.ts](./examples/first-program.ts)):

```ts
// 00-introduction/examples/first-program.ts

// 1. Declare a typed greeting variable
const greeting: string = "Welcome to TypeScript in 7 Days!";

// 2. Declare a typed number variable
const daysTotal: number = 7;

// 3. Declare a boolean variable
const isReadyToLearn: boolean = true;

// 4. Print output to the console
console.log(greeting);
console.log(`Duration: ${daysTotal} days`);
console.log(`Ready to start? ${isReadyToLearn}`);
```

---

## 5. Code Explanation

- `const greeting: string = ...`: The `: string` part is a **type annotation**. It tells TypeScript that `greeting` must always store a string.
- `const daysTotal: number = ...`: The `: number` annotation specifies that this variable holds a numeric value.
- `const isReadyToLearn: boolean = ...`: The `: boolean` annotation specifies true or false.
- `console.log(...)`: Standard JavaScript method to display messages in the terminal. Notice that valid JavaScript is completely valid in TypeScript!

---

## 6. Common Mistakes

### Mistake 1: Trying to run `.ts` directly with plain `node`
```bash
# May cause errors in older Node versions or unsupported environments:
node first-program.ts
```
**Fix:** Compile with `npx tsc` first, then run the generated `.js` file:
```bash
npx tsc
node dist/00-introduction/examples/first-program.js
```

### Mistake 2: Assigning the wrong type to an annotated variable
```ts
// Error: Type 'number' is not assignable to type 'string'.
let studentName: string = 12345;
```
**Fix:** Provide a value that matches the declared type:
```ts
let studentName: string = "Alice";
```

---

## 7. Exercises

Create your own file or practise inside your scratchpad:

1. **Exercise 1 (Personal Welcome):** Create a program that declares a string variable for your name, a string variable for your favorite programming language, and logs a message: `"Hello, my name is [Name] and I am learning TypeScript to build [Language] projects!"`
2. **Exercise 2 (City & Weather):** Create a program with a string variable `cityName`, a number variable `temperatureCelsius`, and a boolean variable `isRaining`. Print a formatted weather summary using template literals (`` ` ``).
3. **Exercise 3 (Compiler Practice):** Add a deliberate type mismatch (e.g., assign `false` to a `number` variable), run `npx tsc`, read the error message, and then fix it so it compiles cleanly.

---

## 8. Hints

- **Hint for Ex 1:** Use template literals with backticks: `` `Hello, my name is ${name}` ``.
- **Hint for Ex 2:** Remember the type annotations are `: string`, `: number`, and `: boolean`.
- **Hint for Ex 3:** Notice how TypeScript points directly to the line number and character column where the mismatch occurs.

---

## 9. Solutions

Complete solutions for all exercises are available in [solutions.md](./solutions.md).

---

## 10. Completion Checklist

- [ ] Read through the Introduction guide.
- [ ] Understand the role of `tsc` and the compilation flow.
- [ ] Ran `npm install` and verified `npx tsc -v`.
- [ ] Successfully compiled and ran `first-program.ts`.
- [ ] Completed Exercises 1, 2, and 3.
- [ ] Reviewed [solutions.md](./solutions.md).
