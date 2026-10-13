# TypeScript in 7 Days

A practical, beginner-friendly guide to learning TypeScript fundamentals in one week.

This repository is designed for self-study. Each day covers a small, focused set of concepts with clear explanations, runnable code examples, practical exercises, hints, and complete solutions. It finishes on Day 7 with a terminal-based Student Management System project that brings the concepts together.

---

## Who This Is For

- Developers with basic JavaScript knowledge who want to learn TypeScript.
- Students who want a structured, distraction-free roadmap without framework noise.
- Anyone looking for practical type-checking fundamentals rather than advanced type gymnastics.

---

## Prerequisites

Before starting, you should have:

1. A basic understanding of JavaScript (variables, functions, arrays, objects).
2. [Node.js](https://nodejs.org/) installed (version 18 or newer recommended).
3. A code editor such as [Visual Studio Code](https://code.visualstudio.com/).

---

## Repository Roadmap

| Day | Folder | Topics Covered |
| :--- | :--- | :--- |
| **00** | [00-introduction](./00-introduction/README.md) | What TypeScript is, how compilation works, compiler flow, and environment setup. |
| **01** | [01-day-1-typescript-basics](./01-day-1-typescript-basics/README.md) | Basic syntax, `let` vs `const`, type annotations, inference, and console output. |
| **02** | [02-day-2-types-and-variables](./02-day-2-types-and-variables/README.md) | Primitives, `null`, `undefined`, typed arrays, and why `unknown` is safer than `any`. |
| **03** | [03-day-3-functions](./03-day-3-functions/README.md) | Parameter and return types, optional parameters, defaults, arrow functions, and `void`. |
| **04** | [04-day-4-arrays-and-objects](./04-day-4-arrays-and-objects/README.md) | Array methods (`map`, `filter`, `find`), object shapes, and introduction to types and interfaces. |
| **05** | [05-day-5-type-system](./05-day-5-type-system/README.md) | `type` vs `interface`, union types, string literals, and type narrowing with `typeof`. |
| **06** | [06-day-6-modern-typescript](./06-day-6-modern-typescript/README.md) | Modules (`import`/`export`), introductory generics, `async`/`await`, and runtime JSON validation. |
| **07** | [07-day-7-mini-project-and-revision](./07-day-7-mini-project-and-revision/README.md) | Student Management System project, full revision checklist, practice questions, and debugging challenges. |

---

## Getting Started: Initializing Your Setup

This repository lets you set up your own TypeScript environment from scratch so you learn how real projects are configured.

### Step 1: Clone the repository

```bash
git clone https://github.com/your-username/typescript-in-7-days.git
cd typescript-in-7-days
```

### Step 2: Initialize `package.json`

Create your Node.js configuration:

```bash
npm init -y
```

### Step 3: Install TypeScript and Node types

Install TypeScript as a development dependency:

```bash
npm install -D typescript @types/node
```

### Step 4: Create `tsconfig.json`

Create a file named `tsconfig.json` in the root folder with the following settings:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "node",
    "rootDir": "./",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": [
    "00-introduction/**/*",
    "01-day-1-typescript-basics/**/*",
    "02-day-2-types-and-variables/**/*",
    "03-day-3-functions/**/*",
    "04-day-4-arrays-and-objects/**/*",
    "05-day-5-type-system/**/*",
    "06-day-6-modern-typescript/**/*",
    "07-day-7-mini-project-and-revision/**/*"
  ],
  "exclude": [
    "node_modules",
    "dist"
  ]
}
```

### Step 5 (Optional): Add runner scripts to `package.json`

You can add these handy shortcuts inside the `"scripts"` section of your `package.json`:

```json
"scripts": {
  "build": "tsc",
  "start:intro": "tsc && node dist/00-introduction/examples/first-program.js",
  "start:day1": "tsc && node dist/01-day-1-typescript-basics/examples/basics.js",
  "start:day2": "tsc && node dist/02-day-2-types-and-variables/examples/primitive-types.js",
  "start:day3": "tsc && node dist/03-day-3-functions/examples/functions-demo.js",
  "start:day4": "tsc && node dist/04-day-4-arrays-and-objects/examples/arrays-objects-demo.js",
  "start:day5": "tsc && node dist/05-day-5-type-system/examples/type-system-demo.js",
  "start:day6": "tsc && node dist/06-day-6-modern-typescript/examples/main.js",
  "start:project": "tsc && node dist/07-day-7-mini-project-and-revision/src/index.js"
}
```

---

## How to Compile and Run Code

### Option A: Using `npx tsc` directly

Compile all TypeScript files into standard JavaScript inside the `dist/` directory:

```bash
npx tsc
```

Then run any compiled example with Node.js:

```bash
node dist/00-introduction/examples/first-program.js
node dist/01-day-1-typescript-basics/examples/basics.js
node dist/02-day-2-types-and-variables/examples/primitive-types.js
node dist/03-day-3-functions/examples/functions-demo.js
node dist/04-day-4-arrays-and-objects/examples/arrays-objects-demo.js
node dist/05-day-5-type-system/examples/type-system-demo.js
node dist/06-day-6-modern-typescript/examples/main.js
node dist/07-day-7-mini-project-and-revision/src/index.js
```

### Option B: Using npm scripts (if added to package.json)

```bash
npm run build
npm run start:intro
npm run start:day1
npm run start:project
```

---

## How to Study

Each day's folder contains:

- `README.md`: The lesson, conceptual explanations, code snippets, common mistakes, exercises, and hints.
- `examples/`: Runnable TypeScript files you can execute and experiment with.
- `solutions.md`: Detailed solutions and explanations for every exercise.

### Recommended workflow:

1. Read the day's `README.md` to understand the concepts.
2. Run the code in `examples/` and experiment with changing values to see how the compiler responds.
3. Solve the exercises in your own test file before checking `solutions.md`.
4. Run `npx tsc` to verify that your code compiles with zero type errors.

---

## Day 7 Capstone Project

On Day 7, you will build and review a terminal-based **Student Management System** located in [`07-day-7-mini-project-and-revision/src`](./07-day-7-mini-project-and-revision/src).

It demonstrates:
- Clean module structure (`types.ts`, `studentService.ts`, `index.ts`).
- Typed in-memory data structures.
- Practical input validation and error handling.
- Calculation of student averages and pass/fail statuses.

---

## License

This project is open source and available under the [MIT License](LICENSE).
