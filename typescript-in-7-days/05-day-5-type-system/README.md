# Day 5: The Type System

Welcome to Day 5! Today we explore TypeScript's powerful type modeling tools: `type` aliases, `interface` declarations, union types, literal types, and type narrowing with `typeof`. These features give TypeScript its expressive power without getting bogged down in complex type gymnastics.

---

## 1. Learning Objectives

By the end of Day 5, you will:
- Know how and when to define `type` aliases and `interface` structures.
- Understand the practical differences between `type` and `interface`.
- Combine multiple possibilities using union types (`|`).
- Enforce strict sets of values using literal types.
- Safely check and handle different types using type narrowing (`typeof`).
- Create simple, readable custom data types.

---

## 2. Topics to Learn

- [ ] `type` aliases
- [ ] `interface` declarations
- [ ] `type` vs. `interface`: when to use which
- [ ] Union types (`A | B`)
- [ ] Literal types (`"admin" | "editor" | "viewer"`)
- [ ] Optional properties in interfaces and types
- [ ] Type narrowing using the `typeof` guard
- [ ] Handling unions safely in functions

---

## 3. Simple Explanations

### `type` Aliases
A `type` alias assigns a name to any type—primitives, unions, or object shapes:
```ts
type ID = string | number;
type Status = "pending" | "approved" | "rejected";
```

### `interface` Declarations
An `interface` describes the structure of an object:
```ts
interface UserProfile {
  id: number;
  username: string;
  bio?: string;
}
```

### `type` vs. `interface` (Quick Comparison)

| Feature | `interface` | `type` |
| :--- | :--- | :--- |
| **Best For** | Object shapes and class contracts | Unions, primitives, functions, objects |
| **Extending** | Uses `extends` keyword | Uses intersection `&` |
| **Declaration Merging**| Yes (can reopen and add fields) | No (cannot be reopened) |
| **Beginner Recommendation** | Use `interface` for objects; use `type` for unions and primitives. |

### Union Types (`|`)
A union type allows a variable or parameter to hold more than one type:
```ts
let identifier: string | number;
identifier = 101;       // Valid
identifier = "USR-101"; // Valid
```

### Literal Types
Instead of allowing *any* string or number, a literal type restricts values to an exact set of allowed values:
```ts
type Role = "admin" | "manager" | "member";

let currentRole: Role = "admin"; // Valid
// currentRole = "guest"; // ❌ Type '"guest"' is not assignable to type 'Role'.
```

### Type Narrowing (`typeof`)
When a parameter is a union type like `string | number`, you cannot immediately perform operations specific to only one type (like `.toUpperCase()` or `.toFixed()`). You must first *narrow* the type using `typeof`:
```ts
function printId(id: string | number): void {
  if (typeof id === "string") {
    // Inside this block, id is strictly a string!
    console.log(`ID string: ${id.toUpperCase()}`);
  } else {
    // Inside this block, id is strictly a number!
    console.log(`ID number: ${id.toFixed(0)}`);
  }
}
```

---

## 4. Code Examples

See runnable code in [examples/type-system-demo.ts](./examples/type-system-demo.ts):

```ts
// 05-day-5-type-system/examples/type-system-demo.ts

// 1. Literal type and Union type
type UserRole = "admin" | "editor" | "viewer";

// 2. Interface for User
interface User {
  id: number;
  name: string;
  role: UserRole;
  email?: string;
}

// 3. Function that handles user roles safely
function getPermissions(role: UserRole): string[] {
  switch (role) {
    case "admin":
      return ["create", "read", "update", "delete"];
    case "editor":
      return ["create", "read", "update"];
    case "viewer":
      return ["read"];
  }
}

// 4. Function using type narrowing with typeof
function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return `Text: "${value.trim()}"`;
  } else {
    return `Numeric: $${value.toFixed(2)}`;
  }
}

// Running the examples
const adminUser: User = { id: 1, name: "Alice", role: "admin" };
console.log(`User: ${adminUser.name}, Role: ${adminUser.role}`);
console.log(`Permissions:`, getPermissions(adminUser.role));
console.log(formatValue("   Hello World   "));
console.log(formatValue(49.9));
```

---

## 5. Code Explanation

- `type UserRole = "admin" | "editor" | "viewer"`: Limits role values to only these 3 specific string values.
- `interface User`: Describes the shape of user objects.
- `switch (role)`: TypeScript understands that `role` can only be one of the three literals, providing exhaustive checking.
- `if (typeof value === "string")`: TypeScript narrows `value` inside the `if` block, making string methods like `.trim()` safe to call.

---

## 6. Common Mistakes

### Mistake 1: Calling a method without narrowing a union
```ts
function process(val: string | number) {
  return val.toUpperCase(); // ❌ Property 'toUpperCase' does not exist on type 'number'.
}
```
**Fix:** Always check with `typeof` before calling type-specific methods:
```ts
function process(val: string | number) {
  if (typeof val === "string") {
    return val.toUpperCase();
  }
  return val.toString();
}
```

### Mistake 2: Typos in literal types
```ts
type Direction = "North" | "South" | "East" | "West";
let dir: Direction = "north"; // ❌ Type '"north"' is not assignable (casing matters!)
```
**Fix:** Match the exact casing defined in the literal type (`"North"`).

---

## 7. Exercises

Practise in your own file or [examples/exercises.ts](./examples/exercises.ts):

1. **Exercise 1 (Role Union):** Create a union type `UserRole` with `"admin" | "member" | "guest"`. Declare three variables using this type.
2. **Exercise 2 (Vehicle Type):** Create a `Vehicle` type with `make: string`, `model: string`, `year: number`, and an optional `isElectric?: boolean`.
3. **Exercise 3 (Student Interface):** Create an `interface Student` with `id: number`, `name: string`, `grades: number[]`, and optional `email?: string`.
4. **Exercise 4 (Union Parameter):** Create a function `formatInput(input: string | number): string` that returns uppercase text if a string, or double the number if a number.
5. **Exercise 5 (Safe Role Handler):** Create a function `getWelcomeMessage(role: UserRole): string` that returns a custom welcome message for each role.

---

## 8. Hints

- **Hint for Ex 1:** `type UserRole = "admin" | "member" | "guest";`.
- **Hint for Ex 2:** Use `type Vehicle = { ... }`.
- **Hint for Ex 3:** Use `interface Student { ... }`.
- **Hint for Ex 4:** Check `if (typeof input === "string")` then `else`.
- **Hint for Ex 5:** Use `switch (role)` with cases for `"admin"`, `"member"`, and `"guest"`.

---

## 9. Solutions

Full solutions are available in [solutions.md](./solutions.md).

---

## 10. Completion Checklist

- [ ] Understand `type` vs. `interface`.
- [ ] Understand union types (`|`) and literal types.
- [ ] Use `typeof` for type narrowing.
- [ ] Run `examples/type-system-demo.ts`.
- [ ] Complete Exercises 1 through 5.
- [ ] Review [solutions.md](./solutions.md).
