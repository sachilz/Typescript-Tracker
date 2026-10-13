# 04: Day 4 — Arrays and Objects

Welcome to Day 4. Today covers working with structured data: using common array methods (`map`, `filter`, `find`), defining object shapes, using optional properties, and an introduction to `type` and `interface`.

---

## 1. Learning Objectives

By the end of this day, you will be able to:

- Create and manipulate typed arrays safely.
- Use `map()`, `filter()`, and `find()` with automatic TypeScript type preservation.
- Define explicit property shapes for JavaScript objects.
- Use optional properties (`?`) on objects.
- Create reusable data models using `type` aliases and `interface` declarations.
- Safely handle `undefined` when using `.find()`.

---

## 2. Topics to Learn

- [ ] Creating and accessing typed arrays
- [ ] Array methods: `map`, `filter`, `find`
- [ ] Defining inline object types
- [ ] Optional object properties (`prop?: type`)
- [ ] Introduction to `type` aliases
- [ ] Introduction to `interface` declarations
- [ ] Working with arrays of objects
- [ ] 5 practice exercises

---

## 3. Explanations

### Array Methods in TypeScript

When you use higher-order array methods in TypeScript, callback arguments are typed automatically:

- **`.map()`**: Transforms each element and returns a new array. TypeScript infers the type of the returned array based on the callback's return value.
- **`.filter()`**: Filters items based on a boolean condition. Returns an array of the same element type.
- **`.find()`**: Finds the first matching item. Because an item might not exist, the return type is `T | undefined`.

```ts
const numbers: number[] = [10, 25, 30];

const doubled = numbers.map((n) => n * 2); // Inferred as number[]
const highNumbers = numbers.filter((n) => n > 20); // Inferred as number[]
const match = numbers.find((n) => n === 25); // Inferred as number | undefined
```

When using `.find()`, you should always handle the possibility that nothing was found:

```ts
if (match !== undefined) {
  console.log(`Found: ${match}`);
}
```

### Defining Object Types

You can describe an object's structure inline:

```ts
const user: { id: number; name: string; email?: string } = {
  id: 1,
  name: "Sarah",
};
```

If you miss a required property or introduce an unexpected property name, TypeScript warns you immediately.

### Optional Properties (`?`)

If a property is not required on every object, mark it with `?`:

```ts
type User = {
  id: number;
  name: string;
  email?: string; // Optional property
};
```

### Introduction to `type` and `interface`

Instead of writing out object types inline repeatedly, you can define a reusable name.

#### 1. Using a `type` alias:
```ts
type Product = {
  id: number;
  name: string;
  price: number;
  category?: string;
};
```

#### 2. Using an `interface`:
```ts
interface Student {
  id: number;
  name: string;
  grades: number[];
}
```

Both describe the shape of an object cleanly. In Day 5, we will explore their specific differences.

---

## 4. Code Example

Here is the runnable example for Day 4 ([examples/arrays-objects-demo.ts](./examples/arrays-objects-demo.ts)):

```ts
// 04-day-4-arrays-and-objects/examples/arrays-objects-demo.ts

// 1. Defining a custom type
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

### Running the Example

```bash
npm run start:day4
```

**Output:**
```text
=== Day 4: Arrays & Objects Demo ===
All Titles: [ 'The Hobbit', '1984', 'Clean Code' ]
Modern Books count: 1
Found Book #2: "1984" by George Orwell
```

---

## 5. Code Explanation

- `type Book = { ... }`: Creates a reusable contract for what a book object must look like.
- `library: Book[]`: Declares that `library` is an array where every item must conform to `Book`.
- `library.map((book) => book.title)`: TypeScript knows `book` is of type `Book`, so it knows `book.title` is a string, and types `bookTitles` as `string[]`.
- `bookFound: Book | undefined`: Guards against runtime crashes if the book is not found in the array.

---

## 6. Common Mistakes

### Mistake 1: Missing a required property in an object
```ts
type Car = { brand: string; model: string; year: number };
const myCar: Car = { brand: "Tesla", model: "Model 3" }; 
// Error: Property 'year' is missing in type '{ brand: string; model: string; }'.
```
**Fix:** Provide all required properties, or mark non-essential fields as optional (`year?: number`):
```ts
const myCar: Car = { brand: "Tesla", model: "Model 3", year: 2023 };
```

### Mistake 2: Accessing properties on `.find()` without checking for `undefined`
```ts
const user = users.find((u) => u.id === 99);
console.log(user.name); // Error: 'user' is possibly 'undefined'.
```
**Fix:** Check if the item exists first:
```ts
if (user) {
  console.log(user.name);
}
```

---

## 7. Exercises

Practise in [examples/exercises.ts](./examples/exercises.ts) or in a separate file:

1. **Exercise 1 (Student Names):** Create an array of five student names (`string[]`). Print the first, third, and last names.
2. **Exercise 2 (Filtering Numbers):** Given `const numbers: number[] = [4, 12, 8, 25, 3, 19, 10, 42]`, use `.filter()` to retrieve all numbers strictly greater than 10.
3. **Exercise 3 (Typed Student Object):** Create a typed object representing a student with properties `id: number`, `name: string`, `age: number`, and `major: string`. Print their details.
4. **Exercise 4 (Product Type):** Create a `Product` type alias with `id`, `name`, `price`, and an optional `category?: string`. Create an array of 3 products.
5. **Exercise 5 (Transforming with Map):** Using your product catalog from Exercise 4, use `.map()` to generate formatted strings: `"Product #[ID]: [Name] ($[Price])"` and print them.

---

## 8. Hints

- **Hint for Ex 1:** The last element of an array can be accessed with `names[names.length - 1]`.
- **Hint for Ex 2:** The callback function for filter is `(num) => num > 10`.
- **Hint for Ex 3:** You can define an inline shape or a reusable `type`.
- **Hint for Ex 4:** Remember `category?: string` can be left out on some items.
- **Hint for Ex 5:** `products.map((p) => `${p.name} ($${p.price.toFixed(2)})`)`.

---

## 9. Solutions

Complete solutions and explanations are in [solutions.md](./solutions.md).

---

## 10. Completion Checklist

- [ ] Create and access typed arrays.
- [ ] Use `map()`, `filter()`, and `find()` with automatic type inference.
- [ ] Define object shapes with required and optional properties.
- [ ] Understand basic `type` and `interface` syntax.
- [ ] Ran `npm run start:day4`.
- [ ] Attempted Exercises 1 through 5.
- [ ] Checked your answers in [solutions.md](./solutions.md).

---

[⬅️ Day 3: Functions](../03-day-3-functions/README.md) | [Next: Day 5 — The Type System ➔](../05-day-5-type-system/README.md)
