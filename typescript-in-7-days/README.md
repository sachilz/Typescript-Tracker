# 📘 typescript-in-7-days

> **A beginner-friendly, hands-on 7-day challenge designed to take you from JavaScript fundamentals to writing confident, type-safe TypeScript code.**  
> Built for self-study, pair programming, and sharing your journey in public on **LinkedIn** and **GitHub**! 🚀

---

### 🌟 Challenge Highlights

- ⏱️ **Daily Commitment:** 30–60 minutes per day.
- 🎯 **Level:** Absolute Beginner to Confident Intermediate.
- 🧪 **Hands-On Practice:** Runnable code files, bite-sized exercises, hints, and full solutions for every single day.
- 🎓 **Capstone Project:** Complete terminal-based **Student Management System** on Day 7.
- 📢 **#LearnInPublic:** Includes ready-to-use LinkedIn post templates for each day!

---

## Table of Contents

- [About This Repository](#about-this-repository)
- [Why This Repository Was Created](#why-this-repository-was-created)
- [Who This Repository Is For](#who-this-repository-is-for)
- [Prerequisites](#prerequisites)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [7-Day Learning Roadmap](#7-day-learning-roadmap)
- [How to Run the Examples](#how-to-run-the-examples)
- [How to Practise the Exercises](#how-to-practise-the-exercises)
- [Learning Progress Checklist](#learning-progress-checklist)
- [Conclusion](#conclusion)

---

## About This Repository

`typescript-in-7-days` is a structured, practical study plan for developers stepping into TypeScript. Each folder represents one focused day of learning, complete with bite-sized explanations, practical examples, common pitfalls, hands-on exercises, hints, and full solutions.

The repository concludes on Day 7 with a complete terminal-based **Student Management System** mini-project that brings together all the concepts learned throughout the week.

---

## Why This Repository Was Created

Many official documentation resources and video tutorials jump quickly into complex type gymnastics, generics, and frontend frameworks like React or Angular. This repository was created to:

1. **Focus purely on core language fundamentals** without framework distractions.
2. **Provide immediate hands-on practice** after every concept.
3. **Offer a clear, predictable daily pace** that can easily fit into 1–2 hours of study per day.
4. **Build confidence with compiler errors**, teaching you how to read, understand, and fix them.

---

## Who This Repository Is For

- **JavaScript Developers** who want to add static type safety to their skill set.
- **Computer Science Students & Beginners** who understand basic programming concepts (variables, loops, conditions) and want to learn TypeScript.
- **Self-Taught Programmers** looking for a structured, distraction-free 7-day curriculum.

---

## Prerequisites

Before starting, ensure you have:

- A basic understanding of JavaScript basics (variables, functions, arrays, objects).
- A code editor installed (VS Code is highly recommended).
- **Node.js** (version 18 or newer recommended).

---

## Technologies Used

- **TypeScript** (`v5.7+`): The typed superset of JavaScript.
- **Node.js** (`v18+` / `v20+` / `v22+`): The JavaScript runtime environment.
- **tsc**: The official TypeScript compiler.

---

## Installation and Setup

### 1. Clone or Open the Repository

```bash
git clone https://github.com/your-username/typescript-in-7-days.git
cd typescript-in-7-days
```

### 2. Install Dependencies

Install TypeScript and Node type definitions locally:

```bash
npm install
```

### 3. Verify the Installation

Check the installed TypeScript compiler version:

```bash
npx tsc -v
```

---

## 7-Day Learning Roadmap

| Folder / Day | Topic | Key Concepts |
| :--- | :--- | :--- |
| [00-introduction](./00-introduction/README.md) | **Introduction & Setup** | Why TypeScript?, TS vs JS, compiler flow, setup & first program |
| [01-day-1-typescript-basics](./01-day-1-typescript-basics/README.md) | **Day 1: TypeScript Basics** | Syntax, `let` vs `const`, type annotations, inference, `console.log()` |
| [02-day-2-types-and-variables](./02-day-2-types-and-variables/README.md) | **Day 2: Types and Variables** | Primitives, `null`, `undefined`, arrays, `any` vs `unknown` |
| [03-day-3-functions](./03-day-3-functions/README.md) | **Day 3: Functions** | Return types, optional & default parameters, arrow functions, `void` |
| [04-day-4-arrays-and-objects](./04-day-4-arrays-and-objects/README.md) | **Day 4: Arrays and Objects** | Typed arrays, `map`/`filter`/`find`, typed objects, first types/interfaces |
| [05-day-5-type-system](./05-day-5-type-system/README.md) | **Day 5: The Type System** | `type` vs `interface`, union types, literal types, type narrowing (`typeof`) |
| [06-day-6-modern-typescript](./06-day-6-modern-typescript/README.md) | **Day 6: Modern TypeScript** | Modules (`import`/`export`), introductory generics, `async`/`await`, `try...catch` |
| [07-day-7-mini-project-and-revision](./07-day-7-mini-project-and-revision/README.md) | **Day 7: Mini Project & Revision** | Student Management System, comprehensive revision, final practice & debugging |

---

## How to Run the Examples

You can compile all TypeScript files in the project to JavaScript using:

```bash
npm run build
```

The compiled JavaScript files will be placed into the `dist/` directory.

You can also run pre-configured scripts from `package.json` for each day:

```bash
npm run start:intro    # Runs Day 0 Introduction example
npm run start:day1     # Runs Day 1 Basics example
npm run start:day2     # Runs Day 2 Types example
npm run start:day3     # Runs Day 3 Functions example
npm run start:day4     # Runs Day 4 Arrays & Objects example
npm run start:day5     # Runs Day 5 Type System example
npm run start:day6     # Runs Day 6 Modern TypeScript example
npm run start:project  # Runs Day 7 Student Management System
```

To run any single TypeScript file directly:

```bash
npx tsc
node dist/<folder-name>/examples/<file-name>.js
```

---

## How to Practise the Exercises

1. Navigate to the folder for the current day (e.g. `01-day-1-typescript-basics`).
2. Read through the `README.md` to understand the theory and code examples.
3. Open the day's `examples/exercises.ts` file or create your own `.ts` file.
4. Complete each of the numbered exercises in code.
5. Compile and test your solution:
   ```bash
   npx tsc
   ```
6. If you get stuck, check the **Hints** section in `README.md`.
7. Once finished, compare your solution with `solutions.md` in that folder.

---

## Learning Progress Checklist

Track your 7-day progress by checking off each milestone:

- [ ] **Day 0:** [00-introduction](./00-introduction/README.md) completed
- [ ] **Day 1:** [01-day-1-typescript-basics](./01-day-1-typescript-basics/README.md) completed
- [ ] **Day 2:** [02-day-2-types-and-variables](./02-day-2-types-and-variables/README.md) completed
- [ ] **Day 3:** [03-day-3-functions](./03-day-3-functions/README.md) completed
- [ ] **Day 4:** [04-day-4-arrays-and-objects](./04-day-4-arrays-and-objects/README.md) completed
- [ ] **Day 5:** [05-day-5-type-system](./05-day-5-type-system/README.md) completed
- [ ] **Day 6:** [06-day-6-modern-typescript](./06-day-6-modern-typescript/README.md) completed
- [ ] **Day 7:** [07-day-7-mini-project-and-revision](./07-day-7-mini-project-and-revision/README.md) completed & Mini Project tested

---

## Conclusion

TypeScript provides safety, predictability, and great developer tooling. By dedicating a small amount of time every day over the next week, you will build a rock-solid foundation.

Ready to begin? Head over to [00-introduction](./00-introduction/README.md) to set up your environment and run your very first TypeScript program!
