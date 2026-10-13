# 🚀 Day 5: The Type System

> **Day 5 of 7: Mastering TypeScript's Modeling Superpowers**  
> Welcome to Day 5! Today we dive into the expressive heart of TypeScript: choosing between `type` aliases and `interface`, combining types using unions (`|`), creating strict choices with literal types, and narrowing types safely using `typeof`.

---

### 📌 Quick Overview

| ⏱️ Estimated Time | 🎯 Level | 🛠️ Concepts | 📚 Prerequisites |
| :--- | :--- | :--- | :--- |
| **40–50 minutes** | Intermediate-Beginner | `type` vs `interface`, Union Types, Literals, Type Narrowing (`typeof`) | Day 4 (Arrays & Objects) |

---

## 1. Learning Objectives

By the end of Day 5, you will be able to:
- Compare `type` and `interface` and know when to choose each.
- Combine types using union operators (`A | B`).
- Enforce strict sets of allowed values using literal types.
- Safely check types at runtime using **type narrowing** (`typeof`).
- Prevent property access errors on union values.
- Write readable, expressive custom types for domain models.

---

## 2. Topics to Learn

- [ ] `type` aliases for unions and primitives
- [ ] `interface` declarations for object shapes
- [ ] Practical differences between `type` and `interface`
- [ ] Union types (`string | number`)
- [ ] Literal types (`"admin" | "editor" | "viewer"`)
- [ ] Optional properties in interfaces and types
- [ ] Type narrowing using `typeof`
- [ ] Handling unions safely in functions
- [ ] 5 hands-on practice exercises
- [ ] 📢 Share your Day 5 milestone on LinkedIn

---

## 3. Simple Explanations

### `type` vs. `interface`: How to Choose?

Both `type` and `interface` allow you to name and describe data shapes. Here is the beginner-friendly decision guide:

```text
┌─────────────────────────┬──────────────────────────────┬─────────────────────────────┐
│ Feature                 │ `interface`                  │ `type`                      │
├─────────────────────────┼──────────────────────────────┼─────────────────────────────┤
│ Primary Purpose         │ Describing Object shapes     │ Any type (Unions, Primitives)│
│ Extending / Inheriting  │ Uses `extends` keyword       │ Uses intersection `&`       │
│ Re-opening (Merging)    │ ✅ Allowed (Declaration merge)│ ❌ Not allowed              │
│ Union & Literal support │ ❌ Cannot name direct unions │ ✅ Perfect for unions       │
└─────────────────────────┴──────────────────────────────┴─────────────────────────────┘
```

> [!TIP]
> **Best Practice Rule:**
> - Use **`interface`** when defining object shapes and models (e.g. `interface User { ... }`).
> - Use **`type`** when creating unions, literals, or combining primitives (e.g. `type Status = "active" | "inactive";`).

---

### Union Types (`|`)
A union type allows a value to be one of several types:

```ts
let studentId: string | number;
studentId = 101;       // ✅ Allowed
studentId = "STU-101"; // ✅ Allowed
// studentId = true;   ❌ Error: boolean not allowed
```

---

### String Literal Types
Instead of allowing *any* random string, a **literal type** restricts values to a precise list of valid choices:

```ts
type SystemRole = "admin" | "editor" | "viewer";

let userRole: SystemRole = "admin"; // ✅
// userRole = "guest"; ❌ Type '"guest"' is not assignable to type 'SystemRole'.
```

```text
  Plain string:   "admin", "superadmin", "ADMIN", "foo", "hello" (Uncontrolled)
  Literal type:   ONLY "admin" | "editor" | "viewer"             (Strict & Safe!)
```

---

### Type Narrowing (`typeof`)
When a variable has a union type like `string | number`, you cannot immediately call methods specific to strings (`.toUpperCase()`) or numbers (`.toFixed()`).  
You must first **narrow** the type using `typeof`:

```ts
function formatIdentifier(id: string | number): string {
  if (typeof id === "string") {
    // Inside this block, TypeScript KNOWS id is 100% a string!
    return `ID: ${id.toUpperCase()}`;
  } else {
    // Inside this block, TypeScript KNOWS id is 100% a number!
    return `ID: #${id.toFixed(0)}`;
  }
}
```

```text
         ┌─────────────────────────┐
         │   id: string | number   │
         └────────────┬────────────┘
                      │
            if (typeof id === "string")
           ┌──────────┴──────────┐
           ▼                     ▼
     [Branch 1]             [Branch 2]
     id is string           id is number
     .toUpperCase()         .toFixed()
```

---

## 4. Code Examples

Run this example directly from [examples/type-system-demo.ts](./examples/type-system-demo.ts):

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

### How to Run This Example:
```bash
npm run start:day5
```

**Expected Terminal Output:**
```text
=== Day 5: Type System Demo ===
User: Alice, Role: admin
Permissions: [ 'create', 'read', 'update', 'delete' ]
Text: "Hello World"
Numeric: $49.90
```

---

## 5. Code Explanation

- `type SystemRole = "admin" | "editor" | "viewer"`: Limits allowed roles strictly to these 3 strings.
- `interface SystemUser`: Defines the complete contract for user records.
- `switch (role)`: Checks each literal role; the compiler alerts you if a case is missing.
- `typeof value === "string"`: Acts as a **type guard**, unlocking string-specific methods inside the `if` block safely.

---

## 6. Common Mistakes & Quick Fixes

### ❌ Mistake 1: Calling methods on a union without narrowing
```ts
function print(val: string | number) {
  console.log(val.toUpperCase()); 
  // ❌ Property 'toUpperCase' does not exist on type 'number'.
}
```
> [!TIP]
> **Fix:** Narrow the type with `typeof` first:
> ```ts
> function print(val: string | number) {
>   if (typeof val === "string") {
>     console.log(val.toUpperCase()); // ✅ Safe
>   } else {
>     console.log(val.toString());     // ✅ Safe
>   }
> }
> ```

---

### ❌ Mistake 2: Casing mismatch in literal types
```ts
type Status = "Pending" | "Completed";
let current: Status = "pending"; 
// ❌ Type '"pending"' is not assignable to type 'Status' (case-sensitive!).
```
> [!TIP]
> **Fix:** Match the exact casing declared in the literal type:
> ```ts
> let current: Status = "Pending"; // ✅
> ```

---

## 7. Exercises

Practise in [examples/exercises.ts](./examples/exercises.ts) or your own file:

1. **Exercise 1 (Role Union):** Create a union type `UserRole = "admin" | "member" | "guest"`. Declare three variables matching each role.
2. **Exercise 2 (Vehicle Blueprint):** Create a `Vehicle` type with `make: string`, `model: string`, `year: number`, and optional `isElectric?: boolean`.
3. **Exercise 3 (Student Interface):** Create an `interface Day5Student` with `id: number`, `name: string`, `grades: number[]`, and optional `email?: string`.
4. **Exercise 4 (Type Guard Function):** Write a function `formatInput(input: string | number): string`. If it's a string, return uppercase text; if it's a number, return double the value.
5. **Exercise 5 (Exhaustive Switch):** Write a function `getWelcomeMessage(role: UserRole): string` that returns a customized welcome string for each role using a `switch` statement.

---

## 8. Hints

- **Hint for Ex 1:** Use `type UserRole = "admin" | "member" | "guest";`.
- **Hint for Ex 2:** Use `type Vehicle = { ... };`.
- **Hint for Ex 3:** Use `interface Day5Student { ... }`.
- **Hint for Ex 4:** Check `if (typeof input === "string") { ... } else { ... }`.
- **Hint for Ex 5:** Add `case "admin":`, `case "member":`, `case "guest":`, and `default:`.

---

## 9. Solutions

Complete solutions and explanations are available in [solutions.md](./solutions.md).

---

## 10. Completion Checklist

- [ ] Understand `type` vs. `interface` and when to use each.
- [ ] Create and assign union types (`|`).
- [ ] Use string literal types to enforce exact valid options.
- [ ] Use `typeof` for type narrowing in conditional logic.
- [ ] Run `npm run start:day5`.
- [ ] Completed Exercises 1 through 5.
- [ ] Checked answers against [solutions.md](./solutions.md).

---

## 📢 Share Your Day 5 Milestone on LinkedIn!

```text
🚀 Day 5 of the 7-Day TypeScript Challenge complete!

Mastered TypeScript's expressive type modeling tools today:
✅ 'type' vs 'interface' (and the best-practice decision rule)
✅ Union types (|) for flexible yet strictly typed parameters
✅ String literal types for bulletproof enum-like safety
✅ Type narrowing using 'typeof' guards to eliminate runtime errors

No more guessing object shapes or valid parameter options! 🛡️

#TypeScript #JavaScript #WebDevelopment #Programming #100DaysOfCode #LearnInPublic #SoftwareEngineering
```

---

| [⬅️ Day 4: Arrays & Objects](../04-day-4-arrays-and-objects/README.md) | [Day 6: Modern TypeScript ➡️](../06-day-6-modern-typescript/README.md) |
| :--- | :--- |
