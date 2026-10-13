# Solutions — Day 6: Modern TypeScript

Complete solutions and explanations for Day 6 exercises.

---

## Exercise 1: Export & Import Modules

### File 1: `mathUtils.ts`
```ts
export function add(a: number, b: number): number {
  return a + b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}
```

### File 2: `main.ts`
```ts
import { add, multiply } from "./mathUtils";

console.log(`Add: ${add(10, 5)}`);         // 15
console.log(`Multiply: ${multiply(4, 5)}`); // 20
```

### Explanation:
- `export` exposes definitions so they can be consumed elsewhere.
- `import { ... } from "./file"` imports specific named exports.

---

## Exercise 2: Generic Function (`makePair`)

```ts
function makePair<A, B>(first: A, second: B): [A, B] {
  return [first, second];
}

const pair1 = makePair<string, number>("UserID", 101); // type is [string, number]
const pair2 = makePair<boolean, string>(true, "OK");    // type is [boolean, string]

console.log("Pair 1:", pair1);
console.log("Pair 2:", pair2);
```

### Explanation:
- `<A, B>` are type placeholders.
- When calling `makePair("UserID", 101)`, TypeScript preserves the fact that index `0` is a `string` and index `1` is a `number`.

---

## Exercise 3: Asynchronous Function Returning Sample Data

```ts
interface UserData {
  id: number;
  name: string;
  role: string;
}

async function fetchSampleUser(id: number): Promise<UserData> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        name: "Alex Morgan",
        role: "Student",
      });
    }, 100);
  });
}

// Consuming with async/await:
async function run() {
  const user = await fetchSampleUser(42);
  console.log(`User: ${user.name}, Role: ${user.role}`);
}

run();
```

### Explanation:
- `Promise<UserData>` denotes that when resolved, the promise yields a `UserData` object.
- `await` pauses execution of the local `async` function until the promise finishes.

---

## Exercise 4: Error Handling with `try...catch`

```ts
function parseScore(input: string): number {
  const score = Number(input);
  if (isNaN(score)) {
    throw new Error(`Invalid score input: "${input}" is not a valid number.`);
  }
  return score;
}

try {
  const valid = parseScore("85");
  console.log(`Score is: ${valid}`);

  // This will throw:
  parseScore("one-hundred");
} catch (error) {
  if (error instanceof Error) {
    console.error(`Caught error: ${error.message}`);
  }
}
```

### Explanation:
- In TypeScript, the `error` in `catch (error)` is typed as `unknown` by default for safety.
- Checking `if (error instanceof Error)` safely lets you access `.message`.

---

## Exercise 5: JSON Runtime Validation

```ts
const rawJson = '{"id": 42, "role": "admin"}';
const parsedData: unknown = JSON.parse(rawJson);

function isUserPayload(data: unknown): data is { id: number; role: string } {
  return (
    typeof data === "object" &&
    data !== null &&
    "id" in data &&
    typeof (data as Record<string, unknown>).id === "number" &&
    "role" in data &&
    typeof (data as Record<string, unknown>).role === "string"
  );
}

if (isUserPayload(parsedData)) {
  // Now safe to access .id and .role:
  console.log(`Valid User -> ID: ${parsedData.id}, Role: ${parsedData.role}`);
} else {
  console.error("Untrusted JSON data failed validation!");
}
```

### Explanation:
- `JSON.parse()` returns `any` by default, but treating it as `unknown` forces type checking.
- Using a type predicate (`data is { id: number; role: string }`) guarantees type safety during runtime execution.
