# Solutions — Day 4: Arrays and Objects

Complete solutions and explanations for Day 4 exercises.

---

## Exercise 1: Array of Five Student Names

```ts
const studentNames: string[] = ["Alice", "Bob", "Charlie", "Diana", "Ethan"];

console.log("First student:", studentNames[0]);
console.log("Third student:", studentNames[2]);
console.log("Last student:", studentNames[studentNames.length - 1]);
```

### Explanation:
- Arrays are zero-indexed (`0` is the first element).
- `studentNames.length - 1` safely gives the last index.

---

## Exercise 2: Filter Numbers Greater Than 10

```ts
const numbers: number[] = [4, 12, 8, 25, 3, 19, 10, 42];

const filtered: number[] = numbers.filter((num: number) => num > 10);

console.log("Numbers > 10:", filtered); // [12, 25, 19, 42]
```

### Explanation:
- `.filter()` executes the callback for each number in the array.
- Only elements where `num > 10` evaluates to `true` are included in the new array.
- Notice that `10` itself is excluded because the condition is strictly greater than (`>`).

---

## Exercise 3: Typed Student Object

```ts
const student: { id: number; name: string; age: number; major: string } = {
  id: 101,
  name: "Sophia Martinez",
  age: 20,
  major: "Computer Science",
};

console.log(`Student ID: ${student.id}`);
console.log(`Name: ${student.name}`);
console.log(`Age: ${student.age}`);
console.log(`Major: ${student.major}`);
```

### Explanation:
- Inline object typing allows defining exact property names and types.
- If you accidentally misspell `major` as `majr`, the compiler immediately catches the typo.

---

## Exercise 4: Product Type & Array of Products

```ts
type Product = {
  id: number;
  name: string;
  price: number;
  category?: string; // Optional property
};

const products: Product[] = [
  { id: 1, name: "Mechanical Keyboard", price: 89.99, category: "Peripherals" },
  { id: 2, name: "USB-C Hub", price: 34.50, category: "Accessories" },
  { id: 3, name: "Desk Pad", price: 19.99 }, // category is omitted
];

console.log(`Total Products: ${products.length}`);
```

### Explanation:
- `type Product = { ... }` creates a single reusable shape.
- `products: Product[]` enforces that every element conforms to the `Product` contract.
- The `category?: string` property can be omitted safely without compiler errors.

---

## Exercise 5: Using `map()` with Objects

```ts
type Student = {
  id: number;
  name: string;
  grade: number;
};

const students: Student[] = [
  { id: 1, name: "Liam", grade: 88 },
  { id: 2, name: "Olivia", grade: 94 },
  { id: 3, name: "Noah", grade: 76 },
];

// Extract and format student details
const studentNames: string[] = students.map((s) => `Student: ${s.name} (Grade: ${s.grade})`);

console.log("Student Summaries:");
studentNames.forEach((entry) => console.log(entry));
```

### Explanation:
- `.map()` transforms an array of `Student` objects into an array of `string` elements.
- TypeScript automatically infers the parameter `s` as `Student` and the resulting array as `string[]`.
