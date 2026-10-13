# 📘 7-Day TypeScript Mastery Tracker

Welcome to the **TypeScript Tracker** repository! This is an intensive, structured 7-day roadmap designed to take you from core JavaScript fundamentals to advanced TypeScript concepts, type gymnastics, generics, and real-world software architecture.

---

## 🧭 7-Day Curriculum & Progress Tracker

| Day | Folder | Core Focus & Concepts | Status |
|:---:|:---|:---|:---:|
| **Day 1** | [day-01-basics-and-setup](./day-01-basics-and-setup/) | Setup, `tsc`, Primitives, `any`, `unknown`, `void`, `never`, Assertions | [ ] Pending |
| **Day 2** | [day-02-functions-and-objects](./day-02-functions-and-objects/) | Functions, Optional/Default params, Object Shapes, Arrays & Tuples | [ ] Pending |
| **Day 3** | [day-03-interfaces-and-type-aliases](./day-03-interfaces-and-type-aliases/) | Interfaces vs Types, Inheritance (`extends`), Intersections (`&`), Index Signatures | [ ] Pending |
| **Day 4** | [day-04-unions-literals-and-narrowing](./day-04-unions-literals-and-narrowing/) | Unions (`\|`), Literals, Type Guards (`typeof`, `instanceof`), Discriminated Unions | [ ] Pending |
| **Day 5** | [day-05-classes-and-oop](./day-05-classes-and-oop/) | Classes, Access Modifiers (`public`, `private`, `protected`), Abstract Classes | [ ] Pending |
| **Day 6** | [day-06-generics-and-utility-types](./day-06-generics-and-utility-types/) | Generics (`<T>`), Generic Constraints, `Partial`, `Pick`, `Omit`, `Record` | [ ] Pending |
| **Day 7** | [day-07-capstone-mini-project](./day-07-capstone-mini-project/) | Capstone: Modular Study & Task Tracker Application combining all concepts | [ ] Pending |

---

## 📂 Repository Structure

```text
Typescript-Tracker/
├── README.md                                 # Root roadmap, tracker & guide
├── package.json                              # Scripts to run individual day exercises
├── tsconfig.json                             # Root TypeScript compiler configuration
│
├── day-01-basics-and-setup/                  # Day 1: Fundamentals & Primitives
│   ├── README.md
│   └── exercises.ts
│
├── day-02-functions-and-objects/             # Day 2: Functions, Objects, Tuples
│   ├── README.md
│   └── exercises.ts
│
├── day-03-interfaces-and-type-aliases/       # Day 3: Contracts & Custom Types
│   ├── README.md
│   └── exercises.ts
│
├── day-04-unions-literals-and-narrowing/      # Day 4: Unions, Guards & Narrowing
│   ├── README.md
│   └── exercises.ts
│
├── day-05-classes-and-oop/                   # Day 5: Object-Oriented TypeScript
│   ├── README.md
│   └── exercises.ts
│
├── day-06-generics-and-utility-types/        # Day 6: Generics & Utility Types
│   ├── README.md
│   └── exercises.ts
│
└── day-07-capstone-mini-project/             # Day 7: End-to-End Capstone Project
    ├── README.md
    └── tracker.ts
```

---

## 🚀 Quick Start Guide

### 1. Requirements
Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 2. Running Daily Exercises
You can execute and experiment with each day's code instantly using `npx tsx`:

```bash
# Day 1
npm run day-01

# Day 2
npm run day-02

# Day 3
npm run day-03

# Day 4
npm run day-04

# Day 5
npm run day-05

# Day 6
npm run day-06

# Day 7 (Capstone Tracker)
npm run day-07
```

### 3. Compiling the Entire Repository
To run type checking across all files and compile to JavaScript:
```bash
npx tsc --noEmit
```

---

## 📖 Helpful Official Resources
- [Official TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [TypeScript Cheat Sheets](https://www.typescriptlang.org/cheatsheets/)