# Day 4: Arrays and Objects

Welcome to Day 4! Today we explore structured data: working with typed arrays, transforming them with higher-order array methods (`map`, `filter`, `find`), defining object property shapes, and creating your very first custom `type` and `interface` definitions.

---

## 1. Learning Objectives

By the end of Day 4, you will:
- Confidently create and access typed arrays.
- Use `map()`, `filter()`, and `find()` with automatic type inference.
- Define explicit shapes for JavaScript objects.
- Use optional properties (`?`) on objects.
- Understand the basics of creating custom `type` and `interface` structures.

---

## 2. Topics to Learn

- [ ] Creating and accessing typed arrays
- [ ] Array methods: `map`, `filter`, and `find`
- [ ] Defining inline object types
- [ ] Optional object properties
- [ ] Introduction to `type` aliases
- [ ] Introduction to `interface`
- [ ] Working with arrays of objects

---

## 3. Simple Explanations

### Typed Arrays & Common Methods
In TypeScript, array transformation methods preserve type safety automatically:
- **`map()`**: Transforms every element and produces a new array. TypeScript knows the type of the transformed array.
- **`filter()`**: Returns elements that pass a test condition.
- **`find()`**: Finds the first matching element, returning `Element | undefined`.

### Object Types
You can describe the shape of an object inline:
```ts
let user: { id: number; name: string; isActive: boolean } = {
  id: 1,
  name: "Alice",
  isActive: true,
};
```
If you forget `name` or add an unexpected property like `salary`, TypeScript alerts you immediately.

### Optional Properties (`?`)
If a property isn't guaranteed to exist on every object, mark it with `?`:
```ts
let user: { id: number; name: string; email?: string };
```

### Introduction to `type` and `interface`
Instead of repeating complex inline object types, you can define a reusable name:

**Using `type`:**
```ts
type Product = {
  id: number;
  title: string;
  price: number;
  category?: string;
};
```

**Using `interface`:**
```ts
interface Student {
  id: number;
  name: string;
  grade: number;
}
```
Both let you define object shapes cleanly. We will dive deeper into their differences on Day 5!

---

## 4. Code Examples

See runnable code in [examples/arrays-objects-demo.ts](./examples/arrays-objects-demo.ts):

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

// 3. Using map to extract titles
const bookTitles: string[] = library.map((book) => book.title);

// 4. Using filter to find books published after 2000
const modernBooks: Book[] = library.filter((book) => book.year >= 2000);

// 5. Using find to look up a book by ID
const bookFound: Book | undefined = library.find((book) => book.id === 2);

console.log("All Titles:", bookTitles);
console.log("Modern Books count:", modernBooks.length);
console.log("Book with ID 2:", bookFound?.title ?? "Not found");
```

---

## 5. Code Explanation

- `type Book = { ... }`: Defines a reusable contract for what a `Book` object looks like.
- `library: Book[]`: Declares that `library` is an array containing only `Book` objects.
- `library.map((book) => book.title)`: TypeScript infers that `book` is of type `Book`, and that `book.title` is a `string`, making `bookTitles` a `string[]`.
- `library.find(...)`: Notice the return type is `Book | undefined`. Because a matching book might not exist, TypeScript requires you to safely handle the possibility of `undefined` using optional chaining (`bookFound?.title`).

---

## 6. Common Mistakes

### Mistake 1: Missing a required property in an object
```ts
type Car = { make: string; model: string; year: number };
const myCar: Car = { make: "Toyota", model: "Corolla" }; // ❌ Property 'year' is missing in type...
```
**Fix:** Supply all required properties, or mark optional properties with `?`:
```ts
const myCar: Car = { make: "Toyota", model: "Corolla", year: 2022 }; // ✅
```

### Mistake 2: Accessing properties on a `find()` result without checking for `undefined`
```ts
const found = library.find((b) => b.id === 99);
console.log(found.title); // ❌ 'found' is possibly 'undefined'.
```
**Fix:** Use optional chaining (`found?.title`) or an `if (found)` check:
```ts
if (found) {
  console.log(found.title); // ✅ Guaranteed to exist here
}
```

---

## 7. Exercises

Practise in your own file or [examples/exercises.ts](./examples/exercises.ts):

1. **Exercise 1 (Array of Names):** Create an array of 5 student names (`string[]`). Print the first, third, and last name.
2. **Exercise 2 (Filtering Numbers):** Given `const numbers: number[] = [4, 12, 8, 25, 3, 19, 10, 42]`, use `.filter()` to get all numbers greater than 10.
3. **Exercise 3 (Typed Student Object):** Create a typed object representing a student with properties `id: number`, `name: string`, `age: number`, and `major: string`. Print the student's details.
4. **Exercise 4 (Product Type):** Create a `Product` type alias with `id`, `name`, `price`, and optional `category`. Define an array of 3 products.
5. **Exercise 5 (Transforming Objects with Map):** Using your array of products from Exercise 4, use `.map()` to create an array of formatted strings: `"Product: [Name] - $[Price]"`, and print each one.

---

## 8. Hints

- **Hint for Ex 1:** The last element of an array can be accessed with `names[names.length - 1]`.
- **Hint for Ex 2:** The callback function for filter is `(num) => num > 10`.
- **Hint for Ex 3:** You can define an inline type or an interface.
- **Hint for Ex 4:** Define `type Product = { ... }` first, then `const products: Product[] = [...]`.
- **Hint for Ex 5:** `products.map((p) => `${p.name} - $${p.price}`)`.

---

## 9. Solutions

Full solutions and explanations are available in [solutions.md](./solutions.md).

---

## 10. Completion Checklist

- [ ] Read through all Day 4 explanations.
- [ ] Understand array methods (`map`, `filter`, `find`) in TypeScript.
- [ ] Define object types and optional properties.
- [ ] Understand basic `type` and `interface` syntax.
- [ ] Run `examples/arrays-objects-demo.ts`.
- [ ] Complete Exercises 1 through 5.
- [ ] Check answers against [solutions.md](./solutions.md).
