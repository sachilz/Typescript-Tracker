# 🚀 Day 4: Arrays and Objects

> **Day 4 of 7: Modeling Complex Data**  
> Welcome to Day 4! In real applications, data is rarely just single strings or numbers—we work with lists and complex structures. Today you will learn how to type arrays, transform them with modern functional methods (`map`, `filter`, `find`), define object shapes, and create your first custom `type` and `interface` contracts!

---

### 📌 Quick Overview

| ⏱️ Estimated Time | 🎯 Level | 🛠️ Concepts | 📚 Prerequisites |
| :--- | :--- | :--- | :--- |
| **40–50 minutes** | Intermediate-Beginner | Array methods, Object shapes, `type`, `interface`, Optional keys | Day 3 (Functions) |

---

## 1. Learning Objectives

By the end of Day 4, you will be able to:
- Work with typed arrays and access elements safely.
- Use `map()`, `filter()`, and `find()` with automatic TypeScript type preservation.
- Define explicit property shapes for JavaScript objects.
- Use optional object properties (`?`).
- Create reusable data contracts using both `type` aliases and `interface` declarations.
- Safely handle `undefined` when querying lists with `.find()`.

---

## 2. Topics to Learn

- [ ] Creating and accessing typed arrays
- [ ] Functional array methods: `map`, `filter`, `find`
- [ ] Defining inline object structures
- [ ] Optional object properties (`prop?: type`)
- [ ] Introduction to `type` aliases
- [ ] Introduction to `interface` contracts
- [ ] Working with arrays of objects
- [ ] 5 hands-on practice exercises
- [ ] 📢 Share your Day 4 milestone on LinkedIn

---

## 3. Simple Explanations

### Functional Array Methods with TypeScript

When you use modern array methods in TypeScript, you get full autocompletion inside the callbacks:

```text
┌──────────┬──────────────────────────────────────┬────────────────────────────┐
│ Method   │ What It Does                         │ Return Type                │
├──────────┼──────────────────────────────────────┼────────────────────────────┤
│ .map()   │ Transforms every item into new value │ New typed array            │
│ .filter()│ Keeps only items matching condition  │ Filtered typed array       │
│ .find()  │ Finds the first matching element     │ Element OR undefined (T | undefined) │
└──────────┴──────────────────────────────────────┴────────────────────────────┘
```

> [!IMPORTANT]
> Because `.find()` might not find any matching element, TypeScript types its return as `T | undefined`. You **must** handle the possibility of `undefined`!

---

### Object Types & Shapes
In TypeScript, you can define an object's structure inline:

```ts
const user: { id: number; name: string; email?: string } = {
  id: 1,
  name: "Sarah",
};
```

If you miss a required property or misspell a key name (e.g. `nme`), TypeScript warns you immediately.

---

### Introduction to `type` and `interface`
Instead of repeating bulky inline shapes across your codebase, give your data shape a reusable name!

#### 1. Using `type` Alias:
```ts
type Product = {
  id: number;
  name: string;
  price: number;
  category?: string;
};
```

#### 2. Using `interface`:
```ts
interface Student {
  id: number;
  name: string;
  grades: number[];
}
```

```text
  Inline (Messy):       const book: { title: string; pages: number } = { ... };
  Type Alias (Clean):   type Book = { title: string; pages: number };
                        const book: Book = { ... };
```

---

## 4. Code Examples

Run this example from [examples/arrays-objects-demo.ts](./examples/arrays-objects-demo.ts):

```ts
// 04-day-4-arrays-and-objects/examples/arrays-objects-demo.ts

// 1. Defining a custom reusable type
type Book = {
  id: number;
  title: string;
  author: string;
  year: number;
  isAvailable?: boolean;
};

// 2. Creating an array of typed objects
const library: Book[] = [
  { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, isAvailable: true },
  { id: 2, title: "1984", author: "George Orwell", year: 1949, isAvailable: false },
  { id: 3, title: "Clean Code", author: "Robert C. Martin", year: 2008, isAvailable: true },
];

// 3. Using map to extract titles (Inferred as string[])
const bookTitles: string[] = library.map((book) => book.title);

// 4. Using filter to find modern books (Inferred as Book[])
const modernBooks: Book[] = library.filter((book) => book.year >= 2000);

// 5. Using find to look up a book by ID (Inferred as Book | undefined)
const bookFound: Book | undefined = library.find((book) => book.id === 2);

console.log("=== Day 4: Arrays & Objects Demo ===");
console.log("All Titles:", bookTitles);
console.log(`Modern Books count: ${modernBooks.length}`);
if (bookFound) {
  console.log(`Found Book #2: "${bookFound.title}" by ${bookFound.author}`);
}
```

### How to Run This Example:
```bash
npm run start:day4
```

**Expected Terminal Output:**
```text
=== Day 4: Arrays & Objects Demo ===
All Titles: [ 'The Hobbit', '1984', 'Clean Code' ]
Modern Books count: 1
Found Book #2: "1984" by George Orwell
```

---

## 5. Code Explanation

- `type Book = { ... }`: Creates an official blueprint for all book objects.
- `library: Book[]`: Declares an array containing only objects adhering to the `Book` contract.
- `library.map((book) => book.title)`: Because TypeScript knows `book` is a `Book`, it knows `book.title` is a string, typing the resulting array as `string[]`.
- `bookFound: Book | undefined`: Guards against runtime crashes if a book ID doesn't exist.

---

## 6. Common Mistakes & Quick Fixes

### ❌ Mistake 1: Missing a required property in an object
```ts
type Car = { brand: string; model: string; year: number };
const myCar: Car = { brand: "Tesla", model: "Model 3" }; 
// ❌ Property 'year' is missing in type '{ brand: string; model: string; }'.
```
> [!TIP]
> **Fix:** Supply all required properties, or mark non-essential fields as optional (`year?: number`):
> ```ts
> const myCar: Car = { brand: "Tesla", model: "Model 3", year: 2023 }; // ✅
> ```

---

### ❌ Mistake 2: Calling properties on a `.find()` result without checking for `undefined`
```ts
const user = users.find((u) => u.id === 99);
console.log(user.name); // ❌ 'user' is possibly 'undefined'.
```
> [!TIP]
> **Fix:** Use optional chaining (`user?.name`) or an `if (user)` check:
> ```ts
> if (user) {
>   console.log(user.name); // ✅ Safe!
> }
> ```

---

## 7. Exercises

Practise in [examples/exercises.ts](./examples/exercises.ts) or your own file:

1. **Exercise 1 (Name Array):** Create an array of five student names (`string[]`). Print the first, third, and last names.
2. **Exercise 2 (Filtering Array):** Given `const numbers: number[] = [4, 12, 8, 25, 3, 19, 10, 42]`, use `.filter()` to retrieve all numbers strictly greater than 10.
3. **Exercise 3 (Student Object):** Create a typed object representing a student with properties `id: number`, `name: string`, `age: number`, and `major: string`. Print their details.
4. **Exercise 4 (Product Blueprint):** Create a `Product` type alias with `id`, `name`, `price`, and an optional `category?: string`. Create an array of 3 products.
5. **Exercise 5 (Transforming with Map):** Using your product catalog from Exercise 4, use `.map()` to generate formatted strings: `"Product #[ID]: [Name] ($[Price])"` and print them.

---

## 8. Hints

- **Hint for Ex 1:** `names[names.length - 1]` gets the final item.
- **Hint for Ex 2:** `.filter((n) => n > 10)`.
- **Hint for Ex 3:** Define an inline shape or a reusable `interface`.
- **Hint for Ex 4:** Remember `category?: string` can be left out on some items.
- **Hint for Ex 5:** `products.map((p) => `${p.name} ($${p.price.toFixed(2)})`)`.

---

## 9. Solutions

Complete solutions and explanations are available in [solutions.md](./solutions.md).

---

## 10. Completion Checklist

- [ ] Create and access typed arrays.
- [ ] Use `map()`, `filter()`, and `find()` with type inference.
- [ ] Define object shapes with required and optional properties.
- [ ] Understand basic `type` and `interface` syntax.
- [ ] Run `npm run start:day4`.
- [ ] Completed Exercises 1 through 5.
- [ ] Checked answers against [solutions.md](./solutions.md).

---

## 📢 Share Your Day 4 Milestone on LinkedIn!

```text
🚀 Day 4 of the 7-Day TypeScript Challenge complete!

Stepping into structured data modeling today:
✅ Strictly typed arrays and higher-order methods (map, filter, find)
✅ Understanding why .find() returns T | undefined and handling it safely
✅ Defining explicit object shapes and optional properties (?)
✅ Writing reusable data contracts with 'type' and 'interface'

Making complex data predictable and fun to work with! 📊

#TypeScript #JavaScript #WebDevelopment #Programming #100DaysOfCode #LearnInPublic #SoftwareEngineering
```

---

| [⬅️ Day 3: Functions](../03-day-3-functions/README.md) | [Day 5: The Type System ➡️](../05-day-5-type-system/README.md) |
| :--- | :--- |
