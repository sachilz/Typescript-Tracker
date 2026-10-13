# 🚀 Day 6: Modern TypeScript

> **Day 6 of 7: Modules, Generics, Async Code & Real-World Safety**  
> Welcome to Day 6! Real-world applications don't live in a single file. Today you will learn how to organize code cleanly into modules with `export` and `import`, write your first reusable **generics** (`<T>`), handle asynchronous operations using `Promise<T>` and `async`/`await`, catch errors with `try...catch`, and understand why external JSON requires runtime validation.

---

### 📌 Quick Overview

| ⏱️ Estimated Time | 🎯 Level | 🛠️ Concepts | 📚 Prerequisites |
| :--- | :--- | :--- | :--- |
| **45–55 minutes** | Intermediate-Beginner | Modules (`import`/`export`), Generics (`<T>`), Async/Await, JSON Validation | Day 5 (Type System) |

---

## 1. Learning Objectives

By the end of Day 6, you will be able to:
- Split TypeScript code across multiple files using `export` and `import`.
- Understand what a generic is and write a simple generic function (`<T>`).
- Work with asynchronous operations returning `Promise<T>`.
- Use `async` and `await` with strict type safety.
- Catch and handle errors safely using `try...catch`.
- Understand why external data (APIs, JSON files) cannot be blindly trusted by TypeScript at runtime.

---

## 2. Topics to Learn

- [ ] Modules: `export` and `import`
- [ ] Splitting code cleanly across multiple files
- [ ] Introduction to Generics (`<T>` placeholder)
- [ ] Working with Promises (`Promise<T>`)
- [ ] Writing asynchronous functions with `async` and `await`
- [ ] Safe error handling with `try...catch`
- [ ] JSON parsing & why runtime validation is essential
- [ ] 5 hands-on practice exercises
- [ ] 📢 Share your Day 6 milestone on LinkedIn

---

## 3. Simple Explanations

### Modules: `export` and `import`
Any TypeScript file with a top-level `import` or `export` is an isolated **module**:
- **`export`:** Exposes a function, type, or constant to other files.
- **`import`:** Pulls in exposed features from another file.

```ts
// mathUtils.ts
export function add(a: number, b: number): number {
  return a + b;
}

// main.ts
import { add } from "./mathUtils";
console.log(add(10, 5));
```

```text
┌─────────────────────────┐         import          ┌───────────────────────┐
│      mathUtils.ts       │ ──────────────────────> │        main.ts        │
│ export function add()   │                         │ add(10, 5)            │
└─────────────────────────┘                         └───────────────────────┘
```

---

### Introduction to Generics (`<T>`)
Imagine writing a function that wraps an item into an array. If you use `any`, you lose all type safety.  
A **generic** is a variable for types. It allows you to write a reusable function that remembers the exact type that was passed in:

```ts
function wrapInArray<T>(item: T): T[] {
  return [item];
}

const numList = wrapInArray(42);           // Inferred as number[]
const textList = wrapInArray("TypeScript"); // Inferred as string[]
```

```text
  Pass number:   wrapInArray(42)           ──> Returns number[]
  Pass string:   wrapInArray("Hello")      ──> Returns string[]
  (Type safety is 100% preserved without duplicating code!)
```

---

### Asynchronous Code: `Promise<T>`, `async`, and `await`
When fetching data from a server or reading a file, the operation takes time.  
In TypeScript:
- An `async` function always returns a `Promise<T>`, where `T` is the type of the value it eventually resolves with.
- You use `await` inside an `async` function to wait for the promise to finish.

```ts
interface UserData {
  id: number;
  name: string;
}

async function fetchUser(): Promise<UserData> {
  return { id: 1, name: "Alice" };
}

async function run() {
  const user = await fetchUser();
  console.log(user.name); // ✅ TypeScript knows user has .name!
}
```

---

### Safe Error Handling with `try...catch`
In modern TypeScript, the error in `catch (error)` is typed as `unknown` for safety. Check if it's an `instanceof Error` before reading `.message`:

```ts
try {
  const result = JSON.parse(malformedString);
} catch (error) {
  if (error instanceof Error) {
    console.error(`Caught error: ${error.message}`);
  }
}
```

---

### Why External Data Needs Runtime Validation
TypeScript's type checking happens **only at compile time**. Once compiled to JavaScript, types no longer exist!  
If an API changes its response format at runtime, TypeScript cannot protect you unless you validate the shape of the data:

```ts
const rawData: unknown = JSON.parse('{"id": 42, "role": "admin"}');

// ❌ DANGEROUS: Blindly casting (rawData as User) ignores runtime reality
// ✅ SAFE: Validate fields before using
if (typeof rawData === "object" && rawData !== null && "role" in rawData) {
  console.log("Safe object with role property!");
}
```

---

## 4. Code Examples

Run this module demo from [examples/main.ts](./examples/main.ts):

```ts
// 06-day-6-modern-typescript/examples/main.ts
import { add, multiply, calculateAverage } from "./mathUtils";

console.log("=== Day 6: Modern TypeScript Module Demo ===");
console.log(`Add(12, 8): ${add(12, 8)}`);
console.log(`Multiply(6, 7): ${multiply(6, 7)}`);
console.log(`Average([10, 20, 30, 40]): ${calculateAverage([10, 20, 30, 40])}`);
```

### How to Run This Example:
```bash
npm run start:day6
```

**Expected Terminal Output:**
```text
=== Day 6: Modern TypeScript Module Demo ===
Add(12, 8): 20
Multiply(6, 7): 42
Average([10, 20, 30, 40]): 25
```

---

## 5. Code Explanation

- `import { add, multiply } from "./mathUtils"`: Imports specific named functions from an adjacent module.
- `calculateAverage(numbers: number[]): number`: A modular helper function that can be tested in isolation.
- `dist/` directory: When compiled with `npx tsc`, TypeScript transpiles each module into standard JavaScript while preserving relative file paths.

---

## 6. Common Mistakes & Quick Fixes

### ❌ Mistake 1: Forgetting `await` on an async function call
```ts
const user = fetchUser();
console.log(user.name); 
// ❌ Property 'name' does not exist on type 'Promise<UserData>'.
```
> [!TIP]
> **Fix:** Add `await` to unwrap the Promise:
> ```ts
> const user = await fetchUser();
> console.log(user.name); // ✅ Correct
> ```

---

### ❌ Mistake 2: Blindly casting untrusted JSON data
```ts
const data = JSON.parse(incomingJson) as User; // Risky!
```
> [!TIP]
> **Fix:** Type the parsed data as `unknown` and validate properties at runtime:
> ```ts
> const data: unknown = JSON.parse(incomingJson);
> if (typeof data === "object" && data !== null && "id" in data) {
>   // Safe to use
> }
> ```

---

## 7. Exercises

Practise in [examples/exercises.ts](./examples/exercises.ts) or your own file:

1. **Exercise 1 (Modules):** Export two math functions from `mathUtils.ts` and import them into `main.ts` to compute a result.
2. **Exercise 2 (Generic Pair):** Create a generic function `makePair<A, B>(first: A, second: B): [A, B]` that accepts any two types and returns a typed tuple.
3. **Exercise 3 (Async Fetch):** Write an `async` function `fetchSampleUser(id: number): Promise<{ id: number; name: string; role: string }>` that simulates network delay and returns mock user data.
4. **Exercise 4 (Error Handling):** Write a function `parseScore(input: string): number` that converts a string to a number. If `isNaN`, throw an error and handle it in a `try...catch` block.
5. **Exercise 5 (JSON Runtime Guard):** Parse `'{"id": 42, "role": "admin"}'` as `unknown`. Write a validation check verifying `id` is a number and `role` is a string before accessing them.

---

## 8. Hints

- **Hint for Ex 1:** Use `export function ...` in the source file, and `import { ... } from "./file";` in the consumer.
- **Hint for Ex 2:** Return type is `[A, B]` and return value is `[first, second]`.
- **Hint for Ex 3:** Use `return new Promise((res) => setTimeout(() => res(...), 50));`.
- **Hint for Ex 4:** Check `if (isNaN(num)) throw new Error("Invalid score input");`.
- **Hint for Ex 5:** Use `typeof data === "object" && data !== null && "id" in data`.

---

## 9. Solutions

Complete solutions and explanations are available in [solutions.md](./solutions.md).

---

## 10. Completion Checklist

- [ ] Split code across multiple files using `export` and `import`.
- [ ] Understand basic generics with `<T>`.
- [ ] Write async functions returning `Promise<T>` and consume with `await`.
- [ ] Handle errors safely with `try...catch`.
- [ ] Understand why runtime JSON validation is essential.
- [ ] Run `npm run start:day6`.
- [ ] Completed Exercises 1 through 5.
- [ ] Checked answers against [solutions.md](./solutions.md).

---

## 📢 Share Your Day 6 Milestone on LinkedIn!

```text
🚀 Day 6 of the 7-Day TypeScript Challenge complete!

Today we leveled up to modern, scalable TypeScript patterns:
✅ Clean modular architectures with export and import
✅ Introduction to Generics (<T>) for reusable type-safe logic
✅ Asynchronous programming with Promise<T>, async, and await
✅ Runtime error handling and why external JSON data must be validated

Tomorrow is the big finale: building the Student Management System capstone! 🎓

#TypeScript #JavaScript #WebDevelopment #Programming #100DaysOfCode #LearnInPublic #SoftwareEngineering
```

---

| [⬅️ Day 5: The Type System](../05-day-5-type-system/README.md) | [Day 7: Mini Project & Revision ➡️](../07-day-7-mini-project-and-revision/README.md) |
| :--- | :--- |
