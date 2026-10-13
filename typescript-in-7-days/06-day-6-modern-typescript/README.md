# Day 6: Modern TypeScript

Welcome to Day 6! Real-world projects don't live in a single file or run synchronously without external inputs. Today we explore modern TypeScript patterns: splitting code into clean modules (`import` and `export`), introductory generics, asynchronous programming with `async`/`await` and `Promise`, error handling with `try...catch`, and handling JSON data safely.

---

## 1. Learning Objectives

By the end of Day 6, you will:
- Understand how to split TypeScript code across files using `export` and `import`.
- Understand what a generic is and write a basic generic function (`<T>`).
- Work with asynchronous functions using `Promise<T>`, `async`, and `await`.
- Safely handle runtime errors using `try...catch`.
- Understand why external data (like JSON from APIs) cannot be blindly trusted by TypeScript and requires validation.

---

## 2. Topics to Learn

- [ ] Modules: `export` and `import`
- [ ] Splitting code cleanly across multiple files
- [ ] Introduction to Generics (`<T>`)
- [ ] Introduction to Promises (`Promise<T>`)
- [ ] Writing asynchronous functions with `async` and `await`
- [ ] Error handling with `try...catch`
- [ ] Handling JSON data & why runtime validation is essential

---

## 3. Simple Explanations

### Modules: `export` and `import`
In TypeScript, any file containing a top-level `import` or `export` is treated as a **module**:
- Use `export` to expose functions, types, or variables from a file.
- Use `import` to bring those elements into another file.

```ts
// utils.ts
export function add(a: number, b: number): number {
  return a + b;
}

// main.ts
import { add } from "./utils";
console.log(add(2, 3));
```

### Introduction to Generics (`<T>`)
A **generic** is a type parameter. Think of it as a variable for types. It allows you to write a function that works with any type while preserving type safety:
```ts
function wrapInArray<T>(item: T): T[] {
  return [item];
}

const numbers = wrapInArray<number>(42);      // number[]
const words = wrapInArray<string>("TypeScript"); // string[]
```
Instead of losing type information with `any`, `wrapInArray` remembers the exact type that was passed in!

### Asynchronous Code: `async` and `await`
Asynchronous operations take time to finish (reading files, timers, network requests). In TypeScript, an `async` function always returns a `Promise<T>`, where `T` is the type of the value it eventually resolves with:
```ts
async function fetchUserGreeting(username: string): Promise<string> {
  return `Hello, ${username}!`;
}
```
You use `await` inside an `async` function to wait for the promise to complete:
```ts
const greeting = await fetchUserGreeting("Alice");
```

### Error Handling with `try...catch`
Wrap potentially failing operations in a `try...catch` block:
```ts
try {
  const result = JSON.parse(rawString);
  console.log(result);
} catch (error) {
  console.error("Failed to parse JSON:", (error as Error).message);
}
```

### Why External Data (JSON / APIs) Needs Runtime Validation
TypeScript's type checking only runs at **compile-time**. When your compiled program runs, types do not exist anymore. If an external API returns `{ "user_id": 99 }` instead of `{ "id": "99" }`, TypeScript cannot protect you unless you validate the data at runtime:
```ts
const rawData: unknown = JSON.parse('{"id": 1, "name": "Sam"}');
// Don't just cast blindly: rawData as User
// Check required fields before using:
if (typeof rawData === "object" && rawData !== null && "name" in rawData) {
  console.log("Valid object with name property!");
}
```

---

## 4. Code Examples

See [examples/mathUtils.ts](./examples/mathUtils.ts), [examples/main.ts](./examples/main.ts), and [examples/generics-and-async.ts](./examples/generics-and-async.ts):

```ts
// 06-day-6-modern-typescript/examples/generics-and-async.ts

// 1. A simple generic function
function getFirstElement<T>(items: T[]): T | undefined {
  return items.length > 0 ? items[0] : undefined;
}

// 2. Simulated async API call returning Promise<T>
interface UserData {
  id: number;
  name: string;
  email: string;
}

async function fetchSimulatedUser(id: number): Promise<UserData> {
  // Simulating network delay
  return new Promise((resolve, reject) => {
    if (id <= 0) {
      reject(new Error("Invalid user ID: must be greater than zero."));
      return;
    }
    setTimeout(() => {
      resolve({ id, name: "Alice Walker", email: "alice@example.com" });
    }, 100);
  });
}

// 3. Handling with async/await and try...catch
async function runDemo(): Promise<void> {
  try {
    const user = await fetchSimulatedUser(1);
    console.log(`Fetched user: ${user.name} (${user.email})`);

    const firstScore = getFirstElement<number>([95, 80, 75]);
    console.log(`First score: ${firstScore}`);
  } catch (error) {
    console.error("Error occurred:", (error as Error).message);
  }
}

runDemo();
```

---

## 5. Code Explanation

- `function getFirstElement<T>(items: T[]): T | undefined`: `<T>` is the generic placeholder. When called with `[95, 80]`, TypeScript replaces `T` with `number`.
- `async function fetchSimulatedUser(...): Promise<UserData>`: Declares that this function runs asynchronously and eventually resolves with a `UserData` object.
- `try...catch`: Catches errors safely, preventing unhandled promise rejections.

---

## 6. Common Mistakes

### Mistake 1: Forgetting `await` on an async function call
```ts
const user = fetchSimulatedUser(1);
console.log(user.name); // ❌ Property 'name' does not exist on type 'Promise<UserData>'.
```
**Fix:** Add `await` to unwrap the Promise:
```ts
const user = await fetchSimulatedUser(1);
console.log(user.name); // ✅ Correct
```

### Mistake 2: Blindly type-casting untrusted JSON
```ts
const user = JSON.parse(untrustedString) as UserData; // Unsafe! If JSON is missing 'email', it crashes later.
```
**Fix:** Validate keys before assuming structure:
```ts
const parsed: unknown = JSON.parse(untrustedString);
if (typeof parsed === "object" && parsed !== null && "email" in parsed) {
  // Safe to access
}
```

---

## 7. Exercises

Practise in [examples/exercises.ts](./examples/exercises.ts) or create your own files:

1. **Exercise 1 (Modules):** Create a module `mathUtils.ts` exporting functions `add` and `multiply`. Import both into `main.ts` and log their results.
2. **Exercise 2 (Generic Function):** Create a generic function `makePair<A, B>(first: A, second: B): [A, B]` that returns a tuple pair of the two values.
3. **Exercise 3 (Async Function):** Write an `async` function `fetchProduct(id: number): Promise<{ id: number; title: string; price: number }>` that returns mock product data after a short simulated delay.
4. **Exercise 4 (Error Handling):** Write a function `parseScore(input: string): number` that converts a string to a number. Throw an error if `isNaN(score)`, and catch the error in a `try...catch` block.
5. **Exercise 5 (JSON Runtime Validation):** Parse a sample JSON string `'{"id": 42, "role": "admin"}'` as `unknown`. Check that it is an object and contains `id` of type `number` before printing.

---

## 8. Hints

- **Hint for Ex 1:** `export function add(...)` and `import { add, multiply } from "./mathUtils";`.
- **Hint for Ex 2:** Return type is `[A, B]` and return value is `[first, second]`.
- **Hint for Ex 3:** Use `new Promise((resolve) => setTimeout(..., 100))`.
- **Hint for Ex 4:** Check `if (isNaN(num)) throw new Error("Invalid score number");`.
- **Hint for Ex 5:** Use `typeof data === "object" && data !== null && "id" in data`.

---

## 9. Solutions

Full solutions and explanations are available in [solutions.md](./solutions.md).

---

## 10. Completion Checklist

- [ ] Understand `import` and `export` for splitting code.
- [ ] Understand basic generics (`<T>`).
- [ ] Work with `async`, `await`, and `Promise<T>`.
- [ ] Catch errors with `try...catch`.
- [ ] Understand why JSON needs runtime validation.
- [ ] Complete Exercises 1 through 5.
- [ ] Check answers against [solutions.md](./solutions.md).
