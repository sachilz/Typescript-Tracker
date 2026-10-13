# 06: Day 6 — Modern TypeScript

Welcome to Day 6. Real-world applications are split across multiple files and interact with asynchronous operations. Today covers organizing code into modules using `export` and `import`, an introduction to generics (`<T>`), working with `async`/`await` and Promises, error handling with `try...catch`, and understanding why external JSON data requires runtime validation.

---

## 1. Learning Objectives

By the end of this day, you will be able to:

- Split TypeScript code across multiple files using `export` and `import`.
- Understand what a generic is and write a basic generic function (`<T>`).
- Work with asynchronous functions returning `Promise<T>`.
- Use `async` and `await` with strict type safety.
- Handle runtime errors safely using `try...catch`.
- Understand why external data (APIs, JSON files) cannot be blindly trusted by TypeScript at runtime.

---

## 2. Topics to Learn

- [ ] Modules: `export` and `import`
- [ ] Splitting code across multiple files
- [ ] Introduction to Generics (`<T>`)
- [ ] Working with Promises (`Promise<T>`)
- [ ] Asynchronous functions with `async` and `await`
- [ ] Error handling with `try...catch`
- [ ] JSON data and runtime validation
- [ ] 5 practice exercises

---

## 3. Explanations

### Modules: `export` and `import`

In TypeScript, any file containing a top-level `import` or `export` is an isolated **module**:

- **`export`:** Exposes a function, type, interface, or variable to other files.
- **`import`:** Brings exported items into another file.

```ts
// mathUtils.ts
export function add(a: number, b: number): number {
  return a + b;
}

// main.ts
import { add } from "./mathUtils";
console.log(add(10, 5));
```

This keeps individual files small, focused, and testable.

### Introduction to Generics (`<T>`)

Sometimes you want a function to work with multiple data types while still preserving the exact type information.

If you use `any`, you lose all type safety. A **generic** acts as a placeholder for a type:

```ts
function wrapInArray<T>(item: T): T[] {
  return [item];
}

const numList = wrapInArray(42);           // Type: number[]
const textList = wrapInArray("TypeScript"); // Type: string[]
```

When you call `wrapInArray(42)`, TypeScript automatically replaces `T` with `number`. When you call `wrapInArray("TypeScript")`, `T` becomes `string`. Type safety is preserved without duplicating logic.

### Asynchronous Code: `Promise<T>`, `async`, and `await`

Operations like reading files, timers, and network requests take time to complete. In TypeScript:

- An `async` function always returns a `Promise<T>`, where `T` is the type of the value it eventually resolves with.
- You use `await` inside an `async` function to wait for the Promise to settle.

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
  console.log(user.name); // TypeScript knows user has a name property
}
```

### Error Handling with `try...catch`

In TypeScript with strict settings, the error caught in a `catch (error)` block is typed as `unknown` by default. You should check if it is an `instanceof Error` before reading `.message`:

```ts
try {
  const result = JSON.parse(malformedString);
} catch (error) {
  if (error instanceof Error) {
    console.error(`Caught error: ${error.message}`);
  }
}
```

### Why External Data Needs Runtime Validation

TypeScript performs type checking **only at compile time**. Once your code is compiled to JavaScript, all type annotations are stripped away.

If an external API returns `{ "user_id": 99 }` instead of `{ "id": 99 }`, TypeScript cannot prevent a runtime bug on its own:

```ts
// DANGEROUS: Blindly casting does not validate data
const data = JSON.parse(incomingString) as User; 

// SAFE: Check properties before assuming the shape
const rawData: unknown = JSON.parse(incomingString);
if (typeof rawData === "object" && rawData !== null && "id" in rawData) {
  // Safe to use
}
```

---

## 4. Code Example

Here is the runnable example for Day 6 ([examples/main.ts](./examples/main.ts) and [examples/mathUtils.ts](./examples/mathUtils.ts)):

```ts
// 06-day-6-modern-typescript/examples/main.ts
import { add, multiply, calculateAverage } from "./mathUtils";

console.log("=== Day 6: Modern TypeScript Module Demo ===");
console.log(`Add(12, 8): ${add(12, 8)}`);
console.log(`Multiply(6, 7): ${multiply(6, 7)}`);
console.log(`Average([10, 20, 30, 40]): ${calculateAverage([10, 20, 30, 40])}`);
```

### Running the Example

```bash
npm run start:day6
```

**Output:**
```text
=== Day 6: Modern TypeScript Module Demo ===
Add(12, 8): 20
Multiply(6, 7): 42
Average([10, 20, 30, 40]): 25
```

---

## 5. Code Explanation

- `export function add(...)`: In `mathUtils.ts`, exports the function so other modules can consume it.
- `import { add, multiply } from "./mathUtils"`: In `main.ts`, imports specific functions by name.
- `dist/`: When compiled, `tsc` creates corresponding JavaScript files in `dist/` preserving the module resolution paths.

---

## 6. Common Mistakes

### Mistake 1: Forgetting `await` on an async function call
```ts
const user = fetchUser();
console.log(user.name); 
// Error: Property 'name' does not exist on type 'Promise<UserData>'.
```
**Fix:** Add `await` to unwrap the Promise:
```ts
const user = await fetchUser();
console.log(user.name);
```

### Mistake 2: Blindly trusting parsed JSON
```ts
const data = JSON.parse(input) as User;
// If input is missing fields, data will be malformed without any compile warning.
```
**Fix:** Validate incoming data before assuming its structure.

---

## 7. Exercises

Practise in [examples/exercises.ts](./examples/exercises.ts) or in a separate file:

1. **Exercise 1 (Modules):** Export two math functions from `mathUtils.ts` and import them into a separate file to compute a result.
2. **Exercise 2 (Generic Function):** Create a generic function `makePair<A, B>(first: A, second: B): [A, B]` that accepts any two values and returns a typed tuple pair.
3. **Exercise 3 (Async Function):** Write an `async` function `fetchSampleUser(id: number): Promise<{ id: number; name: string; role: string }>` that simulates a short delay and returns sample user data.
4. **Exercise 4 (Error Handling):** Write a function `parseScore(input: string): number` that converts a string to a number. Throw an error if `isNaN(score)`, and catch the error in a `try...catch` block.
5. **Exercise 5 (JSON Runtime Validation):** Parse `'{"id": 42, "role": "admin"}'` as `unknown`. Write a check verifying `id` is a number and `role` is a string before accessing them.

---

## 8. Hints

- **Hint for Ex 1:** Use `export function ...` in the source file, and `import { ... } from "./file";` in the consumer.
- **Hint for Ex 2:** Return type is `[A, B]` and return value is `[first, second]`.
- **Hint for Ex 3:** Use `return new Promise((res) => setTimeout(() => res(...), 50));`.
- **Hint for Ex 4:** Check `if (isNaN(num)) throw new Error("Invalid score number");`.
- **Hint for Ex 5:** Use `typeof data === "object" && data !== null && "id" in data`.

---

## 9. Solutions

Complete solutions and explanations are in [solutions.md](./solutions.md).

---

## 10. Completion Checklist

- [ ] Split code across files using `export` and `import`.
- [ ] Understand basic generics with `<T>`.
- [ ] Write async functions returning `Promise<T>` and consume with `await`.
- [ ] Handle errors safely with `try...catch`.
- [ ] Understand why runtime JSON validation is necessary.
- [ ] Ran `npm run start:day6`.
- [ ] Attempted Exercises 1 through 5.
- [ ] Checked your answers in [solutions.md](./solutions.md).

---

[⬅️ Day 5: The Type System](../05-day-5-type-system/README.md) | [Next: Day 7 — Mini Project & Revision ➔](../07-day-7-mini-project-and-revision/README.md)
