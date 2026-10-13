# Solutions — Day 7: Mini Project and Revision

Here are the complete solutions for the mini project extension exercises, the 10 final practice questions, and the 5 debugging challenges.

---

## Part 1: Mini Project Extension Exercises

### Exercise 1: Delete a Student

```ts
// In studentService.ts:
export function deleteStudent(id: number): boolean {
  const index = students.findIndex((s) => s.id === id);
  if (index === -1) {
    return false; // Student not found
  }
  students.splice(index, 1);
  return true; // Successfully deleted
}
```

---

### Exercise 2: Top Performing Student

```ts
// In studentService.ts:
export function getTopStudent(): StudentSummary | null {
  if (students.length === 0) return null;

  let bestStudent = students[0];
  let highestAverage = calculateAverageMark(bestStudent.marks);

  for (let i = 1; i < students.length; i++) {
    const avg = calculateAverageMark(students[i].marks);
    if (avg > highestAverage) {
      highestAverage = avg;
      bestStudent = students[i];
    }
  }

  return getStudentSummary(bestStudent.id);
}
```

---

### Exercise 3: Subject Breakdown Type

```ts
export type SubjectMarks = {
  math: number;
  english: number;
  science: number;
};

export interface StudentWithSubjects {
  id: number;
  name: string;
  age: number;
  subjects: SubjectMarks;
}

export function calculateSubjectAverage(subjects: SubjectMarks): number {
  const values = Object.values(subjects);
  const total = values.reduce((sum, mark) => sum + mark, 0);
  return Number((total / values.length).toFixed(2));
}
```

---

## Part 2: Answers to 10 Final Practice Questions

### 1. What does `tsc` do when it compiles TypeScript code? Does it produce type errors at runtime?
`tsc` performs static type checking and transpiles TypeScript (`.ts`) into standard JavaScript (`.js`), stripping out all types, interfaces, and annotations. It **never** produces type errors at runtime because TypeScript types do not exist in JavaScript runtime engines (V8, Node, browsers).

### 2. Why should `var` be avoided in modern TypeScript?
`var` has function-level scope (not block scope) and is hoisted, allowing variables to be accessed before declaration as `undefined`. `let` and `const` have block-level scoping and prevent accidental shadowing and hoisting bugs.

### 3. What is the inferred type of `let count = 42;`? Can you assign `"42"` to it later?
The inferred type is `number`. You cannot assign `"42"` to it later because TypeScript will throw `TS2322: Type 'string' is not assignable to type 'number'`.

### 4. What is the difference between `any` and `unknown`?
Both can hold any value, but `any` disables all type checking, letting you call any method or property (which may crash at runtime). `unknown` keeps type safety intact by forcing you to verify the type with type guards (like `typeof`) before accessing any properties.

### 5. Why must optional function parameters always be placed after required parameters?
Because function arguments in JavaScript are positional. If an optional parameter came first, callers omitting it would inadvertently pass their first argument into the optional slot, shifting all subsequent required arguments out of alignment.

### 6. What does a function return if its return type is marked as `void`?
It returns `undefined` at runtime in JavaScript. The `void` annotation in TypeScript indicates to callers that the return value is not intended to be used.

### 7. If `Array.prototype.find()` searches for an item that is not present, what does it return? How should TypeScript handle this?
It returns `undefined`. TypeScript types the result as `T | undefined`, forcing you to check if the item was found before accessing its properties (via `if (item)` or optional chaining `item?.prop`).

### 8. When would you choose a string literal union type over a plain `string`?
When a variable or parameter can only take a specific, predefined set of allowed values (e.g., status: `"pending" | "approved" | "rejected"` or user roles: `"admin" | "editor"`). This prevents typos and provides instant autocomplete.

### 9. Why does `typeof` need to be used when dealing with union types like `string | number`?
Because TypeScript cannot guarantee which type the value holds at any given moment. `typeof` narrows the union down to a specific branch so TypeScript knows with 100% certainty which methods (`.toUpperCase()` vs `.toFixed()`) are safe to call.

### 10. Can TypeScript detect if an external JSON API returns incorrect fields while the program is running in production? Why or why not?
No. TypeScript operates entirely at compile-time. At runtime in production, all TypeScript types have been stripped away. To validate external JSON payloads at runtime, you must use runtime checks or validation libraries like Zod.

---

## Part 3: Solutions to 5 Debugging Challenges

### Challenge 1: Type Mismatch
```ts
// ❌ Bug: Assigning string "18" to a number variable
// let studentAge: number = "18";

// ✅ Fix:
let studentAge: number = 18;
studentAge = 19;
```

---

### Challenge 2: Optional Parameter Arithmetic
```ts
// ❌ Bug: y is possibly undefined, so x * y could produce NaN
// function multiply(x: number, y?: number): number {
//   return x * y;
// }

// ✅ Fix: Provide a default value or guard
function multiply(x: number, y: number = 1): number {
  return x * y;
}
```

---

### Challenge 3: Extra Property in Interface
```ts
// ❌ Bug: 'year' does not exist in type 'Car'
interface Car {
  brand: string;
  model: string;
}

// ✅ Fix 1: Add year to the interface
interface CarWithYear {
  brand: string;
  model: string;
  year?: number;
}

const myCar: CarWithYear = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
};
```

---

### Challenge 4: Property Access on Union
```ts
// ❌ Bug: Property 'length' does not exist on type 'number'
// function printLength(item: string | number): void {
//   console.log(item.length);
// }

// ✅ Fix: Narrow type with typeof
function printLength(item: string | number): void {
  if (typeof item === "string") {
    console.log(item.length);
  } else {
    console.log(item.toString().length);
  }
}
```

---

### Challenge 5: Missing `await` on Promise
```ts
async function getUserName(id: number): Promise<string> {
  return "Alex";
}

// ❌ Bug: getUserName returns Promise<string>, not string
// const username: string = getUserName(1);

// ✅ Fix: Call inside an async context with await
async function run() {
  const username: string = await getUserName(1);
  console.log(`Username: ${username}`);
}
run();
```
