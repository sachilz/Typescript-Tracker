# 05: Day 5 — The Type System

Welcome to Day 5. Today covers core features of TypeScript's type system: choosing between `type` and `interface`, combining types using unions (`|`), creating strict choices with literal types, and narrowing types safely using `typeof`.

---

## 1. Learning Objectives

By the end of this day, you will be able to:

- Compare `type` and `interface` and understand when to choose each.
- Combine types using union operators (`A | B`).
- Enforce strict sets of allowed values using literal types.
- Check types safely at runtime using **type narrowing** with `typeof`.
- Prevent property access errors on union values.
- Write readable, expressive custom types for domain models.

---

## 2. Topics to Learn

- [ ] `type` aliases
- [ ] `interface` declarations
- [ ] Practical differences between `type` and `interface`
- [ ] Union types (`string | number`)
- [ ] Literal types (`"admin" | "editor" | "viewer"`)
- [ ] Optional properties in interfaces and types
- [ ] Type narrowing using `typeof`
- [ ] Handling unions safely in functions
- [ ] 5 practice exercises

---

## 3. Explanations

### `type` vs `interface`: Practical Comparison

Both `type` and `interface` allow you to name and describe data shapes. Here is the practical difference:

| Feature | `interface` | `type` |
| :--- | :--- | :--- |
| **Primary Use** | Describing object shapes | Primitives, unions, tuples, and objects |
| **Extending** | Uses `extends` keyword | Uses intersection operator (`&`) |
| **Declaration Merging** | Yes (can reopen an interface) | No (cannot be reopened) |
| **Direct Unions** | Cannot represent `A \| B` directly | Represents unions cleanly |

**General Rule of Thumb:**
- Use **`interface`** when defining object shapes and public APIs.
- Use **`type`** when defining union types, primitives, or computed types.

### Union Types (`|`)

A union type allows a variable or parameter to hold more than one type:

```ts
let identifier: string | number;
identifier = 101;       // Valid
identifier = "USR-101"; // Valid
```

### Literal Types

Instead of allowing any string, a **literal type** restricts values to a precise list of valid choices:

```ts
type SystemRole = "admin" | "editor" | "viewer";

let userRole: SystemRole = "admin"; // Valid
// userRole = "guest"; // Error: Type '"guest"' is not assignable to type 'SystemRole'.
```

This prevents typos and provides immediate autocomplete options in your editor.

### Type Narrowing (`typeof`)

When a variable has a union type like `string | number`, you cannot immediately call methods specific to strings (`.toUpperCase()`) or numbers (`.toFixed()`).

You must first **narrow** the type using the `typeof` operator:

```ts
function formatIdentifier(id: string | number): string {
  if (typeof id === "string") {
    // TypeScript knows id is a string inside this block:
    return `ID: ${id.toUpperCase()}`;
  } else {
    // TypeScript knows id is a number inside this block:
    return `ID: #${id.toFixed(0)}`;
  }
}
```

TypeScript acts on JavaScript's runtime type checks to narrow down types statically.

---

## 4. Code Example

Here is the runnable example for Day 5 ([examples/type-system-demo.ts](./examples/type-system-demo.ts)):

```ts
// 05-day-5-type-system/examples/type-system-demo.ts

// 1. Literal type and Union type
export type SystemRole = "admin" | "editor" | "viewer";

// 2. Interface for User
export interface SystemUser {
  id: number;
  name: string;
  role: SystemRole;
  email?: string;
}

// 3. Function that handles user roles safely with exhaustiveness
export function getPermissions(role: SystemRole): string[] {
  switch (role) {
    case "admin":
      return ["create", "read", "update", "delete"];
    case "editor":
      return ["create", "read", "update"];
    case "viewer":
      return ["read"];
    default:
      return [];
  }
}

// 4. Function using type narrowing with typeof
export function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return `Text: "${value.trim()}"`;
  } else {
    return `Numeric: $${value.toFixed(2)}`;
  }
}

// Running demo
console.log("=== Day 5: Type System Demo ===");
const adminUser: SystemUser = { id: 1, name: "Alice", role: "admin" };
console.log(`User: ${adminUser.name}, Role: ${adminUser.role}`);
console.log("Permissions:", getPermissions(adminUser.role));
console.log(formatValue("   Hello World   "));
console.log(formatValue(49.9));
```

### Running the Example

```bash
npm run start:day5
```

**Output:**
```text
=== Day 5: Type System Demo ===
User: Alice, Role: admin
Permissions: [ 'create', 'read', 'update', 'delete' ]
Text: "Hello World"
Numeric: $49.90
```

---

## 5. Code Explanation

- `type SystemRole = "admin" | "editor" | "viewer"`: Limits allowed roles strictly to these three strings.
- `interface SystemUser`: Defines the contract for user objects.
- `switch (role)`: Tests each literal role. The compiler checks that all branches are handled.
- `typeof value === "string"`: Functions as a type guard, allowing safe string method calls inside the `if` branch.

---

## 6. Common Mistakes

### Mistake 1: Calling methods on a union without narrowing
```ts
function print(val: string | number) {
  console.log(val.toUpperCase()); 
  // Error: Property 'toUpperCase' does not exist on type 'number'.
}
```
**Fix:** Narrow the type with `typeof` first:
```ts
function print(val: string | number) {
  if (typeof val === "string") {
    console.log(val.toUpperCase());
  } else {
    console.log(val.toString());
  }
}
```

### Mistake 2: Case sensitivity in literal types
```ts
type Status = "Pending" | "Completed";
let current: Status = "pending"; 
// Error: Type '"pending"' is not assignable to type 'Status'. Casing matters.
```
**Fix:** Match the exact casing declared in the type definition:
```ts
let current: Status = "Pending";
```

---

## 7. Exercises

Practise in [examples/exercises.ts](./examples/exercises.ts) or in a separate file:

1. **Exercise 1 (Role Union):** Create a union type `UserRole = "admin" | "member" | "guest"`. Declare three variables matching each role.
2. **Exercise 2 (Vehicle Type):** Create a `Vehicle` type with `make: string`, `model: string`, `year: number`, and optional `isElectric?: boolean`.
3. **Exercise 3 (Student Interface):** Create an `interface Day5Student` with `id: number`, `name: string`, `grades: number[]`, and optional `email?: string`.
4. **Exercise 4 (Union Parameter):** Write a function `formatInput(input: string | number): string`. If it is a string, return uppercase text; if it is a number, return double the value.
5. **Exercise 5 (Exhaustive Switch):** Write a function `getWelcomeMessage(role: UserRole): string` that returns a customized welcome string for each role using a `switch` statement.

---

## 8. Hints

- **Hint for Ex 1:** `type UserRole = "admin" | "member" | "guest";`.
- **Hint for Ex 2:** Use `type Vehicle = { ... };`.
- **Hint for Ex 3:** Use `interface Day5Student { ... }`.
- **Hint for Ex 4:** Check `if (typeof input === "string") { ... } else { ... }`.
- **Hint for Ex 5:** Add `case "admin":`, `case "member":`, `case "guest":`, and `default:`.

---

## 9. Solutions

Complete solutions and explanations are in [solutions.md](./solutions.md).

---

## 10. Completion Checklist

- [ ] Understand `type` vs `interface` and when to choose each.
- [ ] Create and assign union types (`|`).
- [ ] Use string literal types to enforce exact options.
- [ ] Use `typeof` for type narrowing in conditional logic.
- [ ] Ran `npm run start:day5`.
- [ ] Attempted Exercises 1 through 5.
- [ ] Checked your answers in [solutions.md](./solutions.md).

---

[⬅️ Day 4: Arrays and Objects](../04-day-4-arrays-and-objects/README.md) | [Next: Day 6 — Modern TypeScript ➔](../06-day-6-modern-typescript/README.md)
